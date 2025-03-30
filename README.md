# Phishing Attack Demonstration

## Educational Purposes Only

This project is a demonstration of how phishing attacks work, created specifically for cybersecurity education and training. It is **NOT** intended for actual authentication or malicious use. The login form demonstrates how phishing attacks can collect credentials and redirect users to legitimate websites without their knowledge.

## Project Overview

This demo application illustrates:

- How phishing sites can mimic legitimate login forms
- The redirection techniques used in phishing attacks
- Various security features that can help protect against phishing
- Educational tips for identifying and avoiding phishing attempts

## Key Features

The application simulates a phishing attack while providing educational context:

1. **Credential Collection Demonstration** - Shows how any credentials entered could be collected
2. **Redirection to Google** - Demonstrates how users can be redirected after credentials are captured
3. **Educational Warnings** - Clear disclaimers explain the educational nature of the demonstration
4. **Security Settings** - Interactive controls to demonstrate different security aspects

## Important Security Warnings

- **DO NOT** enter actual credentials into this demo
- **DO NOT** use this code for malicious purposes
- **DO NOT** deploy this demo on a public server without explicit educational context
- **DO NOT** use this to trick or deceive others

## Appropriate Educational Use

This demo is appropriate for:

- Cybersecurity classes and training
- Educational demonstrations about phishing threats
- IT security awareness programs
- Teaching users how to identify phishing attempts

## How It Works

The form accepts any credentials and then:
1. Displays a "successful login" message
2. Logs the credentials to the console (for demonstration purposes only)
3. Redirects the user to Google.com after a short delay

This simulates how real phishing attacks can operate while directing users to legitimate sites to avoid suspicion.

## Phishing Protection Tips

The app includes educational content on how to protect against phishing:

- Always verify the URL in your browser's address bar
- Check for HTTPS and a valid SSL certificate
- Be suspicious of urgent requests for credentials
- Use password managers that won't autofill on fake sites
- Enable two-factor authentication when possible
- Avoid clicking links in emails; go directly to sites instead

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- Vite

## Development

1. Clone the repository
2. Install dependencies with `bun install`
3. Start the development server with `bun run dev`

## Disclaimer

This project is for educational purposes only. It is designed solely to teach about phishing threats in a controlled environment. The maintainers and contributors of this project are not responsible for any misuse of this code or information.
