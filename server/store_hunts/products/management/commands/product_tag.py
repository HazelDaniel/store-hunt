from django.core.management.base import BaseCommand
from products.models import Product, Tag

"""
helps in adding tag to existing products
"""


class Command(BaseCommand):
    help = "Add tags to a product"

    def add_arguments(self, parser):
        parser.add_argument("product_id", type=int, help="The ID of the product")
        parser.add_argument(
            "tags", nargs="+", type=str, help="The tags to add to the product"
        )

    def handle(self, *args, **kwargs):
        product_id = kwargs["product_id"]
        tags = kwargs["tags"]

        product = Product.objects.get(id=product_id)

        for tag_name in tags:
            tag, created = Tag.objects.get_or_create(name=tag_name)
            product.tags.add(tag)

        product.save()
        self.stdout.write(self.style.SUCCESS("Successfully added tags to product"))
