import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Newspaper,
  BookOpen,
  Calendar,
  Camera,
  ArrowRight,
} from "lucide-react";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import CommunityCTA from "@/components/CommunityCTA";

export const metadata: Metadata = {
  title:
    "Media, News, Blog, Events & Outreach Gallery · Liberty Health & Wellbeing Foundation",
  description:
    "Official press releases, public health editorial articles, upcoming 2026/2027 community medical outreaches, and field documentation from Liberty Health & Wellbeing Foundation.",
  alternates: {
    canonical: "https://libertyhealthwellbeing.org/media",
  },
  openGraph: {
    title:
      "Media, News, Blog, Events & Outreach Gallery · Liberty Health & Wellbeing Foundation",
    description:
      "Stay updated with institutional news, public health research publications, upcoming medical outreaches, and field gallery updates across Nigeria.",
    url: "https://libertyhealthwellbeing.org/media",
    siteName: "Liberty Health & Wellbeing Foundation",
    type: "website",
  },
};

export default function MediaPage() {
  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-navy-deep text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        <div className="relative max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary font-heading mb-3">
              Editorial, Press &amp; Field Documentation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              Media, News &amp;{" "}
              <span className="text-primary">Outreach Gallery</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-5 font-normal">
              Official press announcements, public health editorial insights, community medical outreach schedules, and field documentation from Liberty Health &amp; Wellbeing Foundation.
            </p>
          </div>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          CONSOLIDATED MEDIA CATEGORIES (ONE CONCISE NOTICE PER CATEGORY)
      ========================================= */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              Publications &amp; Field Updates
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
              Official Media Channels
            </h2>
            <p className="text-slate-600 mt-3 text-base leading-relaxed">
              Verified announcements, research articles, event schedules, and outreach photography are published below as programmes and field activities are completed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-slate-200 bg-white">
            {/* 01: News */}
            <div
              id="news"
              className="p-8 sm:p-10 border-r border-b border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading flex items-center gap-2">
                    <Newspaper className="w-4 h-4" />
                    <span>News &amp; Press Releases</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    01
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-heading mb-3">
                  Official Announcements
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Following statutory incorporation (CAC No. 9469157 · 7 April 2026), official press releases on institutional partnerships, governance updates, and pilot outreach launches will be published in this section.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>First press bulletin in preparation</span>
                <Link
                  href="/contact?type=media"
                  className="font-bold text-navy hover:text-primary inline-flex items-center gap-1 transition-colors"
                >
                  <span>Press Enquiries</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </Link>
              </div>
            </div>

            {/* 02: Blog & Editorial */}
            <div
              id="blog"
              className="p-8 sm:p-10 border-r border-b border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Blog &amp; Editorial</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    02
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-heading mb-3">
                  Public Health Insights &amp; Research Briefs
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our Editorial, Clinical, and Research teams are preparing evidence-informed articles covering mental wellbeing, addiction and gambling harm awareness, maternal-child health, and preventive health literacy.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Curated by the Editorial &amp; Research Desk</span>
                <Link
                  href="/mission-vision#research-policy"
                  className="font-bold text-navy hover:text-primary inline-flex items-center gap-1 transition-colors"
                >
                  <span>Research Mandate</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </Link>
              </div>
            </div>

            {/* 03: Events */}
            <div
              id="events"
              className="p-8 sm:p-10 border-r border-b border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Upcoming Events</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    03
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-heading mb-3">
                  Community Medical Outreaches &amp; Workshops
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Confirmed dates and venues for our Lagos and Abuja outreach pilots, Sokoto community health education sessions, and 2026/2027 Founding Volunteers orientation will be listed here once finalised.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>2026/2027 outreach schedule in preparation</span>
                <Link
                  href="/opportunities"
                  className="font-bold text-navy hover:text-primary inline-flex items-center gap-1 transition-colors"
                >
                  <span>Join Outreach Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </Link>
              </div>
            </div>

            {/* 04: Outreach Gallery */}
            <div
              id="gallery"
              className="p-8 sm:p-10 border-r border-b border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    <span>Outreach Gallery</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    04
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-heading mb-3">
                  Field Photography &amp; Visual Archive
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Verified field photography from our community health screenings, maternal and child health initiatives, and partner outreaches will be archived here following each field deployment.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Updated following field outreach deployments</span>
                <Link
                  href="/partners"
                  className="font-bold text-navy hover:text-primary inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Field Partners</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
      ========================================= */}
      <CommunityCTA
        badge="Stay Connected"
        title="Want to partner on an upcoming outreach or media initiative?"
        subtitle="Reach out to our Secretariat for media enquiries, community outreach collaborations, or public health education partnerships."
        primaryButtonText="Contact Our Secretariat"
        primaryButtonHref="/contact"
        secondaryButtonText="Volunteer With Us"
        secondaryButtonHref="/opportunities"
      />
    </div>
  );
}
