import React from 'react'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight 
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-industrial-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">CT</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Chime Tex International</h3>
                <p className="text-sm text-industrial-300">(Pvt) Ltd.</p>
              </div>
            </div>
            <p className="text-industrial-300 text-sm leading-relaxed mb-4">
              Leading agents in bringing world-class textile machinery to Sri Lanka. 
              Partnering with top manufacturers to deliver cutting-edge solutions for the textile industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-industrial-400 hover:text-primary-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-industrial-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-industrial-400 hover:text-primary-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-industrial-400 hover:text-primary-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Products</span>
                </Link>
              </li>
              <li>
                <Link to="/manufacturers" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Manufacturers</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=spinning" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Spinning Machines</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=weaving" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Weaving Machines</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=finishing" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Finishing Equipment</span>
                </Link>
              </li>
              <li>
                <Link to="/products?category=dyeing" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Dyeing Machines</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-industrial-300 text-sm">
                    123 Business District, Colombo 03,<br />
                    Sri Lanka
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <p className="text-industrial-300 text-sm">+94 11 234 5678</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <p className="text-industrial-300 text-sm">info@chimetex.lk</p>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-industrial-300 text-sm">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 8:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-industrial-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-industrial-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Chime Tex International (Pvt) Ltd. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm text-industrial-400">
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
