import { Footerdemo } from "./footer-section"

interface FooterProps {
  onNavigateTab?: (tab: string) => void;
  onOpenQuoteModal?: (service?: string) => void;
}

function Footer({ onNavigateTab, onOpenQuoteModal }: FooterProps) {
  return (
    <div className="block">
      <Footerdemo onNavigateTab={onNavigateTab} onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  )
}

export { Footer }
