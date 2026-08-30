import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { SITE_IMAGES } from '../data/imageData';
import { Menu, X, ArrowUpRight, Calculator } from 'lucide-react';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  onOpenQuoteModal: (service?: string) => void;
  onOpenCalculator: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuoteModal,
  onOpenCalculator,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'insights', label: 'Insights' },
    { id: 'blog', label: 'Blog' },
    { id: 'training', label: 'Training' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Main navigation bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-[0_1px_0_rgba(0,0,0,0.05),0_4px_20px_-2px_rgba(0,0,0,0.04)]'
            : 'bg-white border-b border-neutral-200/90 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            
            {/* Logo — sits directly on header background, no box */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center group focus:outline-none transition-transform active:scale-95"
                aria-label="The Developers Energy Home"
              >
                <img
                  src={SITE_IMAGES.logo}
                  alt="The Developers Energy Logo"
                  referrerPolicy="no-referrer"
                  className="h-10 sm:h-12 lg:h-14 w-auto max-w-[160px] sm:max-w-[220px] lg:max-w-[260px] object-contain transition-opacity group-hover:opacity-80"
                />
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? 'text-amber-600 bg-amber-50 font-bold'
                        : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-all min-h-[40px]"
                title="Launch Cargo & Trade Value Estimator"
              >
                <Calculator className="w-3.5 h-3.5 text-neutral-600" />
                <span>Estimator</span>
              </button>

              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-amber-500 hover:bg-amber-600 shadow-sm transition-all active:scale-[0.98] min-h-[40px]"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Action & Toggle */}
            <div className="flex lg:hidden items-center justify-end space-x-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="h-10 px-3.5 text-xs font-bold uppercase tracking-wider text-white bg-amber-500 rounded-lg shadow-sm hover:bg-amber-600 active:scale-95 transition-all flex items-center justify-center gap-1"
              >
                <span>Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 shadow-sm transition-all active:scale-95"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-lg">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors min-h-[44px] flex items-center ${
                    isActive
                      ? 'text-amber-600 bg-amber-50 font-bold'
                      : 'text-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-neutral-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCalculator();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 text-sm font-semibold hover:bg-neutral-200 min-h-[44px]"
              >
                <Calculator className="w-4 h-4" />
                <span>Trade Value Estimator</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 text-white text-sm font-bold uppercase tracking-wider hover:bg-amber-600 min-h-[44px]"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
