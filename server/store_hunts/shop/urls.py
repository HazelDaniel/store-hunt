from django.urls import path

from . import views

urlpatterns = [
    path(
        "review/<slug:hash_id>/product",
        views.CreateReviewAPIView.as_view(),
        name="product-review",
    ),
    path(
        "reviews/<slug:hash_id>/product",
        views.ListAllProductReview.as_view(),
        name="list-review",
    ),
    path("shop", views.ListProduct.as_view(), name="list-product"),
    path("men-fashion-store/", views.MensProductPIView.as_view(), name="men-product"),
    path(
        "women-fashion-store/",
        views.WomensProductPIView.as_view(),
        name="women-product",
    ),
    path(
        "kids-fashion-store/",
        views.KidsProductPIView.as_view(),
        name="kids-product",
    ),
    path(
        "shop/<slug:slug_title>",
        views.ProductDetailAPIView.as_view(),
        name="product-detail",
    ),
    # user wish list urls
    path('wishlist/', views.CreateWishListAPIView.as_view(), name='create-wish-list'),
    path('wishlist', views.ListWishListAPIView.as_view(), name='wish-list')
]
