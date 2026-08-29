import React from 'react';
import { PageTab } from '../types';
import { Compass, Sparkles, ArrowRight, ShieldCheck, Mail, Calendar, Layers } from 'lucide-react';
import { SITE_IMAGES } from '../data/imageData';

interface ComingSoonTabProps {
  pageType: 'insights' | 'blog' | 'training';
  setActiveTab: (tab: PageTab) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const ComingSoonTab: React.FC<ComingSoonTabProps> = ({
  pageType,
  setActiveTab,
  onOpenQuoteModal,
}) => {
  const isInsights = pageType === 'insights';
  const isTraining = pageType === 'training';
  const title = isInsights
    ? 'Energy Market Intelligence & Pricing Desk'
    : isTraining
    ? 'Executive Training & Masterclasses'
    : 'African Energy & Petroleum Editorial Desk';
  const subtitle = isInsights
    ? 'Our market intelligence desk is currently calibrating real-time pricing feeds, ex-refinery parity benchmarks (Platts & Argus windows), and regional supply/demand analytics.'
    : isTraining
    ? 'Our executive training institute is finalizing a suite of specialized masterclasses in petroleum trading, depot HSSE compliance, Incoterms 2020, and energy price risk derivatives. Enrolment opens soon.'
    : 'Our editorial board is preparing deep-dive research pieces, trade policy analyses, and executive interviews covering the West African energy transition and downstream trade.';

  return (
    <div className="min-h-[75vh] flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50/50">
      <div className="max-w-4xl mx-auto w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-neutral-200/90 shadow-xl text-center space-y-8 relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-neutral-900/5 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Header */}
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
            {isInsights ? <Compass className="w-8 h-8" /> : isTraining ? <Layers className="w-8 h-8" /> : <Layers className="w-8 h-8" />}
          </div>

          {/* Text Content */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <div className="text-amber-600 font-bold text-xs">01. Live Pricing Parity</div>
              <p className="text-[11px] text-neutral-600">NPA formula tracking, Argus/Platts benchmarks & FOB metrics.</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <div className="text-amber-600 font-bold text-xs">02. Trade Bulletins</div>
              <p className="text-[11px] text-neutral-600">Regional cargo movements, terminal capacity & laycan reports.</p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <div className="text-amber-600 font-bold text-xs">03. Advisory Access</div>
              <p className="text-[11px] text-neutral-600">Direct consultations with physical commodity trading desks.</p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-amber-500 hover:bg-amber-600 shadow-md transition-all active:scale-95"
            >
              <span>Explore Active Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenQuoteModal(isInsights ? 'Market Intelligence & Advisory' : isTraining ? 'Executive Training Enrolment' : 'General Trade Inquiries')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Trade Desk</span>
            </button>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex items-center justify-center gap-2 text-xs text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>The Developers Energy &bull; Independent Energy Intelligence</span>
          </div>
        </div>
      </div>
    </div>
  );
};
