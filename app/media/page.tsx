import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Newspaper,
  BookOpen,
  Calendar,
  Camera,
  ArrowRight,
  Clock,
  MapPin,
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

const mediaSections = [
  {
    id: "news",
    number: "01",
    label: "News",
    subtitle: "Official Announcements & Press Desk",
    href: "#news",
  },
  {
    id: "blog",
    number: "02",
    label: "Blog",
    subtitle: "Editorial & Public Health Insights",
    href: "#blog",
  },
  {
    id: "events",
    number: "03",
    label: "Events",
    subtitle: "Upcoming Outreaches & Campaigns",
    href: "#events",
  },
  {
    id: "gallery",
    number: "04",
    label: "Outreach Gallery",
    subtitle: "Field Photography & Visual Archive",
    href: "#gallery",
  },
];

const upcomingEditorialThemes = [
  {
    code: "SERIES 01",
    category: "Mental Health & Addiction Awareness",
    title:
      "Addressing Substance Misuse, Gambling Harm & Mental Wellbeing in Nigerian Communities",
    lead: "Editorial & Clinical Team · Publication Coming Soon",
  },
  {
    code: "SERIES 02",
    category: "Preventive Healthcare & Screening",
    title:
      "Why Early Detection & Community Health Literacy Save Lives Before Emergencies Occur",
    lead: "Medical & Clinical Department · Publication Coming Soon",
  },
  {
    code: "SERIES 03",
    category: "Women’s, Maternal & Child Health",
    title:
      "Strengthening Antenatal, Postnatal & Family Health Outcomes Through Grassroots Education",
    lead: "Maternal & Child Health Desk · Publication Coming Soon",
  },
  {
    code: "SERIES 04",
    category: "Data, Research & Peacebuilding",
    title:
      "How Social Determinants, Human Security & Health Data Infrastructure Shape Access to Care",
    lead: "Research, Governance & Digital Health Team · Publication Coming Soon",
  },
];

const plannedOutreachSlots = [
  {
    index: "01",
    hub: "Abuja, FCT · Headquarters Hub",
    title: "Community Preventive Health Screening & Mental Wellbeing Outreach",
    scope:
      "Blood pressure & glucose checks, health literacy briefings, and mental health & addiction awareness.",
    status: "Dates & Venue Announcement Coming Soon",
  },
  {
    index: "02",
    hub: "Sokoto State · Regional Hub",
    title: "Maternal, Child & Community Health Education Outreach",
    scope:
      "Antenatal/postnatal health literacy, preventive care guidance, and community health engagement.",
    status: "Dates & Venue Announcement Coming Soon",
  },
  {
    index: "03",
    hub: "Partner & Campus Network",
    title: "2026/2027 Founding Volunteers Orientation & Public Health Symposium",
    scope:
      "Onboarding session for clinical, research, editorial, and community outreach volunteers.",
    status: "Schedule Publication Coming Soon",
  },
];

const galleryArchiveSlots = [
  {
    code: "ARCHIVE 01",
    title: "Community Medical Outreaches & Health Screenings",
    location: "Abuja & Sokoto Field Operations",
    description:
      "Field photography and visual documentation from upcoming community medical screenings, consultations, and health education sessions will be published here.",
  },
  {
    code: "ARCHIVE 02",
    title: "Maternal, Women’s & Child Health Campaigns",
    location: "Collaborative Partner Outreaches",
    description:
      "Visual updates from joint maternal and child wellbeing programmes with WuraCare MCI, 60 Seconds With Doc, Marlix Healthcare Ltd, and Balyson Medical Initiative.",
  },
  {
    code: "ARCHIVE 03",
    title: "Mental Health, Addiction & Youth Advocacy Workshops",
    location: "Schools, Campuses & Community Centres",
    description:
      "Documentation from public awareness campaigns addressing mental wellbeing, substance misuse, and gambling harm prevention.",
  },
  {
    code: "ARCHIVE 04",
    title: "Institutional Governance, Training & Volunteer Mobilisation",
    location: "Secretariat & Field Hubs",
    description:
      "Highlights from volunteer training cohorts, stakeholder engagements, and research symposiums.",
  },
];

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
              Official press announcements, public health editorial insights, upcoming community medical outreaches, and field gallery documentation from Liberty Health &amp; Wellbeing Foundation.
            </p>
          </div>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          ARCHITECTURAL QUICK-JUMP DIRECTORY BAR
      ========================================= */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200 bg-white">
            {mediaSections.map((sec) => (
              <a
                key={sec.id}
                href={sec.href}
                className="p-5 sm:p-6 border-r border-b border-slate-200 flex items-center justify-between gap-4 hover:bg-canvas transition-colors group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-primary block mb-1">
                    {sec.number} · MEDIA DESK
                  </span>
                  <h2 className="text-base sm:text-lg font-extrabold text-navy font-heading group-hover:text-primary transition-colors">
                    {sec.label}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {sec.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          01 · NEWS & OFFICIAL ANNOUNCEMENTS (#news)
      ========================================= */}
      <section id="news" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                01 · Press &amp; Institutional Updates
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
                News &amp; Official Announcements
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                Verified updates on Foundation governance, strategic partnerships, fundraising milestones, and institutional press releases.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1 shrink-0">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                PRESS ROOM STATUS
              </span>
              <span className="text-xs font-bold text-navy">
                Official Bulletins · Coming Soon
              </span>
            </div>
          </div>

          <div className="border border-slate-200 border-t-4 border-t-navy bg-canvas p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary">
                  <Newspaper className="w-4 h-4" />
                  <span>COMING SOON · 2026/2027 PRESS RELEASES</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading tracking-tight">
                  Official Foundation News &amp; Press Briefings Launching Soon
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Following our statutory incorporation in Nigeria (CAC Reg. No. 9469157 · 7 April 2026), our Communications and Editorial Departments are preparing official press briefings on our ₦20,000,000 Fundraising Appeal, Founding Volunteers Cohort, and Strategic Partner programmes.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/contact?type=media"
                  className="px-7 py-3.5 rounded-full bg-navy text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2"
                >
                  <span>Media &amp; Press Enquiries</span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          02 · EDITORIAL BLOG & PUBLIC HEALTH INSIGHTS (#blog)
      ========================================= */}
      <section id="blog" className="py-16 sm:py-24 bg-canvas border-b border-slate-200">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                02 · Editorial &amp; Research Publications
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
                Public Health Blog &amp; Editorial Series
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                Evidence-informed articles, health literacy guides, and policy commentaries curated by our Editorial, Clinical, and Research teams.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1 shrink-0">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                EDITORIAL DESK
              </span>
              <span className="text-xs font-bold text-navy">
                Inaugural Series · Coming Soon
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-slate-200 bg-white">
            {upcomingEditorialThemes.map((post) => (
              <article
                key={post.code}
                className="p-7 sm:p-9 border-r border-b border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold text-primary">
                      {post.code}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading">
                      Coming Soon
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue block mb-2 font-heading">
                    {post.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy font-heading leading-snug">
                    {post.title}
                  </h3>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    <span>{post.lead}</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          03 · UPCOMING EVENTS & COMMUNITY OUTREACHES (#events)
      ========================================= */}
      <section id="events" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                03 · Field Schedule &amp; Symposiums
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
                Upcoming Events &amp; Medical Outreaches
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                Planned community health screenings, preventive medicine workshops, and volunteer mobilisation schedules across Abuja, Sokoto, and partner locations.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1 shrink-0">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                2026/2027 CALENDAR
              </span>
              <span className="text-xs font-bold text-navy">
                Outreach Dates · Coming Soon
              </span>
            </div>
          </div>

          <div className="border-t-2 border-navy divide-y divide-slate-200 border-b border-b-slate-200">
            {plannedOutreachSlots.map((evt) => (
              <div
                key={evt.index}
                className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start"
              >
                <div className="lg:col-span-3 flex items-baseline gap-3">
                  <span className="text-xl font-black font-mono text-primary">
                    {evt.index}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-navy block font-heading">
                      {evt.hub}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span>Nigeria Field Operations</span>
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy font-heading">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {evt.scope}
                  </p>
                </div>

                <div className="lg:col-span-3 flex lg:justify-end items-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.status}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          04 · OUTREACH & FIELD GALLERY (#gallery)
      ========================================= */}
      <section id="gallery" className="py-16 sm:py-24 bg-canvas">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                04 · Visual Documentation &amp; Impact Archive
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
                Outreach &amp; Programme Gallery
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                Verified field photography and visual updates from our community medical outreaches, maternal-child health campaigns, and public health workshops will be published here as outreach operations commence.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1 shrink-0">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                FIELD ARCHIVE
              </span>
              <span className="text-xs font-bold text-navy">
                Outreach Updates · Coming Soon
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-slate-200 bg-white">
            {galleryArchiveSlots.map((slot) => (
              <div
                key={slot.code}
                className="p-8 sm:p-10 border-r border-b border-slate-200 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold text-primary flex items-center gap-2">
                      <Camera className="w-4 h-4" />
                      <span>{slot.code}</span>
                    </span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      COMING SOON
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-navy font-heading">
                    {slot.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue mt-1">
                    {slot.location}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {slot.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>Field Updates Published Post-Outreach</span>
                  </span>
                  <Link
                    href="/opportunities"
                    className="font-bold text-navy hover:text-primary inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Join Outreach Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CLOSING CTA
      ========================================= */}
      <CommunityCTA
        badge="Stay Connected"
        title="Want to partner on an upcoming outreach or support our ₦20,000,000 appeal?"
        subtitle="Reach out to our Secretariat for media enquiries, community outreach collaborations, or programme sponsorship."
        primaryButtonText="Contact Our Secretariat"
        primaryButtonHref="/contact"
        secondaryButtonText="Volunteer With Us"
        secondaryButtonHref="/opportunities"
      />
    </div>
  );
}
