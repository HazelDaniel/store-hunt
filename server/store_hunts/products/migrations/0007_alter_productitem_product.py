# Generated by Django 5.0.4 on 2024-05-01 14:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0006_alter_variationoption_variation"),
    ]

    operations = [
        migrations.AlterField(
            model_name="productitem",
            name="product",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="product",
                to="products.product",
            ),
        ),
    ]