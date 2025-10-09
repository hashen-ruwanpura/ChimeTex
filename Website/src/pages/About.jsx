import React from 'react'
import { 
  Award, 
  Users, 
  Globe, 
  Target, 
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with clients and manufacturers'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Bringing cutting-edge technology to the Sri Lankan market'
    },
    {
      icon: Target,
      title: 'Commitment',
      description: 'Dedicated to our clients success and industry growth'
    }
  ]



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-industrial-900 via-industrial-800 to-primary-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-12 gap-4 h-full opacity-20">
              {[...Array(48)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-full animate-pulse"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + (i % 3)}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary-300 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-primary-400 rounded-lg opacity-15 animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-8 h-8 border-2 border-white rounded-lg opacity-25 animate-spin" style={{animationDuration: '8s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary-300 rounded-full opacity-20 animate-ping" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-primary-600 bg-opacity-20 rounded-full text-primary-200 text-sm font-medium mb-6 backdrop-blur-sm">
                ✨ Excellence in Textile Machinery Since 2016
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                About Chime Tex International
              </h1>
              <p className="text-xl text-industrial-200 leading-relaxed mb-8">
                With over a decade of proven excellence in textile machinery solutions, we stand among Sri Lanka’s leading and most trusted partners, delivering world-class machinery and comprehensive technical support.
              </p>
              
              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-primary-200">100+ Machines Installed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-sm text-primary-200">Leading Satisfied Clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-sm text-primary-200">European Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <span className="text-sm text-primary-200">Expert Technical Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/products"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-industrial-800 transition-all duration-300"
                >
                  Our Solutions
                </a>
              </div>
            </div>
            
            <div className="animate-fade-in-up lg:animate-delay-300 relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl opacity-20 blur-2xl transform scale-110"></div>
              
              {/* Logo container with enhanced styling */}
              <div className="relative mx-auto bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 rounded-xl shadow-xl border border-blue-200 p-4 w-full max-w-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 ease-in-out">
                {/* Animation ring */}
                <div className="absolute inset-2 rounded-lg border-2 border-blue-300 opacity-40 animate-pulse-slow"></div>
                
                {/* Logo image */}
                <img
                  src="/images/LogoWithName.png"
                  alt="Chime Tex International Logo with Company Name"
                  className="h-[350px] w-full object-contain scale-110 transform transition-transform duration-300 ease-in-out group-hover:scale-115"
                />
                
                {/* Corner decorations */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-primary-400"></div>
                <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-primary-400"></div>
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-primary-400"></div>
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-primary-400"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating elements around logo */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
            <path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" fill="white" fillOpacity="0.1"/>
            <path d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z" fill="white" fillOpacity="0.05"/>
          </svg>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-industrial-600 leading-relaxed">
                <p>
                  Founded in 2016, Chime Tex International (Pvt) Ltd. began with a vision to transform 
                  Sri Lanka's textile industry by providing access to world-class machinery and technology through worlds leading machinery manufactures to our customers.
                  What started as a small consultancy has grown into one of the country's leading textile 
                  machinery solutions provider.
                </p>
                <p>
                  Under the leadership of our Director, Mr. Charuka Ruwanpura, we have built strong and exclusive
                  partnerships with high end worlds renowned manufacturers like SSM AG, Switzerland, Brückner GmbH, Germany, Benninger AG, Switzerland, Lafer SpA, Italy, and Zimmer Austria, Comatex Italy etc 
                  These relationships enable us to offer latest technology, cutting-edge solutions that drive efficiency, quality, and profitability for our clients.
                </p>
                <p>
                  Today, we serve all the leading satisfied clients across Sri Lanka, having successfully 
                  installed and serving more than 100 machines. Our commitment to excellence, technical expertise, introducing latest technology to the industry
                  and customer-centric approach continues to set us apart in the industry.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up lg:animate-delay-300">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://www.brueckner-textile.com/files/produkte/Spannrahmen/Stenter_SFP-4.jpg"
                  alt="Brückner POWER-FRAME SFP-4 Stenter - German finishing technology"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="https://benningergroup.com/fileadmin/_processed_/6/1/csm_JigMaster_Headerbild-2_a2b5f2313b.png"
                  alt="Benninger JigMaster Dyeing System - Swiss precision dyeing"
                  className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
                />
                <img
                  src="https://www.ssm.ch/fileadmin/_processed_/4/f/csm_ssm-tg1-at-air-texturing-machine_517972ffed.jpg"
                  alt="SSM TG1-AT Air Texturing Machine - Advanced yarn texturing technology"
                  className="w-full h-48 object-cover rounded-lg shadow-lg -mt-8"
                />
                <img
                  src="https://www.ssm.ch/fileadmin/_processed_/0/f/csm_ssm-neo-fw-precision-package-winder-99242_056a27a582.jpg"
                  alt="SSM NEO-FW Precision Package Winder - State-of-the-art winding technology"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              The principles that guide our commitment to clients, partners, and the textile industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl card-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up text-center"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-industrial-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-industrial-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Leadership Section */}
      <section className="py-20 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving our success and innovation in the textile industry.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-xl p-8 card-shadow text-center animate-fade-in-up max-w-sm">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden shadow-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <img
                  src="/images/Charuka.png"
                  alt="Charuka Ruwanpura - Director, Chime Tex International"
                  className="w-full h-full object-cover"
                  onLoad={(e) => {
                    e.target.parentElement.style.background = 'none';
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <span className="text-primary-600 text-4xl font-bold" style={{display: 'none'}}>CR</span>
              </div>
              <h3 className="text-xl font-semibold text-industrial-800 mb-2">
                Charuka Ruwanpura
              </h3>
              <p className="text-primary-600 font-medium mb-4">
                Director
              </p>
              <p className="text-industrial-600 leading-relaxed">
                With over two decades of experience in the textile machinery industry, 
                Charuka leads our strategic vision and client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partner With Industry Leaders
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join all the leading textile manufacturers in Sri Lanka who trust us for their machinery needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              View Our Solutions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
