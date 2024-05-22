# this config file contains all global variable used in the app
import os

if os.environ["DEBUG"] == "1":
    # database config
    DBUSER = "simi"
    DB = "store_hunts_db"
    PASSWORD = "blueoak123!"
    PORT = 5432

    # DOMAIN
    DOMAIN = "https://store-hunt-1.onrender.com"
else:
    # email config for mailgun
    # database config
    DBUSER = os.environ.get("DBUSER")
    DB = os.environ.get("DB")
    PASSWORD = os.environ.get("PASSWORD")
    PORT = int(os.environ.get("PORT"))

    # DOMAIN
    DOMAIN = "https://store-hunt-1.onrender.com"
