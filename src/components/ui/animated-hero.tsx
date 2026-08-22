import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  TrendingUp,
  Layers,
  Fuel,
  Briefcase,
  Building2,
  Handshake,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "./button";

interface HeroProps {
  onExploreTracks?: () => void;
  onOpenQuoteModal?: () => void;
  onContactDesk?: () => void;
  backgroundImage?: string;
  backgroundImages?: string[];
  catchyPrefix?: string;
}

const BASE = import.meta.env.BASE_URL || '/';
const DEFAULT_HERO_IMAGES = [
  `${BASE}images/tde/hero-bg-1.jpg`,
  `${BASE}images/tde/hero-bg-2.jpg`,
  `${BASE}images/tde/hero-bg-3.jpg`,
  `${BASE}images/tde/hero-bg-4.jpg`
];

function Hero({
  onExploreTracks,
  onOpenQuoteModal,
  onContactDesk,
  backgroundImage,
  backgroundImages,
  catchyPrefix = "Strategic Leader in"
}: HeroProps) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [bgImageIndex, setBgImageIndex] = useState(0);

  // Active list of 4 background images (either passed or default assets)
  const imageList = useMemo(() => {
    if (backgroundImages && backgroundImages.length > 0) {
      return backgroundImages;
    }
    if (backgroundImage) {
      return [backgroundImage, ...DEFAULT_HERO_IMAGES.filter(img => img !== backgroundImage)].slice(0, 4);
    }
    return DEFAULT_HERO_IMAGES;
  }, [backgroundImage, backgroundImages]);

  const titles = useMemo(
    () => [
      "Industrial Energy",
      "Oil & Gas",
      "Energy Trading",
      "Renewables",
      "Commodities"
    ],
    []
  );

  // Rotate title text every 3.0 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [titles]);

  // Rotate background images every 5 seconds with smooth animation
  useEffect(() => {
    if (imageList.length <= 1) return;
    const bgInterval = setInterval(() => {
      setBgImageIndex((prev) => (prev + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, [imageList]);

  const hasBgImage = imageList.length > 0;

  return (
    <div
      className={`relative w-full overflow-hidden border-b transition-colors duration-300 ${
        hasBgImage
          ? "bg-neutral-950 text-white border-neutral-800"
          : "bg-gradient-to-b from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 border-neutral-200 dark:border-neutral-800 text-neutral-950 dark:text-neutral-50"
      }`}
    >
      {/* Animated 4-Image Background Slideshow */}
      {hasBgImage && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="sync">
            <motion.div
              key={bgImageIndex}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${imageList[bgImageIndex]})` }}
            />
          </AnimatePresence>
          {/* Multi-layer gradient overlays ensuring pristine contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/85 via-neutral-950/70 to-neutral-950/95" />
          <div className="absolute inset-0 bg-neutral-950/30" />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-5 sm:gap-6 py-10 sm:py-13 lg:py-16 items-center justify-center flex-col min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] justify-center">
          
          {/* Main Dynamic Headline */}
          <div className="flex gap-3 sm:gap-4 flex-col text-center max-w-4xl hero-fade-in">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight">
              <span
                className={`block ${
                  hasBgImage
                    ? "text-white drop-shadow-md"
                    : "text-neutral-900 dark:text-white"
                }`}
              >
                {catchyPrefix}
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-2 md:pt-1 min-h-[1.25em]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className={`absolute font-black underline decoration-2 underline-offset-6 ${
                      hasBgImage
                        ? "text-white decoration-white/60 drop-shadow-lg"
                        : "text-black dark:text-white decoration-neutral-400 dark:decoration-neutral-600"
                    }`}
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleIndex === index
                        ? {
                            y: "0%",
                            opacity: 1,
                          }
                        : {
                            y: titleIndex > index ? "-100%" : "100%",
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Clear Brand Positioning Statement */}
            <p
              className={`text-sm sm:text-base md:text-lg leading-relaxed tracking-normal max-w-3xl mx-auto pt-1 font-normal ${
                hasBgImage
                  ? "text-neutral-200 drop-shadow"
                  : "text-neutral-600 dark:text-neutral-300"
              }`}
            >
              We facilitate petroleum transactions, oil cargo off-takes, energy asset investments, and strategic trading partnerships across Ghana and West Africa.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap flex-row gap-3 pt-1 justify-center hero-fade-in">
            <Button
              size="lg"
              className={`gap-2.5 text-xs sm:text-sm font-bold shadow-md transition-all min-h-[44px] px-5 sm:px-6 py-2.5 ${
                hasBgImage
                  ? "bg-white text-neutral-950 hover:bg-neutral-100 hover:-translate-y-0.5 active:translate-y-0"
                  : "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 hover:-translate-y-0.5 active:translate-y-0"
              }`}
              onClick={onExploreTracks}
            >
              <span>Explore Strategic Tracks</span>
              <Layers className="w-4 h-4" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className={`gap-2.5 text-xs sm:text-sm font-semibold transition-all min-h-[44px] px-5 sm:px-6 py-2.5 ${
                hasBgImage
                  ? "bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0"
                  : "border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 hover:-translate-y-0.5 active:translate-y-0"
              }`}
              onClick={onOpenQuoteModal}
            >
              <span>Request Trade Quote</span>
              <TrendingUp className="w-4 h-4 text-white dark:text-white" />
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className={`gap-2.5 text-xs sm:text-sm font-semibold transition-all min-h-[44px] px-4 py-2.5 ${
                hasBgImage
                  ? "text-neutral-200 hover:text-white hover:bg-white/10"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
              }`}
              onClick={onContactDesk}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Desk</span>
            </Button>
          </div>

          {/* 4 Opportunity Pillars Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 w-full max-w-4xl pt-5 sm:pt-6 border-t border-white/15 dark:border-zinc-800/80 hero-fade-in">
            {[
              { title: "Energy Supply", desc: "Refined fuels & feedstock supply", icon: Fuel },
              { title: "Petroleum Deals", desc: "Cargo off-take & trade structures", icon: Briefcase },
              { title: "Investment Deals", desc: "Infrastructure & terminal capital", icon: Building2 },
              { title: "Strategic Partnerships", desc: "Downstream joint ventures", icon: Handshake },
            ].map((opp, idx) => {
              const IconComp = opp.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 group hover:-translate-y-0.5 ${
                    hasBgImage
                      ? "bg-white/[0.08] dark:bg-white/[0.05] border-white/20 hover:border-white/40 backdrop-blur-xl text-white shadow-sm hover:shadow-md hover:bg-white/[0.12]"
                      : "bg-white dark:bg-zinc-900/90 border-zinc-200/80 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm hover:shadow-md hover:border-zinc-400 dark:hover:border-zinc-600"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                      hasBgImage 
                        ? "bg-white/15 text-white" 
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                    }`}>
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold leading-tight">{opp.title}</span>
                  </div>
                  <p
                    className={`text-[11px] leading-relaxed pl-8 ${
                      hasBgImage ? "text-neutral-200/90" : "text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    {opp.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Subtle Image Slide Navigation Dots */}
          {imageList.length > 1 && (
            <div className="flex items-center gap-1.5 pt-1">
              {imageList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setBgImageIndex(idx)}
                  aria-label={`Go to slide image ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    bgImageIndex === idx
                      ? "w-6 bg-white shadow-sm"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export { Hero };

