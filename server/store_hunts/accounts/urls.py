from django.urls import path, include
from. import views


urlpatterns = [
    path('auth/signup',
         views.UserRegistrationAPIView.as_view(),
         name='user_registration'
    ),
    path('account/activate/<str:uidb64>/<str:token>',
         views.ActivateAccountApiView.as_view(),
         name='activate')
]