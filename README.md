<div align="center">

# 🌍 Liberty Health & Wellbeing Foundation
### *A Healthier, Empowered and Sustainable Africa*

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-000000?style=for-the-badge&logo=vercel)](https://turbo.build/pack)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

**Liberty Health & Wellbeing Foundation** is dedicated to improving health and wellbeing, empowering individuals, and strengthening communities across Africa through sustainable medical outreach, preventative care, and grassroots health literacy initiatives.

[Explore Platform](https://libertyhealthwellbeing.org) • [Our Mission & Vision](https://libertyhealthwellbeing.org/mission-vision) • [About Us](https://libertyhealthwellbeing.org/about) • [Get in Touch](https://libertyhealthwellbeing.org/contact)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design System & Palette](#-design-system--palette)
- [Technology Stack](#-technology-stack)
- [Project Architecture](#-project-architecture)
- [SEO & Metadata Strategy](#-seo--metadata-strategy)
- [Getting Started](#-getting-started)
- [Production & Deployment](#-production--deployment)
- [Regional Operations](#-regional-operations)
- [License](#-license)

---

## 🌟 Overview

Across rural and underserved African communities, baseline health vulnerabilities can often be solved through reliable preventive knowledge, direct clinical outreach, and resilient community-governed health hubs. 

This repository houses the official web portal for **Liberty Health & Wellbeing Foundation**, built to deliver:
- **Pan-African Transparency**: Showcasing live focus areas, operational scope, and regional presence in Nigeria and Kenya.
- **Engagement & Collaboration**: Multi-pathway onboarding for field volunteers, clinical partners, logistics providers, and donors.
- **Accessible Design**: Premium high-contrast typography, zero-distraction flat button styling, and mobile-optimized responsiveness.

---

## 🚀 Key Features

- **Interactive Pan-African Hero Map**: High-precision SVG continental map featuring spotlight nodes, photo masking, and regional coordinates.
- **Three Strategic Pillars**:
  1. *Healthcare Missions*: Grassroots clinics, maternal-child health, and preventative screenings.
  2. *Community Wellbeing*: Clean water hubs, health literacy, and vocational hygiene academies.
  3. *Sustainable Infrastructure*: 100+ permanent community health hubs equipped with telemedicine capabilities.
- **Dynamic Pathway Accordion**: Interactive multi-tab selector with auto-advancing circular timer rings and synchronized visual showcases.
- **Illustrated Evolutionary Roadmap**: Custom SVG milestone illustrations with floating progress nodes connecting *The Genesis*, *Growth & Milestones*, and *The Future Direction*.
- **Direct Regional Coordination Desk**: Interactive contact dispatch routed through West Africa (Lagos) and East Africa (Nairobi) secretariats.
- **Mobile-First Experience**: Streamlined sliding drawer navigation with category accordions and quick action triggers.

---

## 🎨 Design System & Palette

The user interface implements custom Tailwind CSS tokens reflecting the warm earth tones and oceanic depths of the African landscape:

| Token | Hex Code | Purpose / Usage |
| :--- | :---: | :--- |
| **`primary`** | `#C18E3C` | Warm Brand Gold (CTA badges, key highlights, accents) |
| **`primary-hover`** | `#AA7B2F` | Interactive hover transitions |
| **`primary-light`** | `#FBF4E8` | Subtle gold background tints |
| **`navy`** | `#314D79` | Ocean Navy (primary headers, secondary CTAs) |
| **`navy-dark`** | `#1F3354` | Deep background contrast |
| **`navy-deep`** | `#132238` | Navigation and footer backdrop |
| **`blue`** | `#3662A4` | Secondary interactive accents |
| **`canvas`** | `#F7FAFD` | Neutral high-readability page background |
| **`dark`** | `#0F172A` | Slate body typography |

### Typography
- **Headings**: `Bricolage Grotesque` — human, bold, distinctive character.
- **Body**: `Plus Jakarta Sans` — ultra-legible, modern sans-serif optimized for all screen densities.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.4](https://nextjs.org/) (App Router, Turbopack, Partial Prefetching)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native `@theme` token configuration
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [next/font/google](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- **Type Safety**: [TypeScript 5](https://www.typescriptlang.org/)

---

## 📂 Project Architecture

```plaintext
liberty_health_wellbeing_foundation/
├── app/
│   ├── about/
│   │   └── page.tsx              # Founding story, leadership, values & milestones
│   ├── contact/
│   │   ├── ContactClient.tsx     # Client-side interactive dispatch form
│   │   └── page.tsx              # Server component with static SEO metadata
│   ├── mission-vision/
│   │   └── page.tsx              # Purpose, strategic pillars & operational commitments
│   ├── favicon.ico               # Brand browser icon
│   ├── globals.css               # Design system tokens, fonts & animations
│   ├── layout.tsx                # Root layout with JSON-LD Schema.org & meta tags
│   ├── page.tsx                  # Pan-African homepage & interactive pathways
│   ├── robots.ts                 # Dynamic robots.txt generation
│   └── sitemap.ts                # Dynamic sitemap.xml generation
├── components/
│   ├── AfricaHeroMap.tsx         # Vector continent illustration with spotlight pin
│   ├── CommunityCTA.tsx          # Reusable conversion & partnership banner
│   ├── Footer.tsx                # Corporate footer, newsletter, legal & social links
│   ├── HeroWaveDivider.tsx       # Smooth SVG wave transition dividers
│   ├── Navbar.tsx                # Responsive navigation bar & mobile drawer
│   └── StoryIllustrations.tsx    # Custom SVG milestone graphics & connector nodes
├── public/
│   ├── images/                   # Optimized photography assets & illustrations
│   └── Liberty health & wellbeing foundation white logo.png
├── next.config.ts                # Next.js build and image optimization settings
├── package.json                  # Dependencies and build scripts
├── tsconfig.json                 # TypeScript compiler options
└── README.md                     # Repository documentation
```

---

## 🔍 SEO & Metadata Strategy

The portal features full search engine optimization aligned with modern web standards:

- **JSON-LD Structured Data**: Embedded `Schema.org/NGO` entity schema declaring foundation name, logo, operational geography, and verified social footprints.
- **Dynamic `sitemap.xml`**: Automatically compiled via [`app/sitemap.ts`](file:///c:/Users/USER/Desktop/liberty_health_wellbeing_foundation/app/sitemap.ts) with priority scoring and change frequencies.
- **Dynamic `robots.txt`**: Served dynamically via [`app/robots.ts`](file:///c:/Users/USER/Desktop/liberty_health_wellbeing_foundation/app/robots.ts).
- **OpenGraph & Twitter Cards**: High-definition social share previews (`1200x630`) on every page.
- **Canonical URLs**: Prevent duplicate content indexing across all routes.
- **Semantic HTML**: Descriptive `aria-label` tags, structured heading hierarchies (`h1` → `h2` → `h3`), and accessible form controls.

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.18 or higher) and `npm` installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/emma-awosan/liberty_health_wellbeing_foundation.git
   cd liberty_health_wellbeing_foundation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Launch the local development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to inspect the live site.

---

## 📦 Production & Deployment

### Build Command

To validate TypeScript types and compile an optimized production bundle:

```bash
npm run build
```

### Local Production Preview

```bash
npm run start
```

### Deploying to Vercel

The application is pre-configured for one-click deployment on [Vercel](https://vercel.com/):

1. Import the repository into your Vercel Dashboard.
2. Next.js App Router defaults will be automatically detected.
3. Deploy!

---

## 🏛️ Regional Operations

### West Africa Secretariat (Nigeria Hub)
- **Location**: Plot 14 Victoria Island, Lagos, Nigeria
- **Email**: `lagos@libertyhealthwellbeing.org`
- **Phone**: `+234 (0) 800-LIBERTY`

### East Africa Operations (Kenya Hub)
- **Location**: Argwings Kodhek Rd, Kilimani, Nairobi, Kenya
- **Email**: `nairobi@libertyhealthwellbeing.org`
- **Phone**: `+254 20 790 4100`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — see the repository files for details.

---

<div align="center">
  <sub>Built with care for <strong>Liberty Health & Wellbeing Foundation</strong> • Advancing Healthcare Across Africa.</sub>
</div>
