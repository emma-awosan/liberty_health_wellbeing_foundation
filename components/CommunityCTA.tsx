import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CommunityCTAProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  className?: string;
}

export default function CommunityCTA({
  title = "Ready to get started?",
  subtitle = "Join healthcare professionals, institutional partners, donors, and grassroots advocates building lasting health resilience across Africa.",
  primaryButtonText = "Get Started",
  primaryButtonHref = "/contact",
  className = "",
}: CommunityCTAProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 bg-canvas relative overflow-hidden ${className}`}>
      <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm overflow-hidden py-16 sm:py-24 lg:py-28 px-6 sm:px-12 flex flex-col items-center justify-center text-center">
          
          {/* Floating Avatars - Left Side */}
          <div className="hidden sm:block absolute top-8 sm:top-10 left-6 sm:left-10 lg:left-14 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden ring-4 ring-white shadow-sm hover:scale-105 transition-transform duration-300">
            <Image src="/images/avatars/avatar-1.jpg" alt="Doctor" fill className="object-cover" />
          </div>

          <div className="hidden sm:block absolute top-1/2 -translate-y-12 left-3 sm:left-6 lg:left-10 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden ring-4 ring-white shadow-sm hover:scale-105 transition-transform duration-300">
            <Image src="/images/avatars/avatar-2.jpg" alt="Clinical specialist" fill className="object-cover" />
          </div>

          <div className="hidden sm:block absolute bottom-8 sm:bottom-10 left-6 sm:left-10 lg:left-14 w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-full overflow-hidden ring-4 ring-white shadow-sm hover:scale-105 transition-transform duration-300">
            <Image src="/images/avatars/avatar-3.jpg" alt="Community volunteer" fill className="object-cover" />
          </div>

          <div className="hidden md:block absolute bottom-12 left-28 sm:left-36 lg:left-52 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-4 ring-white shadow-xs hover:scale-105 transition-transform duration-300">
            <Image src="/images/avatars/avatar-4.jpg" alt="Health coordinator" fill className="object-cover" />
          </div>

          {/* Floating Avatars - Right Side */}
          <div className="hidden sm:block absolute top-8 sm:top-10 right-6 sm:right-10 lg:right-14 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden ring-4 ring-white shadow-sm hover:scale-105 transition-transform duration-300">
            <Image src="/images/avatars/avatar-5.jpg" alt="Nurse practitioner" fill className="object-cover" />
          </div>

          <div className="hidden lg:block absolute top-10 right-28 sm:right-36 lg:right-52 w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-4 ring-white shadow-xs hover:scale-105 transition-transform duration-300">
            <Image src="/images/avatars/avatar-4.jpg" alt="Advocate" fill className="object-cover" />
          </div>

          <div className="hidden sm:block absolute top-1/2 -translate-y-12 right-3 sm:right-6 lg:right-10 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden ring-4 ring-white shadow-sm hover:scale-105 transition-transform duration-300">
            <Image src="/images/avatars/avatar-6.jpg" alt="Health director" fill className="object-cover" />
          </div>

          <div className="hidden sm:block absolute bottom-8 sm:bottom-10 right-6 sm:right-10 lg:right-14 w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14 rounded-full overflow-hidden ring-4 ring-white shadow-sm hover:scale-105 transition-transform duration-300">
            <Image src="/images/avatars/avatar-3.jpg" alt="Field partner" fill className="object-cover" />
          </div>

          <div className="hidden md:block absolute bottom-12 right-28 sm:right-36 lg:right-52 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-4 ring-white shadow-xs hover:scale-105 transition-transform duration-300">
            <Image src="/images/avatars/avatar-2.jpg" alt="Medical mission team" fill className="object-cover" />
          </div>

          {/* Mobile-only avatar row */}
          <div className="flex sm:hidden items-center -space-x-2.5 mb-5">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-xs relative">
              <Image src="/images/avatars/avatar-1.jpg" alt="Member" fill className="object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-xs relative">
              <Image src="/images/avatars/avatar-2.jpg" alt="Member" fill className="object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-xs relative">
              <Image src="/images/avatars/avatar-3.jpg" alt="Member" fill className="object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-xs relative">
              <Image src="/images/avatars/avatar-5.jpg" alt="Member" fill className="object-cover" />
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-xs relative">
              <Image src="/images/avatars/avatar-6.jpg" alt="Member" fill className="object-cover" />
            </div>
          </div>

          {/* Center Content */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.14] max-w-xl">
            {title}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 mt-4 max-w-lg leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href={primaryButtonHref}
              className="px-8 py-3.5 rounded-full bg-dark hover:bg-navy text-white font-semibold text-sm transition-all inline-flex items-center gap-2 hover:scale-[1.02] active:scale-98"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
