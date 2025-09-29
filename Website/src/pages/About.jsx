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
      <section className="relative bg-gradient-to-r from-industrial-900 to-industrial-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
                About Chime Tex International
              </h1>
              <p className="text-xl text-industrial-200 leading-relaxed">
                With close to one decade of excellence in textile machinery solutions, we are one of the leading and most trusted partners for world-class machinery and comprehensive technical support in Sri Lanka.
              </p>
            </div>
            <div className="animate-fade-in-up lg:animate-delay-300">
              <img
                src="https://www.ssm.ch/fileadmin/_processed_/e/0/csm_ssm-xeno-ac-air-covering-machine-98400_8fc5b247b5.jpg"
                alt="SSM XENO Air Covering Machine - Swiss precision winding technology"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
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
                  src="https://www.ssm.ch/fileadmin/_processed_/0/8/csm_ssm-draw-winding_993cb665a5.jpg"
                  alt="SSM Draw Winding System - Advanced yarn processing technology"
                  className="w-full h-48 object-cover rounded-lg shadow-lg -mt-8"
                />
                <img
                  src="https://www.comatex.net/immagini/grande_ISN-220-Verificatrice-standard-per-tessuto-a-maglia-navetta-o-tessuto-non-tessuto_1280x640.jpg"
                  alt="Comatex ISN-220 Inspection System - Italian quality control technology"
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
