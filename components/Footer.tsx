"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-canvas text-slate-600 pt-14 sm:pt-18 lg:pt-20 pb-12 border-t border-slate-200/70">
      <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP: NEWSLETTER BANNER CARD */}
        <div className="bg-navy-deep text-white rounded-xl p-8 sm:p-12 lg:p-14 relative overflow-hidden mb-16 lg:mb-20 border border-navy-dark shadow-sm">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/favicon-white.png"
                  alt="Liberty Health & Wellbeing Foundation Icon"
                  width={22}
                  height={22}
                  className="w-5 h-5 object-contain shrink-0"
                />
                <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
                  Advancing Global Health. Transforming Lives.
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Subscribe to Our Updates
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Receive verified programme updates, research publications, and announcements on community health initiatives across Nigeria.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
              <div className="w-full max-w-md">
                <span className="block text-xs font-semibold text-slate-300 mb-2.5">
                  Stay up to date
                </span>

                {isSubscribed ? (
                  <div className="flex items-center gap-2.5 p-3.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>Thank you for subscribing to our updates!</span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-2"
                  >
                    <div className="relative flex-1">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 focus:bg-white/15 border border-white/20 focus:border-primary text-white placeholder-slate-400 text-sm outline-none transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-7 py-3.5 rounded-full bg-primary text-white font-bold text-sm tracking-wide shrink-0 text-center cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </form>
                )}

                <p className="text-[11px] text-slate-400 mt-2.5">
                  By subscribing you agree to our{" "}
                  <Link
                    href="/mission-vision"
                    className="underline text-slate-300 hover:text-white transition-colors"
                  >
                    Ethical &amp; Data Privacy Standards
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: BRAND & MULTI-COLUMN NAVIGATION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-slate-200/80">
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/liberty-logo-navy.png"
                alt="Liberty Health & Wellbeing Foundation"
                width={320}
                height={128}
                className="h-11 sm:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Liberty Health &amp; Wellbeing Foundation is a Nigerian-registered nonprofit organisation committed to improving health, wellbeing and quality of life through preventive healthcare, public education, research, advocacy and community development.
            </p>

            {/* Single Compact Legal Identity Block */}
            <div className="border-l-2 border-primary pl-3.5 py-0.5 text-xs text-navy">
              <span className="font-bold block">
                Registered Incorporated Trustees (Nigeria)
              </span>
              <span className="text-slate-600">
                CAC Reg. No. 9469157 · Registered 7 April 2026 · TIN: 2623366408281
              </span>
            </div>

            {/* Direct Contact */}
            <div className="pt-1 text-xs">
              <a
                href="mailto:emmanuel.awosan@libertyhealthwellbeing.org"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors font-semibold text-navy underline decoration-slate-300 hover:decoration-primary underline-offset-4 w-fit"
              >
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>emmanuel.awosan@libertyhealthwellbeing.org</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Focus Areas */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-navy font-bold text-sm tracking-wider uppercase font-heading">
                Our Focus Areas
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600">
                <li>
                  <Link
                    href="/mission-vision#focus"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Mental Health &amp; Wellbeing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission-vision#focus"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Addiction &amp; Gambling Awareness
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission-vision#focus"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Preventive Healthcare &amp; Access
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission-vision#focus"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Women’s, Maternal &amp; Child Health
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission-vision#focus"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Health Information &amp; Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mission-vision#research-policy"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Research, Policy &amp; Advocacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Global Health &amp; Partnerships
                  </Link>
                </li>
              </ul>
            </div>

            {/* Foundation & Engagement */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-navy font-bold text-sm tracking-wider uppercase font-heading">
                Foundation
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    About Us &amp; Board of Trustees
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Meet the Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Strategic Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/media"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Media, News &amp; Outreach Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="hover:text-primary transition-colors font-semibold text-navy underline decoration-navy/30 hover:decoration-primary underline-offset-4"
                  >
                    Founding Volunteers (2026/2027)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities#available-positions"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Available Positions (5 Open)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-primary transition-colors underline decoration-slate-300/80 hover:decoration-primary underline-offset-4"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Offices */}
            <div className="flex flex-col gap-3.5 col-span-2 sm:col-span-1">
              <h4 className="text-navy font-bold text-sm tracking-wider uppercase font-heading">
                Operating Locations
              </h4>
              <div className="flex flex-col gap-3 text-xs text-slate-600">
                <div>
                  <strong className="text-navy font-semibold block">
                    Headquarters · Abuja
                  </strong>
                  <span>
                    Plot 89, Vitus Mbaogu Street, Jikwoyi, FCT, Abuja, Nigeria.
                  </span>
                </div>
                <div>
                  <strong className="text-navy font-semibold block">
                    Secondary Address · Sokoto
                  </strong>
                  <span>01 Federal Layout, Arkilla, Sokoto, Nigeria.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © 2026 Liberty Health &amp; Wellbeing Foundation. Advancing Global Health. Transforming Lives.
          </p>
        </div>
      </div>
    </footer>
  );
}
