# Visual design maintenance

The reference-inspired design keeps the existing charcoal, white and gold palette.
All original copy, form handlers, route metadata and security settings are retained.

Edit `src/styles/design-system.css` for shared visual changes. The `:root` tokens
control content width, gutters, section spacing, card and button corners, colours
and shadows. The file is imported after the existing base stylesheet.

Components opt in through explicit `tde-*` classes:

- `tde-container`, `tde-page`: content width and section rhythm.
- `tde-button`, `tde-field`, `tde-panel`: reusable visual primitives.
- `tde-page-intro`, `tde-metrics`: internal-page introductions and statistics.
- `tde-hero`, `tde-about-preview`, `tde-service-card`, `tde-process`: homepage layout.
- `tde-header`, `tde-footer`: shared navigation and footer treatment.

Keep content in the existing data modules and page components. Do not put copy,
form logic or SEO metadata in CSS. No content is collapsed or removed by the new
design. Existing tabs, carousels and dialogs retain their behavior.

Before publishing: run lint, build and tests, then inspect all eight routes at
desktop and mobile widths, including the contact form, quote dialog, footer
message form, CAPTCHA and keyboard focus. The build regenerates CSP hashes and
route metadata. The Apache build and GitHub Pages build use different asset bases;
never copy the domain-root build directly to the GitHub project-path deployment.
