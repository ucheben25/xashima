/* ==========================================================================
   XASHIMA CENTRAL SITE DATA & CONTENT MANAGEMENT SYSTEM
   Vanilla JavaScript Data Layer for Services, Projects, Leadership,
   Milestones, Insights, and Contact Information.
   Supports localStorage persistence, Admin Panel editing, and JSON export/import.
   ========================================================================== */

(function (global) {
  'use strict';

  const STORAGE_KEY = 'xashima_site_data';

  const DEFAULT_DATA = {
    // ---- Company & Contact Details ----
    contact: {
      companyName: 'XASHIMA Engineering & Renovation Services',
      tagline: 'Integrated Construction, Engineering & Security Solutions',
      headOffice: {
        title: 'Head Office',
        address: 'No. 119 Aba-Owerri Road, Abayi, Aba, Abia State, Nigeria.',
        area: 'Abayi, Aba Corridor',
        state: 'Abia State',
        country: 'Nigeria'
      },
      branchOffice: {
        title: 'Branch Office',
        address: 'KM 3, Aba/Enugu Expressway, Osisisoma Aba, Abia State, Nigeria.',
        area: 'Osisisoma Aba',
        state: 'Abia State',
        country: 'Nigeria'
      },
      primaryContactPerson: 'Engr. Andrew Chisom Wisdom',
      phone: '+234 810 743 2868',
      phoneDisplay: '+234 810 743 2868',
      email: 'wisdom@xashima.com',
      whatsappUrl: 'https://wa.link/ln8z3i',
      whatsappText: 'WhatsApp Us',
      workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM'
    },

    // ---- 11 Distinct Services ----
    services: [
      {
        id: 'roofing',
        num: '01',
        tag: 'ROOFING',
        name: 'Roofing Sheet Production, Sales & Installation',
        shortDesc: 'Custom long-span aluminum and step-tile roofing sheet manufacturing, sales, structural truss framing, and leak-free installation.',
        image: 'img/sheet-production.jpg',
        url: 'services/roofing.html',
        features: [
          'Long-span aluminum and step-tile sheet fabrication',
          'Coastal saltwater corrosion-resistant coatings',
          'Precision timber and steel roof truss framing',
          'Weather-resistant materials and expert installation'
        ],
        ctaText: 'View Service',
        head: 'Engr. Andrew Chisom Wisdom',
        headRole: 'Lead Security & Structural Engineer',
        displayOrder: 1,
        published: true
      },
      {
        id: 'quantity-surveying',
        num: '02',
        tag: 'COST CONTROL',
        name: 'Quantity Survey Services',
        shortDesc: 'Professional Bill of Quantities (BOQ) preparation, project cost forecasting, material takeoff, and financial risk management.',
        image: 'img/quantity-survey-3.jpg',
        url: 'services/quantity-surveying.html',
        features: [
          'Detailed Bill of Quantities (BOQ) preparation',
          'Real-time material cost forecasting and budgeting',
          'Subcontractor procurement and bill auditing',
          'Financial risk assessment and cost control'
        ],
        ctaText: 'View Service',
        head: 'Mr. Onyekachi',
        headRole: 'Head of Quantity Survey',
        displayOrder: 2,
        published: true
      },
      {
        id: 'building-maintenance',
        num: '03',
        tag: 'MAINTENANCE',
        name: 'Building Maintenance',
        shortDesc: 'Scheduled structural inspections, preventative MEP maintenance, roof leak repairs, and full commercial facility upkeep.',
        image: 'img/building-maintenance.jpg',
        url: 'services/building-maintenance.html',
        features: [
          'Preventative structural health inspections',
          'Emergency electrical and plumbing repairs',
          'Roofing and facade maintenance programs',
          'Commercial facility management contracts'
        ],
        ctaText: 'View Service',
        head: 'Mr. Nwaojimuo Innocent Eze',
        headRole: 'Head of Supervision',
        displayOrder: 3,
        published: true
      },
      {
        id: 'water-collector',
        num: '04',
        tag: 'PLUMBING & DRAINAGE',
        name: 'Water Collector Installation',
        shortDesc: 'High-efficiency rainwater collection networks, perimeter box gutters, commercial downpipes, storage cistern connections, and hydraulic plumbing.',
        image: 'img/water-collector.jpg',
        url: 'services/water-collector.html',
        features: [
          'Seamless aluminum and PVC rainwater collector gutters',
          'Heavy-flow roof runoff drainage and downpipe networks',
          'Industrial cistern and underground reservoir hookups',
          'Hydraulic pressure testing and backflow prevention'
        ],
        ctaText: 'View Service',
        head: 'Engr. Oluikpe Kingsley Odu',
        headRole: 'Head of Civil & Structural Renovations',
        displayOrder: 4,
        published: true
      },
      {
        id: 'security-doors',
        num: '05',
        tag: 'SECURITY',
        name: 'Security Door Installation',
        shortDesc: 'Heavy-duty armored steel doors, multi-point locking entryways, bulletproof options, and reinforced architectural frames.',
        image: 'img/security-door.jpg',
        url: 'services/security-doors.html',
        features: [
          'Armored steel security doors with reinforced core',
          'Multi-point automatic deadbolt lock systems',
          'Bulletproof and fire-rated door specifications',
          'Custom wood grain and metal finish styling'
        ],
        ctaText: 'View Service',
        head: 'Engr. Andrew Chisom Wisdom',
        headRole: 'Founder / Chief Security Engineer',
        displayOrder: 5,
        published: true
      },
      {
        id: 'cctv-installation',
        num: '06',
        tag: 'SURVEILLANCE',
        name: 'CCTV Camera Installation',
        shortDesc: 'High-definition IP surveillance camera installation, night-vision perimeter coverage, NVR storage, and mobile remote viewing.',
        image: 'img/cctv-camera 2.jpg',
        url: 'services/cctv-installation.html',
        features: [
          'HD IP cameras with infrared night vision',
          'Remote mobile and desktop video monitoring',
          'NVR network storage with backup capabilities',
          'Perimeter motion detection and alert triggers'
        ],
        ctaText: 'View Service',
        head: 'Engr. Andrew Chisom Wisdom',
        headRole: 'Founder / Chief Security Engineer',
        displayOrder: 6,
        published: true
      },
      {
        id: 'building-renovation',
        num: '07',
        tag: 'RENOVATION',
        name: 'Building Renovation',
        shortDesc: 'Structural overhauls, exterior facade updates, floor plan reconfigurations, and full building upgrades across commercial and residential sites.',
        image: 'img/building-renovation-1.jpg',
        url: 'services/building-renovation.html',
        features: [
          'Complete structural remodeling and retrofitting',
          'Exterior architectural cladding and facelifts',
          'Interior spatial optimization and partitioning',
          'Comprehensive MEP system modernization'
        ],
        ctaText: 'View Service',
        head: 'Engr. Oluikpe Kingsley Odu',
        headRole: 'Head of Civil & Structural Renovations',
        displayOrder: 7,
        published: true
      },
      {
        id: 'building-plastering',
        num: '08',
        tag: 'FINISHING',
        name: 'Building Plastering',
        shortDesc: 'Smooth cement rendering, weather-resistant exterior plastering, wall leveling, crack remediation, and paint-ready surface prep.',
        image: 'img/plastering.jpg',
        url: 'services/building-plastering.html',
        features: [
          'Precision cement rendering and screeding',
          'Weatherproof exterior plaster application',
          'Wall alignment and structural crack remediation',
          'Ultra-smooth paint-ready surface prep'
        ],
        ctaText: 'View Service',
        head: 'Engr. Oluikpe Kingsley Odu',
        headRole: 'Head of Civil & Structural Renovations',
        displayOrder: 8,
        published: true
      },
      {
        id: 'electrical-engineering',
        num: '09',
        tag: 'ELECTRICAL',
        name: 'Electrical Engineering',
        shortDesc: 'Commercial electrical wiring, main distribution board installation, surge protection, grounding systems, and architectural lighting setup.',
        image: 'img/electrical-1.jpg',
        url: 'services/electrical-engineering.html',
        features: [
          'Complete building electrical power wiring',
          'Main distribution board (MDB) assembly',
          'Surge protection and earth grounding grids',
          'Energy-efficient interior and security lighting'
        ],
        ctaText: 'View Service',
        head: 'Engr. Andrew Chisom Wisdom',
        headRole: 'Founder / Chief Security Engineer',
        displayOrder: 9,
        published: true
      },
      {
        id: 'pop-installation',
        num: '10',
        tag: 'INTERIOR',
        name: 'POP Installation & Design',
        shortDesc: 'Decorative Plaster of Paris (POP) false ceiling designs, recessed lighting troughs, moisture-resistant ceiling boards, and clean trim finish.',
        image: 'img/pop-installation.jpg',
        url: 'services/pop-installation.html',
        features: [
          'Custom decorative POP false ceiling designs',
          'Recessed LED lighting trough channels',
          'Moisture-resistant plasterboard installation',
          'Crisp architectural crown moldings'
        ],
        ctaText: 'View Service',
        head: 'Engr. Oluikpe Kingsley Odu',
        headRole: 'Head of Civil & Structural Renovations',
        displayOrder: 10,
        published: true
      },
      {
        id: 'cleaning-fumigation',
        num: '11',
        tag: 'CLEANING & SANITATION',
        name: 'Cleaning & Fumigation Services',
        shortDesc: 'Comprehensive residential, commercial, and facility deep cleaning, alongside professional thermal fogging, pest control, and environmental sanitation.',
        image: 'img/cleaning-fumigation.jpg',
        url: 'services/cleaning-fumigation.html',
        features: [
          'Post-construction deep cleaning and debris clearing',
          'Industrial and commercial facility sanitation programs',
          'Targeted thermal fogging and pest control treatments',
          'Eco-friendly disinfection and sanitization protocols'
        ],
        ctaText: 'View Service',
        head: 'Mr. Nwaojimuo Innocent Eze',
        headRole: 'Head of Cleaning & Fumigation Services',
        displayOrder: 11,
        published: true
      }
    ],

    // ---- Senior Leadership Team (Exactly 5 People) ----
    leadership: [
      {
        id: 'wisdom',
        num: '01',
        name: 'Engr. Andrew Chisom Wisdom',
        role: 'Founder / Chief Security Engineer',
        image: 'img/wisdom.jpg',
        tag: 'Leadership',
        desc: 'Leads corporate engineering strategy, technical standards, physical security systems, and overall operations for XASHIMA across Nigeria.',
        displayOrder: 1
      },
      {
        id: 'doreen',
        num: '02',
        name: 'Mrs. Andrew Doreen',
        role: 'Co-Founder / Chief Operating Officer',
        image: 'img/doreen.jpg',
        tag: 'Leadership',
        desc: 'Oversees corporate management, procurement logistics, operational workflows, and client relationship administration with executive precision.',
        displayOrder: 2
      },
      {
        id: 'innocent',
        num: '03',
        name: 'Mr. Nwaojimuo Innocent Eze',
        role: 'Head of Supervision',
        serviceResponsibility: 'Head of Cleaning & Fumigation Services',
        image: 'img/innocent.jpg',
        tag: 'Supervision & Cleaning',
        desc: 'Directs on-site quality assurance, construction supervision, technical compliance, and field operations, serving as Head of Cleaning & Fumigation Services.',
        displayOrder: 3
      },
      {
        id: 'kingsley',
        num: '04',
        name: 'Engr. Oluikpe Kingsley Odu',
        role: 'Head of Civil & Structural Renovations',
        image: 'img/kingsley.jpg',
        tag: 'Engineering',
        desc: 'Manages structural renovation projects, civil engineering works, plastering finishes, water collector installations, and building refurbishments.',
        displayOrder: 4
      },
      {
        id: 'onyekachi',
        num: '05',
        name: 'Mr. Onyekachi',
        role: 'Head of Quantity Survey',
        image: 'img/onyekachi.jpg',
        tag: 'Quantity Survey',
        desc: 'Leads pre-construction cost estimation, Bill of Quantities (BOQ) preparation, valuation audits, and financial project control across all sites.',
        displayOrder: 5
      }
    ],

    // ---- Company Journey & Milestones (Milestone 03 uses sheet-production.jpg) ----
    milestones: [
      {
        num: 'MILESTONE 01',
        tag: 'FOUNDATION',
        title: 'Our Foundation',
        desc: 'XASHIMA was established with a focus on providing practical construction, engineering and security solutions.',
        image: 'img/renovation.jpg',
        highlights: [
          'Focus on structural durability and site safety',
          'Establishment of quality material sourcing',
          'Civil renovation and building maintenance services',
          'Direct client-focused project supervision'
        ]
      },
      {
        num: 'MILESTONE 02',
        tag: 'EXPANSION',
        title: 'Growing Capabilities',
        desc: 'The company expanded its capabilities across construction, roofing, quantity surveying, renovation, electrical works and security installations.',
        image: 'img/security-door.jpg',
        highlights: [
          'Armored security door supply and installation',
          'IP CCTV camera and surveillance deployments',
          'Quantity surveying and BOQ financial estimation',
          'Commercial electrical and building finishing works'
        ]
      },
      {
        num: 'MILESTONE 03',
        tag: 'MANUFACTURING',
        title: 'Roofing Sheet Production & Infrastructure',
        desc: 'Equipped for direct production, sales, and installation of step-tile and long-span aluminum roofing sheets alongside structural framing.',
        image: 'img/sheet-production.jpg',
        highlights: [
          'Aluminum sheet fabrication and custom cutting',
          'Precision roof truss construction',
          'Water collector and drainage system integration',
          'Regional distribution and site delivery'
        ]
      },
      {
        num: 'MILESTONE 04',
        tag: 'TODAY',
        title: 'Today & Integrated Solutions',
        desc: 'XASHIMA brings these 11 core capabilities together to serve residential, commercial and institutional clients in Aba, Abia State and surrounding areas.',
        image: 'img/finished-building-enugu.jpg',
        highlights: [
          'Comprehensive 11-service delivery capability',
          'Residential, commercial, and institutional projects',
          'Professional Cleaning & Fumigation division',
          'Transparent project budgeting and milestone tracking'
        ]
      }
    ],

    // ---- Selected Projects ----
    projects: [
      {
        id: 'proj-1',
        title: 'Abayi Commercial Plaza & Office Complex',
        location: 'Abayi, Aba, Abia State',
        category: 'construction',
        categoryLabel: 'Construction',
        summary: 'Multi-story reinforced concrete structural framing, foundation piling, and architectural facade finishing for a regional commercial complex.',
        image: 'img/finished-building-aba.jpg',
        features: [
          'Reinforced concrete framework',
          'Integrated MEP electrical conduit network',
          'High-durability structural plastering'
        ],
        published: true
      },
      {
        id: 'proj-2',
        title: 'Osisioma Residential Estate Roofing Installation',
        location: 'Osisioma Aba, Abia State',
        category: 'roofing',
        categoryLabel: 'Roofing',
        summary: 'Custom long-span aluminum step-tile sheet production and precision timber roof truss framing for an expansive residential estate.',
        image: 'img/sheet-1.jpg',
        features: [
          'Long-span aluminum step-tile sheets',
          'Corrosion-resistant weather coating',
          'Leak-free truss framing alignment'
        ],
        published: true
      },
      {
        id: 'proj-3',
        title: 'Regional Commercial Facility Renovation',
        location: 'Enugu Commercial District, Enugu State',
        category: 'renovation',
        categoryLabel: 'Renovation',
        summary: 'Complete exterior wall plastering rendering, POP decorative false ceiling installation, and spatial structural reconfiguration.',
        image: 'img/finished-building-enugu.jpg',
        features: [
          'Exterior facade plastering & rendering',
          'Custom POP decorative ceilings',
          'Water collector drainage upgrades'
        ],
        published: true
      },
      {
        id: 'proj-4',
        title: 'Umuahia Industrial Park Electrical Overhaul',
        location: 'Umuahia Industrial Zone, Abia State',
        category: 'engineering',
        categoryLabel: 'Engineering',
        summary: 'Complete heavy-duty industrial wiring, main distribution board (MDB) assembly, and comprehensive surge grounding network setup.',
        image: 'img/electrical-1.jpg',
        features: [
          'High-capacity distribution panel assembly',
          'Heavy industrial electrical wiring',
          'Comprehensive surge grounding grid'
        ],
        published: true
      },
      {
        id: 'proj-5',
        title: 'Commercial Banking Security & IP CCTV Perimeter',
        location: 'Aba Commercial District, Abia State',
        category: 'security',
        categoryLabel: 'Security',
        summary: 'Installation of multi-lock armored steel vault doors and a high-definition IP CCTV digital surveillance network with centralized monitoring.',
        image: 'img/cctv-camera 4.jpg',
        features: [
          'High-definition IP cameras with night vision',
          'Armored steel security entryways',
          'Central NVR control room setup'
        ],
        published: true
      },
      {
        id: 'proj-6',
        title: 'Industrial Warehouse Rainwater Collector & Facility Care',
        location: 'Osisioma Industrial Zone, Aba',
        category: 'maintenance',
        categoryLabel: 'Maintenance',
        summary: 'Large-scale roof rainwater collector installation, industrial gutter drainage channels, and preventative facility structural upkeep.',
        image: 'img/maintenance-2.jpg',
        features: [
          'Perimeter rainwater collector gutters',
          'Scheduled structural health audits',
          'Facility maintenance and repair support'
        ],
        published: true
      }
    ],

    // ---- Insights & Articles ----
    insights: [
      {
        id: 'article-1',
        title: 'Key Factors in Selecting Long-Span Roofing Sheets in Coastal Regions',
        category: 'ROOFING',
        date: 'August 14, 2026',
        image: 'img/sheet-production.jpg',
        excerpt: 'Understanding gauge thickness, saltwater corrosion resistance, and truss framing alignment for durable structures in Aba and Southern Nigeria.',
        published: true
      },
      {
        id: 'article-2',
        title: 'How Quantity Surveying Prevents Construction Cost Overruns',
        category: 'QUANTITY SURVEYING',
        date: 'August 02, 2026',
        image: 'img/quantity-survey-3.jpg',
        excerpt: 'How detailed Bill of Quantities (BOQ) preparation protects project budgets against material price volatility and construction site waste.',
        published: true
      },
      {
        id: 'article-3',
        title: 'Integrating CCTV and Security Doors into Commercial Properties',
        category: 'SECURITY',
        date: 'July 28, 2026',
        image: 'img/security-door.jpg',
        excerpt: 'Why physical perimeter protection and digital surveillance must be planned together during building design and structural renovation.',
        published: true
      },
      {
        id: 'article-4',
        title: 'Structural Assessment Checklist for Building Renovation Projects',
        category: 'RENOVATION',
        date: 'July 19, 2026',
        image: 'img/building-renovation-1.jpg',
        excerpt: 'Essential structural checks to conduct before commencing commercial facade overhauls or interior floor plan reconfigurations.',
        published: true
      },
      {
        id: 'article-5',
        title: 'Modern Electrical Engineering Standards for Commercial Buildings',
        category: 'ENGINEERING',
        date: 'July 05, 2026',
        image: 'img/electrical-1.jpg',
        excerpt: 'Key considerations for 3-phase power distribution, surge protection, and backup generator synchronization in commercial installations.',
        published: true
      },
      {
        id: 'article-6',
        title: 'Preventative Facility Maintenance vs Reactive Repairs',
        category: 'MAINTENANCE',
        date: 'June 22, 2026',
        image: 'img/building-maintenance.jpg',
        excerpt: 'How planned structural, rainwater collection, and MEP maintenance reduces long-term operational expenditure for building owners.',
        published: true
      }
    ]
  };

  // ---- Storage Operations ----
  function getSiteData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Ensure all default top-level keys exist
        return Object.assign({}, DEFAULT_DATA, parsed);
      }
    } catch (e) {
      console.warn('Error reading XASHIMA site data from localStorage:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  function saveSiteData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Error saving XASHIMA site data:', e);
      return false;
    }
  }

  function resetSiteData() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    } catch (e) {
      console.error('Error resetting site data:', e);
      return DEFAULT_DATA;
    }
  }

  // Export to global scope
  global.XASHIMA_DATA = {
    getDefaults: () => JSON.parse(JSON.stringify(DEFAULT_DATA)),
    get: getSiteData,
    save: saveSiteData,
    reset: resetSiteData
  };

})(typeof window !== 'undefined' ? window : this);
