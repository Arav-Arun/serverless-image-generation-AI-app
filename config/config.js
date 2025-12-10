// Main Configuration for AWS Services
// This object bridges the frontend application with your backend AWS resources.
// Ensure these values match exactly what is in your AWS Console.

window._workshopConfig = {
  // Amazon Cognito Configuration
  // Handles user authentication (Sign Up, Sign In, Verification)
  cognito: {
    userPoolId: "us-east-1_JxCZu5YdL", // Your User Pool ID (e.g., us-east-1_xxxxxxxxx)
    userPoolClientId: "327evak9m2b09fd4qdaubvogpp", // Your App Client ID (not the Client Secret!)
    region: "us-east-1", // Region where your User Pool is created
  },

  // API Gateway Configuration
  // Endpoint for your backend Lambda functions (Image processing, etc.)
  api: {
    invokeUrl: "https://cll8deris1.execute-api.us-east-1.amazonaws.com/dev", // The base URL for your deployed API stage
  },
};

// Flag to confirm configuration is loaded before the app starts
window._configLoaded = true;
