# Chime Tex International Backend API

A Node.js/Express backend API for the Chime Tex International website, providing endpoints for contact forms, product inquiries, and data management.

## Features

- **Contact Form Processing**: Handle customer inquiries with validation
- **Product Inquiries**: Manage product-specific questions and requests
- **Data APIs**: Serve manufacturer and product information
- **Security**: Rate limiting, CORS, and security headers
- **Email Integration**: Automated email notifications (configurable)

## Quick Start

### Prerequisites
- Node.js 16+ and npm
- MongoDB (optional, for data persistence)

### Installation

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment setup:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Start production server:**
   ```bash
   npm start
   ```

## API Endpoints

### Health Check
- `GET /api/health` - Server status check

### Contact & Inquiries
- `POST /api/contact` - Submit contact form
- `POST /api/product-inquiry` - Submit product inquiry

### Data Endpoints
- `GET /api/manufacturers` - Get manufacturer information

## Request Examples

### Contact Form Submission
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "company": "ABC Textiles",
    "phone": "+94771234567",
    "subject": "Machinery Inquiry",
    "message": "Interested in SSM winding machines",
    "inquiryType": "quote"
  }'
```

### Product Inquiry
```bash
curl -X POST http://localhost:5000/api/product-inquiry \
  -H "Content-Type: application/json" \
  -d '{
    "productId": "ssm-precision-winding",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "company": "XYZ Mills",
    "message": "Need specifications for high-speed winding"
  }'
```

## Configuration

### Environment Variables
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS
- `MONGODB_URI` - MongoDB connection string
- `EMAIL_*` - Email service configuration
- `JWT_SECRET` - JWT signing secret

### Security Features
- Rate limiting (100 requests per 15 minutes per IP)
- CORS protection
- Security headers via Helmet
- Input validation and sanitization

## Development

### Scripts
- `npm run dev` - Start with nodemon (auto-reload)
- `npm start` - Start production server
- `npm run install-deps` - Install dependencies

### Adding New Endpoints
1. Add route handler in `server.js`
2. Implement validation and error handling
3. Test with appropriate HTTP client
4. Update API documentation

## Deployment

### Environment Setup
1. Set production environment variables
2. Configure email service (SMTP/SendGrid/etc.)
3. Set up MongoDB database
4. Configure reverse proxy (nginx/Apache)

### Production Considerations
- Use process manager (PM2/Forever)
- Set up logging and monitoring
- Configure SSL/TLS certificates
- Implement database backup strategy

## Integration with Frontend

The backend is configured to work with the React frontend:
- CORS enabled for frontend URL
- JSON API responses
- Error handling with proper HTTP status codes
- Validation messages for forms

## Security

- Input validation on all endpoints
- Rate limiting to prevent abuse
- CORS configuration for frontend access
- Security headers via Helmet middleware
- Environment variable protection

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- User authentication system
- File upload handling
- Email template system
- API documentation with Swagger
- Logging and monitoring integration
- Cache implementation (Redis)

## Support

For technical support or questions about the API, contact the development team or refer to the main project documentation.

---

**Chime Tex International (Pvt) Ltd.**
*Backend API for textile machinery solutions*
