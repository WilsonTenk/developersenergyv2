import React, { useState, useEffect } from 'react';
import { PageTab, InsightArticle } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MarketTickerBar } from './components/MarketTickerBar';
import { HomeTab } from './components/HomeTab';
import { AboutTab } from './components/AboutTab';
import { ServicesTab } from './components/ServicesTab';
import { InsightsTab } from './components/InsightsTab';
import { BlogTab } from './components/BlogTab';
import { ComingSoonTab } from './components/ComingSoonTab';
import { TrainingTab } from './components/TrainingTab';
import { ContactTab } from './components/ContactTab';
import { QuoteModal } from './components/QuoteModal';
import { TradeCalculatorModal } from './components/TradeCalculatorModal';
import { ErrorBoundary } from './components/ErrorBoundary';
import { updatePageSeo } from './utils/seo';
import { ThemeProvider } from './context/ThemeContext';
import { parseRoute, pushRoute } from './utils/router';

export default function App() {
  const initialRoute = parseRoute();
  const [activeTab, setActiveTab] = useState<PageTab>(initialRoute.tab);
  const [articleSlug, setArticleSlug] = useState<string | undefined>(initialRoute.articleSlug);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePrefilledService, setQuotePrefilledService] = useState<string | undefined>(undefined);
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const route = parseRoute();
      setActiveTab(route.tab);
      setArticleSlug(route.articleSlug);
      updatePageSeo(route.tab);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update SEO meta tags on active tab change
  useEffect(() => {
    updatePageSeo(activeTab);
  }, [activeTab]);

  const handleTabChange = (tab: PageTab, slug?: string) => {
    setActiveTab(tab);
    setArticleSlug(slug);
    pushRoute(tab, slug);
    window.scrollTo(0, 0);
  };

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    setQuotePrefilledService(serviceTitle);
    setQuoteModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white transition-colors duration-200">
        {/* Sticky Top Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={(tab) => handleTabChange(tab)}
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenCalculator={() => setCalculatorModalOpen(true)}
        />

        {/* Live Energy Benchmarks Ticker Bar */}
        <MarketTickerBar onOpenCalculator={() => setCalculatorModalOpen(true)} />

        {/* Main Page Content based on Active Tab */}
        <main className="flex-1 bg-white">
          <ErrorBoundary sectionName="Page Section">
            {activeTab === 'home' && (
              <HomeTab
                setActiveTab={(tab) => handleTabChange(tab)}
                onOpenQuoteModal={handleOpenQuoteModal}
                onOpenCalculator={() => setCalculatorModalOpen(true)}
                onSelectArticle={(article) => {
                  setSelectedArticle(article);
                  handleTabChange('insights');
                }}
              />
            )}

            {activeTab === 'about' && (
              <AboutTab
                setActiveTab={(tab) => handleTabChange(tab)}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}

            {activeTab === 'services' && (
              <ServicesTab
                onOpenQuoteModal={handleOpenQuoteModal}
                onOpenCalculator={() => setCalculatorModalOpen(true)}
              />
            )}

            {activeTab === 'insights' && (
              <InsightsTab
                selectedArticleProp={selectedArticle}
                onSelectArticle={(article) => setSelectedArticle(article)}
              />
            )}

            {activeTab === 'blog' && (
              <BlogTab
                onOpenQuoteModal={handleOpenQuoteModal}
                initialArticleSlug={articleSlug}
                onSelectArticleSlug={(slug) => {
                  setArticleSlug(slug || undefined);
                  pushRoute('blog', slug || undefined);
                }}
              />
            )}

            {activeTab === 'training' && (
              <ComingSoonTab
                pageType="training"
                setActiveTab={(tab) => handleTabChange(tab)}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}

            {activeTab === 'contact' && (
              <ContactTab />
            )}
          </ErrorBoundary>
        </main>

        {/* Site Footer */}
        <Footer
          setActiveTab={(tab) => handleTabChange(tab)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Interactive Modals loaded on demand */}
        {quoteModalOpen && (
          <QuoteModal
            isOpen={quoteModalOpen}
            onClose={() => setQuoteModalOpen(false)}
            prefilledService={quotePrefilledService}
            onOpenCalculator={() => setCalculatorModalOpen(true)}
          />
        )}

        {calculatorModalOpen && (
          <TradeCalculatorModal
            isOpen={calculatorModalOpen}
            onClose={() => setCalculatorModalOpen(false)}
            onForwardQuote={handleOpenQuoteModal}
          />
        )}
      </div>
    </ThemeProvider>
  );
}


