from django.shortcuts import render
from .auth import register_social_user
from rest_framework.generics import CreateAPIView
from .serializers import GoogleSignSerializer
from rest_framework import status
from rest_framework.response import Response

# Create your views here.


class GoogleAPIView(CreateAPIView):
    serializer_class = GoogleSignSerializer

    def create(self, request, *args, **kwargs):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        google_user_data = serializer.data["access_token"]
        first_name = google_user_data["given_name"]
        last_name = google_user_data["family_name"]
        email = google_user_data["email"]
        provider = "google"

        data = register_social_user(
            provider=provider, email=email, first_name=first_name, last_name=last_name
        )
        return Response(data, status=status.HTTP_201_CREATED)


class SellersGoogleAPIView(CreateAPIView):
    serializer_class = GoogleSignSerializer

    def create(self, request, *args, **kwargs):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        google_user_data = (serializer.validated_data)["access_token"]
        first_name = google_user_data["given_name"]
        last_name = google_user_data["family_name"]
        email = google_user_data["email"]
        provider = "google"
        data = register_social_user(
            provider=provider,
            email=email,
            first_name=first_name,
            last_name=last_name,
            is_seller=True,
        )
        return Response(data, status=status.HTTP_201_CREATED)
