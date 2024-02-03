# Backend Server for Password Strength Checker
This backend server is designed to interface with the OpenAI API to assess the strength of passwords. It features JWT-based authentication to secure the endpoint that checks password strength.

# Features
- JWT Authentication: Securely generates and verifies JWT tokens for authenticated access to the password strength checking endpoint.
- OpenAI Integration: Utilizes the OpenAI API to evaluate the strength of passwords.
- CORS Configuration: Includes basic CORS setup for development with the option to configure for specific domains in production.

# Prerequisites
- Node.js
- npm or yarn
- Access to OpenAI API (API key required)

# Installation

## Clone the repository:

```bash
    git clone <repository-url>
    cd <repository-directory>
```

## Install dependencies:

```bash
npm install
```

or if you use `yarn`:

```bash
yarn install
```

## Set up environment variables:

Create a `.env` file in the root of your project and add your OpenAI API key and a secret key for JWT:

```plaintext
OPENAI_API_KEY=your_openai_api_key_here
SECRET_KEY=your_jwt_secret_key_here
```

# Usage

## Start the server with:

```bash
npm start
```

or using yarn:

```bash
yarn start
```

The server will run on http://localhost:5000 by default.

# Endpoints

- GET /auth: Generates a JWT for authenticated access.
- POST /check-password: Accepts a password in the request body and returns the strength assessment. Requires a valid JWT in the Authorization header.

# Development

For local development, you can use tools like Postman or Insomnia to test the API endpoints. Ensure the Authorization header is set with the JWT obtained from the /auth endpoint when testing /check-password.

# Production

Before deploying to production, ensure to:

- Update the CORS policy in server.js to allow only specific, trusted domains.
- Secure your environment variables, especially the OpenAI API key and JWT secret.
- Monitor and limit usage to prevent abuse of the OpenAI API and your server resources.

# Contributing
Contributions are welcome. Please open an issue or pull request with your suggestions or improvements.

# License

`MIT`