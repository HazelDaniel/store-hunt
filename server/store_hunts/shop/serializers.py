import base64

from django.db.models import Avg
from products.models import Category, Product, ProductItem
from rest_framework import serializers

from .models import Rating, Review


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


# class ListProductSerializer(serializers.Serializer):
#     id = serializers.SlugField(source="hash_id")
#     # name = serializers.CharField(read_only=True)
#     avg_rating = serializers.SerializerMethodField(read_only=True)
#     price = serializers.SerializerMethodField(read_only=True)
#     image = serializers.SerializerMethodField(read_only=True)

#     class Meta:
#         model = Product
#         field = ["id", "title",'slug_title', "image", "avg_rating", "price"]

#     def get_avg_rating(self, obj):
#         rating = Rating.objects.filter(product=obj).aggregate(avg_rating=Avg("rating"))[
#             "avg_rating"
#         ]

#         # if not rating:
#         #     return 0
#         return rating

#     def get_price(self, obj):
#         price = obj.product_detail.first().price
#         return price

#     def get_image(self, obj):
#         product_image = obj.product_detail.first().product_image.first()
#         image = product_image.image.url
#         return image


class ListProductSerializer(serializers.ModelSerializer):
    id = serializers.SlugField(source="hash_id")
    avg_rating = serializers.SerializerMethodField(read_only=True)
    price = serializers.SerializerMethodField(read_only=True)
    image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product
        fields = ["id", "title", "slug_title","image", "avg_rating", "price"]

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


class MensProductSerializer(ListProductSerializer):
    pass


class WomenProductSerializer(ListProductSerializer):
    pass


class KidsProductSerializer(ListProductSerializer):
    pass


class UnisexProductSerializer(ListProductSerializer):
    pass



class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('title',  'description', 'price', 'total_rating', 'image')