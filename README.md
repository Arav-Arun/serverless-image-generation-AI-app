# LambdaLens - Serverless Image Editing Tool

## Overview

Welcome to the Image Editing Tool! This is a serverless web application built on AWS that allows you to upload and edit images. It leverages a modern "Hacker/Terminal" theme for a unique user experience.

### Key Features

- **Secure Authentication**: Powered by Amazon Cognito.
- **Image Processing**: Backend logic handled by AWS Lambda and API Gateway.
- **Terminal UI**: A responsive, hacker-themed interface.

## Project Structure

- `index.html`: The main entry point of the application.
- `config/config.js`: Configuration file where you link your AWS resources (Cognito, API Gateway).
- `assets/`: Contains the compiled JavaScript application logic and stylesheets.
  - `index.js`: The main React application bundle.
  - `index.css`: The main stylesheet.

## Setup Instructions

1.  **Configure AWS Resources**:
    - Navigate to the `config/` directory.
    - Open `config.js`.
    - Update the `window._workshopConfig` object with your specific AWS `userPoolId`, `userPoolClientId`, `region`, and `invokeUrl`.
    - _Detailed instructions are available in [config/README.md](./config/README.md)._

2.  **Run the Application**:
    - Since this is a client-side application, you can serve it using any static file server.
    - For example, you can use `http-server` or `serve` if you have Node.js installed, or simply open `index.html` in your browser (though some features might require a proper HTTP server context due to CORS/security policies).
    - **Deploy to AWS Amplify**: For the best experience, deploy this entire folder to AWS Amplify Hosting.

## Customization

- **UI Theme**: The visual style is defined in `assets/index.css`. Key variables like `--primary-bg` and `--accent-cyan` can be tweaked in the `<style>` block within `index.html` to override defaults.
- **App Logic**: The application logic resides in `assets/index.js`. As this is a build artifact, it is recommended to edit the source code if you have access to the original repository.

## Troubleshooting

If the application fails to load or authentication errors occur, please double-check your values in `config/config.js` against your AWS Console.


Made with ❤️ by Arav Arun
