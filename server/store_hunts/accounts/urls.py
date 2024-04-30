from django.urls import include, path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

from . import views

urlpatterns = [
    path(
        "auth/signup/",
        views.UserRegistrationAPIView.as_view(),
        name="user_registration",
    ),
    path(
        "auth/seller-central/signup/",
        views.SellerRegistrationAPIView.as_view(),
        name="seller_registration",
    ),
    path(
        "auth/account/activate/<str:uidb64>/<str:token>",
        views.ActivateAccountApiView.as_view(),
        name="activate",
    ),
    path("auth/login/", views.UserLoginAPIView.as_view(), name="login"),
    path("auth/logout/", views.LogOutAPIView.as_view(), name="logout"),
    path("admin/users", views.AllUserAPIView.as_view(), name="all_user"),
    # rest_framework api token
    #  path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    #  path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    #  path('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
