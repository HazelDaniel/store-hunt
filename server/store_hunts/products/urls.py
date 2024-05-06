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
    path(
        "seller-central/products/<int:id>/product-update/",
        views.UpdateProductAPIView.as_view(),
        name="update_product",
    ),
    path(
        "seller-central/products/<int:id>/product-detail",
        views.RetrieveProductAPIView.as_view(),
        name="update_product",
    ),
    path(
        "seller-central/products/<int:id>/product-delete",
        views.DestroyProductAPIView.as_view(),
        name="update_product",
    ),
]
