import os

from accounts.models import Sellers
from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.

User = get_user_model()

class Brand(models.Model):
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        db_table = "brand"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    category = models.ForeignKey(
        "Category", on_delete=models.PROTECT, related_name="product_category"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    brand = models.ForeignKey(
        Brand, on_delete=models.PROTECT, related_name="product_brand"
    )
    seller = models.ForeignKey(Sellers, on_delete=models.CASCADE)

    class Meta:
        ordering = ["-created_at"]
        db_table = "product"

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)
    parent = models.ForeignKey(
        "Category",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="child",
    )
    promotion = models.ManyToManyField(
        "Promotion", through="PromotionCategory", related_name="promotion_category"
    )

    class Meta:
        db_table = "category"

    def __str__(self):
        return self.name


class Promotion(models.Model):
    name = models.CharField(help_text="promotion name")
    description = models.TextField(
        help_text="product promotion description",
    )
    discount_rate = models.DecimalField(max_digits=6, decimal_places=2)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    category = models.ManyToManyField(
        "Category", through="PromotionCategory", related_name="promotion_category"
    )

    class Meta:
        db_table = "promotion"


class PromotionCategory(models.Model):
    promotion = models.ForeignKey(Promotion, on_delete=models.CASCADE, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

    class Meta:
        db_table = "promotion_category"


class ProductItem(models.Model):
    price = models.DecimalField(max_digits=10, decimal_places=2)
    qty_in_stock = models.PositiveIntegerField(default=0)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_detail"
    )

    class Meta:
        db_table = "product_item"


def get_file_path(instance, filename):
    return os.path.join(
        "products", "images", instance.product_item.product.name, filename
    )


class Image(models.Model):
    image = models.ImageField(upload_to=get_file_path)
    product_item = models.ForeignKey(
        ProductItem, on_delete=models.CASCADE, related_name="product_image"
    )

    class Meta:
        db_table = "image"

    def __str__(self):
        return self.image


class Size(models.Model):
    name = models.CharField(max_length=10)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)

    class Meta:
        unique_together = ('name', 'category')
        db_table = "size"


class Colour(models.Model):
    name = models.CharField(max_length=10, unique=True)

    class Meta:
        db_table = "colour"


class ProductVariation(models.Model):
    size = models.ForeignKey(Size, on_delete=models.PROTECT, related_name="size")
    colour = models.ForeignKey(
        "Colour", on_delete=models.PROTECT, related_name="colour"
    )
    product_item = models.ForeignKey(
        ProductItem, on_delete=models.CASCADE, related_name="variation"
    )

    class Meta:
        db_table = "product_variation"

class Review(models.Model):
    review = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_review')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_review')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'review'
    
    

class Rating(models.Model):
    rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(2)])
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
   
    class Meta:
       unique_together = ('user', 'product')
       db_table = 'rating' 


class WishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ForeignKey(Product, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        unique_together = ('user', 'products')
        db_table = 'wish_list'