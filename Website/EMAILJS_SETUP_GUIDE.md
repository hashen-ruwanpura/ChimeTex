# EmailJS Setup Guide for ChimeTex Contact Form

## Quick Setup Checklist

### 1. Create EmailJS Account
- [ ] Go to https://www.emailjs.com/
- [ ] Sign up with charuka.chimetex@gmail.com (or any email)
- [ ] Verify your email address

### 2. Add Gmail Service
- [ ] Go to "Email Services" → "Add New Service"
- [ ] Choose "Gmail"
- [ ] Connect charuka.chimetex@gmail.com
- [ ] Note down your **Service ID** (e.g., service_abc123)

### 3. Create Email Template
- [ ] Go to "Email Templates" → "Create New Template"
- [ ] Template Name: "ChimeTex Contact Form"
- [ ] Copy the template content below:

#### Template Subject:
```
New Inquiry from ChimeTex Website - {{from_name}}
```

#### Template Content:
```
New contact form submission from ChimeTex International website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Subject: {{subject}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
This message was sent automatically from the ChimeTex website contact form.
Submitted on: {{submission_date}}
```

- [ ] Save template and note down **Template ID** (e.g., template_xyz789)

### 4. Get Public Key
- [ ] Go to "Account" → "General"
- [ ] Copy your **Public Key** (starts with letters/numbers)

### 5. Update Contact Form Code
Open `/src/pages/Contact.jsx` and replace these values around line 43:

```javascript
const serviceID = 'YOUR_SERVICE_ID' // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID' // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your Public Key
```

### 6. Test the Contact Form
1. Save all files
2. Go to your website contact form
3. Fill out and submit a test message
4. Check charuka.chimetex@gmail.com for the email

## Example Configuration
After setup, your code should look like:
```javascript
const serviceID = 'service_abc123x'
const templateID = 'template_xyz789y'  
const publicKey = 'Bm8x9YyTqW-AbC123'
```

## Troubleshooting
- **No email received**: Check spam folder, verify Service ID/Template ID
- **Console errors**: Check browser developer tools, verify Public Key
- **Form not submitting**: Check internet connection, verify EmailJS account is active

## Free Tier Limits
- 200 emails/month (more than enough for contact form)
- No credit card required
- Perfect for small business websites

---
Need help? Contact hashen.ruwanpura@gmail.com or check EmailJS documentation.
