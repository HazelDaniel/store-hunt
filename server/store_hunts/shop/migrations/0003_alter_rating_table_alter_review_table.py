# Generated by Django 5.0.4 on 2024-05-19 18:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("shop", "0002_migration_example"),
    ]

    operations = [
        migrations.AlterModelTable(
            name="rating",
            table="rating",
        ),
        migrations.AlterModelTable(
            name="review",
            table="review",
        ),
    ]
