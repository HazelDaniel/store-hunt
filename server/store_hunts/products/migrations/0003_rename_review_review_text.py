# Generated by Django 5.0.4 on 2024-05-09 13:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("products", "0002_alter_productvariation_size"),
    ]

    operations = [
        migrations.RenameField(
            model_name="review",
            old_name="review",
            new_name="text",
        ),
    ]