from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
import six



class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user: AbstractBaseUser, timestamp: int) -> str:
        return (
            six.text_type(user.pk)+six.text_type(timestamp)+six.text_type(user.is_active)
        )

generate_token = TokenGenerator()


def send_email(from_email : str, to : str, context : dict) -> None:
    subject = "Verification Email"
    to = [to]
    message = render_to_string('mail/token_templates.html', context)
    msg = EmailMessage(subject, message, to=to,  from_email=from_email)
    msg.content_subtype = 'html'
    print('refuse to send------------')
    try:
        msg.send()
    except:
        print('not working-----------------')

