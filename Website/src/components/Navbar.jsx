import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Products', 
      href: '/products',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Products', href: '/products' },
        { name: 'SSM Schärer Schweiter Mettler AG', href: '/products?category=ssm' },
        { name: 'BRÜCKNER', href: '/products?category=brueckner' },
        { name: 'Lafer S.p.A.', href: '/products?category=lafer' },
        { name: 'Zimmer Austria', href: '/products?category=zimmer' },
        { name: 'Benninger AG', href: '/products?category=benninger' },
        { name: 'Comatex Group', href: '/products?category=comatex' }
      ]
    },
    { name: 'Manufacturers', href: '/manufacturers' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActiveLink = (href) => {
    return location.pathname === href
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">CT</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-industrial-800">Chime Tex International</h1>
                <p className="text-sm text-industrial-500">(Pvt) Ltd.</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActiveLink(item.href)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-industrial-700 hover:text-primary-600 hover:bg-industrial-50'
                      }`}
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      onMouseEnter={() => setIsProductsOpen(true)}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        isProductsOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {isProductsOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50"
                        onMouseLeave={() => setIsProductsOpen(false)}
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-industrial-700 hover:bg-industrial-50 hover:text-primary-600 transition-colors duration-200"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActiveLink(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-industrial-700 hover:text-primary-600 hover:bg-industrial-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-industrial-500 hover:text-primary-600 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-industrial-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActiveLink(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-industrial-700 hover:text-primary-600 hover:bg-industrial-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && item.dropdownItems.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.name}
                    to={dropdownItem.href}
                    className="block pl-8 pr-3 py-2 text-sm text-industrial-600 hover:text-primary-600 hover:bg-industrial-50 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {dropdownItem.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
