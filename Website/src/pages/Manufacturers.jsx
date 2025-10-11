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

  // Reliable fallback image handler
  const handleImageError = (e) => {
    const fallbackImage = 'https://images.unsplash.com/photo-1565086447593-ea55eb58a0e1?w=800&h=600&fit=crop&auto=format'
    if (e.target.src !== fallbackImage) {
      e.target.src = fallbackImage
    }
  }

  function getHeroImage(manufacturerId) {
    const heroImages = {
      'ssm': 'https://www.ssm.ch/fileadmin/_processed_/e/0/csm_ssm-xeno-ac-air-covering-machine-98400_8fc5b247b5.jpg',
      'brueckner': 'https://www.brueckner-textile.com/files/produkte/Spannrahmen/Stenter_SFP-4.jpg',
      'lafer': 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/efadac9b-2bef-4aaa-935a-7845952fd2a3/Lafer+Ultrasoft-L+brush+sueding+machine+0GSX04024.png',
      'zimmer': 'https://www.zimmer-austria.com/fileadmin/_processed_/0/3/csm_rotascreen_rsdm_production-2_0ecfafb808.jpg',
      'benninger': 'https://benningergroup.com/fileadmin/_processed_/6/1/csm_JigMaster_Headerbild-2_a2b5f2313b.png',
      'comatex': 'https://www.comatex.net/cloudpicture/2023-05-12-13-40-59-600.i3984-kCxCe4I-w402-h268-l1-c1-x1-q90.jpg'
    }
    return heroImages[manufacturerId] || `https://images.unsplash.com/photo-1565086447593-ea55eb58a0e1?w=800&h=400&fit=crop&auto=format`
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
        'https://www.ssm.ch/fileadmin/_processed_/e/0/csm_ssm-xeno-ac-air-covering-machine-98400_8fc5b247b5.jpg',
        'https://www.ssm.ch/fileadmin/_processed_/0/8/csm_ssm-draw-winding_993cb665a5.jpg',
        'https://www.ssm.ch/fileadmin/_processed_/5/e/csm_ssm-xeno-ac-twin-air-covering-machine_13a77350ca.jpg'
      ],
      'brueckner': [
        'https://www.brueckner-textile.com/files/produkte/Spannrahmen/Stenter_SFP-4.jpg',
        'https://www.brueckner-textile.com/files/produkte/Beschichtungsanlagen/Eco_Coat.jpg',
        'https://www.brueckner-textile.com/files/produkte/Hotflues/DSC00524%20Kopie.jpg'
      ],
      'lafer': [
        'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/efadac9b-2bef-4aaa-935a-7845952fd2a3/Lafer+Ultrasoft-L+brush+sueding+machine+0GSX04024.png',
        'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/55a85cb4-f438-4453-937e-f5871c1268e7/Lafer+Ultrasoft+sueding+machine',
        'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/ee24b66e-0662-4eb3-9735-720e9912be87/Lafer+KA+2+felt+compactor.layout+drawing'
      ],
      'zimmer': [
        'https://www.zimmer-austria.com/fileadmin/_processed_/7/7/csm_Rotasceen_TG_closed_3135335136.jpg',
        'https://www.zimmer-austria.com/fileadmin/_processed_/1/a/csm_magnoroll_60b9b229bc.jpg',
        'https://www.zimmer-austria.com/fileadmin/userdaten/bilder/kufstein/maschinen/textile-prints-COLARIS-24-2200_GBR-Lakeland.jpg'
      ],
      'benninger': [
        'https://benningergroup.com/fileadmin/_processed_/6/1/csm_JigMaster_Headerbild-2_a2b5f2313b.png',
        'https://benningergroup.com/fileadmin/_processed_/e/8/csm_FabricMaster_Headerbild_ef0757375e.png',
        'https://benningergroup.com/fileadmin/_processed_/6/5/csm_Hero_Ben_Bleach_4473b7e27a.png'
      ],
      'comatex': [
        'https://www.comatex.net/cloudpicture/2023-05-12-13-40-59-600.i3984-kCxCe4I-w402-h268-l1-c1-x1-q90.jpg',
        'https://www.comatex.net/cloudpicture/isn-4000-600-1.i5582-k6hydsv-w402-h268-l1-c1-q90.jpg',
        'https://www.comatex.net/cloudpicture/2023-07-21-14-33-47-1200.i3985-kiHtYOA-w402-h268-l1-c1-x1-q90.jpg'
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
                        onError={handleImageError}
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
                            onError={handleImageError}
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
                      onError={handleImageError}
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
