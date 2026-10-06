import { BlogPost } from '../types';

const BASE = import.meta.env.BASE_URL || '/';

const tdeImg1 = `${BASE}images/tde/tde-img-1.jpeg`;
const tdeImg2 = `${BASE}images/tde/tde-img-2.jpeg`;
const tdeImg3 = `${BASE}images/tde/tde-img-3.jpeg`;
const tdeImg4 = `${BASE}images/tde/tde-img-4.jpeg`;
const tdeImg5 = `${BASE}images/tde/tde-img-5.jpeg`;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-6',
    title: 'Crude Oil Volatility: Noise or a Signal of Bigger Changes?',
    subtitle: 'Are recent price swings short-term market noise, or do they signal deeper structural changes within the global petroleum landscape?',
    category: 'Market Intelligence',
    author: {
      name: 'The Developers Energy Advisory Desk',
      role: 'Market Intelligence & Strategic Analysis',
    },
    date: 'October 6, 2026',
    readTime: '12 min read',
    excerpt: 'Volatility has always been an inherent feature of the petroleum industry. Yet the recent swings in crude oil prices have become increasingly frequent and difficult to predict, prompting a critical question: are these fluctuations merely short-term market noise, or are they signaling deeper structural changes within the global petroleum landscape?',
    content: [
      'Volatility has always been an inherent feature of the petroleum industry. Price spikes and sharp corrections are nothing new to market participants. Yet the recent swings in crude oil prices have become increasingly frequent and difficult to predict, prompting a critical question for producers, traders, refiners, and consumers alike: are these fluctuations merely short-term market noise, or are they signaling deeper structural changes within the global petroleum landscape?',
      'Understanding the answer is essential because in the petroleum business, volatility is not simply a number on a trading screen — it influences investment decisions, refining margins, fuel prices, shipping costs, and ultimately the economic fortunes of nations.',

      '## The Traditional Drivers of Oil Price Volatility',
      'Historically, crude oil prices have been influenced by a relatively straightforward balance between supply and demand. When supply outpaces demand, prices tend to weaken. Conversely, when demand exceeds the available supply, prices rise. However, the petroleum market has never been governed solely by physical fundamentals. Several factors have traditionally amplified price movements: production decisions by OPEC+ producers; geopolitical tensions in major oil-producing regions; supply disruptions caused by wars, sanctions, and natural disasters; global economic growth and industrial activity; seasonal demand patterns; and refinery maintenance cycles and inventory levels.',
      'These factors have always existed, and market participants have learned to navigate them. But today\'s volatility appears to be different — more persistent, more sensitive, and increasingly influenced by structural changes.',

      '## A Market with Little Room for Error',
      'One of the defining characteristics of today\'s petroleum market is the shrinking buffer between supply and demand. Years of underinvestment in upstream exploration and production have limited the world\'s spare production capacity. As major oil companies and financial institutions redirected capital toward cleaner energy initiatives, investments in conventional oil projects slowed considerably.',
      'The consequence is a market with reduced flexibility. When unexpected disruptions occur — whether from geopolitical conflicts, sanctions, or weather-related events — the system has fewer spare barrels available to compensate. Even relatively minor supply interruptions can trigger disproportionate price reactions. In effect, the petroleum market has become tighter, making volatility a structural feature rather than a temporary phenomenon.',

      '## Geopolitics Has Returned to Centre Stage',
      'Few commodities are as deeply intertwined with geopolitics as crude oil. Events in the Middle East, sanctions on major producers, conflicts affecting shipping routes, and strategic decisions by oil-producing nations now have immediate implications for global prices. The Russia-Ukraine conflict provides one of the clearest illustrations. Before Russia\'s full-scale invasion of Ukraine on 24 February 2022, Brent crude was around $99 per barrel. By 7 March, it had reached approximately $129 per barrel — an increase of roughly 30% in less than two weeks.',
      'The significance is not simply that oil became more expensive. It demonstrated how quickly a geopolitical event involving a major producer could transmit through crude prices, shipping, refining costs, currencies, and ultimately, consumer prices thousands of kilometres away. Approximately one-fifth of global petroleum liquids consumption passes through the Strait of Hormuz. In 2024, flows through the Strait averaged about 20 million barrels per day, equivalent to roughly 20% of global petroleum liquid consumption.',
      'Similarly, disruptions in the Red Sea and Suez Canal have forced tankers to take longer routes, increasing freight costs and affecting refined product prices around the world. In 2024, oil flows through the Bab el-Mandeb Strait fell sharply compared with the previous year, while more crude and petroleum products were rerouted around the Cape of Good Hope. These developments suggest that geopolitical risk premiums may become a permanent component of crude oil pricing.',

      '## OPEC+ Has Become More Influential Than Ever',
      'Another indication that today\'s volatility reflects deeper changes lies in the growing influence of OPEC+. Unlike previous decades, when non-OPEC production growth often diluted the cartel\'s impact, the current market has witnessed coordinated production management on an unprecedented scale. By adjusting output levels, OPEC+ has sought to maintain market stability and defend prices. Production cuts implemented by major exporters have repeatedly tightened supplies and supported crude benchmarks.',
      'This highlights a significant shift: prices are increasingly being managed not only by demand fundamentals but also by strategic supply decisions. For traders and consumers, this means volatility can arise from policy decisions as much as from physical shortages.',

      '## Refining Capacity Has Become a Critical Factor',
      'Crude oil prices tell only part of the story. In recent years, refining capacity constraints have become equally important in determining fuel prices. The closure of several refineries during the pandemic, combined with rising environmental compliance costs and delays in new capacity additions, has altered the balance of the downstream sector. Consequently, even when crude prices remain relatively stable, shortages of gasoline, diesel, and jet fuel can drive refined product prices sharply higher.',
      'Refining margins have become increasingly volatile, creating both risks and opportunities for participants in the petroleum value chain. This reinforces an important lesson: petroleum markets are no longer driven solely by crude supply, but by the interaction between upstream production, refining capacity, logistics, and end-user demand.',

      '## The Rise of Asia and Shifting Demand Patterns',
      'Another structural change reshaping the petroleum market is the shift in global demand centres. While demand growth in Europe and North America has plateaued, Asia, the Middle East, and Africa continue to drive consumption growth. China and India remain major contributors to incremental oil demand, while emerging economies across Africa are expected to account for a growing share of future petroleum consumption. This shift is changing trade flows, investment patterns, and refining strategies. As demand increasingly moves eastward and southward, the petroleum industry is becoming more multipolar, creating new opportunities for traders and infrastructure developers.',

      '## Inventory Levels Matter More Than Ever',
      'Commercial and strategic petroleum inventories have always acted as shock absorbers during supply disruptions. However, declining inventories in key consuming regions have reduced the market\'s ability to absorb unexpected events. Lower stock levels mean tighter balances and faster price reactions. As a result, weekly inventory reports from major economies now have an outsized influence on market sentiment, often triggering immediate movements in crude benchmarks. In today\'s market, inventories are no longer merely statistics — they are leading indicators of price direction.',

      '## Implications for Africa and Ghana',
      'For petroleum-importing countries such as Ghana, crude oil volatility presents significant challenges. Ghana\'s petroleum product imports in 2024 totalled approximately 4.87 million tonnes: 1.98 million tonnes of gasoline, 2.40 million tonnes of gasoil, 232,000 tonnes of LPG, and 219,000 tonnes of aviation turbine kerosene — averaging roughly 406,000 tonnes of petroleum products imported each month. This level of dependence means that global price movements are quickly transmitted into Ghana\'s domestic economy through import costs, foreign exchange demand, transportation, electricity generation, industrial production, and ultimately consumer prices.',
      'Ghana\'s experience during the 2022 global energy shock illustrates the difficult trade-offs governments face. In March 2022, the Government announced a reduction of petroleum-sector margins by GH¢0.15 per litre for three months to help mitigate rising pump prices. Subsequently in 2026, the Government absorbed GH¢2.00/litre on diesel and GH¢0.36/litre on petrol in April, adjusted support to GH¢1.07/litre for diesel from May 16, removed the broader intervention in June, and on August 4, 2026, President Mahama directed another GH¢2/litre reduction in the regulatory margin on diesel as a temporary measure in response to renewed price pressures.',
      'At the same time, petroleum taxes and levies represent an important source of public revenue. Ghana collected GH¢6.70 billion in Energy Sector Levies in 2022, while petroleum tax collections amounted to GH¢2.19 billion. This creates a difficult policy balance: how does government protect consumers from international price shocks without transferring the entire burden to public finances?',

      '## Can Regional Trade Become Part of the Solution?',
      'Africa\'s response to global petroleum volatility should not be limited to managing price increases after they occur. The continent must also build mechanisms that reduce its exposure to external supply disruptions in the first place. Greater integration of African refining capacity, storage infrastructure, transportation networks, and petroleum-product markets could allow countries to source more efficiently from regional suppliers when global supply chains are disrupted. The African Continental Free Trade Area (AfCFTA) provides an important framework for this broader integration.',
      'For example, where a refinery in one African market has surplus gasoline or diesel while another market is experiencing a temporary supply deficit, efficient regional trading arrangements can allow those barrels to move within the continent — rather than forcing every country to compete independently for cargoes on the global market. This does not eliminate global price volatility. Instead, it improves resilience — allowing African markets to respond more intelligently to disruptions in the global North, major maritime chokepoints, or geopolitical conflicts.',

      '## Noise or Signal? The Verdict',
      'The answer is increasingly clear. Daily price fluctuations will always generate noise, but the forces driving today\'s petroleum markets point to something much bigger. Underinvestment in upstream production, geopolitical fragmentation, changing trade flows, refining constraints, inventory dynamics, and the growing influence of OPEC+ are reshaping the industry in profound ways. These are not temporary disturbances. They are signals of a petroleum market entering a new phase — one characterized by tighter balances, greater uncertainty, and heightened sensitivity to both economic and geopolitical events.',
      'For businesses, investors, and policymakers, success will depend less on predicting every price movement and more on understanding the structural forces beneath them. Because in the petroleum industry, volatility is not merely something to endure — it is something to understand.',

      '## From Volatility to Opportunity',
      'The question for African businesses is therefore no longer simply, "Where will crude oil prices go next?" The more important question is: "Are we prepared for what the next disruption could mean for our supply chains, margins, and investments?" This is where market intelligence becomes a strategic asset. Companies that understand price movements, supply availability, freight dynamics, refining margins, geopolitical risks, and regional trade opportunities can move from reacting to volatility to managing it.',
      'At The Developers Energy Limited, we seek to bridge this gap by providing energy market intelligence, commercial analysis, project and transaction support, and strategic insight across Ghana and the wider African energy market. For energy companies, investors, traders, governments and institutions seeking to navigate an increasingly complex petroleum landscape, the opportunity is not simply to watch the market — it is to understand it early, position strategically, and act decisively. The next phase of Africa\'s energy market will reward those who are prepared.',
    ],
    tags: ['Crude Oil', 'Price Volatility', 'OPEC+', 'Geopolitics', 'Ghana', 'Africa', 'Market Intelligence', 'Refining', 'Energy Policy'],
    featured: true,
    imageUrl: tdeImg1,
  },

  {
    id: 'blog-1',
    title: 'The Future of Refined Petroleum Trading in West Africa: 2026 Horizons',
    subtitle: 'Analyzing supply shifts, regional refinery off-taking, and marine logistics in the Gulf of Guinea.',
    category: 'Commodities & Trade',
    author: {
      name: 'Kofi Mensah-Annan',
      role: 'Chief Commodity Strategist',
    },
    date: 'July 28, 2026',
    readTime: '6 min read',
    excerpt: 'As regional refining capacity expands and trade policies under AfCFTA take effect, physical oil traders in West Africa are pivoting toward structured financing and direct terminal off-taking.',
    content: [
      'The West African petroleum trade ecosystem is undergoing a structural evolution. For decades, the Gulf of Guinea relied heavily on European refined imports. Today, with major regional refining assets stabilizing output, market dynamics are rebalancing toward intra-African trade corridors.',
      'A key driver is the demand for low-sulfur fuels. Gasoil 10ppm standards mandated across Ghana and Nigeria are shifting procurement strategies toward suppliers with guaranteed quality specifications and verified STS (ship-to-ship) handling capabilities.',
      'To capitalize on these shifts, BDCs and independent trading desks must adopt dynamic FX hedging models and secure bankable Letters of Credit (LCs) to withstand global crude volatility while maintaining seamless discharge schedules at Tema and Takoradi ports.'
    ],
    tags: ['Oil Trading', 'West Africa', 'Refined Products', 'Gasoil 10ppm', 'Trade Finance'],
    featured: true,
    imageUrl: tdeImg1,
  },
  {
    id: 'blog-2',
    title: 'Navigating Trade Credit and Foreign Exchange Volatility in Petroleum Importation',
    subtitle: 'Practical risk management mechanisms for Bulk Distribution Companies (BDCs) in Ghana.',
    category: 'Policy & Geopolitics',
    author: {
      name: 'Dr. Evelyn Baidoo',
      role: 'Head of Energy Risk & Compliance',
    },
    date: 'July 19, 2026',
    readTime: '5 min read',
    excerpt: 'Currency mismatches between USD-denominated cargo invoices and local currency retail collections pose significant liquidity risks. Here is how structured deal mechanics provide stability.',
    content: [
      'For petroleum importers in Ghana, foreign exchange volatility remains one of the largest operational risks. Products purchased in USD on CIF/FOB terms are sold domestically in Ghana Cedi, exposing traders to exchange rate slippage between cargo discharge and retail settlement.',
      'Through structured trade finance—including back-to-back LCs, currency swaps, and central bank fx allocation windows—traders can lock in forward exchange rates and safeguard margins.',
      'The Developers Energy Limited works closely with commercial banks and NPA licensed BDCs to structure trade instruments that protect counterparty capital throughout the 30-to-90 day credit cycle.'
    ],
    tags: ['FX Risk', 'Trade Credit', 'BDC Advisory', 'Banking', 'Ghana Cedi'],
    featured: false,
    imageUrl: tdeImg2,
  },
  {
    id: 'blog-3',
    title: 'Digitalizing Terminal Operations: Smart Tank Farms and Automated Metering',
    subtitle: 'How IoT sensors and automated custody transfer reduce ullage loss and prevent demurrage.',
    category: 'Tech & Innovation',
    author: {
      name: 'Emmanuel Osei-Tutu',
      role: 'Director of Engineering & Terminal Assets',
    },
    date: 'July 10, 2026',
    readTime: '7 min read',
    excerpt: 'Automation in oil storage terminals is no longer luxury—it is essential for zero-loss custody transfers, real-time inventory tracking, and environmental safety compliance.',
    content: [
      'Traditional manual dipping and mechanical meters in tank farms are rapidly being replaced by radar tank gauging systems and Coriolis mass flowmeters. These technologies offer real-time visibility into stock levels, density, and temperature.',
      'By integrating automated custody transfer meters with cloud-based inventory management, terminal operators eliminate human recording errors and accelerate cargo clearance times by up to 40%.',
      'Furthermore, predictive maintenance algorithms on pipeline pumps and manifold valves prevent unexpected operational downtime during critical vessel discharge windows.'
    ],
    tags: ['Tank Farms', 'Automation', 'Terminal Logistics', 'IoT', 'Custody Transfer'],
    featured: false,
    imageUrl: tdeImg3,
  },
  {
    id: 'blog-4',
    title: 'Integrating Biofuel Blending into Conventional Fuel Supply Chains',
    subtitle: 'Preparing West African downstream infrastructure for low-carbon energy transition standards.',
    category: 'Energy Transition',
    author: {
      name: 'Sarah Lawson',
      role: 'Clean Energy & Sustainability Lead',
    },
    date: 'June 29, 2026',
    readTime: '4 min read',
    excerpt: 'As global decarbonization targets accelerate, regional fuel distributors are evaluating bio-ethanol and bio-diesel blending options within existing distribution networks.',
    content: [
      'The transition toward cleaner fuels in West Africa is gaining momentum. While heavy industrial fleets and power generators will rely on conventional hydrocarbons for years to come, gradual bio-blending presents a pragmatic pathway to lower carbon intensity.',
      'Adapting current depot manifolds and distribution trucks for B5 bio-diesel or E10 ethanol requires targeted engineering audits to prevent elastomer degradation and phase separation.',
      'The Developers Energy is advising regional distribution networks on technical retrofits and regulatory compliance frameworks for bio-fuel blending.'
    ],
    tags: ['Biofuels', 'Energy Transition', 'Decarbonization', 'Downstream', 'Sustainability'],
    featured: false,
    imageUrl: tdeImg4,
  },
  {
    id: 'blog-5',
    title: 'Optimizing Vessel Discharge and Port Logistics at Tema & Takoradi',
    subtitle: 'Best practices for ship-to-shore pipeline operations and demurrage mitigation.',
    category: 'Downstream Logistics',
    author: {
      name: 'Captain Fiifi Addo',
      role: 'Senior Marine & Port Operations Logistics Manager',
    },
    date: 'June 14, 2026',
    readTime: '8 min read',
    excerpt: 'Demurrage charges can quickly erode trading margins. Rigorous pre-berthing checklists, discharge manifold alignment, and NPA customs coordination are key.',
    content: [
      'Port congestion and delayed berth allocation can cost vessel charterers tens of thousands of dollars per day in demurrage. Effective logistics management begins long before the tanker reaches port waters.',
      'By coordinating advance vessel documentation, preliminary cargo quality sampling, and pipeline line-fill verification prior to vessel arrival, discharge turnaround times are reduced significantly.',
      'Our dedicated marine operations team works on-site at Tema and Takoradi to ensure uninterrupted pumping rates and rapid documentation sign-off.'
    ],
    tags: ['Port Logistics', 'Demurrage', 'Tema Port', 'Tanker Shipping', 'Marine Operations'],
    featured: false,
    imageUrl: tdeImg5,
  }
];
