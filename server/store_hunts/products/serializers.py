from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField

from .models import (
    Brand,
    Category,
    Colour,
    Product,
    ProductItem,
    ProductVariation,
    Size,
)


# serializer for creating product and updating product
class ProductCreateSerializer(serializers.ModelSerializer):
    sub_category = serializers.ListField(
        child=serializers.CharField(max_length=50), required=False
    )
    upload_image = serializers.ListField(
        # child=serializers.ImageField(
        #     max_length=10000, allow_empty_file=False, use_url=False
        # ),
        write_only=True,
        required=True,
    )  # For accepting file uploads
    brand = serializers.CharField(max_length=50, required=True)
    quantity = serializers.IntegerField(min_value=0, required=True)
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    size = serializers.CharField(max_length=10, required=False)
    colour = serializers.CharField(max_length=100)
    section = serializers.CharField(max_length=7, help_text="section where cloth should fall intoo")

    class Meta:
        model = Product
        fields = (
            "section",
            "sub_category",
            "title",
            "upload_image",  # Changed to accept file upload
            "description",
            "brand",
            "quantity",
            "price",
            "size",
            "colour",
        )

    def validate_section(self, value):
        section = ('men', 'women', 'kids')
        if value.lower() not in section:
            return serializers.ValidationError(
                "product category section should either be men women or kids"
            )
        return value.lower()


# serializers for listing and retrieving product for sellers
class BrandSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source="hash_id")
    brand_name = serializers.CharField(source="name")

    class Meta:
        model = Brand
        fields = ("id", "brand_name")


# class ProductVariationSerializer(serializers.ModelSerializer):
#     product_variation = serializers.SerializerMethodField()

#     class Meta:
#         model = ProductVariation
#         fields = "product_variation"


class CategorySerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source="hash_id")
    category_name = serializers.CharField(source="name")

    class Meta:
        model = Category
        fields = ["id", "category_name"]


class ImageSerializer(serializers.Serializer):
    id = serializers.SlugField(source="hash_id")
    image = serializers.ImageField()


class ProductItemSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source="hash_id")
    quantity = serializers.IntegerField(source="qty_in_stock")
    image = ImageSerializer(source="product_image", read_only=True, many=True)
    product_attribute = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = ProductItem
        fields = ["id", "price", "quantity", "product_attribute", "image"]

    def get_product_attribute(self, obj):
        variations = obj.variation.all()

        for variation in variations:
            if variation.size and variation.colour:
                return {"size": variation.size.name, "colour": variation.colour.name}
            elif variation.colour:
                return {"size": None, "colour": variation.colour.name}
        return {"size": None, "colour": None}


class ListAllProductSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source="hash_id")
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    product_detail = ProductItemSerializer(read_only=True, many=True)

    class Meta:
        model = Product
        fields = (
            "id",
            'title',
            'slug_title',
            "description",
            'has_variant',
            "category",
            "brand",
            "product_detail",
        )


class DestroyProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        field = "__all__"


class ProductVariationSerializer(serializers.ModelSerializer):
    colour = serializers.CharField(max_length=100, required=False)
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    quantity = serializers.IntegerField()
    size = serializers.CharField(max_length=10, required=False)
    upload_image = serializers.ListField(
        # child=serializers.ImageField(
        #     max_length=10000, allow_empty_file=False, use_url=False
        # ),
        required=False,
    )

    class Meta:
        model = Product
        fields = ("colour", "price", "quantity", "size", "upload_image")
