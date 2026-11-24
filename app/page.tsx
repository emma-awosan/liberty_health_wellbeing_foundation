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
  Sprout,
  Globe2,
  ShieldCheck,
  Activity,
  HeartPulse,
  ChevronDown,
  Brain,
  AlertTriangle,
  Baby,
  BookOpen,
  Scale,
} from "lucide-react";
import AfricaHeroMap from "@/components/AfricaHeroMap";
import CommunityCTA from "@/components/CommunityCTA";
import AnnualAgendaAndBudget from "@/components/AnnualAgendaAndBudget";

const getInvolvedPathways = [
  {
    id: "volunteer" as const,
    number: "01",
    badge: "2026/2027 Cohort",
    title: "Founding Volunteers Programme & Open Roles",
    subtitle: "Contribute your clinical, research, editorial, or community skills.",
    description:
      "We invite passionate individuals, students, healthcare professionals, researchers, writers, creatives and community advocates to join our Founding Volunteers Cohort — 2026/2027.",
    points: [
      "7 specialised volunteering areas across health, research & media",
      "5 open coordination positions (Expressions of Interest welcome)",
      "Safe, conflict-sensitive community outreach and capacity building",
    ],
    ctaText: "Register as a Volunteer",
    ctaLink: "/opportunities",
    accentBorder: "border-primary/50",
    accentBg: "bg-primary-light/50",
    badgeBg: "bg-primary",
    image: "/images/education.jpg",
    showcaseTag: "2026/2027 Cohort",
    showcaseTitle: "Join Our Founding Volunteers Programme",
    showcaseDesc:
      "Collaborate alongside medical doctors, specialist nurses, peacebuilding scholars, and public health educators.",
    stat: "7 Tracks",
    statLabel: "Volunteer Cohort",
  },
  {
    id: "partner" as const,
    number: "02",
    badge: "Institutional Alliances",
    title: "Strategic Partnerships & Healthcare Collaborations",
    subtitle: "Collaborate with us across healthcare, research and technology.",
    description:
      "Healthcare institutions, community organisations, researchers, and responsible businesses collaborate with the Foundation to strengthen preventive healthcare and public health education.",
    points: [
      "Active collaborations with WuraCare MCI, 60 Seconds With Doc, Marlix Healthcare Ltd, Titan Sales Limited & Balyson Medical Initiative",
      "Joint community medical outreaches, maternal-child health & health literacy",
      "Ethical governance and evidence-informed programme delivery",
    ],
    ctaText: "Explore Strategic Partnerships",
    ctaLink: "/partners",
    accentBorder: "border-blue/40",
    accentBg: "bg-blue-light/50",
    badgeBg: "bg-blue",
    image: "/images/sustainability.jpg",
    showcaseTag: "Strategic Partners",
    showcaseTitle: "Institutional & Clinical Collaborations",
    showcaseDesc:
      "Building purposeful relationships across healthcare, technology, research, and community development.",
    stat: "5 Partners",
    statLabel: "Confirmed Alliances",
  },
  {
    id: "research" as const,
    number: "03",
    badge: "Evidence & Policy",
    title: "Research, Health Data & Public Health Advocacy",
    subtitle: "Advancing locally relevant research and community health insights.",
    description:
      "Our multidisciplinary team conducts structured health data collection, social research, and policy analysis addressing health inequalities and the wider determinants of wellbeing.",
    points: [
      "Structured collection and analysis of community health data",
      "Locally relevant research outputs and evidence briefs for advocacy",
      "Multidisciplinary leadership across medicine, peacebuilding & digital health",
    ],
    ctaText: "Explore Our Focus & Research",
    ctaLink: "/mission-vision#research-policy",
    accentBorder: "border-navy/40",
    accentBg: "bg-blue-light/40",
    badgeBg: "bg-navy",
    image: "/images/hero.jpg",
    showcaseTag: "7 Focus Areas",
    showcaseTitle: "Evidence-Informed Public Health",
    showcaseDesc:
      "Connecting clinical prevention, health data infrastructure, and community engagement across Nigeria.",
    stat: "7 Areas",
    statLabel: "Core Focus Mandate",
  },
];

const officialFocusAreas = [
  {
    number: "01",
    title: "Mental Health & Wellbeing",
    desc: "Promoting mental health awareness, improving health literacy, challenging stigma and encouraging access to appropriate support.",
    icon: Brain,
    accent: "primary",
  },
  {
    number: "02",
    title: "Addiction & Gambling Awareness",
    desc: "Raising awareness of substance misuse, alcohol-related harm, gambling addiction and other behavioural dependencies, including their effects on mental health, families and financial wellbeing.",
    icon: AlertTriangle,
    accent: "blue",
  },
  {
    number: "03",
    title: "Preventive Healthcare & Health Access",
    desc: "Promoting disease prevention, health education, early detection, screening awareness and equitable access to healthcare information and services.",
    icon: Activity,
    accent: "navy",
  },
  {
    number: "04",
    title: "Women’s, Maternal & Child Health",
    desc: "Supporting education, awareness and community initiatives focused on women’s health, maternal wellbeing, child health and improving health outcomes for families.",
    icon: Baby,
    accent: "primary",
  },
  {
    number: "05",
    title: "Health Information & Community Resources",
    desc: "Improving access to reliable information, educational materials and practical resources that help individuals make informed decisions about their health and wellbeing.",
    icon: BookOpen,
    accent: "blue",
  },
  {
    number: "06",
    title: "Research, Policy & Advocacy",
    desc: "Supporting evidence-based research and advocacy addressing health inequalities, social determinants of health and institutional practices affecting wellbeing, dignity and community safety.",
    icon: Scale,
    accent: "navy",
  },
  {
    number: "07",
    title: "Global Health & Partnerships",
    desc: "Developing relationships with healthcare professionals, researchers, businesses and organisations to strengthen community health initiatives and international collaboration.",
    icon: Globe2,
    accent: "primary",
  },
];

const pilotProjectObjectives = [
  {
    index: "01",
    title: "Lagos & Abuja Outreach Pilots",
    detail:
      "Supporting initial community medical outreach pilots across Lagos and Abuja.",
  },
  {
    index: "02",
    title: "Screening & Basic Clinical Supplies",
    detail:
      "Providing preventive health screening tools and essential basic clinical supplies for field outreach.",
  },
  {
    index: "03",
    title: "Community Health Education",
    detail:
      "Delivering accessible public health education and preventive literacy across our seven focus areas.",
  },
  {
    index: "04",
    title: "Structured Health Data Collection & Analysis",
    detail:
      "Implementing structured collection and analysis of community health data to guide interventions.",
  },
  {
    index: "05",
    title: "Locally Relevant Research Outputs",
    detail:
      "Producing evidence-informed research outputs tailored to local community health needs.",
  },
  {
    index: "06",
    title: "Evidence Briefs for Advocacy & Expansion",
    detail:
      "Developing practical evidence briefs for public health advocacy and future programme expansion.",
  },
];

export default function Home() {
  const [selectedVolunteerTab, setSelectedVolunteerTab] = useState<
    "volunteer" | "partner" | "research"
  >("volunteer");
  const [progress, setProgress] = useState(0);
  const [isAccordionPaused, setIsAccordionPaused] = useState(false);

  const ACCORDION_DURATION = 6000;

  useEffect(() => {
    if (isAccordionPaused) return;
    const intervalTime = 50;
    const step = (intervalTime / ACCORDION_DURATION) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setSelectedVolunteerTab((currentTab) => {
            const currentIndex = getInvolvedPathways.findIndex(
              (p) => p.id === currentTab
            );
            const nextIndex = (currentIndex + 1) % getInvolvedPathways.length;
            return getInvolvedPathways[nextIndex].id;
          });
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [selectedVolunteerTab, isAccordionPaused]);

  const handleSelectVolunteerTab = (
    tabId: "volunteer" | "partner" | "research"
  ) => {
    setSelectedVolunteerTab(tabId);
    setProgress(0);
  };

  const currentPathway =
    getInvolvedPathways.find((p) => p.id === selectedVolunteerTab) ||
    getInvolvedPathways[0];

  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          SECTION 1.A: HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-white text-slate-900 pt-32 sm:pt-40 lg:pt-44 pb-16 lg:pb-24">
        <div className="relative max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start gap-6 text-left">
              <div className="border-l-2 border-primary pl-3.5 py-0.5">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-navy font-heading block">
                  CAC Reg No. 9469157 · Advancing Global Health. Transforming Lives.
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.12] text-dark">
                Better health. <br />
                Stronger communities. <br />
                <span className="text-primary">Brighter futures.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Liberty Health &amp; Wellbeing Foundation is a Nigerian-registered nonprofit organisation committed to improving health, wellbeing and quality of life through preventive healthcare, public education, research, advocacy and community development.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/mission-vision"
                  className="px-7 py-3.5 rounded-full bg-primary text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 text-center shadow-xs"
                >
                  <span>Explore Our 7 Focus Areas</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/opportunities"
                  className="px-7 py-3.5 rounded-full bg-navy text-white font-semibold text-sm sm:text-base flex items-center justify-center text-center"
                >
                  Volunteer With Us
                </Link>
              </div>

              {/* Key Trust Highlights */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl items-start">
                <div className="flex flex-col justify-between min-w-0">
                  <div className="text-lg sm:text-xl xl:text-2xl font-extrabold text-primary font-heading whitespace-nowrap leading-tight">
                    CAC 9469157
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1.5 leading-snug">
                    TIN: 2623366408281
                  </div>
                </div>
                <div className="flex flex-col justify-between min-w-0">
                  <div className="text-lg sm:text-xl xl:text-2xl font-extrabold text-navy font-heading whitespace-nowrap leading-tight">
                    7 Focus Areas
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1.5 leading-snug">
                    Preventive Mandate
                  </div>
                </div>
                <div className="flex flex-col justify-between min-w-0">
                  <div className="text-lg sm:text-xl xl:text-2xl font-extrabold text-dark font-heading whitespace-nowrap leading-tight">
                    Abuja &amp; Sokoto
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1.5 leading-snug">
                    Operating Hubs
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map / Hero visual */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <AfricaHeroMap />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 1.B: INTRODUCTION / WHO WE ARE
      ========================================= */}
      <section
        id="who-we-are"
        className="pt-20 lg:pt-28 pb-0 bg-white relative overflow-hidden"
      >
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Visual element: Multi-image collage with floating stat card */}
            <div className="lg:col-span-6 relative w-full max-w-xl mx-auto lg:max-w-none pr-2 sm:pr-6">
              <div className="relative w-[82%] sm:w-[80%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                <Image
                  src="/images/education.jpg"
                  alt="Healthcare training and educational demonstration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="relative -mt-24 sm:-mt-28 ml-auto w-[68%] sm:w-[65%] aspect-[4/3] rounded-xl overflow-hidden shadow-md border-4 sm:border-8 border-white bg-slate-100 z-10">
                <Image
                  src="/images/hero.jpg"
                  alt="Community healthcare engagement in Nigeria"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Floating Stat Badge: CAC Registration */}
              <div className="absolute top-4 sm:top-6 right-0 sm:right-2 bg-navy text-white px-5 sm:px-6 py-4 sm:py-5 rounded-xl shadow-xs border border-white/20 z-20 text-center min-w-[150px] sm:min-w-[170px]">
                <div className="text-xl sm:text-2xl font-extrabold text-primary font-heading leading-tight">
                  CAC 9469157
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-1 leading-tight">
                  Incorporated Trustees
                </div>
              </div>
            </div>

            {/* Content element */}
            <div className="lg:col-span-6 flex flex-col items-start gap-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
                About Liberty Health &amp; Wellbeing Foundation
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.15]">
                Health extends beyond the{" "}
                <span className="italic font-serif text-primary">
                  absence of disease.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Mental wellbeing, addiction, financial circumstances, social inequalities, healthcare access and institutional practices all influence the quality of people’s lives.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our approach combines medical expertise, public health research, community engagement and strategic partnerships to address preventable health challenges and promote healthier, more resilient communities.
              </p>

              {/* 2x2 Feature Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full pt-1">
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Mental Health &amp; Addiction Awareness</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Preventive Care &amp; Maternal Health</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Research, Policy &amp; Advocacy</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                  <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                  <span>Global Health &amp; Partnerships</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-navy text-white font-semibold text-sm"
                >
                  <span>About Us &amp; Trustees</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </Link>
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-canvas border border-slate-200 text-navy font-semibold text-sm"
                >
                  <span>Meet the Team</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Full-Width Strip: Core Approach */}
          <div className="mt-16 sm:mt-20 bg-navy text-white py-10 sm:py-12 px-6 sm:px-10 lg:px-14 rounded-xl shadow-sm border border-navy-dark/40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-primary">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white font-heading">
                    Evidence-Based Prevention
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-normal mt-1 leading-relaxed">
                    Promoting early detection, screening awareness, and reliable health literacy before crises unfold.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white font-heading">
                    Community Empowerment &amp; Safety
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-normal mt-1 leading-relaxed">
                    Delivering inclusive, conflict-sensitive outreach grounded in peacebuilding and local leadership.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white font-heading">
                    Research &amp; Policy Advocacy
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-normal mt-1 leading-relaxed">
                    Addressing health inequalities, social determinants of health, and institutional accountability.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Organic Curved Wave Divider */}
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
            <path d="M0,36 C260,98 520,8 760,56 C980,102 1220,16 1440,40 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* =========================================
          SECTION 1.C: VISION & MISSION (BENTO GRID LAYOUT)
      ========================================= */}
      <section className="pt-10 sm:pt-14 pb-0 bg-canvas relative overflow-hidden">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
              Our Guiding Compass
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight mt-2">
              Vision &amp; Mission
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Advancing Global Health. Transforming Lives.
            </p>
          </div>

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
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/60 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 text-white z-10">
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-1.5">
                  Operational Mandate
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                  Our Mission
                </h3>
                <p className="text-slate-200 text-sm sm:text-base mt-2 max-w-xl leading-relaxed font-normal">
                  “To advance health and wellbeing through evidence-based education, preventive healthcare, research, community empowerment, advocacy and partnerships that address health inequalities and the wider determinants of health.”
                </p>
              </div>
            </div>

            {/* ROW 1 - CARD 2 (Top-Right, Narrow 5-col Light Card) */}
            <div className="lg:col-span-5 relative rounded-xl p-8 sm:p-10 bg-primary-light border border-badge-gold-border/70 shadow-xs flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
              <div className="w-12 h-12 rounded-full bg-white border border-badge-gold-border flex items-center justify-center text-primary">
                <Heart className="w-6 h-6 fill-primary/20" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                  Wider Determinants
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading mt-1 mb-2 tracking-tight">
                  Whole-Person Wellbeing
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Addressing mental health, addiction harm, maternal-child outcomes, financial stress, and social inequalities alongside clinical prevention.
                </p>
              </div>
            </div>

            {/* ROW 2 - CARD 3 (Bottom-Left, Narrow 5-col Warm Brand Gold Card) */}
            <div className="lg:col-span-5 relative rounded-xl p-8 sm:p-10 bg-primary text-white flex flex-col justify-between min-h-[300px] sm:min-h-[340px] shadow-sm">
              <div className="w-12 h-12 rounded-full bg-white/20 border border-white/25 flex items-center justify-center text-white">
                <Sprout className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">
                  Community Resilience
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading mt-1 mb-2 tracking-tight">
                  Dignity &amp; Equity
                </h3>
                <p className="text-white/95 text-sm sm:text-base leading-relaxed font-light">
                  Combining medical leadership, peacebuilding scholarship, and public health advocacy to protect human security and dignity.
                </p>
              </div>
            </div>

            {/* ROW 2 - CARD 4 (Bottom-Right, Wide 7-col Brand Navy Card with Photo: Our Vision) */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden bg-navy text-white flex flex-col sm:flex-row items-center justify-between min-h-[300px] sm:min-h-[340px] shadow-sm border border-navy-dark/40">
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
                    “A world where individuals and communities have equitable opportunities to achieve good health, mental wellbeing, dignity and a better quality of life.”
                  </p>
                </div>
              </div>

              <div className="relative w-full sm:w-5/12 h-56 sm:h-full min-h-[220px] sm:min-h-[340px] shrink-0 overflow-hidden">
                <Image
                  src="/images/africa-hero-children.jpg"
                  alt="A healthier, empowered Nigeria"
                  fill
                  className="object-cover object-top sm:object-center"
                  sizes="(max-width: 640px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-navy via-navy/30 to-transparent" />
              </div>
            </div>
          </div>

          <div className="text-center mt-12 sm:mt-14">
            <Link
              href="/mission-vision"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-navy text-white text-sm font-semibold"
            >
              <span>Explore Our Vision, Mission &amp; Research</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>

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
            <path d="M0,32 C300,96 580,10 860,58 C1120,106 1300,18 1440,42 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* =========================================
          SECTION 1.D: OUR 7 FOCUS AREAS
      ========================================= */}
      <section
        id="focus-areas"
        className="pt-10 sm:pt-14 pb-0 bg-white relative overflow-hidden"
      >
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
              Strategic Priorities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight mt-2 leading-[1.15]">
              Targeted Action Across{" "}
              <span className="text-primary">Our Seven Focus Areas</span>
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Addressing physical health, mental wellbeing, addiction awareness, maternal-child outcomes, reliable health literacy, and research advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200 bg-canvas w-full">
            {officialFocusAreas.map((area) => (
              <div
                key={area.number}
                className="p-7 sm:p-9 bg-white border-r border-b border-slate-200 flex flex-col justify-between relative"
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-navy" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary leading-none mb-6">
                    {area.number}
                  </div>
                  <h3 className="text-xl font-extrabold text-navy font-heading mb-3 tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Cell in 4x2 Grid: Full Focus & Research Overview */}
            <div className="p-7 sm:p-9 bg-navy text-white border-r border-b border-navy-dark flex flex-col justify-between relative">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-primary" />
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-6">
                  INTEGRATED MANDATE
                </div>
                <h3 className="text-xl font-extrabold text-white font-heading mb-3 tracking-tight">
                  Evidence-Informed Community Health
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Explore how our seven focus areas connect preventive medicine, public health research, and community empowerment across Nigeria.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/15">
                <Link
                  href="/mission-vision"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary"
                >
                  <span>Read Full Focus &amp; Research Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden leading-none -mb-px">
          <svg
            viewBox="0 0 1440 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-16 sm:h-24 lg:h-32 xl:h-36 block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,26 C300,82 560,12 800,52 C1040,94 1260,18 1440,36 L1440,140 L0,140 Z"
              fill="#1F3354"
              fillOpacity="0.3"
            />
            <path
              d="M0,42 C260,98 500,20 740,62 C980,104 1220,24 1440,46 L1440,140 L0,140 Z"
              fill="#1F3354"
            />
            <path
              d="M0,78 C280,132 540,58 780,94 C1020,136 1260,62 1440,82 L1440,140 L0,140 Z"
              fill="#132238"
            />
          </svg>
        </div>
      </section>

      {/* =========================================
          SECTION 1.E: ₦50,000,000 ANNUAL BUDGET & 1-YEAR AGENDA (DEC 2026 – DEC 2027)
      ========================================= */}
      <section className="pt-16 sm:pt-20 pb-0 bg-navy-deep text-white relative overflow-hidden">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 relative z-10">
          <AnnualAgendaAndBudget theme="dark" />
        </div>

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
            <path d="M0,30 C300,98 600,10 900,58 C1160,106 1340,18 1440,40 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* =========================================
          SECTION 1.F: GET INVOLVED
      ========================================= */}
      <section
        id="get-involved"
        className="pt-10 sm:pt-14 pb-0 bg-white relative overflow-hidden"
      >
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start gap-5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary inline-block">
                Volunteer · Partner · Collaborate
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight">
                Help Us Build Healthier Communities
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Explore how you can join the 2026/2027 Founding Volunteers Cohort, collaborate as an institutional partner, or contribute to our public health research initiatives.
              </p>

              <div
                className="w-full space-y-3 pt-1"
                onMouseEnter={() => setIsAccordionPaused(true)}
                onMouseLeave={() => setIsAccordionPaused(false)}
                onFocus={() => setIsAccordionPaused(true)}
                onBlur={() => setIsAccordionPaused(false)}
              >
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

                        {isOpen ? (
                          <div
                            aria-hidden="true"
                            className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0"
                          >
                            <svg
                              className="w-9 h-9 sm:w-10 sm:h-10 -rotate-90 transform"
                              viewBox="0 0 36 36"
                            >
                              <circle
                                cx="18"
                                cy="18"
                                r="14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="text-slate-200"
                              />
                              <circle
                                cx="18"
                                cy="18"
                                r="14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray={87.96}
                                strokeDashoffset={
                                  87.96 - (progress / 100) * 87.96
                                }
                                className={`transition-[stroke-dashoffset] duration-75 ease-linear ${
                                  pathway.id === "volunteer"
                                    ? "text-primary"
                                    : pathway.id === "partner"
                                    ? "text-blue"
                                    : "text-navy"
                                }`}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <ChevronDown className="w-4 h-4 text-navy rotate-180" />
                            </div>
                          </div>
                        ) : (
                          <div
                            aria-hidden="true"
                            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-200 text-slate-400 group-hover:text-navy transition-all duration-300"
                          >
                            <ChevronDown className="w-4 h-4 transition-transform duration-300 rotate-0" />
                          </div>
                        )}
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 sm:px-6 pb-6 pt-1 pl-5 sm:pl-16 border-t border-slate-200/60 mt-1">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2.5">
                              {pathway.description}
                            </p>

                            <div className="space-y-2 mt-3.5">
                              {pathway.points.map((point, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                  <span>{point}</span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-4 pt-3 border-t border-slate-200/50">
                              <Link
                                href={pathway.ctaLink}
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy hover:text-primary transition-colors group/cta"
                              >
                                <span>{pathway.ctaText}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-primary group-hover/cta:translate-x-0.5 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/opportunities"
                  className="px-8 py-3.5 rounded-full bg-primary text-white font-bold text-sm inline-flex items-center gap-2"
                >
                  <span>Volunteer &amp; Open Roles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/partners"
                  className="px-6 py-3.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-sm inline-flex items-center gap-2"
                >
                  <span>Strategic Partnerships</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-navy-deep group">
                <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] relative w-full overflow-hidden">
                  {getInvolvedPathways.map((item) => {
                    const isCurrent = selectedVolunteerTab === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                          isCurrent
                            ? "opacity-100 z-10"
                            : "opacity-0 z-0 pointer-events-none"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={item.id === "volunteer"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                      </div>
                    );
                  })}

                  <div className="absolute top-4 right-4 z-20 backdrop-blur-md bg-navy-deep/75 border border-white/20 text-white rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-xs">
                    <Sparkles className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="text-xs font-bold leading-tight text-white">
                        {currentPathway.stat}
                      </div>
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider">
                        {currentPathway.statLabel}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 bg-navy-deep text-white border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-1.5">
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
                      CAC 9469157 · TIN 2623366408281
                    </span>
                    <Link
                      href={currentPathway.ctaLink}
                      className="text-primary hover:text-white font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            <path d="M0,34 C260,98 520,10 780,56 C1000,102 1220,16 1440,38 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* =========================================
          SECTION 1.G: CLOSING CALL TO ACTION
      ========================================= */}
      <CommunityCTA
        badge="Advancing Global Health. Transforming Lives."
        title="Ready to collaborate or volunteer with our team?"
        subtitle="Connect with our secretariat at emmanuel.awosan@libertyhealthwellbeing.org or explore our 2026/2027 Founding Volunteers Programme and partnership initiatives."
        primaryButtonText="Volunteer & Open Roles"
        primaryButtonHref="/opportunities"
        secondaryButtonText="Contact Our Secretariat"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
