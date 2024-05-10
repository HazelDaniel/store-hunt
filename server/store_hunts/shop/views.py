from django.shortcuts import render
from rest_framework import generics
from .serializers import CreateReviewRatingSerializer, ListReviewRatingSerializer
from .models import Product, Review, Rating
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .permissions import UserNotProductOwnerPermission
from rest_framework import permissions


class CreateReviewAPIView(
    generics.GenericAPIView
):
    serializer_class = CreateReviewRatingSerializer
    # lookup_field = 'id'
    permission_classes = [UserNotProductOwnerPermission]
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            id = self.kwargs['hash_id']
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
    lookup_field = 'hash_id' 
 