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
} from "lucide-react";

const mediaSubLinks = [
  { name: "News", href: "/media#news" },
  { name: "Blog", href: "/media#blog" },
  { name: "Events", href: "/media#events" },
  { name: "Outreach Gallery", href: "/media#gallery" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [desktopMediaOpen, setDesktopMediaOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setDesktopMediaOpen(false);
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Focus Areas", href: "/mission-vision" },
    { name: "Partners", href: "/partners" },
    { name: "Volunteer", href: "/opportunities" },
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
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setDesktopMediaOpen(false);
      }
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
        <nav
          aria-label="Primary Navigation"
          className="pointer-events-auto relative bg-navy-deep/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/25 rounded-full px-5 sm:px-7 py-2 sm:py-2.5 flex items-center justify-between transition-all"
        >
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

          {/* Center: Single Clean Desktop Navigation Structure */}
          <div className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.slice(0, 5).map((link) => {
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

            {/* Media Dropdown (News, Blog, Events, Outreach Gallery) */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopMediaOpen(true)}
              onMouseLeave={() => setDesktopMediaOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDesktopMediaOpen((prev) => !prev)}
                aria-expanded={desktopMediaOpen}
                aria-haspopup="true"
                className={`relative py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-colors inline-flex items-center gap-1 cursor-pointer ${
                  isActive("/media")
                    ? "text-white font-semibold after:absolute after:-bottom-1 after:inset-x-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span>Media</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    desktopMediaOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              {desktopMediaOpen && (
                <div className="absolute left-0 top-full pt-2.5 w-48 z-50">
                  <div className="rounded-xl bg-white border border-slate-200 shadow-lg py-2 overflow-hidden">
                    {mediaSubLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setDesktopMediaOpen(false)}
                        className="flex items-center justify-between px-4 py-2.5 text-xs sm:text-sm font-semibold text-navy hover:bg-canvas hover:text-primary transition-colors"
                      >
                        <span>{sub.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(5).map((link) => {
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

          {/* Right: Single Clear Action Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xs lg:text-sm font-bold rounded-full bg-primary text-white"
            >
              Contact Us
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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-base font-normal tracking-tight py-2.5 text-white/90 hover:text-white transition-colors group"
            >
              <span
                className={
                  isActive(link.href) ? "text-primary font-semibold" : ""
                }
              >
                {link.name}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </Link>
          ))}

          {/* Media Accordion */}
          <div className="py-0.5">
            <button
              type="button"
              onClick={() => toggleSubmenu("media")}
              className="w-full flex items-center justify-between text-base font-normal tracking-tight py-2.5 text-white/90 hover:text-white transition-colors group"
            >
              <span
                className={
                  pathname === "/media" ? "text-primary font-semibold" : ""
                }
              >
                Media
              </span>
              {expandedMenu === "media" ? (
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
              )}
            </button>

            {expandedMenu === "media" && (
              <div className="mt-1 pl-3 space-y-1.5 border-l border-white/15 ml-1">
                {mediaSubLinks.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-1.5 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors group"
                  >
                    <span>{sub.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-3 rounded-full bg-primary text-white text-xs font-bold tracking-wider uppercase"
            >
              Contact Us
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
