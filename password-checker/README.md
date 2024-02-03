
# Password Strength Checker Frontend

This React application interacts with a backend server to evaluate the strength of passwords using the OpenAI API. It features a user-friendly interface that allows users to input a password and receive instant feedback on its strength. The application uses JWT for secure communication with the backend server.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development purposes.

### Prerequisites

- Node.js and npm installed on your machine
- A running instance of the backend server for the Password Strength Checker

### Installation

Clone the repository

```bash
git clone <repository-url>
cd <frontend-project-directory>
```

### Install dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root of the frontend project directory and specify the backend server URL from `.env.sample`:

```plaintext
REACT_APP_BACKEND_URL=http://localhost:5000
```

Adjust the REACT_APP_BACKEND_URL according to your backend server configuration.

### Run test

```bash
npm test
```

### Start the Development Server

```bash
npm start
```

This will run the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload if you make edits.

## Usage

Enter a password into the provided input field on the webpage.
Click the "Check Strength" button to assess the strength of the entered password.
The application will display the strength of the password, indicated by the text color (green for strong, red for weak).

## Building for Production

To build the app for production, run:

```bash
npm run build
```

This builds the app to the build folder, optimizing it for the best performance.

## Contributing

We welcome contributions. Please feel free to fork the repository and submit pull requests.

## License

This project is licensed under the `MIT License`.