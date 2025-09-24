# Chime Tex International - Complete Setup Guide

This guide will walk you through setting up and running the complete Chime Tex International website with both frontend and backend components.

## 🚀 Quick Start Commands

### Frontend Development Server
```bash
# Install dependencies and start frontend
npm install
npm run dev
```
**URL**: http://localhost:5174

### Backend API Server
```bash
# Install backend dependencies and start API server
cd backend
npm install
npm run dev
```
**URL**: http://localhost:5000

## 📋 Step-by-Step Setup

### 1. Frontend Setup
```bash
# Install all frontend dependencies
npm install

# Available scripts:
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env file with your configuration

# Start development server
npm run dev
```

### 3. Environment Configuration

#### Frontend (.env)
Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Chime Tex International
```

#### Backend (.env)
Configure backend environment in `backend/.env`:
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5174
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🛠 Dependencies Overview

### Frontend Dependencies
- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations
- **Axios** - HTTP client for API calls

### Backend Dependencies
- **Express.js** - Web framework for Node.js
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Nodemailer** - Email sending functionality
- **Rate Limiting** - API protection
- **Input Validation** - Data sanitization

## 🌐 Deployment Options

### Option 1: Netlify (Frontend) + Heroku/Railway (Backend)

#### Frontend on Netlify
1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Environment variables: Add your `VITE_*` variables

#### Backend on Heroku
1. Create new Heroku app
2. Connect GitHub repository
3. Set environment variables in Heroku dashboard
4. Deploy from main branch

### Option 2: Vercel (Full Stack)
```bash
# Deploy frontend
npx vercel

# Deploy backend as serverless functions
# Move backend code to /api directory
# Configure vercel.json
```

### Option 3: Traditional VPS/Cloud Server
```bash
# Frontend build
npm run build
# Upload dist/ folder to web server

# Backend deployment
cd backend
npm install --production
pm2 start server.js --name chimetex-api
```

## 📧 Email Configuration

### Gmail SMTP Setup
1. Enable 2-factor authentication
2. Generate app password
3. Use in backend `.env`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
```

### Alternative Email Services
- **SendGrid**: High-deliverability email service
- **Mailgun**: Developer-friendly email API
- **AWS SES**: Cost-effective email service

## 🔧 Development Workflow

### 1. Daily Development
```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
cd backend && npm run dev
```

### 2. Making Changes
- Frontend: Edit files in `src/` directory
- Backend: Modify `backend/server.js` and related files
- Both servers auto-reload on changes

### 3. Testing
```bash
# Test frontend build
npm run build && npm run preview

# Test API endpoints
curl http://localhost:5000/api/health
```

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images and performance
- Fast loading on all devices

## 🎨 Customization Guide

### Branding
- Colors: Edit `tailwind.config.js`
- Logo: Replace in `src/components/Navbar.jsx`
- Fonts: Update in `src/index.css`

### Content
- Company info: Modify `src/data/index.js`
- Contact details: Update `src/pages/Contact.jsx`
- Product data: Edit product arrays in data files

### Styling
- Global styles: `src/index.css`
- Component styles: Tailwind classes in components
- Animations: CSS animations and Framer Motion

## 🔒 Security Checklist

### Frontend Security
- ✅ Secure API calls with proper headers
- ✅ Input validation on forms
- ✅ XSS protection via React
- ✅ HTTPS in production

### Backend Security
- ✅ Rate limiting implemented
- ✅ CORS configured
- ✅ Input validation and sanitization
- ✅ Security headers via Helmet
- ✅ Environment variable protection

## 📊 Performance Optimization

### Frontend
- ✅ Vite for fast builds and HMR
- ✅ Image optimization
- ✅ Lazy loading where appropriate
- ✅ Minimal bundle size

### Backend
- ✅ Express.js for fast responses
- ✅ Efficient routing
- ✅ Rate limiting to prevent abuse
- ✅ Minimal dependencies

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find process using port 5174
lsof -i :5174
# Kill the process
kill -9 <PID>
```

#### Tailwind Not Working
```bash
# Restart dev server
npm run dev
# Check tailwind.config.js configuration
```

#### API Connection Issues
- Check CORS settings in backend
- Verify API URL in frontend .env
- Ensure backend server is running

#### Email Not Sending
- Verify SMTP credentials
- Check email service settings
- Test with email service directly

## 📞 Support & Contact

### Technical Support
- Review documentation files
- Check GitHub issues/discussions
- Contact development team

### Business Inquiries
- **Company**: Chime Tex International (Pvt) Ltd.
- **Email**: info@chimetex.lk
- **Phone**: +94 11 234 5678
- **Director**: Charuka Ruwanpura

## 🎯 Next Steps

1. **Setup Development Environment**
   - Follow the step-by-step setup above
   - Test both frontend and backend locally

2. **Customize Content**
   - Update company information
   - Add real product images
   - Modify contact details

3. **Deploy to Production**
   - Choose deployment option
   - Configure environment variables
   - Test thoroughly

4. **Launch & Monitor**
   - Go live with the website
   - Monitor performance and errors
   - Gather user feedback

---

**Success!** 🎉 You now have a complete, modern website for Chime Tex International with professional design, responsive layout, and full functionality for showcasing textile machinery solutions in Sri Lanka.

*Built with React, Vite, Tailwind CSS, and Node.js for modern web performance and user experience.*
