from django.urls import path

from . import views

urlpatterns = [
    path("cart", views.CartItemAPIView.as_view(), name="add-to-cart"),
    path(
        "cart/<slug:hash_id>/update",
        views.CartItemPatchAPIView.as_view(),
        name="update-cart-item",
    ),
    path("cart/", views.CartItemListAPIView.as_view(), name="list-cart-item"),
]
