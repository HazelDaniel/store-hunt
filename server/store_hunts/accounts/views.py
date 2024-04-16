from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from .serializers import UserRegistrationSerializer
from rest_framework.response import Response
from rest_framework import status
# Create your views here.




class UserRegistrationAPIView(CreateAPIView):
    serializer_class = UserRegistrationSerializer