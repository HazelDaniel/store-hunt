import io
import re

import requests
import six
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.exceptions import ValidationError
from django.core.files.base import ContentFile
from django.core.mail import EmailMessage
from django.db import connection
from django.template.loader import render_to_string
from PIL import Image
from rest_framework.exceptions import ValidationError


class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user: AbstractBaseUser, timestamp: int) -> str:
        return (
            six.text_type(user.pk)
            + six.text_type(timestamp)
            + six.text_type(user.is_active)
        )


generate_token = TokenGenerator()


def send_email(subject: str, from_email: str, to: str, context: dict) -> None:
    to = [to]
    message = render_to_string("mail/token_template.html", context)
    msg = EmailMessage(subject, message, to=to, from_email=from_email)
    msg.content_subtype = "html"
    msg.send()


def validate_phone_number(number: str) -> None:
    pattern = "^(090|081|070|080)\d{8}$"
    match = re.match(pattern, number)
    if not match:
        raise ValidationError("Invalid phone number format")


def load_image(image_url: str) -> ContentFile:
    """
    Handles loading https file during testing stage from json.
    """
    if not image_url.startswith("https"):
        raise ValidationError("Invalid URL: Must start with https")

    response = requests.get(image_url)

    if response.status_code != 200:
        raise ValidationError("Unable to download image")

    image_file = io.BytesIO(response.content)
    try:
        image = Image.open(image_file)
        image.verify()  # Verify that it is an image
        image_file.seek(0)  # Reset file pointer after verify
        image = Image.open(image_file)  # Re-open for actual use
    except (IOError, SyntaxError) as e:
        raise ValidationError(f"Unable to open image: {e}")

    # Save the image to a BytesIO object
    image_io = io.BytesIO()
    image.save(image_io, format=image.format)
    image_content = ContentFile(
        image_io.getvalue(), name=f"image.{image.format.lower()}"
    )

    return image_content

