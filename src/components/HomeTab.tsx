import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { SITE_IMAGES } from '../data/imageData';
import { AnimatedCounter } from './common/AnimatedCounter';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Target,
  Lightbulb,
  Star,
  Quote,
  Sun,
  Fuel,
  Building2,
  Plane,
  Compass,
  CheckCircle2,
  Send,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Scale,
  Award
} from 'lucide-react';

interface HomeTabProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenQuoteModal: (service?: string) => void;
  onOpenCalculator: () => void;
  onSelectArticle?: (article: any) => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  setActiveTab,
  onOpenQuoteModal,
  onOpenCalculator,
}) => {
  // Hero background slider with 4 images & auto-transition
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const heroSlides = SITE_IMAGES.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextHeroSlide = () => {
    setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setHeroSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHeroSlide = heroSlides[heroSlideIndex];

  // Showcase project slider state
  const [projectIndex, setProjectIndex] = useState(0);
  const showcaseProjects = [
    {
      id: 'proj-1',
      tag: 'Petroleum Trade',
      title: 'Bulk Refined Petroleum Cargo Facilitation',
      description: 'Structuring and facilitating multi-thousand metric ton allocations of Gasoil 10ppm and Gasoline 95 for leading Bulk Distribution Companies (BDCs) and regional off-takers.',
      image: SITE_IMAGES.heroSlides[1].url,
    },
    {
      id: 'proj-2',
      tag: 'Terminal Logistics',
      title: 'Tema & Takoradi Depot Storage Allocation',
      description: 'Coordinating bulk tank farm storage capacity, zero-loss pipeline custody transfers, and ex-rack depot lifting agreements across Ghana’s primary energy corridors.',
      image: SITE_IMAGES.horizontalBanners.refineryTerminal,
    },
    {
      id: 'proj-3',
      tag: 'Marine Off-Taking',
      title: 'Offshore STS Crude & Marine Lightering Operations',
      description: 'Facilitating deepwater vessel-to-vessel transfer operations and offshore bunkering with strict zero-demurrage precision and international safety compliance.',
      image: SITE_IMAGES.heroRefinery,
    },
  ];

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % showcaseProjects.length);
  };

  const prevProject = () => {
    setProjectIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  };

  // Quick Quote Form state inside horizontal quote bar
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickService, setQuickService] = useState('Commodity Brokerage & Trade');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickName.trim()) {
      setQuickSubmitted(true);
      setTimeout(() => {
        setQuickSubmitted(false);
        setQuickName('');
        setQuickPhone('');
      }, 4000);
    }
  };

  // Testimonials state (strictly exactly 2 visible at a time with smooth animation)
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const allTestimonials = [
    {
      id: 'test-1',
      name: 'Kwame Asante',
      role: 'Managing Director, Horizon Energy BDC',
      quote: 'The Developers Energy delivered outstanding execution for our physical petroleum allocations. Their market insights, transaction discipline, and counterparty vetting make them an exceptional partner in West African trade.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 'test-2',
      name: 'Sarah Mensah',
      role: 'Head of Supply & Trading, Volta Energy Desk',
      quote: 'Dependable, bankable, and prompt in facilitating bulk cargo allocations and depot offtake. Their understanding of ex-refinery pricing parity and downstream logistics is second to none.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 'test-3',
      name: 'David Osei-Bonsu',
      role: 'Chief Commercial Officer, West Coast Terminal Group',
      quote: 'Exceptional trade structuring and regulatory clearance support. The Developers Energy has streamlined our supply corridor across West Africa with spotless commercial reliability.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    },
    {
      id: 'test-4',
      name: 'Elena Vance-Morgan',
      role: 'Director of African Trading, Atlantic Bunkering Ltd',
      quote: 'Their deepwater STS lightering coordination and zero-demurrage precision saved our bunkering fleet critical laycan hours in the Gulf of Guinea. Highly recommended for offshore execution.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    },
  ];

  // Auto-advance client testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 2) % allTestimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [allTestimonials.length]);

  const nextTestimonials = () => {
    setTestimonialIndex((prev) => (prev + 2) % allTestimonials.length);
  };

  const prevTestimonials = () => {
    setTestimonialIndex((prev) => (prev - 2 + allTestimonials.length) % allTestimonials.length);
  };

  // Get exactly 2 active testimonials
  const visibleTestimonials = [
    allTestimonials[testimonialIndex % allTestimonials.length],
    allTestimonials[(testimonialIndex + 1) % allTestimonials.length],
  ];

  // CTA Newsletter state
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaSubscribed, setCtaSubscribed] = useState(false);

  const handleCtaSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaEmail.includes('@')) {
      setCtaSubscribed(true);
      setTimeout(() => {
        setCtaSubscribed(false);
        setCtaEmail('');
      }, 4000);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 bg-neutral-50 text-neutral-900 font-sans">
      
      {/* 1. ANIMATED HERO SECTION (4-IMAGE BACKGROUND SLIDESHOW) */}
      <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden">
        {/* Animated Background Image Carousel with Ken-Burns and Crossfade */}
        <div className="absolute inset-0 z-0 bg-neutral-950">
          <AnimatePresence mode="sync">
            <motion.div
              key={currentHeroSlide.id}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={currentHeroSlide.url}
                alt={currentHeroSlide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center brightness-[0.72]"
              />
            </motion.div>
          </AnimatePresence>

          {/* Deep Cinematic Atmosphere Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-neutral-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30 opacity-90" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            
            {/* Left Hero Main Text */}
            <div className="lg:col-span-8 space-y-6 text-white max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroSlide.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                    {currentHeroSlide.title}
                  </h1>

                  <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                    {currentHeroSlide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenQuoteModal('General Trade & Infrastructure')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Get Your Free Quote</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all"
                >
                  <span>Explore Services</span>
                </button>
              </div>

              {/* 4-Slide Indicators & Navigation Controls */}
              <div className="pt-6 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevHeroSlide}
                    aria-label="Previous hero slide"
                    className="w-10 h-10 rounded-full border border-white/30 bg-neutral-900/70 backdrop-blur-md text-white hover:bg-amber-500 hover:border-amber-500 transition-all flex items-center justify-center cursor-pointer shadow-md"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextHeroSlide}
                    aria-label="Next hero slide"
                    className="w-10 h-10 rounded-full border border-white/30 bg-neutral-900/70 backdrop-blur-md text-white hover:bg-amber-500 hover:border-amber-500 transition-all flex items-center justify-center cursor-pointer shadow-md"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* 4 Interactive Progress Bars */}
                <div className="flex items-center gap-2">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setHeroSlideIndex(idx)}
                      aria-label={`Jump to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        heroSlideIndex === idx
                          ? 'w-8 bg-amber-400'
                          : 'w-2 bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

                <span className="text-xs font-mono font-bold text-neutral-400 pl-1">
                  0{heroSlideIndex + 1} / 0{heroSlides.length}
                </span>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentHeroSlide.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl p-7 shadow-2xl border border-neutral-100 text-neutral-900 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                      {currentHeroSlide.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {currentHeroSlide.categoryIndex}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-neutral-900 leading-snug">
                    {currentHeroSlide.highlight}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Tailored physical supply chains, terminal storage allocations, and precision engineering for high-volume commercial partners.
                  </p>

                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenQuoteModal(currentHeroSlide.category)}
                      className="text-xs font-bold text-neutral-900 hover:text-amber-600 transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Consult Desk
                    </button>
                    <button
                      onClick={() => onOpenQuoteModal(currentHeroSlide.category)}
                      aria-label="Launch quote modal"
                      className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center hover:bg-amber-600 transition-all shadow-sm cursor-pointer"
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS BAR - Strategic Capabilities & Footprint */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={5} suffix=" Core" duration={1.8} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Focus Commodities</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={3} duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Target Market Horizons</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-amber-500 tracking-tight">
              <AnimatedCounter value={100} suffix="%" duration={1.8} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">KYC Due Diligence Standard</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              24/7
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Market Intelligence Tracking</span>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES / ABOUT US SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          
          {/* Left Image with Value Highlight */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 aspect-[4/3] relative group">
              <img
                src={SITE_IMAGES.engineersTeam}
                alt="The Developers Energy Engineering Team"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-neutral-950/10" />
            </div>

            {/* Floating Value Pillar */}
            <div className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-4 bg-neutral-950 text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-neutral-800 flex items-center gap-3">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">
                <AnimatedCounter value={5} duration={1.5} />
              </div>
              <div className="text-xs font-bold leading-tight uppercase tracking-wider text-neutral-200">
                Core Value<br />Pillars
              </div>
            </div>
          </div>

          {/* Right Core Values Details */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-900 leading-tight">
              Trusted African & Global Partner For Petroleum Trade & Energy Advisory
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              With deep domain expertise in physical petroleum trading, downstream logistics, and commercial advisory, we consistently deliver bankable value and trusted execution for energy stakeholders across Africa and international corridors.
            </p>

            <button
              onClick={() => onOpenQuoteModal('Strategic Partnership')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-amber-500 hover:bg-amber-600 shadow-md transition-all active:scale-95"
            >
              <span>Get Your Free Quote</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>

            {/* Mission & Vision Twin Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Target className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-base font-bold text-neutral-900">Our Mission</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Empowering energy stakeholders with disciplined commodity brokerage, actionable market intelligence, and strategic trade execution for sustainable, long-term growth.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-base font-bold text-neutral-900">Our Vision</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  To be the premier energy advisory, commodity trade facilitation, and market intelligence gateway across West Africa and global energy corridors.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TAILORED SOLUTIONS FOR INDUSTRY GROWTH (SERVICES GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-900">
              Tailored Solutions For Energy & Trade Growth
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-xl">
              Specialized solutions tailored to meet the unique commercial needs of physical traders, bulk distributors (BDCs), oil marketing companies (OMCs), and energy investors.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('services')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-amber-500 hover:bg-amber-600 shadow-sm transition-all shrink-0 self-start md:self-auto cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* 4 Cards Dark Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_IMAGES.servicesGrid.map((srv) => (
            <div
              key={srv.id}
              className="bg-neutral-950 text-white rounded-3xl overflow-hidden border border-neutral-800 shadow-xl flex flex-col justify-between group hover:border-amber-500 transition-all duration-300"
            >
              <div>
                {/* Card Thumbnail Image */}
                <div className="h-44 sm:h-48 overflow-hidden relative">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3.5 left-3.5 w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg">
                    {srv.icon === 'Sun' && <Sun className="w-4 h-4 text-white" />}
                    {srv.icon === 'Fuel' && <Fuel className="w-4 h-4 text-white" />}
                    {srv.icon === 'Building2' && <Building2 className="w-4 h-4 text-white" />}
                    {srv.icon === 'Compass' && <Compass className="w-4 h-4 text-white" />}
                    {srv.icon === 'Plane' && <Plane className="w-4 h-4 text-white" />}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {srv.title}
                  </h3>

                  <ul className="space-y-2">
                    {srv.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuoteModal(srv.title)}
                  className="w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-amber-500 hover:text-white text-neutral-300 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 border border-neutral-800 cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WORK PROCESS SECTION */}
      <section className="bg-white py-16 sm:py-20 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-900">
              How We Deliver Industrial Excellence
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              A structured, bankable approach to energy supply, project execution, and long-term advisory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-200/80 shadow-sm space-y-4 relative group hover:-translate-y-1 transition-all">
              <div className="text-4xl font-black text-amber-500 font-mono">01</div>
              <h3 className="text-lg font-bold text-neutral-900">Consultation & Planning</h3>
              <p className="text-xs font-semibold text-amber-700">Shaping the Foundation of Success</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We begin by thoroughly understanding your requirements, defining volume metrics, and drafting compliant trade execution plans.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-200/80 shadow-sm space-y-4 relative group hover:-translate-y-1 transition-all">
              <div className="text-4xl font-black text-amber-500 font-mono">02</div>
              <h3 className="text-lg font-bold text-neutral-900">Execution & Implementation</h3>
              <p className="text-xs font-semibold text-amber-700">Transforming Plans into Tangible Results</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                From vessel chartering and terminal storage access to regulatory filings, our specialists handle every detail with precision.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-200/80 shadow-sm space-y-4 relative group hover:-translate-y-1 transition-all">
              <div className="text-4xl font-black text-amber-500 font-mono">03</div>
              <h3 className="text-lg font-bold text-neutral-900">Delivery & Long-Term Support</h3>
              <p className="text-xs font-semibold text-amber-700">Committed to Continuous Operational Growth</p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We maintain ongoing communication, trade settlement auditing, and market intelligence briefings for lasting partnerships.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SHOWCASE FEATURED CARGO ALLOCATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-900">
              Featured Operations & Commercial Tracks
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-xl">
              High-value transactions and downstream supply operations facilitated across West African trading corridors.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevProject}
              aria-label="Previous showcase project"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all flex items-center justify-center shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-700 hover:text-white" />
            </button>
            <button
              onClick={nextProject}
              aria-label="Next showcase project"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all flex items-center justify-center shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-neutral-700 hover:text-white" />
            </button>
          </div>
        </div>

        {/* Big Showcase Card */}
        <div className="bg-neutral-950 text-white rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 h-64 sm:h-80 lg:h-auto min-h-[320px] relative overflow-hidden">
            <img
              src={showcaseProjects[projectIndex].image}
              alt={showcaseProjects[projectIndex].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                {showcaseProjects[projectIndex].tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                {showcaseProjects[projectIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {showcaseProjects[projectIndex].description}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              <button
                onClick={() => onOpenQuoteModal(showcaseProjects[projectIndex].title)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <span>Inquire About This Track</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
              <span className="text-xs font-mono text-neutral-500">
                0{projectIndex + 1} / 0{showcaseProjects.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HORIZONTAL QUICK QUOTE STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-500 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl text-neutral-950">
          <div className="mb-6 max-w-2xl">
            <h3 className="text-xl sm:text-3xl font-black tracking-tight text-neutral-950">
              Request A Commercial Consultation
            </h3>
            <p className="text-xs sm:text-sm font-medium text-neutral-900 mt-1">
              Submit your inquiry and our desk will respond with compliant trade parameters within 24 hours.
            </p>
          </div>

          {quickSubmitted ? (
            <div className="bg-neutral-950 text-white p-5 rounded-2xl flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
              <div>
                <span className="block font-bold text-sm">Inquiry Received Successfully</span>
                <span className="text-xs text-neutral-300">An energy trade lead has been notified and will contact you directly.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleQuickQuoteSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <input
                  type="text"
                  required
                  value={quickName}
                  onChange={(e) => setQuickName(e.target.value)}
                  placeholder="Your Full Name / Entity"
                  className="px-4 py-3 rounded-xl bg-white text-neutral-900 placeholder:text-neutral-500 text-xs font-medium border-none shadow-sm focus:ring-2 focus:ring-neutral-950 outline-none"
                />
                <input
                  type="tel"
                  required
                  value={quickPhone}
                  onChange={(e) => setQuickPhone(e.target.value)}
                  placeholder="Corporate Phone / WhatsApp"
                  className="px-4 py-3 rounded-xl bg-white text-neutral-900 placeholder:text-neutral-500 text-xs font-medium border-none shadow-sm focus:ring-2 focus:ring-neutral-950 outline-none"
                />
                <select
                  value={quickService}
                  onChange={(e) => setQuickService(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-white text-neutral-900 text-xs font-medium border-none shadow-sm focus:ring-2 focus:ring-neutral-950 outline-none cursor-pointer"
                >
                  <option value="Commodity Brokerage & Trade">Commodity Brokerage & Trade</option>
                  <option value="Physical Oil Offtaking (Gasoil / Mogas)">Physical Oil Offtaking (Gasoil / Mogas)</option>
                  <option value="Terminal Storage & Offtake">Terminal Storage & Offtake</option>
                  <option value="Aviation Jet A-1 & Marine STS">Aviation Jet A-1 & Marine STS</option>
                  <option value="Energy Advisory & Consulting">Energy Advisory & Consulting</option>
                </select>
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  Get Your Free Quote
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 8. CLIENT FEEDBACK (EXACTLY 2 VISIBLE AT A TIME WITH ANIMATION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-900">
              Our Clients Trust Us To Deliver Exceptional Results
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Institutional feedback from regional trading desks, BDCs, and terminal operators.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevTestimonials}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all flex items-center justify-center shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-700 hover:text-white" />
            </button>
            <button
              onClick={nextTestimonials}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all flex items-center justify-center shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-neutral-700 hover:text-white" />
            </button>
          </div>
        </div>

        {/* 2 Visible Testimonials Grid with Motion Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((t, idx) => (
              <motion.div
                key={`${t.id}-${testimonialIndex}-${idx}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-white p-7 rounded-3xl border border-neutral-200 shadow-md space-y-4 flex flex-col justify-between relative hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                    />
                    <div>
                      <span className="block font-bold text-xs text-neutral-900">{t.name}</span>
                      <span className="block text-[11px] text-neutral-500">{t.role}</span>
                    </div>
                  </div>
                  <Quote className="w-7 h-7 text-amber-200" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 9. MARKET INTELLIGENCE & ADVISORY FOCUS (INSTITUTIONAL OVERVIEW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-neutral-900">
              Independent Market Intelligence & Pricing Window Analytics
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xl">
              We monitor ex-refinery pricing parity formulas, FOB Mediterranean and ARA benchmarks, and regional supply/demand balances across Ghana and the Gulf of Guinea.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <TrendingUp className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-bold text-neutral-900">Price Window Tracking</span>
                  <span className="text-[11px] text-neutral-600">Daily Platts & Argus parity assessments.</span>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <Scale className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-bold text-neutral-900">FX Risk Mitigation</span>
                  <span className="text-[11px] text-neutral-600">Hedging strategies for currency volatility.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal('Market Intelligence & Pricing Desk')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-amber-500 hover:bg-amber-600 shadow-md transition-all cursor-pointer active:scale-95"
              >
                <span>Request Market Briefing</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-neutral-950 text-white rounded-2xl p-6 sm:p-7 border border-neutral-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">Trade Intelligence Desk</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-neutral-900">
                <span className="text-neutral-400">Gasoil 10ppm Cargo Parity</span>
                <span className="font-mono font-bold text-white">Platts FOB Med + Premium</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-900">
                <span className="text-neutral-400">Gasoline 95 Ex-Refinery</span>
                <span className="font-mono font-bold text-white">NPA Window Parity</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-900">
                <span className="text-neutral-400">Terminal Demurrage Cap</span>
                <span className="font-mono font-bold text-white">Zero Demurrage Protocol</span>
              </div>
            </div>

            <p className="text-[11px] text-neutral-400 pt-1">
              Custom term sheets and bilateral trade structuring available for accredited commercial counterparties.
            </p>
          </div>
        </div>
      </section>

      {/* 10. PRE-FOOTER CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="h-12 w-auto inline-flex items-center px-3.5 py-1.5 rounded-xl bg-white border border-neutral-200">
              <img
                src={SITE_IMAGES.logo}
                alt="The Developers Energy Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md">
              Delivering disciplined commodity brokerage, terminal infrastructure access, and strategic energy advisory across Ghana, West Africa, and global trade corridors.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-amber-500 text-neutral-950 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950">
                Transform Your Energy Supply With Us!
              </h3>
              <p className="text-xs text-neutral-900 font-medium">
                Subscribe to our strategic market briefings and direct cargo updates.
              </p>

              {ctaSubscribed ? (
                <div className="p-3 rounded-xl bg-neutral-950 text-white text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Subscribed! Market reports will arrive in your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleCtaSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={ctaEmail}
                    onChange={(e) => setCtaEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white text-neutral-900 placeholder:text-neutral-500 text-xs font-medium border-none shadow-sm focus:ring-2 focus:ring-neutral-950 outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
