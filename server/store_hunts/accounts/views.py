from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .serializers import UserRegistrationSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import views
from django.contrib.auth.hashers import make_password
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from .utils import generate_token, send_email
from django.utils.encoding import force_bytes, force_text, DjangoUnicodeDecodeError
from django.conf import settings
from django.contrib.auth import get_user_model
# Create your views here.
User = get_user_model()



class UserRegistrationAPIView(CreateAPIView):
    serializer_class = UserRegistrationSerializer

    def create(self, request, *args, **kwargs):
        serialized = self.get_serializer(data=request.data)
        if serialized.is_valid(raise_exception=True):
            data =  serialized.validated_data
            confirm_password = data.pop('confirm_password')
            data['password'] = make_password(confirm_password)
            user =  User.objects.create(**data)
            user.save()
            context = {
                'domain': '127.0.0.1:8000',
                'uid64': urlsafe_base64_encode(force_bytes(user.id)),
                'token': generate_token.make_token(user),
                'name': user.get_name()
            }
            send_email(
                'store_hunt@store.com',
                user.email,
                context
            )
            return Response(
                {
                    'status' : 201,
                    'full_name' : user.get_name(),
                    'token': user.get_token()
                },
                status=status.HTTP_201_CREATED
            )
    
class ActivateAccountApiView(views.View):
    def get(self, request, uidb64, token):
        try:
            uid=force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except Exception as identifier:
            user = None 
        
        if user.is_active:
            message = {'details': 'User account already activated'}
            return Response(message, status=status.HTTP_400_BAD_REQUEST)
        if user and generate_token.check_token(token, user):
            user.is_active = True
            user.save()
            message = {'details': 'Account has been activated successfully you can proceed to login'}
            return Response(message, status=status.HTTP_200_OK)
