import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Briefcase, Award } from "lucide-react";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import CommunityCTA from "@/components/CommunityCTA";
import SponsorEnquiryForm from "@/components/SponsorEnquiryForm";
import PartnersInteractiveShowcase from "@/components/PartnersInteractiveShowcase";

export const metadata: Metadata = {
  title:
    "Strategic Partners, Collaborations & Founding Sponsors · Liberty Health & Wellbeing Foundation",
  description:
    "Explore our official strategic partnerships (WuraCare MCI, 60 Seconds With Doc, Marlix Healthcare Ltd, Titan Sales Limited, Balyson Medical Initiative) and the Founding Sponsors Programme.",
  alternates: {
    canonical: "https://libertyhealthwellbeing.org/partners",
  },
  openGraph: {
    title:
      "Strategic Partners & Founding Sponsors · Liberty Health & Wellbeing Foundation",
    description:
      "Collaborating across healthcare, maternal-child health, medical education, humanitarian outreach, technology, and corporate sponsorship to advance community health in Nigeria.",
    url: "https://libertyhealthwellbeing.org/partners",
    siteName: "Liberty Health & Wellbeing Foundation",
    type: "website",
  },
};

export default function PartnersPage() {
  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-navy-deep text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        <div className="relative max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary font-heading mb-3">
              Strategic Alliances &amp; Sponsorship
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              Strategic Partners &amp;{" "}
              <span className="text-primary">Collaborations</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-5 font-normal">
              Building purposeful relationships across healthcare, technology, research, and community development to advance global health and transform lives.
            </p>
          </div>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          SECTION 1: INTRODUCTION & PHILOSOPHY
      ========================================= */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2 block">
              Our Partnership Framework
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-heading tracking-tight leading-snug">
              Meaningful Impact Requires Shared Vision &amp; Expertise
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed font-normal">
              At Liberty Health &amp; Wellbeing Foundation, we believe that meaningful improvements in health and wellbeing require collaboration across healthcare, research, technology, community development and the private sector.
            </p>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed font-normal">
              Our partnership approach brings together organisations and professionals with complementary expertise to support preventive healthcare, maternal and child health, mental wellbeing, health education, research and sustainable community development.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: INTERACTIVE CONFIRMED STRATEGIC PARTNERS
      ========================================= */}
      <PartnersInteractiveShowcase />

      {/* =========================================
          SECTION 3: FOUNDING SPONSORS PROGRAMME
      ========================================= */}
      <section
        id="sponsorship"
        className="py-16 sm:py-24 bg-white relative border-t border-slate-200/80"
      >
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              02 · Institutional &amp; Philanthropic Sponsorship
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Founding Sponsors Programme
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed font-normal">
              Liberty Health &amp; Wellbeing Foundation invites responsible businesses, institutions and philanthropists to join our{" "}
              <strong>Founding Sponsors Programme</strong> —{" "}
              <em>Partner With Us to Support Healthier Communities</em>.
            </p>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed font-normal">
              Sponsors help support health education, community outreach, preventive healthcare, mental wellbeing, addiction awareness, maternal and child health, research and volunteer development.
            </p>
          </div>

          {/* Architectural 3-Column Sponsorship Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-l border-slate-200 mb-14 bg-white">
            {/* Column 1: Ways to Sponsor */}
            <div className="p-7 sm:p-9 border-r border-b border-slate-200 flex flex-col justify-between relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-navy" />
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Sponsorship Tracks</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-300">
                    01
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-navy font-heading mb-4">
                  Ways to Sponsor
                </h3>
                <ul className="space-y-3">
                  {[
                    "Financial Sponsorship",
                    "Programme Sponsorship",
                    "Community Outreach Sponsorship",
                    "Educational Campaign Sponsorship",
                    "In-Kind / Resource Sponsorship",
                    "Research & Advocacy Support",
                  ].map((way, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="font-medium">{way}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Flexible Institutional &amp; Philanthropic Tracks
              </div>
            </div>

            {/* Column 2: Sponsor Recognition */}
            <div className="p-7 sm:p-9 border-r border-b border-slate-200 flex flex-col justify-between relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue font-heading flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>Partner Acknowledgment</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-300">
                    02
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-navy font-heading mb-3">
                  Sponsor Recognition
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  Approved sponsors may receive institutional recognition across Foundation channels:
                </p>
                <ul className="space-y-3">
                  {[
                    "Official website recognition.",
                    "Acknowledgement on selected campaign or outreach materials.",
                    "Impact updates and programme reports.",
                    "Opportunities to support specific community health initiatives.",
                  ].map((rec, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Subject to Approved Sponsorship Agreement
              </div>
            </div>

            {/* Column 3: Ethical Sponsorship Commitment */}
            <div className="p-7 sm:p-9 bg-navy text-white border-r border-b border-navy-dark flex flex-col justify-between relative">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/15">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Governance Standards</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-white/30">
                    03
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-white font-heading mb-4">
                  Ethical Sponsorship Commitment
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  All sponsorships are reviewed to ensure alignment with the Foundation’s mission, public health values, independence and ethical standards.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  In accordance with our transparency rules, prospective corporate sponsors are only listed publicly after formal sponsorship agreements have been confirmed.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/15 text-[11px] font-bold uppercase tracking-wider text-primary">
                CAC No. 9469157 · TIN: 2623366408281
              </div>
            </div>
          </div>

          {/* Become a Sponsor Enquiry Form */}
          <div className="max-w-4xl mx-auto">
            <SponsorEnquiryForm />
          </div>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
      ========================================= */}
      <CommunityCTA
        badge="Partner With Us"
        title="Interested in collaborating or supporting our ₦20,000,000 Fundraising Initiative?"
        subtitle="We invite healthcare professionals, digital innovators, civil society leaders, and corporate sponsors to build sustainable health solutions with us."
        primaryButtonText="Support Our Fundraising Appeal"
        primaryButtonHref="/donate"
        secondaryButtonText="Meet Our Team"
        secondaryButtonHref="/team"
      />
    </div>
  );
}
