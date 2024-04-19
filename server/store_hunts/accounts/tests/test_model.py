from rest_framework.test import APIRequestFactory, APITestCase
from django.contrib.auth import get_user_model
from django.test import TestCase
"""
A test for each models created in the account app
for user authentication
"""
class CustomUserModelTest(TestCase):
    """
    User model test
    """ 
    def setUp(self) -> None:
        self.user_data = {
            'first_name': 'john', 'last_name': 'Doe',
             'password': 'userPassword123@!!', 'email': 'john@doe.com'
        }
        self.User = get_user_model()    

    def test_create_user(self) -> None:
        user = self.User.objects.create_user(**self.user_data)
        self.assertEqual(user.email, self.user_data['email'])
        self.assertEqual(user.first_name, self.user_data['first_name'])
        self.assertEqual(user.last_name, self.user_data['last_name'])
        self.assertFalse(user.is_active)
        full_name = self.user_data['first_name'] + ' ' + self.user_data['last_name']
        self.assertEqual(user.get_name(), full_name)
        
        try:
            self.assertIsNone(user.username)
        except AttributeError:
            pass 
        with self.assertRaises(TypeError):
            self.User.objects.create_user()
        with self.assertRaises(ValueError): 
            self.User.objects.create_user(email='')
        with self.assertRaises(ValueError):
            self.User.objects.create_user(email='', password=self.user_data['password'])


    def test_create_super_user(self) -> None:
        # a test for the creattion of a superuser
        superuser_data = {
            'first_name': 'superman',
            'last_name': 'man of steel',
            'email': 'superman@man_of_steel.com',
            'password': 'IamSuperMan1930'
        }
        super_user = self.User.objects.create_superuser(**superuser_data)
        self.assertTrue(super_user.is_active)
        self.assertTrue(super_user.is_staff)
        self.assertTrue(super_user.is_superuser)

        try:
            self.assertIsNone(super_user.username)
        except AttributeError:
            pass 
        with self.assertRaises(TypeError):
            self.User.objects.create_user()
        with self.assertRaises(ValueError): 
            self.User.objects.create_user(email='')
        with self.assertRaises(ValueError):
            self.User.objects.create_user(email='', password=superuser_data['password'])
        
         
    def test_create_user_as_seller(self) -> None:
        # test if created user is a seller
        self.user_data['is_seller'] = True
        user = self.User.objects.create_user(**self.user_data)
        self.assertEqual(user.email, self.user_data['email'])
        self.assertEqual(user.first_name, self.user_data['first_name'])
        self.assertEqual(user.last_name, self.user_data['last_name'])
        self.assertFalse(user.is_active)
        self.assertTrue(user.is_seller)
        full_name = self.user_data['first_name'] + ' ' + self.user_data['last_name']
        self.assertEqual(user.get_name(), full_name)
        try:
            self.assertIsNone(user.username)
        except AttributeError:
            pass 
        with self.assertRaises(TypeError):
            self.User.objects.create_user()
        with self.assertRaises(ValueError): 
            self.User.objects.create_user(email='')
        with self.assertRaises(ValueError):
            self.User.objects.create_user(email='', password=self.user_data['password'])
    