# Generated by Django 5.0.4 on 2024-04-30 13:23

import django.db.models.deletion
import products.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("accounts", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Brand",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50, unique=True)),
            ],
            options={
                "db_table": "brand",
            },
        ),
        migrations.CreateModel(
            name="Promotion",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(help_text="promotion name")),
                (
                    "description",
                    models.TextField(help_text="product promotion description"),
                ),
                ("discount_rate", models.DecimalField(decimal_places=2, max_digits=6)),
                ("start_date", models.DateTimeField()),
                ("end_date", models.DateTimeField()),
            ],
            options={
                "db_table": "promotion",
            },
        ),
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50, unique=True)),
                (
                    "parent",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.category",
                    ),
                ),
            ],
            options={
                "db_table": "category",
            },
        ),
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50)),
                ("description", models.TextField()),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("is_active", models.BooleanField(default=True)),
                (
                    "brand",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.brand",
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.category",
                    ),
                ),
                (
                    "seller",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="accounts.sellers",
                    ),
                ),
            ],
            options={
                "db_table": "product",
                "ordering": ["-created_at"],
            },
        ),
        migrations.CreateModel(
            name="ProductItem",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("qty_in_stock", models.PositiveIntegerField()),
                ("price", models.DecimalField(decimal_places=2, max_digits=6)),
                (
                    "product",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.product",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Image",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to=products.models.get_file_path)),
                (
                    "product_item",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.productitem",
                    ),
                ),
            ],
            options={
                "db_table": "image",
            },
        ),
        migrations.CreateModel(
            name="ProductItemVariationOption",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "variation_option",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.productitem",
                    ),
                ),
            ],
            options={
                "db_table": "product_variation",
            },
        ),
        migrations.CreateModel(
            name="PromotionCategory",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.promotion",
                    ),
                ),
                (
                    "promotion",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.category",
                    ),
                ),
            ],
            options={
                "db_table": "promotion_category",
            },
        ),
        migrations.AddField(
            model_name="promotion",
            name="category",
            field=models.ManyToManyField(
                related_name="promotion_category",
                through="products.PromotionCategory",
                to="products.category",
            ),
        ),
        migrations.AddField(
            model_name="category",
            name="promotion",
            field=models.ManyToManyField(
                related_name="promtion_category",
                through="products.PromotionCategory",
                to="products.promotion",
            ),
        ),
        migrations.CreateModel(
            name="Variation",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "attr_name",
                    models.CharField(
                        max_length=50, unique=True, verbose_name="attribute name"
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.category",
                    ),
                ),
            ],
            options={
                "db_table": "variation",
            },
        ),
        migrations.CreateModel(
            name="VariationOption",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "attr_value",
                    models.CharField(
                        help_text="variation attribute value",
                        max_length=50,
                        unique=True,
                    ),
                ),
                (
                    "product_item",
                    models.ManyToManyField(
                        related_name="variation_product",
                        through="products.ProductItemVariationOption",
                        to="products.productitem",
                    ),
                ),
                (
                    "variation",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="products.variation",
                    ),
                ),
            ],
            options={
                "db_table": "variation_option",
            },
        ),
        migrations.AddField(
            model_name="productitemvariationoption",
            name="product_item",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="products.variationoption",
            ),
        ),
        migrations.AddField(
            model_name="productitem",
            name="variation",
            field=models.ManyToManyField(
                related_name="variation_product",
                through="products.ProductItemVariationOption",
                to="products.variationoption",
            ),
        ),
    ]
