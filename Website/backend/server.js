const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Security middleware
app.use(helmet())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5174',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Chime Tex International API is running',
    timestamp: new Date().toISOString()
  })
})

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, subject, message, inquiryType } = req.body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      })
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      })
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send auto-response to user

    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      subject,
      message,
      inquiryType,
      timestamp: new Date().toISOString()
    })

    res.json({
      success: true,
      message: 'Thank you for your inquiry. We will get back to you within 24 hours.'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    })
  }
})

// Product inquiry endpoint
app.post('/api/product-inquiry', async (req, res) => {
  try {
    const { productId, name, email, company, message } = req.body

    // Validation
    if (!productId || !name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      })
    }

    console.log('Product inquiry:', {
      productId,
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    })

    res.json({
      success: true,
      message: 'Thank you for your product inquiry. Our experts will contact you soon.'
    })

  } catch (error) {
    console.error('Product inquiry error:', error)
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your inquiry. Please try again later.'
    })
  }
})

// Get manufacturers data
app.get('/api/manufacturers', (req, res) => {
  const manufacturers = [
    {
      id: 'ssm',
      name: 'SSM Schärer Schweiter Mettler AG',
      country: 'Switzerland',
      established: 1920,
      specialties: ['Precision Winding', 'Assembly Winding', 'Embroidery Threading'],
      website: 'https://www.ssm.ch/'
    },
    {
      id: 'brueckner',
      name: 'Brückner Maschinenbau',
      country: 'Germany',
      established: 1949,
      specialties: ['Stenter Technology', 'Coating Lines', 'Film Processing'],
      website: 'https://www.brueckner-textile.com/en/'
    },
    {
      id: 'lafer',
      name: 'Lafer S.p.A.',
      country: 'Italy',
      established: 1974,
      specialties: ['Ring Spinning', 'Open-End Spinning', 'Texturing'],
      website: 'https://www.laferspa.com/'
    },
    {
      id: 'zimmer',
      name: 'Zimmer Austria GmbH',
      country: 'Austria',
      established: 1960,
      specialties: ['Carpet Manufacturing', 'Technical Textiles', 'Nonwovens'],
      website: 'https://www.zimmer-austria.com/'
    }
  ]

  res.json({
    success: true,
    data: manufacturers
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Chime Tex International Backend Server running on port ${PORT}`)
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`)
})
