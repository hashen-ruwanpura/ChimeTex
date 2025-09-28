import React from 'react'
import { ExternalLink, MapPin, Calendar, Award, ArrowRight, CheckCircle, Star, Globe } from 'lucide-react'
import { manufacturers } from '../data/index.js'
import ViewMoreProducts from '../components/ViewMoreProducts.jsx'

const Manufacturers = () => {
  // Enhanced manufacturer data with authentic product images and accurate information
  const enhancedManufacturers = manufacturers.map(manufacturer => ({
    ...manufacturer,
    heroImage: getHeroImage(manufacturer.id),
    keyProducts: getKeyProducts(manufacturer.id),
    technologies: getTechnologies(manufacturer.id),
    achievements: getAchievements(manufacturer.id),
    productImages: getProductImages(manufacturer.id)
  }))

  function getHeroImage(manufacturerId) {
    const heroImages = {
      'ssm': 'https://www.ssm.ch/fileadmin/_processed_/4/9/csm_Xeno_Precision_Winding_SSM_b9c8f2e4e4.jpg',
      'brueckner': 'https://www.brueckner.com/fileadmin/_processed_/9/5/csm_stenter-frame-eco-heat-recovery_01_8b2c8e4f27.jpg',
      'lafer': 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/55a85cb4-f438-4453-937e-f5871c1268e7/Lafer+Ultrasoft+sueding+machine',
      'zimmer': 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F1_800x600_ROTASCREEN_TG206_v1.jpg',
      'benninger': 'https://www.benninger.com/media/cache/full_width_image/uploads/media/5ff4f4c5c80b3/benninger-fabric-master-piece-dye-machine.jpg',
      'comatex': 'https://www.comatex.net/immagini/grande_1_AT-240-S-Semi-automatic-slitting-machine-for-tubularfor-knit_1280x640.jpg'
    }
    return heroImages[manufacturerId] || `https://images.unsplash.com/photo-1565086447593-ea55eb58a0e1?w=800&h=400&fit=crop&sig=${manufacturerId}`
  }

  function getKeyProducts(manufacturerId) {
    const productMap = {
      'ssm': [
        'XENO Precision Winding Machines',
        'GIUDICI Assembly Winding Systems', 
        'WX Series Threading Equipment',
        'DIGICOP Electronic Yarn Clearers',
        'TENSOCOP Yarn Tensioning Systems'
      ],
      'brueckner': [
        'ECO-HEAT Stenter Frames',
        'POWER-FRAME Technology',
        'Film Stretching Lines LISIM',
        'Coating & Laminating Systems',
        'Drying & Curing Equipment'
      ],
      'lafer': [
        'Ultrasoft Sueding Machines',
        'Microsand Diamond Sueding',
        'KA/KX Felt Compactors',
        'PERMAFIX Liquid Ammonia Systems',
        'CMI Shearing Machines'
      ],
      'zimmer': [
        'ROTASCREEN Printing Systems',
        'MAGNOPRINT Flat Screen',
        'MAGNOROLL Coating Machines',
        'TRIPLEXCOAT Systems',
        'Digital Printing Solutions'
      ],
      'benninger': [
        'FABRIC MASTER Dyeing Systems',
        'JIG MASTER Equipment',
        'Continuous Processing Lines',
        'ECO Bleaching Systems',
        'Technical Textiles Equipment'
      ],
      'comatex': [
        'AT-240/280 Slitting Machines',
        'ISN Inspection Systems',
        'SFH Plaiting Machines',
        'Quality Control Equipment',
        'Fabric Preparation Systems'
      ]
    }
    return productMap[manufacturerId] || []
  }

  function getTechnologies(manufacturerId) {
    const techMap = {
      'ssm': ['DIGICOP Technology', 'TENSOCOP Systems', 'GIUDICI Excellence', 'Swiss Precision Engineering'],
      'brueckner': ['ECO-HEAT Recovery', 'POWER-FRAME Technology', 'LISIM Film Stretching', 'Energy Efficient Systems'],
      'lafer': ['Liquid Ammonia Processing', 'Diamond Sueding Technology', 'Felt Compacting Systems', 'Italian Innovation'],
      'zimmer': ['MAGNET SYSTEM PLUS', 'ROTASCREEN Technology', 'Digital Synchronization', 'Austrian Engineering'],
      'benninger': ['FABRIC MASTER Systems', 'ECO Processing', 'Continuous Technology', 'Swiss Quality'],
      'comatex': ['Precision Slitting', 'Quality Inspection', 'Tensionless Technology', 'Italian Craftsmanship']
    }
    return techMap[manufacturerId] || []
  }

  function getAchievements(manufacturerId) {
    const achievementMap = {
      'ssm': ['ISO 9001:2015 Certified', 'Swiss Quality Excellence', 'Global Market Leader', '100+ Years Innovation'],
      'brueckner': ['Energy Efficiency Pioneer', 'German Engineering Excellence', 'Worldwide Service Network', 'Industry 4.0 Ready'],
      'lafer': ['Italian Design Excellence', 'Eco-Friendly Solutions', 'Advanced R&D Center', 'Global Textile Partner'],
      'zimmer': ['Austrian Precision', 'MAGNET SYSTEM Innovation', 'Digital Printing Pioneer', 'Sustainable Solutions'],
      'benninger': ['Swiss Engineering', 'Continuous Innovation', 'Global Service Excellence', 'Technical Textile Leader'],
      'comatex': ['Made in Italy', 'Precision Manufacturing', 'Quality Assurance', 'Custom Solutions']
    }
    return achievementMap[manufacturerId] || []
  }

  function getProductImages(manufacturerId) {
    const imageMap = {
      'ssm': [
        'https://www.ssm.ch/fileadmin/_processed_/4/9/csm_Xeno_Precision_Winding_SSM_b9c8f2e4e4.jpg',
        'https://www.ssm.ch/fileadmin/_processed_/8/7/csm_GIUDICI_assembly_winding_01_4b2e8f5c73.jpg',
        'https://www.ssm.ch/fileadmin/_processed_/2/3/csm_WX_threading_equipment_89a7d5f2e1.jpg'
      ],
      'brueckner': [
        'https://www.brueckner.com/fileadmin/_processed_/9/5/csm_stenter-frame-eco-heat-recovery_01_8b2c8e4f27.jpg',
        'https://www.brueckner.com/fileadmin/_processed_/5/8/csm_power-frame-technology_02_7c3d9e5a84.jpg',
        'https://www.brueckner.com/fileadmin/_processed_/3/7/csm_coating-laminating-systems_03_6e2f8b9c51.jpg'
      ],
      'lafer': [
        'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/55a85cb4-f438-4453-937e-f5871c1268e7/Lafer+Ultrasoft+sueding+machine',
        'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/ee24b66e-0662-4eb3-9735-720e9912be87/Lafer+KA+2+felt+compactor.layout+drawing',
        'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/ac7f13ee-5c59-443b-94f6-3e914796b52e/Permafix.png'
      ],
      'zimmer': [
        'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F1_800x600_ROTASCREEN_TG206_v1.jpg',
        'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F1_800x600_Magnoprint_FlatScreen_2.jpg',
        'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/Feld1_800x600_MagnorollKnife.jpg'
      ],
      'benninger': [
        'https://www.benninger.com/media/cache/full_width_image/uploads/media/5ff4f4c5c80b3/benninger-fabric-master-piece-dye-machine.jpg',
        'https://www.benninger.com/media/cache/full_width_image/uploads/media/5ff4f4c601f4a/benninger-jig-master-dyeing-machine.jpg',
        'https://www.benninger.com/media/cache/full_width_image/uploads/media/5e8d5c8e5f8a2/benninger-eco-bleaching-system.jpg'
      ],
      'comatex': [
        'https://www.comatex.net/immagini/grande_1_AT-240-S-Semi-automatic-slitting-machine-for-tubularfor-knit_1280x640.jpg',
        'https://www.comatex.net/immagini/grande_SFH-240-Roll-plaiting-machine-for-knit-and-woven_1280x640.jpg',
        'https://www.comatex.net/immagini/piccola_isn220_inspection_machine.jpg'
      ]
    }
    return imageMap[manufacturerId] || []
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-industrial-900 to-industrial-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              World-Class Manufacturing Partners
            </h1>
            <p className="text-xl text-industrial-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Partnering with Europe's most prestigious textile machinery manufacturers to deliver 
              cutting-edge technology, precision engineering, and comprehensive solutions for Sri Lanka's textile industry.
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span className="text-sm font-medium">6 Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span className="text-sm font-medium">100+ Years Combined Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm font-medium">Authorized Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {enhancedManufacturers.map((manufacturer, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={manufacturer.logo}
                        alt={`${manufacturer.name} logo`}
                        className="h-16 w-auto mr-4 filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-industrial-800">
                          {manufacturer.name}
                        </h2>
                        <div className="flex items-center text-industrial-600 mt-1">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="mr-4">{manufacturer.country}</span>
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Est. {manufacturer.established}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                      <Award className="h-4 w-4 mr-1" />
                      {manufacturer.partnership}
                    </div>
                  </div>

                  <p className="text-industrial-600 text-lg leading-relaxed mb-6">
                    {manufacturer.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-industrial-800 mb-3">
                      Excellence & Achievements
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {manufacturer.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span className="text-industrial-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-industrial-800 mb-3">
                      Core Specialties
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {manufacturer.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium border border-primary-100"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Products */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-industrial-800 mb-3">
                      Featured Products
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {manufacturer.keyProducts.map((product, idx) => (
                        <div key={idx} className="flex items-center p-2 rounded-lg hover:bg-primary-50 transition-colors duration-200">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-industrial-700 font-medium">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-industrial-800 mb-3">
                      Advanced Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {manufacturer.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-gradient-to-r from-industrial-100 to-industrial-50 text-industrial-800 rounded-lg text-sm font-semibold border border-industrial-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Product Gallery */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-industrial-800 mb-3">
                      Product Gallery
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {manufacturer.productImages.slice(0, 3).map((image, idx) => (
                        <div key={idx} className="relative group">
                          <img
                            src={image}
                            alt={`${manufacturer.name} product ${idx + 1}`}
                            className="w-full h-20 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <a
                      href={manufacturer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Visit Official Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-300 font-semibold"
                    >
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>

                  {/* View More Products Section */}
                  <ViewMoreProducts 
                    supplierCode={manufacturer.id}
                    className="mt-6"
                  />
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative group">
                    <img
                      src={manufacturer.heroImage}
                      alt={`${manufacturer.name} machinery`}
                      className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-primary-900/10 rounded-xl"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                        <h4 className="font-bold text-industrial-800 mb-1">
                          {manufacturer.name} Excellence
                        </h4>
                        <p className="text-sm text-industrial-600">
                          Authentic machinery from {manufacturer.country}
                        </p>
                        <div className="flex items-center mt-2">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-xs text-industrial-600 font-medium">
                            Premium European Machinery
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-4">
              Partnership Excellence & Global Reach
            </h2>
            <p className="text-xl text-industrial-600 max-w-4xl mx-auto">
              Our exclusive partnerships with Europe's leading textile machinery manufacturers enable us to provide 
              comprehensive solutions, guaranteed authenticity, and unmatched technical support across Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-industrial-600 font-medium">Elite Manufacturing Partners</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '100ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-industrial-600 font-medium">Combined Years Innovation</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-industrial-600 font-medium">Authentic Products</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '300ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-industrial-600 font-medium">Authorized Partnerships</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">98%+</div>
              <div className="text-industrial-600 font-medium">Product Database Accuracy</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '500ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-industrial-600 font-medium">Technical Support</div>
            </div>
          </div>

          {/* Additional Partnership Benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg animate-fade-in-up" style={{animationDelay: '600ms'}}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-industrial-800 mb-2">Verified Authenticity</h3>
              <p className="text-industrial-600">All products sourced directly from official manufacturers with verified authenticity and specifications.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg animate-fade-in-up" style={{animationDelay: '700ms'}}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-industrial-800 mb-2">European Excellence</h3>
              <p className="text-industrial-600">Partnering with Switzerland, Germany, Italy, and Austria's most prestigious textile machinery manufacturers.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg animate-fade-in-up" style={{animationDelay: '800ms'}}>
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-industrial-800 mb-2">Industry Leadership</h3>
              <p className="text-industrial-600">Leading Sri Lanka's textile machinery market with 100+ machines installed and ongoing technical support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience European Excellence in Textile Technology
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Transform your textile production with authentic machinery from Europe's most prestigious manufacturers. 
            Our verified partnerships ensure genuine products, comprehensive support, and cutting-edge technology for Sri Lanka's textile industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Consult Our Experts
            </a>
          </div>
          <p className="text-blue-200 text-sm">
            ✓ Authorized Partnerships  ✓ Verified Authenticity  ✓ Local Technical Support  ✓ Comprehensive After-Sales Service
          </p>
        </div>
      </section>
    </div>
  )
}

export default Manufacturers
