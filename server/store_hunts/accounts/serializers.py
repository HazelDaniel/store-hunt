import uuid
from datetime import datetime

from django.contrib import auth
from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.validators import UniqueValidator

from .models import Sellers
from .utils import validate_phone_number

User = get_user_model()


class UserRegistrationSerializer(serializers.ModelSerializer):
    confirm_password: str = serializers.CharField(write_only=True, required=True)
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "email",
            "password",
            "confirm_password",
        ]
        extra_kwargs = {"password": {"write_only": True, "required": True}}

    def validate(self, data: dict) -> dict:
        if data["password"] != data["confirm_password"]:
            raise serializers.ValidationError(
                "confirm password must be the same as password"
            )

        data["first_name"] = data["first_name"].capitalize()
        data["last_name"] = data["last_name"].capitalize()
        return data


class SellerRegistrationSerializer(UserRegistrationSerializer):
    # user = UserRegistrationSerializer()
    phone_number = serializers.CharField(
        validators=[
            validate_phone_number,
            UniqueValidator(queryset=Sellers.objects.all()),
        ]
    )
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    password = serializers.CharField(min_length=8, max_length=100, write_only=True)
    confirm_password = serializers.CharField(
        min_length=8, max_length=100, write_only=True
    )

    class Meta:
        model = Sellers
        fields = [
            "first_name",
            "last_name",
            "email",
            "phone_number",
            "password",
            "confirm_password",
        ]


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ["id", "email", "password"]

    def validate(self, data):
        email = data.get("email", "")
        password = data.get("password", "")
        user = auth.authenticate(email=email, password=password)
        if not user:
            raise AuthenticationFailed("Invalid email or password")
        if not user.is_active:
            raise AuthenticationFailed(
                "user account has been disabled contact support team"
            )
        try:
            data = {
                "id": user.hash_id,
                "email": user.email,
                "full_name": user.get_name(),
                "is_seller": user.is_seller,
                "is_superuser": user.is_superuser,
                "created_at": user.created_at,
                "avatar": user.profile_pic.url,
                "token": user.get_token(),
            }
        except ValueError:
            data = {
                "id": user.hash_id,
                "email": user.email,
                "full_name": user.get_name(),
                "is_seller": user.is_seller,
                "is_superuser": user.is_superuser,
                "created_at": user.created_at,
                "avatar": None,
                "token": user.get_token(),
            }
        return data

    def get_token(self, obj):
        return obj["token"]


class LogOutSerializer(serializers.Serializer):
    refresh_token = serializers.CharField(
        help_text="takes in refresh token for black list"
    )


class RetrieveAllUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ["password"]


class ProfilePicSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(
        source="profile_pic", max_length=1000, allow_empty_file=False, use_url=False
    )

    class Meta:
        model = User
        fields = ["avatar"]

    def update(self, instance, validated_data):
        instance.profile_pic = validated_data.get("proflie_pic", instance.profile_pic)
        instance.save()
        return validated_data
