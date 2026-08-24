export interface LeaderboardExecutive {
  id: string;
  rank: number;
  name: string;
  role: string;
  division: string;
  specialty: string[];
  bioSummary: string;
  fullBio: string;
  education: string;
  keyProjects: string[];
  imageUrl: string;
  linkedinUrl: string;
  twitterUrl?: string;
  email: string;
  phone: string;
  location: string;
}

export interface MilestoneLeaderboardItem {
  id: string;
  dealTitle: string;
  category: 'Commodity Allocation' | 'Trade Finance' | 'Infrastructure' | 'Human Capital';
  location: string;
  year: string;
  clientSegment: string;
  summary: string;
  leadExecutive: string;
}

export const EXECUTIVE_LEADERBOARD: LeaderboardExecutive[] = [
  {
    id: 'exec-1',
    rank: 1,
    name: 'Kennedy Awuku Addo',
    role: 'Energy Trade Consultant & International Commodity Trader',
    division: 'Executive Directorate & International Trade Desk',
    specialty: ['Crude & Refined Allocations', 'Structured Trade Finance', 'Global Counterparty Relations'],
    bioSummary: 'Energy Trade Consultant and International Commodity Trader with extensive track record across West African and international physical petroleum commodity markets and refinery off-take structures.',
    fullBio: 'Kennedy Awuku Addo is an experienced Energy Trade Consultant and International Commodity Trader with extensive expertise across West African and international energy markets. He structures and facilitates physical trade transactions across crude oil, Gasoil (10ppm), MOGAS, and fuel oil, collaborating with global trading houses, bulk distribution companies, and state energy institutions.',
    education: 'BSc from UHAS | MBA (International Trade) from ANHALT University of Applied Sciences, Germany | Ongoing MSc in Energy Economics at GIMPA',
    keyProjects: [
      'Structuring syndicated LC trade credit mechanisms with West African trade banks',
      'Coordinating physical Gasoil 10ppm term allocations and port laycan schedules',
      'Establishing direct refinery off-take routes across Gulf of Guinea'
    ],
    imageUrl: '',
    linkedinUrl: 'https://linkedin.com/in/kennedy-awuku-addo-energy',
    twitterUrl: 'https://x.com/k_awuku_addo',
    email: 'k.awukuaddo@developersenergy.com',
    phone: '+233 246470010',
    location: 'Accra, Ghana & London, UK'
  },
  {
    id: 'exec-2',
    rank: 2,
    name: 'Jeffrey Kwesi Boateng',
    role: 'Supply Chain, Project & Operations Management Lead',
    division: 'Petroleum Supply Chain, Operations & HSSEQ',
    specialty: [
      'Petroleum Supply Chain & Logistics',
      'HSSEQ Compliance & Risk Management',
      'NPA Regulatory & Stakeholder Engagement',
      'Standard Operating Procedures (SOP) Development',
      'Stock Planning & Pricing Optimization'
    ],
    bioSummary: 'Results-driven energy professional with 5+ years of progressive experience across Ghana\'s petroleum supply chain, fuel logistics and distribution, retail network operations, and HSSEQ compliance.',
    fullBio: 'Jeffrey Kwesi Boateng is a Chemical Engineering graduate with an MSc in Energy and Sustainable Development, combining strong technical grounding in process and safety systems with proven commercial and operational leadership across Ghana’s petroleum supply chain. He has extensive hands-on expertise managing replenishment and stock planning across multi-site retail networks, developing Standard Operating Procedures (SOPs) for safe fuel transportation and depot-to-site custody transfers, and managing regulatory compliance with the National Petroleum Authority (NPA).',
    education: 'MSc, Energy and Sustainable Development (KNUST, Kumasi) | BSc, Chemical Engineering (KNUST, Kumasi) | Project Management Professional (Cambridge Centre of Excellence) | Trainee Professional Engineer, Ghana Institution of Engineering (GhIE)',
    keyProjects: [
      'Managed replenishment & stock planning across 30 fuel retail sites maintaining zero stock-outs',
      'Developed comprehensive SOPs for petroleum product transportation from depots to retail sites',
      'NPA regulatory policy alignment, HSSEQ compliance auditing, and team training',
      'Coordinated pricing window strategies and fuel additivation quality compliance (octane/cetane)'
    ],
    imageUrl: '',
    linkedinUrl: 'https://linkedin.com/in/jeffrey-kwesi-boateng',
    email: 'jeffb.official@gmail.com',
    phone: '+233 26 701 1948 / +233 50 143 0329',
    location: 'Accra, Ghana'
  }
];
