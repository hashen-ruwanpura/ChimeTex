import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, Search, ArrowRight, ExternalLink } from 'lucide-react'
import { allProducts, productCategories, ssmProducts, bruecknerProducts } from '../data/index.js'

// Products page with consistent button layouts

const Products = () => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // Dynamic categories with product counts
  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length },
    ...productCategories.map(cat => ({
      id: cat.id,
      name: cat.name,
      count: allProducts.filter(product => product.category === cat.id).length,
      subcategories: cat.subcategories || []
    }))
  ]

  // Get current category's subcategories
  const currentCategory = categories.find(cat => cat.id === selectedCategory)
  const subcategories = currentCategory?.subcategories || []

  const products = [
    {
      id: 1,
      name: 'SSM Precision Winding Machine',
      manufacturer: 'SSM',
      category: 'spinning',
      image: 'https://images.unsplash.com/photo-1565086447593-ea55eb58a0e1?w=400&h=300&fit=crop',
      description: 'High-precision winding technology for superior yarn quality and productivity.',
      features: ['Precision Control', 'High Speed', 'Quality Assurance'],
      specifications: {
        'Speed': 'Up to 2000 m/min',
        'Tension Control': 'Electronic',
        'Package Weight': 'Up to 5 kg'
      }
    },
    {
      id: 2,
      name: 'Brückner Stenter Frame',
      manufacturer: 'Brückner',
      category: 'finishing',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop',
      description: 'Advanced fabric finishing with precise temperature and tension control.',
      features: ['Temperature Control', 'Energy Efficient', 'Uniform Processing'],
      specifications: {
        'Working Width': 'Up to 3600 mm',
        'Temperature Range': 'Up to 250°C',
        'Speed': 'Up to 150 m/min'
      }
    },
    {
      id: 3,
      name: 'Lafer Ring Spinning Frame',
      manufacturer: 'Lafer',
      category: 'spinning',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      description: 'Modern ring spinning technology for high-quality yarn production.',
      features: ['Digital Control', 'Low Maintenance', 'High Productivity'],
      specifications: {
        'Spindles': 'Up to 1800',
        'Speed': 'Up to 25,000 rpm',
        'Count Range': 'Ne 6-120'
      }
    },
    {
      id: 4,
      name: 'Zimmer Carpet Tufting Machine',
      manufacturer: 'Zimmer Austria',
      category: 'weaving',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      description: 'Complete carpet manufacturing solution with precision tufting.',
      features: ['Multi-Color System', 'Pattern Control', 'High Speed'],
      specifications: {
        'Working Width': 'Up to 5000 mm',
        'Gauge': '5/32" to 1/8"',
        'Speed': 'Up to 1800 rpm'
      }
    },
    {
      id: 5,
      name: 'SSM Yarn Conditioning Machine',
      manufacturer: 'SSM',
      category: 'finishing',
      image: 'https://images.unsplash.com/photo-1532617414043-0e2da9fc6ef9?w=400&h=300&fit=crop',
      description: 'Advanced yarn conditioning for improved quality and performance.',
      features: ['Moisture Control', 'Temperature Regulation', 'Quality Enhancement'],
      specifications: {
        'Capacity': 'Up to 500 kg/h',
        'Temperature Range': '80-180°C',
        'Humidity Control': '40-95% RH'
      }
    },
    {
      id: 6,
      name: 'Brückner Coating Line',
      manufacturer: 'Brückner',
      category: 'finishing',
      image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&h=300&fit=crop',
      description: 'Precision coating technology for technical textiles and films.',
      features: ['Precision Coating', 'Multi-Layer', 'Quality Control'],
      specifications: {
        'Working Width': 'Up to 5500 mm',
        'Coating Weight': '5-500 g/m²',
        'Speed': 'Up to 600 m/min'
      }
    }
  ]

  // Filter products based on category, subcategory, and search term
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSubcategory = !selectedSubcategory || product.subcategory === selectedSubcategory
    const matchesSearch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.keyFeatures && product.keyFeatures.some(feature => 
        feature.toLowerCase().includes(searchTerm.toLowerCase())
      )) ||
      (product.applications && product.applications.some(app => 
        app.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    
    return matchesCategory && matchesSubcategory && matchesSearch
  })

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen bg-industrial-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Textile Machinery Products
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive range of world-class textile machinery from leading manufacturers.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl p-6 card-shadow sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-industrial-700 mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-industrial-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search by name or manufacturer..."
                    className="w-full pl-10 pr-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-semibold text-industrial-700 mb-4 flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'hover:bg-industrial-100 text-industrial-600'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-industrial-400">
                          {selectedCategory === category.id ? 
                            filteredProducts.length : 
                            category.count
                          }
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Subcategories */}
              {subcategories.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-industrial-700 mb-4">
                    Subcategories
                  </h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedSubcategory('')}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        !selectedSubcategory
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'hover:bg-industrial-50 text-industrial-600'
                      }`}
                    >
                      All {categories.find(c => c.id === selectedCategory)?.name}
                    </button>
                    {subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        onClick={() => setSelectedSubcategory(subcategory)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedSubcategory === subcategory
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'hover:bg-industrial-50 text-industrial-600'
                        }`}
                      >
                        {subcategory}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-industrial-800">
                  {filteredProducts.length} Products Found
                </h2>
                <p className="text-industrial-600">
                  {selectedCategory !== 'all' && (
                    <>Showing {categories.find(c => c.id === selectedCategory)?.name.toLowerCase()}</>
                  )}
                </p>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up flex flex-col h-full"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 text-sm font-medium rounded-full">
                          {product.manufacturer === 'ssm' ? 'SSM' : 
                           product.manufacturer === 'brueckner' ? 'Brückner' :
                           product.manufacturer === 'benninger' ? 'Benninger' :
                           product.manufacturer === 'comatex' ? 'Comatex' :
                           product.manufacturer}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-industrial-800 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-industrial-600 text-sm mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      {(product.keyFeatures || product.features) && (
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-industrial-700 mb-2">
                            Key Features:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {(product.keyFeatures || product.features).map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Specifications */}
                      {product.specifications && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-industrial-700 mb-2">
                            Specifications:
                          </h4>
                          <div className="space-y-1">
                            {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                              <div key={key} className="flex justify-between text-sm">
                                <span className="text-industrial-600">{key}:</span>
                                <span className="text-industrial-800 font-medium">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-auto pt-6">
                        {product.officialUrl ? (
                          <a
                            href={product.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-10 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium flex items-center justify-center"
                            title="View on Official SSM Website"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View on Official Website
                          </a>
                        ) : (
                          <button 
                            disabled
                            className="w-full h-10 px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed text-sm font-medium flex items-center justify-center"
                            title="Official link not available"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Official Link Not Available
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-industrial-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-industrial-600 mb-2">
                  No products found
                </h3>
                <p className="text-industrial-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-industrial-800 mb-6">
            Need Custom Solutions?
          </h2>
          <p className="text-xl text-industrial-600 mb-8 max-w-2xl mx-auto">
            Our experts can help you find the perfect machinery solution for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              Consult Our Experts
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/manufacturers"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300"
            >
              View Manufacturers
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
