from products.models import Product
from rest_framework.permissions import BasePermission


class UserNotProductOwnerPermission(BasePermission):
    message = "product owner not allowed to review or rate product"

    def has_permission(self, request, view):
        product_owner = False
        if request.user.is_seller:
            seller = request.user.seller
            product = Product.objects.filter(seller=seller).first()
            if product:
                product_owner = product.product_owner(seller)

        return not product_owner and not request.user.is_superuser
