import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

const routes = ['', 'about', 'services', 'insights', 'blog', 'training', 'contact', 'blog/crude-oil-volatility'];
const policy = readFileSync('dist/.htaccess', 'utf8');
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
for (const route of routes) {
  test(`deployable metadata and assets: /${route}`, () => {
    const html = readFileSync(`dist/${route || 'index'}.html`, 'utf8');
    const canonical = `https://thedevelopersenergy.com/${route}`;
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`));
    assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
    assert.ok(html.includes(`property="og:url" content="${canonical}"`));
    for (const [, asset] of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
      assert.ok(existsSync(`dist${asset}`), asset);
    }
    for (const [, attrs, code] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
      if (/\bsrc=/.test(attrs) || !code.trim()) continue;
      const hash = createHash('sha256').update(code).digest('base64');
      assert.ok(policy.includes(`'sha256-${hash}'`), 'inline script must match deployed CSP');
      if (attrs.includes('application/ld+json')) assert.doesNotThrow(() => JSON.parse(code));
    }
  });
}
test('article metadata differs from listing; sitemap has no fragments', () => {
  const article = readFileSync('dist/blog/crude-oil-volatility.html', 'utf8');
  assert.match(article, /<title>Crude Oil Volatility:/);
  assert.match(article, /property="og:type" content="article"/);
  assert.doesNotMatch(sitemap, /#/);
});
test('production protections and route mappings are emitted', () => {
  assert.match(policy, /script-src 'self' 'sha256-/);
  assert.match(policy, /frame-ancestors 'none'/);
  assert.match(policy, /X-Content-Type-Options "nosniff"/);
  assert.match(policy, /Options -Indexes/);
  assert.match(policy, /blog\/crude-oil-volatility/);
  assert.match(policy, /Require all denied/);
  assert.match(policy, /connect-src 'self' https:\/\/api\.web3forms\.com/);
  assert.match(policy, /frame-src https:\/\/hcaptcha\.com https:\/\/\*\.hcaptcha\.com/);
});
