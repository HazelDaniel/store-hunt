from accounts.views import UserRegistrationAPIView
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIRequestFactory, APITestCase

"""
A test for each view created in the account app
for user authentication
"""
User = get_user_model()


class UserRegistrationTest(APITestCase):
    """
    User registration test case
    """

    def setUp(self):
        self.factory = APIRequestFactory()
        self.url = reverse("user_registration")
        self.User = get_user_model()
        self.view = UserRegistrationAPIView().as_view()
        self.user = {
            "first_name": "Peter",
            "last_name": "Parker",
            "email": "peter_parker@spiderman.com",
            "password": "spiderman196208.com",
            "confirm_password": "spiderman196208.com",
        }

    def test_user_creation(self):
        request = self.factory.post(self.url, self.user)
        response = self.view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
