# Store Hunts Backend

Welcome to the backend repository for Store Hunts, an e-commerce website.

## Getting Started

1. **Create Virtual Environment**: 
   ```
   python3 -m venv env
   ```

2. **Install Dependencies**: 
   ```
   pip install -r requirements.txt
   ```
3. **Setup Postgres as your db**

4. **Environment Variables**:
   Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   DBUSER=<your_database_username>
   DB=<your_database_name>
   PASSWORD=<your_database_password>
   PORT=<your_database_port>
   SECRET_KEY=<your_secret_key>
   DEBUG=<True_or_False>
   EMAIL_HOST=<your_email_host>
   EMAIL_HOST_PASSWORD=<your_email_password>
   EMAIL_HOST_USER=<your_email_host_user>
   EMAIL_PORT=<your_email_port>
   EMAIL_USE_TLS=<True_or_False>
   ```

4. **Email Testing**:
   For email testing, install [MailHog](https://github.com/mailhog/MailHog).

## Features

- **User Authentication**: Secure authentication system for user login (JWT token) and registration.
- **Product Management**: CRUD operations for managing product listings.
- **Order Processing**: Facilitates order placement, tracking, and management.
- **Payment Integration**: Seamless integration with payment gateways for secure transactions.
- **Email Notifications**: Automated email notifications for order confirmation, shipment tracking, etc.


## API Documentation
API documentation coming soon.
