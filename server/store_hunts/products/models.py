from accounts.models import Sellers
from django.db import models


# Create your models here.


class Brand(models.Model):
    name = models.CharField(max_length=50, unique=True, null=True)

    class Meta:
        db_table = "brand"
        
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    category = models.ForeignKey("Category", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, null=True)
    seller = models.ForeignKey(Sellers, on_delete=models.CASCADE)

    class Meta:
        ordering = ["-created_at"]
        db_table = "product"

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=50)
    parent = models.ForeignKey("Category", on_delete=models.CASCADE, null=True, blank=True)
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
    category = models.ForeignKey(Promotion, on_delete=models.CASCADE)
    promotion = models.ForeignKey(Category, on_delete=models.CASCADE)

    class Meta:
        db_table = "promotion_category"


class Size(models.Model):
    size_option = models.CharField(
        verbose_name="size option", help_text="user input size option"
    )
    
    class Meta:
        db_table = 'size'

class Colour(models.Model):
    colour_name = models.CharField(
        verbose_name="colour type", help_text="color type text"
    )
    
    class Meta:
        db_table = 'colour'
    
    def __str__(self):
        return self.colour_name

class ProductItem(models.Model):
    qty_in_stock = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    size = models.ForeignKey(Size, on_delete=models.CASCADE)
    colour = models.ForeignKey(Colour, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)


class Image(models.Model):
    image = models.ImageField(upload_to="product/image/%Y/%m/%d/")
    product_item = models.ForeignKey(ProductItem, on_delete=models.CASCADE)

    class Meta:
        db_table = "image"
        
        
    def __str__(self):
        return self.image