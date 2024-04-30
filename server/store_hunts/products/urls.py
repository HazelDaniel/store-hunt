from django.urls import path

from . import views

urlpatterns = [
    path("products/", views.CreateProductAPIView.as_view(), name="create_product"),
]
