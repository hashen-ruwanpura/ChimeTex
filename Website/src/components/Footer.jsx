import React from 'react'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Phone, 
  Mail, 
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
              <div className="mr-3">
                <img 
                  src="/images/LogoUpdated.png" 
                  alt="Chime Tex International Logo" 
                  className="h-10 w-auto object-contain"
                  style={{ 
                    filter: 'brightness(1.2) contrast(1.1)',
                    borderRadius: '2px'
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">Chime Tex International</h3>
                <p className="text-sm text-industrial-300">(Pvt) Ltd.</p>
              </div>
            </div>
            <p className="text-industrial-300 text-sm leading-relaxed mb-4">
              With 15+ years of excellence, we are exclusive agents for world-renowned manufacturers like SSM AG, Brückner GmbH, Benninger AG, Lafer SpA, Zimmer Austria, and Comatex Italy.
            </p>
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

          {/* Our Partners */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Partners</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/manufacturers" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">SSM AG, Switzerland</span>
                </Link>
              </li>
              <li>
                <Link to="/manufacturers" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Brückner GmbH, Germany</span>
                </Link>
              </li>
              <li>
                <Link to="/manufacturers" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Benninger AG, Switzerland</span>
                </Link>
              </li>
              <li>
                <Link to="/manufacturers" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Lafer SpA, Italy</span>
                </Link>
              </li>
              <li>
                <Link to="/manufacturers" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Zimmer Austria</span>
                </Link>
              </li>
              <li>
                <Link to="/manufacturers" className="text-industrial-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Comatex Italy</span>
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
                    Colombo,<br />
                    Sri Lanka
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+94777241451" className="block text-industrial-300 text-sm hover:text-white transition-colors duration-200">
                    +94 777 241 451
                  </a>
                  <a href="tel:0382249499" className="block text-industrial-300 text-sm hover:text-white transition-colors duration-200">
                    038 224 9499
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:info@chimetex.com" className="block text-industrial-300 text-sm hover:text-white transition-colors duration-200">
                    info@chimetex.com
                  </a>
                  <a href="mailto:charukar@chimetex.com" className="block text-industrial-300 text-sm hover:text-white transition-colors duration-200">
                    charukar@chimetex.com
                  </a>
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
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
