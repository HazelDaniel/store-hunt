import os

from accounts.models import Sellers
from django.db import models

# Create your models here.


class Brand(models.Model):
    name = models.CharField(max_length=50, unique=True)

    class Meta:
        db_table = "brand"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    category = models.ForeignKey("Category", on_delete=models.CASCADE, related_name='product_category')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, blank=True, null=True)
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
        "Promotion", through="PromotionCategory", related_name="promtion_category"
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
    category = models.ForeignKey(Promotion, on_delete=models.CASCADE, null=True)
    promotion = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

    class Meta:
        db_table = "promotion_category"


class ProductItem(models.Model):
    qty_in_stock = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="product_item"
    )
    variation = models.ManyToManyField(
        "VariationOption",
        through="ProductItemVariationOption",
        related_name="variation_product",
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


class Variation(models.Model):
    attr_name = models.CharField(
        verbose_name="attribute name", max_length=50, unique=True
    )
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        db_table = "variation"


class VariationOption(models.Model):
    attr_value = models.CharField(
        max_length=50, unique=True, help_text="variation attribute value"
    )
    product_item = models.ManyToManyField(
        ProductItem,
        through="ProductItemVariationOption",
        related_name="variation_product",
    )
    variation = models.ForeignKey(
        Variation, on_delete=models.CASCADE, related_name="variation_value"
    )

    class Meta:
        db_table = "variation_option"


class ProductItemVariationOption(models.Model):
    product_item = models.ForeignKey(
        ProductItem, on_delete=models.CASCADE, null=True, blank=True
    )
    variation_option = models.ForeignKey(
        VariationOption, on_delete=models.CASCADE, null=True, blank=True
    )

    class Meta:
        db_table = "product_variation"
