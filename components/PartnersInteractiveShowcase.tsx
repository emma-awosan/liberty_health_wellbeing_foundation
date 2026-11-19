"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  HeartHandshake,
  Laptop,
  CheckCircle2,
  Sparkles,
  CreditCard,
  Megaphone,
  Stethoscope,
  Globe2,
  ArrowLeft,
  ArrowRight,
  Layers,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function PartnersInteractiveShowcase() {
  const [activePartnerIdx, setActivePartnerIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"deck" | "stack">("deck");
  const touchStartX = useRef<number | null>(null);

  const TOTAL_PARTNERS = 5;

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "wuracare-mci") setActivePartnerIdx(0);
      if (hash === "60-sec-with-doc") setActivePartnerIdx(1);
      if (hash === "marlix-healthcare") setActivePartnerIdx(2);
      if (hash === "titan-sales") setActivePartnerIdx(3);
      if (hash === "balyson-medical-initiative") setActivePartnerIdx(4);
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handlePrev = () => {
    setActivePartnerIdx((prev) => (prev - 1 + TOTAL_PARTNERS) % TOTAL_PARTNERS);
  };

  const handleNext = () => {
    setActivePartnerIdx((prev) => (prev + 1) % TOTAL_PARTNERS);
  };

  const partnerTabs = [
    {
      id: "wuracare-mci",
      index: "01",
      shortName: "WuraCare MCI",
      fullName: "WuraCares Mother and Child Initiative",
      category: "Maternal, Child & Community Health Partner",
      image: "/images/WuraCare MCI partner.jpeg",
    },
    {
      id: "60-sec-with-doc",
      index: "02",
      shortName: "60 Seconds With Doc",
      fullName: "60 Seconds With Doc",
      category: "Health Education & Community Medical Outreach Partner",
      image: "/images/60 seconds with doc.jpeg",
    },
    {
      id: "marlix-healthcare",
      index: "03",
      shortName: "Marlix Healthcare Ltd",
      fullName: "Marlix Healthcare Ltd",
      category: "Official Healthcare Partner",
      image: "/images/Marlix Healthcare Ltd.png",
    },
    {
      id: "titan-sales",
      index: "04",
      shortName: "Titan Sales Limited",
      fullName: "Titan Sales Limited",
      category: "Strategic Technology & Digital Growth Partner",
      image: "/images/TITAN SALES LIMITED.jpeg",
    },
    {
      id: "balyson-medical-initiative",
      index: "05",
      shortName: "Balyson Medical Initiative",
      fullName: "Balyson Medical Initiative",
      category: "Humanitarian Medical Assistance & Community Healthcare Partner",
      image: "/images/BALYSON MEDICAL INITIATIVE.jpeg",
    },
  ];

  const renderPartnerCard = (idx: number, isStickyStack = false) => {
    if (idx === 0) {
      return (
        <div
          key="wuracare-mci"
          id="wuracare-mci"
          style={isStickyStack ? { top: "92px" } : undefined}
          className={`${
            isStickyStack ? "lg:sticky" : "relative z-10"
          } rounded-2xl bg-white border border-slate-200 overflow-hidden`}
        >
          {/* Top Architectural Index Bar */}
          <div className="bg-navy text-white px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-primary">
                PARTNER 01 / 05
              </span>
              <span className="text-white/25">|</span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white font-heading">
                Maternal, Child &amp; Community Health Partner
              </span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              Confirmed Strategic Partner
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-4 flex flex-col items-start text-left">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-50 mb-5">
                  <Image
                    src="/images/WuraCare MCI partner.jpeg"
                    alt="WuraCares Mother and Child Initiative (WuraCare MCI)"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 360px"
                    priority
                  />
                </div>

                <div className="border-l-2 border-primary pl-3 mb-2">
                  <span className="block text-xs font-bold uppercase tracking-widest text-primary font-heading">
                    Maternal, Child &amp; Community Health
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-navy font-heading">
                  WuraCares Mother and Child Initiative
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  Also Known As: WuraCare MCI
                </p>

                <div className="mt-5 w-full space-y-2.5 text-left bg-canvas p-4 rounded-xl border border-slate-200/80 text-xs">
                  <div>
                    <span className="font-bold text-navy block">
                      Founder &amp; Chairman:
                    </span>
                    <span className="text-slate-600">
                      Dr. Wuraola Ruth Awosan (MD, MPH, DrPH Candidate)
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="font-bold text-navy block">Trustee:</span>
                    <span className="text-slate-600">
                      Dr. Oluwasegun E. Awosan
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2">
                    About Our Partner
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    WuraCares Mother and Child Initiative (WuraCare MCI) is an independently led nongovernmental organisation focused on advancing maternal and child health and wellbeing. Founded and chaired by Dr. Wuraola Ruth Awosan — a medical doctor, public health epidemiologist and DrPH candidate in Maternal and Child Health — the initiative contributes clinical knowledge, epidemiological expertise and community-focused approaches to protecting mothers, infants and families.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-canvas border border-slate-200/80">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-2 flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-primary" />
                    <span>Partnership Story &amp; Strategic Alignment</span>
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    The partnership between Liberty Health &amp; Wellbeing Foundation and WuraCare MCI reflects a shared commitment to preventive healthcare, women&apos;s health, maternal wellbeing and improved outcomes for children and families. Both organisations maintain independent identities and governance while collaborating on research-informed maternal and child health initiatives.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-3">
                    Areas of Collaboration
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Maternal and child health education.",
                      "Pregnancy and postnatal health awareness.",
                      "Preventive healthcare and early intervention.",
                      "Community health outreach.",
                      "Health literacy for women and families.",
                      "Public health research and needs assessment.",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-canvas p-3 rounded-lg border border-slate-200/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 text-xs sm:text-sm text-slate-600 border-t border-slate-200/80 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    <strong>Shared Direction:</strong> Coordinated health education, community engagement and research-informed programmes that strengthen maternal and child wellbeing.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (idx === 1) {
      return (
        <div
          key="60-sec-with-doc"
          id="60-sec-with-doc"
          style={isStickyStack ? { top: "112px" } : undefined}
          className={`${
            isStickyStack ? "lg:sticky" : "relative z-10"
          } rounded-2xl bg-white border border-slate-200 overflow-hidden`}
        >
          {/* Top Architectural Index Bar */}
          <div className="bg-navy text-white px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-primary">
                PARTNER 02 / 05
              </span>
              <span className="text-white/25">|</span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white font-heading">
                Health Education &amp; Community Medical Outreach Partner
              </span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              Confirmed Strategic Partner
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-4 flex flex-col items-start text-left">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-50 mb-5">
                  <Image
                    src="/images/60 seconds with doc.jpeg"
                    alt="60 Seconds With Doc"
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>

                <div className="border-l-2 border-primary pl-3 mb-2">
                  <span className="block text-xs font-bold uppercase tracking-widest text-primary font-heading">
                    Health Education &amp; Medical Outreach
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-navy font-heading">
                  60 Seconds With Doc
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Confirmed Partner — Health Education &amp; Community Medical Outreach
                </p>

                <div className="mt-5 w-full space-y-2.5 text-left bg-canvas p-4 rounded-xl border border-slate-200/80 text-xs">
                  <div>
                    <span className="font-bold text-navy block mb-1">
                      Leadership:
                    </span>
                    <ul className="space-y-1 text-slate-600">
                      <li>• Dr. Oyedunmade Jesusemire Ibukunoluwapo (MBBS)</li>
                      <li>• Nurse Adeyanju Funmilayo Monisayo (BSN Honors)</li>
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="font-bold text-navy">Instagram:</span>
                    <a
                      href="https://instagram.com/60secwithdoc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
                    >
                      <Globe2 className="w-3.5 h-3.5" />
                      <span>@60secwithdoc</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2">
                    About 60 Seconds With Doc
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    60 Seconds With Doc is a health education and community healthcare initiative committed to improving access to reliable medical knowledge and essential healthcare services in underserved communities.
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-3">
                    Founded and led by healthcare professionals{" "}
                    <strong>
                      Dr. Oyedunmade Jesusemire Ibukunoluwapo (MBBS)
                    </strong>{" "}
                    and{" "}
                    <strong>
                      Nurse Adeyanju Funmilayo Monisayo (BSN Honors)
                    </strong>
                    , the initiative combines accessible health education with community medical outreach.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-navy text-white border border-navy-dark">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-primary" />
                    <span>Partner Mission Statement</span>
                  </h4>
                  <blockquote className="text-sm sm:text-base italic font-medium text-slate-100 leading-relaxed">
                    “To improve access to quality healthcare by providing essential medical services and health education to underserved communities, one community at a time.”
                  </blockquote>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-3">
                    Areas of Collaboration
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Community medical outreach.",
                      "Public health education.",
                      "Preventive health awareness.",
                      "Short-form digital health communication.",
                      "Screening and health literacy initiatives.",
                      "Collaborative community campaigns in Nigeria.",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-canvas p-3 rounded-lg border border-slate-200/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (idx === 2) {
      return (
        <div
          key="marlix-healthcare"
          id="marlix-healthcare"
          style={isStickyStack ? { top: "132px" } : undefined}
          className={`${
            isStickyStack ? "lg:sticky" : "relative z-10"
          } rounded-2xl bg-white border border-slate-200 overflow-hidden`}
        >
          {/* Top Architectural Index Bar */}
          <div className="bg-navy text-white px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-primary">
                PARTNER 03 / 05
              </span>
              <span className="text-white/25">|</span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white font-heading">
                Official Healthcare Partner
              </span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              Confirmed Strategic Partner
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-4 flex flex-col items-start text-left">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-50 mb-5">
                  <Image
                    src="/images/Marlix Healthcare Ltd.png"
                    alt="Marlix Healthcare Ltd — Official Healthcare Partner"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>

                <div className="border-l-2 border-primary pl-3 mb-2">
                  <span className="block text-xs font-bold uppercase tracking-widest text-primary font-heading">
                    Official Healthcare Partner
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-navy font-heading">
                  Marlix Healthcare Ltd
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Preventive Medicine, Outpatient Care &amp; Community Outreach
                </p>

                <div className="mt-5 w-full space-y-3 text-left bg-canvas p-4 rounded-xl border border-slate-200/80 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/40 bg-slate-100 shrink-0">
                      <Image
                        src="/images/Dr. Valentine.jpeg"
                        alt="Dr. Okwuchukwu Valentine C."
                        fill
                        sizes="48px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-navy block">
                        CEO / Managing Director:
                      </span>
                      <span className="text-slate-700 font-semibold block">
                        Dr. Okwuchukwu Valentine C.
                      </span>
                      <span className="text-slate-500 text-[11px]">
                        Qualifications: MBBS, MPH, Cli.Sono
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2">
                    About Marlix Healthcare Ltd
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Liberty Health &amp; Wellbeing Foundation is pleased to recognise <strong>Marlix Healthcare Ltd</strong> as an official healthcare partner. Marlix Healthcare Ltd is a healthcare organisation committed to improving access to quality healthcare through preventive medicine, early detection, outpatient medical services, community outreach and public health education.
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-3">
                    The partnership brings together a shared commitment to strengthening community health, improving healthcare awareness and supporting initiatives that promote better health outcomes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-xl bg-canvas border border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                      Vision
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-navy italic">
                      “Redefining access to quality healthcare, one community at a time.”
                    </p>
                  </div>
                  <div className="p-4 sm:p-5 rounded-xl bg-canvas border border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                      Motto
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-navy italic">
                      “Better Health. A Healthier You.”
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-3">
                    Areas of Partnership and Collaboration
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Preventive healthcare and disease awareness.",
                      "Community medical outreach and health screening.",
                      "Public health education and health promotion.",
                      "Clinical education and sonography awareness.",
                      "Community wellbeing programmes.",
                      "Healthcare research and evidence-informed initiatives.",
                      "Professional collaboration and capacity building.",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-canvas p-3 rounded-lg border border-slate-200/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-navy text-white border border-navy-dark">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2 flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-primary" />
                    <span>Our Shared Commitment</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                    Through this partnership, Liberty Health &amp; Wellbeing Foundation and Marlix Healthcare Ltd aim to combine their expertise, resources and community engagement efforts to advance preventive healthcare and improve access to reliable health information.{" "}
                    <strong className="text-primary">
                      Advancing Global Health. Transforming Lives.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (idx === 3) {
      return (
        <div
          key="titan-sales"
          id="titan-sales"
          style={isStickyStack ? { top: "152px" } : undefined}
          className={`${
            isStickyStack ? "lg:sticky" : "relative z-10"
          } rounded-2xl bg-white border border-slate-200 overflow-hidden`}
        >
          {/* Top Architectural Index Bar */}
          <div className="bg-navy text-white px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-primary">
                PARTNER 04 / 05
              </span>
              <span className="text-white/25">|</span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white font-heading">
                Strategic Technology &amp; Digital Growth Partner
              </span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
              Confirmed Strategic Partner
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column */}
              <div className="lg:col-span-4 flex flex-col items-start text-left">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-50 mb-5">
                  <Image
                    src="/images/TITAN SALES LIMITED.jpeg"
                    alt="Titan Sales Limited — Duncan Edemekong"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>

                <div className="border-l-2 border-primary pl-3 mb-2">
                  <span className="block text-xs font-bold uppercase tracking-widest text-primary font-heading">
                    Technology, Sales &amp; Digital Growth Partner
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-navy font-heading">
                  Titan Sales Limited
                </h3>
                <p className="text-xs font-semibold text-slate-600 mt-1">
                  Founder &amp; CEO: <strong>Mr. Duncan Edemekong</strong>
                </p>

                <div className="mt-5 w-full space-y-2.5 text-left bg-canvas p-4 rounded-xl border border-slate-200/80 text-xs">
                  <div>
                    <span className="font-bold text-navy block mb-0.5">
                      Corporate Office:
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      Suite 9, Und St, Plot 1121 Oladipo Diya St, Gudu, Abuja 900104, FCT, Nigeria
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="font-bold text-navy">Official Website:</span>
                    <a
                      href="https://titansales.ltd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
                    >
                      <span>titansales.ltd</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2">
                    About Titan Sales Limited &amp; Our Story
                  </h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Founded by <strong>Mr. Duncan Edemekong</strong> on the principles of innovation, customer-centricity, and excellence, <strong>Titan Sales Limited</strong> brings together a wealth of experience in strategic sales solutions, technology, and digital marketing.
                  </p>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-3">
                    Collaborating with Liberty Health &amp; Wellbeing Foundation as a Strategic Technology &amp; Digital Growth Partner, Titan Sales Limited supports digital infrastructure, cross-border payment technology, and public health awareness outreach.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-xl bg-navy text-white border border-navy-dark">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2 flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-primary" />
                    <span>Partner Mission Statement</span>
                  </h4>
                  <blockquote className="text-sm sm:text-base italic font-medium text-slate-100 leading-relaxed">
                    “To empower organisations and businesses with strategic solutions that drive growth, foster loyalty, and build resilient brands—leveraging the latest technologies and industry insights.”
                  </blockquote>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-canvas border border-slate-200/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider mb-2.5 font-heading">
                      <CreditCard className="w-4 h-4 text-primary" />
                      <span>FX Integration &amp; Payment Tech</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      <li>• International donation payment solutions.</li>
                      <li>• Cross-border payment &amp; FX integrations.</li>
                      <li>• Transaction administration and reporting.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-canvas border border-slate-200/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider mb-2.5 font-heading">
                      <Megaphone className="w-4 h-4 text-primary" />
                      <span>E-Marketing &amp; Digital Visibility</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      <li>• Digital strategy &amp; audience development.</li>
                      <li>• Website visibility &amp; search optimisation.</li>
                      <li>• Public health awareness &amp; analytics.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        key="balyson-medical-initiative"
        id="balyson-medical-initiative"
        style={isStickyStack ? { top: "172px" } : undefined}
        className={`${
          isStickyStack ? "lg:sticky" : "relative z-10"
        } rounded-2xl bg-white border border-slate-200 overflow-hidden`}
      >
        {/* Top Architectural Index Bar */}
        <div className="bg-navy text-white px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-primary">
              PARTNER 05 / 05
            </span>
            <span className="text-white/25">|</span>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white font-heading">
              Humanitarian Medical Assistance &amp; Community Healthcare Partner
            </span>
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300">
            Confirmed Strategic Partner
          </span>
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-50 mb-5">
                <Image
                  src="/images/BALYSON MEDICAL INITIATIVE.jpeg"
                  alt="Balyson Medical Initiative — The Future of Healthcare"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
              </div>

              <div className="border-l-2 border-primary pl-3 mb-2">
                <span className="block text-xs font-bold uppercase tracking-widest text-primary font-heading">
                  Motto: The Future of Healthcare
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-navy font-heading">
                Balyson Medical Initiative
              </h3>
              <p className="text-xs font-bold text-primary uppercase tracking-wider mt-1">
                SAVE A LIFE, SAVE THE WORLD!
              </p>

              <div className="mt-5 w-full space-y-2.5 text-left bg-canvas p-4 rounded-xl border border-slate-200/80 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-navy uppercase tracking-wider text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Our Branches &amp; Partners</span>
                </div>
                <ul className="space-y-1.5 text-slate-600 pt-1 border-t border-slate-200/60">
                  <li>
                    • <strong className="text-navy">Yola, Nigeria</strong> (Head Branch)
                  </li>
                  <li>
                    • <strong className="text-navy">Atlanta, United States of America</strong>
                  </li>
                  <li>
                    • <strong className="text-navy">Kyiv, Ukraine</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-8 flex flex-col gap-6 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2">
                  Our Aim
                </h4>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Balyson Medical Initiative is a non-profit humanitarian organization dedicated to improving access to quality healthcare and providing medical assistance to vulnerable, underserved and disadvantaged populations. Our primary aim is to alleviate human suffering, promote health and well-being, and ensure that individuals have access to essential medical care regardless of their financial or social circumstances.
                </p>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-3">
                  We are particularly committed to supporting displaced persons, less-privileged communities, persons living with disabilities and other vulnerable groups through medical outreach, humanitarian assistance and community healthcare programmes.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-3">
                  Our Objectives
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Providing free or affordable medical assistance, essential medications and healthcare supplies to people in need.",
                    "Supporting internally displaced persons, refugees and victims of conflicts, disasters and humanitarian emergencies.",
                    "Improving healthcare access for less-privileged individuals, persons with disabilities, children, women and elderly persons.",
                    "Organizing free medical outreaches, health screenings and community health awareness programmes.",
                    "Promoting disease prevention, health education, maternal and child healthcare, and general public health awareness.",
                    "Facilitating access to medical treatment, referrals, rehabilitation and essential healthcare services.",
                    "Collaborating with hospitals, healthcare professionals, NGOs and international humanitarian organizations to strengthen healthcare delivery.",
                    "Promoting volunteerism, compassion, medical research and sustainable community healthcare development.",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-canvas p-3 rounded-lg border border-slate-200/70"
                    >
                      <span className="text-[11px] font-mono font-bold text-primary shrink-0 mt-0.5">
                        0{i + 1}.
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-xl bg-navy text-white border border-navy-dark">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2 flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-primary" />
                  <span>Our Commitment</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  We are committed to saving lives, restoring hope, reducing healthcare inequalities and making quality medical assistance accessible to those who need it most.{" "}
                  <strong className="text-primary">
                    SAVE A LIFE, SAVE THE WORLD!
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-canvas relative">
      <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Mode Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              01 · Official Strategic Alliances
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Confirmed Strategic Partners
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed font-normal">
              Organisations actively collaborating with Liberty Health &amp; Wellbeing Foundation across maternal and child health, preventive healthcare, medical education, humanitarian medical assistance, and digital technology.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Toggle Deck vs Scroll-Stack */}
            <button
              type="button"
              onClick={() =>
                setViewMode((prev) => (prev === "deck" ? "stack" : "deck"))
              }
              className="px-4 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-navy inline-flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span>
                {viewMode === "deck"
                  ? "View All Partners Expanded"
                  : "Interactive Partner View"}
              </span>
            </button>

            {viewMode === "deck" && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous partner"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next partner"
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 5-Partner Interactive Selector Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {partnerTabs.map((tab, idx) => {
            const isSelected = viewMode === "deck" && idx === activePartnerIdx;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  if (viewMode === "stack") {
                    const el = document.getElementById(tab.id);
                    el?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    setActivePartnerIdx(idx);
                  }
                }}
                className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                  isSelected
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-navy border-slate-200/80"
                }`}
              >
                <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-slate-50 border border-slate-200/60 flex items-center justify-center">
                  {tab.image ? (
                    <Image
                      src={tab.image}
                      alt={tab.shortName}
                      fill
                      className="object-contain p-1"
                      sizes="44px"
                    />
                  ) : (
                    <Laptop
                      className={`w-5 h-5 ${
                        isSelected ? "text-primary" : "text-navy"
                      }`}
                    />
                  )}
                </div>
                <div className="min-w-0">
                  <div
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isSelected ? "text-primary" : "text-slate-400"
                    }`}
                  >
                    PARTNER {tab.index} / 05
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-extrabold truncate font-heading ${
                      isSelected ? "text-white" : "text-navy"
                    }`}
                  >
                    {tab.shortName}
                  </div>
                  <div
                    className={`text-[11px] truncate ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {tab.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Render either Interactive Swipe Deck or Sticky Scroll-Stack */}
        {viewMode === "deck" ? (
          <div
            data-no-sr
            className="relative"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const deltaX = e.changedTouches[0].clientX - touchStartX.current;
              if (deltaX < -50) handleNext();
              if (deltaX > 50) handlePrev();
              touchStartX.current = null;
            }}
          >
            {renderPartnerCard(activePartnerIdx, false)}

            {/* Bottom Deck Navigation Bar */}
            <div className="mt-4 px-5 sm:px-7 py-3.5 rounded-xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {partnerTabs.map((t, dotIdx) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setActivePartnerIdx(dotIdx)}
                      aria-label={`Select ${t.fullName}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        dotIdx === activePartnerIdx
                          ? "w-8 bg-primary"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono font-bold text-slate-400 hidden sm:inline">
                  PARTNER 0{activePartnerIdx + 1} / 0{TOTAL_PARTNERS}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-full bg-canvas border border-slate-200 text-xs font-bold text-navy cursor-pointer"
                >
                  Previous Partner
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next Partner</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative space-y-12 pb-6">
            {[0, 1, 2, 3, 4].map((i) => renderPartnerCard(i, true))}
          </div>
        )}
      </div>
    </section>
  );
}
