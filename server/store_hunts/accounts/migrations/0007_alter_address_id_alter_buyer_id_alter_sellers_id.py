# Generated by Django 5.0.4 on 2024-04-17 15:30

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("accounts", "0006_alter_address_id_alter_buyer_id_alter_sellers_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="address",
            name="id",
            field=models.UUIDField(
                default=uuid.UUID("93d737d6-5de2-4eb7-924f-6efbd6c6d955"),
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
                default=uuid.UUID("58ee3823-0399-4742-8b22-7155817dcf94"),
                editable=False,
                primary_key=True,
                serialize=False,
            ),
        ),
        migrations.AlterField(
            model_name="sellers",
            name="id",
            field=models.UUIDField(
                default=uuid.UUID("6fb9ecb9-1a77-4824-bd42-be68c21c885f"),
                editable=False,
                primary_key=True,
                serialize=False,
            ),
        ),
    ]
