from django.shortcuts import render
from rest_framework import generics
from .serializers import CreateReviewRatingSerializer
from .models import Product, Review, Rating
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .permissions import UserNotProductOwnerPermission

class CreateReviewAPIView(
    generics.GenericAPIView
):
    serializer_class = CreateReviewRatingSerializer
    # lookup_field = 'id'
    permission_classes = [UserNotProductOwnerPermission]
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            id = self.kwargs['id']
            instance = get_object_or_404(Product, id=id)
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

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        return Response(
            {"status": 200, "data": serializer.data}, status=status.HTTP_200_OK
        )