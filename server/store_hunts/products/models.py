import os
from django_hashids import HashidsField
from accounts.models import Sellers
from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

# Create your models here.

User = get_user_model()


class Brand(models.Model):
    hash_id = HashidsField(real_field_name='id', salt=os.environ['HASHIDS'], min_length=10)
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        db_table = "brand"

    def __str__(self):
        return self.name


class Product(models.Model):
    hash_id = HashidsField(real_field_name='id', salt=os.environ['HASHIDS'], min_length=10)
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

    @classmethod
    def seller_exists(cls, seller_obj):
        return cls.objects.filter(seller=seller_obj).exists()

    def product_owner(self, seller_obj):
        return self.seller == seller_obj


class Category(models.Model):
    hash_id = HashidsField(real_field_name='id', salt=os.environ['HASHIDS'], min_length=10)
    name = models.CharField(max_length=50)
    parent = models.ForeignKey(
        "Category",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="child",
    )

    class Meta:
        db_table = "category"
        unique_together = ['parent', 'name']

    def __str__(self):
        return self.name


class Promotion(models.Model):
    hash_id = HashidsField(real_field_name='id', salt=os.environ['HASHIDS'], min_length=10)
    name = models.CharField(help_text="promotion name")
    description = models.TextField(
        help_text="product promotion description",
    )
    discount_rate = models.DecimalField(max_digits=6, decimal_places=2)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    category = models.ManyToManyField(
        "Category",
        through="ProductPromotionCategory",
        related_name="promotion_category",
    )
    product = models.ManyToManyField(
        Product, through="ProductPromotionCategory", related_name="promotion_product"
    )

    class Meta:
        db_table = "promotion"


class ProductPromotionCategory(models.Model):
    hash_id = HashidsField(real_field_name='id', salt=os.environ['HASHIDS'], min_length=10)
    promotion = models.ForeignKey(Promotion, on_delete=models.PROTECT)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)

    class Meta:
        db_table = "product_promotion_category"


class ProductItem(models.Model):
    hash_id = HashidsField(real_field_name='id', salt=os.environ['HASHIDS'], min_length=10)
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
    hash_id = HashidsField(real_field_name='id', salt=os.environ['HASHIDS'], min_length=10) 
    image = models.ImageField(upload_to=get_file_path)
    product_item = models.ForeignKey(
        ProductItem, on_delete=models.CASCADE, related_name="product_image"
    )

    class Meta:
        db_table = "image"

    def __str__(self):
        return self.image


class Size(models.Model):
    hash_id = HashidsField(real_field_name='id', salt=os.environ['HASHIDS'], min_length=10)
    name = models.CharField(max_length=10)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)

    class Meta:
        unique_together = ("name", "category")
        db_table = "size"


class Colour(models.Model):
    hash_id = HashidsField(real_field_name='id', salt=os.environ['HASHIDS'], min_length=10)
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        db_table = "colour"


class ProductVariation(models.Model):
    hash_id = HashidsField(real_field_name='id', salt=os.environ['HASHIDS'], min_length=10)
    size = models.ForeignKey(
        Size, on_delete=models.PROTECT, related_name="size", null=True
    )
    colour = models.ForeignKey(
        "Colour", on_delete=models.PROTECT, related_name="colour"
    )
    product_item = models.ForeignKey(
        ProductItem, on_delete=models.CASCADE, related_name="variation"
    )

    class Meta:
        db_table = "product_variation"
