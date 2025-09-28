# Email Setup Instructions for Chime Tex International Contact Form

## Overview
The contact form now sends emails to `charuka.chimetex@gmail.com` when users submit inquiries through the website.

## Setup Instructions

### 1. Gmail Configuration
To enable email sending, you need to set up Gmail App Password:

1. **Enable 2-Step Verification**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification if not already enabled

2. **Generate App Password**:
   - Go to Google Account > Security > 2-Step Verification > App Passwords
   - Select "Mail" as the app
   - Generate a 16-character password
   - Save this password securely

### 2. Environment Variables
Update the `backend/.env` file with the correct email credentials:

```bash
EMAIL_USER=charuka.chimetex@gmail.com
EMAIL_PASS=your-16-character-app-password-from-step-2
```

### 3. Testing the Setup

1. **Start the Backend Server**:
   ```bash
   cd backend
   npm run dev
   ```
   Server should start on port 5001

2. **Start the Frontend**:
   ```bash
   npm run dev
   ```
   Frontend should start on port 5174

3. **Test the Contact Form**:
   - Navigate to the Contact page
   - Fill out the form completely
   - Submit the form
   - Check both:
     - `charuka.chimetex@gmail.com` inbox for the inquiry
     - The user's email for the auto-response

## Email Features

### 1. Admin Notification Email
When a user submits the contact form, an email is sent to `charuka.chimetex@gmail.com` with:
- Contact information (name, email, company, phone)
- Inquiry type and subject
- Full message content
- Timestamp in Sri Lanka time
- Reply-to address set to the user's email

### 2. Auto-Response Email
Users receive an automatic confirmation email with:
- Thank you message
- Summary of their inquiry
- Expected response time (24 hours)
- Contact information for urgent matters

### 3. Email Subjects
- Admin emails: "New Website Inquiry - [Inquiry Type]"
- User emails: "Thank you for contacting Chime Tex International"

## Troubleshooting

### Common Issues:

1. **"Authentication failed" error**:
   - Ensure 2-Step Verification is enabled
   - Use App Password, not regular Gmail password
   - Check EMAIL_USER and EMAIL_PASS in .env file

2. **Email not received**:
   - Check spam/junk folder
   - Verify email addresses are correct
   - Check server logs for error messages

3. **Port conflicts**:
   - Backend runs on port 5001 (changed from 5000)
   - Frontend runs on port 5174
   - Update CORS settings if ports change

### Server Logs
Monitor the backend console for:
- "Email sent successfully to charuka.chimetex@gmail.com"
- "Auto-response sent to user: [email]"
- Any error messages related to email sending

## Security Notes
- Never commit the actual .env file with real credentials
- App passwords are more secure than regular passwords
- Rate limiting is in place to prevent spam
- Input validation prevents malicious content

## Support
If you encounter issues with the email setup, check:
1. Gmail account settings
2. Environment variables
3. Server logs
4. Network connectivity
