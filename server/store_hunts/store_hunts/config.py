# this config file contains all global variable used in the app
import os

if os.environ["DEBUG"] == "1":
    # email config for mailhog
    EMAIL_HOST = os.environ.get("EMAIL_HOST")
    EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD")
    EMAIL_HOST_USER = os.environ.get("EMAIL_HOST_USER")
    EMAIL_PORT = os.environ.get("EMAIL_PORT")
    EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD")
    EMAIL_USE_TLS = os.environ.get("EMAIL_USE_TLS") == "True"

    # database config
    DBUSER = "simi"
    DB = "store_hunts_db"
    PASSWORD = "blueoak123!"
    PORT = 5432

    # DOMAIN
    DOMAIN = "localhost:8000"
else:
    # email config for mailgun
    EMAIL_HOST = os.environ.get("EMAIL_HOST")
    EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD")
    EMAIL_HOST_USER = os.environ.get("EMAIL_HOST_USER")
    EMAIL_PORT = int(os.environ.get("EMAIL_PORT"))
    EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD")
    EMAIL_USE_TLS = os.environ.get("EMAIL_USE_TLS") == "True"

    # database config
    DBUSER = os.environ.get("DBUSER")
    DB = os.environ.get("DB")
    PASSWORD = os.environ.get("PASSWORD")
    PORT = int(os.environ.get("PORT"))

    # DOMAIN
    DOMAIN = None
