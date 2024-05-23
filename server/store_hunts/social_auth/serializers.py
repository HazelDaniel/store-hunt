from rest_framework import serializers
from .utils import validate_oauth_token
from rest_framework.exceptions import ValidationError, AuthenticationFailed
from django.conf import settings


class GoogleSignSerializer(serializers.Serializer):
    access_token = serializers.CharField()

    def validate_access_token(self, value):
        google_user_data = validate_oauth_token(value)

        try:
            user_id = google_user_data["sub"]
        except:
            raise ValidationError("This token is invalid or has expired")

        if google_user_data["aud"] != settings.GOOGLE_CLIENT_ID:
            raise AuthenticationFailed(detail="Could not verify user login")

        return google_user_data
