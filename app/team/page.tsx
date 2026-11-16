import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Globe2, ArrowRight } from "lucide-react";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import CommunityCTA from "@/components/CommunityCTA";
import TeamInteractiveShowcase from "@/components/TeamInteractiveShowcase";

export const metadata: Metadata = {
  title: "Meet the Team · Liberty Health & Wellbeing Foundation",
  description:
    "Meet the multidisciplinary leadership, medical doctors, clinical nurse specialists, researchers, editors, and communications professionals driving Liberty Health & Wellbeing Foundation.",
  alternates: {
    canonical: "https://libertyhealthwellbeing.org/team",
  },
  openGraph: {
    title: "Meet the Team · Liberty Health & Wellbeing Foundation",
    description:
      "Advancing Global Health. Transforming Lives. Explore our departmental leadership across Medicine, Governance, Finance, Editorial, and Communications.",
    url: "https://libertyhealthwellbeing.org/team",
    siteName: "Liberty Health & Wellbeing Foundation",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-navy-deep text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        <div className="relative max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary font-heading mb-3">
              Advancing Global Health · Transforming Lives
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              Meet the <span className="text-primary">Team</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-5 font-normal">
              Our multidisciplinary team combines medical expertise, public health research, peacebuilding scholarship, financial stewardship, and editorial excellence to build healthier communities.
            </p>
          </div>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          INTERACTIVE SCROLL-STACK & SWIPE DECK SHOWCASE
      ========================================= */}
      <TeamInteractiveShowcase />

      {/* =========================================
          F. INTERNATIONAL AMBASSADORS PROGRAMME
      ========================================= */}
      <section id="ambassadors" className="py-16 sm:py-20 bg-canvas relative">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl rounded-2xl bg-navy text-white p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-2.5 text-primary text-xs font-bold uppercase tracking-widest mb-3 font-heading">
              <Globe2 className="w-4 h-4" />
              <span>Global Health Network</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              International Ambassadors Programme
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl">
              The International Ambassadors Programme aims to connect Liberty Health &amp; Wellbeing Foundation with healthcare professionals, advocates and organisations internationally. Ambassadors help develop professional networks, encourage public health awareness and identify opportunities for collaborative global health initiatives.
            </p>
            <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-300">
                Appointments are published formally upon official confirmation and onboarding.
              </span>
              <Link
                href="/contact?type=partnership"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold"
              >
                <span>Enquire About Global Collaboration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
      ========================================= */}
      <CommunityCTA
        badge="Work With Us"
        title="Interested in joining our team or volunteering?"
        subtitle="Explore expressions of interest for open operational positions or register for the Founding Volunteers Programme (2026/2027)."
        primaryButtonText="Explore Opportunities"
        primaryButtonHref="/opportunities"
        secondaryButtonText="Support Our ₦20M Campaign"
        secondaryButtonHref="/donate"
      />
    </div>
  );
}
