import { MarketRate, ServiceItem, StrategicTrack, InsightArticle, TrainingCourse, SupportVector } from '../types';

export const MARKET_RATES: MarketRate[] = [
  {
    id: 'brent',
    symbol: 'BRENT',
    label: 'Brent Crude Oil',
    price: 82.45,
    change: 1.12,
    changePct: 1.37,
    unit: 'USD/bbl',
    category: 'crude',
    lastUpdated: '10 mins ago'
  },
  {
    id: 'gasoil',
    symbol: 'GASOIL-10',
    label: 'Gasoil 10ppm (WAF)',
    price: 768.50,
    change: -4.20,
    changePct: -0.54,
    unit: 'USD/MT',
    category: 'refined',
    lastUpdated: '15 mins ago'
  },
  {
    id: 'gasoline',
    symbol: 'MOGAS-95',
    label: 'Unleaded Gasoline 95',
    price: 812.30,
    change: 6.80,
    changePct: 0.84,
    unit: 'USD/MT',
    category: 'refined',
    lastUpdated: '12 mins ago'
  },
  {
    id: 'usdghs',
    symbol: 'USD/GHS',
    label: 'USD to Ghana Cedi',
    price: 15.28,
    change: -0.04,
    changePct: -0.26,
    unit: 'GHS',
    category: 'forex',
    lastUpdated: '5 mins ago'
  },
  {
    id: 'wti',
    symbol: 'WTI',
    label: 'WTI Crude Oil',
    price: 78.60,
    change: 0.95,
    changePct: 1.22,
    unit: 'USD/bbl',
    category: 'crude',
    lastUpdated: '10 mins ago'
  },
  {
    id: 'freight',
    symbol: 'ARA-WAF',
    label: 'MR Tanker Freight (ARA-WAF)',
    price: 38.20,
    change: 0.40,
    changePct: 1.05,
    unit: 'USD/MT',
    category: 'freight',
    lastUpdated: '1 hour ago'
  }
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'energy-advisory',
    title: 'Energy Advisory & Consulting',
    iconName: 'Building2',
    subtitle: 'Strategic Guidance for Energy Opportunities in Africa',
    description: 'We provide strategic advisory support to companies, investors, and institutions seeking opportunities within the energy sector. We combine deep industry knowledge, research, and commercial expertise to guide critical investments, market entry, and operational growth.',
    highlights: [
      'Energy Market Assessments & Sector Feasibility',
      'Petroleum Sector Strategic Advisory & Policy Alignment',
      'Commercial Strategy & Business Expansion Advisory',
      'Investment Opportunity Analysis & Energy Project Evaluation',
      'Industry Research, Financial Modeling & Reporting'
    ],
    deliverableList: [
      'Comprehensive Market Feasibility & Entry Briefs',
      'Commercial Strategy Development Dossiers',
      'Risk Mitigation & Due Diligence Reports',
      'Investment Appraisal & CAPEX Financial Models'
    ],
    clientBenefits: [
      'Better market understanding & sector insights',
      'Improved commercial decision-making',
      'Identification of high-yield commercial opportunities',
      'Reduced business, regulatory & operational risks'
    ],
    targetAudience: [
      'Energy Companies & Refiners',
      'Institutional Investors & Private Equity',
      'Financial Institutions & Investment Banks',
      'Government Energy Agencies & Regulators'
    ],
    badge: 'Core Advisory'
  },
  {
    id: 'market-intelligence',
    title: 'Energy Market Intelligence',
    iconName: 'TrendingUp',
    subtitle: 'Data-Driven Insights for Strategic Decisions',
    description: 'The Developers Energy Limited provides timely, data-driven insights into energy markets to support sound business decisions. We track pricing, supply/demand balances, regulatory shifts, and regional market trends across West Africa and global energy hubs.',
    highlights: [
      'Energy Market Reports & Petroleum Price Analysis',
      'Supply and Demand Assessments across West Africa',
      'Regional Market Studies & Emerging Industry Trends',
      'Competitive Intelligence & Regulatory Monitoring'
    ],
    deliverableList: [
      'Customized Executive Intelligence Bulletins',
      'Petroleum Price Analysis & Ex-Refinery Parity Models',
      'Regional Supply & Demand Balance Assessments',
      'Policy, Regulatory Clearance & Tender Tracking'
    ],
    clientBenefits: [
      'Real-time pricing and market transparency',
      'Actionable intelligence for commercial desks',
      'Early detection of regional supply shifts',
      'Mitigated exposure to market volatility'
    ],
    targetAudience: [
      'Energy Companies & Bulk Distributors',
      'Institutional Investors & Fund Managers',
      'Financial Institutions & Trade Lenders',
      'Government Agencies & Trading Desks'
    ],
    badge: 'Real-Time Intelligence'
  },
  {
    id: 'trade-facilitation',
    title: 'Commodity Brokerage & Trade Facilitation',
    iconName: 'Truck',
    subtitle: 'Connecting Verified Buyers & Sellers of Energy Commodities',
    description: 'We facilitate connections between qualified buyers, sellers, and strategic partners within the energy value chain. We structure, coordinate, and support end-to-end commodity transactions with high commercial discipline and integrity.',
    highlights: [
      'Buyer & Seller Identification & Structured Introductions',
      'Transaction Coordination & Commercial Negotiations Support',
      'Deal Structuring Assistance & Due Diligence Coordination',
      'Documentation, Contract Review & Letter of Credit Support'
    ],
    deliverableList: [
      'Verified Counterparty Matching & Vetting Matrix',
      'Commercial Term Sheet & SPA Deal Structuring',
      'Trade Documentation & Banking Instrument Coordination',
      'Due Diligence & Transaction Clearance Protocols'
    ],
    focusCommodities: [
      'Crude Oil (Light Sweet / Heavy / WAF Blends)',
      'Diesel / Gasoil (AGO 10ppm / 50ppm)',
      'Gasoline (PMS 95 RON / Regular)',
      'Liquefied Petroleum Gas (LPG)',
      'Aviation Turbine Kerosene (ATK / Jet A-1)',
      'Other Approved Energy Commodities'
    ],
    clientBenefits: [
      'Direct access to vetted counterparties',
      'Structured transactions reducing counterparty risk',
      'Optimized pricing and commercial terms',
      'Seamless contract and banking instrument execution'
    ],
    targetAudience: [
      'Crude Oil & Refined Product Producers',
      'International Commodity Trading Houses',
      'Bulk Distribution Companies (BDCs)',
      'Industrial Off-Takers & Mining Consortia'
    ],
    badge: 'Physical Brokerage'
  },
  {
    id: 'supply-chain',
    title: 'Energy Supply Chain & Commercial Support',
    iconName: 'Factory',
    subtitle: 'Efficient Product Access & Distribution Support',
    description: 'We support organizations involved in energy distribution, logistics, and trading by securing reliable product supply, facilitating entry into new regional markets, and optimizing supply chain operations.',
    highlights: [
      'Supplier Sourcing & Distribution Partnership Development',
      'Market Entry Support & Commercial Representation',
      'Logistics Coordination & Tank Storage Offtake Advisory',
      'Commercial Contracting, Risk Management & Compliance Support'
    ],
    deliverableList: [
      'Supplier Verification & Audit Reports',
      'Depot Storage Allocation & Offtake Agreements',
      'Logistics & Vessel Laycan Coordination Plans',
      'Exclusive Commercial Representation Frameworks'
    ],
    clientBenefits: [
      'Reliable, uninterrupted product supply channels',
      'Reduced demurrage and transit logistics friction',
      'Direct representation in high-growth African markets',
      'Optimized distribution margins and inventory control'
    ],
    targetAudience: [
      'Oil Marketing Companies (OMCs)',
      'Depot & Storage Asset Operators',
      'Logistics & Marine Fleet Operators',
      'Large-Scale Industrial Energy Consumers'
    ]
  },
  {
    id: 'strategic-partnerships',
    title: 'Strategic Partnerships & Business Development',
    iconName: 'Globe2',
    subtitle: 'Building Value-Driven Partnerships Across Africa',
    description: 'We help organizations identify, build, and execute valuable partnerships between African businesses and global energy stakeholders, fostering shared value creation and sustainable growth across the continent.',
    highlights: [
      'Partnership Identification & Targeted Stakeholder Engagement',
      'Market Expansion Support across Ghana, West Africa & Continent',
      'Local Market Representation & Public-Private Alliances',
      'Business Opportunity Development & Joint Venture Structuring'
    ],
    deliverableList: [
      'Strategic Partner Alignment Dossiers',
      'Joint Venture Structuring Frameworks',
      'Local Content & Stakeholder Mapping Reports',
      'Commercial MOUs & Partnership Agreements'
    ],
    clientBenefits: [
      'Accelerated market penetration across West Africa',
      'Access to credible, vetted local execution partners',
      'Enhanced local content and regulatory alignment',
      'Long-term shared value and scalable commercial growth'
    ],
    targetAudience: [
      'Global Energy Firms Seeking African Market Entry',
      'Local Energy Businesses & Indigenous Operators',
      'Institutional Investors & Development Finance Institutions',
      'Public-Private Partnership (PPP) Desks'
    ]
  },
  {
    id: 'training',
    title: 'Energy Training & Professional Development',
    iconName: 'GraduationCap',
    subtitle: 'Knowledge Solutions for Energy Professionals & Teams',
    description: 'We provide specialized, knowledge-based solutions aimed at developing energy professionals and corporate teams across trading, economics, petroleum value chain, and safety standards.',
    highlights: [
      'Energy Trading Fundamentals & Incoterms 2020 Mechanics',
      'Petroleum Value Chain & International Energy Trade Education',
      'Energy Economics, Market Analysis & Price Risk Derivatives',
      'HSSE Excellence & Petroleum Handling Safety Standards'
    ],
    deliverableList: [
      'Tailored Corporate In-House Curriculums',
      'Interactive Trading Simulation & Case Study Workshops',
      'Certified Professional Competency Assessment Briefs',
      'Executive Reference Toolkits & Mentorship Frameworks'
    ],
    trainingAreas: [
      'Energy trading fundamentals & market mechanics',
      'Petroleum value chain education & downstream economics',
      'Commodity markets & price risk hedging',
      'International energy trade, Incoterms & trade finance',
      'Energy economics & quantitative market research',
      'HSSE excellence & depot safety operations'
    ],
    clientBenefits: [
      'Skilled workforce capable of complex trade execution',
      'Practical understanding of risk management & hedging',
      'Compliance with international safety & trading standards',
      'Immediate operational value for trading and operations teams'
    ],
    targetAudience: [
      'Trade Operations Personnel & Risk Officers',
      'HSSE Officers & Fuel Terminal Managers',
      'Energy Banking Credit Risk Analysts',
      'Government Energy Regulators & Policymakers'
    ],
    badge: 'Professional Development'
  },
  {
    id: 'research-publications',
    title: 'Research & Publications',
    iconName: 'Compass',
    subtitle: 'Specialized Market Intelligence Products & Reports',
    description: 'The Company develops high-value research products, energy market outlooks, and opportunity reports that empower executives, traders, and investors with competitive market analysis.',
    highlights: [
      'Energy Sector Reports & Market Outlook Publications',
      'Commodity Insights & Global Benchmark Commentary',
      'Industry Briefings on Policy, Supply & Demand Dynamics',
      'Business Opportunity Reports in African Energy Markets'
    ],
    deliverableList: [
      'Quarterly African Energy Market Outlooks',
      'Executive Briefings on Petroleum Policy Shifts',
      'Custom Commodity Research & Pricing Models',
      'Market Opportunity Identification Reports'
    ],
    clientBenefits: [
      'Rigorous, independent analytical perspectives',
      'Early visibility into regulatory and policy transitions',
      'Data-backed validation for capital allocation',
      'Strategic competitive edge in regional negotiations'
    ],
    targetAudience: [
      'C-Suite Executives & Board Members',
      'Strategy & Business Development Desks',
      'Investment Analysts & Fund Managers',
      'Energy Research & Policy Institutions'
    ]
  }
];

export const COMPANY_PROFILE_DATA = {
  name: 'THE DEVELOPERS ENERGY LIMITED',
  shortName: 'TDE',
  year: '2026',
  tagline: 'Developing Energy Opportunities. Creating Sustainable Value.',
  ourCommitments: [
    'Professional excellence',
    'Market-driven solutions',
    'Transparent engagement',
    'Strategic value creation',
    'Long-term partnerships'
  ],
  overview:
    'The Developers Energy Limited is an emerging energy and commodity services company focused on creating value across Africa’s evolving energy landscape. The company provides energy market intelligence, commercial advisory, brokerage support, trade facilitation, and strategic business solutions within the oil & gas, petroleum products, power, and emerging energy sectors.\n\nThrough industry knowledge, market analysis, and strategic partnerships, The Developers Energy Limited connects businesses, investors, suppliers, and energy stakeholders to unlock commercial opportunities and improve efficiency across the energy value chain.\n\nThe company is committed to supporting Africa’s energy growth by facilitating responsible trade, enhancing market access, and promoting sustainable energy development.',
  vision:
    'To become a leading African energy solutions company, recognized for excellence in energy intelligence, commodity trading support, and strategic partnerships that drive economic growth and energy security.',
  mission:
    'To provide reliable energy advisory, market intelligence, and commercial solutions that enable businesses and governments to make informed decisions, access opportunities, and participate effectively in Africa’s energy markets.',
  coreValues: [
    {
      title: 'Integrity',
      description: 'We conduct business with transparency, accountability, and professionalism.'
    },
    {
      title: 'Excellence',
      description: 'We pursue high standards in every service we provide.'
    },
    {
      title: 'Innovation',
      description: 'We leverage data, technology, and market insights to create better solutions.'
    },
    {
      title: 'Partnership',
      description: 'We believe sustainable growth is achieved through strong relationships and collaboration.'
    },
    {
      title: 'Sustainability',
      description: 'We support responsible energy development that considers economic and environmental impact.'
    }
  ],
  competitiveAdvantages: [
    {
      id: 'market-understanding',
      title: 'Market Understanding',
      description: 'Strong understanding of African energy markets and commercial realities.'
    },
    {
      id: 'strategic-networks',
      title: 'Strategic Networks',
      description: 'Building relationships with industry stakeholders, suppliers, buyers, and investors.'
    },
    {
      id: 'commercial-approach',
      title: 'Commercial Approach',
      description: 'Focused on identifying opportunities and creating mutually beneficial partnerships.'
    },
    {
      id: 'data-driven',
      title: 'Data-Driven Decisions',
      description: 'Using research and market intelligence to support better business decisions.'
    }
  ],
  targetMarkets: [
    {
      name: 'Ghana',
      scope: 'Local Focus',
      description: 'Supporting local energy businesses, distributors, investors, and industrial consumers.'
    },
    {
      name: 'West Africa',
      scope: 'Regional Integration',
      description: 'Connecting regional energy markets through partnerships and trade facilitation.'
    },
    {
      name: 'Africa',
      scope: 'Continental Horizon',
      description: 'Supporting Africa’s growing demand for reliable energy solutions and investment.'
    }
  ],
  engagementModels: [
    {
      title: 'Advisory Fees',
      purpose: 'For consulting and research assignments.'
    },
    {
      title: 'Brokerage Commissions',
      purpose: 'For successfully facilitated transactions.'
    },
    {
      title: 'Retainer Agreements',
      purpose: 'For ongoing advisory and intelligence services.'
    },
    {
      title: 'Partnership Agreements',
      purpose: 'For strategic commercial collaborations.'
    },
    {
      title: 'Project Development Support',
      purpose: 'Supporting long-term energy project execution and investment.'
    }
  ],
  growthStrategy: {
    shortTerm: [
      'Establishing energy advisory and brokerage operations',
      'Developing industry partnerships',
      'Building market intelligence capabilities'
    ],
    mediumTerm: [
      'Expanding regional operations across West Africa',
      'Developing commodity trading relationships',
      'Providing specialized energy consulting services'
    ],
    longTerm: [
      'Becoming a recognized African energy trading and advisory firm',
      'Participating in regional energy projects and investments'
    ]
  },
  managementExpertise: [
    {
      area: 'a) Energy & Petroleum Operations',
      desc: 'Understanding of petroleum downstream operations, fuel distribution, retail operations, supply chain management, and industry dynamics.'
    },
    {
      area: 'b) International Trade & Commodity Markets',
      desc: 'Knowledge of global trade practices, commodity flows, cross-border transactions, trade finance principles, and commercial negotiations.'
    },
    {
      area: 'c) Market Intelligence & Research',
      desc: 'Ability to analyze market trends, identify opportunities, assess risks, and provide strategic insights to support informed decision-making.'
    },
    {
      area: 'd) Business Development & Strategic Partnerships',
      desc: 'Experience in building relationships, developing commercial opportunities, and connecting stakeholders across different sectors and markets.'
    },
    {
      area: 'e) Corporate Governance & Professional Standards',
      desc: 'Commitment to ethical business practices, compliance, transparency, and responsible corporate management.'
    }
  ],
  partnershipApproach: {
    collaborators: [
      'Energy Companies (Producers, suppliers, distributors, and service providers)',
      'Investors & Financial Partners (Connecting investors with viable energy opportunities)',
      'Government & Institutions (Market insights supporting energy development)',
      'Local & International Businesses (Facilitating partnerships between African businesses and global stakeholders)'
    ],
    pillars: [
      'Transparency and trust',
      'Shared value creation',
      'Long-term relationships',
      'Professional execution',
      'Mutual commercial benefit'
    ]
  },
  contact: {
    corporateOffice: 'Accra, Ghana',
    telephone: '+233 246470010',
    email: 'info@developersenergy.com',
    inquiriesNote: 'For partnerships, investment opportunities, energy advisory services, and commercial collaborations, please contact: +233 246470010'
  }
};

export const STRATEGIC_TRACKS: StrategicTrack[] = [
  {
    id: 'bdc-operations',
    title: 'BDC Operations & Bulk Importation',
    iconName: 'Building2',
    stage: 'Phase 1 Rollout',
    horizon: '2026 - 2027',
    summary: 'Direct participation in the bulk procurement, importation, storage, and wholesale distribution of clean petroleum products across Ghana and West Africa.',
    details: 'The Developers Energy Limited is positioning itself to acquire full Bulk Distribution Company (BDC) license credentials in Ghana. This track unlocks direct access to international tender allocations, bulk tank farm leases, and direct wholesale supply agreements with major Oil Marketing Companies (OMCs) and mining consortia.',
    milestones: [
      'Regulatory NPA BDC Licensing Dossier Submission',
      'Strategic Tank Storage Offtake Agreements in Tema & Takoradi',
      'Initial 25,000 MT Gasoil & MOGAS Bulk Cargo Importation',
      'Establishment of Regional B2B Wholesale Distribution Network'
    ]
  },
  {
    id: 'upstream-collaborations',
    title: 'Upstream Participation & Technical Alliances',
    iconName: 'Compass',
    stage: 'Strategic Horizon',
    horizon: '2027 - 2029',
    summary: 'Strategic equity participation, farm-in joint ventures, and oilfield service partnerships across West African hydrocarbon basins.',
    details: 'Leveraging regional domain knowledge and technical networks, TDE aims to participate in upstream exploration and production (E&P) blocks as a non-operating local indigenous partner, offering local content synergy, asset management, and commercial off-take security.',
    milestones: [
      'Indigenization & Local Content Technical Registration',
      'Consortium Formation with International E&P Operators',
      'Participation in Marginal Field Farm-In Opportunities',
      'Offtake Financing Structure for Early Production Schemes'
    ]
  },
  {
    id: 'trade-desk',
    title: 'Structured International Energy Trade Desk',
    iconName: 'Globe2',
    stage: 'Active',
    horizon: 'Ongoing Expansion',
    summary: 'A high-performance trading desk executing physical and structured financial transactions across West Africa, Gulf of Guinea, and ARA hubs.',
    details: 'Expanding TDE\'s active desk capabilities to provide multi-commodity liquidity (Crude Oil, Automotive Gas Oil, Premium Motor Spirit, Liquefied Petroleum Gas, Aviation Turbine Kerosene). Integrating trade finance credit facilities, derivative price hedging, and vessel chartering.',
    milestones: [
      'Expansion of $50M+ Revolving Letters of Credit (LC) Lines',
      'Direct Deal Structuring with Gulf of Guinea Refineries',
      'Proprietary Algorithmic Market Sentiment & Pricing Tools',
      'Cross-Border Physical Supply into Landlocked Sahelien States'
    ]
  }
];

export const SUPPORT_VECTORS: SupportVector[] = [
  {
    id: 'networks',
    iconName: 'Users',
    title: 'Industry & Refiner Networks',
    description: 'Established access to key refiners, international trading houses, and regional downstream distributors.',
    valueAdd: 'Facilitates direct counterpart Introductions and swift commercial deal origination.'
  },
  {
    id: 'governance',
    iconName: 'ShieldCheck',
    title: 'Corporate Governance & Integrity',
    description: 'Adherence to rigorous anti-money laundering (AML), anti-bribery, and international compliance protocols.',
    valueAdd: 'Provides institutional investors and tier-1 trade banks total transactional transparency.'
  },
  {
    id: 'capital',
    iconName: 'Coins',
    title: 'Capital Raising & Trade Finance',
    description: 'Partnerships with trade finance institutions, private equity, and structured debt providers.',
    valueAdd: 'Unlocks tailored credit facilities, back-to-back LCs, and cargo off-take financing.'
  },
  {
    id: 'expertise',
    iconName: 'Wrench',
    title: 'Technical & Marine Engineering',
    description: 'Deep domain expertise in vessel laycan scheduling, cargo loss control, depot engineering, and quality assurance.',
    valueAdd: 'Minimizes transit demurrage, operational losses, and quality variance risks.'
  },
  {
    id: 'compliance',
    iconName: 'FileCheck',
    title: 'Regulatory & NPA Liaison',
    description: 'Granular alignment with Ghana National Petroleum Authority (NPA), EPA, and Maritime Authority standards.',
    valueAdd: 'Streamlines cargo discharge permits, tax exemptions, and regulatory clearances.'
  },
  {
    id: 'mentorship',
    iconName: 'Lightbulb',
    title: 'Strategic Advisory & Mentorship',
    description: 'Senior energy advisory council providing geopolitical risk guidance and market timing intelligence.',
    valueAdd: 'Protects commercial positions against sudden macro oil price volatility.'
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: 'ghana-energy-market-updates-2026',
    title: 'Ghana Energy Market Updates: Deregulation & Downstream Pricing Windows',
    category: 'Ghana Energy Market Updates',
    date: 'July 24, 2026',
    readTime: '6 min read',
    excerpt: 'Comprehensive updates on the National Petroleum Authority (NPA) bi-weekly pricing window, GHS/USD FX liquidity, and domestic fuel supply dynamics across Ghana.',
    content: [
      'Ghana\'s downstream petroleum market continues to demonstrate resilience amidst evolving international crude benchmarks and regional trade corridor realignment.',
      'Under the National Petroleum Authority (NPA) price deregulation framework, local Bulk Distribution Companies (BDCs) and Oil Marketing Companies (OMCs) have managed FX hedging and price window adjustments to maintain reliable ex-pump supply continuity.',
      'The Developers Energy Limited provides continuous tracking and commercial guidance to assist energy participants in navigating regulatory filings, local content compliance, and depot inventory management across the Tema and Takoradi energy zones.'
    ],
    keyTakeaways: [
      'NPA bi-weekly price window formula closely tracking international Platts and FX benchmarks.',
      'Inland pipeline distribution and automated depot loading streamlining product evacuation.',
      'Strong institutional support for indigenous energy trading firms and advisory desks.'
    ],
    author: 'Kennedy Awuku Addo & TDE Advisory Desk',
    chartData: [
      { label: 'Jan', value: 78.2 },
      { label: 'Feb', value: 80.5 },
      { label: 'Mar', value: 83.1 },
      { label: 'Apr', value: 81.4 },
      { label: 'May', value: 84.8 },
      { label: 'Jun', value: 82.5 }
    ],
    featured: true
  },
  {
    id: 'west-africa-energy-insights-corridors',
    title: 'West Africa Energy Insights: Cross-Border Petroleum & LNG Flow Logistics',
    category: 'West Africa Energy Insights',
    date: 'July 20, 2026',
    readTime: '5 min read',
    excerpt: 'Strategic analysis of West African energy corridors, regional refinery production, marine terminal throughput, and cross-border fuel supply into landlocked Sahelian nations.',
    content: [
      'West Africa represents one of the most dynamic regional energy trading landscapes in the developing world. With new refining capacity coming online across the Gulf of Guinea, product flows are shifting from European import reliance toward intra-regional supply networks.',
      'Cross-border transit logistics connecting coastal ports to landlocked destinations such as Burkina Faso, Mali, and Niger demand robust compliance with ECOWAS trade protocols, customs tracking, and zero-loss bonded transit management.',
      'Our trade desk provides specialized cargo off-taking and logistics coordination to ensure prompt laycan execution and minimal port demurrage.'
    ],
    keyTakeaways: [
      'Regional refining capacity driving shifts in Atlantic basin product trade routes.',
      'Transit fuel logistics across Sahelian corridors requiring synchronized customs escorts.',
      'Growing regional demand for cleaner Gasoil 10ppm and low-sulfur fuels.'
    ],
    author: 'TDE West Africa Market Desk',
    featured: false
  },
  {
    id: 'petroleum-market-analysis-waf',
    title: 'Petroleum Market Analysis: Refined Products Crack Spreads & Benchmarks',
    category: 'Petroleum Market Analysis',
    date: 'July 15, 2026',
    readTime: '6 min read',
    excerpt: 'Detailed examination of FOB ARA vs West Africa Cargo (WAF) differentials, Gasoil crack spreads, MOGAS premiums, and tanker freight impacts.',
    content: [
      'Analyzing international refinery margins and product crack spreads provides critical foresight for physical oil traders and downstream bulk buyers.',
      'During the current quarter, refined product arbitrage windows between Northwestern Europe, the Mediterranean, and West Africa have highlighted the value of structured Letters of Credit (LCs) and term offtake agreements.',
      'By integrating real-time price monitoring with tailored derivative hedging instruments, TDE enables market participants to protect profit margins against sudden crude oil price swings.'
    ],
    keyTakeaways: [
      'Gasoil 10ppm premiums maintaining stable trading bands relative to ICE Gasoil futures.',
      'MR tanker freight rates stabilizing following seasonal fleet reallocations.',
      'Collateral management agreements unlocking flexible trade financing structures.'
    ],
    author: 'Energy Economics & Trade Desk',
    featured: false
  },
  {
    id: 'commodity-price-commentary-crude-refined',
    title: 'Commodity & Price Commentary: Brent Volatility & Industrial Energy Demand',
    category: 'Commodity & Price Commentary',
    date: 'July 10, 2026',
    readTime: '4 min read',
    excerpt: 'Weekly executive commentary on global crude benchmarks, OPEC+ quotas, industrial energy consumption, and macroeconomic currency impacts.',
    content: [
      'Global macroeconomic indicators, monetary policy adjustments, and global supply decisions continue to set the baseline for energy commodities worldwide.',
      'For industrial energy consumers, mines, and manufacturing plants across Africa, energy input costs represent a substantial portion of operating expenditure. Implementing index-linked supply contracts provides price predictability.',
      'The Developers Energy Limited assists large-scale off-takers in establishing transparent, long-term procurement structures tied to verified international price benchmarks.'
    ],
    keyTakeaways: [
      'Industrial energy consumers increasingly adopting long-term index-linked supply terms.',
      'Strategic inventory reserves safeguarding manufacturing facilities against price spikes.',
      'Energy efficiency and hybrid renewable integration gaining momentum across industrial hubs.'
    ],
    author: 'Commodity Intelligence Unit',
    featured: false
  },
  {
    id: 'regulatory-updates-ghana-west-africa',
    title: 'Regulatory Updates: NPA Compliance Directives & ISO Quality Standards',
    category: 'Regulatory Updates',
    date: 'June 30, 2026',
    readTime: '5 min read',
    excerpt: 'Critical review of recent National Petroleum Authority regulatory notices, environmental EPA clearances, and mandatory ISO fuel quality testing.',
    content: [
      'Adherence to regulatory mandates is vital for operational continuity and legal standing in the energy industry. Recent directives issued by regulatory bodies highlight stringent enforcement of fuel marking, sulfur content thresholds, and environmental safety clearances.',
      'For international investors and companies entering African energy markets, navigating local regulatory processes and statutory licensing requirements requires deep local knowledge and transparent corporate governance.',
      'TDE provides comprehensive regulatory liaison and due diligence support to facilitate seamless, compliant market entry.'
    ],
    keyTakeaways: [
      'Mandatory digital fuel marking required across all licensed bulk storage installations.',
      'Environmental Protection Agency (EPA) compliance audits required for infrastructure upgrades.',
      'Clear statutory pathways established for international-local energy partnerships.'
    ],
    author: 'Compliance & Legal Advisory Desk',
    featured: false
  },
  {
    id: 'trade-investment-briefs-africa',
    title: 'Trade & Investment Briefs: Unlocking Energy Capital in African Markets',
    category: 'Trade & Investment Briefs',
    date: 'June 22, 2026',
    readTime: '5 min read',
    excerpt: 'Actionable investment briefs covering energy infrastructure projects, bulk terminal expansions, clean energy transitions, and syndication opportunities.',
    content: [
      'Africa’s energy sector presents compelling commercial opportunities for investors and strategic partners seeking sustainable returns in an expanding market.',
      'From modern automated tank farm terminals and marine bunkering infrastructure to solar-hybrid industrial microgrids, capital deployed with rigorous commercial structuring delivers significant shared value.',
      'We work directly with private equity, developmental financial institutions, and trading consortiums to originate, evaluate, and structure high-impact energy transactions.'
    ],
    keyTakeaways: [
      'Terminal and tank farm infrastructure investments offering resilient long-term yield profiles.',
      'Commercial joint ventures bridging international capital with local operational capabilities.',
      'Growing investor interest in transition fuels and high-efficiency energy distribution.'
    ],
    author: 'Investment Advisory & Strategic Projects',
    featured: false
  }
];

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'petroleum-trading-masterclass',
    title: 'Petroleum Trading Operations & Incoterms 2020',
    category: 'Trading Operations',
    duration: '3 Days (Executive Intensive)',
    targetAudience: 'Trade Operations Managers, Freight Coordinators, Energy Bankers & BDC Analysts',
    overview: 'A practical, hands-on masterclass covering the lifecycle of physical oil trades—from deal term sheet structuring, Incoterms (FOB, CIF, DAP), bill of lading issuance, vessel laycan management, to demurrage calculation and settlement.',
    modules: [
      'Module 1: Global Petroleum Markets & Benchmark Pricing Mechanics (Platts, Argus, ICE)',
      'Module 2: Incoterms 2020 in Physical Oil Deals: Risk Transfer & Insurance',
      'Module 3: Laycan Scheduling, NOR, Tanker Chartering & Demurrage Calculations',
      'Module 4: Letter of Credit (LC) Structuring & Trade Documentation Verification'
    ],
    upcomingDates: ['August 18 - 20, 2026', 'October 14 - 16, 2026'],
    fee: '$1,200 / Participant',
    badge: 'Popular Masterclass'
  },
  {
    id: 'hsse-petroleum-handling',
    title: 'HSSE Excellence in Bulk Fuel Storage & Depots',
    category: 'Safety & Engineering',
    duration: '2 Days (Certification Course)',
    targetAudience: 'Depot Managers, HSSE Officers, Maintenance Engineers & Fuel Terminal Supervisors',
    overview: 'Comprehensive training focused on health, safety, security, and environmental protection across petroleum handling facilities. Aligned with OSHA, API, and NPA standards.',
    modules: [
      'Module 1: Hazard Identification & Emergency Response Protocols in Fuel Depots',
      'Module 2: Static Electricity Control, Vapor Recovery & Tank Fire Prevention',
      'Module 3: Environmental Protection Agency (EPA) Spill Prevention & Containment',
      'Module 4: Auditing & Incident Investigation Reporting'
    ],
    upcomingDates: ['September 8 - 9, 2026', 'November 10 - 11, 2026'],
    fee: '$850 / Participant'
  },
  {
    id: 'energy-risk-management',
    title: 'Petroleum Price Risk Management & Derivatives',
    category: 'Finance & Risk',
    duration: '2 Days',
    targetAudience: 'Chief Financial Officers, Risk Officers, Treasury Managers & Commodity Traders',
    overview: 'Learn how to construct hedging strategies using Swaps, Futures, and Options to lock in profit margins and protect oil portfolios against severe market downturns.',
    modules: [
      'Module 1: Understanding Price Volatility & Crack Spread Risk Exposure',
      'Module 2: Futures, Swaps & Options Mechanics for Downstream Fuel Importers',
      'Module 3: Building Real-World Hedging Models & Margin Call Risk Controls',
      'Module 4: Foreign Exchange (FX) Risk Hedging in West African Markets'
    ],
    upcomingDates: ['September 22 - 23, 2026', 'December 2 - 3, 2026'],
    fee: '$1,100 / Participant'
  },
  {
    id: 'fuel-station-management',
    title: 'Retail Fuel Station Engineering & Operational Management',
    category: 'Asset Management',
    duration: '2 Days',
    targetAudience: 'Oil Marketing Company (OMC) Managers, Retail Station Owners & Operations Directors',
    overview: 'A deep dive into optimizing retail station operations—from underground tank integrity testing, fuel calibration accuracy, pump maintenance, to non-fuel revenue expansion.',
    modules: [
      'Module 1: Retail Station Site Selection, Environmental Permits & Engineering Design',
      'Module 2: Fuel Loss Prevention, ATG Systems & Calibration Standards',
      'Module 3: Non-Fuel Revenue Strategies (Convenience, Quick Service Retail, Auto Care)',
      'Module 4: Customer Experience, Station Staff Leadership & Security'
    ],
    upcomingDates: ['August 26 - 27, 2026', 'October 28 - 29, 2026'],
    fee: '$750 / Participant'
  }
];
