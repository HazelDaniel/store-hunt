import os

from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django_hashids import HashidsField
from products.models import Product

User = get_user_model()

# Create your models here.


class Review(models.Model):
    hash_id = HashidsField(
        real_field_name="id", salt=os.environ["HASHIDS"], min_length=10
    )
    text = models.TextField()
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_review"
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_review")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ["user", "product"]
        db_table = "review"


class Rating(models.Model):
    hash_id = HashidsField(
        real_field_name="id", salt=os.environ["HASHIDS"], min_length=10
    )
    rating = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(5)]
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_rating")
    product = models.OneToOneField(
        Product, on_delete=models.CASCADE, related_name="rating"
    )
    created_at = models.DateField(auto_now_add=True)
    review = models.ForeignKey(
        Review, on_delete=models.CASCADE, null=True, related_name="rating"
    )

    class Meta:
        unique_together = ("user", "product")
        db_table = "rating"


# class WishList(models.Model):
#     hash_id = HashidsField(
#         real_field_name="id", salt=os.environ["HASHIDS"], min_length=10
#     )
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     created_at = models.DateTimeField(auto_now_add=True)

#     class Meta:
#         db_table = "wish_list"


class WishList(models.Model):
    hash_id = HashidsField(
        real_field_name="id", salt=os.environ["HASHIDS"], min_length=10
    )
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)
    wisher = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("product", "wisher")
        db_table = "wish_list"
