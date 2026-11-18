<div align="center">

# 🌍 Liberty Health & Wellbeing Foundation
### *Better health. Stronger communities. Brighter futures.*

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

**Liberty Health & Wellbeing Foundation** is a registered Nigerian nonprofit organisation (**Incorporated Trustees, CAC Registration No. 9469157 · Registered 7 April 2026 · TIN: 2623366408281**) advancing preventive health, mental wellbeing, addiction awareness, health education, and equitable healthcare access for underserved communities.

[Home](https://libertyhealthwellbeing.org) • [About Us](https://libertyhealthwellbeing.org/about) • [Meet the Team](https://libertyhealthwellbeing.org/team) • [Partners & Sponsors](https://libertyhealthwellbeing.org/partners) • [Media & Gallery](https://libertyhealthwellbeing.org/media) • [Mission & Vision](https://libertyhealthwellbeing.org/mission-vision) • [Opportunities](https://libertyhealthwellbeing.org/opportunities) • [Donate](https://libertyhealthwellbeing.org/donate) • [Contact](https://libertyhealthwellbeing.org/contact)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Statutory Registration & Governance](#-statutory-registration--governance)
- [Key Platform Features](#-key-platform-features)
- [Strategic Focus Areas](#-strategic-focus-areas)
- [Design System & Architecture](#-design-system--architecture)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [SEO & Structured Data](#-seo--structured-data)
- [Getting Started](#-getting-started)
- [Production & Deployment](#-production--deployment)
- [Official Offices & Correspondence](#-official-offices--correspondence)
- [License](#-license)

---

## 🌟 Overview

**Liberty Health & Wellbeing Foundation** works across healthcare awareness, community outreach, professional collaboration, and policy advocacy to address preventable health challenges and health inequalities in Nigeria and across global health partnerships.

This repository houses the official web platform for the Foundation, engineered with an **architectural editorial layout** featuring hairline border matrices, numbered ledgers, interactive scroll-stack and swipe-deck showcases, and zero-layout-shift scroll reveal animations across mobile and desktop viewports.

---

## 🏛️ Statutory Registration & Governance

- **Legal Status**: Registered Incorporated Trustees under Nigerian Law
- **Corporate Affairs Commission (CAC) Reg. No.**: `9469157`
- **Date of Incorporation**: `7 April 2026`
- **Tax Identification Number (TIN)**: `2623366408281`
- **Founder & Chairman**: Dr. Oluwasegun E. Awosan (`MBBS, MSc, CMI Level 7`)

---

## 🚀 Key Platform Features

- **Architectural Editorial UI**: Built around crisp hairline border grids (`border-t border-l border-slate-200`), numbered typographic ledgers (`01`–`07`), and high-contrast solid navy (`#132238`) hero headers with SVG wave transitions.
- **Interactive Team Showcase (`/team`)**: Dual-mode **Sticky Scroll-Stack** and **Interactive Swipe / Card-Stack Deck** presenting the Founder & Chairman, Governance & Engagement, Medical & Clinical Department, Finance, Editorial, Communications, and International Ambassadors.
- **Interactive Partners & Sponsors Showcase (`/partners`)**: Dual-mode **Swipe Deck & Scroll-Stack Toggle** for confirmed strategic partners (*WuraCares Mother and Child Initiative*, *60 Seconds With Doc*, *Titan Sales*, and *Balyson Medical Initiative*), prospective collaborations (*Marlix Healthcare Ltd*), and the **Founding Sponsors Programme**.
- **Zero-Layout-Shift Scroll Reveal System**: Lightweight `IntersectionObserver` + `MutationObserver` (`components/ScrollRevealObserver.tsx`) that animates vertical `translateY` and `opacity` only—preserving `position: sticky` stacks, preventing horizontal overflow on mobile screens, and respecting `prefers-reduced-motion: reduce`.
- **Interactive Engagement & Support Workflows**:
  - **Volunteer Registration Form** (`/opportunities`) with 6 structured volunteer tracks.
  - **Donor Enquiry Form** (`/donate`) & **Sponsor Enquiry Form** (`/partners`) for institutional and individual supporters while Nigerian NGO corporate banking activation is finalised.
  - **Direct Secretariat Dispatch** (`/contact`) with query-parameter pre-selection (`?type=partner`, `?type=volunteer`, `?type=donate`).

---

## 🎯 Strategic Focus Areas

The Foundation operates across **7 Core Focus Areas**:

1. **Mental Health & Wellbeing** — Promoting mental health awareness, improving health literacy, challenging stigma, and encouraging access to appropriate support.
2. **Addiction & Gambling Awareness** — Raising awareness of substance misuse, alcohol-related harm, gambling addiction, and behavioural dependencies.
3. **Preventive Healthcare & Health Access** — Promoting disease prevention, health education, early detection, screening awareness, and equitable healthcare access.
4. **Women’s, Maternal & Child Health** — Supporting education, awareness, and community initiatives focused on maternal wellbeing, child health, and family outcomes.
5. **Health Information & Community Resources** — Developing accessible, evidence-informed health education materials and public guidance.
6. **Research, Policy & Advocacy** — Supporting public health research, policy engagement, and evidence-based advocacy.
7. **Global Health & Partnerships** — Building collaborations across Nigeria, the United Kingdom, and international health networks.

---

## 🎨 Design System & Architecture

### Brand Color Tokens (`app/globals.css`)

| Token | Hex Code | Purpose / Usage |
| :--- | :---: | :--- |
| **`primary`** | `#C18E3C` | Warm Brand Gold (primary buttons with white text, index numbers, key accents) |
| **`navy`** | `#314D79` | Institutional Navy (primary headings, architectural top bars, structural borders) |
| **`navy-dark`** | `#1F3354` | Deep structural contrast |
| **`navy-deep`** | `#132238` | Solid hero headers and corporate footer background |
| **`blue`** | `#3662A4` | Secondary accent highlights |
| **`canvas`** | `#F7FAFD` | High-readability page canvas |
| **`dark`** | `#0F172A` | Primary body typography |

### Typography
- **Headings**: `Bricolage Grotesque` — bold, authoritative editorial character.
- **Body**: `Plus Jakarta Sans` — clean, highly legible geometric sans-serif across mobile and desktop screens.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```plaintext
liberty_health_wellbeing_foundation/
├── app/
│   ├── about/
│   │   └── page.tsx                       # Institutional overview, 8 core values, leadership & team preview
│   ├── contact/
│   │   ├── ContactClient.tsx              # Architectural directory ledger, secretariat form & office matrix
│   │   └── page.tsx                       # Contact page metadata & server wrapper
│   ├── donate/
│   │   └── page.tsx                       # Donation impact areas, banking status & donor enquiry workflow
│   ├── mission-vision/
│   │   └── page.tsx                       # Purpose, vision, mission, 7 focus areas & 8 core values
│   ├── opportunities/
│   │   └── page.tsx                       # 6 volunteer tracks, future openings & volunteer registration
│   ├── partners/
│   │   └── page.tsx                       # Institutional partners, founding sponsors & partnership enquiry
│   ├── team/
│   │   └── page.tsx                       # Multidisciplinary leadership & departmental directory
│   ├── favicon.ico                        # Browser icon
│   ├── globals.css                        # Tailwind v4 @theme tokens & zero-layout-shift scroll reveal CSS
│   ├── layout.tsx                         # Root layout with JSON-LD Schema.org, Navbar, Footer & ScrollRevealObserver
│   ├── page.tsx                           # Homepage with Africa Hero Map, 7 focus areas & engagement matrix
│   ├── robots.ts                          # Dynamic robots.txt route
│   └── sitemap.ts                         # Dynamic sitemap.xml route covering all 8 pages
├── components/
│   ├── AfricaHeroMap.tsx                  # Vector continent map with spotlight coordinates
│   ├── CommunityCTA.tsx                   # Reusable partnership & engagement call-to-action banner
│   ├── DonorEnquiryForm.tsx               # Interactive donor registration & support form
│   ├── Footer.tsx                         # Institutional footer with statutory details, links & offices
│   ├── HeroWaveDivider.tsx                # Responsive SVG wave section divider
│   ├── Navbar.tsx                         # Sticky navigation bar with desktop dropdowns & mobile drawer
│   ├── PartnersInteractiveShowcase.tsx    # Interactive Swipe Deck & Sticky Scroll-Stack for Partners/Sponsors
│   ├── ScrollRevealObserver.tsx           # Zero-layout-shift IntersectionObserver for mobile & web scroll reveals
│   ├── SponsorEnquiryForm.tsx             # Interactive corporate/institutional sponsorship form
│   ├── StoryIllustrations.tsx             # Custom SVG illustrations
│   ├── TeamInteractiveShowcase.tsx        # Interactive Sticky Scroll-Stack & Swipe Deck for Leadership/Team
│   └── VolunteerRegistrationForm.tsx      # Interactive volunteer application form
├── public/
│   ├── images/                            # Leadership portraits, partner logos & photography assets
│   └── Liberty health & wellbeing foundation white logo.png
├── next.config.ts                         # Next.js configuration
├── package.json                           # Project dependencies & scripts
├── tsconfig.json                          # TypeScript configuration
└── README.md                              # Project documentation
```

---

## 🔍 SEO & Structured Data

- **JSON-LD `Schema.org/NGO`**: Embedded in [`app/layout.tsx`](file:///c:/Users/USER/Desktop/liberty_health_wellbeing_foundation/app/layout.tsx) with official CAC registration (`9469157`), TIN (`2623366408281`), incorporation date (`2026-04-07`), Abuja and Sokoto postal addresses, and core focus areas.
- **Dynamic Sitemap & Robots**: Generated via [`app/sitemap.ts`](file:///c:/Users/USER/Desktop/liberty_health_wellbeing_foundation/app/sitemap.ts) and [`app/robots.ts`](file:///c:/Users/USER/Desktop/liberty_health_wellbeing_foundation/app/robots.ts) for all 8 routes.
- **OpenGraph & Twitter Metadata**: Configured across all top-level pages.

---

## 💻 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18.18+ and `npm`

### Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/emma-awosan/liberty_health_wellbeing_foundation.git
   cd liberty_health_wellbeing_foundation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000).

---

## 📦 Production & Deployment

```bash
# Type-check the project
npx tsc --noEmit

# Build optimized production bundle
npm run build

# Start production server locally
npm run start
```

---

## 📍 Official Offices & Correspondence

### Headquarters — Abuja, FCT
- **Address**: Plot 89, Vitus Mbaogu Street, Jikwoyi, FCT, Abuja, Nigeria
- **Official Email**: `emmanuel.awosan@libertyhealthwellbeing.org`

### Secondary Address — Sokoto State
- **Address**: 01 Federal Layout, Arkilla, Sokoto, Nigeria
- **Correspondence**: `contact@libertyhealthwellbeing.org`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub><strong>Liberty Health & Wellbeing Foundation</strong> • Registered Incorporated Trustees (CAC Reg. No. 9469157 · TIN: 2623366408281)</sub>
</div>
