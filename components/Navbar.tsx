"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown, 
  ArrowUpRight, 
  HeartHandshake 
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>("services");
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu when pathname changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Mission & Vision", href: "/mission-vision" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleSubmenu = (menuKey: string) => {
    setExpandedMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 p-3 sm:p-4 lg:p-5 pointer-events-none transition-all duration-300">
      <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto">
        <nav className="pointer-events-auto relative bg-navy-deep/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/25 rounded-full px-5 sm:px-7 py-2 sm:py-2.5 flex items-center justify-between transition-all">
          
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <Image
              src="/Liberty health & wellbeing foundation white logo.png"
              alt="Liberty Health & Wellbeing Foundation"
              width={320}
              height={128}
              priority
              className="h-11 sm:h-12 lg:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-colors ${
                    active
                      ? "text-white font-semibold after:absolute after:-bottom-1 after:inset-x-0 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-slate-300 hover:text-white after:absolute after:-bottom-1 after:inset-x-0 after:h-0.5 after:bg-primary after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-center"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              href="/contact?type=partner"
              className="inline-flex items-center justify-center w-36 lg:w-40 text-xs lg:text-sm font-semibold py-2 lg:py-2.5 rounded-full bg-white/15 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95"
            >
              Partner
            </Link>
            <Link
              href="/#get-involved"
              className="inline-flex items-center justify-center gap-2 w-36 lg:w-40 text-xs lg:text-sm font-bold py-2 lg:py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white transition-all hover:scale-105 active:scale-95"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Get Involved</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </div>

      {/* ==============================================================
          MOBILE NAVIGATION DRAWER (MINIMALIST & LOGO-ONLY SOCIALS)
      ============================================================== */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-50 bg-black/75 backdrop-blur-sm transition-opacity duration-300 md:hidden pointer-events-auto ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in Minimalist Drawer - Scrollbar Hidden */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm sm:max-w-md bg-[#0e1624] border-l border-white/10 text-white flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out md:hidden pointer-events-auto overflow-hidden no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Top Header: Official Brand Logo ONLY & Minimal Close Button */}
        <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-white/10 shrink-0">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center group shrink-0"
          >
            <Image
              src="/Liberty health & wellbeing foundation white logo.png"
              alt="Liberty Health & Wellbeing Foundation"
              width={260}
              height={80}
              priority
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* Scrollable Navigation Body - Minimalist & Zero Clutter */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-2 no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          
          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg sm:text-xl font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span className={pathname === "/" ? "text-primary font-semibold" : ""}>Home</span>
            <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
              pathname === "/" ? "text-primary" : "text-slate-500 group-hover:text-white"
            }`} />
          </Link>

          {/* Services Accordion */}
          <div className="py-0.5">
            <button
              type="button"
              onClick={() => toggleSubmenu("services")}
              className="w-full flex items-center justify-between text-lg sm:text-xl font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
            >
              <span>Services</span>
              {expandedMenu === "services" ? (
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
              )}
            </button>

            {/* Clean Minimal Submenu */}
            {expandedMenu === "services" && (
              <div className="mt-1 pl-1 space-y-3.5 animate-in fade-in slide-in-from-top-1 duration-150">
                
                {/* Category 1: Healthcare Missions */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide mt-2 mb-1">
                    Healthcare Missions -
                  </h4>
                  <div className="space-y-1 pl-2">
                    <Link
                      href="/#focus-areas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-1 text-sm text-slate-400 hover:text-white transition-colors group"
                    >
                      <span>Rural Medical Outreach</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      href="/#focus-areas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-1 text-sm text-slate-400 hover:text-white transition-colors group"
                    >
                      <span>Maternal &amp; Child Healthcare</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      href="/#focus-areas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-1 text-sm text-slate-400 hover:text-white transition-colors group"
                    >
                      <span>Preventative Screenings &amp; Care</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Category 2: Community Wellbeing */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide mt-2 mb-1">
                    Community Wellbeing -
                  </h4>
                  <div className="space-y-1 pl-2">
                    <Link
                      href="/#focus-areas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-1 text-sm text-slate-400 hover:text-white transition-colors group"
                    >
                      <span>Clean Water &amp; Sanitation Hubs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      href="/#focus-areas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-1 text-sm text-slate-400 hover:text-white transition-colors group"
                    >
                      <span>Health Literacy &amp; Hygiene</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Category 3: Sustainable Models */}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide mt-2 mb-1">
                    Sustainable Models -
                  </h4>
                  <div className="space-y-1 pl-2">
                    <Link
                      href="/#focus-areas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-1 text-sm text-slate-400 hover:text-white transition-colors group"
                    >
                      <span>Healthcare Infrastructure</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <Link
                      href="/#focus-areas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-1 text-sm text-slate-400 hover:text-white transition-colors group"
                    >
                      <span>Community Empowerment Programs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* About */}
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg sm:text-xl font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span className={pathname === "/about" ? "text-primary font-semibold" : ""}>About</span>
            <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
              pathname === "/about" ? "text-primary" : "text-slate-500 group-hover:text-white"
            }`} />
          </Link>

          {/* Mission & Vision */}
          <Link
            href="/mission-vision"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg sm:text-xl font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span className={pathname === "/mission-vision" ? "text-primary font-semibold" : ""}>Mission &amp; Vision</span>
            <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
              pathname === "/mission-vision" ? "text-primary" : "text-slate-500 group-hover:text-white"
            }`} />
          </Link>

          {/* Get Involved */}
          <Link
            href="/#get-involved"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg sm:text-xl font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span>Get Involved</span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg sm:text-xl font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span className={pathname === "/contact" ? "text-primary font-semibold" : ""}>Contact</span>
            <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
              pathname === "/contact" ? "text-primary" : "text-slate-500 group-hover:text-white"
            }`} />
          </Link>

          {/* Action CTAs */}
          <div className="pt-4 grid grid-cols-2 gap-2.5">
            <Link
              href="/contact?type=partner"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold tracking-wider uppercase transition-all border border-white/10 active:scale-95"
            >
              Partner
            </Link>
            <Link
              href="/#get-involved"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold tracking-wider uppercase transition-all active:scale-95 flex items-center justify-center gap-1.5"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Get Involved</span>
            </Link>
          </div>
        </div>

        {/* Bottom Social Icons Row (Logos only) */}
        <div className="px-6 py-4 border-t border-white/10 shrink-0 flex items-center justify-center gap-5">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
        </div>
      </aside>
    </header>
  );
}

