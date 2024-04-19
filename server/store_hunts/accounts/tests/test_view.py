from rest_framework.test import APIRequestFactory, APITestCase
from django.contrib.auth import get_user_model
"""
A test for each view created in the account app
for user authentication
"""
User  = get_user_model()
class UserRegistrationTest(APITestCase):
    """
    User registration test case
    """
    def setUp(self):
        self.factory = APIRequestFactory()
    
    def tearDown(self) -> None:
        ...

    def create_user(self) -> None:
        pass
    
    
    def create_super_user(self) -> None:
        pass
    
    def create_user_as_seller(self) -> None:
        pass