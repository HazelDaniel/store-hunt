# Store Hunts Backend

Welcome to the backend repository for Store Hunts, an e-commerce website.

Store-Hunts was born out of a spark of inspiration from a dear friend [Hazel Daniel](https://github.com/HazelDaniel) who is a passionate fashion enthusiast. 👗👠 With a dream to create a vibrant platform that connects talented fashion designers with style seekers around the world, we embarked on this exciting journey. My friend's unwavering dedication to fashion and the creative community inspired me to build this API, providing the essential backbone for a seamless and engaging user experience on the Store-Hunts frontend.

Our Vision 🚀💡
At Store-Hunts, we aim to revolutionize the way fashion designers and consumers connect, collaborate, and create. This API is designed to be the powerhouse behind a platform that fosters creativity, supports emerging talent, and makes high-quality fashion accessible to everyone. 🌍✨

What You'll Find Here 📚🔍
This documentation will guide you through everything you need to know to effectively utilize the Store-Hunts API. Whether you're a developer integrating our API into your application or just curious about how it works, we've got you covered! From authentication to endpoints, and from request formats to response codes, we ensure you have all the tools you need to make the most out of Store-Hunts. 💻💪

Let's Get Started! 🚀💃
Dive in and explore the world of fashion technology with Store-Hunts. Together, let's build something beautiful that empowers designers and delights fashion lovers everywhere. Thank you for being a part of this journey! 🌟❤️

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


4. **Email Testing**:
   For email testing, during production install [MailHog](https://github.com/mailhog/MailHog).

5. **Environment Variables**:
   Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   DBUSER=<your_database_username>
   DB=<your_database_name>
   PASSWORD=<your_database_password>
   PORT=<your_database_port>
   SECRET_KEY=<your_secret_key>
   DEBUG=<True_or_False>
   GOOGLE_CLIENT_ID=<google_client_id>
   GOOGLE_CLIENT_SECRET=<google_client_secret>
   SOCIAL_AUTH_PASSWORD=<social_password>
   EMAIL_PORT=<your_email_port>
   EMAIL_USE_TLS=<True_or_False>
   DATABASE_URL=<database_url> # for producton
   MAILGUN_API_KEY=<mail_gun_api_key> # for production
   HASH_IDS='hash_id_'
   ```


## Features

- **User Authentication**: Secure authentication system for user login (JWT token) and registration.
- **Product Management**: CRUD operations for managing product listings.
- **Order Processing**: Facilitates order placement, tracking, and management.
- **Payment Integration**: Seamless integration with payment gateways for secure transactions.
- **Email Notifications**: Automated email notifications for order confirmation, shipment tracking, etc.


## API Documentation
[Postman documentation](https://store-hunts-team.postman.co/workspace/store-hunts-team-Workspace~803429b9-1e33-4aa2-85c4-fadb6440e195/request/29589431-e35cae8a-d6c9-4a87-875f-6671c3477214?action=share&creator=29589431&ctx=documentation&active-environment=29589431-7b0482f1-b742-4d0b-9f67-cc960e504b77)

[Swagger doc](https://store-hunt-1.onrender.com/swagger-ui/#/)
