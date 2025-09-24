import React, { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  User,
  Building,
  MessageSquare
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request Quote' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'service', label: 'After-Sales Service' }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-industrial-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-xl card-shadow">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-industrial-800 mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-industrial-600 mb-6">
            Thank you for contacting Chime Tex International. Our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-industrial-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our textile machinery experts. We're here to help you find the perfect solutions for your business.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-bold text-industrial-800 mb-6">
                Get In Touch
              </h3>
              <p className="text-industrial-600 mb-8 leading-relaxed">
                Ready to transform your textile operations? Our expert team is here to provide 
                personalized solutions and technical guidance.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-800 mb-1">Address</h4>
                    <p className="text-industrial-600">
                      123 Business District,<br />
                      Colombo 03, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-800 mb-1">Phone</h4>
                    <p className="text-industrial-600">+94 11 234 5678</p>
                    <p className="text-industrial-600">+94 77 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-800 mb-1">Email</h4>
                    <p className="text-industrial-600">info@chimetex.lk</p>
                    <p className="text-industrial-600">sales@chimetex.lk</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-industrial-800 mb-1">Business Hours</h4>
                    <p className="text-industrial-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-bold text-industrial-800 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label className="block text-sm font-semibold text-industrial-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-industrial-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-industrial-700 mb-2">
                      <Building className="inline h-4 w-4 mr-1" />
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-industrial-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-industrial-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-industrial-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-industrial-700 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-1" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Please provide details about your requirements, current setup, production capacity, or any specific questions you have about our machinery solutions."
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center ${
                      isSubmitting
                        ? 'bg-industrial-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-industrial-800 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-industrial-600">
              Located in the heart of Colombo's business district, our office is easily accessible.
            </p>
          </div>
          
          <div className="bg-industrial-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-industrial-400 mx-auto mb-4" />
              <p className="text-industrial-600">
                Interactive map would be integrated here<br />
                (Google Maps, OpenStreetMap, etc.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us Now</h3>
              <p className="text-blue-100 mb-4">
                Speak directly with our experts for immediate assistance.
              </p>
              <a
                href="tel:+94112345678"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                +94 11 234 5678
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100 mb-4">
                Send us your detailed requirements and get a comprehensive response.
              </p>
              <a
                href="mailto:info@chimetex.lk"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                info@chimetex.lk
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-blue-100 mb-4">
                Chat with our support team during business hours.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
