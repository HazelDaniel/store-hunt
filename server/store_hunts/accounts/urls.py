from django.urls import path, include
from. import views


urlpatterns = [
    path('auth/signup',
         views.UserRegistrationAPIView.as_view(),
         name='user_registration'
    ),
]