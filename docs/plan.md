# Raqmi Labs Corporate Website — Practical v1 Plan

| Metadata | Details |
|---|---|
| **Document Version** | **v1.3 (Font & Iconography Updated)** |
| **Status** | Approved for Implementation |
| **Approach** | Pure Static Site • Zero Production Runtime • High Brand Polish |
| **Hosting Target** | **Cloudflare Pages** (Build output directory: `raqmilabs/`) |
| **Production Domain**| `https://raqmilabs.com` |

---

## 1. Objective

Build a polished, fast, responsive corporate website that clearly presents Raqmi Labs, its products, services, and contact channels.

The v1 release prioritizes **brand quality, aesthetic excellence, clarity, speed, and low maintenance overhead**. Custom backend infrastructure, server databases, and complex APIs are intentionally avoided for this initial release.

---

## 2. Directory Structure & Page Inventory

```
D:\Projects\RaqmiLabs\
├── package.json                         # Local build tooling & scripts
├── tailwind.config.js                   # Brand theme tokens & content purge paths
├── docs\
│   └── plan.md                          # This practical roadmap (v1.3)
├── src\
│   └── input.css                        # Tailwind directives, Geist font definitions & custom utilities
├── Raqmi_Labs_Brand_Concepts\           # Master brand assets & logos
└── raqmilabs\                           # <-- DEPLOYABLE STATIC ROOT (Cloudflare Pages output)
    ├── index.html                       # Home: Hero, Products overview, Solutions, CTA
    ├── about.html                       # About: Mission, vision, core values & timeline
    ├── contact.html                     # Contact: Direct email, WhatsApp, phone & inquiry options
    ├── 404.html                         # Branded 404 error page
    ├── robots.txt                       # Search engine crawler instructions
    ├── sitemap.xml                      # Search engine index
    ├── favicon.ico                      # Site favicon
    ├── products\
    │   ├── index.html                   # Products suite catalog & matrix
    │   ├── erp.html                     # Raqmi ERP
    │   ├── queue.html                   # Raqmi Queue
    │   ├── attendance.html              # Raqmi Attendance
    │   └── happiness.html               # Raqmi Happiness
    ├── solutions\
    │   ├── index.html                   # Solutions overview
    │   ├── government.html              # Government & Public Sector
    │   ├── enterprise.html              # Enterprise & Multi-Branch
    │   └── smes.html                    # SMEs & Fast Deployment
    ├── legal\
    │   ├── privacy.html                 # Privacy Policy (Pending final legal sign-off)
    │   └── terms.html                   # Terms of Service (Pending final legal sign-off)
    └── assets\
        ├── css\
        │   └── site.min.css             # Compiled, minified Tailwind CSS
        ├── js\
        │   └── site.js                  # Vanilla JS (Mobile nav with focus restore, tabs, accordions)
        ├── fonts\
        │   ├── geist\                   # Self-hosted Geist WOFF2 files (Primary Latin)
        │   └── cairo\                   # Self-hosted Cairo WOFF2 files (Arabic / RTL)
        ├── images\
        │   ├── brand\                   # Vector logos, app icons, OG share preview
        │   ├── products\                # Product UI mockups & illustrations
        │   └── backgrounds\             # Chevron patterns & mesh gradients
        └── icons\                       # Tabler SVG icons & product badges
```

---

## 3. Technology Stack & Build Workflow

* **Frontend**: Semantic HTML5 + Tailwind CSS + Vanilla JavaScript (ES6+).
* **Typography**:
  * **Primary Font**: **Geist** (`300`, `400`, `500`, `600`, `700`, `800`) — ultra-modern, geometric SaaS typeface with crisp rendering.
  * **Arabic Font**: **Cairo** (`400`, `600`, `700`) — contemporary, highly legible Arabic sans-serif for RTL content.
  * Native system fallbacks: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
* **Iconography**:
  * **Tabler Icons** — clean, consistent 24×24 stroke-based vector SVGs used across all features, navigation glyphs, actions, and service cards.
* **Hosting Target**: **Cloudflare Pages** (Build output directory: `raqmilabs/` with automated SSL, global CDN edge, and zero server maintenance).
* **Zero Runtime Dependencies**: No Node.js runtime, no PHP, no database, and no third-party tracking scripts loaded in the browser. *(Standard outgoing hyperlinks such as WhatsApp click-to-chat remain standard external navigation links).*

### NPM Build Scripts (`package.json`)
```json
{
  "name": "raqmilabs-corporate-site",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev:css": "tailwindcss -i ./src/input.css -o ./raqmilabs/assets/css/site.min.css --watch",
    "build:css": "tailwindcss -i ./src/input.css -o ./raqmilabs/assets/css/site.min.css --minify",
    "preview": "npx serve ./raqmilabs",
    "build": "npm run build:css"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.17",
    "serve": "^14.2.4"
  }
}
```

### Shared Header & Footer Consistency Strategy
To maintain absolute consistency across all 14 plain HTML pages without runtime frameworks:
* **Standard Component Markup**: The master Header and Footer use standardized, documented markup enclosed in explicit HTML comment blocks:
  ```html
  <!-- ==================== GLOBAL HEADER START ==================== -->
  <header class="site-header ..."> ... </header>
  <!-- ==================== GLOBAL HEADER END ==================== -->
  ```
* Active page navigation links are denoted with a clean `aria-current="page"` and active color token.

---

## 4. Brand & Design Direction

Built directly from the approved Raqmi Labs visual identity:

* **Primary Palette**:
  * **Charcoal (`#0B0F14`) / Slate**: Dark base for footers, text, high-contrast accents & **Raqmi ERP** (Monochromatic Dark).
  * **Off-White (`#F8FAFC`) / White (`#FFFFFF`)**: Clean, modern canvas surfaces.
  * **Electric Blue (`#3B82F6`)**: Precision workforce sync & **Raqmi Attendance**.
  * **Teal (`#14B8A6`)**: Human balance, flow & **Raqmi Queue**.
  * **Warm Amber (`#F59E0B`)**: Energy, satisfaction & **Raqmi Happiness**.
* **Visual Identity**:
  * Clean SaaS-style card layouts with subtle borders and shadows.
  * Triple-chevron vector motif representing momentum and progress.
  * Crisp typography (**Geist** for English, **Cairo** for Arabic) with clear visual hierarchy and generous spacing.
  * Consistent **Tabler Icons** stroke styling (2px stroke width, rounded caps/joins).
  * Fully responsive on mobile, tablet, and desktop.

---

## 5. Content Strategy

* **Clarity First**: Clear explanation of Raqmi Labs' modular software suite and IT capabilities.
* **Product Profiles**: Distinct value propositions for ERP, Queue, Attendance, and Happiness.
* **Solutions**: Clear alignment with Government, Enterprise, and SME use cases.
* **Honest, Defensible Copy**: No unverified statistics, fake client logos, or arbitrary uptime guarantees. Focus on real architecture, capabilities, and business benefits.

---

## 6. Contact Channels (Zero-Runtime-Dependency v1)

Native, direct contact protocols:

* **Direct Email Action**: `mailto:info@raqmilabs.com?subject=Inquiry%20regarding%20Raqmi%20Labs%20Products` with pre-filled subject and body guidance.
* **Direct WhatsApp Action**: `https://wa.me/[verified_number]?text=Hello%20Raqmi%20Labs%2C%20I%20would%20like%20more%20information%20about...` (click-to-chat).
* **Direct Phone Action**: `tel:[verified_number]` for one-tap calling from mobile devices.

---

## 7. SEO & Accessibility Fundamentals

### SEO Baseline
* Unique, descriptive `<title>` and `<meta name="description">` on every page.
* Branded Open Graph preview image and social metadata.
* Canonical `<link rel="canonical">` on every page pointing to `https://raqmilabs.com/...`.
* Clean `sitemap.xml` and `robots.txt`.
* Branded favicon.

### Accessibility Fundamentals (WCAG 2.1 AA Target)
* Meaningful `alt` text on images; decorative Tabler icons marked `aria-hidden="true"`.
* Logical heading structure (single `<h1>` per page, sequential `<h2>` and `<h3>`).
* **Accessible Mobile Navigation**:
  * `aria-expanded` and `aria-controls` on the toggle button.
  * `Escape` key closes the mobile drawer immediately.
  * **Focus Restoration**: Keyboard focus automatically returns to the hamburger toggle button when the menu closes.
* Readable color contrast meeting standard contrast ratios.

---

## 8. Performance Targets

* **Self-Hosted Assets**: Self-hosted Geist WOFF2 fonts and local Tabler SVGs. Zero external CDN calls blocking initial paint.
* **Fast Loading**: Single minified CSS stylesheet (< 35KB) generated by Tailwind CLI.
* **Image Optimization**: WebP format with native `loading="lazy"` and explicit `width`/`height` attributes to prevent layout shift (CLS).
* **Minimal JavaScript**: Lightweight Vanilla JS for mobile nav drawer, feature tabs, and accordions.

---

## 9. Delivery Phases

### Phase 1 — Foundation
* Initialize project structure and `package.json` with Tailwind CLI and preview tools.
* Export and optimize brand vector SVGs (logos, badges, chevrons) and bundle Tabler icon SVGs.
* Bundle self-hosted **Geist** (and **Cairo** for Arabic) WOFF2 fonts in `/assets/fonts/`.
* Configure `src/input.css` with Geist font-family and compile initial `site.min.css`.
* Build master header/navigation (with Tabler icons and focus restoration) and footer components.

### Phase 2 — Core Pages
* Build flagship Homepage (`index.html`) with rich SaaS aesthetics and Tabler icons.
* Build About (`about.html`) and Contact (`contact.html`) pages.
* Build Product suite (`products/index.html`, `erp.html`, `queue.html`, `attendance.html`, `happiness.html`).
* Build Solutions suite (`solutions/index.html`, `government.html`, `enterprise.html`, `smes.html`).
* Build 404 page (`404.html`) and Legal pages (`privacy.html`, `terms.html`).

### Phase 3 — Polish, SEO & Assets
* Add complete SEO metadata, Open Graph preview image, `sitemap.xml`, and `robots.txt`.
* Wire responsive Vanilla JS interactions (mobile drawer, tab switchers, FAQ dropdowns).
* Wire direct contact actions (Email, WhatsApp, Phone).

### Phase 4 — Testing & Launch
* Test responsive layouts across mobile, tablet, and desktop.
* Validate all internal and external links.
* Check contrast, focus states, and keyboard navigation.
* Verify fast loading and clean console.
* Deploy to Cloudflare Pages (Output directory: `raqmilabs/`).

---

## 10. Launch Sign-Off & Acceptance Criteria

### Pre-Launch Implementation Reminders & Business Approval Checklist
- [ ] Replace all `[verified_number]` placeholders with confirmed company phone/WhatsApp numbers before launch.
- [ ] Confirm `https://raqmilabs.com` production domain for all canonical tags and `sitemap.xml`.
- [ ] Ensure Cloudflare Pages project is configured with `raqmilabs/` as the build output directory.
- [ ] Final business/legal review and sign-off for Privacy Policy and Terms of Service texts.
- [ ] Registered physical office address verified.

### Technical Acceptance Criteria
- [ ] All 14 pages and 404 page are built and fully responsive.
- [ ] Visual aesthetics match the Raqmi Labs brand identity, **Geist** typography, and **Tabler** iconography.
- [ ] Tailwind CSS compiles to a single minified `assets/css/site.min.css`.
- [ ] Mobile navigation supports keyboard accessibility and focus restoration.
- [ ] Direct contact links (Email, WhatsApp, Phone) trigger correct protocols.
- [ ] SEO metadata, canonical links, `sitemap.xml`, and `robots.txt` are active.
- [ ] Zero external runtime dependencies or CDNs in production.
- [ ] Zero console errors and zero broken links.

---

## 11. Future Enhancements (Post-v1)

* Arabic (RTL) localized version with **Cairo** typography.
* Custom self-hosted contact API or CRM integration.
* Analytics integration and cookie banner (if analytics cookies are introduced).
* Case studies and blog section.
