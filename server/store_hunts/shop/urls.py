from django.urls import path
from . import views

urlpatterns = [
    path(
        "review/<slug:hash_id>/product",
        views.CreateReviewAPIView.as_view(),
        name="product_review",
    ),
    path(
        'reviews/<slug:hash_id>/product',
        views.ListAllProductReview.as_view(),
        name='list_review'
    )
]
