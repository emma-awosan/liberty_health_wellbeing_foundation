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
  HeartHandshake,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>("focus");
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Meet the Team", href: "/team" },
    { name: "Partners & Sponsors", href: "/partners" },
    { name: "Focus & Research", href: "/mission-vision" },
    { name: "Volunteer", href: "/opportunities" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

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
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
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
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <Link
              href="/opportunities"
              className="inline-flex items-center justify-center px-4 lg:px-5 text-xs lg:text-sm font-semibold py-2 lg:py-2.5 rounded-full bg-white/15 text-white"
            >
              Volunteer
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 text-xs lg:text-sm font-bold py-2 lg:py-2.5 rounded-full bg-primary text-white"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Donate (₦20M Appeal)</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/75 backdrop-blur-sm transition-opacity duration-300 xl:hidden pointer-events-auto ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in Minimalist Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm sm:max-w-md bg-[#0e1624] border-l border-white/10 text-white flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out xl:hidden pointer-events-auto overflow-hidden no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
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

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-2 no-scrollbar [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span className={pathname === "/" ? "text-primary font-semibold" : ""}>
              Home
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span
              className={
                pathname === "/about" ? "text-primary font-semibold" : ""
              }
            >
              About Us &amp; Board of Trustees
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
          </Link>

          <Link
            href="/team"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span
              className={
                pathname === "/team" ? "text-primary font-semibold" : ""
              }
            >
              Meet the Team
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
          </Link>

          {/* 7 Focus Areas Accordion */}
          <div className="py-0.5">
            <button
              type="button"
              onClick={() => toggleSubmenu("focus")}
              className="w-full flex items-center justify-between text-lg font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
            >
              <span>Our 7 Focus Areas</span>
              {expandedMenu === "focus" ? (
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
              )}
            </button>

            {expandedMenu === "focus" && (
              <div className="mt-1 pl-1 space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-150">
                {[
                  "1. Mental Health & Wellbeing",
                  "2. Addiction & Gambling Awareness",
                  "3. Preventive Healthcare & Access",
                  "4. Women’s, Maternal & Child Health",
                  "5. Health Information & Resources",
                  "6. Research, Policy & Advocacy",
                  "7. Global Health & Partnerships",
                ].map((label, idx) => (
                  <Link
                    key={idx}
                    href="/mission-vision#focus"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <span>{label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/partners"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span
              className={
                pathname === "/partners" ? "text-primary font-semibold" : ""
              }
            >
              Partners &amp; Founding Sponsors
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
          </Link>

          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span
              className={
                pathname === "/donate" ? "text-primary font-semibold" : ""
              }
            >
              ₦20M Fundraising Appeal
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
          </Link>

          <Link
            href="/opportunities"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span
              className={
                pathname === "/opportunities" ? "text-primary font-semibold" : ""
              }
            >
              Volunteer &amp; Open Positions
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg font-normal tracking-tight py-2 text-white/90 hover:text-white transition-colors group"
          >
            <span
              className={
                pathname === "/contact" ? "text-primary font-semibold" : ""
              }
            >
              Contact Us
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
          </Link>

          <div className="pt-4 grid grid-cols-2 gap-2.5">
            <Link
              href="/opportunities"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/10"
            >
              Volunteer
            </Link>
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-primary text-white text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Donate</span>
            </Link>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-white/10 shrink-0 text-center text-[11px] text-slate-400">
          CAC Reg No. 9469157 · TIN: 2623366408281
        </div>
      </aside>
    </header>
  );
}
