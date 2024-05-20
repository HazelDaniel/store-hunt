from django.db.models import Avg
from rest_framework.reverse import reverse
from products.models import Brand, Category, Product, ProductItem
from rest_framework import serializers
from rest_framework_recursive.fields import RecursiveField
from .models import Rating, Review, WishList


def get_all_subcategories(category):
    subcategories = set()
    categories_to_check = [category]

    while categories_to_check:
        current_category = categories_to_check.pop()
        subcategories.add(current_category)
        children = current_category.child.all()
        for child in children:
            if child not in subcategories:
                categories_to_check.append(child)

    return subcategories


def get_products_by_top_level_category(category_name):
    try:
        # Get the top-level category
        top_level_category = Category.objects.filter(name=category_name).first()
        # Get all subcategories of the top-level category
        subcategories = get_all_subcategories(top_level_category)
        # Filter products that belong to any of these categories
        products = Product.objects.filter(category__in=subcategories)
        return products
    except Category.DoesNotExist:
        return (
            Product.objects.none()
        )  # Return an empty queryset if the category does not exist


class CreateReviewRatingSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    rating = serializers.IntegerField()
    text = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)

    def validate_rating(self, value):
        if value < 0:
            raise serializers.ValidationError("rating cannot be less than 0")
        elif value > 5:
            raise serializers.ValidationError("rating cannot be greater than 5")

        return value


class RatingSerializer(serializers.Serializer):
    rating = serializers.IntegerField()


class ListReviewRatingSerializer(serializers.ModelSerializer):
    rating = serializers.SerializerMethodField()
    product_id = serializers.SlugField(source="product.hash_id")
    id = serializers.SlugField(source="hash_id")

    class Meta:
        model = Review
        fields = ["id", "text", "rating", 'product_id']

    def get_rating(self, obj):
        rating = obj.rating
        if rating:
            return rating.get().rating
        return None


class EditReviewSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source="hash_id", read_only=True)
    rating = serializers.IntegerField()
    class Meta:
        model = Review
        fields = ("id", "text", "rating")

    def validate_rating(self, value):
        if value < 0:
            raise serializers.ValidationError("rating cannot be less than 0")
        elif value > 5:
            raise serializers.ValidationError("rating cannot be greater than 5")
        return value


class RemoveReviewRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class ListProductSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source="hash_id")
    title = serializers.CharField(read_only=True)
    avg_rating = serializers.SerializerMethodField(read_only=True)
    price = serializers.SerializerMethodField(read_only=True)
    image = serializers.SerializerMethodField(read_only=True)
    url = serializers.HyperlinkedIdentityField(
        view_name="product-detail", lookup_field="slug_title", read_only=True
    )

    class Meta:
        model = Product
        fields = ["id", "title", "image", "avg_rating", "price", "url"]

    def to_representation(self, instance):
        print(instance)
        return super().to_representation(instance)

    def get_avg_rating(self, obj):
        rating = Rating.objects.filter(product=obj).aggregate(avg_rating=Avg("rating"))[
            "avg_rating"
        ]
        print(rating)
        return rating or 0

    def get_price(self, obj):
        price = obj.product_detail.first().price
        print(price)
        return price

    def get_image(self, obj):
        product_image = obj.product_detail.first().product_image.first()
        image = product_image.image.url
        print(image)
        return image


class MensProductSerializer(serializers.ModelSerializer):
    # child = RecursiveField(many=True)
    id = serializers.SlugField(source="hash_id")
    product = serializers.SerializerMethodField()
    product_count = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ("id", "name", "product", "product_count")

    def get_product(self, obj):
        products = get_products_by_top_level_category(obj.name)
        request = self.context.get("request")
        return ListProductSerializer(
            products, many=True, context={"request": request}
        ).data

    def get_product_count(self, obj):
        products = get_products_by_top_level_category(obj)
        return products.count()


class WomenProductSerializer(MensProductSerializer):
    pass
    # id = serializers.SlugField(source="hash_id")
    # product = serializers.SerializerMethodField()
    # product_count = serializers.SerializerMethodField()

    # class Meta:
    #     model = Category
    #     fields = ("id", "name", "product", "product_count")

    # def get_product(self, obj):
    #     products = get_products_by_top_level_category(obj.name)
    #     return ListProductSerializer(
    #         products, many=True, context={"request": self.request}
    #     ).data

    # def get_product_count(self, obj):
    #     products = get_products_by_top_level_category(obj)
    #     return products.count()


class KidsProductSerializer(MensProductSerializer):
    pass
    # id = serializers.SlugField(source="hash_id")
    # product = serializers.SerializerMethodField()
    # product_count = serializers.SerializerMethodField()

    # class Meta:
    #     model = Category
    #     fields = ("id", "name", "product", "product_count")

    # def get_product(self, obj):
    #     products = get_products_by_top_level_category(obj.name)
    #     return ListProductSerializer(products, many=True).data

    # def get_product_count(self, obj):
    #     products = get_products_by_top_level_category(obj)
    #     return products.count()


class BrandSerializer(serializers.ModelSerializer):
    # id = serializers.SlugField(source="hash_id")
    brand = serializers.CharField(source="name")

    class Meta:
        model = Brand
        fields = ("brand",)


class CategorySerializer(serializers.ModelSerializer):
    # id = serializers.SlugField(source="hash_id")
    category = serializers.CharField(source="name")

    class Meta:
        model = Category
        fields = ["category"]


class ImageSerializer(serializers.Serializer):
    # id = serializers.SlugField(source="hash_id")
    image = serializers.ImageField()


class ProductItemSerializer(serializers.ModelSerializer):
    # id = serializers.SlugField(source="hash_id")
    quantity = serializers.IntegerField(source="qty_in_stock")
    image = ImageSerializer(source="product_image", read_only=True, many=True)
    product_attribute = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = ProductItem
        fields = ["price", "quantity", "product_attribute", "image"]

    def get_product_attribute(self, obj):
        variations = obj.variation.all()

        for variation in variations:
            if variation.size and variation.colour:
                return {"size": variation.size.name, "colour": variation.colour.name}
            elif variation.colour:
                return {"size": None, "colour": variation.colour.name}
        return {"size": None, "colour": None}


class ProductDetailSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source="hash_id")
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    product_detail = ProductItemSerializer(read_only=True, many=True)
    avg_rating = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = (
            "id",
            "title",
            "avg_rating",
            "description",
            "has_variant",
            "category",
            "brand",
            "product_detail",
        )

    def get_avg_rating(self, obj):
        rating = Rating.objects.filter(product=obj).aggregate(avg_rating=Avg("rating"))[
            "avg_rating"
        ]
        return rating


class WishListSerializer(serializers.ModelSerializer):
    product_id = serializers.SlugField(source="hash_id", read_only=True)

    class Meta:
        model = WishList
        fields = ("product_id",)


class ListProdSerializer(serializers.Serializer):
    title = serializers.CharField()
    price = serializers.SerializerMethodField()

    class Meta:
        model = Product

    def get_price(self, obj):
        price = obj.product_detail.first().price
        return price


class ListWishSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source="hash_id")
    product = ListProdSerializer(read_only=True)

    class Meta:
        model = WishList
        fields = ("id", "product")


class RemoveWishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = "__all__"
