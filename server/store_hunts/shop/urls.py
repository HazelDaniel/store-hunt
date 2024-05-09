from django.urls import path
from . import views

urlpatterns = [
    path(
        "reviews/<int:id>/product",
        views.CreateReviewAPIView.as_view(),
        name="product_review",
    ),
]
