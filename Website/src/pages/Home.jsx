import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Award, 
  Users, 
  Globe, 
  Zap, 
  Shield, 
  CheckCircle,
  PlayCircle
} from 'lucide-react'
import { companyStats } from '../data/index.js'

const Home = () => {
  const manufacturers = [
    {
      name: 'SSM AG, Switzerland',
      logo: 'https://www.ssm.ch/fileadmin/_processed_/e/0/csm_ssm-xeno-ac-air-covering-machine-98400_8fc5b247b5.jpg',
      speciality: 'Precision Winding & Assembly Solutions',
      description: 'Swiss precision in winding technology with over 100 years of innovation. World leader in yarn processing solutions.'
    },
    {
      name: 'Brückner GmbH, Germany',
      logo: 'https://www.brueckner-textile.com/files/produkte/Spannrahmen/Stenter_SFP-4.jpg',
      speciality: 'Stenter & Coating Technology',
      description: 'German engineering excellence in high-performance stenter frames and advanced coating systems for textile finishing.'
    },
    {
      name: 'Benninger AG, Switzerland',
      logo: 'https://benningergroup.com/fileadmin/_processed_/6/1/csm_JigMaster_Headerbild-2_a2b5f2313b.png',
      speciality: 'Dyeing & Finishing Excellence',
      description: 'Swiss company with 160+ years of experience. World\'s leading partner in textile finishing and tire cord production.'
    },
    {
      name: 'Lafer SpA, Italy',
      logo: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/efadac9b-2bef-4aaa-935a-7845952fd2a3/Lafer+Ultrasoft-L+brush+sueding+machine+0GSX04024.png',
      speciality: 'Textile Finishing Solutions',
      description: 'Italian excellence in sueding, raising, shearing, compacting, and liquid ammonia mercerizing technologies.'
    },
    {
      name: 'Zimmer Austria',
      logo: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F1_800x600_ROTASCREEN_TG206_v1.jpg',
      speciality: 'Screen Printing & Coating Technology',
      description: 'Austrian pioneer in rotary screen printing, flat screen printing, and coating solutions for textile production.'
    },
    {
      name: 'Comatex Italy',
      logo: 'https://www.comatex.net/immagini/grande_1_AT-240-S-Semi-automatic-slitting-machine-for-tubularfor-knit_1280x640.jpg',
      speciality: 'Quality Control & Inspection',
      description: 'Italian specialists in fabric inspection, slitting, plaiting and packing solutions with 30+ years of experience.'
    }
  ]

  const features = [
    {
      icon: Award,
      title: 'Industry Leading',
      description: 'Top-quality machinery from world-renowned manufacturers'
    },
    {
      icon: Shield,
      title: 'Reliable Support',
      description: 'Comprehensive after-sales service and technical support'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Strong partnerships with international manufacturers'
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'Cutting-edge solutions for modern textile production'
    }
  ]

  const stats = [
    { number: '15+ Years', label: 'Experience' },
    { number: `${companyStats.machinesInstalled}+`, label: 'Machines Installed' },
    { number: `${companyStats.partnerManufacturers}`, label: 'Partner Manufacturers' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                Leading Textile Machinery
                <span className="block text-blue-200">Solutions in Sri Lanka</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Chime Tex International brings world-class textile machinery from top manufacturers 
                to transform Sri Lanka's textile industry with cutting-edge technology and reliable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up lg:animate-delay-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1565086447593-ea55eb58a0e1?w=600&h=400&fit=crop&crop=center"
                  alt="Industrial textile machinery"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent rounded-xl"></div>
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <PlayCircle className="w-10 h-10 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-industrial-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4">
              Why Choose Chime Tex International?
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              We bridge the gap between world-class manufacturers and Sri Lankan textile industry with unmatched expertise and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl card-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-industrial-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-industrial-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4">
              Our Exclusive Manufacturing Partners
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              We are exclusive representatives and authorized agents for Europe's most prestigious textile machinery manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturers.map((manufacturer, index) => (
              <div
                key={index}
                className="bg-white border border-industrial-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="h-24 bg-gradient-to-br from-industrial-50 to-industrial-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={manufacturer.logo}
                    alt={`${manufacturer.name} machinery`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-industrial-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {manufacturer.name}
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-3 uppercase tracking-wide">
                  {manufacturer.speciality}
                </p>
                <p className="text-industrial-600 text-sm leading-relaxed">
                  {manufacturer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-industrial-800 mb-3">
                Ready to Upgrade Your Production?
              </h3>
              <p className="text-industrial-600 mb-6 max-w-2xl mx-auto">
                Partner with industry leaders. Our exclusive manufacturer relationships ensure you get the best technology, support, and value for your investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/manufacturers"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Partners
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industrial-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Textile Operations?
          </h2>
          <p className="text-xl text-industrial-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to find the perfect machinery solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-industrial-900 transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
