import re

import requests
import six
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from rest_framework.exceptions import ValidationError
from PIL import Image
import io
from django.core.files.base import ContentFile
from django.core.exceptions import ValidationError
from django.db import connection

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
    if not image_url.startswith('https'):
        raise ValidationError('Invalid URL: Must start with https')

    response = requests.get(image_url)
    
    if response.status_code != 200:
        raise ValidationError('Unable to download image')
    
    image_file = io.BytesIO(response.content)
    try:
        image = Image.open(image_file)
        image.verify()  # Verify that it is an image
        image_file.seek(0)  # Reset file pointer after verify
        image = Image.open(image_file)  # Re-open for actual use
    except (IOError, SyntaxError) as e:
        raise ValidationError(f'Unable to open image: {e}')
    
    # Save the image to a BytesIO object
    image_io = io.BytesIO()
    image.save(image_io, format=image.format)
    image_content = ContentFile(image_io.getvalue(), name=f'image.{image.format.lower()}')
    
    return image_content

    


def get_products_under_category(category: str) -> list:
    with connection.cursor() as cursor:
        cursor.execute('''
            WITH RECURSIVE subcategories AS (
                SELECT id, name, parent_id
                FROM Category
                WHERE name = %s
                UNION ALL
                SELECT c.id, c.name, c.parent_id
                FROM Category c
                INNER JOIN subcategories s ON s.id = c.parent_id
            )
            SELECT DISTINCT p.id AS product_id, p.name AS product_name, p.price, c.id AS category_id, c.name AS category_name
            FROM subcategories c
            LEFT JOIN Product p ON p.category_id = c.id
            JOIN product_item pt ON pt.product_id = p.id;
        ''', [category])
        rows = cursor.fetchall()
 
    # Convert the result into a list of dictionaries
    columns = [col[0] for col in cursor.description]
    result = [dict(zip(columns, row)) for row in rows]
    return result