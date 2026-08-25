import React, { useState } from 'react';
import { InsightArticle } from '../types';
import { AnimatedCounter } from './common/AnimatedCounter';
import {
  FileText,
  Mail,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Building2,
  Scale,
  Compass
} from 'lucide-react';

interface InsightsTabProps {
  onSelectArticle?: (article: InsightArticle) => void;
  selectedArticleProp?: InsightArticle | null;
}

export const InsightsTab: React.FC<InsightsTabProps> = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [subEmail, setSubEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subEmail) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setSubEmail('');
    }
  };

  const upcomingReports = [
    {
      title: 'West African Petroleum Supply & Demand Outlook (2026–2027)',
      category: 'Market Outlook',
      icon: TrendingUp,
      desc: 'In-depth analysis of regional refinery off-taking, Low-Sulfur Gasoil 10ppm import allocations, and Gulf of Guinea marine corridors.'
    },
    {
      title: 'Ex-Refinery Parity Benchmark Pricing & Platts Valuation Formula',
      category: 'Pricing Analytics',
      icon: Scale,
      desc: 'Detailed modeling of FOB Mediterranean & ARA benchmarks vs. NPA ex-refinery pricing formulas across Tema and Takoradi depots.'
    },
    {
      title: 'Bulk Depot Storage Offtake & Terminal Logistics Economics',
      category: 'Infrastructure',
      icon: Building2,
      desc: 'Commercial assessment of tank farm capacities, zero-loss pipeline custody transfers, and vessel laycan scheduling optimization.'
    },
    {
      title: 'Downstream Regulatory Compliance & NPA Policy Briefings',
      category: 'Policy & Governance',
      icon: Compass,
      desc: 'Comprehensive review of trade financing, BDC statutory guidelines, and marine STS lightering safety protocols.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 bg-white transition-colors duration-200">
      {/* PAGE HEADER */}
      <section className="bg-white py-14 border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full inline-block shadow-sm">
            Market Intelligence
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading">
            Insights & Reports
          </h1>
          <p className="text-neutral-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Petroleum market analysis, price trend monitoring, regulatory shifts, and supply chain briefs from The Developers Energy advisory desk.
          </p>
        </div>
      </section>

      {/* INTELLIGENCE METRICS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={100} suffix="%" duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Independent Analysis</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={5} suffix=" Core" duration={1.8} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Key Benchmarks Tracked</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-amber-500 tracking-tight">
              <AnimatedCounter value={3} duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Regional Trade Corridors</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              24/7
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Pricing Window Analytics</span>
          </div>
        </div>
      </section>

      {/* COMING SOON HERO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-800 shadow-2xl relative overflow-hidden text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Research Publications • Coming Soon</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-heading">
              Market Intelligence & Petroleum Reports Coming Soon
            </h2>
            
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Our market intelligence and energy research desk is currently compiling institutional research publications, ex-refinery parity price indices, and West African hydrocarbon market dossiers. Full downloadable reports will be available here soon.
            </p>
          </div>

          {/* UPCOMING TOPICS PREVIEW GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-left pt-4">
            {upcomingReports.map((report, idx) => {
              const IconComponent = report.icon;
              return (
                <div
                  key={idx}
                  className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-5 sm:p-6 space-y-3 hover:border-amber-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                      {report.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300">
                      <IconComponent className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {report.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {report.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* NOTIFICATION SUBSCRIPTION */}
          <div className="pt-6 border-t border-neutral-800 max-w-md mx-auto space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Get Notified When First Report Is Released
            </h4>
            
            {subscribed ? (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Subscribed! You will be the first to receive our inaugural release.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  placeholder="Enter corporate email..."
                  className="flex-1 bg-neutral-900 border border-neutral-700 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider text-neutral-950 bg-amber-500 hover:bg-amber-400 transition-all shrink-0 cursor-pointer"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
