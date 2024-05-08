from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField

from .models import (
    Brand,
    Category,
    Product,
    ProductItem,
    Size,
    Colour,
    ProductVariation,
)


# serializer for creating product and updating product
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
    brand = serializers.CharField(max_length=50, required=True)
    quantity = serializers.IntegerField(min_value=0, required=True)
    price = serializers.DecimalField(max_digits=10, decimal_places=2, required=True)
    size = serializers.CharField(max_length=20)
    colour = serializers.CharField(max_length=20)
    sex = serializers.CharField(max_length=7, help_text='choose either male or female')
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
            "size",
            "colour",
        )


# serializers for listing and retrieving product for sellers
class BrandSerializer(serializers.ModelSerializer):
    brand_name = serializers.CharField(source="name")

    class Meta:
        model = Brand
        fields = ("id", "brand_name")


class ColourSerializer(serializers.ModelSerializer):
    colour_name = serializers.CharField(source="name")

    class Meta:
        model = Colour
        fields = ("colour_name",)


class SizeSerializer(serializers.ModelSerializer):
    size_value = serializers.CharField(source="name")

    class Meta:
        model = Size
        fields = ("size_value",)


class ProductAttributeSerializer(serializers.ModelSerializer):
    size = SizeSerializer(many=True, read_only=True)
    colour = ColourSerializer(many=True, read_only=True)

    class Meta:
        model = ProductVariation
        fields = ("size", "colour")


class CategorySerializer(serializers.ModelSerializer):
    child = RecursiveField(many=True)
    category_name = serializers.CharField(source="name")

    class Meta:
        model = Category
        fields = ["id", "category_name", "child"]


class ImageSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    image = serializers.ImageField()


class ProductItemSerializer(serializers.ModelSerializer):
    quantity = serializers.IntegerField(source="qty_in_stock")
    image = ImageSerializer(source="product_image", read_only=True, many=True)
    product_attribute = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = ProductItem
        fields = ["id", "price", "quantity", "product_attribute", "image"]

    def get_product_attribute(self, obj):
        variation = obj.variation.first()
        if variation:
            return {"size": variation.size.name, "colour": variation.colour.name}
        else:
            return {'size': None, 'colour': None}


class ListAllProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    product_detail = ProductItemSerializer(read_only=True, many=True)
    product_name = serializers.CharField(source="name")

    class Meta:
        model = Product
        fields = (
            "id",
            "product_name",
            "description",
            "category",
            "brand",
            "product_detail",
        )


class DestroyProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        field = '__all__'

        
class ProductSerializer(serializers.ModelSerializer):
    ...