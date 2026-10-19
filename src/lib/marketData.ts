export interface PublishedQuote {
  symbol: string; price: number; unit: string; date: string;
  changePct: number | null; source: string; sourceUrl: string;
}
const DAY = 86_400_000;
export const MARKET_REFRESH_MS = 60 * 60 * 1000;
export function validDate(date: string, now = Date.now()): boolean {
  const time = Date.parse(`${date}T00:00:00Z`);
  return /^\d{4}-\d{2}-\d{2}$/.test(date) && Number.isFinite(time)
    && new Date(time).toISOString().slice(0, 10) === date && time <= now;
}
export function isStale(date: string, now = Date.now()): boolean {
  return !validDate(date, now) || now - Date.parse(`${date}T00:00:00Z`) > 7 * DAY;
}
export function parseOilCsv(csv: string, symbol: 'BRENT' | 'WTI', now = Date.now()): PublishedQuote {
  const lines = csv.trim().replace(/^\uFEFF/, '').split(/\r?\n/);
  if (lines.shift() !== 'Date,Price') throw new Error('Unexpected oil data format');
  const rows = new Map<string, number>();
  for (const line of lines) {
    const [date, raw, extra] = line.split(',');
    const price = Number(raw);
    if (extra !== undefined || !validDate(date, now) || !raw?.trim() || !Number.isFinite(price)) continue;
    rows.set(date, price);
  }
  const ordered = [...rows].sort(([a], [b]) => b.localeCompare(a));
  if (!ordered.length) throw new Error('No valid observations');
  const [date, price] = ordered[0];
  const previous = ordered[1]?.[1];
  return { symbol, price, date, unit: 'USD/bbl',
    changePct: previous && previous > 0 ? (price - previous) / previous * 100 : null,
    source: 'U.S. EIA via DataHub', sourceUrl: 'https://datahub.io/core/oil-prices' };
}
export function parseFx(data: unknown, now = Date.now()): PublishedQuote {
  const value = data as { date?: string; base?: string; quote?: string; rate?: number } | null;
  if (!value || value.base !== 'USD' || value.quote !== 'GHS' || typeof value.rate !== 'number'
    || !Number.isFinite(value.rate) || value.rate <= 0 || !value.date || !validDate(value.date, now)) {
    throw new Error('Invalid USD/GHS observation');
  }
  return { symbol: 'USD/GHS', price: value.rate, date: value.date, unit: 'GHS', changePct: null,
    source: 'Frankfurter', sourceUrl: 'https://frankfurter.dev/' };
}
export async function loadMarketQuotes(request: typeof fetch = fetch): Promise<(PublishedQuote | null)[]> {
  const sources = [
    ['https://raw.githubusercontent.com/datasets/oil-prices/main/data/brent-daily.csv', 'BRENT'],
    ['https://raw.githubusercontent.com/datasets/oil-prices/main/data/wti-daily.csv', 'WTI'],
    ['https://api.frankfurter.dev/v2/rate/USD/GHS', 'USD/GHS'],
  ] as const;
  return Promise.all(sources.map(async ([url, symbol]) => {
    try {
      const response = await request(url, { signal: AbortSignal.timeout(12000), credentials: 'omit' });
      if (!response.ok) throw new Error('Provider unavailable');
      return symbol === 'USD/GHS' ? parseFx(await response.json()) : parseOilCsv(await response.text(), symbol);
    } catch { return null; }
  }));
}
