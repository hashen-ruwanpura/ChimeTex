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
      name: 'SSM',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
      speciality: 'Precision Winding & Yarn Processing',
      description: 'World leader in precision winding and yarn processing technology'
    },
    {
      name: 'Brückner',
      logo: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=200&h=100&fit=crop',
      speciality: 'Film & Textile Finishing',
      description: 'Advanced finishing and coating technologies'
    },
    {
      name: 'Lafer',
      logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop',
      speciality: 'Spinning Solutions',
      description: 'Innovative spinning and texturing machines'
    },
    {
      name: 'Zimmer Austria',
      logo: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=100&fit=crop',
      speciality: 'Carpet Manufacturing',
      description: 'Complete carpet and technical textile solutions'
    },
    {
      name: 'Benninger',
      logo: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=200&h=100&fit=crop',
      speciality: 'Textile Finishing',
      description: 'Swiss excellence in continuous and discontinuous processing'
    },
    {
      name: 'Comatex',
      logo: 'https://images.unsplash.com/photo-1565008447919-c4ef2e9ad56f?w=200&h=100&fit=crop',
      speciality: 'Precision Machinery',
      description: 'Italian precision mechanical and textile machinery'
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
    { number: `${companyStats.yearsExperience}+`, label: 'Years Experience' },
    { number: `${companyStats.machinesInstalled}+`, label: 'Machines Installed' },
    { number: `${companyStats.happyClients}+`, label: 'Happy Clients' },
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
              Our Trusted Manufacturing Partners
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              We collaborate with the world's leading textile machinery manufacturers to bring you the best solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturers.map((manufacturer, index) => (
              <div
                key={index}
                className="bg-white border border-industrial-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="h-20 bg-industrial-100 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src={manufacturer.logo}
                    alt={`${manufacturer.name} logo`}
                    className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-industrial-800 mb-2">
                  {manufacturer.name}
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-2">
                  {manufacturer.speciality}
                </p>
                <p className="text-industrial-600 text-sm leading-relaxed">
                  {manufacturer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/manufacturers"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Manufacturers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
