from django.urls import path, include
from. import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)


urlpatterns = [
     path('auth/signup',
         views.UserRegistrationAPIView.as_view(),
         name='user_registration'
    ),
     path('account/activate/<str:uidb64>/<str:token>',
         views.ActivateAccountApiView.as_view(),
         name='activate'),

     # rest_framework api token
     path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
     path('auth//token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
     path('auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]