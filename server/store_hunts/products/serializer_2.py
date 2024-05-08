from rest_framework import serializers
from .models import Promotion, PromotionCategory, Category



class PromotionSerializer(serializers.ModelSerializer):
    ...
    
    
class CategorySerializer(serializers.ModelSerializer):
    ...