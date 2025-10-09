import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Eye, Lock, Mail, Phone } from 'lucide-react'

const Privacy = () => {
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
            <Shield className="h-8 w-8 text-primary-400 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-industrial-200 text-lg">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
            
            {/* Introduction */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4 flex items-center">
                <Eye className="h-6 w-6 text-primary-600 mr-2" />
                Introduction
              </h2>
              <p className="text-industrial-600 leading-relaxed">
                Chime Tex International (Pvt) Ltd. ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website or use our services. We are a textile machinery solutions provider based in Sri Lanka, 
                specializing in representing world-class manufacturers including SSM AG, Brückner GmbH, Benninger AG, 
                Lafer SpA, Zimmer Austria, and Comatex Italy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-industrial-700 mb-3">Personal Information</h3>
              <p className="text-industrial-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-industrial-600 leading-relaxed mb-6">
                <li>Contact us through our inquiry forms</li>
                <li>Request product information or quotations</li>
                <li>Subscribe to our newsletters or updates</li>
                <li>Participate in our surveys or feedback forms</li>
                <li>Engage with our customer support services</li>
              </ul>

              <p className="text-industrial-600 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-industrial-600 leading-relaxed mb-6">
                <li>Name and contact information (email address, phone number, company name)</li>
                <li>Business information (industry, company size, machinery requirements)</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-industrial-700 mb-3">Technical Information</h3>
              <p className="text-industrial-600 leading-relaxed mb-4">
                We automatically collect certain technical information when you visit our website:
              </p>
              <ul className="list-disc pl-6 text-industrial-600 leading-relaxed">
                <li>IP address and browser type</li>
                <li>Operating system and device information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website and search terms used</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">How We Use Your Information</h2>
              <p className="text-industrial-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-industrial-600 leading-relaxed">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To provide information about our textile machinery solutions</li>
                <li>To process and follow up on quotation requests</li>
                <li>To send you updates about our products and services (with your consent)</li>
                <li>To improve our website and customer experience</li>
                <li>To comply with legal obligations and protect our business interests</li>
                <li>To maintain relationships with our manufacturing partners</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-industrial-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-industrial-600 leading-relaxed">
                <li><strong>Manufacturing Partners:</strong> We may share relevant business information with our 
                    authorized manufacturers (SSM AG, Brückner GmbH, Benninger AG, Lafer SpA, Zimmer Austria, 
                    Comatex Italy) when necessary to provide you with accurate product information and support</li>
                <li><strong>Service Providers:</strong> We may share information with trusted service providers 
                    who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or 
                    to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information 
                    may be transferred as part of the business assets</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-primary-600 mr-2" />
                Data Security
              </h2>
              <p className="text-industrial-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet or electronic storage is 100% secure. While we strive to protect your information, 
                we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">Your Rights</h2>
              <p className="text-industrial-600 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-industrial-600 leading-relaxed">
                <li><strong>Access:</strong> You can request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> You can request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Opt-out:</strong> You can unsubscribe from our marketing communications at any time</li>
                <li><strong>Data Portability:</strong> You can request a copy of your data in a structured format</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">Cookies and Tracking</h2>
              <p className="text-industrial-600 leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
                Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 text-industrial-600 leading-relaxed">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website functionality</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
              <p className="text-industrial-600 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences. However, disabling cookies may 
                affect your website experience.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">Third-Party Links</h2>
              <p className="text-industrial-600 leading-relaxed">
                Our website may contain links to third-party websites, including our manufacturing partners' sites 
                (SSM AG, Brückner GmbH, Benninger AG, Lafer SpA, Zimmer Austria, Comatex Italy). We are not 
                responsible for the privacy practices of these external sites. We encourage you to review their 
                privacy policies before providing any personal information.
              </p>
            </div>

            {/* Updates */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">Policy Updates</h2>
              <p className="text-industrial-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
                requirements. We will notify you of any significant changes by posting the updated policy on our 
                website with a new "Last updated" date. Your continued use of our services after such modifications 
                constitutes your acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-industrial-800 mb-4">Contact Us</h2>
              <p className="text-industrial-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-industrial-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-industrial-800 mb-3">Chime Tex International (Pvt) Ltd.</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-industrial-600">charuka.chimetex@gmail.com</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary-600 mr-3 mt-0.5" />
                    <span className="text-industrial-600">Contact us through our inquiry form</span>
                  </div>
                </div>
                <p className="text-industrial-500 text-sm mt-4">
                  Address: Colombo, Sri Lanka
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
