from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField

from .models import (
    Brand,
    Category,
    Image,
    Product,
    ProductItem,
    Variation,
    VariationOption,
)


class ProductCreateSerializer(serializers.ModelSerializer):
    category = serializers.CharField(max_length=50)
    sub_category = serializers.ListField(
        child=serializers.CharField(max_length=50), required=False
    )
    upload_image = serializers.ListField(
        child=serializers.ImageField(
            max_length=10000, allow_empty_file=False, use_url=False
        ),
        write_only=True,
        required=True,
    )  # For accepting file uploads
    # product_item = ProductItemSerializer()
    brand = serializers.CharField(max_length=50, required=False)
    quantity = serializers.IntegerField(min_value=0)
    price = serializers.DecimalField(max_digits=6, decimal_places=2)
    variation = serializers.CharField(max_length=20, required=False)
    variation_value = serializers.CharField(max_length=20, required=False)

    class Meta:
        model = Product
        fields = (
            "category",
            "sub_category",
            "name",
            "upload_image",  # Changed to accept file upload
            "description",
            "brand",
            "quantity",
            "price",
            "variation",
            "variation_value",
        )


class BrandSerializer(serializers.ModelSerializer):
    brand_name = serializers.CharField(source="name")

    class Meta:
        model = Brand
        fields = ("id", "brand_name")


class CategorySerializer(serializers.ModelSerializer):
    child = RecursiveField(many=True)
    category_name = serializers.CharField(source="name")

    class Meta:
        model = Category
        fields = ["id", "category_name", "child"]


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ["id", "image"]




class VariationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Variation
        fields = ["id", "attr_name"]

class VariationOptionSerializer(serializers.ModelSerializer):
    variation = VariationSerializer(read_only=True)
    class Meta:
        model = VariationOption
        fields = ['variation', "id", "attr_value"]

class ProductItemSerializer(serializers.ModelSerializer):
    quantity = serializers.IntegerField(source="qty_in_stock")
    product_image = ImageSerializer(read_only=True, many=True)
    variation = VariationOptionSerializer(read_only=True, many=True)

    class Meta:
        model = ProductItem
        fields = ["id", "price", "quantity", "variation", "product_image"]


class ListAllProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    product_item = ProductItemSerializer(read_only=True, many=True)
    product_name = serializers.CharField(source="name")

    class Meta:
        model = Product
        fields = (
            "id",
            "product_name",
            "description",
            "category",
            "brand",
            "product_item",
        )


# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = '__all__'

# class ListAllProductSerializer(serializers.ModelSerializer):
#     product = ProductSerializer(read_only=True, many=True)
#     child = RecursiveField(many=True)
#     class Meta:
#         model = Category
#         fields = ['id', 'name', 'product', 'child']
