# Published market references

The ticker loads three free public feeds directly in the browser. No API keys,
backend, subscription or GitHub scheduled job is required.

- Brent and WTI: daily U.S. EIA spot observations from the maintained DataHub
  `datasets/oil-prices` CSV mirror. Original series are RBRTE and RWTC, USD/barrel.
  https://datahub.io/core/oil-prices
  https://www.eia.gov/dnav/pet/hist/RBRTEd.htm
  https://www.eia.gov/dnav/pet/hist/RWTCd.htm
- USD/GHS: Frankfurter's blended daily reference rate, GHS per USD.
  https://frankfurter.dev/

These are delayed published observations, not exchange streaming prices, futures,
executable bids/offers, or Ghana dealer quotes. Oil publications and the mirror
may lag. The displayed date is the observation date, not the time of the HTTP
request. The percentage compares the last two published oil observations, which
may span weekends or holidays. FX percentage movement is not invented.

The ticker checks on page load and hourly while open. Manual refresh has a
one-minute cooldown. Each request times out after 12 seconds; a failed source
shows Unavailable independently. Observations over seven days old show Stale.
Invalid dates, future dates, missing prices and malformed responses are rejected.
No hardcoded fallback prices are presented as current. Gasoil 10ppm, Mogas 95 and
ARA–WAF freight require a commercial quote; these are not substituted with US
retail fuel prices. The separate calculator retains explicitly labelled example
assumptions and does not claim to use current Platts/Argus benchmarks.

Provider access is confined to the two required hosts/paths in the generated CSP.
Prices render as React text, never HTML. Sources receive ordinary anonymous HTTP
requests, without credentials. Maintain parsers in `src/lib/marketData.ts` and
presentation in `src/components/MarketTickerBar.tsx`. Run `npm test` after changes.
