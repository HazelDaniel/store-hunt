from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework import generics, status
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework.request import HttpRequest
from rest_framework.response import Response

from .models import (
    Brand,
    Category,
    Image,
    Product,
    ProductItem,
    Size,
    Colour,
    ProductVariation,
)
from .permissions import SellerPermissionMixin
from .serializers import ListAllProductSerializer, ProductCreateSerializer, DestroyProductSerializer

# Create your views here.


class CreateProductAPIView(generics.CreateAPIView, SellerPermissionMixin):
    serializer_class = ProductCreateSerializer
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request: HttpRequest, *args: list, **kwargs: dict) -> Response:
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            print(serializer.validated_data)
            data = serializer.validated_data
            brand = data.pop("brand")
            category = data.pop("category")
            sub_category = data.pop("sub_category")
            uploaded_images = data.pop("upload_image")
            size = data.pop("size")
            colour = data.pop("colour")
            product_items = {
                "price": data.pop("price"),
                "qty_in_stock": data.pop("quantity"),
            }

            # create the parent key for the self reference
            parent_category, _ = Category.objects.get_or_create(name=category)

            # handle self referencing relationship  in category
            for cat in sub_category:
                child_category, _ = Category.objects.get_or_create(
                    name=cat, parent=parent_category
                )
                parent_category = child_category

            brand, _ = Brand.objects.get_or_create(name=brand)
            product = Product.objects.create(
                **data,
                category=parent_category,
                brand=brand,
                seller=request.user.seller
            )
            colour, _ = Colour.objects.get_or_create(name=colour)
            product_item = ProductItem.objects.create(**product_items, product=product)
            # store product attribute
            # store image file pth
            for image in uploaded_images:
                Image.objects.create(image=image, product_item=product_item)

            size, _ = Size.objects.get_or_create(name=size, category=parent_category)
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

    # def get_serializer_context(self):
    #     context = super().get_serializer_context()
    #     context['request'] = self.request
    #     return context


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
    lookup_field = "id"

    def update(self, request, id):
        instance = self.get_object()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.validated_data
            instance.name = data["name"]
            instance.description = data["description"]
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
                product_image[i].image = data['upload_image'][i]
                product_image[i].save()

            # TODO category
            parent_category, ca_c = Category.objects.get_or_create(
                name=data["category"]
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
            size, s_c = Size.objects.get_or_create(name=data["size"], category=parent_category)
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
    lookup_field = 'id'

    def get_queryset(self):
        seller = self.request.user.seller
        return Product.objects.filter(seller=seller)
    
class DestroyProductAPIView(generics.DestroyAPIView, SellerPermissionMixin):
    serializer_class = DestroyProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'id'
   
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        product_item = get_object_or_404(ProductItem,product=instance)
        self.perform_destroy(instance)
        self.perform_destroy(product_item)
 
        return Response(status=status.HTTP_204_NO_CONTENT)
   
    def get_queryset(self):
        seller = self.request.user.seller
        return Product.objects.filter(seller=seller)