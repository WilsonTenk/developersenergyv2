// Centralized image paths — using real TDE brand images
const BASE = import.meta.env.BASE_URL || '/';

// Logo
const logoImg = `${BASE}images/tde/newwwLogo.png`;

// Hero slideshow images (4 dedicated hero images)
const heroImg1 = `${BASE}images/tde/hero-bg-1.jpg`;
const heroImg2 = `${BASE}images/tde/hero-bg-2.jpg`;
const heroImg3 = `${BASE}images/tde/hero-bg-3.jpg`;
const heroImg4 = `${BASE}images/tde/hero-bg-4.jpg`;

// General TDE site images
const tdeImageOne   = `${BASE}images/tde/tde-img-1.jpeg`;
const tdeImageTwo   = `${BASE}images/tde/tde-img-2.jpeg`;
const tdeImageThree = `${BASE}images/tde/tde-img-3.jpeg`;
const tdeImageFour  = `${BASE}images/tde/tde-img-4.jpeg`;
const tdeImageFive  = `${BASE}images/tde/tde-img-5.jpeg`;
const tdeImageSix   = `${BASE}images/tde/tde-img-6.jpeg`;
const tdeImageSeven = `${BASE}images/tde/tde-img-7.jpeg`;

export const SITE_IMAGES = {
  logo: logoImg,
  heroRefinery: heroImg1,
  engineersTeam: tdeImageOne,
  showcaseSolar: tdeImageFive,
  heroSlides: [
    {
      id: 'slide-1',
      category: 'Commodity Brokerage',
      categoryIndex: '01 / 04',
      title: 'Physical Petroleum Trade & Brokerage Facilitation',
      highlight: 'Connecting verified buyers & sellers across Africa.',
      subtitle: 'We facilitate high-impact physical commodity transactions, refined petroleum product allocations (Gasoil 10ppm, Gasoline 95, Jet A-1, LPG), and strategic advisory tailored to commercial market demands.',
      tag: 'PHYSICAL CARGO BROKERAGE',
      url: heroImg1,
    },
    {
      id: 'slide-2',
      category: 'Marine Logistics',
      categoryIndex: '02 / 04',
      title: 'Offshore STS & Marine Vessel Operations',
      highlight: 'Zero-demurrage precision & lightering coordination.',
      subtitle: 'Facilitating offshore ship-to-ship (STS) transfers, bunkering logistics, and deepwater cargo discharges aligned with international maritime safety conventions.',
      tag: 'OFFSHORE & MARINE STS',
      url: heroImg2,
    },
    {
      id: 'slide-3',
      category: 'Terminal Storage',
      categoryIndex: '03 / 04',
      title: 'Bulk Depot Storage Offtake & Terminal Logistics',
      highlight: 'Zero-loss custody transfers & ex-rack distribution.',
      subtitle: 'Coordinating bulk depot storage access, pipeline custody transfers, vessel laycan scheduling, and depot offtake agreements across primary West African energy corridors.',
      tag: 'DOWNSTREAM & TERMINAL',
      url: heroImg3,
    },
    {
      id: 'slide-4',
      category: 'Market Intelligence',
      categoryIndex: '04 / 04',
      title: 'West African Energy Intelligence & Market Advisory',
      highlight: 'Data-driven pricing & regional parity analytics.',
      subtitle: 'Delivering real-time pricing analysis, ex-refinery parity benchmarks, and supply/demand tracking across Tema, Takoradi, and regional African trade corridors.',
      tag: 'INTELLIGENCE & RESEARCH',
      url: heroImg4,
    },
  ],
  servicesGrid: [
    {
      id: 'brokerage',
      title: 'Commodity Brokerage & Trade',
      bullets: ['Gasoil 10ppm & Gasoline 95', 'Crude Oil & Aviation Jet A-1', 'Buyer & Seller Matchmaking'],
      image: tdeImageTwo,
      icon: 'Fuel',
    },
    {
      id: 'advisory',
      title: 'Energy Advisory & Consulting',
      bullets: ['Market Feasibility Studies', 'Investment Due Diligence', 'Commercial Strategy Dossiers'],
      image: tdeImageOne,
      icon: 'Building2',
    },
    {
      id: 'intelligence',
      title: 'Market Intelligence & Pricing',
      bullets: ['Platts & Argus Benchmark Tracking', 'Ex-Refinery Pricing Formula', 'West Africa Supply/Demand Balances'],
      image: tdeImageThree,
      icon: 'Compass',
    },
    {
      id: 'logistics',
      title: 'Supply Chain & Terminal Logistics',
      bullets: ['Tank Farm Offtake Advisory', 'STS Marine Transfer Coordination', 'Vessel Laycan & Demurrage Mitigation'],
      image: tdeImageFour,
      icon: 'Plane',
    },
  ],
  horizontalBanners: {
    refineryTerminal: tdeImageSix,
    aboutFootprint: tdeImageOne,
    aboutLeaderboard: tdeImageSeven,
    servicesOperations: tdeImageTwo,
    insightsDesk: tdeImageThree,
    insightsAnalytics: tdeImageFour,
    blogHero: tdeImageFive,
    blogEditorial: tdeImageSix,
    trainingInstitute: tdeImageSeven,
    trainingMasterclass: tdeImageOne,
  },
  cardThumbnails: {
    oilTrading: tdeImageTwo,
    riskAdvisory: tdeImageThree,
    terminalEngineering: tdeImageFour,
    marineLogistics: tdeImageFive,
    energyTransition: tdeImageSix,
    executiveTraining: tdeImageSeven,
  },
};
