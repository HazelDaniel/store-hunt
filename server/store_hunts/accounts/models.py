from datetime import datetime
from django.db import models
# from django.db.models.manager import BaseManager
from django.contrib.auth.models import (AbstractBaseUser, PermissionsMixin, BaseUserManager)
import typing as t
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
# Create your models here.


class UserBaseManager(BaseUserManager):
    def create_user(self, email: str, password : t.Optional[str] = None, **kwargs : dict) -> User:
        if not email:
            raise ValueError("User must have email address")
        user = self.model(email=self.normalize_email(email), **kwargs)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email: str, password: str, **extra_fields: dict) -> User:
        extra_fields.setdefault('superuser', True)
        extra_fields.setdefault('staff', True)
        extra_fields.setdefault('is_active', True)
        if not extra_fields.get('superuser'):
            raise ValueError('User must have is is_superuser attribute')
        if not extra_fields.get('staff'):
            raise ValueError('User must have is is_staff attribute')
        return self.create_user(email, password, **extra_fields)

    def create_staffuser(self, email: str, password : str, **extra_fields: dict) -> User:
        extra_fields.setdefault('staff', True)
        extra_fields.setdefault('is_active', True)
        if not extra_fields.get('staff'):
            raise ValueError('is_staff must be True')
        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    first_name: str = models.CharField(max_length=50, null=False)
    email: str = models.CharField(max_length=100, null=False, unique=True)
    last_name: str = models.CharField(max_length=50, null=False)
    created_at: datetime = models.DateTimeField(auto_now_add=True)
    profile_pic = models.ImageField(upload_to='profile_pic/%Y/%m/%d/', blank=True, null=True)
    updated_at: datetime =  models.DateTimeField(auto_now=True)
    superuser: bool = models.BooleanField(default=False)
    is_active: bool = models.BooleanField(default=False)
    is_seller: bool = models.BooleanField(default=False)
    staff: bool = models.BooleanField(default=False)
    USERNAME_FIELD: str = 'email'
    REQUIRED_FIELDS: list[str] = ['first_name', 'last_name']

    objects = UserBaseManager()

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"
    
    def get_name(self) -> str:
        return f"{self.first_name} {self.last_name}" 

    @property
    def seller_status(self):
        return self.is_seller

    @property
    def is_superuser(self):
        return self.superuser

    @property
    def is_staff(self):  # Rename the property to avoid conflicts
        return self.staff    

 
    def get_token(self):
        token = RefreshToken().for_user(self)
        return {
            'refresh': str(token),
            'access': str(token.access_token)
        }
        
    class Meta:
        db_table: str = 'users'
 

class Buyer(models.Model):
    customer_id =  models.OneToOneField(User, related_name='buyer', on_delete=models.CASCADE)
    
    # additional data required for the buyer will be provided
    class Meta:
        db_table: str = 'buyers'
        

# class Sellers(models.Model):
#     customer_id  =  models.OneToOneField(User, related_name='seller', on_delete=models.CASCADE) 
#     # additional data required for the seller will be provided
#     class Meta:
#         db_table = 'sellers'

class Address(models.Model):
    state: str = models.CharField(max_length=10, null=False)
    city: str = models.CharField(max_length=20, null=False)
    postal_code: int = models.IntegerField()
    address: str = models.CharField(max_length=200, null=False)
 
    user = models.ManyToManyField('User', through="CustomerAddress",
                                  related_name='customer_address')
    class Meta:
        db_table: str = 'address'


class CustomerAddress(models.Model):
    address = models.ForeignKey(User, on_delete=models.CASCADE)
    user = models.ForeignKey(Address, on_delete=models.CASCADE)

    class Meta:
        db_table: str = 'customer_address'