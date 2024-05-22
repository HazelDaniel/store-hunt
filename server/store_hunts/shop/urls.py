from django.urls import path

from . import views

urlpatterns = [
    path(
        "review-rating/add/<slug:hash_id>/product",
        views.CreateReviewAPIView.as_view(),
        name="product-review",
    ),
    path(
        "review-rating/list/<slug:hash_id>/product",
        views.ListAllProductReview.as_view(),
        name="list-review",
    ),
    path(
        "review-rating/edit/<slug:hash_id>/product",
        views.EditReviewRatingProductAPIView.as_view(),
        name="edit-review",
    ),
    path(
        'review-rating/delete/<slug:hash_id>/product',
        views.DeleteReviewRating.as_view(), name='delete-review-rating'
    ),
    path("shop", views.ListProduct.as_view(), name="list-product"),
    path(
        "shop/men-fashion-store/", views.MensProductPIView.as_view(), name="men-product"
    ),
    path(
        "shop/women-fashion-store/",
        views.WomensProductPIView.as_view(),
        name="women-product",
    ),
    path(
        "shop/kids-fashion-store/",
        views.KidsProductPIView.as_view(),
        name="kids-product",
    ),
    path(
        "shop/<slug:slug_title>",
        views.ProductDetailAPIView.as_view(),
        name="product-detail",
    ),
    # user wish list urls
    path("wishlist/", views.CreateWishListAPIView.as_view(), name="create-wish-list"),
    path("wishlist", views.ListWishListAPIView.as_view(), name="wish-list"),
    path(
        "wishlist/<slug:hash_id>",
        views.RemoveWishListAPIView.as_view(),
        name="remove-wish-list",
    ),
    path(
        "shop/related-product/<slug:hash_id>",
        views.RelatedProductAPIView.as_view(),
        name="related-product",
    ),
]
