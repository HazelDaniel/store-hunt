from rest_framework import serializers
from .models import Review
from products.models import Product, Category, ProductItem


class CreateReviewRatingSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    rating = serializers.IntegerField()
    text = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)

    # class Meta:
    #     model = Review
    #     fields = ("id", "text", "rating","user", "product", "created_at")
    #     extra_kwargs = {
    #         "id": {"read_only": True},
    #         "created_at": {"read_only": True},
    #         "product": {"read_only": True},
    #         "user": {"read_only": True},
    #     }

    def validate_rating(self, value):
        if value < 0:
            raise serializers.ValidationError("rating cannot be less than 0")
        elif value > 5:
            raise serializers.ValidationError("rating cannot be greater than 5")
        
        return value