# Generated by Django 5.0.4 on 2024-05-16 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="category",
            name="name",
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="product",
            name="slug_title",
            field=models.SlugField(max_length=200, unique=True),
        ),
        migrations.AlterField(
            model_name="product",
            name="title",
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
