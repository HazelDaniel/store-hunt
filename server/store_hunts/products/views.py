from accounts.utils import load_image
from django.conf import settings
from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework import generics, status
from rest_framework.mixins import CreateModelMixin
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework.request import HttpRequest
from rest_framework.response import Response

from .models import (
    Brand,
    Category,
    Colour,
    Image,
    Product,
    ProductItem,
    ProductVariation,
    Size,
)
from .permissions import SellerPermissionMixin
from .serializers import (
    DestroyProductSerializer,
    ListAllProductSerializer,
    ProductCreateSerializer,
    ProductVariationSerializer,
)
from accounts.utils import create_slug

# Create your views here.


class CreateProductAPIView(generics.CreateAPIView, SellerPermissionMixin):
    serializer_class = ProductCreateSerializer
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request: HttpRequest, *args: list, **kwargs: dict) -> Response:
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.validated_data
            brand = data.pop("brand")
            sub_category = data.pop("sub_category")
            uploaded_images = data.pop("upload_image")
            size = data.pop("size", None)
            section = data.pop("section")
            colour = data.pop("colour")
            product_items = {
                "price": data.pop("price"),
                "qty_in_stock": data.pop("quantity"),
            }
            slug_title = create_slug(data.get("title"))
            # create the parent key for the self reference
            parent_category, _ = Category.objects.get_or_create(name=section)
            # handle self referencing relationship  in category
            for cat in sub_category:
                child_category, _ = Category.objects.get_or_create(
                    name=cat.lower(), parent=parent_category
                )
                parent_category = child_category

            brand, _ = Brand.objects.get_or_create(name=brand)
            product = Product.objects.create(
                **data,
                category=parent_category,
                brand=brand,
                seller=request.user.seller,
                slug_title=slug_title
            )
            colour, _ = Colour.objects.get_or_create(name=colour)
            product_item = ProductItem.objects.create(**product_items, product=product)
            # store product attribute
            # store image file pth

            for image in uploaded_images:
                if settings.DEBUG:
                    image = load_image(image)
                Image.objects.create(image=image, product_item=product_item)

            if size:
                size = size.upper()
                size, _ = Size.objects.get_or_create(
                    name=size, category=parent_category
                )
            product_variation = ProductVariation.objects.create(
                colour=colour, size=size, product_item=product_item
            )
            return Response(
                {"status_code": 201, "detail": "product created successfully"},
                status=status.HTTP_200_OK,
            )
        return Response(
            {"status_code": 400, "detail": "product unsuccessfully"},
            status=status.HTTP_400_BAD_REQUEST,
        )


class ListAllProductAPIView(generics.ListAPIView, SellerPermissionMixin):
    serializer_class = ListAllProductSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        current_seller = self.request.user.seller
        return Product.objects.filter(seller=current_seller)


class UpdateProductAPIView(generics.UpdateAPIView, SellerPermissionMixin):
    serializer_class = ProductCreateSerializer
    parser_classes = [FormParser, MultiPartParser, JSONParser]
    queryset = Product.objects.all()
    lookup_field = "hash_id"

    def update(self, request, hash_id, *args, **kwargs):
        instance = self.get_object()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.validated_data
            instance.name = data.get("title")
            instance.description = data.get("description")
            instance.slug_item = create_slug(data.get("title"))
            # product item
            product_item = get_object_or_404(ProductItem, product=instance)
            product_item.price = data["price"]
            product_item.qty_in_stock = data["quantity"]

            # brand b_c staand for brand created
            brand, b_c = Brand.objects.get_or_create(name=data["brand"])
            instance.brand = brand

            # image
            product_image = get_list_or_404(Image, product_item=product_item)
            for i in range(len(product_image)):
                product_image[i].image = data["upload_image"][i]
                product_image[i].save()

            # TODO category
            parent_category, ca_c = Category.objects.get_or_create(
                name=data.get("section")
            )
            sub_category = data["sub_category"]
            for cat in sub_category:
                child_category, _ = Category.objects.get_or_create(
                    name=cat, parent=parent_category
                )
                parent_category = child_category
            instance.category = parent_category
            # colour c_c stand for colour created
            colour, c_c = Colour.objects.get_or_create(name=data["colour"])
            # size s_c stand for size created
            size = data.get("size")
            if size:
                size, s_c = Size.objects.get_or_create(
                    name=size.upper().upper(), category=parent_category
                )
            p_var = get_object_or_404(ProductVariation, product_item=product_item)
            p_var.colour = colour
            p_var.size = size
            p_var.save()
            product_item.save()
            instance.save()
        return Response(
            {"status": 200, "detail": "Product updated successfully"},
            status=status.HTTP_200_OK,
        )

    def get_queryset(self):
        seller = self.request.user.seller
        return Product.objects.filter(seller=seller)


class RetrieveProductAPIView(generics.RetrieveAPIView, SellerPermissionMixin):
    serializer_class = ListAllProductSerializer
    queryset = Product.objects.all()
    lookup_field = "hash_id"

    def get_queryset(self):
        seller = self.request.user.seller
        return Product.objects.filter(seller=seller)


class DestroyProductAPIView(generics.DestroyAPIView, SellerPermissionMixin):
    serializer_class = DestroyProductSerializer
    queryset = Product.objects.all()
    lookup_field = "hash_id"

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        product_item = get_object_or_404(ProductItem, product=instance)
        self.perform_destroy(instance)
        self.perform_destroy(product_item)

        return Response(status=status.HTTP_204_NO_CONTENT)

    def get_queryset(self):
        seller = self.request.user.seller
        return Product.objects.filter(seller=seller)


class CreateProductVariationAPIView(
    generics.CreateAPIView, CreateModelMixin, SellerPermissionMixin
):
    serializer_class = ProductVariationSerializer
    queryset = Product.objects.all()
    lookup_field = "hash_id"

    def post(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.serializer_class(instance, data=request.data)
        if serializer.is_valid(raise_exception=True):
            create = self.perform_create(serializer)
            return Response(
                {"status": 201, "detail": "product variation created successfully"},
                status=status.HTTP_201_CREATED,
            )

        return Response(
            {"status": 400, "detail": "product variation could not be created"},
            status=status.HTTP_201_CREATED,
        )

    def perform_create(self, serializer):
        data = serializer.validated_data
        instance = serializer.instance
        size = data.get("size")
        colour = data.get("colour")
        upload_image = data.get("upload_image") or []
        product_item = ProductItem.objects.create(
            price=data.get("price"), qty_in_stock=data.get("quantity"), product=instance
        )

        if colour:
            colour, _ = Colour.objects.get_or_create(name=colour)
        if size:
            size = size.upper()
            size, _ = Size.objects.get_or_create(name=size, category=instance.category)
        ProductVariation.objects.create(
            size=size, colour=colour, product_item=product_item
        )

        for image in upload_image:
            if settings.DEBUG:
                image = load_image(image)
            Image.objects.create(image=image, product_item=product_item)

        instance.has_variant = True
        instance.save()

    def get_queryset(self):
        seller = self.request.user.seller
        return Product.objects.filter(seller=seller)
