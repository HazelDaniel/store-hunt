from datetime import datetime
import uuid
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed

User = get_user_model()
class UserRegistrationSerializer(serializers.ModelSerializer):
    confirm_password: str = serializers.CharField(write_only=True, required=True)
    #token = serializers.CharField(source='get_token', read_only=True)
    class Meta:
        model = User
        fields =  [
            'first_name',
            'last_name',
            'email',
            'password',
            'confirm_password',
            #'token'
        ]
        extra_kwargs = {
            'password' : {'write_only': True, 'required': True}
        }

    def validate(self, data: dict) -> dict:
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError('confirm password must be the same as password')        
        return data


class UserLoginSerializer(serializers.Serializer):
    email: str = serializers.EmailField(required=True)
    password: str = serializers.CharField(write_only=True, required=True)
    token: str = serializers.SerializerMethodField(read_only=True) 
    
    def validate(self, data):
        email = data.get('email', '')
        password = data.get('password', '')
        user  = auth.authenticate(email=email, password=password) 
        print(user)
        if not user:
            raise AuthenticationFailed(
                "Invalid email or password"
            )
        if not user.is_active:
            raise AuthenticationFailed(
                "user account has been disabled contact support team"
            )
            
        data = {
            'id': user.id,
            'email': user.email,
            'full_name': user.get_name(),
            'is_seller': user.is_seller,
            'is_superuser': user.is_superuser,
            'created_at': user.created_at,
            'token': user.get_token()
        }
        return data

    def get_token(self, obj):
        return obj['token']


class LogOutSerializer(serializers.Serializer):
    refresh_token = serializers.CharField(help_text='takes in refresh token for black list')
    
    def validate(self, data):
        pass
        