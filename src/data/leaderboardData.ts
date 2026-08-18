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
    name: 'Jeffery Kwesi Boateng',
    role: 'Managing Director & Head of Energy Advisory & Risk',
    division: 'Advisory, Compliance & Market Intel',
    specialty: ['FX Risk Hedging', 'Downstream Regulatory Compliance', 'Macro Energy Intelligence'],
    bioSummary: 'Senior advisor on regional petroleum economics and downstream risk. Leads macroeconomic risk profiling, regulatory governance, and compliance frameworks for energy transactions.',
    fullBio: 'Jeffery Kwesi Boateng is a recognized authority on West African downstream petroleum economics, price risk hedging, and regulatory governance. Having advised national energy commissions, central bank committees, and commercial banking boards, he directs The Developers Energy market intelligence desk, ensuring every transaction adheres strictly to National Petroleum Authority (NPA) standards and international sanctions screening.',
    education: 'Ph.D. Petroleum Economics (Imperial College London), M.Sc. Finance (LSE)',
    keyProjects: [
      'Developing ex-refinery parity price risk models for regional BDCs',
      'Leading commercial due diligence & regulatory compliance frameworks',
      'Architecting FX margin protection matrices for energy importers'
    ],
    imageUrl: '',
    linkedinUrl: 'https://linkedin.com/in/jeffery-kwesi-boateng-risk',
    twitterUrl: 'https://x.com/jkboateng_energy',
    email: 'j.boateng@developersenergy.com',
    phone: '+233 246470010',
    location: 'Accra, Ghana'
  },
  {
    id: 'exec-3',
    rank: 3,
    name: 'Emmanuel Osei-Tutu',
    role: 'Director of Engineering & Terminal Infrastructure',
    division: 'Downstream Engineering Assets',
    specialty: ['Tank Farm Feasibility', 'Pipeline Automation', 'EPA Environmental Filings'],
    bioSummary: 'Veteran petroleum engineer specializing in bulk storage terminal design, automated SCADA metering systems, and pipeline integrity management.',
    fullBio: 'Emmanuel Osei-Tutu has spearheaded engineering and maintenance operations for major bulk liquid storage terminals across Ghana, Nigeria, and Côte d\'Ivoire. With deep hands-on expertise in tank farm calibration, SCADA pipeline automation, and environmental safety audits, Emmanuel ensures all terminal assets operate with zero product loss and zero HSE incidents.',
    education: 'B.Sc. Chemical Engineering (KNUST), Chartered Petroleum Engineer (EI UK)',
    keyProjects: [
      'Engineering oversight and calibration for bonded fuel terminals',
      'Automated radar gauging & meter calibration frameworks for bulk depots',
      'Environmental and EPA regulatory clearance for energy corridor operations'
    ],
    imageUrl: '',
    linkedinUrl: 'https://linkedin.com/in/emmanuel-oseitutu-engineering',
    email: 'e.oseitutu@developersenergy.com',
    phone: '+233 246470010',
    location: 'Tema / Takoradi, Ghana'
  },
  {
    id: 'exec-4',
    rank: 4,
    name: 'Captain Fiifi Addo',
    role: 'Lead Director of Marine & Port Logistics',
    division: 'Marine Operations & Cargo Off-taking',
    specialty: ['STS Off-loading Logistics', 'Deepwater Port Operations', 'Vessel Laycan Coordination'],
    bioSummary: 'Master Mariner directing berth allocations, ship-to-ship (STS) transfers, and zero-demurrage vessel operations at Tema and Takoradi ports.',
    fullBio: 'Captain Fiifi Addo is a licensed Master Mariner with extensive marine command and port operations leadership. Having commanded MR2 and Aframax oil tankers globally, he leads TDE marine off-taking division, coordinating ship-to-ship (STS) transfers, draft surveys, vessel chartering, and berth priority clearance to minimize laycan risks and prevent demurrage charges.',
    education: 'Master Mariner Class 1 Unlimited (UK MCA), M.Sc. Maritime Affairs (WMU Sweden)',
    keyProjects: [
      'Zero-demurrage deepwater vessel discharge management',
      'Coordinating complex Ship-to-Ship (STS) transfers offshore West Africa',
      'Standardized marine safety protocols for petroleum jetties'
    ],
    imageUrl: '',
    linkedinUrl: 'https://linkedin.com/in/captain-fiifi-addo-marine',
    twitterUrl: 'https://x.com/capt_fiifi_addo',
    email: 'f.addo@developersenergy.com',
    phone: '+233 246470010',
    location: 'Takoradi Port & Offshore Ghana'
  }
];
