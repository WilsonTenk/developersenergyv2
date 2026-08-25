import React, { useState } from 'react';
import { AnimatedCounter } from './common/AnimatedCounter';
import {
  Clock,
  BookOpen,
  Mail,
  CheckCircle2,
  TrendingUp,
  Fuel,
  Ship,
  Scale,
  ArrowRight,
  Sparkles,
  Send
} from 'lucide-react';

interface BlogTabProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const BlogTab: React.FC<BlogTabProps> = ({ onOpenQuoteModal }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  const upcomingArticles = [
    {
      title: 'The Future of Refined Petroleum Trading in West Africa: 2026 Horizons',
      category: 'Commodities & Trade',
      icon: Fuel,
      author: 'Kennedy Awuku Addo',
      desc: 'Analyzing shifts in regional refinery offtake, Gasoil 10ppm supply corridors, and structured trade finance under AfCFTA.'
    },
    {
      title: 'Navigating Trade Credit & FX Margin Volatility in Petroleum Importation',
      category: 'Risk & Trade Finance',
      icon: Scale,
      author: 'Jeffrey Kwesi Boateng',
      desc: 'Practical risk management mechanisms and bankable Letter of Credit (LC) structures for Bulk Distribution Companies (BDCs).'
    },
    {
      title: 'Bulk Depot Storage Offtake & Zero-Loss Custody Transfers',
      category: 'Downstream Logistics',
      icon: TrendingUp,
      author: 'TDE Operations Desk',
      desc: 'Optimizing tank farm allocations, pipeline metering integrity, and ex-rack distribution across Tema and Takoradi energy hubs.'
    },
    {
      title: 'Offshore STS Bunkering & Zero-Demurrage Precision in the Gulf of Guinea',
      category: 'Marine Operations',
      icon: Ship,
      author: 'TDE Marine Desk',
      desc: 'Deepwater vessel-to-vessel transfer protocols, draft survey precision, and mitigation strategies for laycan demurrage risks.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 bg-neutral-50 text-neutral-900 font-sans">
      {/* 1. EDITORIAL HEADER SECTION */}
      <section className="bg-neutral-950 text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-neutral-950 uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
            <BookOpen className="w-3.5 h-3.5" />
            Executive Perspectives & Thought Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Energy Blog & Industry Perspectives
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Market commentary, downstream policy briefings, trade finance mechanisms, and operational insights from The Developers Energy executive desk.
          </p>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={5} suffix="+" duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Focus Verticals</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              100%
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Expert Editorial Focus</span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-amber-500 tracking-tight">
              <AnimatedCounter value={4} suffix=" Pillars" duration={1.8} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Core Energy Themes</span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              2026
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Horizon Perspectives</span>
          </div>
        </div>
      </section>

      {/* 3. COMING SOON SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-neutral-200 shadow-xl text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Articles & Thought Leadership • Coming Soon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
              Executive Articles & Industry Insights Coming Soon
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Our executive desk and advisory specialists are curating high-impact articles covering West African petroleum trading, trade finance structuring, and downstream logistics. Full articles will be published here soon.
            </p>
          </div>

          {/* FORTHCOMING ARTICLES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left pt-4">
            {upcomingArticles.map((art, idx) => {
              const IconComp = art.icon;
              return (
                <div
                  key={idx}
                  className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/90 space-y-3 hover:border-amber-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2.5 py-1 rounded-md border border-amber-200">
                      {art.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-amber-600 shadow-sm">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {art.desc}
                  </p>

                  <div className="pt-2 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-semibold text-neutral-700 text-[11px]">
                      By {art.author}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-amber-600">
                      In Review
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NEWSLETTER FORM */}
          <div className="pt-8 border-t border-neutral-200 max-w-md mx-auto space-y-4">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                Subscribe For Article Releases
              </h4>
              <p className="text-xs text-neutral-500 mt-1">
                Receive the inaugural executive brief directly in your inbox.
              </p>
            </div>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Subscribed! You will receive notification when articles go live.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter corporate email..."
                  className="flex-1 px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal('Strategic Energy Advisory')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-amber-600 transition-colors uppercase tracking-wider cursor-pointer"
              >
                <span>Direct Inquiry with Advisory Desk</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
