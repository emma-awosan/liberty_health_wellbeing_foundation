import React from "react";
import Image from "next/image";
import Link from "next/link";
import CommunityCTA from "@/components/CommunityCTA";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import {
  HeartPulse,
  Users,
  Target,
  Compass,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Scale,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us & Board of Trustees · Liberty Health & Wellbeing Foundation",
  description:
    "Learn about Liberty Health & Wellbeing Foundation (CAC Registration No. 9469157, TIN: 2623366408281), our Vision, Mission, and Registered Board of Trustees.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Liberty Health & Wellbeing Foundation",
    description:
      "Advancing Global Health. Transforming Lives. Discover our mission, vision, governance, and Registered Board of Trustees.",
    url: "https://libertyhealthwellbeing.org/about",
    images: [
      {
        url: "/images/about-hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "About Liberty Health & Wellbeing Foundation",
      },
    ],
  },
};

export default function AboutPage() {
  const approaches = [
    {
      title: "Medical & Public Health Expertise",
      description:
        "Combining clinical knowledge, epidemiology, nursing specialization, and public health research to address preventable health challenges.",
      icon: HeartPulse,
      highlight: "Evidence-Based Practice",
    },
    {
      title: "Wider Determinants of Health",
      description:
        "Recognising that mental wellbeing, addiction, financial circumstances, social inequalities, and institutional practices all influence quality of life.",
      icon: Scale,
      highlight: "Holistic Wellbeing",
    },
    {
      title: "Community Engagement & Safety",
      description:
        "Working collaboratively with local leaders, families, and peacebuilding specialists to foster resilient, inclusive, and conflict-sensitive outreach.",
      icon: Users,
      highlight: "Community Empowerment",
    },
    {
      title: "Strategic Partnerships",
      description:
        "Building transparent alliances across healthcare, academia, technology, and civil society to expand healthcare access and health literacy.",
      icon: ShieldCheck,
      highlight: "Collaborative Impact",
    },
  ];

  const boardOfTrustees = [
    {
      index: "01",
      name: "Dr. Oluwasegun E. Awosan",
      role: "Chairman, Board of Trustees",
      credentials: "MD, MSc Global Healthcare Management, CMI Level 7",
      summary:
        "Founder & Chairman providing overall strategic leadership, institutional governance, and international partnership oversight.",
    },
    {
      index: "02",
      name: "Dr. Florence F. Awosan, PhD",
      role: "Secretary, Board of Trustees",
      credentials: "PhD & MSc Peace Studies and Conflict Resolution, BSc (Hons) Biochemistry",
      summary:
        "Overseeing statutory governance documentation, community engagement, peacebuilding, and outreach safety protocols.",
    },
    {
      index: "03",
      name: "Dr. Ruth Wuraola Awosan",
      role: "Registered Trustee",
      credentials: "MD, MPH (Epidemiology), DrPH Candidate (Maternal & Child Health)",
      summary:
        "Contributing epidemiological oversight, maternal and child health strategy, and preventive clinical governance.",
    },
    {
      index: "04",
      name: "Mariam Adebukola Ogunjobi",
      role: "Registered Trustee",
      credentials: "UK & Nigerian Registered Nurse · Clinical Nurse Specialist (Breast Care Oncology)",
      summary:
        "Providing specialist nursing leadership, oncology awareness strategy, and patient-centred clinical governance.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-navy-deep text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        <div className="relative max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20">
          <div className="text-center max-w-5xl lg:max-w-6xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary font-heading mb-3">
              Advancing Global Health. Transforming Lives. · CAC No. 9469157
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.14]">
              Improving Health, Wellbeing &amp; <br className="hidden md:inline" />
              <span className="text-primary">Quality of Life.</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mt-5 sm:mt-6 font-normal">
              Liberty Health &amp; Wellbeing Foundation is a Nigerian-registered nonprofit organisation committed to improving health, wellbeing and quality of life through preventive healthcare, public education, research, advocacy and community development.
            </p>
          </div>

          {/* 3 Tall Rounded Photo Cards */}
          <div className="grid grid-cols-3 gap-3.5 sm:gap-5 md:gap-6 lg:gap-8 w-full mt-10 sm:mt-14">
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-md border border-white/10 bg-navy-dark/60 group">
              <Image
                src="/images/about-hero-1.jpg"
                alt="Community healthcare demonstration"
                fill
                className="object-cover object-[center_20%] scale-110 group-hover:scale-115 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 33vw, 380px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-md border border-white/10 bg-navy-dark/60 group">
              <Image
                src="/images/about-hero-2.jpg"
                alt="Healthcare planning and collaboration"
                fill
                className="object-cover object-[center_35%] scale-110 group-hover:scale-115 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 33vw, 380px"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-md border border-white/10 bg-navy-dark/60 group">
              <Image
                src="/images/about-hero-3.jpg"
                alt="Community health workers in Nigeria"
                fill
                className="object-cover object-[center_25%] scale-110 group-hover:scale-115 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 33vw, 380px"
              />
            </div>
          </div>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          SECTION 2: ORGANISATIONAL MANDATE & REGISTRATION DETAILS
      ========================================= */}
      <section className="pt-10 sm:pt-14 lg:pt-18 pb-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Narrative — Distinct Institutional Context */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
                About the Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.18]">
                Health Extends Beyond the Absence of Disease
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full" />

              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Established to bridge the gap between clinical knowledge and community realities, the Foundation recognises that population health is shaped long before individuals reach a hospital. Mental wellbeing, behavioural and substance dependencies, maternal-child vulnerability, financial strain, and social inequalities all directly affect human dignity and life outcomes.
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Operating across our Abuja Headquarters and Sokoto regional office, our multidisciplinary structure brings together medical doctors, specialist nurses, epidemiologists, peacebuilding scholars, health-data analysts, and editorial communicators.
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                By integrating preventive health screenings, accessible public education, conflict-sensitive community outreach, and structured health data research, we work alongside healthcare institutions and community leaders to build healthier, more resilient communities.
              </p>

              {/* Statutory Registration Credentials Grid */}
              <div className="mt-4 p-5 sm:p-6 rounded-xl bg-canvas border border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="border-l-3 border-primary pl-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    CAC Registration
                  </div>
                  <div className="text-base font-bold text-navy mt-0.5">
                    CAC No. 9469157
                  </div>
                  <div className="text-xs text-primary font-semibold mt-0.5">
                    Incorporated Trustees
                  </div>
                </div>
                <div className="border-l-3 border-navy pl-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Registration Date
                  </div>
                  <div className="text-base font-bold text-navy mt-0.5">
                    7 April 2026
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Federal Republic of Nigeria
                  </div>
                </div>
                <div className="border-l-3 border-blue pl-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Tax Identification (TIN)
                  </div>
                  <div className="text-base font-bold text-navy mt-0.5">
                    2623366408281
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Statutory Compliance
                  </div>
                </div>
              </div>
            </div>

            {/* Right Office & Operational Box */}
            <div className="lg:col-span-5 bg-canvas p-8 sm:p-9 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-4 block">
                Foundation Identity &amp; Locations
              </span>

              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-navy font-heading flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                    <span>Headquarters — Abuja, FCT</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 pl-6.5 leading-relaxed">
                    Plot 89, Vitus Mbaogu Street, Jikwoyi, FCT, Abuja, Nigeria.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy font-heading flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                    <span>Secondary Address — Sokoto</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 pl-6.5 leading-relaxed">
                    01 Federal Layout, Arkilla, Sokoto, Nigeria.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-navy font-heading flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                    <span>Official Communication</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 pl-6.5 leading-relaxed">
                    Official Email:{" "}
                    <a
                      href="mailto:emmanuel.awosan@libertyhealthwellbeing.org"
                      className="font-semibold text-navy hover:text-primary underline"
                    >
                      emmanuel.awosan@libertyhealthwellbeing.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200/80 text-xs text-slate-500">
                Tagline: <strong className="text-navy">Advancing Global Health. Transforming Lives.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: VISION & MISSION STRIP
      ========================================= */}
      <section className="py-20 lg:py-24 bg-canvas border-y border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="p-8 sm:p-10 rounded-xl bg-white border-t-4 border-navy shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy font-heading mb-4">
                  <Compass className="w-4 h-4 text-primary" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 text-navy">
                  Equitable Health, Mental Wellbeing &amp; Dignity
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal italic">
                  “A world where individuals and communities have equitable opportunities to achieve good health, mental wellbeing, dignity and a better quality of life.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Global outlook rooted in community impact.
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-xl bg-white border-t-4 border-primary shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary font-heading mb-4">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 text-navy">
                  Evidence-Based Education, Prevention &amp; Advocacy
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal italic">
                  “To advance health and wellbeing through evidence-based education, preventive healthcare, research, community empowerment, advocacy and partnerships that address health inequalities and the wider determinants of health.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Addressing health inequalities and wider social determinants.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: REGISTERED BOARD OF TRUSTEES (GOVERNANCE)
      ========================================= */}
      <section id="board-of-trustees" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
              Statutory Governance · CAC Registration No. 9469157
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Registered Board of Trustees
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed font-normal">
              Liberty Health &amp; Wellbeing Foundation is governed by its Incorporated Trustees registered with the Corporate Affairs Commission (CAC) of the Federal Republic of Nigeria on 7 April 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
            {boardOfTrustees.map((trustee) => (
              <div
                key={trustee.name}
                className="p-7 sm:p-8 bg-white border-r border-b border-slate-200 flex flex-col justify-between relative"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-navy" />
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary font-heading">
                      {trustee.role}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-300">
                      {trustee.index}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-navy font-heading leading-snug">
                    {trustee.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1.5 leading-relaxed">
                    {trustee.credentials}
                  </p>
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    {trustee.summary}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Incorporated Trustee · CAC 9469157
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: CORE APPROACHES & VALUES
      ========================================= */}
      <section className="py-20 lg:py-28 bg-canvas">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Principles that Anchor Our Work
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Our institutional values shape our programmes, research, and collaborations across Nigeria and internationally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200 bg-white">
            {approaches.map((app, idx) => (
              <div
                key={app.title}
                className="p-7 sm:p-8 border-r border-b border-slate-200 flex flex-col justify-between relative"
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-navy" />
                <div>
                  <div className="text-2xl font-extrabold font-mono text-primary leading-none mb-5">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-extrabold text-navy font-heading mb-2.5">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: LEADERSHIP & TEAM PREVIEW (UNIQUE PROFILE LINKS)
      ========================================= */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
                Leadership &amp; Specialists
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
                Meet Our Multidisciplinary Team
              </h2>
              <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed font-normal">
                Medical doctors, specialist nurses, peacebuilding scholars, editorial leaders, and communications professionals driving our mission.
              </p>
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white text-xs sm:text-sm font-semibold shrink-0"
            >
              <span>View Full Team Directory</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Dr. Oluwasegun E. Awosan */}
            <div className="rounded-2xl bg-canvas border border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] p-5 sm:p-6 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-4">
                  <Image
                    src="/images/Segun Awosan.jpeg"
                    alt="Dr. Oluwasegun E. Awosan"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy font-heading block mb-1">
                  Executive Leadership
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy font-heading leading-snug">
                  Dr. Oluwasegun E. Awosan
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                  Founder &amp; Chairman, Board of Trustees
                </p>
              </div>
              <div className="mt-4 pt-3.5 border-t border-slate-200/70">
                <Link
                  href="/team#founder-chairman"
                  className="text-xs font-bold text-navy group-hover:text-primary inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Profile: Dr. Oluwasegun Awosan</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Dr. Florence F. Awosan */}
            <div className="rounded-2xl bg-canvas border border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] p-5 sm:p-6 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-4">
                  <Image
                    src="/images/Dr. Florence F. Awosan, PhD img.jpeg"
                    alt="Dr. Florence F. Awosan, PhD"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary font-heading block mb-1">
                  Governance &amp; Engagement
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy font-heading leading-snug">
                  Dr. Florence F. Awosan, PhD
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                  Secretary, Board of Trustees · Peacebuilding &amp; Outreach Safety
                </p>
              </div>
              <div className="mt-4 pt-3.5 border-t border-slate-200/70">
                <Link
                  href="/team#governance-engagement"
                  className="text-xs font-bold text-primary group-hover:text-navy inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Profile: Dr. Florence Awosan</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Dr. Wuraola Ruth Awosan */}
            <div className="rounded-2xl bg-canvas border border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] p-5 sm:p-6 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-4">
                  <Image
                    src="/images/Wura Awosan.jpeg"
                    alt="Dr. Wuraola Ruth Awosan"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue font-heading block mb-1">
                  Medical &amp; Clinical Team
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy font-heading leading-snug">
                  Dr. Wuraola Ruth Awosan
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                  MD, MPH (Epidemiology) · DrPH Candidate (Maternal &amp; Child Health)
                </p>
              </div>
              <div className="mt-4 pt-3.5 border-t border-slate-200/70">
                <Link
                  href="/team#dr-wuraola-awosan"
                  className="text-xs font-bold text-blue group-hover:text-navy inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Profile: Dr. Wuraola Awosan</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Mariam Adebukola Ogunjobi */}
            <div className="rounded-2xl bg-canvas border border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] p-5 sm:p-6 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-4">
                  <Image
                    src="/images/Nurse Maria img.jpeg"
                    alt="Mariam Adebukola Ogunjobi"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue font-heading block mb-1">
                  Medical &amp; Clinical Team
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy font-heading leading-snug">
                  Mariam Adebukola Ogunjobi
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                  Clinical Nurse Specialist — Breast Care Oncology
                </p>
              </div>
              <div className="mt-4 pt-3.5 border-t border-slate-200/70">
                <Link
                  href="/team#mariam-adebukola-ogunjobi"
                  className="text-xs font-bold text-blue group-hover:text-navy inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Profile: Mariam Ogunjobi</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Dr. Awosan Oluwagbenga S. */}
            <div className="rounded-2xl bg-canvas border border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] p-5 sm:p-6 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-4">
                  <Image
                    src="/images/Awosan Gbenga.jpeg"
                    alt="Dr. Awosan Oluwagbenga S."
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue font-heading block mb-1">
                  Medical &amp; Clinical Team
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy font-heading leading-snug">
                  Dr. Awosan Oluwagbenga S.
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                  Medical Doctor (MBBS) · MSc Public Health (In Progress)
                </p>
              </div>
              <div className="mt-4 pt-3.5 border-t border-slate-200/70">
                <Link
                  href="/team#dr-awosan-oluwagbenga"
                  className="text-xs font-bold text-blue group-hover:text-navy inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Profile: Dr. Oluwagbenga Awosan</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Bolaji Temitope Oyemade */}
            <div className="rounded-2xl bg-canvas border border-slate-200/80 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05)] p-5 sm:p-6 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 mb-4">
                  <Image
                    src="/images/Chief editor img.jpeg"
                    alt="Bolaji Temitope Oyemade"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary font-heading block mb-1">
                  Editorial Department
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy font-heading leading-snug">
                  Bolaji Temitope Oyemade
                </h3>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                  Chief Editor · MA Peace, Conflict &amp; Humanitarian Studies
                </p>
              </div>
              <div className="mt-4 pt-3.5 border-t border-slate-200/70">
                <Link
                  href="/team#bolaji-temitope-oyemade"
                  className="text-xs font-bold text-primary group-hover:text-navy inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Profile: Bolaji Oyemade</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 7: CLOSING CALL TO ACTION
      ========================================= */}
      <CommunityCTA
        badge="Advancing Global Health. Transforming Lives."
        title="Join us in advancing global health and transforming lives."
        subtitle="Explore our Founding Volunteers Programme, strategic partnership collaborations, or contact our secretariat."
        primaryButtonText="Volunteer & Opportunities"
        primaryButtonHref="/opportunities"
        secondaryButtonText="Contact Our Secretariat"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
