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
from .serializers import ListAllProductSerializer, ProductCreateSerializer

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
            product_item = ProductItem.objects.create(
                **product_items, product=product
            )
            # store product attribute
            # store image file pth
            for image in uploaded_images:
                Image.objects.create(image=image, product_item=product_item)

            size, _ = Size.objects.get_or_create(name=size, category=parent_category)
            product_variation = ProductVariation.objects.create(
                colour=colour, size=size, product_item=product_item
            )
            return Response(
                {"status": 201, "detail": "product created successfully"},
                status=status.HTTP_200_OK,
            )
        return Response(
            {"status": 400, "detail": "product unsuccessfully"},
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


