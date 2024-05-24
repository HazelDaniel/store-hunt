from google.auth.transport import requests
from google.oauth2 import id_token
from rest_framework.exceptions import ValidationError


def validate_oauth_token(token: str) -> str:
    try:
        id_info = id_token.verify_oauth2_token(token, requests.Request())
        if "accounts.google.com" in id_info["iss"]:
            print(id_info)
            return id_info
    except Exception as e:
        print(e)
        return ValidationError("This token is either invalid or has expired")
