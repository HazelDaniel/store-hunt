from shop.permissions import UserNotProductOwnerPermission


class UserNotProductOwnerPermissionCartItem(UserNotProductOwnerPermission):
    message = "product owner cannot add product to cart"
