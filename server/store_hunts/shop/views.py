from django.db.models import Avg
from django.shortcuts import get_object_or_404, render
from products.models import Category, Product, ProductItem
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet

from .models import Rating, Review
from .permissions import UserNotProductOwnerPermission
from .serializers import (
    CreateReviewRatingSerializer,
    KidsProductSerializer,
    ListProductSerializer,
    ListReviewRatingSerializer,
    MensProductSerializer,
    UnisexProductSerializer,
    WomenProductSerializer,
    ProductDetailSerializer
)


class CreateReviewAPIView(generics.GenericAPIView):
    serializer_class = CreateReviewRatingSerializer
    # lookup_field = 'id'
    permission_classes = [UserNotProductOwnerPermission]

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
    queryset = Product.objects.all()
    lookup_field = "hash_id"


class ListProduct(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Product.objects.all()
    serializer_class = ListProductSerializer

    def get_queryset(self):
        product = Product.objects.filter(is_active=True)
        return product


class MensProductPIView(generics.ListAPIView):
    serializer_class = MensProductSerializer
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def get_queryset(self):
        category = Category.objects.filter(name="men")
        return category


class WomensProductPIView(generics.ListAPIView):
    serializer_class = WomenProductSerializer
    queryset = Product.objects.all()
    permission_classes = [permissions.AllowAny]

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

    def get_queryset(self):
        category = Category.objects.filter(name="women")
        return category


class KidsProductPIView(generics.ListAPIView):
    serializer_class = KidsProductSerializer
    queryset = Product.objects.all()
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        category = Category.objects.filter(name="kids")
        return category


# class UnisexProductPIView(generics.ListAPIView):
#     serializer_class = UnisexProductSerializer
#     queryset = Product.objects.all()
#     permission_classes = [permissions.AllowAny]

#     def list(self, request, *args, **kwargs):
#         return super().list(request, *args, **kwargs)
#     def get_queryset(self):
#         category = Category.objects.get(name="unisex")
#         product = Product.objects.filter(category__parent=category)
#         return product


class ProductDetailAPIView(generics.RetrieveAPIView):
    serializer_class = ProductDetailSerializer
    queryset = Product.objects.all()
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug_title'
