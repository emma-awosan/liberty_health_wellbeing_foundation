import React from "react";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import VolunteerRegistrationForm from "@/components/VolunteerRegistrationForm";
import CommunityCTA from "@/components/CommunityCTA";

export const metadata: Metadata = {
  title:
    "Founding Volunteers Programme & Available Positions · Liberty Health & Wellbeing Foundation",
  description:
    "Join our Founding Volunteers Programme (2026/2027) or submit an Expression of Interest for available leadership and coordination positions at Liberty Health & Wellbeing Foundation.",
  alternates: {
    canonical: "https://libertyhealthwellbeing.org/opportunities",
  },
  openGraph: {
    title:
      "Volunteer & Opportunities · Liberty Health & Wellbeing Foundation",
    description:
      "Register for the 2026/2027 Founding Volunteers Cohort or explore available positions including Public Relations Officer, Research & Programme Coordinator, and Volunteer Coordinator.",
    url: "https://libertyhealthwellbeing.org/opportunities",
    siteName: "Liberty Health & Wellbeing Foundation",
    type: "website",
  },
};

const volunteeringAreas = [
  {
    index: "01",
    title: "Community Health Outreach",
    desc: "Supporting field health awareness drives, community screenings, and grassroot public health engagements.",
  },
  {
    index: "02",
    title: "Health Education & Public Awareness",
    desc: "Developing and delivering accessible health literacy workshops and preventive healthcare campaigns.",
  },
  {
    index: "03",
    title: "Mental Health & Addiction Awareness",
    desc: "Promoting emotional wellbeing literacy, challenging stigma, and raising awareness of substance and gambling harm.",
  },
  {
    index: "04",
    title: "Maternal & Child Health Support",
    desc: "Assisting educational initiatives focused on women’s health, maternal wellbeing, and family health outcomes.",
  },
  {
    index: "05",
    title: "Research, Policy & Editorial Support",
    desc: "Contributing to literature reviews, policy briefs, health equity research, and editorial fact-checking.",
  },
  {
    index: "06",
    title: "Media, Communications & Digital Engagement",
    desc: "Creating digital health content, visual storytelling, social media campaigns, and public engagement materials.",
  },
  {
    index: "07",
    title: "Events, Mobilisation & Project Support",
    desc: "Coordinating logistics, community mobilisation, partner engagements, and safe outreach implementation.",
  },
];

const availablePositions = [
  {
    index: "01",
    title: "Public Relations Officer",
    status: "Expression of Interest Open",
    description:
      "Supports media relations, public communications, stakeholder visibility and reputation management.",
  },
  {
    index: "02",
    title: "Research & Programme Coordinator",
    status: "Expression of Interest Open",
    description:
      "Supports public health research, programme planning, monitoring, evaluation and project coordination.",
  },
  {
    index: "03",
    title: "Volunteer Coordinator",
    status: "Expression of Interest Open",
    description:
      "Supports recruitment, onboarding, scheduling, training and welfare of volunteers.",
  },
  {
    index: "04",
    title: "Protocol Officer",
    status: "Expression of Interest Open",
    description:
      "Supports official events, guest coordination, outreach logistics and institutional representation.",
  },
  {
    index: "05",
    title: "Site Coordinator",
    status: "Expression of Interest Open",
    description:
      "Supports coordination of community outreach locations, field logistics, safety readiness and local implementation.",
  },
];

export default function OpportunitiesPage() {
  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-navy-deep text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        <div className="relative max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary font-heading mb-3">
              Founding Volunteers Cohort · 2026/2027
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              Join Our Founding{" "}
              <span className="text-primary">Volunteers Programme</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mt-5 font-normal">
              Liberty Health &amp; Wellbeing Foundation invites passionate individuals, students, healthcare professionals, researchers, writers, creatives and community advocates to register their interest in joining our{" "}
              <strong>Founding Volunteers Cohort — 2026/2027</strong>.
            </p>
          </div>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          SECTION 1: 7 AREAS OF VOLUNTEERING (ARCHITECTURAL INDEX GRID)
      ========================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                01 · Founding Volunteers Programme — 2026/2027
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
                Areas of Volunteering
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                Contribute your skills across seven strategic areas supporting preventive healthcare, public education, research, and community outreach.
              </p>
            </div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              07 VOLUNTEERING TRACKS
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200 bg-white">
            {volunteeringAreas.map((area) => (
              <div
                key={area.title}
                className="p-7 sm:p-8 bg-white border-r border-b border-slate-200 flex flex-col justify-between relative"
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-navy" />
                <div>
                  <div className="text-2xl font-extrabold font-mono text-primary leading-none mb-5">
                    {area.index}
                  </div>
                  <h3 className="text-lg font-extrabold text-navy font-heading mb-2.5 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Cell in 4x2 Grid: Direct Application Callout */}
            <div className="p-7 sm:p-8 bg-navy text-white border-r border-b border-navy-dark flex flex-col justify-between relative">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-primary" />
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-5">
                  2026/2027 COHORT
                </div>
                <h3 className="text-lg font-extrabold text-white font-heading mb-2.5 leading-snug">
                  Ready to Contribute Your Skills?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Complete the registration form below to join our Founding Volunteers Cohort or express interest in an operational role.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/15">
                <a
                  href="#volunteer-form"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary"
                >
                  <span>Go to Registration Form</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: AVAILABLE POSITIONS (EDITORIAL LEDGER TABLE)
      ========================================= */}
      <section
        id="available-positions"
        className="py-16 sm:py-20 lg:py-24 bg-canvas border-b border-slate-200/80"
      >
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                02 · Available Positions — Expressions of Interest Welcome
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
                Open Coordination &amp; Operational Roles
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                We welcome Expressions of Interest from qualified professionals and dedicated volunteers for the following five operational positions within the Foundation:
              </p>
            </div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              05 OPEN POSITIONS
            </div>
          </div>

          {/* Architectural Opportunities Ledger */}
          <div className="bg-white border border-slate-200 border-t-2 border-t-navy divide-y divide-slate-200">
            {availablePositions.map((role) => (
              <div
                key={role.title}
                className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start lg:items-center"
              >
                <div className="lg:col-span-4 flex items-baseline gap-4">
                  <span className="text-sm font-mono font-extrabold text-primary shrink-0">
                    {role.index}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-navy font-heading">
                      {role.title}
                    </h3>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mt-1 font-heading">
                      {role.status}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="lg:col-span-2 lg:text-right pt-2 lg:pt-0">
                  <a
                    href="#volunteer-form"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy hover:text-primary transition-colors"
                  >
                    <span>Express Interest</span>
                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: VOLUNTEER REGISTRATION FORM
      ========================================= */}
      <section id="volunteer-form" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <VolunteerRegistrationForm />
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
      ========================================= */}
      <CommunityCTA
        badge="Explore the Foundation"
        title="Learn more about the people and programmes behind our work."
        subtitle="Meet our multidisciplinary leadership team or contact our secretariat for partnership enquiries."
        primaryButtonText="Meet the Team"
        primaryButtonHref="/team"
        secondaryButtonText="Contact Our Secretariat"
        secondaryButtonHref="/contact"
      />
    </div>
  );
}
