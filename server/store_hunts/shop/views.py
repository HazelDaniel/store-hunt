from django.db.models import Avg
from django.shortcuts import get_object_or_404, render
from products.models import Category, Product, ProductItem
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Rating, Review, WishList
from .permissions import UserNotProductOwnerPermission
from .serializers import (
    CreateReviewRatingSerializer,
    KidsProductSerializer,
    ListProductSerializer,
    ListReviewRatingSerializer,
    MensProductSerializer,
    ProductDetailSerializer,
    WomenProductSerializer,
    WishListSerializer,
    ListWishSerializer,
    RemoveWishlistSerializer,
    EditReviewSerializer,
    RemoveReviewRatingSerializer,
)


class CreateReviewAPIView(generics.GenericAPIView):
    serializer_class = CreateReviewRatingSerializer
    # lookup_field = 'id'
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
    permission_classes = [permissions.IsAuthenticated, UserNotProductOwnerPermission]
    queryset = Review.objects.all()
    lookup_field = "hash_id"
    # http_method_names = ['PUT']


    def update(self, request, *args, **kwargs):
        print('boom')
        product_id = self.kwargs.get('hash_id')
        instance = get_object_or_404(Review, product__hash_id=product_id)
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
        product_id = self.kwargs["hash_id"]
        review = Review.objects.filter(
            product__hash_id=product_id, user=self.request.user
        )
        return review

#TODO creat user delete review api view 
class DeleteReviewRating(generics.DestroyAPIView):
    pass


class ListProduct(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Product.objects.all()
    serializer_class = ListProductSerializer

    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)

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

#TODO create related product view
class RelatedProductAPIView(generics.ListAPIView):
    pass