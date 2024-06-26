import logging
import uuid
from sys import exit

from django.conf import settings
from django.contrib import auth
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.db.models.query import QuerySet
from django.http import HttpResponse
from django.shortcuts import render
from django.utils.encoding import DjangoUnicodeDecodeError, force_bytes, force_text
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from rest_framework import generics, permissions, status, views
from rest_framework.request import HttpRequest
from rest_framework.response import Response
from rest_framework.serializers import SerializerMetaclass
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from rest_framework.parsers import FormParser, MultiPartParser
from store_hunts.config import DOMAIN

from .models import Buyer, Sellers
from .serializers import (
    LogOutSerializer,
    RetrieveAllUserSerializer,
    SellerRegistrationSerializer,
    UserLoginSerializer,
    UserRegistrationSerializer,
    ProfilePicSerializer,
)
from .utils import generate_token, send_email

User = get_user_model()


class UserRegistrationAPIView(generics.CreateAPIView):
    serializer_class: SerializerMetaclass = UserRegistrationSerializer

    def create(self, request: HttpRequest, *args: list, **kwargs: dict) -> Response:
        serialized = self.get_serializer(data=request.data)
        if serialized.is_valid(raise_exception=True):
            data = serialized.validated_data
            confirm_password = data.pop("confirm_password")
            data["password"] = make_password(confirm_password)
            user = User.objects.create(**data)
            buyer = Buyer.objects.create(buyer=user)
            user.save()
            buyer.save()

            if DOMAIN is None:
                raise ValueError("DOMAIN CANNOT BE NONE")
            context = {
                "domain": DOMAIN,
                "uid64": urlsafe_base64_encode(force_bytes(user.id)),
                "token": generate_token.make_token(user),
                "name": user.get_name(),
                "user": user.is_seller,
            }
            subject = "Verification Email"
            send_email(subject, settings.EMAIL_HOST_USER, user.email, context)
            return Response(
                {
                    "status": 201,
                    "full_name": user.get_name(),
                },
                status=status.HTTP_201_CREATED,
            )


class SellerRegistrationAPIView(generics.CreateAPIView):
    serializer_class: SerializerMetaclass = SellerRegistrationSerializer

    def create(self, request: HttpRequest, *args: list, **kwargs: dict) -> Response:
        serialized = self.get_serializer(data=request.data)
        if serialized.is_valid(raise_exception=True):
            data = serialized.validated_data
            confirm_password = data.pop("confirm_password")
            data["password"] = make_password(confirm_password)
            number = data.pop("phone_number")
            user = User(**data)
            user.is_seller = True
            seller = Sellers(seller=user, phone_number=number)
            user.save()
            seller.save()
            if DOMAIN is None:
                raise ValueError("DOMAIN CANNOT BE NONE")
            context = {
                "domain": DOMAIN,
                "uid64": urlsafe_base64_encode(force_bytes(user.id)),
                "token": generate_token.make_token(user),
                "name": user.get_name(),
                "seller": user.is_seller,
            }
            subject = "Verification Email"
            send_email(subject, settings.EMAIL_HOST_USER, user.email, context)
            return Response(
                {
                    "status": 201,
                    "full_name": user.get_name(),
                },
                status=status.HTTP_201_CREATED,
            )


class ActivateAccountApiView(views.View):
    def get(self, request: HttpRequest, uidb64: uuid, token: str) -> HttpResponse:
        try:
            uid = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
            if user.is_active:
                message = {"details": "User account already activated"}
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
        except Exception as identifier:
            print(identifier)
            user = None

        if user is not None and generate_token.check_token(user, token):
            user.is_active = True
            user.save()
            message = {
                "details": "Account has been activated successfully you can proceed to login"
            }
            return render(request, "activate.html")
        else:
            return HttpResponse("<h1>Invalid token provided</h1>")


class UserLoginAPIView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request: HttpRequest) -> Response:
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)


class LogOutAPIView(generics.GenericAPIView):
    serializer_class = LogOutSerializer
    permission_classes: list = [permissions.IsAuthenticated]

    def post(self, request: HttpRequest) -> Response:
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            token = RefreshToken(serializer.data.get("refresh_token"))
            token.blacklist()
        except TokenError:
            return Response(
                {"detail": "Invalid TOken"}, status=status.HTTP_400_BAD_REQUEST
            )
        return Response(status=status.HTTP_204_NO_CONTENT)


class AllUserAPIView(generics.ListAPIView):
    queryset: QuerySet = User.objects.all()
    serializer_class: SerializerMetaclass = RetrieveAllUserSerializer
    permission_classes: list = [permissions.IsAdminUser]


class ProfilePicAPIView(generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ProfilePicSerializer
    http_method_names = ["patch"]
    parser_classes = [FormParser, MultiPartParser]

    def patch(self, request, *args, **kwargs):
        user = request.user
        serializer = self.serializer_class(
            instance=user, data=request.FILES, partial=True
        )
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            data = {"avatar": user.profile_pic.url}
            return Response(data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# TODO write forget password view
class ForgotPassWordAPIView(generics.UpdateAPIView):
    pass


# TODO resend activation token
class ResendActivationTokenAPIView(generics.GenericAPIView):
    pass
