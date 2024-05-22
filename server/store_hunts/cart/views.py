from django.shortcuts import get_object_or_404
from products.models import Product, ProductItem
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Cart, CartItem
from .permission import UserNotProductOwnerPermissionCartItem
from .serializers import CartSerializer


class CartItemAPIView(generics.CreateAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated, UserNotProductOwnerPermissionCartItem]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.validated_data
            cart, _ = Cart.objects.get_or_create(user=request.user)
            product = get_object_or_404(
                ProductItem, hash_id=data.get("product_item_id")
            )
            quantity = data.get("quantity")
            if product.check_quantity_out_of_stock():
                return Response(
                    {
                        "status_code": 400,
                        "message": "out of stock",
                    },
                    status=400,
                )
            if not product.check_quantity_available(quantity=quantity):
                return Response(
                    {
                        "status_code": 400,
                        "message": "the amount of quantity provided is out of stock",
                    },
                    status=status.HTTP_400_BAD_REQUEST,
                )
            cart_item, _ = CartItem.objects.get_or_create(
                product_item=product, cart=cart, quantity=quantity
            )
            message = {"detail": "product added to cart"}
            return Response(message, status=status.HTTP_200_OK)


class CartItemListAPIView(generics.ListAPIView):
    serializer_class = CartSerializer
    queryset = CartItem.objects.all()
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        cart = Cart.objects.get(user=user)
        cart_item = CartItem.objects.filter(cart=cart)
        return cart_item


class CartItemPatchAPIView(generics.RetrieveUpdateAPIView):
    serializer_class = CartSerializer
    http_method_names = ["patch", "get"]
    permission_classes = [IsAuthenticated, UserNotProductOwnerPermissionCartItem]
    queryset = CartItem.objects.all()
    lookup_field = "hash_id"

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        data = request.data
        product_item_id = data.get("product_item_id") or instance.product_item.id
        quantity = data.get("quantity") or instance.quantity
        product = get_object_or_404(ProductItem, id=product_item_id)
        if product.check_quantity_out_of_stock():
            return Response(
                {
                    "status_code": 400,
                    "message": "out of stock",
                },
                status=400,
            )
        if not product.check_quantity_available(quantity=quantity):
            return Response(
                {
                    "status_code": 400,
                    "message": "the amount of quantity provided is out of stock",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
        instance.quantity = quantity
        instance.product_item = product
        instance.save()
        message = {"message", "update added successfully"}
        serializer = self.serializer_class(instance)
        return self.retrieve(request, *args, **kwargs)

    def get_queryset(self):
        user = self.request.user
        cart = Cart.objects.get(user=user)
        return CartItem.objects.filter(cart=cart)
