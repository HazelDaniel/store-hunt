# Generated by Django 5.0.4 on 2024-04-18 07:41

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0011_remove_user_is_superuser_alter_address_id_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="address",
            name="id",
            field=models.UUIDField(
                default=uuid.UUID("25b69285-2d79-4909-b176-a16e78ec08f8"),
                editable=False,
                primary_key=True,
                serialize=False,
                unique=True,
            ),
        ),
        migrations.AlterField(
            model_name="buyer",
            name="id",
            field=models.UUIDField(
                default=uuid.UUID("e06c2529-2656-44d6-bdbf-d1ad1554618a"),
                editable=False,
                primary_key=True,
                serialize=False,
            ),
        ),
        migrations.AlterField(
            model_name="sellers",
            name="id",
            field=models.UUIDField(
                default=uuid.UUID("17252a2b-319b-4abe-9983-7956bfb6ad49"),
                editable=False,
                primary_key=True,
                serialize=False,
            ),
        ),
    ]