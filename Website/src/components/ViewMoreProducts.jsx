import React from 'react'
import { ExternalLink, ArrowRight, Award } from 'lucide-react'
import { getManufacturerByCode, getSupplierUrl } from '../data/index.js'

const ViewMoreProducts = ({ supplierCode, subcategory = null, className = "" }) => {
  const manufacturer = getManufacturerByCode(supplierCode)
  const supplierUrl = getSupplierUrl(supplierCode, subcategory)
  
  if (!manufacturer || !supplierUrl) {
    return null
  }

  const displayName = manufacturer.shortName || manufacturer.name
  
  // Enhanced display names for better UX
  const getDisplayName = (supplierCode, shortName) => {
    const nameMap = {
      ssm: 'SSM',
      brueckner: 'BRÜCKNER',
      lafer: 'Lafer',
      zimmer: 'ZIMMER AUSTRIA',
      benninger: 'Benninger',
      comatex: 'Comatex'
    }
    return nameMap[supplierCode] || shortName
  }
  
  const enhancedDisplayName = getDisplayName(supplierCode, displayName)
  const buttonText = subcategory 
    ? `View More ${subcategory} from ${enhancedDisplayName}`
    : `View More Products from ${enhancedDisplayName}`
  
  return (
    <div className={`bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200 ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h3 className="text-lg font-semibold text-primary-900 mb-2">
            Explore Complete {enhancedDisplayName} Portfolio
          </h3>
          <p className="text-primary-700 text-sm">
            {subcategory 
              ? `Discover our full range of ${subcategory.toLowerCase()} and specialized equipment.`
              : `Discover our full range of ${enhancedDisplayName} machinery and specialized equipment.`
            }
          </p>
        </div>
        
        <a
          href={supplierUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
          title={`Visit official ${enhancedDisplayName} website`}
        >
          <span className="mr-2">{buttonText}</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      {/* Partnership information and additional context */}
      <div className="mt-4 pt-4 border-t border-primary-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-primary-600">
          <div className="flex items-center mb-2 sm:mb-0">
            <Award className="h-3 w-3 mr-1" />
            {manufacturer.partnership}
          </div>
          <div className="text-primary-500">
            Official {enhancedDisplayName} Products & Specifications
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewMoreProducts
