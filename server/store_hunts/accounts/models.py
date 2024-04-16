from datetime import datetime
from django.db import models
from django.db.models.manager import BaseManager
from django.contrib.auth.models import (AbstractBaseUser, PermissionsMixin)
import typing as t
import uuid
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
# Create your models here.


class UserBaseManager(BaseManager):
    def create_user(self, email: str, password : t.Optional[str] = None, **kwargs : dict) -> User:
        if not email:
            raise ValueError("User must have email address")
        user = self.model(email=self.normalize_email(email), **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email: str, password: str, **extrafields: dict) -> User:
        extrafields.setdefault('is_superuser', True)
        extrafields.setdefault('is_staff', True)
        return self.create_user(email, password, **extrafields)


class User(AbstractBaseUser, PermissionsMixin):
    id: uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, unique=True, editable=False)
    first_name: str = models.CharField(max_length=50, null=False)
    email: str = models.CharField(max_length=100, null=False, unique=True)
    last_name: str = models.CharField(max_length=50, null=False)
    # profile : str = models.ImageField(uplooad_to=, blank=True, null=True)
    created_at: datetime = models.DateTimeField(auto_now_add=True)
    updated_at: datetime =  models.DateTimeField(auto_now=True)
    is_superuser: bool = models.BooleanField(default=False)
    is_active: bool = models.BooleanField(default=False)
    is_seller: bool = models.BooleanField(default=False)
    USERNAME_FIELD: str = 'email'
    REQUIRED_FIELDS: list[str] = ['first_name', 'last_name']

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"
    
    def get_name(self) -> str:
        return f"{self.first_name} {self.last_name}" 
    
    @property
    def is_seller(self) -> bool:
        return self.is_seller

    @property
    def is_superuser(self) -> bool:
        return self.is_superuser

        
    def get_token(self):
        token = RefreshToken().for_user(self)
        return (str(token.access_token))

        
    class Meta:
        db_table: str = 'users'
    
    

class Buyer(models.Model):
    id: uuid = models.UUIDField(primary_key=True, default=uuid.uuid4(), editable=False)
    customer_id: uuid =  models.OneToOneField(User, related_name='buyer', on_delete=models.CASCADE)
    
    # additional data required for the buyer will be provided
    class Meta:
        db_table: str = 'buyers'
        

class Sellers(models.Model):
    id: uuid  = models.UUIDField(primary_key=True, default=uuid.uuid4(), editable=False)
    customer_id: uuid  =  models.OneToOneField(User, related_name='seller', on_delete=models.CASCADE)
    
    # additional data required for the seller will be provided
    class Meta:
        db_table = 'sellers'

class Address(models.Model):
    id: uuid = models.UUIDField(primary_key=True, default=uuid.uuid4(), unique=True, editable=False)
    state: str = models.CharField(max_length=10, null=False)
    city: str = models.CharField(max_length=20, null=False)
    postal_code: int = models.IntegerField()
    address: str = models.CharField(max_length=200, null=False)
 
    user = models.ManyToManyField('User', through="CustomerAddress",
                                  related_name='customer_address')
    class Meta:
        db_table: str = 'address'


class CustomerAddress(models.Model):
    address: uuid = models.ForeignKey(User, on_delete=models.CASCADE)
    user: uuid = models.ForeignKey(Address, on_delete=models.CASCADE)

    class Meta:
        db_table: str = 'customer_address'