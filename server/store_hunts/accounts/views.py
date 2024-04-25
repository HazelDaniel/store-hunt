from django.shortcuts import render
from rest_framework import generics
from .serializers import (UserRegistrationSerializer, UserLoginSerializer,
                          LogOutSerializer, SellerRegistrationSerializer)
from rest_framework.response import Response
from rest_framework import status
from rest_framework import views
from django.contrib.auth.hashers import make_password
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from .utils import generate_token, send_email
from django.utils.encoding import force_bytes, force_text, DjangoUnicodeDecodeError
from django.conf import settings
from django.contrib.auth import get_user_model
from rest_framework import permissions
from rest_framework_simplejwt.tokens import RefreshToken, TokenError
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from .models import Sellers, Buyer

User = get_user_model()


class UserRegistrationAPIView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer
    def create(self, request, *args, **kwargs):
        serialized = self.get_serializer(data=request.data)
        if serialized.is_valid(raise_exception=True):
            data =  serialized.validated_data
            confirm_password = data.pop('confirm_password')
            data['password'] = make_password(confirm_password)
            user =  User.objects.create(**data)
            buyer = Buyer.objects.create(buyer=user)
            user.save()
            buyer.save()
            context = {
                'domain': 'localhost:8000',
                'uid64': urlsafe_base64_encode(force_bytes(user.id)),
                'token': generate_token.make_token(user),
                'name': user.get_name(),
                'user': user.seller
            }
            subject = 'Verification Email'
            send_email(
                subject,
                'support@storehunt.com',
                user.email,
                context
            )
            return Response(
                {
                    'status' : 201,
                    'full_name' : user.get_name(),
                },
                status=status.HTTP_201_CREATED
            )


class SellerRegistrationAPIView(generics.CreateAPIView):
    serializer_class = SellerRegistrationSerializer
    def create(self, request, *args, **kwargs):
        serialized = self.get_serializer(data=request.data)
        if serialized.is_valid(raise_exception=True):
            data =  serialized.validated_data['user_registration_serializer']
            confirm_password = data.pop('confirm_password')
            data['password'] = make_password(confirm_password)
            number = serialized.validated_data['phone_number']
            user =  User(**data)
            user.is_seller = True
            seller = Sellers(seller=user, phone_number=number)
            user.save()
            seller.save()
            context = {
                'domain': 'localhost:8000',
                'uid64': urlsafe_base64_encode(force_bytes(user.id)),
                'token': generate_token.make_token(user),
                'name': user.get_name(),
                'seller': user.is_seller
            }
            subject = 'Verification Email'
            send_email(
                subject,
                'support@storehunt.com',
                user.email,
                context
            )
            return Response(
                {
                    'status' : 201,
                    'full_name' : user.get_name(),
                },
                status=status.HTTP_201_CREATED
            )

class ActivateAccountApiView(views.View):
    def get(self, request, uidb64, token):
        try:
            uid=force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
            if user.is_active:
                message = {'details': 'User account already activated'}
                return Response(message, status=status.HTTP_400_BAD_REQUEST)
        except Exception as identifier:
            print(identifier)
            user = None 

        if user is not None and generate_token.check_token(user, token):
            user.is_active = True
            user.save()
            message = {'details': 'Account has been activated successfully you can proceed to login'}
            return render(request, 'activate.html')


class UserLoginAPIView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        print(serializer.validated_data)
        return Response(serializer.validated_data, status=status.HTTP_200_OK)
    

 
class LogOutAPIView(generics.GenericAPIView):
    serializer_class = LogOutSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    
    def post(self, request):
        serializer = self.get_serializer(request=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            token = RefreshToken(serializer.data.get('refresh_token'))
            token.blacklist()
        except TokenError:
            return Response({'detail': 'Invalid TOken'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)