import React, { useState, useRef } from 'react';
import { PageTab } from '../types';
import { STRATEGIC_TRACKS, SUPPORT_VECTORS, COMPANY_PROFILE_DATA } from '../data/energyData';
import { EXECUTIVE_LEADERBOARD, LeaderboardExecutive } from '../data/leaderboardData';
import { SITE_IMAGES } from '../data/imageData';
import { HorizontalImageBanner } from './HorizontalImageBanner';
import { LeaderboardModal } from './LeaderboardModal';
import { AnimatedCounter } from './common/AnimatedCounter';
import {
  Eye,
  Target,
  ShieldCheck,
  Building2,
  Users,
  Coins,
  Wrench,
  FileCheck,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Linkedin,
  Twitter,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
  User
} from 'lucide-react';

interface AboutTabProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const AboutTab: React.FC<AboutTabProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  const [selectedTrack, setSelectedTrack] = useState<string>(STRATEGIC_TRACKS[0].id);
  
  // Slider state for Management & Strategic Vectors
  const capabilitySliderRef = useRef<HTMLDivElement>(null);
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);

  const scrollCapability = (direction: 'left' | 'right') => {
    if (capabilitySliderRef.current) {
      const cardWidth = capabilitySliderRef.current.firstElementChild?.getBoundingClientRect().width || 320;
      const gap = 20;
      const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);
      capabilitySliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleCapabilityScroll = () => {
    if (capabilitySliderRef.current) {
      const { scrollLeft } = capabilitySliderRef.current;
      const cardWidth = capabilitySliderRef.current.firstElementChild?.getBoundingClientRect().width || 320;
      const gap = 20;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveCapabilityIndex(Math.min(Math.max(0, index), SUPPORT_VECTORS.length - 1));
    }
  };

  const scrollToCapabilityIndex = (index: number) => {
    if (capabilitySliderRef.current) {
      const cardWidth = capabilitySliderRef.current.firstElementChild?.getBoundingClientRect().width || 320;
      const gap = 20;
      capabilitySliderRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth',
      });
      setActiveCapabilityIndex(index);
    }
  };
  
  // Modal state for Executive Director profile
  const [selectedExecutive, setSelectedExecutive] = useState<LeaderboardExecutive | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenExecutive = (exec: LeaderboardExecutive) => {
    setSelectedExecutive(exec);
    setIsModalOpen(true);
  };

  const getVectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Coins':
        return <Coins className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  const currentTrack = STRATEGIC_TRACKS.find((t) => t.id === selectedTrack) || STRATEGIC_TRACKS[0];

  return (
    <div className="space-y-20 sm:space-y-24 pb-20 bg-white">
      {/* PAGE HEADER */}
      <section className="bg-white py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            {COMPANY_PROFILE_DATA.name}
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg max-w-4xl leading-relaxed">
            An emerging energy and commodity services company focused on creating sustainable value across Africa’s evolving energy landscape through market intelligence, commercial advisory, brokerage support, and strategic partnerships.
          </p>
        </div>
      </section>

      {/* CORPORATE STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={5} duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Core Values</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={7} duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Service Disciplines</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={3} duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Target Horizons</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-4xl font-black text-amber-500 tracking-tight">
              <AnimatedCounter value={100} suffix="%" duration={1.8} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Governance Standards</span>
          </div>
        </div>
      </section>

      {/* CORPORATE OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/90 shadow-md space-y-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-sm">
              <Building2 className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-neutral-900">Company Overview</h2>
              <span className="text-xs text-amber-600 font-bold uppercase tracking-wider">Africa Energy & Commodity Services</span>
            </div>
          </div>

          <div className="text-neutral-600 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              {COMPANY_PROFILE_DATA.overview.split('\n\n')[0]}
            </p>
            <p>
              {COMPANY_PROFILE_DATA.overview.split('\n\n')[1]}
            </p>
            <p>
              {COMPANY_PROFILE_DATA.overview.split('\n\n')[2]}
            </p>
          </div>
        </div>
      </section>

      {/* VISION & MISSION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="bg-white border border-neutral-200/90 rounded-3xl p-8 sm:p-10 relative overflow-hidden space-y-4 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 group-hover:bg-amber-500 group-hover:text-white transition-all duration-200 shadow-sm">
              <Eye className="w-6 h-6 text-neutral-900 group-hover:text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 leading-snug">
              Our Vision: Leading African Energy Solutions
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              "{COMPANY_PROFILE_DATA.vision}"
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 pt-4 border-t border-neutral-100">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Excellence in energy intelligence & market analysis</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Driving economic growth & regional energy security</span>
              </li>
            </ul>
          </div>

          {/* Mission Card */}
          <div className="bg-white border border-neutral-200/90 rounded-3xl p-8 sm:p-10 relative overflow-hidden space-y-4 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 group-hover:bg-amber-500 group-hover:text-white transition-all duration-200 shadow-sm">
              <Target className="w-6 h-6 text-neutral-900 group-hover:text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 leading-snug">
              Our Mission: Enabling Informed Energy Participation
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              "{COMPANY_PROFILE_DATA.mission}"
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 pt-4 border-t border-neutral-100">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Reliable advisory & commercial execution support</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Unlocking commercial opportunities in African markets</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-neutral-600 text-sm">
            Five principles guiding every partnership, deal structure, and strategic advisory assignment we execute.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COMPANY_PROFILE_DATA.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 flex items-center justify-center text-xs font-bold font-mono">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-neutral-900">{val.title}</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TARGET MARKETS & COMPETITIVE ADVANTAGE */}
      <section className="bg-neutral-50 py-16 sm:py-20 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Target Markets */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
                  Target Markets
                </h2>
              </div>
              <p className="text-xs text-neutral-600 max-w-xl">
                Strategically positioned in Ghana to support regional integration across West Africa and continental expansion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPANY_PROFILE_DATA.targetMarkets.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200 rounded-3xl p-7 space-y-3 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      {m.name}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-800 border border-neutral-200 px-3 py-1 rounded-full">
                      {m.scope}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Advantage */}
          <div className="space-y-6 pt-6 border-t border-neutral-200">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
                Our Competitive Advantage
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {COMPANY_PROFILE_DATA.competitiveAdvantages.map((adv) => (
                <div
                  key={adv.id}
                  className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-3 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900">{adv.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* STRATEGIC TRACKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Strategic Tracks & Business Lines
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Select a strategic focus area to explore operational capabilities.
            </p>
          </div>
        </div>

        {/* Track Selector Tabs */}
        <div className="flex flex-wrap gap-2 pb-2">
          {STRATEGIC_TRACKS.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedTrack === track.id
                  ? 'bg-neutral-950 text-white shadow-md'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {track.title}
            </button>
          ))}
        </div>

        {/* Selected Track Detail Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold uppercase text-amber-600">Track 0{STRATEGIC_TRACKS.findIndex(t => t.id === selectedTrack) + 1}</span>
            <h3 className="text-2xl font-black text-neutral-900">{currentTrack.title}</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">{currentTrack.summary}</p>
            <ul className="space-y-2 pt-2">
              {currentTrack.milestones.map((pt, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <button
                onClick={() => onOpenQuoteModal(`Advisory on ${currentTrack.title}`)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                <span>Consult Our Desk</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
            <img
              src={SITE_IMAGES.heroSlides[1].url}
              alt={currentTrack.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* EXECUTIVE DIRECTORATE SECTION (REDESIGNED: MODERN, CLEAN, DIRECT BIO ON CLICK) */}
      <section id="executive-directorate-section" className="bg-neutral-50/80 py-20 sm:py-24 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              Executive Directorate
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              Senior directors and trade leads guiding our commercial transactions and physical energy operations. Click any profile to read their full overview.
            </p>
          </div>

          {/* 4-Card Modern Executive Directorate Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {EXECUTIVE_LEADERBOARD.map((exec) => {
              const initials = exec.name
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('');

              return (
                <div
                  key={exec.id}
                  onClick={() => handleOpenExecutive(exec)}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-neutral-400 transition-all duration-300 cursor-pointer flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Header with Avatar, Name, and Role */}
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 rounded-2xl bg-neutral-950 text-white flex items-center justify-center font-mono font-bold text-lg border border-neutral-200 shadow-sm shrink-0 overflow-hidden">
                        {exec.imageUrl ? (
                          <img
                            src={exec.imageUrl}
                            alt={exec.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center">
                            <User className="w-5 h-5 text-amber-400 mb-0.5" />
                            <span className="text-xs font-mono font-bold">{initials}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-1 flex-1">
                        <h3 className="text-lg font-black text-neutral-900 group-hover:text-amber-600 transition-colors leading-tight">
                          {exec.name}
                        </h3>
                        <p className="text-xs font-bold text-neutral-600 leading-snug">
                          {exec.role}
                        </p>
                        <span className="inline-block text-[11px] font-medium text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/80">
                          {exec.division}
                        </span>
                      </div>
                    </div>

                    {/* Bio Summary Excerpt */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                      {exec.bioSummary}
                    </p>

                    {/* Specialty Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exec.specialty.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 border border-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-amber-600 flex items-center gap-1 transition-colors">
                      <span>Read Full Overview</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="flex items-center gap-2">
                      {exec.linkedinUrl && (
                        <span className="p-1.5 rounded-lg bg-neutral-100 text-neutral-600 group-hover:text-neutral-900">
                          <Linkedin className="w-3.5 h-3.5 text-neutral-700" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Executive Overview Modal */}
      <LeaderboardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        executive={selectedExecutive}
        onContactExecutive={(name) => onOpenQuoteModal(`Direct Inquiry for ${name}`)}
      />

      {/* PARTNERSHIP APPROACH & CONTACT CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white border border-neutral-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
              Our Partnership Approach
            </h2>
            <p className="text-neutral-600 text-sm">
              We believe sustainable growth is achieved through strong relationships, transparent execution, and mutual commercial benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Who We Collaborate With</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                {COMPANY_PROFILE_DATA.partnershipApproach.collaborators.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">How We Work</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                {COMPANY_PROFILE_DATA.partnershipApproach.pillars.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onOpenQuoteModal('Strategic Partnership')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Initiate Strategic Discussion</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
