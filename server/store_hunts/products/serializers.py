from rest_framework import serializers

from .models import (
    Brand,
    Category,
    Image,
    Product,
    ProductItem,
    Variation,
    VariationOption,
)


class BrandSerializer(serializers.ModelSerializer):
    brand = serializers.CharField(source="name")

    class Meta:
        model = Brand
        fields = ("brand",)


class CategorySerializer(serializers.ModelSerializer):
    category = serializers.CharField(source="name")
    sub_category = serializers.ListSerializer(
        child=serializers.PrimaryKeyRelatedField(queryset=Category.objects.all()),
        allow_empty=True,
    )

    class Meta:
        model = Category
        fields = ("category", "sub_category")


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ("image",)


# class VariationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Variation
#         fields = ("attr_name",)


# class VariationOptionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = VariationOption
#         fields = ("attr_value",)


class ProductItemSerializer(serializers.ModelSerializer):
    quantity = serializers.IntegerField(source="qty_in_stock")

    class Meta:
        model = ProductItem
        fields = ("quantity", "price")


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
    brand = serializers.CharField(max_length=50)
    quantity = serializers.IntegerField(min_value=0)
    price = serializers.DecimalField(max_digits=6, decimal_places=2)

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
        )
