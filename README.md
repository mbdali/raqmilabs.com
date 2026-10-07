# Raqmi Labs — Corporate Website

Official corporate website and product showcase for **Raqmi Labs** (`https://raqmilabs.com`).

A lightning-fast, accessible, and responsive static website built with semantic HTML5, Tailwind CSS, self-hosted typography (**Geist** and **Cairo**), and local **Tabler Icons**. Designed for seamless edge deployment on Cloudflare Pages with zero external runtime dependencies.

---

## 🌟 Features & Highlights

- **Aesthetic Excellence & Dark Mode**: Modern SaaS design system with system/user preference dark mode toggle persisted across sessions via `localStorage`.
- **Zero External CDNs/Runtimes**: 100% self-hosted assets — self-hosted Geist WOFF2 fonts, local Cairo Arabic typography, and inline/vector Tabler SVGs.
- **Product Ecosystem Showcase**:
  - **Raqmi ERP**: Monochromatic Dark (`#0B0F14`) — Comprehensive enterprise management and compliance.
  - **Raqmi Queue**: Human Teal (`#14B8A6`) — Smart omni-channel customer journey & branch queue management.
  - **Raqmi Attendance**: Electric Blue (`#3B82F6`) — AI facial recognition and precision workforce sync.
  - **Raqmi Happiness**: Warm Amber (`#F59E0B`) — Real-time CSAT feedback kiosks and analytics.
- **Industry Solutions**: Tailored architectures for Government & Public Sector, Multi-branch Enterprises, and SMEs.
- **Accessibility & Focus Management (WCAG 2.1 AA)**: Keyboard-accessible mobile drawer with ARIA attributes and focus restoration upon close.
- **SEO & Social Share Ready**: Complete Open Graph (`og:*`) and Twitter Card metadata across all 14 pages, branded 1200x630 share banner, `sitemap.xml`, and `robots.txt`.
- **Direct Communication Protocols**: Native zero-runtime `mailto:`, `https://wa.me/`, and `tel:` action cards.

---

## 📁 Repository Structure

```
├── raqmilabs/                           # Deployable web root (Cloudflare Pages output)
│   ├── index.html                       # Homepage (Hero, Products, Solutions, CTA)
│   ├── about.html                       # About Raqmi Labs, Mission, Values & Milestones
│   ├── contact.html                     # Contact channels (Email, WhatsApp, Phone)
│   ├── 404.html                         # Branded 404 error page
│   ├── robots.txt                       # Crawler rules
│   ├── sitemap.xml                      # XML sitemap index
│   ├── favicon.ico                      # Site favicon
│   ├── products/
│   │   ├── index.html                   # Product suite catalog & feature matrix
│   │   ├── erp.html                     # Raqmi ERP product page
│   │   ├── queue.html                   # Raqmi Queue product page
│   │   ├── attendance.html              # Raqmi Attendance product page
│   │   └── happiness.html               # Raqmi Happiness product page
│   ├── solutions/
│   │   ├── index.html                   # Solutions overview
│   │   ├── government.html              # Government & Public Sector
│   │   ├── enterprise.html              # Enterprise & Multi-Branch
│   │   └── smes.html                    # SMEs & Rapid Deployment
│   ├── legal/
│   │   ├── privacy.html                 # Privacy policy
│   │   └── terms.html                   # Terms of service
│   └── assets/
│       ├── css/site.min.css             # Minified Tailwind CSS bundle (~56 KB)
│       ├── js/site.js                   # Mobile drawer, dark mode toggle & tabs
│       ├── fonts/                       # Self-hosted Geist & Cairo WOFF2 fonts
│       ├── images/                      # Vector brand marks, OG preview & chevron patterns
│       └── icons/                       # Curated Tabler vector SVGs
├── src/
│   └── input.css                        # Tailwind source directives & Geist font-face rules
├── docs/
│   └── plan.md                          # Implementation roadmap and specifications
├── scripts/                             # Font and icon asset generation scripts
├── package.json                         # Build scripts & devDependencies
└── tailwind.config.js                   # Brand color tokens & purge configuration
```

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm

### 2. Install Dependencies
```bash
npm install
```

### 3. Watch CSS during Development
```bash
npm run dev:css
```

### 4. Build Production CSS
```bash
npm run build:css
```

### 5. Local Preview
```bash
npm run preview
# Preview server runs on http://localhost:3000
```

---

## ☁️ Deployment (Cloudflare Pages)

1. Connect your repository to **Cloudflare Pages**.
2. Configure build settings:
   - **Framework preset**: None
   - **Build command**: `npm run build:css`
   - **Build output directory**: `raqmilabs`
   - **Node.js version**: `>= 18`
3. Deploy! Custom domain `https://raqmilabs.com` will serve the edge-cached static assets with automated HTTPS.

---

## 📄 License & Attribution

Copyright © 2026 Raqmi Labs. All rights reserved.
Typography by Vercel (Geist) and Google (Cairo). Icons by Tabler Icons.
