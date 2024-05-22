from django.shortcuts import render
from products.models import Product, ProductItem
from rest_framework import serializers

from .models import Cart, CartItem

# Create your views here.


class ProductItemSerializer(serializers.ModelSerializer):
    title = serializers.SerializerMethodField()
    price = serializers.IntegerField()
    id = serializers.SlugField(source="hash_id")

    class Meta:
        model = ProductItem
        fields = ("id", "title", "price")

    def get_title(self, obj):
        title = obj.product.title
        return title


class CartSerializer(serializers.ModelSerializer):
    product_item_id = serializers.SlugField(write_only=True)
    product_item = ProductItemSerializer(read_only=True)
    id = serializers.SlugField(source="hash_id")

    class Meta:
        model = CartItem
        fields = ("id", "product_item_id", "product_item", "quantity")
