// Textile machinery data for Chime Tex International

// Supplier product catalog URLs for "View More Products" functionality
export const supplierProductUrls = {
  ssm: {
    main: 'https://www.ssm.ch/products/',
    categories: {
      'Yarn Processing Solutions': 'https://www.ssm.ch/products/yarn-processing-solutions/',
      'Winding Solutions': 'https://www.ssm.ch/products/winding-solutions/'
    }
  },
  brueckner: {
    main: 'https://www.brueckner-textile.com/en/products.html',
    categories: {
      'Stenters': 'https://www.brueckner-textile.com/en/products/details/power-frame-stenter.html',
      'Relaxation Dryers': 'https://www.brueckner-textile.com/en/products/details/relaxiertrockner-power-relax-rx3.html',
      'Padders': 'https://www.brueckner-textile.com/en/products/details/foulard-power-pad.html',
      'Continuous Dyeing Ranges': 'https://www.brueckner-textile.com/en/products/details/power-colortherm-hotflue.html',
      'Coating Lines': 'https://www.brueckner-textile.com/en/products/details/opti-coat-ka-kc-coating-unit.html'
    }
  },
  lafer: {
    main: 'https://www.laferspa.com/',
    categories: {
      'Opening Machines': 'https://www.laferspa.com/prodotti-eng.php#opening',
      'Carding Solutions': 'https://www.laferspa.com/prodotti-eng.php#carding', 
      'Preparation Equipment': 'https://www.laferspa.com/prodotti-eng.php#preparation'
    }
  },
  zimmer: {
    main: 'https://www.zimmer-austria.com/',
    categories: {
      'Rotary Screen Printing': 'https://www.zimmer-klagenfurt.com/machines/rotary-screen-printing',
      'Flat Screen Printing': 'https://www.zimmer-klagenfurt.com/machines/flat-screen-printing',
      'Coating Machines': 'https://www.zimmer-klagenfurt.com/machines/coating-machines',
      'Dryers': 'https://www.zimmer-klagenfurt.com/machines/dryers',
      'Coating Lines': 'https://www.zimmer-klagenfurt.com/machines/coating-lines'
    }
  },
  benninger: {
    main: 'https://benningergroup.com/en/',
    categories: {
      'Washing Solutions': 'https://benningergroup.com/en/textile-finishing/washing-solutions',
      'Bleaching Solutions': 'https://benningergroup.com/en/textile-finishing/bleaching-solutions',
      'Singeing Solutions': 'https://benningergroup.com/en/continuous-processing/singeing-solutions',
      'Dyeing Solutions': 'https://benningergroup.com/en/textile-finishing/dyeing-solutions',
      'Mercerizing Solutions': 'https://benningergroup.com/en/textile-finishing/mercerizing-solutions',
      'Discontinuous Processing': 'https://benningergroup.com/en/discontinuous-dyeing/'
    }
  },
  comatex: {
    main: 'https://www.comatex.net/en/',
    categories: {
      'Slitting & Plaiting': 'https://www.comatex.net/en/slitting-plaiting.php',
      'Inspection Machines': 'https://www.comatex.net/en/inspection-machine.php',
      'Packing Roll/Plait': 'https://www.comatex.net/en/packing-rollplait.php'
    }
  }
}

export const manufacturers = [
  {
    id: 'ssm',
    name: 'SSM Schärer Schweiter Mettler AG',
    shortName: 'SSM',
    country: 'Switzerland',
    established: 1894,
    logo: 'https://www.ssm.ch/fileadmin/_processed_/e/0/csm_ssm-xeno-ac-air-covering-machine-98400_8fc5b247b5.jpg',
    website: 'https://www.ssm.ch/',
    specialties: ['Precision Winding', 'Assembly Winding', 'Embroidery Threading'],
    description: 'World leader in precision winding technology with over 100 years of innovation in textile machinery.',
    partnership: 'Authorized Agent since 2017'
  },
  {
    id: 'brueckner',
    name: 'Brückner GmbH',
    shortName: 'Brückner',
    country: 'Germany',
    established: 1949,
    logo: 'https://www.brueckner-textile.com/files/produkte/Spannrahmen/Stenter_SFP-4.jpg',
    website: 'https://www.brueckner-textile.com/en/',
    specialties: ['Stenter Technology', 'Coating Lines', 'Film Processing'],
    description: 'Leading German manufacturer of high-performance stenter frames and coating systems for textile and film industries.',
    partnership: 'Exclusive Partner since 2019'
  },
  {
    id: 'lafer',
    name: 'Lafer SpA',
    shortName: 'Lafer',
    country: 'Italy',
    established: 1974,
    logo: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/efadac9b-2bef-4aaa-935a-7845952fd2a3/Lafer+Ultrasoft-L+brush+sueding+machine+0GSX04024.png',
    website: 'https://www.laferspa.com/',
    specialties: ['Sueding Machines', 'Raising Machines', 'Shearing', 'Compacting', 'Liquid Ammonia Mercerizing'],
    description: 'Italian excellence in textile finishing technology, providing innovative solutions for fabric surface effects, compacting, and chemical processing.',
    partnership: 'Exclusive Representative since 2019'
  },
  {
    id: 'zimmer',
    name: 'Zimmer Austria',
    shortName: 'Zimmer Austria',
    country: 'Austria',
    established: 1875,
    logo: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F1_800x600_ROTASCREEN_TG206_v1.jpg',
    website: 'https://www.zimmer-austria.com/',
    specialties: ['Carpet Manufacturing', 'Technical Textiles', 'Nonwovens'],
    description: 'Austrian pioneer in carpet tufting technology and complete solutions for technical textile production.',
    partnership: 'Strategic Partner since 2021'
  },
  {
    id: 'benninger',
    name: 'Benninger AG',
    shortName: 'Benninger',
    country: 'Switzerland',
    established: 1859,
    logo: 'https://benningergroup.com/fileadmin/_processed_/6/1/csm_JigMaster_Headerbild-2_a2b5f2313b.png',
    website: 'https://benningergroup.com/en/',
    specialties: ['Textile Finishing', 'Continuous Processing', 'Discontinuous Processing', 'Tire Cord'],
    description: 'Swiss company with 160+ years of experience as the world\'s leading partner in textile finishing and tire cord production.',
    partnership: 'Authorized Representative since 2021'
  },
  {
    id: 'comatex',
    name: 'Comatex Italy',
    shortName: 'Comatex',
    country: 'Italy',
    established: 1994,
    logo: 'https://www.comatex.net/immagini/grande_1_AT-240-S-Semi-automatic-slitting-machine-for-tubularfor-knit_1280x640.jpg',
    website: 'https://www.comatex.net/en/',
    specialties: ['Knit Fabric Processing', 'Woven Fabric Processing', 'Non-woven Fabric Processing'],
    description: 'Leading Italian manufacturer specializing in precision mechanical and textile machinery with 30+ years of experience.',
    partnership: 'Technical Partner since 2023'
  }
]

export const productCategories = [
  {
    id: 'ssm',
    name: 'SSM Schärer Schweiter Mettler',
    description: 'Swiss precision winding and yarn processing solutions',
    icon: '🇨🇭',
    subcategories: [
      'Yarn Processing Solutions',
      'Winding Solutions'
    ]
  },
  {
    id: 'brueckner',
    name: 'BRÜCKNER',
    description: 'German textile finishing and processing equipment',
    icon: '🇩🇪',
    subcategories: [
      'Stenters',
      'Relaxation Dryers',
      'Padders',
      'Continuous Dyeing Ranges',
      'Coating Lines'
    ]
  },
  {
    id: 'lafer',
    name: 'Lafer S.p.A.',
    description: 'Italian textile finishing and fabric processing solutions',
    icon: '🇮🇹',
    subcategories: [
      'Sueding',
      'Raising',
      'Shearing',
      'Compacting-Open Width',
      'Compacting-Tubular',
      'Liquid Ammonia Mercerizing',
      'Enzyme Processing',
      'Waterless Scouring-Deoiling',
      'Fringing'
    ]
  },
  {
    id: 'zimmer',
    name: 'Zimmer Austria',
    description: 'Austrian carpet manufacturing and technical textiles',
    icon: '🇦🇹'
  },
  {
    id: 'benninger',
    name: 'Benninger AG',
    description: 'Swiss dyeing and finishing machinery',
    icon: '🇨🇭'
  },
  {
    id: 'comatex',
    name: 'Comatex Group',
    description: 'Italian textile machinery specialists for fabric inspection, slitting, plaiting and packing solutions',
    icon: '�🇹',
    subcategories: [
      'Slitting & Plaiting',
      'Inspection Machines',
      'Packing Roll/Plait',
      'Roll Packing Systems',
      'Quality Control'
    ]
  }
]

// Complete SSM Product Portfolio with Official Links
export const ssmProducts = [
  // Air Covering Machines
  {
    id: 'ssm-xeno-ac',
    name: 'XENO-AC Air Covering Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/e/0/csm_ssm-xeno-ac-air-covering-machine-98400_8fc5b247b5.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/air-covering-machines#c48174',
    description: 'Advanced air covering machine for intermingling filament yarns with elastane using adjustable settings and optimized yarn path.',
    keyFeatures: [
      'Single drive technology',
      'Maximum flexibility',
      'Infinitely adjustable process settings',
      'Optimized yarn path',
      'Best intermingling stability and regularity'
    ],
    specifications: {
      'Process Type': 'Air covering/intermingling',
      'Materials': 'Filament yarns + Elastane',
      'Control System': 'Infinitely adjustable',
      'Yarn Path': 'Optimized for stability',
      'Technology': 'Single drive'
    },
    applications: [
      'Elastic yarn production',
      'Apparel industry',
      'Technical textiles',
      'Downstream process optimization'
    ]
  },
  {
    id: 'ssm-xeno-ac-twin',
    name: 'XENO-AC TWIN Air Covering Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/5/e/csm_ssm-xeno-ac-twin-air-covering-machine_13a77350ca.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/air-covering-machines#c54069',
    description: 'Specialized machine for producing elastic dual core yarns with exceptional regularity and stability.',
    keyFeatures: [
      'Dual core yarn production',
      'Infinitely adjustable process settings',
      'Optimized yarn path',
      'Superior regularity and stability',
      'Proven technology'
    ],
    specifications: {
      'Process Type': 'Elastic dual core yarn production',
      'Materials': 'Multiple filament + Elastane',
      'Control System': 'Infinitely adjustable',
      'Output': 'Dual core yarns',
      'Quality': 'Premium stability'
    },
    applications: [
      'Elastic dual core yarns',
      'High-end apparel',
      'Sportswear applications',
      'Technical elastic products'
    ]
  },

  // Air Texturing Machines
  {
    id: 'ssm-dp5-t',
    name: 'DP5-T Air Texturing Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/b/1/csm_ssm-dp5-t-air-texturing-machine-96926_89d5ca085d.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/air-texturing-machines#c48152',
    description: 'Flexible production machine for high-quality air-textured yarns, processing various continuous filaments.',
    keyFeatures: [
      'Flexible production capability',
      'High-quality air-textured yarns',
      'Multiple filament compatibility',
      'Wide range of applications',
      'Superior ATY production'
    ],
    specifications: {
      'Materials': 'POY, FDY/FOY, PES, PA, PP, Glass',
      'Output': 'Air-textured yarns (ATY)',
      'Process Type': 'Air texturing',
      'Flexibility': 'Multiple yarn types',
      'Quality': 'Superior ATY'
    },
    applications: [
      'Air-textured yarn production',
      'Apparel applications',
      'Technical textiles',
      'Industrial applications'
    ]
  },
  {
    id: 'ssm-tg2-at',
    name: 'TG2-AT Automatic Air Texturing Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/6/d/csm_ssm-tg2-at-air-texturing-machine_98fe21fb57.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/air-texturing-machines#c54077',
    description: 'Automatic machine with frontal doffing system for cost-efficient production of high-quality air textured yarns.',
    keyFeatures: [
      'Individual frontal doffing system',
      'Double-sided machine layout',
      'Cost-efficient production',
      'High-quality air textured yarns',
      'Fine to medium final counts'
    ],
    specifications: {
      'Materials': 'POY/FDY Polyester, Polyamide, Polypropylene',
      'Count Range': 'Fine to medium',
      'Doffing': 'Individual frontal system',
      'Layout': 'Double-sided',
      'Automation': 'Automatic'
    },
    applications: [
      'POY/FDY processing',
      'Polyester yarn production',
      'Polyamide applications',
      'Polypropylene processing'
    ]
  },
  {
    id: 'ssm-tg1-at',
    name: 'TG1-AT Manual Air Texturing Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/4/f/csm_ssm-tg1-at-air-texturing-machine_517972ffed.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/air-texturing-machines#c54080',
    description: 'Manual air texturing machine designed for cost-efficient production of high-quality air textured yarns.',
    keyFeatures: [
      'Cost-efficient production',
      'High-quality air textured yarns',
      'Manual operation',
      'Fine to medium counts',
      'Versatile material processing'
    ],
    specifications: {
      'Materials': 'POY/FDY Polyester, Polyamide, Polypropylene',
      'Count Range': 'Fine to medium',
      'Operation': 'Manual',
      'Quality': 'High-quality ATY',
      'Cost': 'Efficient'
    },
    applications: [
      'Small-scale production',
      'Specialty yarns',
      'Cost-conscious operations',
      'Manual processing needs'
    ]
  },

  // Draw Winding Machines
  {
    id: 'ssm-dp5-s-poy',
    name: 'DP5-S POY Draw Winding Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/c/1/csm_ssm-dp5-s-poy-draw-winding-machine_cb3c0c979d.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/draw-winding-machines#c48195',
    description: 'Flexible and energy-efficient machine for cost-effective production of high-quality fully drawn yarns from POY.',
    keyFeatures: [
      'Draw winding of all POY types',
      'Flexible and energy efficient',
      'Cost-effective production',
      'High-quality FDY output',
      'Tailor-made applications'
    ],
    specifications: {
      'Materials': 'POY (PES, PA, PP)',
      'Output': 'Fully drawn yarns (FDY)',
      'Energy': 'Energy efficient',
      'Flexibility': 'High flexibility',
      'Applications': 'Technical and apparel'
    },
    applications: [
      'Fully drawn yarn production',
      'Technical applications',
      'Apparel industry',
      'Cost-effective FDY'
    ]
  },
  {
    id: 'ssm-dp5-s-heat-setting',
    name: 'DP5-S Draw Heat Setting Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/0/0/csm_ssm-dp5-s-draw-heat-setting-winder_188a91671e.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/draw-winding-machines#c54088',
    description: 'Energy-efficient machine for technical and twisted filament threads like sewing threads with heat setting capability.',
    keyFeatures: [
      'Energy efficient design',
      'Technical filament processing',
      'Heat setting capability',
      'Improved thread properties',
      'Sewing thread optimization'
    ],
    specifications: {
      'Process': 'Draw heat setting',
      'Materials': 'Technical and twisted filaments',
      'Applications': 'Sewing threads',
      'Energy': 'Energy efficient',
      'Properties': 'Modified elongation, shrinkage, tenacity'
    },
    applications: [
      'Sewing thread production',
      'Technical filaments',
      'Thread property modification',
      'Industrial sewing applications'
    ]
  },

  // False Twist Texturing Machines
  {
    id: 'ssm-dp5-ft',
    name: 'DP5-FT Automatic False-Twist Texturing Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/b/9/csm_ssm-dp5-ft-false-twist-texturing-machine_f4d9db7165.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/false-twist-texturing-machines#c48166',
    description: 'Advanced false-twist texturing machine for wide final count range with high productivity and flexibility.',
    keyFeatures: [
      'Wide final count range (7-1,320 dtex)',
      'Single-position drive',
      'Up to 4 friction spindles per position',
      'Variable yarn path',
      'Modular machine concept'
    ],
    specifications: {
      'Count Range': '7 to 1,320 dtex',
      'Drive': 'Single-position',
      'Spindles': 'Up to 4 friction spindles/position',
      'Yarn Path': 'Variable',
      'Concept': 'Modular'
    },
    applications: [
      'Draw textured yarns (DTY)',
      'Wide count range processing',
      'Flexible production',
      'High productivity needs'
    ]
  },
  {
    id: 'ssm-tg2-ft',
    name: 'TG2-FT Automatic False-Twist Texturing Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/8/9/csm_ssm-tg2-ft-false-twist-texturing-machine_9085135a9d.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/false-twist-texturing-machines#c54096',
    description: 'Automatic machine with frontal doffing for cost-efficient processing of high-quality filament yarns.',
    keyFeatures: [
      'Individual frontal doffing system',
      'Double-sided machine layout',
      'Cost-efficient processing',
      'Fine to medium count range (7-330 dtex)',
      'PA, PP, PES compatibility'
    ],
    specifications: {
      'Count Range': '7 to 330 dtex',
      'Materials': 'PA, PP, PES filament yarns',
      'Doffing': 'Individual frontal',
      'Layout': 'Double-sided',
      'Quality': 'High-quality'
    },
    applications: [
      'PA filament processing',
      'PP yarn production',
      'PES texturing',
      'Cost-efficient DTY'
    ]
  },
  {
    id: 'ssm-tg1-ft',
    name: 'TG1-FT Manual False-Twist Texturing Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/f/5/csm_ssm-tg1-ft-false-twist-texturing-machine_9b86774108.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/false-twist-texturing-machines#c54099',
    description: 'Manual machine combining proven texturing path with space-saving design for cost-efficient production.',
    keyFeatures: [
      'Proven texturing path',
      'Space-saving design',
      'Cost-efficient production',
      'Fine polyamide processing (down to 7 dtex)',
      'Polypropylene and polyester capability'
    ],
    specifications: {
      'Design': 'Space-saving',
      'Operation': 'Manual',
      'Materials': 'PA (down to 7 dtex), PP, PES',
      'Elastane': 'With or without',
      'Quality': 'High-quality'
    },
    applications: [
      'Fine polyamide yarns',
      'Polypropylene processing',
      'Polyester texturing',
      'Small-scale operations'
    ]
  },
  {
    id: 'ssm-tg30-a',
    name: 'TG.30 A Automatic False-Twist Texturing Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/4/2/csm_ssm-tg30-a-false-twist-texturing-machine_15e4f90bd7.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/false-twist-texturing-machines#c48169',
    description: 'Specialized automatic machine for economic production of fine polyamide and polypropylene yarns.',
    keyFeatures: [
      'Economic production',
      'Fine yarn specialization',
      'Automatic operation',
      'PA and PP focus',
      'Optimized for fine counts'
    ],
    specifications: {
      'Materials': 'Fine PA and PP yarns',
      'Operation': 'Automatic',
      'Focus': 'Economic production',
      'Specialty': 'Fine counts',
      'Quality': 'High-quality'
    },
    applications: [
      'Fine polyamide production',
      'Polypropylene texturing',
      'Economic yarn production',
      'Automatic processing'
    ]
  },
  {
    id: 'ssm-tg30-aem',
    name: 'TG.30 AEM Automatic False-Twist Texturing and Air Covering Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/5/2/csm_ssm-tg30-aem-false-twist-texturing-machine_5b457d77f8.png',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/false-twist-texturing-machines#c54104',
    description: 'Dual-function machine for false twist texturing with integrated elastane feeding for air covered yarn production.',
    keyFeatures: [
      'False twist texturing capability',
      'Integrated elastane feeding',
      'Air covered yarn production',
      'Single process step',
      'PA and PP processing'
    ],
    specifications: {
      'Process': 'False twist + Air covering',
      'Materials': 'PA, PP filament yarns',
      'Elastane': 'Integrated feeding device',
      'Output': 'Air covered yarns',
      'Efficiency': 'One process step'
    },
    applications: [
      'Air covered yarn production',
      'Elastane integration',
      'PA/PP processing',
      'Combined processing needs'
    ]
  },
  {
    id: 'ssm-tg30-2ba',
    name: 'TG.30 2BA Automatic Double Density False-Twist Texturing Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/9/7/csm_ssm-tg30-2ba-false-twist-texturing-machine_820f93c792.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/false-twist-texturing-machines#c54107',
    description: 'Specialized machine for production of twist-free S+Z yarns (double density) with automatic doffer.',
    keyFeatures: [
      'Twist-free S+Z yarn production',
      'Double density capability',
      'Automatic doffer',
      'Short straight yarn path',
      'Fine to medium count range'
    ],
    specifications: {
      'Output': 'Twist-free S+Z yarns',
      'Process': 'Double density',
      'Doffer': 'Automatic',
      'Yarn Path': 'Short and straight',
      'Count Range': 'Fine to medium'
    },
    applications: [
      'Double density yarns',
      'S+Z yarn production',
      'Twist-free processing',
      'Specialized applications'
    ]
  },

  // Singeing Machines
  {
    id: 'ssm-gsx3-gd',
    name: 'GSX3-GD Yarn Singeing and Random Winding Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Yarn Processing Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/4/c/csm_ssm-gsx3-gd_9753e6c179.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.ssm.ch/products/yarn-processing-solutions/singeing-machines#c57131',
    description: 'Advanced yarn gas singeing machine with optimized yarn path for processing even the finest yarn counts.',
    keyFeatures: [
      'Optimized yarn path',
      'Finest yarn count processing',
      'Individual spindle drive',
      'High customer benefits',
      'Top quality results'
    ],
    specifications: {
      'Process': 'Gas singeing',
      'Yarn Path': 'Optimized',
      'Drive': 'Individual spindle',
      'Count Capability': 'Finest yarns',
      'Flexibility': 'Highest'
    },
    applications: [
      'Yarn singeing',
      'Fine count processing',
      'Quality improvement',
      'Production efficiency'
    ]
  },

  // Assembly Winding Machines
  {
    id: 'ssm-neo-fd',
    name: 'NEO-FD Precision Assembly Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/c/5/csm_ssm-neo-fd-3-ply-precision-package-winder_4a5deccc6e.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/assembly-winding-machines#c53243',
    description: 'Economic assembly-winding machine for high density, precision wound packages for twisting with optimized thread path.',
    keyFeatures: [
      'High density precision wound packages',
      'Economic assembly winding',
      'Optimized thread path',
      'Low maintenance costs',
      'Fastflex technology'
    ],
    specifications: {
      'Process': 'Assembly winding',
      'Package Type': 'High density precision',
      'Application': 'Twisting preparation',
      'Technology': 'Fastflex',
      'Maintenance': 'Low cost'
    },
    applications: [
      'Assembly winding for twisting',
      'High density packages',
      'Cross wound packages',
      'Precision winding'
    ]
  },
  {
    id: 'ssm-xeno-yd',
    name: 'XENO-YD Precision Assembly Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/e/3/csm_ssm-xeno-yd-precision-assembly-winder_211d903e0e.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/assembly-winding-machines#c53257',
    description: 'Precision assembly winder for all staple and filament yarns with latest technology and elastane capability.',
    keyFeatures: [
      'All yarn types compatibility',
      'Latest SSM technology',
      'Elastane component addition',
      'Precision assembly winding',
      'Staple and filament processing'
    ],
    specifications: {
      'Materials': 'Staple and filament yarns',
      'Technology': 'Latest SSM technology',
      'Elastane': 'Optional addition',
      'Process': 'Precision assembly',
      'Flexibility': 'High'
    },
    applications: [
      'Staple yarn assembly',
      'Filament yarn assembly',
      'Elastane integration',
      'Precision winding'
    ]
  },
  {
    id: 'ssm-duro-td',
    name: 'DURO-TD Precision Assembly Winder for Technical Yarns',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/6/5/csm_ssm-duro-td-precision-assembly-winder_d552239d89.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/assembly-winding-machines#c53258',
    description: 'Precision assembly winder for technical yarns up to 50,000 dtex with optional intermingling capability.',
    keyFeatures: [
      'Technical yarns up to 50,000 dtex',
      'Optional intermingling',
      'High flexibility',
      'Superior package quality',
      'Optimal twisting performance'
    ],
    specifications: {
      'Count Range': 'Up to 50,000 dtex',
      'Materials': 'Technical yarns',
      'Intermingling': 'Optional',
      'Quality': 'Superior packages',
      'Performance': 'Optimal twisting'
    },
    applications: [
      'Technical yarn assembly',
      'Heavy count processing',
      'Twisting preparation',
      'Industrial applications'
    ]
  },
  {
    id: 'ssm-cwx-d',
    name: 'CWX-D Random Assembly Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/3/3/csm_ssm-cwx-d-random-assembly-winder_f9f935e74f.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/assembly-winding-machines#c53259',
    description: 'Energy-efficient drum assembly winder specially designed for 2-ply and 3-ply yarn production.',
    keyFeatures: [
      'Energy-efficient operation',
      '2-ply and 3-ply capability',
      'Drum assembly winding',
      'Specialized design',
      'Cost-effective production'
    ],
    specifications: {
      'Process': 'Drum assembly winding',
      'Ply Options': '2-ply and 3-ply',
      'Energy': 'Energy-efficient',
      'Design': 'Specialized',
      'Operation': 'Cost-effective'
    },
    applications: [
      '2-ply yarn production',
      '3-ply yarn production',
      'Random assembly winding',
      'Energy-efficient processing'
    ]
  },

  // Dye Packages and Rewinding Machines
  {
    id: 'ssm-neo-fw',
    name: 'NEO-FW Precision Package Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/0/f/csm_ssm-neo-fw-precision-package-winder-99242_056a27a582.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/dye-packages-and-rewinding-machines#c48147',
    description: 'Precision package winding machine for all staple and textured filament yarns with latest SSM technology.',
    keyFeatures: [
      'All yarn types compatibility',
      'Dye package winding',
      'Warping preparation',
      'Latest SSM technology',
      'Minimum maintenance costs'
    ],
    specifications: {
      'Materials': 'Staple and textured filament yarns',
      'Applications': 'Dye packages, warping, rewinding',
      'Lubrication': 'With or without',
      'Technology': 'Latest SSM',
      'Packages': 'Tailor-made cross-wound'
    },
    applications: [
      'Dye package winding',
      'Warping preparation',
      'Rewinding operations',
      'Lubrication processes'
    ]
  },
  {
    id: 'ssm-neo-yw',
    name: 'NEO-YW Precision Package Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/3/8/csm_ssm-neo-yw-precision-package-winder-96553_39f6ef5a9b.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/dye-packages-and-rewinding-machines#c54019',
    description: 'High cost-efficiency precision winder for dye package winding and rewinding of all yarn types.',
    keyFeatures: [
      'High cost-efficiency',
      'Quick market response',
      'All yarn types',
      'Dye package specialization',
      'With/without lubrication'
    ],
    specifications: {
      'Efficiency': 'High cost-efficiency',
      'Materials': 'Filament and staple yarns',
      'Process': 'Dye package winding/rewinding',
      'Lubrication': 'Optional',
      'Market': 'Quick response capability'
    },
    applications: [
      'Dye package winding',
      'Yarn rewinding',
      'Filament processing',
      'Staple yarn processing'
    ]
  },
  {
    id: 'ssm-neo-bw',
    name: 'NEO-BW Precision Package Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/4/a/csm_ssm-neo-bw-precision-package-winder_e86b26c8c1.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/dye-packages-and-rewinding-machines#c54022',
    description: 'Precision winding machine with unique counter-rotating blade yarn laying system for high speeds.',
    keyFeatures: [
      'Counter-rotating blades system',
      'High speed capability',
      'Yarn gentle processing',
      'Wear-free operation',
      'Lowest operating costs'
    ],
    specifications: {
      'System': 'Counter-rotating blades',
      'Speed': 'Highest production speeds',
      'Wear': 'Almost wear-free',
      'Operation': 'Lowest costs',
      'Quality': 'Yarn gentle'
    },
    applications: [
      'High-speed winding',
      'Precision package production',
      'Cost-effective operations',
      'Gentle yarn processing'
    ]
  },
  {
    id: 'ssm-xeno-yw',
    name: 'XENO-YW Precision Package Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/6/6/csm_ssm-xeno-yw-precision-package-winder_5e8b5ebdb4.png',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/dye-packages-and-rewinding-machines#c54023',
    description: 'Precision winding machine for all staple and filament yarns with range of options and executions.',
    keyFeatures: [
      'All yarn types capability',
      'Range of options',
      'Multiple executions',
      'Dye package winding',
      'Warping preparation'
    ],
    specifications: {
      'Materials': 'Staple and filament yarns',
      'Applications': 'Dye packages, warping, rewinding',
      'Options': 'Wide range available',
      'Executions': 'Multiple configurations',
      'Flexibility': 'High'
    },
    applications: [
      'Dye package winding',
      'Warping preparation',
      'Rewinding operations',
      'Flexible processing'
    ]
  },
  {
    id: 'ssm-xeno-yw-precitens',
    name: 'XENO-YW Precitens Combi Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/9/7/csm_ssm-xeno-yw-precitens-combi-winder_f48f1247fc.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/dye-packages-and-rewinding-machines#c48148',
    description: 'Versatile machine for both muff preparation (CTM) and rewinding after dyeing (MTC) processes.',
    keyFeatures: [
      'Dual functionality (CTM/MTC)',
      'Higher flexibility',
      'Lower investment costs',
      'Unique design',
      'Higher profitability'
    ],
    specifications: {
      'Functions': 'CTM and MTC',
      'Process': 'Muff preparation and rewinding',
      'Investment': 'Lower costs',
      'Design': 'Unique versatile',
      'Profit': 'Higher profitability'
    },
    applications: [
      'Muff preparation',
      'Post-dyeing rewinding',
      'CTM processing',
      'MTC processing'
    ]
  },
  {
    id: 'ssm-duro-tw',
    name: 'DURO-TW Precision Package Winder for Technical Yarns',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/1/7/csm_ssm-duro-tw-precision-package-winder_73d2dea7ae.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/dye-packages-and-rewinding-machines#c48149',
    description: 'Precision winder for technical yarns up to 50,000 dtex offering new level of flexibility and quality.',
    keyFeatures: [
      'Technical yarns up to 50,000 dtex',
      'New level of flexibility',
      'Superior winding quality',
      'Customer requirements fulfillment',
      'Technical yarn specialization'
    ],
    specifications: {
      'Count Range': 'Up to 50,000 dtex',
      'Materials': 'Technical yarns',
      'Flexibility': 'New level',
      'Quality': 'Superior winding',
      'Specialization': 'Technical applications'
    },
    applications: [
      'Technical yarn winding',
      'Heavy count processing',
      'Industrial applications',
      'Specialized requirements'
    ]
  },
  {
    id: 'ssm-pwx-ctm',
    name: 'PWX-CTM Cone-to-Muff Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/3/9/csm_ssm-pwx-ctm-cone-to-muff-winder_40bd5897f5.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/dye-packages-and-rewinding-machines#c54032',
    description: 'Specialized winder for maintaining high residual elasticity of DTY polyamide and polyester after dyeing.',
    keyFeatures: [
      'High residual elasticity',
      'DTY PA and PES processing',
      'Muff winding process',
      'Post-dyeing optimization',
      'Best solution for elasticity'
    ],
    specifications: {
      'Materials': 'DTY Polyamide and Polyester',
      'Process': 'Cone-to-muff winding',
      'Feature': 'High residual elasticity',
      'Application': 'Post-dyeing',
      'Specialization': 'False-twist textured yarns'
    },
    applications: [
      'DTY processing',
      'Polyamide winding',
      'Polyester winding',
      'Elasticity preservation'
    ]
  },
  {
    id: 'ssm-pwx-mtc',
    name: 'PWX-MTC Muff-to-Cone Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/b/8/csm_ssm-pwx-mtc-muff-to-cone-winder_c6b2efd2f5.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/dye-packages-and-rewinding-machines#c54035',
    description: 'Ideal machine for rewinding high elastic DTY yarns after dyeing with tension controlled system.',
    keyFeatures: [
      'High elastic DTY processing',
      'Online tension control',
      'Positively driven unrolling',
      'Precitens system',
      'Highest flexibility and productivity'
    ],
    specifications: {
      'Materials': 'High elastic PA and PES DTY',
      'Process': 'Muff-to-cone rewinding',
      'Control': 'Online tension controlled',
      'System': 'Precitens unrolling',
      'Performance': 'Highest flexibility'
    },
    applications: [
      'Post-dyeing rewinding',
      'High elastic DTY',
      'Tension-controlled processing',
      'Productivity optimization'
    ]
  },
  {
    id: 'ssm-cwx-w',
    name: 'CWX-W Rewinding Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/9/4/csm_ssm-cwx-w-random-winding-machine_d257e511e3.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/dye-packages-and-rewinding-machines#c48150',
    description: 'Energy-efficient drum winder for cone rewinding used in weaving, warp knitting and circular knitting.',
    keyFeatures: [
      'Energy-efficient operation',
      'Drum winding technology',
      'Multi-process compatibility',
      'Cone rewinding specialization',
      'Cost-effective operation'
    ],
    specifications: {
      'Technology': 'Energy-efficient drum winder',
      'Process': 'Cone rewinding',
      'Applications': 'Weaving, warp knitting, circular knitting',
      'Efficiency': 'Energy-efficient',
      'Design': 'Drum winder'
    },
    applications: [
      'Weaving preparation',
      'Warp knitting',
      'Circular knitting',
      'Cone rewinding'
    ]
  },

  // Parallel Winding Machines
  {
    id: 'ssm-fm1',
    name: 'FM1 Manual High-Speed Parallel Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/6/4/csm_ssm-fm1-parallel-winder_ef7c288e6d.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/parallel-winding-machines',
    description: 'Flexible manual parallel winder for cost-efficient flanged spool preparation with automatic traverse correction.',
    keyFeatures: [
      'Cost-efficient operation',
      'Flanged spool preparation',
      'Low energy consumption',
      'Automatic traverse correction',
      'Excellent unwinding properties'
    ],
    specifications: {
      'Operation': 'Manual high-speed',
      'Application': 'Flanged spool preparation',
      'Energy': 'Low consumption',
      'Traverse': 'Automatic correction',
      'Performance': 'Excellent unwinding'
    },
    applications: [
      'Conventional covering process',
      'Twisting process preparation',
      'Flanged bobbin winding',
      'Parallel winding operations'
    ]
  },

  // Sewing Thread Finish Winding Machines
  {
    id: 'ssm-tk3-kt',
    name: 'Thread King III KT Automatic Finish Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/4/3/csm_ssm-tk3-kt-finish-winder_421c9e2979.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/sewing-thread-finish-winding-machines#c48213',
    description: 'King spool finish winder with unmatched efficiency, shorter production cycles and improved length accuracy.',
    keyFeatures: [
      'Designed for king spools',
      'Shorter production cycle',
      'Improved length accuracy',
      'Up to 50% safety margin reduction',
      'Perfect unwinding performance'
    ],
    specifications: {
      'Spool Type': 'King spools',
      'Efficiency': 'Unmatched',
      'Accuracy': 'Improved length measurement',
      'Safety Margin': 'Up to 50% reduction',
      'Performance': 'Perfect unwinding'
    },
    applications: [
      'King spool winding',
      'Sewing thread finishing',
      'High-efficiency production',
      'Professional sewing applications'
    ]
  },
  {
    id: 'ssm-tk3-ct',
    name: 'Thread King III CT Automatic Finish Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/7/7/csm_ssm-tk3-ct-finish-winder_906d5aa431.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/sewing-thread-finish-winding-machines#c54054',
    description: 'Cone finish winder with speeds up to 15,000 rpm and shortest production cycles for maximum efficiency.',
    keyFeatures: [
      'Designed for cones',
      'Speeds up to 15,000 rpm',
      'Shortest production cycle',
      'Improved length accuracy',
      'Up to 50% safety margin reduction'
    ],
    specifications: {
      'Spool Type': 'Cones',
      'Speed': 'Up to 15,000 rpm',
      'Cycle': 'Shortest production and doffing',
      'Accuracy': 'Improved length measurement',
      'Profitability': 'Higher'
    },
    applications: [
      'Cone winding',
      'High-speed sewing thread finishing',
      'Maximum efficiency production',
      'Professional applications'
    ]
  },
  {
    id: 'ssm-tk3-tt',
    name: 'Thread King III TT Automatic Finish Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/7/7/csm_ssm-tk3-ct-finish-winder_906d5aa431.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/sewing-thread-finish-winding-machines#c54056',
    description: 'Cylindrical tube (cops) finish winder with speeds up to 15,000 rpm and unmatched efficiency.',
    keyFeatures: [
      'Designed for cylindrical tubes (cops)',
      'Speeds up to 15,000 rpm',
      'Shortest production cycle',
      'Improved length accuracy',
      'Up to 50% safety margin reduction'
    ],
    specifications: {
      'Spool Type': 'Cylindrical tubes (cops)',
      'Speed': 'Up to 15,000 rpm',
      'Cycle': 'Shortest production and doffing',
      'Accuracy': 'Improved length measurement',
      'Efficiency': 'Unmatched'
    },
    applications: [
      'Cylindrical tube winding',
      'Cops processing',
      'High-efficiency production',
      'Sewing thread finishing'
    ]
  },
  {
    id: 'ssm-tk3-kte',
    name: 'Thread King III KTE Automatic Finish Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/4/3/csm_ssm-tk3-kt-finish-winder_421c9e2979.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/sewing-thread-finish-winding-machines#c57938',
    description: 'Bonded sewing thread winder with unmatched flexibility and fastflex electronic laying system.',
    keyFeatures: [
      'Unmatched flexibility for bonded threads',
      'Fastflex electronic laying system',
      'Built-in tail tuck-in',
      'Shortest doffing cycle',
      'Up to 50% safety margin reduction'
    ],
    specifications: {
      'Thread Type': 'Bonded sewing threads',
      'System': 'Fastflex electronic laying',
      'Features': 'Built-in tail tuck-in',
      'Cycle': 'Shortest doffing',
      'Flexibility': 'Unmatched'
    },
    applications: [
      'Bonded sewing threads',
      'Flexible production',
      'Professional sewing',
      'High-efficiency operations'
    ]
  },
  {
    id: 'ssm-tk3-ke',
    name: 'Thread King III KE Automatic Finish Winder',
    manufacturer: 'ssm',
    category: 'ssm',
    subcategory: 'Winding Solutions',
    image: 'https://www.ssm.ch/fileadmin/_processed_/4/3/csm_ssm-tk3-kt-finish-winder_421c9e2979.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.ssm.ch/products/winding-solutions/sewing-thread-finish-winding-machines#c57948',
    description: 'Adaptive winder with fastflex electronic thread laying system for changing production demands.',
    keyFeatures: [
      'Seamless adaptation to production demands',
      'Advanced fastflex electronic laying',
      'Quick adjustments capability',
      'Enhanced length accuracy',
      'Up to 50% safety margin reduction'
    ],
    specifications: {
      'Adaptability': 'Seamless to production demands',
      'System': 'Advanced fastflex electronic',
      'Adjustments': 'Quick and easy',
      'Accuracy': 'Enhanced length',
      'Thread Type': 'Bonded sewing threads'
    },
    applications: [
      'Adaptive production',
      'Bonded sewing threads',
      'Changing demand response',
      'Professional applications'
    ]
  }
]

export const featuredProducts = [
  {
    id: 1,
    name: 'SSM XENO-AC Air Covering Machine',
    manufacturer: 'ssm',
    category: 'ssm',
    image: 'https://images.unsplash.com/photo-1565086447593-ea55eb58a0e1?w=600&h=400&fit=crop',
    price: 'Contact for pricing',
    featured: true,
    description: 'State-of-the-art air covering machine with single drive technology for superior yarn quality and maximum flexibility.',
    keyFeatures: [
      'Single drive technology',
      'Maximum flexibility',
      'Infinitely adjustable settings',
      'Optimized yarn path',
      'Best intermingling stability'
    ],
    specifications: {
      'Process Type': 'Air covering/intermingling',
      'Materials': 'Filament yarns + Elastane',
      'Control System': 'Infinitely adjustable',
      'Technology': 'Single drive',
      'Quality': 'Premium stability'
    },
    applications: [
      'Elastic yarn production',
      'Apparel industry',
      'Technical textiles',
      'High-performance applications'
    ]
  },
  {
    id: 2,
    name: 'Brückner Universal Stenter Frame',
    manufacturer: 'brueckner',
    category: 'brueckner',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&h=400&fit=crop',
    price: 'Contact for pricing',
    featured: true,
    description: 'Advanced stenter frame for precise fabric finishing with optimal temperature and tension control.',
    keyFeatures: [
      'Uniform heat distribution',
      'Precision width control',
      'Energy-efficient design',
      'Advanced automation system',
      'Multi-zone temperature control'
    ],
    specifications: {
      'Working Width': 'Up to 3600 mm',
      'Temperature Range': '80-250°C',
      'Speed Range': '5-150 m/min',
      'Heating System': 'Hot air circulation',
      'Control System': 'PLC with touchscreen',
      'Power Consumption': '300-500 kW'
    },
    applications: [
      'Fabric finishing',
      'Heat setting',
      'Drying processes',
      'Coating applications'
    ]
  },
  {
    id: 3,
    name: 'Benninger FabricMaster',
    manufacturer: 'benninger',
    category: 'benninger',
    image: 'https://benningergroup.com/fileadmin/_processed_/a/5/csm_FabricMaster_Headerbild_d0f35a0b0b.png',
    price: 'Contact for pricing',
    featured: true,
    description: 'The worlds fastest jet dyeing machine with unique fabric transport system for rope mark-free dyeing of delicate fabrics.',
    keyFeatures: [
      'Worlds fastest jet dyeing machine',
      'Unique fabric transport system',
      'Rope mark-free dyeing of delicate fabrics',
      'Lowest liquor ratio in category',
      'Energy-efficient operation',
      'Smooth flow variable nozzle system'
    ],
    specifications: {
      'Machine Type': 'Jet dyeing machine',
      'Liquor Ratio': 'Lowest in category',
      'Fabric Transport': 'Unique rope mark-free system',
      'Speed': 'Worlds fastest jet dyeing',
      'Applications': 'Delicate and sensitive fabrics',
      'Nozzle System': 'Smooth flow variable'
    },
    applications: [
      'Delicate fabric dyeing',
      'Rope mark-free processing',
      'High-speed jet dyeing',
      'Energy-efficient dyeing'
    ]
  },
  {
    id: 4,
    name: 'ZIMMER MAGNOROLL Multipurpose Coating',
    manufacturer: 'zimmer',
    category: 'zimmer',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/Feld1_800x600_MagnorollKnife.jpg',
    price: 'Contact for pricing',
    featured: true,
    description: 'High-quality multipurpose coating machine with the world-famous ZIMMER MAGNET SYSTEM PLUS guaranteeing 100% uniform application.',
    keyFeatures: [
      'ZIMMER MAGNET SYSTEM PLUS technology',
      'Magnetic Low-Add-On or Direct Roll coating',
      'Single or Double Screen Coating',
      'MAGNOKNIFE Over-Roll or Over-Air coating',
      'Working widths: 500-5600 mm',
      '100% uniform application guarantee'
    ],
    specifications: {
      'System Type': 'Multipurpose coating with MAGNET SYSTEM PLUS',
      'Working Width': '500-5600 mm',
      'Coating Technologies': 'Low-Add-On, Direct Roll, Screen, Knife, Jet',
      'Application Types': 'Liquids, pastes, lacquers, foams',
      'Precision': '100% uniform application guarantee',
      'Technical Groups': 'All 12 technical textile groups'
    },
    applications: [
      'Technical textiles',
      'Industrial coatings',
      'Automotive applications',
      'All technical textile groups'
    ]
  },
  {
    id: 5,
    name: 'Comatex ISN 220 - Standard Fabric Inspection',
    manufacturer: 'comatex',
    category: 'comatex',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    price: 'Contact for pricing',
    featured: true,
    description: 'Standard fabric inspection machine for comprehensive quality control and defect detection in textile production.',
    keyFeatures: [
      'Comprehensive fabric inspection',
      'Quality defect detection',
      'Standard inspection protocols',
      'User-friendly operation',
      'Reliable performance',
      'Efficient quality control'
    ],
    specifications: {
      'Type': 'Standard fabric inspection machine',
      'Working Width': '220 cm',
      'Inspection Method': 'Visual quality control',
      'Detection Capability': 'Comprehensive defect identification',
      'Operation Mode': 'Standard inspection procedure',
      'Control System': 'User-friendly interface'
    },
    applications: [
      'Fabric quality inspection',
      'Defect detection and analysis',
      'Production quality control',
      'Textile quality assurance',
      'Manufacturing standards compliance'
    ]
  }
]

// Brückner Stenter Products
export const bruecknerProducts = [
  {
    id: 'brueckner-power-frame-sfp-4',
    name: 'POWER-FRAME SFP-4 STENTER',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Stenters',
    image: 'https://www.brueckner-textile.com/files/produkte/Spannrahmen/Stenter_SFP-4.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/power-frame-stenter.html',
    description: 'The stenter is the heart of textile finishing. It develops more and more into a multi-purpose line for the production of technical textiles and other web-shaped materials.',
    keyFeatures: [
      'Highest drying performance and process control',
      'Split-flow air circulation system',
      'Absolutely homogeneous air flow and temperature distribution',
      'Compact and low-maintenance ICE burners',
      'Lowest specific energy consumption',
      'Extremely robust and low-maintenance chains',
      'Exactly reproducible finishing results',
      'Working widths up to 7 m possible'
    ],
    specifications: {
      'Process Type': 'Drying, Heat-setting, Coating, Functionalizing',
      'Heating Types': 'Gas direct, gas indirect, thermal oil, steam, electric indirect',
      'Applications': 'Knitted fabric, woven fabric, nonwovens, technical textiles, carpets',
      'Working Width': 'Up to 7 m'
    }
  },
  {
    id: 'brueckner-power-frame-sfp-2',
    name: 'POWER-FRAME SFP-2 STENTER',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Stenters',
    image: 'https://www.brueckner-textile.com/files/produkte/Spannrahmen/TAW09757.JPG',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/spannrahmen-power-frame-sfp-2.html',
    description: 'Our latest generation of stenters combines decades of experience with state-of-the-art technology for maximum efficiency in drying processes.',
    keyFeatures: [
      'Highest drying performance',
      'Vertically circulating chain',
      'Energy-efficient heating system',
      'Dewatering and finishing padder',
      'Cooling zone and plaiter',
      'Extremely homogeneous air volume distribution',
      'Compact and low-maintenance ICE burners',
      'Low-maintenance vertical transport system'
    ],
    specifications: {
      'Process Type': 'Drying',
      'Heating Types': 'Direct gas and thermal oil',
      'Applications': 'Woven fabric, knitted fabric',
      'Features': 'Dewatering and finishing padder, cooling zone'
    }
  },
  {
    id: 'brueckner-power-frame-vne',
    name: 'POWER-FRAME VNE',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Stenters',
    image: 'https://www.brueckner-textile.com/files/produkte/Spannrahmen/VNE_2.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/power-frame-vne.html',
    description: 'Multi-layer stenters are mostly used where little space is available or very long dwell times are required.',
    keyFeatures: [
      '2 or 6 fabric passages',
      'Only 1 machine operator required',
      'Highest possible power density on small floor space',
      'Proven split-flow air circulation system',
      'Alternating arrangement ensures uniform air circulation',
      'Long flow section on confined space'
    ],
    specifications: {
      'Process Type': 'Finishing of dimensionally stable fabrics',
      'Fabric Passages': '2 or 6 passages',
      'Applications': 'Knitted fabric, woven fabric, wool, nonwovens, needle felt, technical textiles',
      'Space Efficiency': 'Highest power density on small floor space'
    }
  },

  // Relaxation Dryers
  {
    id: 'brueckner-power-relax-rx3',
    name: 'POWER-RELAX RX3 RELAXATION DRYER',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Relaxation Dryers',
    image: 'https://www.brueckner-textile.com/files/produkte/Relaxiertrockner/Relaxiertrockner%20RX3%20Sanko%20Kopie.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/relaxiertrockner-power-relax-rx3.html',
    description: 'The RX3 is particularly energy-efficient thanks to its air-through zone and offers maximum production output. Minimum residual shrinkage values and very good dimensional stability.',
    keyFeatures: [
      'Up to 20% increase in production due to new air-through drying concept',
      'Fabric dewatered and pre-dried before actual drying process',
      'Uniform fabric moisture across entire fabric width',
      'Significant reduction of exhaust air temperature',
      'Energy savings of up to 15%',
      'Highest production output with low space requirements'
    ],
    specifications: {
      'Process Type': 'Drying, relaxing, shrinking',
      'Fabric Types': 'Knitted and woven fabrics from natural fibers',
      'Applications': 'Cotton, viscose, wool, blends with elastane, polyamide, polyester',
      'End Products': 'Nightwear, polo shirts, sweatshirts'
    }
  },
  {
    id: 'brueckner-power-dry-pd1',
    name: 'POWER-DRY PD1 RELAXATION DRYER',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Relaxation Dryers',
    image: 'https://www.brueckner-textile.com/files/produkte/Relaxiertrockner/Trigema%20Relaxiertrockner%20PD1%20P1100329.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/relaxiertrockner-power-dry-pd1.html',
    description: 'The PD1 high-performance relaxation dryer can dry, relax and shrink knitted fabrics in tubular and open form, as well as woven fabrics, in a short overall length.',
    keyFeatures: [
      'Very good accessibility and short maintenance times',
      'Easy integration into line concept',
      'Can be used as pre-dryer',
      'Highest evaporation performance with smallest overall length (2 m per field)',
      'Optimum shrinkage and maximum tumble effect',
      'Three-dimensional fabric structure and soft, voluminous hand',
      'Controlled overfeed up to 50%'
    ],
    specifications: {
      'Process Type': 'Drying, relaxing, shrinking',
      'Field Length': '2 m per field',
      'Overfeed Range': 'Up to 50% infinitely adjustable',
      'Fabric Types': 'Knitted and woven fabrics from natural fibers'
    }
  },

  // Padders
  {
    id: 'brueckner-power-pad',
    name: 'POWER-PAD PADDER',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Padders',
    image: 'https://www.brueckner-textile.com/files/produkte/Foulards/Foulards_Produktbild.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/foulard-power-pad.html',
    description: 'The padder is a universally usable component for the extraction of water and the application of chemicals before drying and/or heat-setting.',
    keyFeatures: [
      'Best water extraction and very good chemicals application',
      'Integrated pneumatic pendulum roller for fabric tension control',
      'Equal liquor supply across complete working width',
      'Design for woven and knitted fabric as well as technical textiles',
      'Minimum fabric elongation due to extremely short fabric paths',
      'User-friendly handling',
      'Shore hardness available up to 98°',
      'Minimum linear pressure 500 N/cm'
    ],
    specifications: {
      'Linear Pressure': 'Minimum 500 N/cm',
      'Shore Hardness': 'Up to 98°',
      'Applications': 'Woven and knitted fabric, technical textiles',
      'Materials': 'Natural and synthetic fibres and mixtures'
    }
  },

  // Continuous Dyeing Ranges
  {
    id: 'brueckner-power-colortherm',
    name: 'POWER-COLORTHERM HOTFLUE',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Continuous Dyeing Ranges',
    image: 'https://www.brueckner-textile.com/files/produkte/Hotflues/DSC00524%20Kopie.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/power-colortherm-hotflue.html',
    description: 'The BRÜCKNER hotflue is the heart of a continuous dyeing range and can be supplied with oil or gas heating. Achieves exact shade homogeneity across the length and width of the fabric.',
    keyFeatures: [
      'Best dye uniformity over complete length and width',
      'No tailing',
      'No migration',
      'Crease-free production',
      '100% reproducible dyeing results',
      'Minimum consumption of thermal and electrical energy',
      'Tailor-made solutions for maximum productivity',
      'Easy access for cleaning and maintenance'
    ],
    specifications: {
      'Process Type': 'Continuous dyeing',
      'Heating Options': 'Oil or gas heating',
      'Applications': 'Woven fabrics, shirting, trouser fabric, home textiles',
      'End Products': 'Bed linen, shirting fabrics'
    }
  },
  {
    id: 'brueckner-power-infratherm',
    name: 'POWER-INFRATHERM INFRARED DRYER',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Continuous Dyeing Ranges',
    image: 'https://www.brueckner-textile.com/files/produkte/Hotflues/IR-Strahler%2002%20Kopie.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/power-infratherm-infrared-dryer.html',
    description: 'The BRÜCKNER infrared radiation dryer has an important part in the dyeing with a continuous dyeing range. Provides uniform and migration-free dyeing.',
    keyFeatures: [
      'Uniform dye drying over length and width',
      'Highest efficiency with continuously adjustable control range of 700-900°C',
      'Steady fabric aspect due to increased convection portion',
      'Crease-free fabric flow due to self-controlling drive system',
      'Fully automatic margin disconnection for small working widths',
      'High operational reliability',
      'Tailor-made solutions due to segment structure'
    ],
    specifications: {
      'Temperature Range': '700-900°C continuously adjustable',
      'Segment Structure': '2-3 segments per drying chamber',
      'Applications': 'All woven fabrics, shirt and trouser fabrics',
      'End Products': 'Home textiles, bed linen'
    }
  },

  // Coating Lines
  {
    id: 'brueckner-opti-coat',
    name: 'OPTI-COAT 2IN1 COATING UNIT',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Coating Lines',
    image: 'https://www.brueckner-textile.com/files/produkte/Beschichtungsanlagen/OPTI-COAT%202in1.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/opti-coat-ka-kc-coating-unit.html',
    description: 'The OPTI-COAT 2in1 coating unit is a combined floating knife/knife against cylinder unit with compact and stable design and simple handling.',
    keyFeatures: [
      'Exact layer thickness across complete fabric width',
      'Available for working widths up to 3400 mm',
      'Available in explosion-proof design',
      'Low applied quantities with floating knife',
      'Medium and high quantities up to approx. 2000 g/m²',
      'Can apply aqueous dispersions and foams as well as paste'
    ],
    specifications: {
      'Working Width': 'Up to 3400 mm',
      'Application Quantities': 'Up to approx. 2000 g/m²',
      'Applications': 'Woven fabrics, stable knitted fabric',
      'End Products': 'Sailing cloth, abrasive cloth, air bag, technical textiles'
    }
  },
  {
    id: 'brueckner-eco-coat',
    name: 'ECO-COAT MINIMUM APPLICATION UNIT',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Coating Lines',
    image: 'https://www.brueckner-textile.com/files/produkte/Beschichtungsanlagen/Eco_Coat.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/eco-coat-minimum-application-unit.html',
    description: 'The BRÜCKNER ECO-COAT minimum application unit offers Low-Add-On technology with fabric moisture of 60 g/m², lower water consumption and high energy savings.',
    keyFeatures: [
      'Low-Add-On technology',
      'Low water consumption',
      'High energy saving in subsequent drying processes',
      'Low residual liquor (2.5 l per m working width)',
      'Low consumption of chemicals',
      'Low quantities to be discharged',
      'One-sided Kiss-Roll applications possible',
      'High production speeds'
    ],
    specifications: {
      'Fabric Moisture': '60 g/m²',
      'Residual Liquor': '2.5 l per m working width',
      'Applications': 'Print pretreatment, fashion and technical applications',
      'Treatments': 'Hydrophobic, hydrophilic, easy-care, anti-static'
    }
  },
  {
    id: 'brueckner-pressing-laminating',
    name: 'PRESSING & LAMINATING UNITS',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Coating Lines',
    image: 'https://www.brueckner-textile.com/files/produkte/Beschichtungsanlagen/Presswerke_Produktbild.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/pressing-laminating-units.html',
    description: 'Calenders for stamping, smoothing and compacting of textiles or coatings. Nonwovens can be thermally consolidated by means of heated calender cylinders.',
    keyFeatures: [
      'Equal pressing force across complete working width',
      'Stable and long-lasting design',
      'Various solutions for in-line use with stenter',
      'Two pressing rollers with adjustable pressure',
      'Horizontal or vertical design options',
      'Polished, matted or pattern engraved roller surfaces',
      'Double-wall roller systems for heating or cooling'
    ],
    specifications: {
      'Linear Pressure Range': '25 N/mm to more than 250 N/mm',
      'Roller Options': 'Polished steel, elastomer coating',
      'Applications': 'Woven fabric, knitted fabric, nonwovens',
      'End Products': 'Blackouts, micro-porous coatings, military uniforms'
    }
  },
  {
    id: 'brueckner-power-frame-technical',
    name: 'POWER-FRAME SFP-4 STENTER FOR TECHNICAL TEXTILES',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Coating Lines',
    image: 'https://www.brueckner-textile.com/files/produkte/Spannrahmen/Stenter_SFP-4.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/power-frame-stenter-for-technical-textiles.html',
    description: 'Multi-purpose line for production of technical textiles and other web-shaped materials. Thousands of BRÜCKNER stenters are in use globally for various applications.',
    keyFeatures: [
      'Highest drying performance adapted to any fabric quality',
      'Split-flow air circulation system',
      'Absolutely homogeneous air flow and temperature distribution',
      'Compact and low-maintenance ICE burners',
      'Lowest specific energy consumption',
      'Extremely robust and low-maintenance chains',
      'Working widths up to 7 m possible'
    ],
    specifications: {
      'Working Width': 'Up to 7 m',
      'Heating Types': 'Gas direct, gas indirect, thermal oil, steam, electric indirect',
      'Applications': 'Drying, heat-setting, thermo-bonding, functionalizing, coating',
      'Materials': 'Knitted/woven fabric, nonwovens, technical textiles, carpets, films'
    }
  },
  {
    id: 'brueckner-dryers-transport',
    name: 'DRYERS & TRANSPORT SYSTEMS',
    manufacturer: 'brueckner',
    category: 'brueckner',
    subcategory: 'Coating Lines',
    image: 'https://www.brueckner-textile.com/files/produkte/Beschichtungsanlagen/Trockner_Transportsysteme_Produktbild.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.brueckner-textile.com/en/products/details/dryers-transport-systems.html',
    description: 'Comprehensive range of dryer types and fabric transport systems for various coating and finishing applications.',
    keyFeatures: [
      'Multiple dryer types available',
      'Horizontal and vertical fabric flow options',
      'Basic UNIGEL dryer with 3 m thermo zones',
      'High-capacity POWER-FRAME dryer with 1.5 m thermo zones',
      'DUO-THERM with separate temperature control',
      'Various fabric transport systems'
    ],
    specifications: {
      'Dryer Types': 'UNIGEL, POWER-FRAME, DUO-THERM, ETRO, Vertical dryer',
      'Fabric Flow': 'Horizontal and vertical options',
      'Transport Systems': 'Floating, support rods, guide rollers, transport belt, stenter',
      'Chain Types': 'Vertically returning gliding chain, horizontally returning roller chain'
    }
  }
]

// Complete Lafer Product Portfolio with Official Links  
export const laferProducts = [
  // Sueding Machines
  {
    id: 'lafer-ultrasoft',
    name: 'Ultrasoft Brush Sueding Machine',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Sueding',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/efadac9b-2bef-4aaa-935a-7845952fd2a3/Lafer+Ultrasoft-L+brush+sueding+machine+0GSX04024.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/sueding-machines-knitted-woven-fabrics',
    description: 'The original brush sueding concept made better. Superior and repeatable sueding effects with dual action system featuring 6 rotating brushes and a rotating drum.',
    keyFeatures: [
      'Dual Action System with 6 rotating brushes and rotating drum',
      'Delta Plates between brushes for improved fabric-to-brush contact',
      'Advanced Automatic Tension Control for knit fabrics',
      'Special Version for High-Stretch Fabrics',
      'Dedicated configurations for Knit or Woven Fabrics',
      'Upgradeable with Diamond Sueding Conversion Kit'
    ],
    specifications: {
      'Machine Type': 'Brush Sueding',
      'Fabric Types': 'Knitted and Woven',
      'Drum Configuration': 'Single drum with 6 brushes',
      'Tension Control': 'Automatic for knit fabrics',
      'Special Features': 'High-stretch fabric version available'
    }
  },
  {
    id: 'lafer-microsand',
    name: 'Microsand Diamond Sueding Machine',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Sueding',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/332a167a-1185-43d8-8cec-c20701395fb2/MICROSAND+diamond+sueding.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/sueding-machines-knitted-woven-fabrics',
    description: 'Sueding solution designed specifically for woven fabrics using 24 specially designed rubber coated rollers with diamond emery for cleaner, fresher peach effects.',
    keyFeatures: [
      'Diamond Emery for fresh, clean peach effects',
      '24 specially designed rubber coated rollers',
      'Reduced heat build-up during sueding process',
      'Advanced sueding dust extraction system',
      'Convertible to Ultrasoft Brush Mode with optional kit',
      'Special Finishing Brush at Drum Exit',
      'Double Drum Configuration available for maximum productivity'
    ],
    specifications: {
      'Machine Type': 'Diamond Sueding',
      'Fabric Types': 'Woven fabrics',
      'Roller Configuration': '24 diamond emery rollers',
      'Heat Control': 'Reduced heat build-up system',
      'Dust Extraction': 'Advanced extraction system'
    }
  },
  // Raising Machines
  {
    id: 'lafer-gri228',
    name: 'GRI228 Double Drum Raising Machine',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Raising',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/f7ffb34d-dc7d-4404-804b-2743455d3791/GRI228+double+drum+raising+machine+with+2+x+28+rollers+layout+drawing',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/raising-machines',
    description: 'Advanced raising machine that maximizes performance efficiency & quality with advanced controls for fleece, polar fleece, jersey, flannel, and home textiles.',
    keyFeatures: [
      'Customised machine design for optimal results',
      'Adjustable roller gap distance for flexible pile length',
      'Exclusive Lafer operating system for precision',
      'Optimized fabric-to-drum contact angle',
      'Advanced fillet cleaning synchronization',
      'S-Type feed rollers and pressure rollers',
      'High-power drives for increased reliability'
    ],
    specifications: {
      'Configuration': 'Double drum with 2 x 28 rollers',
      'Fabric Types': 'Knitted and woven fabrics',
      'Applications': 'Fleece, polar fleece, jersey, flannel, home textiles',
      'Roller Gap': 'Adjustable distance',
      'Control System': 'Exclusive Lafer operating system'
    }
  },
  // Shearing Machines
  {
    id: 'lafer-cmi100',
    name: 'CMI100 Shearing Machine',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Shearing',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/55a85cb4-f438-4453-937e-f5871c1268e7/Lafer+Shearing+machine+cmi100',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/shearing-machines-knitted-woven-fabrics',
    description: 'Precision shearing machine for premium fabrics, trusted by top manufacturers for superior quality and efficiency with extended blade life.',
    keyFeatures: [
      'Extended Blade Life with exclusive heavy-duty shearing group',
      'Perfectly Uniform Cut with minimized weight loss',
      'Advanced Tension Control for maximum precision',
      'Market-Leading Shearing Height Control',
      'High-efficiency suction system with powerful vortex',
      'Automatic Shearing Roll Lubrication'
    ],
    specifications: {
      'Machine Type': 'Single head shearing',
      'Blade System': 'Heavy-duty shearing group',
      'Tension Control': 'Advanced precision system',
      'Suction System': 'High-efficiency vortex design',
      'Lubrication': 'Automatic roll lubrication'
    }
  },
  {
    id: 'lafer-cmi200',
    name: 'CMI200 Twin Head Shearing Machine',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Shearing',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/99d4da41-8b51-428d-bc03-11c5ed3a371d/Lafer+CMI200+twin+head+shearing+machine+layout+drawing',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.laferspa.com/en/shearing-machines-knitted-woven-fabrics',
    description: 'Twin-head shearing machine for versatile fabric processing, allowing double face cutting or face & back processing with configurable operation modes.',
    keyFeatures: [
      'Dual shearing heads for versatility',
      'Double face cutting capability',
      'Face & back processing options',
      'Configurable for independent operation',
      'Tandem operation for maximum productivity',
      'All CMI100 features included'
    ],
    specifications: {
      'Machine Type': 'Twin head shearing',
      'Configuration': 'Independent or tandem operation',
      'Processing Options': 'Double face cutting, face & back',
      'Productivity': 'Maximum with dual heads'
    }
  },
  // Compacting - Open Width
  {
    id: 'lafer-ka-compactor',
    name: 'KA 2-Felt Compactor',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Compacting-Open Width',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/ee24b66e-0662-4eb3-9735-720e9912be87/Lafer+KA+2+felt+compactor.layout+drawing',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/felt-compacting-open-width-knit-fabric',
    description: 'The original 2-felt compactor, now enhanced. Engineered for exceptional shrinkage control with Lafer\'s exclusive compacting configuration.',
    keyFeatures: [
      'Robust Construction for long-lasting durability',
      'Premium Pin Chains manufactured in-house',
      'Steam-Heated Rails prevent condensation',
      'Optimized Steaming System enhances moisture dwell time',
      'Exceptional shrinkage control',
      'Optimal fabric relaxation'
    ],
    specifications: {
      'Compactor Type': '2-felt configuration',
      'Construction': 'Robust, long-lasting',
      'Pin Chains': 'Premium, in-house manufactured',
      'Heating System': 'Steam-heated rails',
      'Shrinkage Control': 'Exceptional'
    }
  },
  {
    id: 'lafer-kx-compactor',
    name: 'KX 3-Felt Compactor',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Compacting-Open Width',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/88b45f97-55ce-45b5-9e3e-66b88af53185/Lafer+KX+3+felt+compactor+layout+drawing',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/felt-compacting-open-width-knit-fabric',
    description: 'High-efficiency 3-felt compacting for superior performance, elevating the original 2-felt design with greater compacting action and speed.',
    keyFeatures: [
      '3-felt configuration for greater compacting action',
      'Eliminates shade variations between fabric face and back',
      'Enhanced shrinkage control',
      'Preserves fabric integrity',
      'Optimized roller system for smooth results',
      'Higher speed operation'
    ],
    specifications: {
      'Compactor Type': '3-felt configuration',
      'Performance': 'Superior with higher speed',
      'Shade Control': 'Eliminates face/back variations',
      'Roller System': 'Optimized for smooth results'
    }
  },
  {
    id: 'lafer-booster-compactor',
    name: 'Booster Shoe Compactor',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Compacting-Open Width',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/3e78f7b7-e3a4-44a3-9a77-d4e9f3cc9827/Lafer+Booster+shoe+compactor+layout+drawing',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/felt-compacting-open-width-knit-fabric',
    description: 'The ultimate compacting solution for challenging fabrics, designed for complex knit fabrics difficult to stabilize with industry-leading shrinkage reduction.',
    keyFeatures: [
      'Designed for complex, difficult-to-stabilize knit fabrics',
      'Fully compresses elongation beyond 20%',
      'Superior dimensional stability',
      'Precision adjustability for optimal results',
      'Unique shoe & felt compacting combination',
      'Luxurious fabric feel unmatched by other systems'
    ],
    specifications: {
      'Compactor Type': 'Shoe & felt combination',
      'Specialization': 'Complex knit fabrics',
      'Elongation Control': 'Beyond 20% compression',
      'Dimensional Stability': 'Superior',
      'Adjustability': 'Precision control'
    }
  },
  {
    id: 'lafer-kga-sanforizing',
    name: 'KGA Sanforizing & Felt Compacting',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Compacting-Open Width',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/9da5b041-bc29-4e26-a640-6a5919240cf8/Lafer+KGA+sanforizing+machine+layout+drawing',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.laferspa.com/en/felt-compacting-open-width-knit-fabric',
    description: 'Combines rubber belt sanforizing system with felt compacting for premium finish, achieving smooth lustrous finish for solid-dyed and soft refined texture for printed textiles.',
    keyFeatures: [
      'Rubber belt sanforizing system combined with felt compacting',
      'Smooth, lustrous finish for solid-dyed fabrics',
      'Soft, refined texture for printed textiles',
      'Maximum fabric relaxation',
      'Optimized travel distance for higher efficiency'
    ],
    specifications: {
      'System Type': 'Sanforizing + felt compacting',
      'Belt Type': 'Rubber belt system',
      'Finish Quality': 'Premium smooth/lustrous or soft/refined',
      'Efficiency': 'Optimized travel distance'
    }
  },
  // Compacting - Tubular
  {
    id: 'lafer-kst500',
    name: 'KST500 Tubular Compactor',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Compacting-Tubular',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/ca48f0ae-50c4-4679-aac3-79f08c5fb37b/KST500+tubular+felt+compactor',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/tubular-knit-fabric-felt-compacting',
    description: 'High-speed precision tubular compactor engineered for exceptional compacting action at higher speeds, delivering unmatched fabric stability.',
    keyFeatures: [
      'Precision Tension Control with fully automated adjustments',
      'Patented Aliante Expander with magnetic arm support',
      'Exclusive Lafer Compacting Felts for longer lifespan',
      'Robust construction for high-speed operation',
      'Easy Access & Maintenance with open machine design',
      'Reduced energy consumption'
    ],
    specifications: {
      'Machine Type': 'Tubular felt compactor',
      'Speed': 'High-speed operation',
      'Tension Control': 'Fully automated precision',
      'Expander': 'Patented Aliante with magnetic arm',
      'Maintenance': 'Easy access design'
    }
  },
  // Liquid Ammonia Mercerizing
  {
    id: 'lafer-permafix',
    name: 'PERMAFIX Liquid Ammonia Mercerizing',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Liquid Ammonia Mercerizing',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/ac7f13ee-5c59-443b-94f6-3e914796b52e/Permafix.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/liquid-ammonia-mercerizing',
    description: 'Revolutionizing fabric treatment beyond mercerization. Uses liquid ammonia finishing to enhance both knit and woven fabrics with superior softness, durability, and elasticity.',
    keyFeatures: [
      'Premium Silk-Like Touch with ultra-soft, smooth feel',
      'Enhanced Fabric Strength greater than caustic mercerization',
      'Wrinkle Resistance & Elasticity for high-performance textiles',
      'Vibrant, Brighter Colors for all fabric types',
      'Dimensional Stability with long-lasting shape retention',
      'Eco-Friendly with majority ammonia recycling',
      'Patented Lafer Sealing System for safety',
      'Automated Safety Monitoring'
    ],
    specifications: {
      'Process Type': 'Liquid ammonia finishing',
      'Fabric Types': 'Knit and woven fabrics',
      'Environmental': 'Sustainable with ammonia recycling',
      'Safety': 'Patented sealing system',
      'Benefits': 'Softness, durability, elasticity, color enhancement'
    }
  },
  // Enzyme Processing
  {
    id: 'lafer-aquasoft',
    name: 'AQUASOFT Enzyme Processing',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Enzyme Processing',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/1590478376381-59S49PLZZO1VL1H03LBB/web+raising+gallery.jpg?format=1500w',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/enzyme-process-open-width-woven-fabrics',
    description: 'Advanced enzyme processing for woven fabrics. Zero defects, maximum softness, superior quality with innovative open-width enzyme treatment.',
    keyFeatures: [
      'Flawless Fabric Finishing - no creases, rope marks, or abrasion',
      'Luxuriously Soft & Vibrant fabric feel and rich look',
      'Batch-to-Batch Uniformity across entire fabric width and length',
      'Versatile Chemical Compatibility with enzymes and softeners',
      'Simultaneous Vibrational Beating for enhanced softness',
      'Precision Chemical Sprayers for deep penetration',
      'Repeated Free-Fall Cycles for controlled mechanical action',
      'Eco-Friendly & Energy Efficient'
    ],
    specifications: {
      'Process Type': 'Open-width enzyme treatment',
      'Fabric Types': 'Woven fabrics',
      'Mechanical Action': 'Vibrational beating + free-fall cycles',
      'Chemical System': 'Precision sprayers',
      'Energy Efficiency': 'Significantly lower than air-based systems'
    }
  },
  // Waterless Scouring - Deoiling
  {
    id: 'lafer-dissolva',
    name: 'DISSOLVA Waterless Scouring System',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Waterless Scouring-Deoiling',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/722052cd-ae50-48dd-9ec3-d4ea1e05cdd4/sfondo-compacting.jpg?format=1500w',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/waterless-scouring-deoiling',
    description: 'The most advanced waterless scouring system. Powerful de-oiling, lower costs, eco-friendly technology with revolutionary solvent-based scouring.',
    keyFeatures: [
      'Superior De-Oiling for vibrant colors',
      'Perfect for High-Stretch synthetic knits & Wool Fabrics',
      'Eco-Friendly Closed-Loop System',
      'Zero water consumption and discharge',
      'Over 99% Solvent Recycling',
      'Energy-Efficient Process with faster drying',
      'Lower Dyestuff Consumption',
      'Optimized Production Workflow - scouring and drying in one step'
    ],
    specifications: {
      'Process Type': 'Solvent-based waterless scouring',
      'Water Usage': 'Zero consumption',
      'Solvent Recycling': 'Over 99%',
      'Environmental Impact': 'Zero discharge to air or water',
      'Energy Efficiency': 'Lower than water-based systems'
    }
  },
  // Fringing
  {
    id: 'lafer-frv-fringing',
    name: 'FRV Automatic Fringing Machine',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Fringing',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/9ce67ee3-dcc8-4b29-8d89-8f24fb774fa6/FRV_011+closeup.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.laferspa.com/en/fringing-cutting-machines-scarves-blankets',
    description: 'Automatic fringing machine for scarves, shawls, and blankets. Boost productivity with capability of producing up to 120 sets of fringes per hour.',
    keyFeatures: [
      'Automatic Needle Threading for fast, hassle-free operation',
      'Warp Thread Leveling ensures smooth fringing',
      'Custom made Comb Pitches for different fringe spacing',
      'High productivity - up to 120 sets of fringes per hour',
      'Precision fringing on delicate and fine fabrics',
      'Minimal downtime with automated features'
    ],
    specifications: {
      'Machine Type': 'Automatic fringing',
      'Productivity': 'Up to 120 sets/hour',
      'Threading': 'Automatic needle threading',
      'Fabric Types': 'Scarves, shawls, blankets',
      'Customization': 'Various comb pitches available'
    }
  },
  {
    id: 'lafer-ssm-length-cutting',
    name: 'SSM High-Speed Length Cutting Machine',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Fringing',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/9ce67ee3-dcc8-4b29-8d89-8f24fb774fa6/FRV_011+closeup.jpg?format=1500w',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.laferspa.com/en/fringing-cutting-machines-scarves-blankets',
    description: 'High-speed length cutting machine designed for seamless scarf cutting, handling any quantity, color, thickness, or fiber without limitations.',
    keyFeatures: [
      'Non-Stop Cutting without slowing down near fringed areas',
      'High-Speed Rotating Blades for clean, precise cuts',
      'Adaptive Separation Line Tracking for width variations',
      'Quick Blade Replacement in just a few minutes',
      'No limitations on quantity, color, thickness, or fiber',
      'Flawless finish quality'
    ],
    specifications: {
      'Machine Type': 'High-speed length cutting',
      'Operation': 'Non-stop continuous cutting',
      'Blade System': 'High-speed rotating blades',
      'Tracking': 'Adaptive separation line',
      'Maintenance': 'Quick blade replacement'
    }
  },
  {
    id: 'lafer-sst-cross-cutting',
    name: 'SST 2000 Cross-Cutting Machine',
    manufacturer: 'lafer',
    category: 'lafer',
    subcategory: 'Fringing',
    image: 'https://images.squarespace-cdn.com/content/v1/5ecb7db54800825652f63cf4/1630659157823-5B38L04IBF17YQS43VSQ/web_sueding_ultrasoft_original+B89P2702.jpg?format=1500w',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.laferspa.com/en/fringing-cutting-machines-scarves-blankets',
    description: 'Advanced cross-cutting machine built to cut scarves and blankets seamlessly across fabric widths of up to 1950mm with precision alignment.',
    keyFeatures: [
      'Precision Alignment with integrated photocells',
      'Perfectly aligned cut line across fabric width',
      'Automatic Emergency Stop for fault detection',
      'Handles fabric widths up to 1950mm',
      'Prevents defects with automatic fault detection',
      'Seamless cutting across full width'
    ],
    specifications: {
      'Machine Type': 'Cross-cutting',
      'Maximum Width': 'Up to 1950mm',
      'Alignment': 'Integrated photocells',
      'Safety': 'Automatic emergency stop',
      'Applications': 'Scarves and blankets'
    }
  }
]

// ZIMMER AUSTRIA Products - Complete Portfolio
export const zimmerProducts = [
  // Rotary Screen Printing Machines
  {
    id: 'zimmer-rotascreen-tg',
    name: 'ROTASCREEN.TG Closed Bearing System',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Rotary Screen Printing',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F1_800x600_ROTASCREEN_TG206_v1.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/rotascreentg',
    description: 'Advanced rotary screen printing machine with closed bearing system featuring compact construction and the famous ZIMMER MAGNET SYSTEM PLUS technology.',
    keyFeatures: [
      'Compact and solid construction',
      'Closed bearing printhead type G with squeegee holder RH-ECO-G',
      'Printing width: 165/185/225/250/285/330 cm',
      'Up to 24 printing stations',
      'Individual width adjustment of both printing heads',
      'ACR-5-control system for easy handling and short set-up time',
      'Automatic repeat adjustment from 64 to 102 cm',
      'Digital synchronisation guarantees high printing accuracy up to 120 m/min'
    ],
    specifications: {
      'System Type': 'Closed bearing rotary screen printing',
      'Printing Width': '165-330 cm',
      'Printing Stations': 'Up to 24 stations',
      'Maximum Speed': '120 m/min',
      'Repeat Range': '64-102 cm automatic adjustment',
      'Control System': 'ACR-5 with design memory'
    },
    applications: [
      'Home Textiles',
      'Fashion',
      'Technical Textiles',
      'Wall Covering',
      'Transfer Paper',
      'Upholstery'
    ]
  },
  {
    id: 'zimmer-rotascreen-tu',
    name: 'ROTASCREEN.TU Open Bearing System',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Rotary Screen Printing',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F2_800x600_ROTASCREEN_TU_2017_v1_0.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/rotascreentu',
    description: 'High-performance rotary screen printing machine with open bearing system for fast, safe handling and set-up of screens during design changes.',
    keyFeatures: [
      'Fast, safe handling and set-up of screens with color pipes',
      'Open bearing printhead type U with squeegee holder RH-ECO-U',
      'Printing width: 165/185/225/250/285/330 cm',
      'Up to 24 printing stations',
      'Individual width adjustment of both printing heads',
      'ACR-5-control system with automatic repeat setting',
      'Design memory and quick reproduction of re-orders',
      'Digital synchronisation up to 120 m/min printing speed'
    ],
    specifications: {
      'System Type': 'Open bearing rotary screen printing',
      'Printing Width': '165-330 cm',
      'Printing Stations': 'Up to 24 stations',
      'Maximum Speed': '120 m/min',
      'Repeat Range': '64-102 cm automatic',
      'Bearing Type': 'Open bearing printhead type U'
    },
    applications: [
      'Home Textiles',
      'Fashion',
      'Technical Textiles',
      'Glass Fibre',
      'Transfer Paper',
      'Industrial Printing'
    ]
  },
  {
    id: 'zimmer-rotascreen-rsdm-v',
    name: 'ROTASCREEN.RSDM-V Advanced Open Bearing',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Rotary Screen Printing',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F3_800x600_ROTASCREEN_RSDM-V_2017_v1.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/rotascreenrsdm-v',
    description: 'Most advanced rotary screen printing system with RSDM-V open screen bearing and digital operating panel for perfect repeat adjustment.',
    keyFeatures: [
      'RSDM-V open screen bearing printing head with digital panel',
      'Repeat navigator for perfect pre- and fine-adjustment 64-120 cm',
      'Touchscreen operating panel supports any language',
      'Color pipe holder with pneumatic fixation',
      'Fast and safe set-up of screen with color pipe',
      'Printing width: 165/185/225/250/285/330 cm',
      'Up to 24 printing stations',
      'Digital synchronisation guarantees high accuracy up to 120 m/min'
    ],
    specifications: {
      'System Type': 'RSDM-V open bearing with digital control',
      'Printing Width': '165-330 cm',
      'Repeat Range': '64-120 cm with navigator',
      'Control Interface': 'Touchscreen multilingual',
      'Pneumatic System': 'Color pipe holder fixation',
      'Maximum Speed': '120 m/min'
    },
    applications: [
      'High-precision printing',
      'Technical Textiles',
      'Home Textiles',
      'Fashion',
      'Industrial Applications'
    ]
  },
  {
    id: 'zimmer-magnoroll-rs',
    name: 'MAGNOROLL.RS Rotary Screen Station',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Rotary Screen Printing',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F4_800x600_MagnorollScreenApplication.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/magnorollrs',
    description: 'MAGNOROLL rotary screen station for paste or foam application featuring the famous ZIMMER MAGNET SYSTEM roll rods technology.',
    keyFeatures: [
      'MAGNOROLL coating and printing with ZIMMER MAGNET SYSTEM',
      'Paste or foam application capabilities',
      'Optional dual rotary screens for simultaneous application',
      'Individual width adjustment of both print heads',
      'Narrow printing capability on wider machines',
      'Available working widths: 500-3200 mm',
      'Repeat sizes: 640-914 mm'
    ],
    specifications: {
      'System Type': 'MAGNOROLL rotary screen station',
      'Working Width': '500-3200 mm',
      'Repeat Size': '640-914 mm',
      'Application Types': 'Paste and foam',
      'Magnet System': 'ZIMMER MAGNET SYSTEM roll rods',
      'Configuration': 'Single or dual rotary screens'
    },
    applications: [
      'Coating applications',
      'Foam application',
      'Technical textiles',
      'Industrial coatings'
    ]
  },
  // Flat Screen Printing Machines
  {
    id: 'zimmer-magnoprint',
    name: 'MAGNOPRINT Flat Screen Printing Machine',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Flat Screen Printing',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F1_800x600_Magnoprint_FlatScreen_2.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/magnoprint',
    description: 'The most versatile flat screen printing machine with MAGNET SYSTEM PLUS for finest printing quality, especially for centre printing and geometrical designs.',
    keyFeatures: [
      'Original MAGNET SYSTEM PLUS technology',
      'Finest printing quality for centre printing and geometrical designs',
      'Repeat length, speed, and squeegee strokes individually adjustable',
      'Magnetic power individually adjustable on each station',
      'Available printing widths: 165/185/225/250/285/330 cm',
      'Up to 24 printing stations',
      'Standard magnet bars SMP 70/55 or extra strong SMP 70/95',
      'Repeat sizes up to 600 cm for large designs'
    ],
    specifications: {
      'System Type': 'Flat screen printing with MAGNET SYSTEM PLUS',
      'Printing Width': '165-330 cm',
      'Printing Stations': 'Up to 24 stations',
      'Maximum Repeat': 'Up to 600 cm',
      'Magnet Bars': 'SMP 70/55 standard, SMP 70/95 extra strong',
      'Production Capacity': '100-10,000 m optimal range'
    },
    applications: [
      'Towels',
      'Blankets',
      'Flags & Banners',
      'Home Textiles',
      'Upholstery',
      'Nonwovens'
    ]
  },
  {
    id: 'zimmer-midi-ii-f',
    name: 'MIDI-II-F Sample Printing Machine',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Flat Screen Printing',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F2_800x600_Midi-2-F.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/midi-2-f',
    description: 'Most versatile flat screen sample printing machine suitable for all kinds of textile fabrics with production-equivalent printing widths.',
    keyFeatures: [
      'Most versatile flat screen sample printing machine',
      'Suitable for all kinds of textile fabrics',
      'Same printing width as production machines',
      'Real-size sample printing capability',
      'Printing width: 165/185/225/250/285/330 cm',
      'Variable printing lengths: 9.5-32 meters',
      'Production-equivalent results for accurate sampling'
    ],
    specifications: {
      'Machine Type': 'Flat screen sample printing',
      'Printing Width': '165-330 cm',
      'Printing Length': '9.5-32 meters variable',
      'Sample Quality': 'Production-equivalent',
      'Fabric Compatibility': 'All textile fabrics'
    },
    applications: [
      'Sample development',
      'Design verification',
      'Color matching',
      'Production planning',
      'Quality control'
    ]
  },
  // Coating Machines
  {
    id: 'zimmer-magnoroll-coating',
    name: 'MAGNOROLL Multipurpose Coating Machine',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Coating Machines',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/Feld1_800x600_MagnorollKnife.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/magnoroll',
    description: 'High-quality multipurpose coating machine with the world-famous ZIMMER MAGNET SYSTEM PLUS guaranteeing 100% uniform application across all technical textile groups.',
    keyFeatures: [
      'ZIMMER MAGNET SYSTEM PLUS for 100% uniform application',
      'Magnetic Low-Add-On or Magnetic Direct Roll coating',
      'Single or Double Screen Coating with magnet roll rods',
      'MAGNOKNIFE Over-Roll or Over-Air coating',
      'MAGNOJET closed system for paste or foam application',
      'VARIOPRESS open system for stable foams',
      'Working widths: 500-5600 mm',
      'Reversible high precision knife holder with dual blades'
    ],
    specifications: {
      'System Type': 'Multipurpose coating with MAGNET SYSTEM PLUS',
      'Working Width': '500-5600 mm',
      'Coating Technologies': 'Low-Add-On, Direct Roll, Screen, Knife, Jet',
      'Application Types': 'Liquids, pastes, lacquers, foams',
      'Precision': '100% uniform application guarantee'
    },
    applications: [
      'All 12 technical textile groups',
      'Agrotech, Buildtech, Clothtech',
      'Medtech, Mobiltech, Oekotech',
      'Geotech, Hometech, Indutech',
      'Packtech, Protech, Sporttech'
    ]
  },
  {
    id: 'zimmer-triplexcoat',
    name: 'TRIPLEXCOAT Coating Machine',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Coating Machines',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/Feld2_800x600_T-CoatMachine.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/triplexcoat',
    description: 'Cost-effective multipurpose coating machine with universal system for KNIFE coating, MAGNOJET foam coating, and ROTARY.SCREEN printing/coating.',
    keyFeatures: [
      'Cost-effective multipurpose coating solution',
      'Universal take-up system for multiple technologies',
      'KNIFE coating capabilities',
      'MAGNOJET foam coating system',
      'ROTARY.SCREEN printing/coating integration',
      'Optimal solution for standard applications',
      'KNIFE and MAGNOJET working widths: 500-3400 mm',
      'Screen Coating with blade squeegee: up to 2000 mm'
    ],
    specifications: {
      'Machine Type': 'Multipurpose coating with universal system',
      'KNIFE/MAGNOJET Width': '500-3400 mm',
      'Screen Coating Width': 'Up to 2000 mm',
      'Integration': 'Existing coating lines or custom solutions',
      'Technology': 'KNIFE, MAGNOJET, ROTARY.SCREEN'
    },
    applications: [
      'Standard coating applications',
      'Foam coating',
      'Screen printing/coating',
      'Custom coating lines',
      'Industrial applications'
    ]
  },
  {
    id: 'zimmer-magnojet',
    name: 'MAGNOJET Foam Coating System',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Coating Machines',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/Feld3_800x600_MagnojetFoamCoating.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/magnojet',
    description: 'Closed coating system with controlled application for paste and foam, featuring advanced mixing and measuring systems for precise application.',
    keyFeatures: [
      'Closed coating system with controlled application',
      'Constant substance feeding pump with inline flow meter',
      'Foam mixing unit with software controlled weight measuring',
      'Avoids evaporation of liquids and pollution',
      'No foam creation during paste application',
      'Hassle-free processing of instable foams',
      'No extra amounts of application media necessary',
      'Precise control and consistent results'
    ],
    specifications: {
      'System Type': 'Closed foam coating with controlled application',
      'Feed System': 'Constant substance pump with flow meter',
      'Mixing System': 'Software controlled weight measuring',
      'Application Types': 'Paste and foam (including instable foams)',
      'Control': 'Precise automated application'
    },
    applications: [
      'Foam coating applications',
      'Paste applications',
      'Instable foam processing',
      'Precision coating',
      'Clean room applications'
    ]
  },
  {
    id: 'zimmer-twincoat',
    name: 'TWINCOAT Double-Side Coating',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Coating Machines',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/Feld5_TwinCoat_800x600_1.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/twincoat',
    description: 'Advanced TWINCOAT system for simultaneous coating on both sides of the substrate in vertical and horizontal execution.',
    keyFeatures: [
      'Simultaneous coating on both sides of substrate',
      'Available in vertical and horizontal execution',
      'Application widths: 1100-5400 mm',
      'Efficient double-side processing',
      'Uniform coating on both sides',
      'Space-saving design options',
      'High productivity with dual application'
    ],
    specifications: {
      'System Type': 'Double-side simultaneous coating',
      'Application Width': '1100-5400 mm',
      'Execution Options': 'Vertical and horizontal',
      'Coating Sides': 'Both sides simultaneously',
      'Efficiency': 'High productivity dual application'
    },
    applications: [
      'Double-side coating applications',
      'Technical textiles',
      'Industrial fabrics',
      'Automotive textiles',
      'High-performance materials'
    ]
  },
  // Dryers
  {
    id: 'zimmer-compact-hc-l1',
    name: 'COMPACT.HC Layout 1 Hot Air Dryer',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Dryers',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F1_800x600_CompactHC_L1.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/compacthc',
    description: 'Universal all-purpose hot air dryer with horizontal fabric entry, designed for high efficiency drying of printed and wet textiles on ground floor level.',
    keyFeatures: [
      'Universal all-purpose layout with horizontal fabric entry',
      'Dryer on ground floor level for easy access',
      'High quality modular design for individual adaptation',
      'Optimized interior geometry for high energy efficiency',
      'Uniform chamber temperature distribution',
      'Nozzle arrangement adaptable to various drying methods',
      'Available working width: 1000-3400 mm',
      'Operating temperature: 90°C to 200°C',
      'Drying capacity: 200-1500 kg of water/h'
    ],
    specifications: {
      'Dryer Type': 'High capacity hot air nozzle dryer',
      'Working Width': '1000-3400 mm',
      'Operating Temperature': '90-200°C',
      'Drying Capacity': '200-1500 kg water/h',
      'Installation': 'Ground floor level',
      'Fabric Entry': 'Horizontal'
    },
    applications: [
      'Fashion and apparel',
      'Home textiles',
      'Decorative fabrics',
      'Nonwovens',
      'Printed textiles',
      'Pigment, reactive, acid, dispersion dyes'
    ]
  },
  {
    id: 'zimmer-compact-hc-l4',
    name: 'COMPACT.HC Layout 4 Digital Printing Dryer',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Dryers',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F4_800x600_CompactHC_L4.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/dryer-digital-printing-0',
    description: 'Optimum dryer specifically designed for digital printing machines with hot-air-flow through substrate technology for tremendous water evaporation capacity.',
    keyFeatures: [
      'Optimum dryer for digital printing machines',
      'Horizontal fabric entry with modular construction',
      'Hot-air-flow through substrate drying technique',
      'Designed for thick permeable substrates',
      'Tremendous water evaporation capacity increase',
      'Much shorter dryer design due to enhanced efficiency',
      'Suitable for printed and wet textiles or nonwovens',
      'Advanced air flow technology'
    ],
    specifications: {
      'Dryer Type': 'Digital printing specialized hot air dryer',
      'Drying Technique': 'Hot-air-flow through substrate',
      'Substrate Types': 'Thick permeable materials',
      'Efficiency': 'Tremendous evaporation capacity',
      'Design': 'Compact due to enhanced efficiency'
    },
    applications: [
      'Digital printing applications',
      'Thick permeable substrates',
      'Printed textiles',
      'Nonwovens',
      'Technical textiles',
      'High-volume water removal'
    ]
  },
  {
    id: 'zimmer-compact-hc-poly',
    name: 'COMPACT.HC POLY Polymerizing Dryer',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Dryers',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F7_800x600_CompactHC_POLY.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/compacthc-poly',
    description: 'Advanced dryer with integrated polymerizing unit for hot-air fixation of pigments, combining drying and fixation in one working process.',
    keyFeatures: [
      'Dryer with integrated polymerizing unit',
      'Designed as curing area with 3 minutes dwelling time',
      'Suitable for hot-air fixation of pigments',
      'Drying and fixation in single working process',
      'Simultaneously controlled fabric temperature',
      'Visual and acoustic deviation signals',
      'Horizontal or vertical fabric entry options',
      'Complete pigment processing solution'
    ],
    specifications: {
      'System Type': 'Dryer with polymerizing unit',
      'Dwelling Time': 'Approximately 3 minutes',
      'Process': 'Combined drying and pigment fixation',
      'Temperature Control': 'Simultaneous fabric temperature monitoring',
      'Entry Options': 'Horizontal or vertical fabric entry'
    },
    applications: [
      'Pigment fixation',
      'Hot-air curing',
      'Combined drying and fixation',
      'Textile finishing',
      'Industrial processing',
      'Quality-controlled temperature treatment'
    ]
  },
  // Coating Lines
  {
    id: 'zimmer-nonwoven-coating-line',
    name: 'Nonwoven Coating and Printing Line',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Coating Lines',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/styles/slide_image/public/Machines%20Klagenfurt/1_1120x350_96dpi_Nonwoven%20Coating%20and%20Printing%20Line.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/coating-lines-0',
    description: 'Complete coating and printing line designed for all kinds of coating, printing, and laminating processes in the nonwoven industry, especially for automotive and filter applications.',
    keyFeatures: [
      'Designed for all coating, printing, and laminating processes',
      'Dedicated for nonwoven industry applications',
      'Specialized for high-end automotive products',
      'Optimized for filter industry requirements',
      'ZIMMER MAGNET SYSTEM PLUS technology',
      '100% uniform application guarantee',
      'Complete processing line solution',
      'High-quality results for demanding applications'
    ],
    specifications: {
      'Line Type': 'Complete nonwoven coating and printing',
      'Industry Focus': 'Automotive and filter industry',
      'Processes': 'Coating, printing, laminating',
      'Technology': 'ZIMMER MAGNET SYSTEM PLUS',
      'Quality': 'High-end product specifications'
    },
    applications: [
      'Automotive industry',
      'Filter industry',
      'High-end nonwoven products',
      'Industrial filtration',
      'Technical nonwovens',
      'Specialized coatings'
    ]
  },
  {
    id: 'zimmer-denim-coating-line',
    name: 'Denim Coating Line',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Coating Lines',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/styles/slide_image/public/Machines%20Klagenfurt/2_1120x350_96dpi_Denim%20Coating%20Line.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/coating-lines-0',
    description: 'Specialized coating line designed for heavy weight denim fabrics and high-elastic fashion jeans with optional touch-free sensor and optical weft-straightener.',
    keyFeatures: [
      'Designed for heavy weight denim fabrics',
      'Suitable for high-elastic fashion jeans',
      'Optional touch-free sensor for weight control',
      'Optical weft-straightener unit for fabric distortion correction',
      'Handles various denim substrates',
      'Advanced fabric handling systems',
      'Quality control integration',
      'Precision processing for fashion industry'
    ],
    specifications: {
      'Line Type': 'Specialized denim coating',
      'Fabric Types': 'Heavy weight denim, high-elastic jeans',
      'Sensors': 'Touch-free weight control (optional)',
      'Correction': 'Optical weft-straightener (optional)',
      'Applications': 'Fashion denim processing'
    },
    applications: [
      'Heavy weight denim',
      'High-elastic fashion jeans',
      'Denim finishing',
      'Fashion industry',
      'Apparel manufacturing',
      'Specialized denim treatments'
    ]
  },
  {
    id: 'zimmer-pvc-coating-line',
    name: '3-Step PVC Coating Line',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Coating Lines',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/styles/slide_image/public/Machines%20Klagenfurt/5_1120x350_96dpi_3-Step-PVC%20Coating%20Line.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/coating-lines-0',
    description: 'Complete 3-step PVC coating line for high-quality, heavy-duty PVC fabrics with single-pass processing including base-coating, top-coating, and lacquering.',
    keyFeatures: [
      'Complete finishing in single-pass processing',
      '3-step process: base-coating, top-coating, lacquering',
      'Designed for high-quality, heavy-duty PVC fabrics',
      'Suitable for tarpaulins and billboards',
      'Complete processing in one pass',
      'High-efficiency production',
      'Industrial-grade quality output',
      'Versatile PVC applications'
    ],
    specifications: {
      'Line Type': '3-step PVC coating with single-pass processing',
      'Process Steps': 'Base-coating, top-coating, lacquering',
      'Fabric Types': 'High-quality heavy-duty PVC',
      'Efficiency': 'Complete finishing in single pass',
      'Output Quality': 'Industrial-grade heavy-duty'
    },
    applications: [
      'Tarpaulins',
      'Billboards',
      'Heavy-duty PVC fabrics',
      'Industrial applications',
      'Outdoor signage',
      'Weather-resistant materials'
    ]
  }
]

// Additional ZIMMER AUSTRIA products
const additionalZimmerProducts = [
  {
    id: 'zimmer-midi-ii-r',
    name: 'MIDI-II-R Sample Printing Machine',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Rotary Screen Printing',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/F5_800x600_Midi-2-R.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/midi-ii-r-1',
    description: 'Rotascreen sample printing machine accessory with same printing width as production machines for real-size sample printing.',
    keyFeatures: [
      'Same printing width as production machines',
      'Real-size sample printing capability',
      'Compatible with closed or open bearing systems',
      'Printing width: 165/185/225/250/285/330 cm',
      'Variable printing lengths: 9.5-32 meters',
      'Production-equivalent sampling'
    ],
    specifications: {
      'Machine Type': 'Rotary screen sample printing',
      'Printing Width': '165-330 cm',
      'Printing Length': '9.5-32 meters variable',
      'Compatibility': 'Closed or open bearing systems'
    },
    applications: [
      'Sample development',
      'Design verification',
      'Color matching',
      'Production planning'
    ]
  },
  {
    id: 'zimmer-variopress',
    name: 'VARIOPRESS Foam Coating System',
    manufacturer: 'zimmer',
    category: 'zimmer',
    subcategory: 'Coating Machines',
    image: 'https://www.zimmer-klagenfurt.com/sites/default/files/Machines%20Klagenfurt/Feld4_800x600_VariopressAppMachine.jpg',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://www.zimmer-klagenfurt.com/en/content/variopress',
    description: '100% control foam application system independent of line speed, web tension, and absorbance characteristics with Over-Air or Over-Roll application.',
    keyFeatures: [
      '100% control of foam application amount',
      'Independent of line speed and web tension',
      'Independent of absorbance characteristics',
      'Over-Air or Over-Roll application options',
      'Tooth gears with step-less adjustable speed',
      'Installation at entry of any dryer or coating line'
    ],
    specifications: {
      'System Type': 'Controlled foam application',
      'Control': '100% application amount control',
      'Application Methods': 'Over-Air or Over-Roll',
      'Speed Control': 'Step-less adjustable',
      'Installation': 'Any dryer or coating line entry'
    },
    applications: [
      'Foam coating',
      'Stable foam applications',
      'Metastable foam processing',
      'Controlled application systems'
    ]
  }
]

// Complete Benninger Products - Leader in Wet Textile Finishing
export const benningerProducts = [
  // Discontinuous Processing
  {
    id: 'benninger-fabricmaster',
    name: 'FabricMaster Jet Dyeing Machine',
    manufacturer: 'benninger',
    category: 'benninger',
    subcategory: 'Discontinuous Processing',
    image: 'https://benningergroup.com/fileadmin/user_upload/FM-NEU.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://benningergroup.com/en/discontinuous-dyeing/fabricmaster',
    description: 'The fastest and most versatile jet dyeing machine in the industry, ensuring dramatically shorter process times with the highest fabric running speed.',
    keyFeatures: [
      'Highest fabric running speed in the industry',
      'Drastically reduced cycle times',
      'Large main reel wrapping angle minimizes fabric tension',
      'Gentle, low-stress handling for modern jet dyeing',
      'State-of-the-art exhaust dyeing capability',
      'Integrated self-cleaning filter',
      'Low liquor ratio for resource efficiency',
      'Suitable for demanding fiber blends including Lycra'
    ],
    specifications: {
      'Process Type': 'Discontinuous jet dyeing',
      'Fabric Types': 'Heavy and lightweight knitted and woven fabrics',
      'Fiber Compatibility': 'Cotton, synthetics, Lycra blends',
      'Liquor Ratio': 'Lowest in industry',
      'Tension Control': 'Gentle, low-stress handling',
      'Maintenance': 'Self-cleaning filter system'
    },
    applications: [
      'Exhaust dyeing',
      'Soft flow processes',
      'Cotton dyeing',
      'Synthetic fiber dyeing',
      'Lycra blend processing',
      'Modern jet dyeing'
    ]
  },
  {
    id: 'benninger-jigmaster',
    name: 'JigMaster Discontinuous Fabric Dyeing',
    manufacturer: 'benninger',
    category: 'benninger',
    subcategory: 'Discontinuous Processing',
    image: 'https://benningergroup.com/fileadmin/_processed_/6/1/csm_JigMaster_Headerbild-2_a2b5f2313b.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://benningergroup.com/en/discontinuous-dyeing/jigmaster',
    description: 'Revolutionary discontinuous fabric dyeing machine with performance that beats everything seen before. Features TwinJig technology for maximum efficiency.',
    keyFeatures: [
      'BEN-CONTROL Software for constant fabric tension and speed control',
      'TwinJig technology with 2 troughs for water and energy saving',
      'Counterflow rinsing and higher mechanical washing effect',
      'Reduced processing time',
      'Accurate measuring of lot length including shrinkage',
      'Precise detection of sampling point',
      'Fast heating gradients with dual high capacity heat exchangers',
      'Fully automatic add tank with mixing and dosing function',
      'Fast and tensionless unloading with frequency controlled winder'
    ],
    specifications: {
      'Technology': 'TwinJig with 2 independent troughs',
      'Control System': 'BEN-CONTROL Software',
      'Fabric Handling': 'Even and low-tension dyeing',
      'Heat Exchangers': 'Two high capacity units',
      'Automation': 'Fully automatic with Plug and Play',
      'Fabric Detection': 'Precise sampling point detection'
    },
    applications: [
      'Discontinuous fabric dyeing',
      'Delicate woven fabric processing',
      'Crease-free dyeing',
      'Edge mark prevention',
      'Resource-efficient processing'
    ]
  },
  {
    id: 'benninger-synthmaster',
    name: 'SynthMaster Hydrodynamic Dyeing Machine',
    manufacturer: 'benninger',
    category: 'benninger',
    subcategory: 'Discontinuous Processing',
    image: 'https://benningergroup.com/fileadmin/_processed_/e/f/csm_SynthMaster_headerbild-2_2b79a18542.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://benningergroup.com/en/discontinuous-dyeing/synthmaster',
    description: 'Advanced dyeing machine capable of dyeing fabrics where other machines fail. Specializes in non-preheat-setted polyester and Lycra blends without rope marks.',
    keyFeatures: [
      'Lowest liquor ratio of any hydrodynamic driven long tube dyeing machine',
      'Internal winch with low rope lifting',
      'Smooth flow variable nozzle',
      'Frequency controlled circulation pump for closed loop nozzle pressure',
      'Master Filter internal self-cleaning filter (100% main circulation)',
      'Plaiting device over full width of chamber',
      'Teflonized chamber for enhanced performance',
      'Shortest horizontal dyeing machine - autoclave length only 4600 mm'
    ],
    specifications: {
      'Machine Type': 'Hydrodynamic driven long tube dyeing',
      'Liquor Ratio': 'Lowest in category',
      'Chamber Length': '4600 mm autoclave',
      'Nozzle System': 'Smooth flow variable',
      'Filter System': 'Master Filter self-cleaning (100% circulation)',
      'Chamber Coating': 'Teflonized'
    },
    applications: [
      'Non-preheat-setted polyester fabrics',
      'Lycra blends of cotton, Rayon, Nylon, Modal',
      'Open-width fabric dyeing',
      'Rope mark-free processing',
      'Edge curl prevention',
      'Compression-free dyeing'
    ]
  },
  {
    id: 'benninger-dyemaster',
    name: 'DyeMaster Central Dyehouse Supply System',
    manufacturer: 'benninger',
    category: 'benninger',
    subcategory: 'Discontinuous Processing',
    image: 'https://benningergroup.com/fileadmin/_processed_/b/f/csm_DyeMaster_Headerbild_43a924a379.png',
    price: 'Contact for pricing',
    featured: false,
    officialUrl: 'https://benningergroup.com/en/discontinuous-dyeing/dyemaster',
    description: 'Comprehensive central dyehouse supply system including chemical dispensing, dyestuff dissolving & dosing, and water supply systems.',
    keyFeatures: [
      'No dyestuff dust contamination outside dyestuff kitchen',
      'Centralized chemicals store in protected environment',
      'IBC or original chemical suppliers container compatibility',
      'Just in Time supply with no waiting time at machine',
      'Human error elimination',
      'Permanent hot water availability for shorter heating time',
      'High degree of heat recovery with 40% heating energy saving',
      'HOST System manages complete dyehouse equipment'
    ],
    specifications: {
      'System Components': 'Chemical Dispensing, Dyestuff Dissolving & Dosing, Powder Dissolving, Water Supply',
      'Container Compatibility': 'IBC or original supplier containers',
      'Heat Recovery': '40% energy saving',
      'Automation': 'HOST System complete management',
      'Safety': 'Protected chemical storage environment'
    },
    applications: [
      'Central dyehouse management',
      'Chemical dispensing automation',
      'Dyestuff preparation',
      'Water supply management',
      'Energy recovery systems',
      'Process optimization'
    ]
  },
  // Continuous Processing
  {
    id: 'benninger-ben-wash',
    name: 'BEN-Wash Continuous Washing Range',
    manufacturer: 'benninger',
    category: 'benninger',
    subcategory: 'Washing Solutions',
    image: 'https://benningergroup.com/fileadmin/_processed_/d/7/csm_Ben-Wash_Headerbild_176f3bf1f1.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://benningergroup.com/en/textile-finishing/washing-solutions',
    description: 'Complete washing range for all processes featuring globally renowned washing compartments EXTRACTA, TRIKOFLEX, and INJECTA.',
    keyFeatures: [
      'High washing performance',
      'High level of uniformity and reproducibility',
      'Minimum water consumption',
      'High energy efficiency',
      'Up to 50% water and steam savings compared to extension processes',
      'Modular concept covers all textile washing requirements',
      'EXTRACTA, TRIKOFLEX, and INJECTA compartments',
      'Variety of available models'
    ],
    specifications: {
      'Washing Systems': 'EXTRACTA, TRIKOFLEX, INJECTA',
      'Water Savings': 'Up to 50% compared to extension processes',
      'Steam Savings': 'Up to 50% reduction',
      'Design': 'Modular concept',
      'Performance': 'High uniformity and reproducibility'
    },
    applications: [
      'Textile finishing systems',
      'Continuous washing processes',
      'Water-efficient washing',
      'Energy-efficient processing',
      'Industrial textile washing',
      'High-volume production'
    ]
  },
  {
    id: 'benninger-ben-bleach',
    name: 'BEN-BLEACH Bleaching Solutions',
    manufacturer: 'benninger',
    category: 'benninger',
    subcategory: 'Bleaching Solutions',
    image: 'https://benningergroup.com/fileadmin/_processed_/6/5/csm_Hero_Ben_Bleach_4473b7e27a.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://benningergroup.com/en/textile-finishing/bleaching-solutions',
    description: 'Fully modular system for continuous pretreatment of woven fabrics, combining desizing, impregnation, steaming, washing, and bleaching in one system.',
    keyFeatures: [
      'INJECTA enables chemical-free desizing at over 100°C',
      'IMPACTA ensures controlled liquor application with minimal chemical use',
      'REACTA provides adjustable steaming for uniform reaction times',
      'EXTRACTA and TRIKOFLEX offer intensive washing with low tension',
      'Reduced water consumption',
      'Flexible configurations for fabric types and production speeds',
      'Ideal for sensitive fabrics and demanding blends',
      'Tension-free fabric transport'
    ],
    specifications: {
      'System Type': 'Fully modular continuous pretreatment',
      'Modules': 'INJECTA, IMPACTA, REACTA, EXTRACTA, TRIKOFLEX',
      'Desizing Temperature': 'Over 100°C chemical-free',
      'Fabric Handling': 'Tension-free transport',
      'Applications': 'Full White or Print White'
    },
    applications: [
      'Woven fabric pretreatment',
      'Cotton processing',
      'Synthetic fabric bleaching',
      'Lycra blend processing',
      'Bi-elastic fiber blends',
      'Continuous desizing and bleaching'
    ]
  },
  {
    id: 'benninger-singeray',
    name: 'SingeRay Singeing Solutions',
    manufacturer: 'benninger',
    category: 'benninger',
    subcategory: 'Singeing Solutions',
    image: 'https://benningergroup.com/fileadmin/_processed_/f/f/csm_Singeing_Solutions_Headerbild-2_8d9ad7cc48.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://benningergroup.com/en/continuous-processing/singeing-solutions',
    description: 'The all new SingeRay comes in a 21st century design with features that will satisfy your requirements. One of the top features are the high velocity nozzles for beyond comparison singeing effects.',
    keyFeatures: [
      '4 singeing positions with reproducible adjustments of singeing intensity',
      '2 high-efficiency special aluminium burners with ceramic flame guiding bricks',
      'Flame width adjustment and water cooling with temperature regulation',
      'Distance between fabric and burner adjustable',
      'Automatic setting of process parameters',
      'High velocity nozzles for superior singeing effects',
      'Flame with high energy density over complete burner width',
      'Significant energy savings through unique flame width setting'
    ],
    specifications: {
      'Singeing Positions': '4 positions with reproducible adjustments',
      'Burners': '2 high-efficiency special aluminium burners',
      'Flame Control': 'Ceramic flame guiding bricks with width adjustment',
      'Cooling System': 'Water cooling with temperature regulation',
      'Automation': 'Automatic process parameter setting',
      'Energy Efficiency': 'Significant energy savings'
    },
    applications: [
      'Fabric surface preparation',
      'Cotton singeing',
      'Synthetic fabric processing',
      'Blend fabric singeing',
      'Pre-dyeing preparation',
      'Quality fabric finishing'
    ]
  },
  {
    id: 'benninger-ben-colour',
    name: 'BEN-Colour Dyeing Solutions',
    manufacturer: 'benninger',
    category: 'benninger',
    subcategory: 'Dyeing Solutions',
    image: 'https://benningergroup.com/fileadmin/_processed_/a/8/csm_dyeing_solutions_ben-color_headerbild-2_2dd01b88c7.png',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://benningergroup.com/en/textile-finishing/dyeing-solutions',
    description: 'The complete range for continuous and Küsters CPB dyeing. Flexibility, high reproducibility and easy handling are the main arguments for the cold dwelling process.',
    keyFeatures: [
      'High reproducibility in dyeing results',
      'Even dyeing results across fabric width',
      'Low energy and water consumption (CPB)',
      'High wear-fastness of dyed fabrics',
      'Salt free dyeing process',
      'Complete spectrum of open-width dyeing coverage',
      'Küsters DyePad with two swimming rollers',
      'Low investment cost solution'
    ],
    specifications: {
      'Process Type': 'Continuous and Küsters CPB dyeing',
      'Dyestuffs': 'Reactive dyestuffs compatibility',
      'Energy Consumption': 'Low energy and water usage',
      'Fastness': 'High wear-fastness results',
      'Environmental': 'Salt-free dyeing capability',
      'Equipment': 'Küsters DyePad with swimming rollers'
    },
    applications: [
      'Open-width continuous dyeing',
      'Reactive dyestuff processing',
      'Piece dyeing operations',
      'Cold dwelling process dyeing',
      'High-volume fabric dyeing',
      'Eco-friendly dyeing processes'
    ]
  },
  {
    id: 'benninger-ben-dimensa',
    name: 'BEN-DIMENSA Mercerizing Solutions',
    manufacturer: 'benninger',
    category: 'benninger',
    subcategory: 'Mercerizing Solutions',
    image: 'https://benningergroup.com/fileadmin/_processed_/3/9/csm_01_Dimensa_Getzner_03_e2dc1f9a77.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://benningergroup.com/en/textile-finishing/mercerizing-solutions',
    description: 'The BEN-DIMENSA mercerizing systems represent cutting-edge technology, redefining precision and efficiency in textile finishing with patented chainless fabric guidance.',
    keyFeatures: [
      'Patented combination of chain-based and chainless systems',
      'Permanently bound fabric guidance technology',
      'Faster and more even lye penetration',
      'Improved dimensional stability',
      'Smoother fabric appearance',
      'Automated lye concentration, temperature, and fabric tension control',
      'Quick production adjustments with minimal interruptions',
      'Reduced resource consumption and efficient recycling systems'
    ],
    specifications: {
      'Technology': 'Chain-based and chainless system combination',
      'Fabric Guidance': 'Permanently bound chainless guidance',
      'Process Control': 'Automated lye concentration, temperature, tension',
      'Dimensional Control': 'Precise width and length control',
      'Energy Efficiency': 'Reduced lye, water, and energy consumption',
      'Sustainability': 'Efficient recycling systems'
    },
    applications: [
      'Cotton fabric mercerization',
      'Dimensional stability improvement',
      'Fabric appearance enhancement',
      'Sustainable textile finishing',
      'Light and heavy textile processing',
      'High-quality textile production'
    ]
  }
]

// Complete Comatex Product Portfolio with Official Links
export const comatexProducts = [
  // Slitting & Plaiting Machines
  {
    id: 'comatex-at240s',
    name: 'AT 240 S - Semi-Automatic Slitting Machine for Tubular',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Slitting & Plaiting',
    image: 'https://www.comatex.net/immagini/grande_1_AT-240-S-Semi-automatic-slitting-machine-for-tubularfor-knit_1280x640.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.comatex.net/en/slitting-plaiting/rope-opener/at-240-s-semi-automatic-slitting-machine-for-tubular.php',
    description: 'Fast speed slitting machine with opening triangle for tubular fabric, featuring fabric twisting system and manual needle drop control for preparation of fabric to dyeing in open width.',
    keyFeatures: [
      'Speed of cut and plait up to 120mt/min',
      'For knit tubular fabric in roll or plait',
      'Exit in free plait with roller continuous movement forward backward',
      'Low noise machine with transmission by belts',
      'Fabric twisting basket to adjust cutting point',
      'Fabric slitting with big electric cutting blade',
      'Stainless steel opening triangle',
      'American plaiting type exit for improved fabric quantity and relaxing'
    ],
    specifications: {
      'Type': 'Semi-automatic slitting machine for tubular fabric',
      'Speed': 'Up to 120 mt/min',
      'Fabric Types': 'Knit tubular fabric in roll or plait',
      'Frame': 'Painted carbon steel or stainless steel',
      'Cutting System': 'Big electric cutting blade',
      'Opening Triangle': 'Stainless steel',
      'Transmission': 'Belt drive for low noise',
      'Exit Type': 'Free plait with continuous roller movement'
    },
    applications: [
      'Tubular fabric slitting',
      'Fabric preparation for dyeing in open width',
      'Knit tubular fabric processing',
      'American plaiting type processing',
      'Industrial fabric cutting operations'
    ]
  },
  {
    id: 'comatex-at280',
    name: 'AT 280 - Automatic Slitting Machine for Tubular',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Slitting & Plaiting',
    image: 'https://www.comatex.net/immagini/grande_AT-280-Automatic-slitting-machine-for-tubularfor-knit_1280x640.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.comatex.net/en/slitting-plaiting/rope-opener/at-280-automatic-slitting-machine-for-tubular.php',
    description: 'Automatic slitting machine with opening triangle for tubular fabric, featuring fabric rotating system and automatic needle drop control, complete with J-box for sewing and unwinding of rolls.',
    keyFeatures: [
      'Automatic slitting with opening triangle',
      'Fabric rotating system for precise positioning',
      'Automatic needle drop control',
      'Complete J-box for sewing and unwinding rolls',
      'Fully automated operation',
      'Advanced control systems for consistent quality'
    ],
    specifications: {
      'Type': 'Automatic slitting machine for tubular fabric',
      'Working Width': '280 cm',
      'Operation Mode': 'Fully automatic',
      'Control System': 'Automatic needle drop control',
      'Additional Equipment': 'J-box for sewing and unwinding',
      'Fabric System': 'Rotating system for positioning',
      'Opening Triangle': 'Integrated for tubular processing'
    },
    applications: [
      'Automatic tubular fabric slitting',
      'High-volume tubular processing',
      'Automated fabric preparation',
      'Industrial sewing operations',
      'Continuous production lines'
    ]
  },
  {
    id: 'comatex-sfh240',
    name: 'SFH 240 - Roll Plaiting Machine',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Slitting & Plaiting',
    image: 'https://www.comatex.net/immagini/grande_SFH-240-Roll-plaiting-machine-for-knit-and-woven_1280x640.jpg',
    price: 'Contact for pricing',
    officialUrl: 'https://www.comatex.net/en/slitting-plaiting/plaiting-machine/sfh-240-roll-plaiting-machine.php',
    description: 'Roll plaiting machine with roll unwinder up to 80mt/min, suitable for integration with sewing rail or sewing trolley systems.',
    keyFeatures: [
      'Roll unwinder up to 80mt/min',
      'Suitable with sewing rail or sewing trolley',
      'Designed for knit and woven fabrics',
      'Integrated unwinding and plaiting system',
      'Compatible with various sewing systems',
      'Reliable mechanical construction'
    ],
    specifications: {
      'Type': 'Roll plaiting machine with unwinder',
      'Speed': 'Up to 80 mt/min',
      'Working Width': '240 cm',
      'Fabric Types': 'Knit and woven fabrics',
      'Integration': 'Compatible with sewing rail or trolley',
      'Unwinding System': 'Integrated roll unwinder',
      'Operation': 'Continuous plaiting process'
    },
    applications: [
      'Roll plaiting operations',
      'Fabric preparation with unwinding',
      'Integration with sewing systems',
      'Knit and woven fabric processing',
      'Production line automation'
    ]
  },
  {
    id: 'comatex-sf240',
    name: 'SF 240 - Roll Plaiting Machine Tensionless',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Slitting & Plaiting',
    image: 'https://www.comatex.net/immagini/grande_SF-240-Roll-plaiting-machine-tensionless-for-knit-and-woven_1280x640.jpg',
    price: 'Contact for pricing',
    officialUrl: 'https://www.comatex.net/en/slitting-plaiting/plaiting-machine/sf-240-roll-plaiting-machine-tensionless.php',
    description: 'Tensionless roll plaiting machine with unwinding rollers up to 100 mt/min, featuring tensionless fabric transport ideal for knit and elastomeric fabrics.',
    keyFeatures: [
      'Unwinding rollers up to 100 mt/min',
      'Tensionless fabric transport system',
      'Ideal for knit and elastomeric fabrics',
      'Structure with integral protection of mechanical and electronic organs',
      'Elevated silence by belt transmission even at maximum speeds',
      'Cradles for unwinding rolls up to ø 800 mm',
      'Carpet with 14 covered cylinders',
      'High speed operation up to 100 Mt/min'
    ],
    specifications: {
      'Type': 'Tensionless roll plaiting machine',
      'Speed': 'Up to 100 mt/min',
      'Working Width': '240 cm',
      'Roll Diameter': 'Up to ø 800 mm',
      'Fabric Types': 'Knit and elastomeric fabrics',
      'Cylinders': '14 covered cylinders',
      'Transmission': 'Belt drive for silent operation',
      'Protection': 'Integral mechanical and electronic protection'
    },
    applications: [
      'Knit fabric plaiting',
      'Elastomeric fabric processing',
      'Tensionless fabric handling',
      'Preparation for dyeing processes',
      'High-speed plaiting operations'
    ]
  },
  {
    id: 'comatex-sfl240',
    name: 'SFL 240 - Roll Plaiting Machine Tensionless with Fabric Relax',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Slitting & Plaiting',
    image: 'https://www.comatex.net/immagini/grande_SFL-240-Roll-plaiting-machine-tensionless-with-fabric-relax-for-knit-and-woven_1280x640.jpg',
    price: 'Contact for pricing',
    officialUrl: 'https://www.comatex.net/en/slitting-plaiting/plaiting-machine/sfl-240-roll-plaiting-machine-tensionless-with-fabric-relax.php',
    description: 'Advanced tensionless plaiting machine with unwinding rollers up to 130 mt/min, featuring tensionless fabric transport and special "relax" plaiting type, ideal for knit and elastomeric fabrics.',
    keyFeatures: [
      'Unwinding rollers up to 130 mt/min',
      'Tensionless fabric transport system',
      'Special "relax" plaiting type',
      'Ideal for knit and elastomeric fabrics',
      'Structure with integral protection of mechanical and electronic organs',
      'Elevated silence by belt transmission at maximum speeds',
      'Advanced fabric relaxation technology',
      'Optimized for wear and cotton fabrics'
    ],
    specifications: {
      'Type': 'Tensionless roll plaiting machine with fabric relax',
      'Speed': 'Up to 130 mt/min',
      'Working Width': '240 cm',
      'Plaiting Type': 'Relax plaiting',
      'Fabric Types': 'Knit, elastomeric, wear, and cotton fabrics',
      'Transport': 'Tensionless fabric transport',
      'Protection': 'Integral mechanical and electronic protection',
      'Transmission': 'Belt drive for silent operation'
    },
    applications: [
      'Fabric preparation for dyeing',
      'Knit and elastomeric fabric processing',
      'Cotton and wear fabric handling',
      'Tensionless fabric relaxation',
      'High-speed plaiting with relax function'
    ]
  },
  // Inspection Machines
  {
    id: 'comatex-isn220',
    name: 'ISN 220 - Standard Inspection Machine',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Inspection Machines',
    image: 'https://www.comatex.net/immagini/grande_ISN-220-Standard-inspection-machine-for-knit-woven-and-non-woven_1280x640.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.comatex.net/en/inspection-machine/open-fabric/isn-220-standard-inspection-machine.php',
    description: 'Inspection and winding machine for any type of fabric with wide lighted inspection table, automatic edge alignment, adjustable roll hardness and fabric tension. Can be interfaced with exit of stenter or other machines without stopping.',
    keyFeatures: [
      'Wide lighted inspection table for quality check',
      'Automatic edge alignment system',
      'Adjustable roll hardness and fabric tension',
      'Can interface with stenter exit without stopping',
      'Linear geometry drawing with sensitive synchronization system',
      'Motorization of all fabric delay rolls',
      'Excellent for elastic fabrics verification',
      'PLC management interfaced to inverter for real-time adjustments'
    ],
    specifications: {
      'Type': 'Standard inspection and winding machine',
      'Working Width': '220 cm',
      'Fabric Types': 'Any type of fabric including elastic knit and shuttle fabrics',
      'Control System': 'PLC interfaced to inverter',
      'Edge Alignment': 'Automatic system',
      'Roll Adjustment': 'Adjustable hardness and fabric tension',
      'Integration': 'Can interface with stenter or other machines',
      'Operation': 'Real-time tension and hardness modification'
    },
    applications: [
      'Fabric quality inspection and winding',
      'Integration with stenter exit',
      'Elastic fabric verification',
      'Real-time quality control',
      'Production line integration without stopping'
    ]
  },
  {
    id: 'comatex-isp220',
    name: 'ISP 220 - Inspection Machine with Rolling Back',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Inspection Machines',
    image: 'https://www.comatex.net/immagini/grande_ISP-220-Inspection-machine-with-rolling-back-for-knit-woven-and-non-woven_1280x640.jpg',
    price: 'Contact for pricing',
    officialUrl: 'https://www.comatex.net/en/inspection-machine/open-fabric/isp-220-inspection-machine-with-rolling-back.php',
    description: 'Advanced inspection machine for any type of fabric with winding backside to operator, featuring wide lighted inspection table, automatic edge alignment, adjustable roll hardness and fabric tension.',
    keyFeatures: [
      'Inspection for any type of fabric',
      'Winding backside to operator for easy access',
      'Wide lighted inspection table',
      'Automatic edge alignment system',
      'Adjustable roll hardness and fabric tension',
      'Rolling back capability for thorough inspection',
      'Enhanced operator ergonomics',
      'Superior quality control features'
    ],
    specifications: {
      'Type': 'Inspection machine with rolling back',
      'Working Width': '220 cm',
      'Fabric Types': 'Any type of fabric',
      'Winding Position': 'Backside to operator',
      'Inspection Table': 'Wide lighted table',
      'Edge Alignment': 'Automatic system',
      'Roll Adjustment': 'Adjustable hardness and tension',
      'Special Feature': 'Rolling back capability'
    },
    applications: [
      'Comprehensive fabric inspection',
      'Quality control with rolling back',
      'Any fabric type processing',
      'Operator-friendly inspection',
      'Advanced defect detection'
    ]
  },
  {
    id: 'comatex-ist240',
    name: 'IST 240 - Tensionless Inspection Machine',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Inspection Machines',
    image: 'https://www.comatex.net/immagini/grande_IST-240-Tensionless-inspection-machine--for-knit-and-woven_1280x640.jpg',
    price: 'Contact for pricing',
    officialUrl: 'https://www.comatex.net/en/inspection-machine/tensionless/ist-240-tensionless-inspection-machine-.php',
    description: 'Specialized inspection machine for delicate fabrics with tensionless fabric transport system and precision fabric tension sensor for gentle handling without stress.',
    keyFeatures: [
      'Designed specifically for delicate fabrics',
      'Tensionless fabric transport system',
      'Precision fabric tension sensor',
      'Gentle handling without fabric stress',
      'Maintains fabric integrity during inspection',
      'Advanced tensionless technology',
      'Suitable for sensitive materials',
      'Precise quality control without distortion'
    ],
    specifications: {
      'Type': 'Tensionless inspection machine',
      'Working Width': '240 cm',
      'Fabric Types': 'Delicate and sensitive fabrics',
      'Transport System': 'Tensionless fabric transport',
      'Sensor': 'Precision fabric tension sensor',
      'Technology': 'Advanced tensionless processing',
      'Handling': 'Gentle without stress application',
      'Quality Control': 'Distortion-free inspection'
    },
    applications: [
      'Delicate fabric inspection',
      'Sensitive material processing',
      'Tensionless quality control',
      'Premium fabric handling',
      'Stress-free inspection operations'
    ]
  },

  {
    id: 'comatex-ism120',
    name: 'ISM 120 - Tubular Inspection Machine with Mirrors',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Inspection Machines',
    image: 'https://www.comatex.net/immagini/grande_ISM-120-Tubular-inspection-machine-with-mirrors-for-knit_1280x640.jpg',
    price: 'Contact for pricing',
    officialUrl: 'https://www.comatex.net/en/inspection-machine/tubular-fabric/ism-120-tubular-inspection-machine-with-mirrors.php',
    description: 'Specialized inspection machine for tubular fabrics, supplied with 3 tube lamps of different widths for internal fabric lighting, spreading and alignment. Features 2 lateral mirrors at 45° for complete fabric quality inspection all around.',
    keyFeatures: [
      'Designed specifically for tubular fabrics',
      '3 tube lamps of different widths for internal lighting',
      'Fabric spreading and alignment system',
      '2 lateral mirrors positioned at 45°',
      'Complete fabric quality inspection all around',
      'Enhanced visibility for tubular inspection',
      'Comprehensive defect detection system',
      'Specialized lighting and mirror configuration'
    ],
    specifications: {
      'Type': 'Tubular inspection machine with mirrors',
      'Working Width': '120 cm',
      'Fabric Types': 'Tubular fabrics',
      'Lighting System': '3 tube lamps of different widths',
      'Mirror System': '2 lateral mirrors at 45°',
      'Inspection Coverage': 'Complete all-around inspection',
      'Features': 'Internal lighting, spreading, and alignment',
      'Detection': 'Mirror-assisted defect identification'
    },
    applications: [
      'Tubular fabric quality inspection',
      'Complete all-around fabric assessment',
      'Knit tubular fabric processing',
      'Enhanced visibility inspection',
      'Specialized tubular defect detection'
    ]
  },

  // Packing Systems
  {
    id: 'comatex-imba',
    name: 'IMB A - Roll Packing Machine "Wrapping System"',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Packing Roll/Plait',
    image: 'https://www.comatex.net/immagini/grande_IMB-A-Roll-packing-machine-wrapping-system-for-knit-woven-and-non-woven_1280x640.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.comatex.net/en/packing-rollplait/packing-for-rolls/imb-a-roll-packing-machine-wrapping-system.php',
    description: 'Advanced packing machine for rolls, pushing the roll on vertical plastic foil. Suggested for middle-high production volumes, can be supplied with conveyor line up to 12 inspection machines.',
    keyFeatures: [
      'Packing machine for rolls with vertical plastic foil',
      'Suggested for middle-high production volumes',
      'Can be supplied with conveyor line up to 12 inspection machines',
      'Structure with integral protection of mechanical and electronic parts',
      'Ample range for rolls up to ø500 mm',
      'Film cutting with hidden electric blade',
      'Compatible with any type of polyethylene (transparent or coloured)',
      'Control microprocessor with trouble-shooting feature',
      'Output capacity up to 150 rolls/h',
      'Longitudinal welding by thermo-fusion',
      'Edge-closing by thermo-retraction with hot-air or ultrasound system',
      'Possibility to wind more turns of polyethylene on the roll'
    ],
    specifications: {
      'Type': 'Roll packing machine with wrapping system',
      'Roll Diameter': 'Up to ø500 mm',
      'Production Capacity': 'Up to 150 rolls/h',
      'Film Types': 'Any polyethylene (transparent or coloured)',
      'Control System': 'Microprocessor with trouble-shooting',
      'Welding': 'Longitudinal thermo-fusion',
      'Edge Closing': 'Thermo-retraction with hot-air or ultrasound',
      'Integration': 'Conveyor line up to 12 inspection machines'
    },
    applications: [
      'Middle-high production roll packing',
      'Integration with inspection machine lines',
      'Industrial roll packaging',
      'Automated packaging systems',
      'High-volume roll processing'
    ]
  },
  {
    id: 'comatex-imbsa',
    name: 'IMB SA - Roll Packing "Winding System"',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Packing Roll/Plait',
    image: 'https://www.comatex.net/immagini/grande_IMB-SA-Roll-packing-winding-system-for-knit-woven-and-non-woven_1280x640.jpg',
    price: 'Contact for pricing',
    officialUrl: 'https://www.comatex.net/en/packing-rollplait/packing-for-rolls/imb-sa-roll-packing-winding-system.php',
    description: 'Very tight shrink packing by plastic winding system with possibility to increase roll protection by wrapping multiple times. Suggested for medium productions or with automatic roll cut after inspection machine.',
    keyFeatures: [
      'Very tight shrink packing by plastic winding system',
      'Possibility to increase roll protection wrapping multiple times',
      'Suggested for medium productions',
      'Compatible with automatic roll cut after inspection machine',
      'Versatile machine for various roll feeding typologies',
      'Can be set in direct exit to checker or fed by accumulation tables',
      'PLC management for automatic introduction and clearing of rolls',
      'Structure with integral protection of mechanical and electronic parts',
      'Ample range for rolls up to ø500 mm',
      'Output capacity up to 150 rolls/h',
      'Longitudinal welding by thermo-fusion',
      'Edge-closing by thermo-retraction with hot-air or ultrasound system'
    ],
    specifications: {
      'Type': 'Roll packing with winding system',
      'Packing Method': 'Very tight shrink packing',
      'Roll Diameter': 'Up to ø500 mm',
      'Production Capacity': 'Up to 150 rolls/h',
      'Control System': 'PLC managed',
      'Protection': 'Multiple wrapping capability',
      'Welding': 'Longitudinal thermo-fusion',
      'Edge Closing': 'Thermo-retraction with hot-air or ultrasound'
    },
    applications: [
      'Medium production roll packing',
      'Enhanced roll protection',
      'Integration with inspection machines',
      'Automatic roll processing',
      'Shrink packaging operations'
    ]
  },
  {
    id: 'comatex-imbpk',
    name: 'IMB PK - Packing Machine for Plaited Fabric, Box and Packs',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Packing Roll/Plait',
    image: 'https://www.comatex.net/immagini/grande_IMB-PK-Packing-machine-for-plaited-fabric-box-and-packs-for-knit-and-woven_1280x640.jpg',
    price: 'Contact for pricing',
    officialUrl: 'https://www.comatex.net/en/packing-rollplait/packing-for-plaited-fabric/imb-pk-packing-machine-for-plaited-fabric-box-and-packs.php',
    description: 'Specialized packing machine for plaited fabrics, packs, boxes and mattresses. Features packing by pushing the pack on vertical plastic foil with pressure of plaited fabric before packing. Can be supplied with conveyor line up to 12 inspection machines.',
    keyFeatures: [
      'Packing machine for plaited fabrics, packs, box and mattress',
      'Packing by pushing pack on vertical plastic foil',
      'Pressure of plaited fabric before packing',
      'Can be supplied with conveyor line up to 12 inspection machines',
      'Specialized design for various pack types',
      'Compression system for optimal packing',
      'Integration capability with inspection lines',
      'Versatile packaging solution'
    ],
    specifications: {
      'Type': 'Packing machine for plaited fabric, box and packs',
      'Packing Method': 'Pushing pack on vertical plastic foil',
      'Special Feature': 'Pressure of plaited fabric before packing',
      'Applications': 'Plaited fabrics, packs, boxes, mattress',
      'Integration': 'Conveyor line up to 12 inspection machines',
      'System': 'Compression and vertical foil packaging',
      'Fabric Types': 'Knit and woven plaited fabrics'
    },
    applications: [
      'Plaited fabric packaging',
      'Box and pack processing',
      'Mattress packaging operations',
      'Integration with inspection machine lines',
      'Industrial packaging systems'
    ]
  },
  {
    id: 'comatex-inspack-compact',
    name: 'INSPACK COMPACT - Inspection with Packing Compact',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Inspection with Packing',
    image: 'https://www.comatex.net/immagini/grande_INSPACK-COMPACT-Inspection-with-packing-compact-for-knit-woven-and-non-woven_1280x640.jpg',
    price: 'Contact for pricing',
    featured: true,
    officialUrl: 'https://www.comatex.net/en/packing-rollplait/inspection-with-roll-packing/inspack-compact-inspection-with-packing-compact.php',
    description: 'Compact inspection machine with packing and rolling in front to the operator. Features automatic roll cut, wrapping with plastic, weight measurement and full packing in only 53cm! Possible to apply label by hand before and after packing, saving auto-labeller costs.',
    keyFeatures: [
      'Inspection machine with packing and rolling in front to operator',
      'Automatic roll cut, wrapping with plastic, weight and full packing',
      'Incredible compact design - only 53cm total width',
      'Possible to apply label by hand before and after packing',
      'Saves cost of auto-labeller',
      'Complete processing solution in minimal space',
      'ISN + IMB SA combination',
      'Space-saving integrated system'
    ],
    specifications: {
      'Type': 'Compact inspection with packing machine',
      'Space Requirement': 'Only 53cm total width',
      'System': 'ISN + IMB SA combination',
      'Functions': 'Inspection, packing, rolling, weight, wrapping',
      'Automation': 'Automatic roll cut and wrapping',
      'Labelling': 'Manual application before/after packing',
      'Position': 'Rolling in front to operator'
    },
    applications: [
      'Space-limited production facilities',
      'Compact inspection and packing operations',
      'Cost-effective processing without auto-labeller',
      'Integrated quality control and packaging',
      'Small-scale manufacturing operations'
    ]
  },
  {
    id: 'comatex-inspack-line',
    name: 'INSPACK LINE - Inspection Packing and Labelling Line',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Inspection with Packing',
    image: 'https://www.comatex.net/immagini/grande_INSPACK-LINE-Inspection-packing-and-labelling-line-for-knit-woven-and-non-woven_1280x640.jpg',
    price: 'Contact for pricing',
    officialUrl: 'https://www.comatex.net/en/packing-rollplait/inspection-with-roll-packing/inspack-line-inspection-packing-and-labelling-line.php',
    description: 'Complete inspection line with fabric winding and packaging backside to the operator. Features automatic roll cut, weight measurement, wrapping by plastic and labelling. Suggested for high production volumes.',
    keyFeatures: [
      'Inspection with fabric winding and packaging backside to operator',
      'Automatic roll cut functionality',
      'Weight measurement system',
      'Wrapping by plastic',
      'Integrated labelling system',
      'Suggested for high production volumes',
      'ISP + IMB SA combination',
      'Complete processing line solution'
    ],
    specifications: {
      'Type': 'Complete inspection packing and labelling line',
      'System': 'ISP + IMB SA combination',
      'Configuration': 'Fabric winding and packaging backside to operator',
      'Automation': 'Automatic roll cut, weight, wrapping, labelling',
      'Production Level': 'High production volumes',
      'Integration': 'Complete line solution',
      'Efficiency': 'Optimized for high-volume operations'
    },
    applications: [
      'High-volume textile production',
      'Complete inspection and packaging lines',
      'Automated quality control and packaging',
      'Industrial textile manufacturing',
      'Integrated production systems'
    ]
  },
  {
    id: 'comatex-inspack-line-zero',
    name: 'INSPACK LINE ZERO - Tensionless Inspection Packing and Labelling',
    manufacturer: 'comatex',
    category: 'comatex',
    subcategory: 'Inspection with Packing',
    image: 'https://www.comatex.net/immagini/grande_INSPACK-LINE-ZERO-Tensionless-inspection-packing-and-labellingfor-knit_1280x640.jpg',
    price: 'Contact for pricing',
    officialUrl: 'https://www.comatex.net/en/packing-rollplait/inspection-with-roll-packing/inspack-line-zero-tensionless-inspection-packing-and-labelling.php',
    description: 'Advanced tensionless + relax inspection machine with fabric winding and packaging backside to the operator. Features automatic roll cut, weight, wrapping by plastic and labelling. Suggested for high productions of elastomeric fabrics.',
    keyFeatures: [
      'Tensionless + relax inspection machine',
      'Fabric winding and packaging backside to operator',
      'Automatic roll cut functionality',
      'Weight measurement system',
      'Wrapping by plastic',
      'Integrated labelling system',
      'Suggested for high productions of elastomeric fabrics',
      'ISR + IMB SA combination',
      'Advanced tensionless and relax technology'
    ],
    specifications: {
      'Type': 'Tensionless inspection packing and labelling',
      'System': 'ISR + IMB SA combination',
      'Technology': 'Tensionless + relax system',
      'Target Materials': 'Elastomeric fabrics',
      'Configuration': 'Fabric winding and packaging backside to operator',
      'Automation': 'Automatic roll cut, weight, wrapping, labelling',
      'Production Level': 'High production volumes'
    },
    applications: [
      'High-production elastomeric fabric processing',
      'Tensionless fabric inspection and packaging',
      'Elastomeric material manufacturing',
      'Advanced textile processing with relax function',
      'Specialized elastomeric fabric handling'
    ]
  }
]

// Combine all products for easy access
export const allProducts = [
  ...ssmProducts,
  ...bruecknerProducts,
  ...laferProducts,
  ...zimmerProducts,
  ...additionalZimmerProducts,
  ...benningerProducts,
  ...comatexProducts
]

export const companyStats = {
  yearsExperience: 9, // Founded in 2016, so 9 years as of 2025
  machinesInstalled: 100, // "more than 100 machines" from About page
  happyClients: 100, // "all the leading satisfied clients" - keeping conservative number
  partnerManufacturers: 6, // SSM AG, Brückner GmbH, Benninger AG, Lafer SpA, Zimmer Austria, Comatex Italy
  technicalExperts: 15,
  countries: 1
}

export const services = [
  {
    id: 'consultation',
    name: 'Technical Consultation',
    description: 'Expert advice on machinery selection and production optimization',
    icon: '💡'
  },
  {
    id: 'installation',
    name: 'Installation & Commissioning',
    description: 'Professional installation and setup services',
    icon: '🔧'
  },
  {
    id: 'training',
    name: 'Operator Training',
    description: 'Comprehensive training programs for your team',
    icon: '👥'
  },
  {
    id: 'maintenance',
    name: 'Maintenance & Support',
    description: '24/7 technical support and preventive maintenance',
    icon: '🛠️'
  },
  {
    id: 'spare-parts',
    name: 'Spare Parts Supply',
    description: 'Genuine spare parts with fast delivery',
    icon: '📦'
  },
  {
    id: 'upgrades',
    name: 'Machine Upgrades',
    description: 'Technology upgrades and modernization services',
    icon: '🚀'
  }
]

// Utility functions for supplier information
export const getManufacturerByCode = (code) => {
  return manufacturers.find(m => m.id === code)
}

export const getSupplierUrl = (supplierCode, subcategory = null) => {
  const supplier = supplierProductUrls[supplierCode]
  if (!supplier) return null
  
  if (subcategory && supplier.categories && supplier.categories[subcategory]) {
    return supplier.categories[subcategory]
  }
  
  return supplier.main
}
