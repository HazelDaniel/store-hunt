from rest_framework import serializers
from .models import Review
from products.models import Product, Category, ProductItem


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
        return{
            'id': instance.hash_id,
            'text': instance.text,
            'rating': rating
        }
    id = serializers.SlugField(source='hash_id')
    text = serializers.CharField()
    

# class RatingSerializer(serializers.Serializer):
#     id = serializers.IntegerField()
    

class ListReviewRatingSerializer(serializers.ModelSerializer):
    review_rating = ReviewSerializer(source='product_review', many=True)
    id = serializers.SlugField(source='hash_id')
    class Meta:
        model = Product
        fields = ['id', 'review_rating']
    


class ListProductSerializer(serializers.Serializer):
    pass