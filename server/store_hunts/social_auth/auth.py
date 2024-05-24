from django.contrib.auth import authenticate, get_user_model
from django.conf import settings
from rest_framework.exceptions import AuthenticationFailed
from .utils import validate_oauth_token
from django.contrib.auth.hashers import make_password


User = get_user_model()


def login_social_user(email: str, password: str) -> dict:
    # login user via gooogle social oauth
    user = authenticate(email=email, password=password)
    try:
        data = {
            "id": user.hash_id,
            "email": user.email,
            "full_name": user.get_name(),
            "is_seller": user.is_seller,
            "is_superuser": user.is_superuser,
            "created_at": user.created_at,
            "avatar": user.profile_pic.url,
            "token": user.get_token(),
        }
    except ValueError:
        data = {
            "id": user.hash_id,
            "email": user.email,
            "full_name": user.get_name(),
            "is_seller": user.is_seller,
            "is_superuser": user.is_superuser,
            "created_at": user.created_at,
            "avatar": None,
            "token": user.get_token(),
        }
    return data


def register_social_user(
    provider: str, email: str, first_name: str, last_name: str, is_seller: bool = False
) -> dict:
    """
    handle social auth user login
    """
    user = User.objects.filter(email=email)

    if user.exists():
        if provider == user[0].auth_provider:
            return login_social_user(email, settings.SOCIAL_AUTH_PASSWORD)
        else:
            message = f"please continue your login with {user[0].auth_provide}"
            raise AuthenticationFailed(detail=message)
    password = make_password(settings.SOCIAL_AUTH_PASSWORD)
    user_data = {
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password,
        "is_seller": is_seller,
        "provider": provider,
        "is_active": True,
    }
    reg_user = User.objects.create(**user_data)
    return login_social_user(
        email=reg_user.email, password=settings.SOCIAL_AUTH_PASSWORD
    )
