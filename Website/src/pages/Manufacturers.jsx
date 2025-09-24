import React from 'react'
import { ExternalLink, MapPin, Calendar, Award, ArrowRight } from 'lucide-react'
import { manufacturers } from '../data/index.js'

const Manufacturers = () => {
  // Enhanced manufacturer data with additional details for the page
  const enhancedManufacturers = manufacturers.map(manufacturer => ({
    ...manufacturer,
    heroImage: `https://images.unsplash.com/photo-1565086447593-ea55eb58a0e1?w=800&h=400&fit=crop&sig=${manufacturer.id}`,
    keyProducts: getKeyProducts(manufacturer.id),
    technologies: getTechnologies(manufacturer.id)
  }))

  function getKeyProducts(manufacturerId) {
    const productMap = {
      'ssm': [
        'Precision Winding Machines',
        'Assembly Winding Systems', 
        'Embroidery Threading Equipment',
        'Digital Yarn Clearers'
      ],
      'brueckner': [
        'Stenter Frames',
        'Coating Systems',
        'Film Stretching Lines',
        'Drying Systems'
      ],
      'lafer': [
        'Ring Spinning Frames',
        'Open-End Spinning Machines',
        'Air-Jet Spinning Systems',
        'Texturing Machines'
      ],
      'zimmer': [
        'Carpet Tufting Machines',
        'Nonwoven Production Lines',
        'Technical Textile Equipment',
        'Finishing Systems'
      ],
      'benninger': [
        'FabricMaster Systems',
        'JigMaster Equipment',
        'Continuous Processing Lines',
        'Tire Cord Processing'
      ],
      'comatex': [
        'Tubular Sewing Machines',
        'Doubling Machines',
        'Fabric Inspection Systems',
        'Quality Control Equipment'
      ]
    }
    return productMap[manufacturerId] || []
  }

  function getTechnologies(manufacturerId) {
    const techMap = {
      'ssm': ['DigiCone', 'DIGIFLEX', 'SSM-DigiCop'],
      'brueckner': ['ECO-Heat', 'POWER-Frame', 'STRETCH-Technology'],
      'lafer': ['COMPACT-System', 'AERO-Dynamics', 'ECO-Spin'],
      'zimmer': ['ZIMMER-Tufting', 'MULTI-Needle', 'FLEXI-Guide'],
      'benninger': ['BENNINGER-Eco', 'FABRIC-Master', 'SMART-Control'],
      'comatex': ['PRECISION-Tech', 'MULTI-Fabric', 'QUALITY-Vision']
    }
    return techMap[manufacturerId] || []
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-industrial-900 to-industrial-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Our Manufacturing Partners
            </h1>
            <p className="text-xl text-industrial-200 max-w-3xl mx-auto leading-relaxed">
              We partner with the world's leading textile machinery manufacturers to bring you 
              cutting-edge technology and reliable solutions for your production needs.
            </p>
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

                  {/* Specialties */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-industrial-800 mb-3">
                      Specialties
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {manufacturer.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Products */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-industrial-800 mb-3">
                      Key Products
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {manufacturer.keyProducts.map((product, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          <span className="text-industrial-600">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-industrial-800 mb-3">
                      Key Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {manufacturer.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-industrial-100 text-industrial-700 rounded text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={manufacturer.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-all duration-300 font-semibold"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={manufacturer.heroImage}
                      alt={`${manufacturer.name} machinery`}
                      className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent rounded-xl"></div>
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
              Partnership Excellence
            </h2>
            <p className="text-xl text-industrial-600 max-w-3xl mx-auto">
              Our strong relationships with these manufacturers enable us to provide unmatched service and support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">4</div>
              <div className="text-industrial-600 font-medium">Manufacturing Partners</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '100ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">20+</div>
              <div className="text-industrial-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-industrial-600 font-medium">Product Categories</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{animationDelay: '300ms'}}>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-industrial-600 font-medium">Authorized Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Our Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how our manufacturing partnerships can transform your textile production capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Manufacturers
