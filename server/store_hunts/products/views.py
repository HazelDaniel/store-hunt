from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.request import HttpRequest
from rest_framework.response import Response

from .models import (
    Brand,
    Category,
    Image,
    Product,
    ProductItem,
    ProductItemVariationOption,
    Variation,
    VariationOption,
)
from .permissions import IsSellerPermissions
from .serializers import ProductCreateSerializer

# Create your views here.


class CreateProductAPIView(generics.CreateAPIView):
    serializer_class = ProductCreateSerializer
    permission_classes = [IsSellerPermissions]

    def post(self, request: HttpRequest, *args: list, **kwargs: dict) -> Response:
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.validated_data
            brand = data.pop("brand")
            category = data.pop("category")
            sub_category = data.pop("sub_category")
            uploaded_images = data.pop("upload_image")
            product_items = {
                "price": data.pop("price"),
                "qty_in_stock": data.pop("quantity"),
            }
            brand, _ = Brand.objects.get_or_create(name=brand)
            parent_category, _ = Category.objects.get_or_create(name=category)

            # handle self referencing relationship  in category
            for cat in sub_category:
                child_category, _ = Category.objects.get_or_create(
                    name=cat, parent=parent_category
                )
                parent_category = child_category
            product = Product.objects.create(
                **data, category=parent_category, brand=brand, seller=request.user.seller
            )
            product_item = ProductItem.objects.create(**product_items, product=product)

            # store image file pth
            for image in uploaded_images:
                Image.objects.create(image=image, product_item=product_item)

            return Response(
                {"detail": "product created successfully"},
                status=status.HTTP_201_CREATED,
            )

    # def get_serializer_context(self):
    #     context = super().get_serializer_context()
    #     context['request'] = self.request
    #     return context
