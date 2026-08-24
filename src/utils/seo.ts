import { PageTab } from '../types';

interface TabSeoConfig {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogImage?: string;
  schemaType?: string;
}

export const TAB_SEO_DATA: Record<PageTab, TabSeoConfig> = {
  home: {
    title: 'The Developers Energy | Africa Energy & Commodity Services | Ghana',
    description: 'Premier West African physical petroleum trading, terminal storage logistics, NPA regulatory compliance, and trade finance advisory for investors, BDCs, and commodity traders in Ghana.',
    keywords: 'The Developers Energy, Ghana petroleum trading, oil and gas Ghana, physical commodities, Gasoil 10ppm, Mogas 95, BDC trade finance, Letters of Credit, Tema terminal storage, Takoradi port off-take, NPA compliance, West Africa energy advisory, Kennedy Awuku Addo, Jeffrey Kwesi Boateng',
    canonicalPath: '',
    ogImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop'
  },
  about: {
    title: 'Corporate Profile & Executive Directorate | The Developers Energy Limited',
    description: 'Discover our corporate leadership, strategic governance tracks, executive director profiles, and West African physical energy commodity trade expertise in Accra, Ghana.',
    keywords: 'Kennedy Awuku Addo, Jeffrey Kwesi Boateng, energy executives Ghana, West Africa commodity traders, BDC license, energy infrastructure advisory, Ghana oil directors',
    canonicalPath: '#about',
    ogImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1600&auto=format&fit=crop'
  },
  services: {
    title: 'Physical Energy Trading & Advisory Solutions | The Developers Energy',
    description: 'Comprehensive physical petroleum trading (Gasoil 10ppm, Mogas 95, Jet A-1), terminal tank farm storage, STS lightering, trade finance (LC lines), and downstream regulatory advisory.',
    keywords: 'crude oil allocation, Gasoil 10ppm Ghana, MOGAS trade, trade finance Letters of Credit, terminal storage feasibility, downstream petroleum advisory, STS lightering Tema, Takoradi bunkering',
    canonicalPath: '#services',
    ogImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop'
  },
  insights: {
    title: 'Market Intelligence & Petroleum Reports | The Developers Energy',
    description: 'High-precision Ghana petroleum market analysis, Platts and Argus pricing parity reports, NPA fuel pricing window trends, and West African supply/demand analytics with downloadable PDF briefs.',
    keywords: 'Ghana petroleum market analysis, NPA fuel pricing window, West Africa energy insights, commodity price commentary, regulatory updates, petroleum trade briefs, Platts FOB Med parity Ghana',
    canonicalPath: '#insights',
    ogImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop'
  },
  blog: {
    title: 'Executive Blog & Energy Thought Leadership | The Developers Energy',
    description: 'In-depth thought leadership, editorial commentary, and technical briefings on West African hydrocarbon markets, terminal logistics, trade finance, and energy transition dynamics.',
    keywords: 'energy blog Ghana, petroleum trade commentary, West Africa refining, energy transition Africa, oil market analysis, downstream trade perspectives',
    canonicalPath: '#blog',
    ogImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop'
  },
  training: {
    title: 'Executive Training & Masterclasses | The Developers Energy Institute',
    description: 'Specialized corporate masterclasses and professional certification in petroleum trading operations, Incoterms 2020, depot HSSE compliance, and price risk derivatives in Accra, Ghana.',
    keywords: 'energy trading masterclass, Incoterms 2020 petroleum, depot HSSE certification, price risk hedging training, Accra energy executive masterclass, BDC staff training Ghana',
    canonicalPath: '#training',
    ogImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop'
  },
  contact: {
    title: 'Contact Trade Desk & Energy Inquiries | The Developers Energy Limited',
    description: 'Reach our executive trading and advisory desk in Accra for petroleum transaction quotes, investment opportunities, physical cargo allocations, or strategic energy partnerships.',
    keywords: 'contact The Developers Energy, Accra energy trade desk, petroleum quote Ghana, commodity brokerage inquiry, energy partnership, Tema fuel off-take',
    canonicalPath: '#contact',
    ogImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop'
  }
};

/**
 * Updates document meta tags, canonical URL, OpenGraph, Twitter Cards,
 * and dynamically injects BreadcrumbList JSON-LD schema per tab.
 */
export function updatePageSeo(tab: PageTab) {
  const config = TAB_SEO_DATA[tab] || TAB_SEO_DATA.home;
  const baseUrl = 'https://thedevelopersenergy.com';
  const fullUrl = `${baseUrl}/${config.canonicalPath}`;

  // 1. Update Document Title
  document.title = config.title;

  // 2. Helper to update/create meta tag
  const setMetaTag = (attrName: 'name' | 'property', attrVal: string, content: string) => {
    let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Standard Meta Tags
  setMetaTag('name', 'description', config.description);
  setMetaTag('name', 'keywords', config.keywords);
  setMetaTag('name', 'title', config.title);

  // Open Graph
  setMetaTag('property', 'og:title', config.title);
  setMetaTag('property', 'og:description', config.description);
  setMetaTag('property', 'og:url', fullUrl);
  if (config.ogImage) {
    setMetaTag('property', 'og:image', config.ogImage);
  }

  // Twitter
  setMetaTag('name', 'twitter:title', config.title);
  setMetaTag('name', 'twitter:description', config.description);
  if (config.ogImage) {
    setMetaTag('name', 'twitter:image', config.ogImage);
  }

  // Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', fullUrl);

  // 3. Dynamic BreadcrumbList JSON-LD Schema
  const tabNameCapitalized = tab.charAt(0).toUpperCase() + tab.slice(1);
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`
      },
      ...(tab !== 'home'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: tabNameCapitalized,
              item: fullUrl
            }
          ]
        : [])
    ]
  };

  // Inject or update breadcrumb JSON-LD
  let breadcrumbScript = document.getElementById('dynamic-breadcrumb-schema');
  if (!breadcrumbScript) {
    breadcrumbScript = document.createElement('script');
    breadcrumbScript.id = 'dynamic-breadcrumb-schema';
    breadcrumbScript.setAttribute('type', 'application/ld+json');
    document.head.appendChild(breadcrumbScript);
  }
  breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
}
