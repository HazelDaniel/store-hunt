import base64
from rest_framework_recursive.fields import RecursiveField
from django.db.models import Avg
from products.models import Category, Product, ProductItem
from rest_framework import serializers

from .models import Rating, Review



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
        return Product.objects.none()  # Return an empty queryset if the category does not exist


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


class ReviewSerializer(serializers.Serializer):

    def to_representation(self, instance):
        rating = None
        rating_review = instance.rating_review.get()
        if rating_review:
            rating = rating_review.rating
        return {"id": instance.hash_id, "text": instance.text, "rating": rating}

    id = serializers.SlugField(source="hash_id")
    text = serializers.CharField()


# class RatingSerializer(serializers.Serializer):
#     id = serializers.IntegerField()


class ListReviewRatingSerializer(serializers.ModelSerializer):
    review_rating = ReviewSerializer(source="product_review", many=True)
    id = serializers.SlugField(source="hash_id")

    class Meta:
        model = Product
        fields = ["id", "review_rating"]




class ListProductSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source="hash_id")
    title = serializers.CharField(read_only=True)
    avg_rating = serializers.SerializerMethodField(read_only=True)
    price = serializers.SerializerMethodField(read_only=True)
    image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = ["id", "title","image", "avg_rating", "price"]

    def get_avg_rating(self, obj):
        rating = Rating.objects.filter(product=obj).aggregate(avg_rating=Avg("rating"))[
            "avg_rating"
        ]

        # if not rating:
        #     return 0
        return rating

    def get_price(self, obj):
        price = obj.product_detail.first().price
        return price

    def get_image(self, obj):
        product_image = obj.product_detail.first().product_image.first()
        image = product_image.image.url
        return image





class MensProductSerializer(serializers.ModelSerializer):
    # child = RecursiveField(many=True)
    id = serializers.SlugField(source='hash_id')
    product = serializers.SerializerMethodField()
    product_count = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ('id','name', 'product', 'product_count') 
   
    def get_product(self, obj):
        products = get_products_by_top_level_category(obj.name)
        return ListProductSerializer(products, many=True).data 
    
    def get_product_count(self, obj):
        products  = get_products_by_top_level_category(obj)
        return products.count()
    
    


class WomenProductSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source='hash_id')
    product = serializers.SerializerMethodField()
    product_count = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ('id','name', 'product', 'product_count') 

    def get_product(self, obj):
        products = get_products_by_top_level_category(obj.name)
        return ListProductSerializer(products, many=True).data 

    def get_product_count(self, obj):
        products  = get_products_by_top_level_category(obj)
        return products.count()


class KidsProductSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source='hash_id')
    product = serializers.SerializerMethodField()
    product_count = serializers.SerializerMethodField()
    class Meta:
        model = Category
        fields = ('id','name', 'product', 'product_count') 
   
    def get_product(self, obj):
        products = get_products_by_top_level_category(obj.name)
        return ListProductSerializer(products, many=True).data 

    def get_product_count(self, obj):
        products  = get_products_by_top_level_category(obj)
        return products.count()

class UnisexProductSerializer(ListProductSerializer):
    pass



class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('title',  'description', 'price', 'total_rating', 'image')