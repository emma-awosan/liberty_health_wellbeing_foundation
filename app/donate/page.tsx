import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  HeartHandshake,
  CheckCircle2,
  ShieldCheck,
  Award,
  Handshake,
  Users,
  HeartPulse,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import DonorEnquiryForm from "@/components/DonorEnquiryForm";
import CommunityCTA from "@/components/CommunityCTA";

export const metadata: Metadata = {
  title: "Fundraising Initiative (₦20,000,000 Target) · Liberty Health & Wellbeing Foundation",
  description:
    "Help Us Build Healthier Communities. Liberty Health & Wellbeing Foundation is raising ₦20,000,000 to support community health, education, research, and wellbeing initiatives across Nigeria.",
  alternates: {
    canonical: "https://libertyhealthwellbeing.org/donate",
  },
  openGraph: {
    title: "Help Us Build Healthier Communities · ₦20,000,000 Fundraising Initiative",
    description:
      "Support Liberty Health & Wellbeing Foundation's ₦20,000,000 fundraising appeal for preventive healthcare, maternal-child health, mental wellbeing, and community outreach.",
    url: "https://libertyhealthwellbeing.org/donate",
    siteName: "Liberty Health & Wellbeing Foundation",
    type: "website",
  },
};

const plannedAreasOfSupport = [
  "Community medical outreach and preventive health education.",
  "Maternal, women’s and child health awareness initiatives.",
  "Mental health and emotional wellbeing education.",
  "Addiction and gambling harm awareness campaigns.",
  "Public health educational materials and digital resources.",
  "Volunteer training, coordination and safe community outreach.",
  "Research, policy analysis and public health advocacy.",
  "Operational infrastructure and programme delivery across Nigeria.",
];

const waysToSupport = [
  {
    title: "Donate",
    description: "Support our work as an individual donor.",
    icon: HeartPulse,
    href: "#donor-enquiry",
    cta: "Pledge a Donation",
  },
  {
    title: "Sponsor",
    description: "Fund a campaign, outreach programme or community health initiative.",
    icon: Award,
    href: "/partners#sponsorship",
    cta: "Become a Sponsor",
  },
  {
    title: "Partner",
    description: "Collaborate through healthcare, educational, technical or community support.",
    icon: Handshake,
    href: "/partners",
    cta: "Explore Partnerships",
  },
  {
    title: "Volunteer",
    description: "Contribute your professional skills, time and expertise.",
    icon: Users,
    href: "/opportunities",
    cta: "Join as a Volunteer",
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
              Official Fundraising Appeal · CAC No. 9469157
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              Help Us Build <span className="text-primary">Healthier Communities</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-5 font-normal">
              Liberty Health &amp; Wellbeing Foundation is raising <strong>₦20,000,000</strong> to support the establishment, development and delivery of its community health, education, research and wellbeing initiatives.
            </p>
          </div>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          SECTION 1: PLANNED AREAS OF SUPPORT
      ========================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                Purpose of the Appeal
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight leading-[1.15]">
                Planned Areas of Support
              </h2>
              <p className="text-slate-600 mt-4 text-base leading-relaxed">
                Contributions to our <strong>₦20,000,000 Fundraising Initiative</strong> directly strengthen the Foundation&apos;s capacity to deliver evidence-based health education, preventive screenings, community engagement, and research across underserved populations.
              </p>

              {/* Governance & Donor Acknowledgement Note */}
              <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-canvas border border-slate-200/90 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy font-heading">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Donor Acknowledgement &amp; Governance</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Donors and sponsors may choose to be acknowledged publicly or remain anonymous, subject to their preference and our governance policy.
                </p>
                <div className="pt-2 border-t border-slate-200/70 text-[11px] font-semibold text-slate-500">
                  Registered Incorporated Trustees · CAC No. 9469157 · TIN: 2623366408281
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 border-t-2 border-navy bg-white">
              <div className="divide-y divide-slate-200 border-b border-slate-200">
                {plannedAreasOfSupport.map((area, index) => (
                  <div
                    key={index}
                    className="py-4 sm:py-5 flex items-baseline gap-5"
                  >
                    <span className="text-xs font-mono font-extrabold text-primary shrink-0">
                      0{index + 1}
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-navy leading-relaxed">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: WAYS TO SUPPORT
      ========================================= */}
      <section className="py-16 sm:py-20 bg-canvas border-b border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              Get Involved
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
              Ways to Support
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Every contribution — financial, institutional, technical, or voluntary — advances our mission of building healthier, more resilient communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200 bg-white">
            {waysToSupport.map((way, idx) => (
              <div
                key={way.title}
                className="p-7 sm:p-8 border-r border-b border-slate-200 flex flex-col justify-between relative"
              >
                <div className="absolute top-0 inset-x-0 h-0.5 bg-navy" />
                <div>
                  <div className="text-2xl font-extrabold font-mono text-primary leading-none mb-5">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-extrabold text-navy font-heading mb-2">
                    {way.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {way.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={way.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-primary transition-colors"
                  >
                    <span>{way.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: DONOR PLEDGE & ENQUIRY FORM
      ========================================= */}
      <section id="donor-enquiry" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DonorEnquiryForm />
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
      ========================================= */}
      <CommunityCTA
        badge="Founding Sponsors & Volunteers"
        title="Looking to sponsor a specific programme or volunteer your skills?"
        subtitle="Explore our Founding Sponsors Programme or join our 2026/2027 Founding Volunteers Cohort."
        primaryButtonText="Founding Sponsors Programme"
        primaryButtonHref="/partners#sponsorship"
        secondaryButtonText="Volunteer Opportunities"
        secondaryButtonHref="/opportunities"
      />
    </div>
  );
}

