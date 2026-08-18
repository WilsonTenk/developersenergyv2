import React from 'react';
import { PageTab } from '../types';
import { Footerdemo } from './ui/footer-section';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenQuoteModal }) => {
  const handleNavigateTab = (tab: string) => {
    setActiveTab(tab as PageTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Footerdemo
      onNavigateTab={handleNavigateTab}
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
};

