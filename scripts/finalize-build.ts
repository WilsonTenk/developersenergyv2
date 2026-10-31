import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { TAB_SEO_DATA, getPageSeo } from '../src/utils/seo';
import type { PageTab } from '../src/types';

// Emit route-specific head tags for crawlers that do not execute JavaScript.
// The existing React UI and navigation are retained.
const origin = 'https://thedevelopersenergy.com';
// HTML parsers normalize line endings before CSP hashing; use LF on every host.
const template = (await readFile('dist/index.html', 'utf8')).replace(/\r\n?/g, '\n').replace(/[\t ]+$/gm, '');
const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const routes = (Object.keys(TAB_SEO_DATA) as PageTab[]).map(tab => ({ tab, slug: undefined as string | undefined }));
routes.push({ tab: 'blog', slug: 'crude-oil-volatility' });
const urls: string[] = [];
for (const { tab, slug } of routes) {
  const config = getPageSeo(tab, slug);
  const url = `${origin}/${config.canonicalPath}`;
  urls.push(url);
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(config.title)}</title>`);
  const values: Record<string, string> = {
    title: config.title, description: config.description, keywords: config.keywords,
    'og:title': config.title, 'og:description': config.description, 'og:url': url,
    'og:type': slug ? 'article' : 'website',
    'twitter:title': config.title, 'twitter:description': config.description, 'twitter:url': url,
    'og:image': config.ogImage || '', 'twitter:image': config.ogImage || '',
  };
  html = html.replace(/<meta (name|property)="([^"]+)" content="[^"]*"\s*\/>/g,
    (tag, attr, key) => key in values ? `<meta ${attr}="${key}" content="${escape(values[key])}" />` : tag);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`);
  const file = config.canonicalPath ? `dist/${config.canonicalPath}.html` : 'dist/index.html';
  if (slug) await mkdir('dist/blog', { recursive: true });
  await writeFile(file, html);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`);

// Hash the exact built inline scripts, avoiding unsafe-inline for JavaScript.
const hashes = [...template.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)]
  .filter(([, attrs, code]) => !/\bsrc=/.test(attrs) && code.trim())
  .map(([, , code]) => `'sha256-${createHash('sha256').update(code).digest('base64')}'`);
const policy = `default-src 'self'; script-src 'self' ${hashes.join(' ')} https://hcaptcha.com https://*.hcaptcha.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://hcaptcha.com https://*.hcaptcha.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https: data: blob:; connect-src 'self' https://api.web3forms.com https://raw.githubusercontent.com/datasets/oil-prices/main/data/ https://api.frankfurter.dev https://hcaptcha.com https://*.hcaptcha.com; frame-src https://hcaptcha.com https://*.hcaptcha.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'`;
const htaccess = await readFile('dist/.htaccess', 'utf8');
await writeFile('dist/.htaccess', htaccess.replace(/Header always set Content-Security-Policy "[^"]*"/, `Header always set Content-Security-Policy "${policy}"`));
console.log(`Generated metadata for ${urls.length} routes and a hashed script policy.`);
