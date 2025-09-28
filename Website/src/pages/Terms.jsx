import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Shield, Award, ExternalLink } from 'lucide-react'

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-industrial-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-industrial-300 hover:text-white mb-6 transition-colors duration-200">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-primary-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Terms and Conditions</h1>
          </div>
          <p className="text-industrial-200 text-lg">
            Website terms, product credits, and business information for Chime Tex International.
          </p>
          <p className="text-industrial-300 text-sm mt-2">
            Last updated: September 28, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* About This Website */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">About This Website</h2>
              <p className="text-industrial-600 leading-relaxed">
                This website is operated by Chime Tex International (Pvt) Ltd., a textile machinery solutions 
                provider based in Sri Lanka. We specialize in representing world-class European manufacturers 
                and providing comprehensive technical support to the Sri Lankan textile industry.
              </p>
            </div>

            {/* Product Information and Credits */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4 flex items-center">
                <Award className="h-6 w-6 text-primary-600 mr-2" />
                Product Information and Credits
              </h2>
              
              <div className="bg-primary-50 border-l-4 border-primary-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-industrial-800 mb-3">Important Attribution</h3>
                <p className="text-industrial-600 leading-relaxed">
                  All product images, specifications, technical documentation, and related content displayed 
                  on this website are the intellectual property of their respective manufacturers and are 
                  used with permission as their authorized representative in Sri Lanka.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-industrial-700 mb-4">Our Manufacturing Partners</h3>
              <p className="text-industrial-600 leading-relaxed mb-4">
                We are proud to represent the following world-renowned manufacturers, and all product 
                content is credited to them:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-industrial-200 rounded-lg p-4">
                  <h4 className="font-semibold text-industrial-800 mb-2">SSM AG, Switzerland</h4>
                  <p className="text-sm text-industrial-600 mb-2">Precision winding and assembly solutions</p>
                  <a href="https://www.ssm.ch" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm">
                    Visit Official Website <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
                
                <div className="bg-white border border-industrial-200 rounded-lg p-4">
                  <h4 className="font-semibold text-industrial-800 mb-2">Brückner GmbH, Germany</h4>
                  <p className="text-sm text-industrial-600 mb-2">Stenter and coating technology</p>
                  <a href="https://www.brueckner-textile.com" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm">
                    Visit Official Website <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
                
                <div className="bg-white border border-industrial-200 rounded-lg p-4">
                  <h4 className="font-semibold text-industrial-800 mb-2">Benninger AG, Switzerland</h4>
                  <p className="text-sm text-industrial-600 mb-2">Dyeing and finishing excellence</p>
                  <a href="https://benningergroup.com" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm">
                    Visit Official Website <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
                
                <div className="bg-white border border-industrial-200 rounded-lg p-4">
                  <h4 className="font-semibold text-industrial-800 mb-2">Lafer SpA, Italy</h4>
                  <p className="text-sm text-industrial-600 mb-2">Textile finishing solutions</p>
                  <a href="https://www.laferspa.com" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm">
                    Visit Official Website <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
                
                <div className="bg-white border border-industrial-200 rounded-lg p-4">
                  <h4 className="font-semibold text-industrial-800 mb-2">Zimmer Austria</h4>
                  <p className="text-sm text-industrial-600 mb-2">Screen printing and coating technology</p>
                  <a href="https://www.zimmer-klagenfurt.com" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm">
                    Visit Official Website <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
                
                <div className="bg-white border border-industrial-200 rounded-lg p-4">
                  <h4 className="font-semibold text-industrial-800 mb-2">Comatex Italy</h4>
                  <p className="text-sm text-industrial-600 mb-2">Quality control and inspection</p>
                  <a href="https://www.comatex.net" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm">
                    Visit Official Website <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Website Use */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">Website Use</h2>
              <p className="text-industrial-600 leading-relaxed mb-4">
                This website is provided for informational purposes about textile machinery solutions 
                available in Sri Lanka. By using this website, you agree to:
              </p>
              <ul className="list-disc pl-6 text-industrial-600 leading-relaxed">
                <li>Use the website for legitimate business inquiries only</li>
                <li>Respect the intellectual property rights of our manufacturing partners</li>
                <li>Not reproduce or distribute content without permission</li>
                <li>Contact us directly for accurate pricing and availability</li>
                <li>Understand that all specifications are subject to manufacturer updates</li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">Copyright and Trademarks</h2>
              <p className="text-industrial-600 leading-relaxed mb-4">
                This website content is owned by Chime Tex International (Pvt) Ltd., except where 
                otherwise noted. Product images, specifications, and technical documentation are 
                the property of their respective manufacturers:
              </p>
              <ul className="list-disc pl-6 text-industrial-600 leading-relaxed">
                <li>SSM® is a registered trademark of SSM Schärer Schweiter Mettler AG</li>
                <li>Brückner® is a registered trademark of Brückner Maschinenbau GmbH</li>
                <li>Benninger® is a registered trademark of Benninger AG</li>
                <li>Lafer® is a registered trademark of Lafer S.p.A.</li>
                <li>Zimmer® is a registered trademark of Zimmer Maschinenbau GmbH</li>
                <li>Comatex® is a registered trademark of Comatex S.r.l.</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">Contact Information</h2>
              <div className="bg-industrial-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-industrial-800 mb-3">Chime Tex International (Pvt) Ltd.</h3>
                <div className="space-y-2">
                  <p className="text-industrial-600">
                    <strong>Email:</strong> charuka.chimetex@gmail.com
                  </p>
                  <p className="text-industrial-600">
                    <strong>Location:</strong> Colombo, Sri Lanka
                  </p>
                </div>
                <p className="text-industrial-500 text-sm mt-4">
                  For product inquiries, technical support, or quotation requests, please use our contact form 
                  or email us directly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms
