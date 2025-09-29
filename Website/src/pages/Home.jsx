import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Award, 
  Users, 
  Globe, 
  Zap, 
  Shield, 
  CheckCircle,
  PlayCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { companyStats } from '../data/index.js'

// Interactive Product Slideshow Component
const ProductSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Product data from official manufacturer websites
  const productSlides = [
    {
      id: 'ssm',
      manufacturer: 'SSM AG, Switzerland',
      productName: 'XENO Air Covering Machine',
      description: 'Swiss precision winding technology with advanced air covering systems for high-quality yarn processing.',
      image: 'https://www.ssm.ch/fileadmin/_processed_/e/0/csm_ssm-xeno-ac-air-covering-machine-98400_8fc5b247b5.jpg',
      category: 'Precision Winding'
    },
    {
      id: 'ssm-2',
      manufacturer: 'SSM AG, Switzerland',
      productName: 'Draw Winding System',
      description: 'Advanced draw winding technology for efficient yarn processing and superior package quality.',
      image: 'https://www.ssm.ch/fileadmin/_processed_/0/8/csm_ssm-draw-winding_993cb665a5.jpg',
      category: 'Yarn Processing'
    },
    {
      id: 'brueckner',
      manufacturer: 'Brückner GmbH, Germany',
      productName: 'POWER-FRAME SFP-4 Stenter',
      description: 'High-performance stenter frame technology for efficient textile finishing and heat-setting processes.',
      image: 'https://www.brueckner-textile.com/files/produkte/Spannrahmen/Stenter_SFP-4.jpg',
      category: 'Stenter Technology'
    },
    {
      id: 'brueckner-2',
      manufacturer: 'Brückner GmbH, Germany',
      productName: 'ECO-COAT System',
      description: 'Advanced coating technology for sustainable and efficient textile coating applications.',
      image: 'https://www.brueckner-textile.com/files/produkte/Beschichtungsanlagen/Eco_Coat.jpg',
      category: 'Coating Systems'
    },
    {
      id: 'benninger',
      manufacturer: 'Benninger AG, Switzerland',
      productName: 'JigMaster Dyeing System',
      description: 'Premium jig dyeing technology for superior fabric quality and efficient discontinuous processing.',
      image: 'https://benningergroup.com/fileadmin/_processed_/6/1/csm_JigMaster_Headerbild-2_a2b5f2313b.png',
      category: 'Dyeing Systems'
    },
    {
      id: 'benninger-2',
      manufacturer: 'Benninger AG, Switzerland',
      productName: 'FabricMaster Jet Dyeing',
      description: 'High-speed jet dyeing machine for efficient and gentle textile processing.',
      image: 'https://benningergroup.com/fileadmin/_processed_/e/8/csm_FabricMaster_Headerbild_ef0757375e.png',
      category: 'Textile Finishing'
    },
    {
      id: 'zimmer',
      manufacturer: 'Zimmer Austria',
      productName: 'ROTASCREEN Printing System',
      description: 'Advanced rotary screen printing technology for high-quality textile printing applications.',
      image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F1_800x600_ROTASCREEN_TG206_v1.jpg',
      category: 'Screen Printing'
    },
    {
      id: 'comatex',
      manufacturer: 'Comatex Italy',
      productName: 'ISN-220 Inspection System',
      description: 'Professional fabric inspection technology for quality control and textile verification.',
      image: 'https://www.comatex.net/immagini/grande_ISN-220-Verificatrice-standard-per-tessuto-a-maglia-navetta-o-tessuto-non-tessuto_1280x640.jpg',
      category: 'Quality Control'
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % productSlides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, productSlides.length])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % productSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + productSlides.length) % productSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentProduct = productSlides[currentSlide]

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-2xl group">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={currentProduct.image}
          alt={currentProduct.productName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-primary-600/80 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wide">
            {currentProduct.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{currentProduct.productName}</h3>
        <p className="text-sm text-white/90 mb-2">{currentProduct.manufacturer}</p>
        <p className="text-sm text-white/80 leading-relaxed mb-4">
          {currentProduct.description}
        </p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-6 flex space-x-2">
        {productSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        {isAutoPlaying ? (
          <div className="w-3 h-3 border-2 border-white rounded-sm">
            <div className="w-0.5 h-full bg-white mx-0.5"></div>
            <div className="w-0.5 h-full bg-white"></div>
          </div>
        ) : (
          <PlayCircle className="w-5 h-5" />
        )}
      </button>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-primary-400 transition-all duration-100 ease-linear"
            style={{ 
              width: `${((Date.now() % 4000) / 4000) * 100}%`,
              animation: 'progress 4s linear infinite'
            }}
          />
        </div>
      )}
    </div>
  )
}

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
              <ProductSlideshow />
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
