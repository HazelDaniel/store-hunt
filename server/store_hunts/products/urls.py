from django.urls import path

from . import views

urlpatterns = [
    path(
        "seller-central/products/",
        views.CreateProductAPIView.as_view(),
        name="create_product",
    ),
    path(
        "seller-central/products",
        views.ListAllProductAPIView.as_view(),
        name="list_all_product",
    ),
]
