import React from "react";
import Link from "next/link";
import CommunityCTA from "@/components/CommunityCTA";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import { ArrowRight } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mission, Vision, Focus Areas & Research · Liberty Health & Wellbeing Foundation",
  description:
    "Explore the Vision, Mission, 7 Focus Areas, Research & Policy Advocacy, and Programmes of Liberty Health & Wellbeing Foundation (CAC No. 9469157).",
  alternates: {
    canonical: "/mission-vision",
  },
  openGraph: {
    title:
      "Mission, Vision & 7 Focus Areas | Liberty Health & Wellbeing Foundation",
    description:
      "Advancing Global Health. Transforming Lives. Explore our Vision, Mission, 7 Focus Areas, and Research, Policy & Advocacy initiatives.",
    url: "https://libertyhealthwellbeing.org/mission-vision",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mission & Vision - Liberty Health & Wellbeing Foundation",
      },
    ],
  },
};

export default function MissionVisionPage() {
  const focusAreas = [
    {
      number: "01",
      title: "Mental Health & Wellbeing",
      description:
        "Promoting mental health awareness, improving health literacy, challenging stigma and encouraging access to appropriate support.",
    },
    {
      number: "02",
      title: "Addiction & Gambling Awareness",
      description:
        "Raising awareness of substance misuse, alcohol-related harm, gambling addiction and other behavioural dependencies, including their effects on mental health, families and financial wellbeing.",
    },
    {
      number: "03",
      title: "Preventive Healthcare & Health Access",
      description:
        "Promoting disease prevention, health education, early detection, screening awareness and equitable access to healthcare information and services.",
    },
    {
      number: "04",
      title: "Women’s, Maternal & Child Health",
      description:
        "Supporting education, awareness and community initiatives focused on women’s health, maternal wellbeing, child health and improving health outcomes for families.",
    },
    {
      number: "05",
      title: "Health Information & Community Resources",
      description:
        "Improving access to reliable information, educational materials and practical resources that help individuals make informed decisions about their health and wellbeing.",
    },
    {
      number: "06",
      title: "Research, Policy & Advocacy",
      description:
        "Supporting evidence-based research and advocacy addressing health inequalities, social determinants of health and institutional practices affecting wellbeing, dignity and community safety.",
    },
    {
      number: "07",
      title: "Global Health & Partnerships",
      description:
        "Developing relationships with healthcare professionals, researchers, businesses and organisations to strengthen community health initiatives and international collaboration.",
    },
  ];

  const researchInterests = [
    "Public health and health inequalities.",
    "Mental health and addiction.",
    "Maternal, women’s and child health.",
    "Preventive healthcare and health literacy.",
    "Social and economic determinants of health.",
    "Conflict, peacebuilding, human security and population health.",
    "Institutional practices and public systems that affect wellbeing, safety and dignity.",
  ];

  const programmeCategories = [
    {
      index: "01",
      title: "Community Health Outreach",
      desc: "Grassroots preventive screenings, health literacy engagements, and safe community mobilisation across Nigerian communities.",
    },
    {
      index: "02",
      title: "Health Education & Public Awareness",
      desc: "Accessible public health campaigns empowering individuals and families with evidence-based health knowledge.",
    },
    {
      index: "03",
      title: "Maternal & Child Health Initiatives",
      desc: "Collaborative programmes advancing prenatal education, maternal safety, and early childhood wellbeing.",
    },
    {
      index: "04",
      title: "Mental Health & Addiction Awareness",
      desc: "Addressing emotional wellbeing, substance misuse, alcohol-related harm, and gambling addiction.",
    },
    {
      index: "05",
      title: "Research, Policy & Advocacy",
      desc: "Empirical public health research, policy analysis, and advocacy addressing social and institutional determinants of health.",
    },
    {
      index: "06",
      title: "Partner Collaborations",
      desc: "Coordinated initiatives with WuraCare MCI, 60 Seconds With Doc, Titan Sales, and healthcare professionals.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO: STRATEGIC DIRECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-navy-deep text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        <div className="relative max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pb-12 sm:pb-16 lg:pb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary font-heading mb-3">
            Advancing Global Health. Transforming Lives.
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12]">
            Vision, Mission &amp; Focus Areas
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-5 max-w-3xl mx-auto leading-relaxed font-light">
            Our strategic mandate, seven core focus areas, research &amp; policy advocacy, and community programmes at Liberty Health &amp; Wellbeing Foundation (CAC No. 9469157).
          </p>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          DUAL STRATEGIC BLUEPRINT: VISION & MISSION
      ========================================= */}
      <section className="pt-12 sm:pt-16 pb-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              01 · Strategic Mandate
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Vision &amp; Mission
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Recognising that health extends beyond the absence of disease to encompass mental wellbeing, social equity, dignity, and institutional fairness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-slate-200">
            {/* Vision Column */}
            <div className="p-8 sm:p-12 bg-navy text-white border-r border-b border-navy-dark flex flex-col justify-between relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
                    Our Vision
                  </span>
                  <span className="text-xs font-mono font-bold text-white/30">
                    01
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight mb-5">
                  Equitable Opportunities for Health, Mental Wellbeing &amp; Dignity
                </h3>

                <blockquote className="text-lg sm:text-xl font-normal text-slate-100 leading-relaxed border-l-2 border-primary pl-5 py-1">
                  “A world where individuals and communities have equitable opportunities to achieve good health, mental wellbeing, dignity and a better quality of life.”
                </blockquote>
              </div>

              <div className="mt-10 pt-5 border-t border-white/15 text-xs text-slate-300">
                Liberty Health &amp; Wellbeing Foundation · Global &amp; Community Outlook
              </div>
            </div>

            {/* Mission Column */}
            <div className="p-8 sm:p-12 bg-canvas border-r border-b border-slate-200 flex flex-col justify-between relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-navy" />
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-widest text-navy font-heading">
                    Our Mission
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    02
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading tracking-tight mb-5">
                  Evidence-Based Education, Prevention, Research &amp; Advocacy
                </h3>

                <blockquote className="text-lg sm:text-xl font-normal text-slate-700 leading-relaxed border-l-2 border-navy pl-5 py-1">
                  “To advance health and wellbeing through evidence-based education, preventive healthcare, research, community empowerment, advocacy and partnerships that address health inequalities and the wider determinants of health.”
                </blockquote>
              </div>

              <div className="mt-10 pt-5 border-t border-slate-200 text-xs text-slate-500">
                Addressing Health Inequalities &amp; Wider Social Determinants
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          THE SEVEN OFFICIAL FOCUS AREAS (ARCHITECTURAL EDITORIAL INDEX)
      ========================================= */}
      <section id="focus" className="py-20 lg:py-28 bg-canvas">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                02 · Strategic Priorities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
                Our Seven Focus Areas
              </h2>
              <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Comprehensive public health priorities addressing physical health, mental wellbeing, addiction awareness, maternal-child outcomes, and research advocacy.
              </p>
            </div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              07 CORE MANDATES
            </div>
          </div>

          {/* Architectural Hairline Grid — No Icon Slop, No Fake Footers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200 bg-white">
            {focusAreas.map((area) => (
              <div
                key={area.number}
                className="p-7 sm:p-9 border-r border-b border-slate-200 flex flex-col justify-between relative"
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-navy" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-primary leading-none mb-6">
                    {area.number}
                  </div>
                  <h3 className="text-xl font-extrabold text-navy font-heading leading-snug mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Cell in the 4x2 Architectural Grid: Direct ₦20M Fundraising Callout */}
            <div className="p-7 sm:p-9 bg-navy text-white border-r border-b border-navy-dark flex flex-col justify-between relative">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-primary" />
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-6">
                  ₦20,000,000 APPEAL
                </div>
                <h3 className="text-xl font-extrabold text-white font-heading leading-snug mb-3">
                  Help Us Deliver These Seven Priorities
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Support the establishment, development, and community delivery of our health education, outreach, and research initiatives across Nigeria.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/15">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary"
                >
                  <span>Support the Appeal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          RESEARCH, POLICY & ADVOCACY (SECTION 9 OF BRIEF)
      ========================================= */}
      <section
        id="research-policy"
        className="py-20 lg:py-28 bg-white border-t border-slate-200/80"
      >
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block">
                03 · Research, Policy &amp; Advocacy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight leading-[1.15]">
                Addressing the Wider Determinants of Health &amp; Human Dignity
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Liberty Health &amp; Wellbeing Foundation recognises that health outcomes are shaped not only by healthcare services, but also by social, economic, environmental and institutional conditions.
              </p>

              {/* Editorial & Research Leadership Box */}
              <div className="p-6 sm:p-7 rounded-xl bg-navy text-white border border-navy-dark space-y-3 mt-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary block font-heading">
                  Editorial &amp; Research Leadership
                </span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Our publications and research outputs are supported by{" "}
                  <strong>Bolaji Temitope Oyemade</strong> (Chief Editor) and{" "}
                  <strong>Moses Bolawaye Adegbite</strong> (Assistant Editor), alongside our medical, nursing, public health and academic contributors.
                </p>
                <div className="pt-2">
                  <Link
                    href="/team#editorial"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                  >
                    <span>Meet Our Editorial Department</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Clean Numbered Research Index Table */}
            <div className="lg:col-span-7">
              <div className="border-t-2 border-navy">
                <div className="py-4 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-navy font-heading">
                    Our Research &amp; Advocacy Interests
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    01 — 07
                  </span>
                </div>
                <div className="divide-y divide-slate-200 border-b border-slate-200">
                  {researchInterests.map((item, idx) => (
                    <div
                      key={idx}
                      className="py-4 sm:py-5 flex items-baseline gap-5"
                    >
                      <span className="text-xs font-mono font-bold text-primary shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-navy leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PROGRAMMES & IMPACT (SECTION 10 OF BRIEF)
      ========================================= */}
      <section
        id="programmes"
        className="py-20 lg:py-28 bg-canvas border-t border-slate-200/80"
      >
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              04 · Programmes &amp; Impact Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
              Planned &amp; Developing Programme Categories
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Verified outreach reports, photographs and impact summaries will be published as programmes are delivered across our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200 bg-white">
            {programmeCategories.map((prog) => (
              <div
                key={prog.title}
                className="p-7 sm:p-8 border-r border-b border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-primary block mb-4">
                    {prog.index}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy font-heading mb-2.5">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CLOSING CALL TO ACTION
      ========================================= */}
      <CommunityCTA
        badge="Support Our Programmes"
        title="Help Us Build Healthier Communities"
        subtitle="Support our ₦20,000,000 Fundraising Initiative or register for our 2026/2027 Founding Volunteers Programme."
        primaryButtonText="Support ₦20M Fundraising Appeal"
        primaryButtonHref="/donate"
        secondaryButtonText="Volunteer With Us"
        secondaryButtonHref="/opportunities"
      />
    </div>
  );
}
