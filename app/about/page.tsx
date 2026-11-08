import React from "react";
import Image from "next/image";
import CommunityCTA from "@/components/CommunityCTA";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import { 
  GenesisIllustration,
  GrowthIllustration,
  FutureIllustration,
  StoryArrowDesktop,
  StoryArrowMobile,
} from "@/components/StoryIllustrations";
import { 
  HeartPulse,
  ShieldAlert,
  Users,
  Stethoscope,
  Target,
  Compass,
  ShieldCheck,
  HandHeart,
  Lightbulb,
  Handshake,
  Sprout,
  CheckCircle2
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us · Liberty Health & Wellbeing Foundation",
  description:
    "Learn about Liberty Health & Wellbeing Foundation, a registered Nigerian nonprofit organisation (Incorporated Trustees, CAC No. 9469157) dedicated to preventive health and community wellbeing.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Liberty Health & Wellbeing Foundation",
    description:
      "A Nigerian nonprofit foundation committed to advancing preventive health, health education and equitable wellbeing opportunities for underserved communities.",
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
  twitter: {
    card: "summary_large_image",
    title: "About Us | Liberty Health & Wellbeing Foundation",
    description:
      "Discover the mandate, approach and values guiding Liberty Health & Wellbeing Foundation in Nigeria.",
    images: ["/images/about-hero-1.jpg"],
  },
};

export default function AboutPage() {
  const approaches = [
    {
      title: "Prevention Before Crisis",
      description: "Promoting health awareness, early diagnosis, and access to reliable information before conditions become critical.",
      icon: HeartPulse,
      highlight: "Early Intervention",
    },
    {
      title: "Communities at the Centre",
      description: "Working collaboratively with community leaders, families, and grassroots health workers to understand and address genuine needs.",
      icon: Users,
      highlight: "Grassroots Ownership",
    },
    {
      title: "Evidence that Guides Action",
      description: "Employing continuous monitoring, community feedback, and research to refine programmes for lasting positive outcomes.",
      icon: ShieldCheck,
      highlight: "Data-Informed Delivery",
    },
    {
      title: "Inclusive Health Equity",
      description: "Focusing on underserved populations, vulnerable mothers, youth, and remote localities with dignity and transparency.",
      icon: Compass,
      highlight: "Equitable Opportunity",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#051320] via-[#071929] to-[#0a233a] text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-sky/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20">
          
          <div className="text-center max-w-5xl lg:max-w-6xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary font-heading mb-3">
              Who We Are · Incorporated Trustees · CAC No. 9469157
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.14]">
              A foundation built around <br className="hidden md:inline" />
              <span>people and their wellbeing.</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-5 sm:mt-6 font-normal">
              Liberty Health &amp; Wellbeing Foundation is a registered Nigerian nonprofit organisation working to improve community health through prevention, education, inclusion, and evidence-informed initiatives.
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
          SECTION 2: ORGANISATIONAL OVERVIEW & CAC DETAILS
      ========================================= */}
      <section className="pt-10 sm:pt-14 lg:pt-18 pb-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
                About the Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.18]">
                Advancing Community Health &amp; Equitable Wellbeing in Nigeria
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full" />
              
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Liberty Health &amp; Wellbeing Foundation is a registered Nigerian nonprofit organisation working to improve community health and wellbeing through prevention, education, inclusion and evidence-informed initiatives.
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                Our work begins with the direct needs of communities. We aim to build sustainable partnerships with healthcare professionals, researchers, community organisations and institutions to achieve meaningful and practical improvements in health and quality of life.
              </p>

              {/* CAC and Registration Statline */}
              <div className="mt-4 p-5 rounded-xl bg-canvas border border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border-l-3 border-primary pl-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Incorporation Status</div>
                  <div className="text-base font-bold text-navy mt-0.5">Incorporated Trustees</div>
                  <div className="text-xs text-primary font-semibold mt-0.5">CAC No. 9469157</div>
                </div>
                <div className="border-l-3 border-navy pl-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Date of Registration</div>
                  <div className="text-base font-bold text-navy mt-0.5">7 April 2026</div>
                  <div className="text-xs text-slate-500 mt-0.5">Federal Republic of Nigeria</div>
                </div>
              </div>
            </div>

            {/* Right Approach Box */}
            <div className="lg:col-span-5 bg-canvas p-8 sm:p-9 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-4 block">
                How We Approach Our Work
              </span>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-navy font-heading flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                    <span>Prevention before crisis</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 pl-6.5 leading-relaxed">
                    Promote knowledge, early diagnosis, and access to reliable health information before crises unfold.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy font-heading flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                    <span>Communities at the centre</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 pl-6.5 leading-relaxed">
                    Work closely with communities and local partners to identify real health needs and co-develop solutions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy font-heading flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                    <span>Evidence that guides action</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 pl-6.5 leading-relaxed">
                    Use field data, research, and continuous learning to improve and adapt community programmes over time.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-200/80 text-xs text-slate-500">
                Operating Offices: <strong>Abuja Headquarters</strong> &amp; <strong>Sokoto Office</strong>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: MISSION & VISION STRIP
      ========================================= */}
      <section className="py-20 lg:py-24 bg-canvas border-y border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            <div className="p-8 sm:p-10 rounded-xl bg-white border-t-4 border-primary shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary font-heading mb-4">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 text-navy">
                  To improve community health and wellbeing
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  “To improve community health and wellbeing by delivering preventive, inclusive, and evidence-informed health programmes that address priority health needs in underserved populations.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Delivering inclusive, preventive, evidence-informed programmes.
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-xl bg-white border-t-4 border-navy shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-navy font-heading mb-4">
                  <Compass className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 text-navy">
                  Equitable healthcare access across Nigeria
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  “A Nigeria where individuals and communities have equitable access to health knowledge, preventive care, and support systems that enable healthier and more fulfilling lives.”
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Knowledge, preventive care, and enduring support systems.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: CORE APPROACHES & VALUES
      ========================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Principles that Anchor Our Work
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Our organisational values shape our interactions with communities, healthcare volunteers, and partners across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {approaches.map((app) => {
              const IconComp = app.icon;
              return (
                <div
                  key={app.title}
                  className="p-7 rounded-xl bg-canvas border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0 mb-5 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-navy font-heading mb-2">
                      {app.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {app.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-200/80 text-xs font-bold text-primary">
                    {app.highlight}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 5: CLOSING CALL TO ACTION
      ========================================= */}
      <CommunityCTA 
        badge="Building Partnerships"
        title="Building partnerships for healthier communities."
        subtitle="We welcome conversations with healthcare professionals, researchers, community organisations and potential collaborators."
        primaryButtonText="Contact the Foundation"
        primaryButtonHref="/contact"
        secondaryButtonText="Read Mission &amp; Vision"
        secondaryButtonHref="/mission-vision"
      />

    </div>
  );
}
