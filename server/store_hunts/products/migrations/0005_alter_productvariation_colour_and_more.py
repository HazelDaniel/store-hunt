# Generated by Django 5.0.4 on 2024-05-04 18:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0004_alter_productvariation_product_item"),
    ]

    operations = [
        migrations.AlterField(
            model_name="productvariation",
            name="colour",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.PROTECT,
                related_name="colour",
                to="products.colour",
            ),
        ),
        migrations.AlterField(
            model_name="productvariation",
            name="size",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.PROTECT,
                related_name="size",
                to="products.size",
            ),
        ),
    ]
