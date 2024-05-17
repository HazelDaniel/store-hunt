from django.urls import path

from . import views

urlpatterns = [
    path(
        "review/<slug:hash_id>/product",
        views.CreateReviewAPIView.as_view(),
        name="product_review",
    ),
    path(
        "reviews/<slug:hash_id>/product",
        views.ListAllProductReview.as_view(),
        name="list_review",
    ),
    path("shop", views.ListProduct.as_view(), name="list_product"),
    path("men-fashion-store/", views.MensProductPIView.as_view(), name="men_product"),
    path(
        "women-fashion-store/",
        views.WomensProductPIView.as_view(),
        name="women_product",
    ),
    path(
        "kids-fashion-store/",
        views.KidsProductPIView.as_view(),
        name="kids_product",
    ),
    path('shop/<slug:slug_title>', views.ProductDetailAPIView.as_view(), name='product_detail'),
]
