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
    <div className={`bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-lg p-4 border border-primary-100 shadow-md ${className}`}>
      {/* Header Section */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <Award className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-industrial-800">
              Explore Complete
            </h3>
            <h4 className="text-base font-bold text-primary-600">
              {enhancedDisplayName} Portfolio
            </h4>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-3">
        <p className="text-industrial-600 text-sm">
          {subcategory 
            ? `Discover our full range of ${subcategory.toLowerCase()} and specialized equipment.`
            : `Discover our full range of ${enhancedDisplayName} machinery and specialized equipment.`
          }
        </p>
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        <a
          href={supplierUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg transition-all duration-300 font-semibold text-sm shadow-md transform hover:scale-105"
          title={`Visit official ${enhancedDisplayName} website`}
        >
          <span className="mr-2">{buttonText}</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      {/* Footer */}
      <div className="mt-3 pt-3 border-t border-primary-200/50">
        <div className="text-center">
          <p className="text-xs text-primary-600">
            Official {enhancedDisplayName} Products & Specifications
          </p>
        </div>
      </div>
    </div>
  )
}

export default ViewMoreProducts
