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
    ProductItemVariationOption,
    Variation,
    VariationOption,
)
from .permissions import SellerPermissionMixin
from .serializers import (
    ListAllProductSerializer,
    ProductCreateSerializer,
    ProductItemSerializer,
)

# Create your views here.


class CreateProductAPIView(generics.CreateAPIView, SellerPermissionMixin):
    serializer_class = ProductCreateSerializer
    parser_classes = [MultiPartParser, FormParser, JSONParser]

    def post(self, request: HttpRequest, *args: list, **kwargs: dict) -> Response:
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            print(serializer.validated_data)
            data = serializer.validated_data
            brand = data.pop("brand", None)
            category = data.pop("category")
            sub_category = data.pop("sub_category")
            uploaded_images = data.pop("upload_image")
            var_name = data.pop("variation", None)
            var_value = data.pop("variation_value", None)
            product_items = {
                "price": data.pop("price"),
                "qty_in_stock": data.pop("quantity"),
            }

            parent_category, _ = Category.objects.get_or_create(name=category)

            # handle self referencing relationship  in category
            for cat in sub_category:
                child_category, _ = Category.objects.get_or_create(
                    name=cat, parent=parent_category
                )
                parent_category = child_category

            if not brand:
                # brand, _ = Brand.objects.get_or_create(name=brand)
                product = Product.objects.create(
                    **data,
                    category=parent_category,
                    seller=request.user.seller
                )
                product_item = ProductItem.objects.create(**product_items, product=product)
            else:
                product = Product.objects.create(
                    **data, category=parent_category, seller=request.user.seller
                )
                product_item = ProductItem.objects.create(**product_items, product=product)

            # store image file pth
            for image in uploaded_images:
                Image.objects.create(image=image, product_item=product_item)

            if var_name and var_value:
                variation, _ = Variation.objects.get_or_create(
                    attr_name=var_name, category=parent_category
                )
                variation_opt, _ = VariationOption.objects.get_or_create(
                    attr_value=var_value, variation=variation
                )

                product_item_variation = ProductItemVariationOption(
                    variation_option=variation_opt, product_item=product_item
                )
                product_item_variation.save()

            return Response(
                {"detail": "product created successfully"},
                status=status.HTTP_201_CREATED,
            )

    # def get_serializer_context(self):
    #     context = super().get_serializer_context()
    #     context['request'] = self.request
    #     return context


class ListAllProductAPIView(generics.ListAPIView, SellerPermissionMixin):
    serializer_class = ListAllProductSerializer
    queryset = Product.objects.all()
