import React from "react";
import type { Metadata } from "next";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import CommunityCTA from "@/components/CommunityCTA";
import AnnualAgendaAndBudget from "@/components/AnnualAgendaAndBudget";

export const metadata: Metadata = {
  title:
    "2026/2027 Annual Programme Agenda & ₦50,000,000 Budget Framework · Liberty Health & Wellbeing Foundation",
  description:
    "Explore Liberty Health & Wellbeing Foundation's 1-year programme agenda (Dec 2026 – Dec 2027) and ₦50,000,000 allocation breakdown across outreach, medicines, research, maternal health, education, and referrals.",
  alternates: {
    canonical: "https://libertyhealthwellbeing.org/donate",
  },
};

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
              Dec 2026 – Dec 2027 · 1-Year Implementation Plan
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              ₦50,000,000 Annual Budget{" "}
              <span className="text-primary">&amp; Programme Agenda</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-5 font-normal">
              An overview of our <strong>₦50,000,000</strong> annual funding requirement and 13-month schedule of community medical outreaches, data analysis, and public health education across Nigeria.
            </p>
          </div>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          INTERACTIVE ₦50M PIE CHART & 13-MONTH ROADMAP
      ========================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnnualAgendaAndBudget theme="light" />
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
