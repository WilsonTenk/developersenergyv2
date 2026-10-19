import React, { useEffect, useRef, useState } from 'react';
import { Activity, RefreshCw, ChevronRight } from 'lucide-react';
import { isStale, loadMarketQuotes, MARKET_REFRESH_MS, PublishedQuote } from '../lib/marketData';

interface MarketTickerBarProps { onOpenCalculator: () => void; }

export const MarketTickerBar: React.FC<MarketTickerBarProps> = ({ onOpenCalculator }) => {
  const [quotes, setQuotes] = useState<(PublishedQuote | null)[]>([null, null, null]);
  const [loading, setLoading] = useState(true);
  const [cooldown, setCooldown] = useState(false);
  const busy = useRef(false);
  const mounted = useRef(false);
  const cooldownTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const refresh = async () => {
    if (busy.current) return;
    busy.current = true;
    setLoading(true);
    const result = await loadMarketQuotes();
    if (mounted.current) {
      setQuotes(result);
      setLoading(false);
      setCooldown(true);
      cooldownTimer.current = setTimeout(() => setCooldown(false), 60_000);
    }
    busy.current = false;
  };
  useEffect(() => {
    mounted.current = true;
    void refresh();
    const interval = setInterval(() => void refresh(), MARKET_REFRESH_MS);
    return () => { mounted.current = false; clearInterval(interval); clearTimeout(cooldownTimer.current); };
  }, []);

  return <section aria-label="Published energy market reference prices" className="bg-black border-b border-neutral-800 text-white px-4 py-3">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-4 gap-y-2">
      <div className="flex items-center gap-2 shrink-0">
        <Activity className="w-4 h-4 text-amber-400" />
        <span className="text-xs font-semibold">Daily references</span>
        <button onClick={() => void refresh()} disabled={loading || cooldown}
          aria-label="Refresh published prices" title={cooldown ? 'Refresh available after one minute' : 'Refresh published prices'}
          className="p-2 rounded text-neutral-300 hover:text-white disabled:opacity-50">
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>
      <div className="flex-1 min-w-0 overflow-x-auto py-1" aria-busy={loading}>
        <div className="flex gap-5 min-w-max">
          {['BRENT', 'WTI', 'USD/GHS'].map((symbol, index) => {
            const quote = quotes[index];
            return <div key={symbol} className="text-xs space-y-1">
              <div className="flex items-center gap-2">
                <strong>{symbol}</strong>
                {quote ? <>
                  <span className="font-mono">{quote.price.toFixed(2)} {quote.unit}</span>
                  {quote.changePct !== null && <span title="Change from previous published observation"
                    className={quote.changePct >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                    {quote.changePct >= 0 ? '+' : ''}{quote.changePct.toFixed(2)}%
                  </span>}
                </> : <span className="text-neutral-400">{loading ? 'Loading…' : 'Unavailable'}</span>}
              </div>
              {quote && <div className="text-[10px] text-neutral-300">
                <a className="underline hover:text-white" href={quote.sourceUrl} target="_blank" rel="noreferrer">{quote.source}</a>
                {' · '}<time dateTime={quote.date}>{quote.date}</time>
                {isStale(quote.date) && <span className="text-amber-400"> · Stale</span>}
              </div>}
            </div>;
          })}
        </div>
      </div>
      <button onClick={onOpenCalculator} className="hidden lg:flex items-center gap-1 text-xs text-neutral-300 hover:text-white">
        Calculate Cargo Value <ChevronRight className="w-3.5 h-3.5" />
      </button>
      <p className="basis-full text-[10px] text-neutral-400" role="status">
        Delayed published spot / FX references, not live trading quotes. Gasoil 10ppm, Mogas 95 & ARA–WAF freight: quote required.
      </p>
    </div>
  </section>;
};
