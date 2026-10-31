# The Developers Energy

Static React/Vite website, deployed to Apache/cPanel from `dist/`.

## Development and checks

Use Node.js 22 or newer and npm. `package-lock.json` is the authoritative lockfile.
No Gemini API key or backend credentials are required by this website.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm test
npm audit
```

The build emits metadata for each public route, a sitemap, and a Content Security
Policy with hashes for the exact inline scripts. Rebuild after changing scripts;
do not edit generated HTML or the generated policy manually.

## Deployment

Back up the current `public_html` before deploying. Build and test a staging copy,
then deploy the complete `dist/` directory **including `.htaccess`**. The cPanel
deployment file copies these files; it does not run npm or rebuild the site.
Keep source files, `.git`, environment files and `node_modules` outside the web root.
Preserve hosting-managed files such as `.well-known` during deployment.

This build targets `https://thedevelopersenergy.com` at the domain root.
Apache/LiteSpeed must honor `.htaccess`, `mod_rewrite` and `mod_headers`, and permit
`Options -Indexes`. Verify those capabilities on staging to avoid a server 500.
HTTPS redirects assume TLS terminates at cPanel. If using a reverse proxy,
configure HTTPS detection at the trusted server/proxy layer before enabling this
rule. HSTS uses a one-day duration without subdomain or preload commitments.

Verify HTTP redirects to HTTPS, eight sitemap routes return 200, nested article
assets load, and response headers contain CSP, nosniff and frame protection.
The Vite preview server does not execute `.htaccess` and is not a production server.
Restore the previous backed-up `dist/` to roll back.

## Receiving form submissions

The eight active contact, quote, newsletter and footer-message forms send to
Web3Forms using the owner's public access key in `src/lib/web3forms.ts`.
This identifier is designed for browser use; never substitute an inbox password.
The destination inbox is managed in Web3Forms, not in the site's code.

Before deployment, enable **hCaptcha** under **Block Spam** in the Web3Forms form
dashboard. The site uses Web3Forms' free shared hCaptcha site key. Browser checks
alone cannot enforce CAPTCHA against direct API calls; dashboard enforcement is
required. CSP allows only the Web3Forms API and hCaptcha hosts needed by the forms.

After deployment, manually submit one clearly labelled test enquiry, solve the
CAPTCHA and verify receipt in the intended inbox (including spam). Automated tests
mock the API; they do not prove actual email delivery. Monitor the free plan's
250 monthly submissions. Quota/network/provider errors preserve entered values
and offer a direct email link. Newsletter submissions are requests for the team
to process, not automatic enrolment in an email campaign service.

## Remaining functional and hosting work

- The unused training payment component simulates payment and generates a receipt.
  Training currently displays a coming-soon page. Do not enable that component
  until payment amounts and provider webhooks are verified by a real backend.
- Page content still renders in JavaScript. Initial route metadata is generated,
  but full server rendering/prerendering is a separate improvement.
- Review hosting updates, account MFA, backups, access logs and branch protections
  in their respective consoles. Source checks cannot verify them.
- Review future external scripts, embeds or API integrations against the CSP
  before deployment. Do not add script `unsafe-inline` or `unsafe-eval`.

References: [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
and [MDN CSP implementation](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/CSP).
