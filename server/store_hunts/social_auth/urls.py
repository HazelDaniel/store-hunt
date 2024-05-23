from django.urls import path
from . import views


urlpatterns = [
    path("social-auth/google/", views.GoogleAPIView.as_view(), name="google-login"),
    path(
        "social-auth/google/seller-central/",
        views.SellersGoogleAPIView.as_view(),
        name="google-seller-login",
    ),
]
