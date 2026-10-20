"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  Mail, 
  Phone, 
  ShieldCheck 
} from "lucide-react";

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
        
        {/* =========================================
            TOP: FLOATING NEWSLETTER BANNER CARD
            (MATCHING REFERENCE BANNER STRUCTURE)
        ========================================= */}
        <div className="bg-navy-deep text-white rounded-xl p-8 sm:p-12 lg:p-14 relative overflow-hidden mb-16 lg:mb-20 border border-navy-dark shadow-sm">

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Descriptive Copy */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Subscribe our newsletter
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                Subscribe to our newsletter and be the first to receive insights, field updates, and expert tips on optimizing community health and wellbeing.
              </p>
            </div>

            {/* Right Column: Form & Privacy Link */}
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
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-2">
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
                      className="px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm tracking-wide transition-all hover:scale-[1.02] active:scale-98 shrink-0 text-center"
                    >
                      Subscribe
                    </button>
                  </form>
                )}

                <p className="text-[11px] text-slate-400 mt-2.5">
                  By subscribing you agree to our{" "}
                  <Link href="/privacy" className="underline text-slate-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================
            BOTTOM: BRAND & MULTI-COLUMN NAVIGATION
            (MATCHING REFERENCE FOOTER SITEMAP)
        ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-slate-200/80">
          
          {/* Brand Info & Mission Statement (Left Column) */}
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
              Committed to improving health and wellbeing, empowering individuals and strengthening communities across Africa through sustainable initiatives.
            </p>

            {/* Direct Contact Snippets */}
            <div className="flex flex-col gap-1.5 text-xs text-slate-500 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>contact@libertyhealthwellbeing.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>+234 (0) 800-LIBERTY</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 focus:outline-none flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 focus:outline-none flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 focus:outline-none flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 focus:outline-none flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Columns: Focus Areas, Support/Organization, Legal */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Features / Focus Areas */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-navy font-bold text-sm tracking-wider uppercase font-heading">
                Features
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
                <li>
                  <Link href="/#focus-areas" className="hover:text-primary transition-colors">
                    Clinical Outreach
                  </Link>
                </li>
                <li>
                  <Link href="/#focus-areas" className="hover:text-primary transition-colors">
                    Health Literacy
                  </Link>
                </li>
                <li>
                  <Link href="/#focus-areas" className="hover:text-primary transition-colors">
                    Community Growth
                  </Link>
                </li>
                <li>
                  <Link href="/#focus-areas" className="hover:text-primary transition-colors">
                    Clean Water Hubs
                  </Link>
                </li>
                <li>
                  <Link href="/#focus-areas" className="hover:text-primary transition-colors">
                    Sustainable Models
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Support / Organization */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-navy font-bold text-sm tracking-wider uppercase font-heading">
                Support
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/mission-vision" className="hover:text-primary transition-colors">
                    Mission & Vision
                  </Link>
                </li>
                <li>
                  <Link href="/#get-involved" className="hover:text-primary transition-colors">
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Help & FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div className="flex flex-col gap-3.5 col-span-2 sm:col-span-1">
              <h4 className="text-navy font-bold text-sm tracking-wider uppercase font-heading">
                Legal
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
                <li>
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-primary transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/governance" className="hover:text-primary transition-colors">
                    Governance
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* =========================================
            BOTTOM: COPYRIGHT & CREDITS
        ========================================= */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 Liberty Health & Wellbeing Foundation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-primary font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Registered Pan-African Non-Profit Organization
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
