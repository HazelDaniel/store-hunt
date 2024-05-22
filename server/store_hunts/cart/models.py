import os

from django.contrib.auth import get_user_model
from django.db import models
from django_hashids import HashidsField
from products.models import ProductItem

# Create your models here.

User = get_user_model()


class Cart(models.Model):
    hash_id = HashidsField(
        real_field_name="id", salt=os.environ["HASHIDS"], min_length=10
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_cart")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "cart"


class CartItem(models.Model):
    hash_id = HashidsField(
        real_field_name="id", salt=os.environ["HASHIDS"], min_length=10
    )
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product_item = models.ForeignKey(ProductItem, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "cart_item"
