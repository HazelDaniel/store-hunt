# Generated by Django 5.0.4 on 2024-05-06 20:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0008_alter_productitem_product"),
    ]

    operations = [
        migrations.AlterField(
            model_name="size",
            name="name",
            field=models.CharField(max_length=10),
        ),
        migrations.AlterUniqueTogether(
            name="size",
            unique_together={("name", "category")},
        ),
    ]
