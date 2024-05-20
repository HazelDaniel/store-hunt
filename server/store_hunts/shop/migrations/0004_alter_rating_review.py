# Generated by Django 5.0.4 on 2024-05-20 07:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shop", "0003_alter_rating_table_alter_review_table"),
    ]

    operations = [
        migrations.AlterField(
            model_name="rating",
            name="review",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="rating",
                to="shop.review",
            ),
        ),
    ]