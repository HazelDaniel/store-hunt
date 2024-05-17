from products.models import Product
from rest_framework.permissions import BasePermission


class UserNotProductOwnerPermission(BasePermission):
    # def has_permission(self, request, view):
    #     print(request.user.is_seller)
    #     return super().has_permission(request, view)
    def has_permission(self, request, view):
        product_owner = False
        if request.user.is_seller:
            seller = request.user.seller
            product = Product.objects.filter(seller=seller).first()
            if product:
                product_owner = product.product_owner(seller)

        val = (
            request.user.is_authenticated and not product_owner
        ) and not request.user.is_superuser
        return val


class UserNotProductOwnerPermissionMixin:
    permission_classes = [UserNotProductOwnerPermission]
