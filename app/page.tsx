"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  GraduationCap, 
  Building2, 
  Sprout, 
  Globe2, 
  ShieldCheck, 
  Activity, 
  Droplets, 
  HeartPulse, 
  ChevronDown
} from "lucide-react";
import AfricaHeroMap from "@/components/AfricaHeroMap";
import CommunityCTA from "@/components/CommunityCTA";

const getInvolvedPathways = [
  {
    id: "partner" as const,
    number: "01",
    badge: "Institutional & Corporate",
    title: "Institutional & Corporate Partnerships",
    subtitle: "Co-fund clinics, technology grants, or health policy initiatives.",
    description:
      "Collaborate with Liberty Foundation to build scalable, high-impact healthcare infrastructure. We co-design sustainable interventions, CSR initiatives, and medical technology grants alongside enterprise and institutional leaders.",
    points: [
      "Co-finance rural health posts, mobile units & diagnostic tools",
      "Custom ESG & CSR impact framework with auditable results",
      "Strategic alignment with regional health ministries and NGOs"
    ],
    ctaText: "Explore Partnerships",
    ctaLink: "/contact?type=partnership",
    accentBorder: "border-navy/40",
    accentBg: "bg-blue-light/40",
    badgeBg: "bg-navy",
    image: "/images/hero.jpg",
    showcaseTag: "Strategic Alliances",
    showcaseTitle: "Expanding Healthcare Infrastructure & Medical Tech",
    showcaseDesc:
      "Directing institutional support and public-private investments to bring permanent medical facilities and diagnostic equipment to underserved regions.",
    stat: "5+ Regions",
    statLabel: "Target Expansion",
  },
  {
    id: "volunteer" as const,
    number: "02",
    badge: "Medical & Field Missions",
    title: "Volunteer & Medical Missions",
    subtitle: "Provide medical, logistics, educational, or training support on the ground.",
    description:
      "Join our frontline medical outreach teams and operational missions. We welcome doctors, nurses, pharmacists, public health students, and logistics volunteers eager to bring specialized care directly to remote communities.",
    points: [
      "Short & medium-term frontline clinical outreach missions",
      "Maternal, child wellness, and preventative screening drives",
      "Clinical capacity-building & mentorship for local nurses"
    ],
    ctaText: "Register for Missions",
    ctaLink: "/contact?type=volunteering",
    accentBorder: "border-primary/50",
    accentBg: "bg-primary-light/50",
    badgeBg: "bg-primary",
    image: "/images/education.jpg",
    showcaseTag: "Frontline Outreach",
    showcaseTitle: "Direct Medical Care & Clinical Training",
    showcaseDesc:
      "Empowering grassroots health workers and mobilizing specialized clinical volunteers to treat preventable and acute conditions.",
    stat: "12,000+",
    statLabel: "Community Screenings",
  },
  {
    id: "advocate" as const,
    number: "03",
    badge: "Advocacy & Donorship",
    title: "Community Advocacy & Donorship",
    subtitle: "Amplify health campaigns and support sustainable local programs.",
    description:
      "Be a champion for health equity. From funding clean solar water boreholes to organizing preventive health educational drives, your donation and advocacy create enduring self-reliance for vulnerable households.",
    points: [
      "Sponsor clean solar water boreholes and hygiene stations",
      "Fund vital medicine packs and mobile diagnostic kits",
      "Youth and grassroots health literacy advocacy campaigns"
    ],
    ctaText: "Support Our Mission",
    ctaLink: "/contact?type=donation",
    accentBorder: "border-blue/40",
    accentBg: "bg-blue-light/50",
    badgeBg: "bg-blue",
    image: "/images/sustainability.jpg",
    showcaseTag: "Community First",
    showcaseTitle: "Sustainable Clean Water & Health Clinics",
    showcaseDesc:
      "Every volunteer hour and philanthropic donation accelerates lasting health outcomes, clean water access, and nutritional security in rural communities.",
    stat: "100%",
    statLabel: "Locally Anchored",
  },
];

export default function Home() {
  const [selectedVolunteerTab, setSelectedVolunteerTab] = useState<"partner" | "volunteer" | "advocate">("partner");
  const [progress, setProgress] = useState(0);

  const ACCORDION_DURATION = 6000; // 6 seconds auto-switch duration

  useEffect(() => {
    const intervalTime = 50; // 50ms ticks
    const step = (intervalTime / ACCORDION_DURATION) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setSelectedVolunteerTab((currentTab) => {
            const currentIndex = getInvolvedPathways.findIndex((p) => p.id === currentTab);
            const nextIndex = (currentIndex + 1) % getInvolvedPathways.length;
            return getInvolvedPathways[nextIndex].id;
          });
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [selectedVolunteerTab]);

  const handleSelectVolunteerTab = (tabId: "partner" | "volunteer" | "advocate") => {
    setSelectedVolunteerTab(tabId);
    setProgress(0);
  };

  const currentPathway = getInvolvedPathways.find((p) => p.id === selectedVolunteerTab) || getInvolvedPathways[0];
  const secondsLeft = Math.max(1, Math.ceil((ACCORDION_DURATION * (1 - progress / 100)) / 1000));

  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          SECTION 1.A: HERO SECTION (WHITE BG & AFRICA MAP PHOTO MASK)
      ========================================= */}
      <section className="relative overflow-hidden bg-white text-slate-900 pt-32 sm:pt-40 lg:pt-44 pb-16 lg:pb-24">
        <div className="relative max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">
              <Link
                href="/mission-vision"
                className="group inline-flex items-center gap-3 py-2 pl-2.5 pr-5 rounded-full bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-slate-300 transition-all text-xs sm:text-sm"
              >
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shrink-0">
                  <Globe2 className="w-3.5 h-3.5 text-sky" />
                  Pan-African Impact
                </span>
                <span className="font-medium text-slate-700 group-hover:text-dark flex items-center gap-2 transition-colors">
                  <span className="hidden sm:inline">Advancing Community Health &amp; Wellbeing</span>
                  <span className="sm:hidden">Healthcare &amp; Wellbeing</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 transition-transform shrink-0" />
                </span>
              </Link>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.12] text-dark">
                A Healthier, Empowered and <span className="text-primary">Sustainable Africa.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Liberty Health &amp; Wellbeing Foundation is committed to improving health and wellbeing, empowering individuals and strengthening communities across Africa through meaningful and sustainable initiatives.
              </p>

              {/* CTAs - Solid, clean, no light shadows or glowing effects */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/#get-involved"
                  className="w-40 sm:w-44 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 text-center"
                >
                  <span>Get Involved</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/about"
                  className="w-40 sm:w-44 py-3.5 rounded-full bg-navy hover:bg-navy-dark text-white font-semibold text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-98 flex items-center justify-center text-center"
                >
                  Learn More
                </Link>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 w-full max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary font-heading">125K+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Lives Reached</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">84+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Communities</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-dark font-heading">100%</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Sustainable</div>
                </div>
              </div>
            </div>

            {/* Right: Map of Africa/Nigeria with Photo Mask */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <AfricaHeroMap />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 1.B: INTRODUCTION / WHO WE ARE
      ========================================= */}
      <section id="who-we-are" className="pt-20 lg:pt-28 pb-0 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Visual element: Multi-image collage with floating stat card */}
            <div className="lg:col-span-6 relative w-full max-w-xl mx-auto lg:max-w-none pr-2 sm:pr-6">
              {/* Main background photo (top-left) */}
              <div className="relative w-[82%] sm:w-[80%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                <Image
                  src="/images/education.jpg"
                  alt="Healthcare training and educational demonstration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Overlapping foreground photo (bottom-right) */}
              <div className="relative -mt-24 sm:-mt-28 ml-auto w-[68%] sm:w-[65%] aspect-[4/3] rounded-xl overflow-hidden shadow-md border-4 sm:border-8 border-white bg-slate-100 z-10">
                <Image
                  src="/images/hero.jpg"
                  alt="Community healthcare engagement across Africa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Floating Stat Badge (top-right overlapping corner) */}
              <div className="absolute top-4 sm:top-6 right-0 sm:right-2 bg-navy text-white px-5 sm:px-6 py-4 sm:py-5 rounded-xl shadow-xs border border-white/20 z-20 text-center min-w-[140px] sm:min-w-[160px]">
                <div className="text-3xl sm:text-4xl font-extrabold text-primary font-heading leading-none">
                  10+
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-2 leading-tight">
                  Years of Community Impact
                </div>
              </div>
            </div>

            {/* Content element */}
            <div className="lg:col-span-6 flex flex-col items-start gap-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
                About Our Foundation
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.15]">
                Pioneering Sustainable Healthcare and <span className="italic font-serif text-primary">Community Wellbeing.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Liberty Health &amp; Wellbeing Foundation is a dedicated non-profit organization established to address urgent disparities in healthcare, promote holistic wellness, and foster community self-sufficiency across Africa.
              </p>

              {/* Highlight Subtitle */}
              <p className="text-xs font-bold uppercase tracking-wider text-slate-800 pt-1">
                Core Strategic Focus Areas:
              </p>

              {/* 2x2 Feature Bullet Grid matching reference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full">
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Grassroots Health &amp; Clinical Outreach</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Sustainable Clean Water &amp; Sanitation</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Youth &amp; Healthcare Training Modules</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Ethical &amp; Transparent Governance</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-navy hover:bg-navy-dark text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-98 group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Full-Width Stats Strip matching reference design */}
          <div className="mt-16 sm:mt-20 bg-navy text-white py-10 sm:py-12 px-6 sm:px-10 lg:px-14 rounded-xl shadow-sm border border-navy-dark/40">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-primary">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
                    125K+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                    Lives Impacted
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-primary">
                  <Globe2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
                    84+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                    Communities Served
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-primary">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
                    65+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                    Training Workshops
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-primary">
                  <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                    Sustainable Initiatives
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Organic Curved Wave Divider into Mission & Vision (Canvas) */}
        <div className="w-full overflow-hidden leading-none -mb-px">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-14 sm:h-20 lg:h-28 xl:h-32 block text-canvas fill-current"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,64 C280,118 540,16 800,74 C1040,122 1260,24 1440,62 L1440,120 L0,120 Z"
              className="opacity-30"
            />
            <path
              d="M0,36 C260,98 520,8 760,56 C980,102 1220,16 1440,40 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* =========================================
          SECTION 1.C: MISSION & VISION (BENTO GRID LAYOUT)
      ========================================= */}
      <section className="pt-10 sm:pt-14 pb-0 bg-canvas relative overflow-hidden">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
              Our Guiding Compass
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight mt-2">
              Mission &amp; Vision
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              The driving principles behind every program, partnership, and community engagement we lead across Africa.
            </p>
          </div>

          {/* Bento Grid (2x2 Asymmetric Interlocking Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
            
            {/* ROW 1 - CARD 1 (Top-Left, Wide 7-col Photo Card: Our Mission) */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden min-h-[300px] sm:min-h-[340px] shadow-sm border border-slate-100 group">
              <Image
                src="/images/sustainability.jpg"
                alt="Liberty Health & Wellbeing Foundation Mission in Action"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/50 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 text-white z-10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-1.5">
                  Operational Mandate
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  Our Mission
                </h3>
                <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-xl leading-relaxed font-normal">
                  “To improve health and wellbeing by providing innovative solutions, promoting education, and supporting sustainable initiatives that empower individuals and strengthen communities across Africa.”
                </p>
              </div>
            </div>

            {/* ROW 1 - CARD 2 (Top-Right, Narrow 5-col Light Card: Empowerment First) */}
            <div className="lg:col-span-5 relative rounded-xl p-8 sm:p-10 bg-primary-light border border-badge-gold-border/70 shadow-xs flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
              <div className="w-12 h-12 rounded-full bg-white border border-badge-gold-border flex items-center justify-center text-primary">
                <Heart className="w-6 h-6 fill-primary/20" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Grassroots Action
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading mt-1 mb-2 tracking-tight">
                  Empowerment First
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  True wellbeing begins when local leaders are equipped to champion preventive healthcare, health literacy, and systemic community self-sufficiency.
                </p>
              </div>
            </div>

            {/* ROW 2 - CARD 3 (Bottom-Left, Narrow 5-col Warm Brand Gold Card: Sustainable Futures) */}
            <div className="lg:col-span-5 relative rounded-xl p-8 sm:p-10 bg-primary text-white flex flex-col justify-between min-h-[300px] sm:min-h-[340px] shadow-sm">
              <div className="w-12 h-12 rounded-full bg-white/20 border border-white/25 flex items-center justify-center text-white">
                <Sprout className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">
                  Holistic Resilience
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1 mb-2 tracking-tight">
                  Sustainable Futures
                </h3>
                <p className="text-white/95 text-sm sm:text-base leading-relaxed font-light">
                  Addressing the deeper determinants of health—clean water, education, and economic dignity—ensuring interventions outlast funding cycles.
                </p>
              </div>
            </div>

            {/* ROW 2 - CARD 4 (Bottom-Right, Wide 7-col Brand Navy Card with Photo: Our Vision) */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden bg-navy text-white flex flex-col sm:flex-row items-center justify-between min-h-[300px] sm:min-h-[340px] shadow-sm border border-navy-dark/40">
              {/* Text content */}
              <div className="p-8 sm:p-10 flex-1 z-10 flex flex-col justify-between h-full">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-sky mb-4 sm:mb-6">
                  <Globe2 className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-sky">
                    Strategic Destination
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mt-1 mb-2 tracking-tight">
                    Our Vision
                  </h3>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal max-w-md">
                    “To contribute to a healthier, empowered and more sustainable Africa where individuals and communities have the opportunity to thrive.”
                  </p>
                </div>
              </div>

              {/* Right Photo Column */}
              <div className="relative w-full sm:w-5/12 h-56 sm:h-full min-h-[220px] sm:min-h-[340px] shrink-0 overflow-hidden">
                <Image
                  src="/images/africa-hero-children.jpg"
                  alt="A healthier, empowered Africa"
                  fill
                  className="object-cover object-top sm:object-center"
                  sizes="(max-width: 640px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-navy via-navy/30 to-transparent"></div>
              </div>
            </div>

          </div>

          {/* Section CTA */}
          <div className="text-center mt-12 sm:mt-14">
            <Link
              href="/mission-vision"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-navy hover:bg-navy-dark text-white text-sm font-semibold transition-all hover:scale-[1.02] active:scale-98 group"
            >
              <span>Explore Our Full Mission &amp; Vision</span>
              <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

        {/* Organic Curved Wave Divider into Focus Areas (White) */}
        <div className="w-full overflow-hidden leading-none -mb-px">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-14 sm:h-20 lg:h-28 xl:h-32 block text-white fill-current"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,58 C320,118 640,20 920,78 C1180,124 1340,30 1440,64 L1440,120 L0,120 Z"
              className="opacity-40"
            />
            <path
              d="M0,32 C300,96 580,10 860,58 C1120,106 1300,18 1440,42 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* =========================================
          SECTION 1.D: OUR FOCUS AREAS (6-CARD GRID)
      ========================================= */}
      <section id="focus-areas" className="pt-10 sm:pt-14 pb-0 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          
          {/* Header matching reference typography */}
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
              Strategic Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight mt-2 leading-[1.15]">
              Targeted Impact Across <span className="text-primary">Our Focus Areas</span>
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Empowering communities with targeted health, educational, and sustainable initiatives designed to foster enduring resilience across Africa.
            </p>
          </div>

          {/* 6-Card Grid (3 columns x 2 rows) matching reference layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
            
            {/* Card 1: Health & Clinical Care */}
            <div className="group rounded-xl p-8 sm:p-9 bg-canvas border border-slate-200/80 hover:shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-light border border-badge-gold-border flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy font-heading mb-3 tracking-tight">
                  Health &amp; Clinical Care
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Promoting healthier individuals through direct access to essential medicine, maternal-child health screening, preventative checkups, and frontline community clinics.
                </p>
              </div>
            </div>

            {/* Card 2: Education & Health Literacy */}
            <div className="group rounded-xl p-8 sm:p-9 bg-canvas border border-slate-200/80 hover:shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-light border border-badge-blue-border flex items-center justify-center text-blue mb-6 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy font-heading mb-3 tracking-tight">
                  Education &amp; Health Literacy
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Creating opportunities for individuals to gain actionable healthcare skills, public hygiene training, community health advocacy, and educational empowerment.
                </p>
              </div>
            </div>

            {/* Card 3: Community Development */}
            <div className="group rounded-xl p-8 sm:p-9 bg-canvas border border-slate-200/80 hover:shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-navy-light border border-navy/15 flex items-center justify-center text-navy mb-6 group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy font-heading mb-3 tracking-tight">
                  Community Development
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Supporting grassroots infrastructure, local healthcare facilities, civic resilience, and safe social support networks that drive lasting positive systemic change.
                </p>
              </div>
            </div>

            {/* Card 4: Clean Water & Sanitation */}
            <div className="group rounded-xl p-8 sm:p-9 bg-canvas border border-slate-200/80 hover:shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-light border border-badge-gold-border flex items-center justify-center text-primary mb-6 group-hover:scale-105 transition-transform">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy font-heading mb-3 tracking-tight">
                  Clean Water &amp; Sanitation
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Developing sustainable boreholes, solar-powered filtration hubs, and sanitation infrastructure that eliminate waterborne illnesses at the root source.
                </p>
              </div>
            </div>

            {/* Card 5: Youth & Women Enablement */}
            <div className="group rounded-xl p-8 sm:p-9 bg-canvas border border-slate-200/80 hover:shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-blue-light border border-badge-blue-border flex items-center justify-center text-blue mb-6 group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy font-heading mb-3 tracking-tight">
                  Youth &amp; Women Enablement
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Equipping caregivers, mothers, and aspiring youth leaders with vocational competencies, community health ambassador roles, and economic dignity.
                </p>
              </div>
            </div>

            {/* Card 6: Sustainable Initiatives */}
            <div className="group rounded-xl p-8 sm:p-9 bg-canvas border border-slate-200/80 hover:shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-navy-light border border-navy/15 flex items-center justify-center text-navy mb-6 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy font-heading mb-3 tracking-tight">
                  Sustainable Initiatives
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Investing in solar cold-chains, self-sufficient clinic models, and transparent governance frameworks that endure far beyond temporary funding cycles.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Organic Curved Multi-layer Wave Divider into Impact (Navy Dark & Navy Deep) */}
        <div className="w-full overflow-hidden leading-none -mb-px">
          <svg
            viewBox="0 0 1440 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 sm:h-24 lg:h-32 xl:h-36 block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Layer 1: Subtle translucent accent wave */}
            <path
              d="M0,26 C300,82 560,12 800,52 C1040,94 1260,18 1440,36 L1440,140 L0,140 Z"
              fill="#1F3354"
              fillOpacity="0.3"
            />
            {/* Layer 2: Mid Navy Wave (navy-dark) */}
            <path
              d="M0,42 C260,98 500,20 740,62 C980,104 1220,24 1440,46 L1440,140 L0,140 Z"
              fill="#1F3354"
            />
            {/* Layer 3: Deep Navy Wave (navy-deep) - wavy deep line seamlessly merging into Impact section */}
            <path
              d="M0,78 C280,132 540,58 780,94 C1020,136 1260,62 1440,82 L1440,140 L0,140 Z"
              fill="#132238"
            />
          </svg>
        </div>
      </section>

      {/* =========================================
          SECTION 1.E: IMPACT / PURPOSE SECTION (SIMPLE & REAL)
      ========================================= */}
      <section className="pt-16 sm:pt-20 pb-0 bg-navy-deep text-white relative overflow-hidden">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 relative z-10">
           <div className="mb-16">
         
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-[1.15]">
                  Creating Meaningful, Real Impact Across <span className="text-primary">Africa</span>
                </h2>
                <p className="text-slate-300 mt-3 text-sm sm:text-base leading-relaxed font-normal">
                  Every metric reflects real families supported, active solar water filtration hubs running, and local healthcare workers empowered on the ground.
                </p>
              </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Authentic Real Field Photography */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden border border-white/15 shadow-sm bg-slate-900 group">
                <Image
                  src="/images/hero.jpg"
                  alt="Frontline healthcare workers providing community medical care in Africa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-[10px] font-bold uppercase tracking-wider mb-2">
                    Direct Field Operations
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white leading-snug">
                    Grassroots Community Healthcare Outreach
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                    Preventative health screenings, clinical care, and clean water delivery in underserved regions.
                  </p>
                </div>
              </div>

              {/* Verified Trust Strip under photo */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-100 shadow-xs text-xs text-navy">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-navy">100% Community-Led Initiatives</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Audited Biannually</span>
              </div>
            </div>

            

            {/* Right: Section Header & Clean Real Metrics Grid */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
             

              {/* 2x2 Clean Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
                
                {/* Metric 1 */}
                <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary-light border border-badge-gold-border flex items-center justify-center text-primary">
                      <HeartPulse className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Health</span>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-primary font-heading tracking-tight mb-1">
                      125,000+
                    </div>
                    <div className="text-sm font-bold text-navy">People Reached</div>
                    <p className="text-xs text-slate-600 mt-1">Direct healthcare services &amp; clinical screenings</p>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-light border border-badge-blue-border flex items-center justify-center text-blue">
                      <Globe2 className="w-5 h-5 text-blue" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Reach</span>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-blue font-heading tracking-tight mb-1">
                      84+
                    </div>
                    <div className="text-sm font-bold text-navy">Communities Served</div>
                    <p className="text-xs text-slate-600 mt-1">Across 6 East, West &amp; Central African regions</p>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                      <Droplets className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Water &amp; Clinics</span>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-heading tracking-tight mb-1">
                      36
                    </div>
                    <div className="text-sm font-bold text-navy">Projects Completed</div>
                    <p className="text-xs text-slate-600 mt-1">Solar boreholes, filtration hubs &amp; medical centers</p>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-navy-light border border-navy/15 flex items-center justify-center text-navy">
                      <Users className="w-5 h-5 text-navy" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Volunteers</span>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight mb-1">
                      1,200+
                    </div>
                    <div className="text-sm font-bold text-navy">Active Volunteers</div>
                    <p className="text-xs text-slate-600 mt-1">Certified doctors, nurses &amp; community advocates</p>
                  </div>
                </div>

              </div>

              {/* Metric 5: Horizontal Educational Drives Strip */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-100 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-primary-light border border-badge-gold-border flex items-center justify-center text-primary shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">52 Health &amp; Hygiene Educational Drives</div>
                    <p className="text-xs text-slate-600">Preventative hygiene, nutrition &amp; youth health modules</p>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary font-heading shrink-0 hidden sm:block">
                  52
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Organic Curved Wave Divider into Get Involved (White) */}
        <div className="w-full overflow-hidden leading-none -mb-px">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-14 sm:h-20 lg:h-28 xl:h-32 block text-white fill-current"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,60 C340,122 660,18 960,76 C1200,124 1360,28 1440,62 L1440,120 L0,120 Z"
              className="opacity-30"
            />
            <path
              d="M0,30 C300,98 600,10 900,58 C1160,106 1340,18 1440,40 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* =========================================
          SECTION 1.F: GET INVOLVED
      ========================================= */}
      <section id="get-involved" className="pt-10 sm:pt-14 pb-0 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 flex flex-col items-start gap-5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary  inline-block">
                Collaborate &amp; Participate
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight">
                Be Part of the Change
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Whether through partnership, volunteering, support or collaboration, there are different ways to contribute to the work of Liberty Health &amp; Wellbeing Foundation.
              </p>

              {/* Pathways Accordion with Auto-Advance Countdown Spinner */}
              <div className="w-full space-y-3 pt-1">
                {getInvolvedPathways.map((pathway) => {
                  const isOpen = selectedVolunteerTab === pathway.id;
                  return (
                    <div
                      key={pathway.id}
                      className={`relative rounded-xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? `${pathway.accentBorder} ${pathway.accentBg} shadow-sm ring-1 ring-slate-900/5`
                          : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/60"
                      }`}
                    >

                      {/* Accordion Header Button */}
                      <button
                        type="button"
                        onClick={() => handleSelectVolunteerTab(pathway.id)}
                        aria-expanded={isOpen}
                        className="w-full p-4 sm:p-4.5 pl-5 sm:pl-5 text-left flex items-center justify-between gap-3 transition-colors cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-xl"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-all duration-300 ${
                              isOpen
                                ? `${pathway.badgeBg} text-white`
                                : "bg-slate-100 text-slate-600 group-hover:bg-slate-200/80"
                            }`}
                          >
                            {pathway.number}
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-bold text-navy text-sm sm:text-base leading-snug group-hover:text-primary transition-colors">
                              {pathway.title}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5 truncate sm:whitespace-normal">
                              {pathway.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Right Toggle / Countdown Spinner */}
                        {isOpen ? (
                          <div 
                            className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0"
                            title={`Auto-advancing in ${secondsLeft}s`}
                          >
                            {/* Circular Countdown Spinner */}
                            <svg className="w-9 h-9 sm:w-10 sm:h-10 -rotate-90 transform" viewBox="0 0 36 36">
                              {/* Background Track */}
                              <circle
                                cx="18"
                                cy="18"
                                r="14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="text-slate-200"
                              />
                              {/* Animated Countdown Progress Ring */}
                              <circle
                                cx="18"
                                cy="18"
                                r="14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray={87.96}
                                strokeDashoffset={87.96 - (progress / 100) * 87.96}
                                className={`transition-[stroke-dashoffset] duration-75 ease-linear ${
                                  pathway.id === "volunteer"
                                    ? "text-primary"
                                    : pathway.id === "partner"
                                    ? "text-navy"
                                    : "text-blue"
                                }`}
                              />
                            </svg>
                            {/* Center countdown number */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-[10px] sm:text-[11px] font-bold font-mono text-navy leading-none">
                                {secondsLeft}s
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-200 text-slate-400 group-hover:text-navy transition-all duration-300">
                            <ChevronDown className="w-4 h-4 transition-transform duration-300 rotate-0" />
                          </div>
                        )}
                      </button>

                      {/* Smooth Collapsible Content */}
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 sm:px-6 pb-6 pt-1 pl-5 sm:pl-16 border-t border-slate-200/60 mt-1">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2.5">
                              {pathway.description}
                            </p>

                            {/* Impact Highlights */}
                            <div className="space-y-2 mt-3.5">
                              {pathway.points.map((point, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                  <span>{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact?type=get-involved"
                  className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-all hover:scale-[1.01] active:scale-98 inline-flex items-center gap-2"
                >
                  <span>Get Involved Today</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Our Approach</span>
                </Link>
              </div>
            </div>

            {/* Visual showcase card synced with active pathway */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-navy-deep group">
                <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] relative w-full overflow-hidden">
                  {getInvolvedPathways.map((item) => {
                    const isCurrent = selectedVolunteerTab === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                          isCurrent ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={item.id === "partner"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                      </div>
                    );
                  })}

                  {/* Floating Stat Badge in Top Right */}
                  <div className="absolute top-4 right-4 z-20 backdrop-blur-md bg-navy-deep/75 border border-white/20 text-white rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-xs">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="text-xs font-bold leading-tight text-white">{currentPathway.stat}</div>
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider">{currentPathway.statLabel}</div>
                    </div>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="p-6 sm:p-7 bg-navy-deep text-white border-t border-white/10">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
                    {currentPathway.showcaseTag}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    {currentPathway.showcaseTitle}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1.5 max-w-xl leading-relaxed">
                    {currentPathway.showcaseDesc}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-sky" />
                      Verified Pan-African Initiative
                    </span>
                    <Link 
                      href={currentPathway.ctaLink} 
                      className="text-primary hover:text-white font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Take Action</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Organic Curved Wave Divider into Canvas */}
        <div className="w-full overflow-hidden leading-none -mb-px">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-14 sm:h-20 lg:h-28 xl:h-32 block text-canvas fill-current"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,64 C280,118 560,20 840,76 C1080,122 1280,24 1440,60 L1440,120 L0,120 Z"
              className="opacity-30"
            />
            <path
              d="M0,34 C260,98 520,10 780,56 C1000,102 1220,16 1440,38 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* =========================================
          SECTION 1.G: READY TO GET STARTED CTA
      ========================================= */}
      <CommunityCTA />

    </div>
  );
}
