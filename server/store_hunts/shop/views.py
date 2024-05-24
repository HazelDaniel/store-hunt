from django.db.models import Avg
from django.shortcuts import get_object_or_404, render
from django_filters.rest_framework import DjangoFilterBackend
from products.models import Category, Product, ProductItem
from rest_framework import filters, generics, permissions, status
from rest_framework.response import Response

from .filter import ProductFilter
from .models import Rating, Review, WishList
from .permissions import UserNotProductOwnerPermission
from .schemas import product_list_docs
from .serializers import (
    CreateReviewRatingSerializer,
    EditReviewSerializer,
    KidsProductSerializer,
    ListProductSerializer,
    ListReviewRatingSerializer,
    ListWishSerializer,
    MensProductSerializer,
    ProductDetailSerializer,
    RemoveWishlistSerializer,
    WishListSerializer,
    WomenProductSerializer,
    DeleteReviewRating,
)


class CreateReviewAPIView(generics.GenericAPIView):
    serializer_class = CreateReviewRatingSerializer
    permission_classes = [permissions.IsAuthenticated, UserNotProductOwnerPermission]

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            id = self.kwargs["hash_id"]
            instance = get_object_or_404(Product, hash_id=id)
            user = request.user
            data = serializer.validated_data
            rating = data.pop("rating")
            review = Review.objects.create(**data, product=instance, user=user)
            Rating.objects.create(
                rating=rating, user=user, product=instance, review=review
            )

            return Response(
                {"status": 201, "detail": "review successfully created"},
                status=status.HTTP_201_CREATED,
            )


class ListAllProductReview(generics.ListAPIView):
    serializer_class = ListReviewRatingSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Review.objects.all()
    lookup_field = "hash_id"

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def get_queryset(self):
        product_id = self.kwargs.get("hash_id")
        review = Review.objects.filter(product__hash_id=product_id)
        return review


class EditReviewRatingProductAPIView(generics.UpdateAPIView):
    serializer_class = EditReviewSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
        UserNotProductOwnerPermission,
    ]
    queryset = Review.objects.all()
    lookup_field = "hash_id"
    http_method_names = ["put"]

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid(raise_exception=True):
            data = serializer.validated_data
            rating = get_object_or_404(Rating, review=instance)
            instance.text = data.get("text")
            rating.rating = data.get("rating")
            instance.save()
            rating.save()
            message = {"message": "rating updated successfully"}
            return Response(message, status=status.HTTP_200_OK)

    def get_queryset(self):
        review_id = self.kwargs["hash_id"]
        review = Review.objects.filter(review_hash_id=review_id, user=self.request.user)
        return review


class DeleteReviewRating(generics.DestroyAPIView):
    serializer_class = DeleteReviewRating
    permission_classes = [permissions.IsAuthenticated, UserNotProductOwnerPermission]
    queryset = Review.objects.all()
    lookup_field = "hash_id"

    def destroy(self, request, *args, **kwargs):
        # review_id = self.kwargs.get("hash_id")
        # instance = get_object_or_404(Review, hash_id=review_id)
        instance = self.get_object()
        rating = get_object_or_404(Rating, review=instance)

        self.perform_destroy(instance)
        self.perform_destroy(rating)
        return Response({}, status=status.HTTP_204_NO_CONTENT)

    def get_queryset(self):
        user = self.request.user
        review_id = self.kwargs["hash_id"]
        review = Review.objects.filter(user=user, hash_id=review_id)
        return super().get_queryset()


@product_list_docs
class ListProduct(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Product.objects.all()
    serializer_class = ListProductSerializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter)
    filterset_class = ProductFilter
    search_fields = ["title", "description"]

    def get_queryset(self):
        product = Product.objects.filter(is_active=True)
        return product


class MensProductPIView(generics.ListAPIView):
    serializer_class = MensProductSerializer
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        category = Category.objects.filter(name="men")
        return category


class WomensProductPIView(generics.ListAPIView):
    serializer_class = WomenProductSerializer
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def get_queryset(self):
        category = Category.objects.filter(name="women")
        return category


class KidsProductPIView(generics.ListAPIView):
    serializer_class = KidsProductSerializer
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        category = Category.objects.filter(name="kids")
        return category


class ProductDetailAPIView(generics.RetrieveAPIView):
    serializer_class = ProductDetailSerializer
    queryset = Product.objects.all()
    permission_classes = [permissions.AllowAny]
    lookup_field = "slug_title"

    def get_queryset(self):
        return super().get_queryset()


class CreateWishListAPIView(generics.CreateAPIView):
    serializer_class = WishListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        user = request.user
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            product_id = request.data.get("product_id")
            print(product_id)
            product = get_object_or_404(Product, hash_id=product_id)

            _ = WishList.objects.create(wisher=user, product=product)
            message = {"detail": "Added product to wishlist"}
            return Response(message, status=status.HTTP_201_CREATED)


class ListWishListAPIView(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ListWishSerializer
    queryset = WishList.objects.all()

    def get_queryset(self):
        wish_list = WishList.objects.filter(wisher=self.request.user)
        return wish_list


class RemoveWishListAPIView(generics.DestroyAPIView):
    serializer_class = RemoveWishlistSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = WishList.objects.all()
    lookup_field = "hash_id"

    def get_queryset(self):
        wish_list = WishList.objects.filter(wisher=self.request.user)
        return wish_list


class RelatedProductAPIView(generics.ListAPIView):
    serializer_class = ListProductSerializer
    queryset = Product.objects.all()
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        product_id = self.kwargs["hash_id"]
        product = get_object_or_404(Product, hash_id=product_id)
        related_products = Product.objects.filter(category=product.category).exclude(
            hash_id=product_id
        )[:5]
        return related_products
