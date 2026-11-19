import React from "react";
import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import CommunityCTA from "@/components/CommunityCTA";

export const metadata: Metadata = {
  title:
    "2026/2027 Programme Objectives (₦20,000,000 Framework) · Liberty Health & Wellbeing Foundation",
  description:
    "Informational overview of Liberty Health & Wellbeing Foundation's ₦20,000,000 pilot programme objectives across Lagos, Abuja, and community health research.",
  alternates: {
    canonical: "https://libertyhealthwellbeing.org/donate",
  },
};

const pilotObjectives = [
  {
    index: "01",
    title: "Lagos and Abuja Outreach Pilots",
    detail:
      "Supporting initial community medical outreach pilots across Lagos and Abuja.",
  },
  {
    index: "02",
    title: "Screening and Basic Clinical Supplies",
    detail:
      "Providing preventive health screening tools and essential basic clinical supplies for community field operations.",
  },
  {
    index: "03",
    title: "Community Health Education",
    detail:
      "Delivering accessible health literacy and preventive health education across our seven core focus areas.",
  },
  {
    index: "04",
    title: "Structured Collection and Analysis of Health Data",
    detail:
      "Implementing structured collection and analysis of community health data to inform local public health interventions.",
  },
  {
    index: "05",
    title: "Locally Relevant Research Outputs",
    detail:
      "Producing evidence-informed research outputs tailored to the health realities of underserved communities.",
  },
  {
    index: "06",
    title: "Evidence Briefs for Advocacy and Future Programme Expansion",
    detail:
      "Developing practical evidence briefs to support public health advocacy and sustainable future programme expansion.",
  },
];

export default function DonatePage() {
  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-navy-deep text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        <div className="relative max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary font-heading mb-3">
              2026/2027 Pilot Programme · Informational Overview
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              ₦20,000,000 Programme{" "}
              <span className="text-primary">Objectives</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-5 font-normal">
              An informational overview of our planned <strong>₦20,000,000</strong> pilot programme framework supporting community outreach, health education, and structured public health research across our seven core focus areas.
            </p>
          </div>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          PROGRAMME OBJECTIVES LEDGER
      ========================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                Project Scope
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight leading-[1.15]">
                Core Pilot Objectives
              </h2>
              <p className="text-slate-600 mt-4 text-base leading-relaxed">
                The ₦20,000,000 project framework is structured around six core deliverables connecting community medical outreach, preventive screening, and evidence-based research across our seven focus areas.
              </p>

              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-canvas border border-slate-200/90 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy font-heading">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Institutional Governance</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All programme planning and resource allocation are overseen by the Registered Board of Trustees and Finance Department.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 border-t-2 border-navy bg-white">
              <div className="divide-y divide-slate-200 border-b border-slate-200">
                {pilotObjectives.map((obj) => (
                  <div
                    key={obj.index}
                    className="py-5 sm:py-6 flex items-baseline gap-5"
                  >
                    <span className="text-xs font-mono font-extrabold text-primary shrink-0">
                      {obj.index}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-navy font-heading">
                        {obj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        {obj.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
      ========================================= */}
      <CommunityCTA
        badge="Collaborate With Us"
        title="Interested in partnering or volunteering with our team?"
        subtitle="Explore our Strategic Partnerships or join our 2026/2027 Founding Volunteers Cohort."
        primaryButtonText="Volunteer Opportunities"
        primaryButtonHref="/opportunities"
        secondaryButtonText="Contact Our Secretariat"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
