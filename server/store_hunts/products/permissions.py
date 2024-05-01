from rest_framework.permissions import BasePermission


class IsSellerPermissions(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user.is_seller and request.user.is_authenticated
        ) or request.user.is_superuser


class SellerPermissionMixin:
    permission_classes = [IsSellerPermissions]
