import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseOilCsv, parseFx, isStale, loadMarketQuotes } from '../src/lib/marketData';
const now = Date.parse('2026-10-18T12:00:00Z');
test('sorts observations and computes change across publication gaps', () => {
  const quote = parseOilCsv('Date,Price\n2026-10-16,110\n2026-10-12,100\n2026-10-17,\n2026-10-19,999', 'BRENT', now);
  assert.equal(quote.price, 110); assert.equal(quote.changePct, 10); assert.equal(quote.date, '2026-10-16');
});
test('rejects malformed data and impossible dates', () => {
  assert.throws(() => parseOilCsv('<html>error</html>', 'WTI', now));
  assert.throws(() => parseOilCsv('Date,Price\n2026-02-30,50\n2026-10-15,NaN', 'WTI', now));
});
test('does not invent a percentage without a positive previous observation', () => {
  assert.equal(parseOilCsv('Date,Price\n2026-10-16,100', 'WTI', now).changePct, null);
  assert.equal(parseOilCsv('Date,Price\n2026-10-15,0\n2026-10-16,100', 'WTI', now).changePct, null);
});
test('accepts only the correct FX pair with a valid dated positive rate', () => {
  assert.equal(parseFx({ base:'USD', quote:'GHS', date:'2026-10-16', rate:11.5 }, now).price, 11.5);
  for (const value of [null, { base:'GHS', quote:'USD', date:'2026-10-16', rate:11.5 }, {base:'USD',quote:'GHS',date:'2026-10-20',rate:11.5}]) assert.throws(() => parseFx(value, now));
});
test('marks old observations stale independently of fetch time', () => {
  assert.equal(isStale('2026-10-01', now), true); assert.equal(isStale('2026-10-16', now), false);
});
test('provider failures leave unavailable slots without losing successful sources', async () => {
  const request = (async (url: string) => {
    if (url.includes('brent')) return new Response('Date,Price\n2026-10-14,100');
    if (url.includes('wti')) return new Response('unavailable', {status:503});
    throw new Error('offline');
  }) as typeof fetch;
  const result = await loadMarketQuotes(request);
  assert.equal(result[0]?.price, 100); assert.equal(result[1], null); assert.equal(result[2], null);
});
