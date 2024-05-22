from rest_framework.permissions import BasePermission

from .models import Product


class IsSellerPermissions(BasePermission):
    message = "Sellers only"

    def has_permission(self, request, view):
        return (
            request.user.is_seller and request.user.is_authenticated
        ) or request.user.is_superuser


class SellerPermissionMixin:
    permission_classes = [IsSellerPermissions]
