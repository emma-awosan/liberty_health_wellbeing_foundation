import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CommunityCTAProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  className?: string;
}

export default function CommunityCTA({
  badge = "Nigerian Nonprofit Foundation",
  title = "Ready to get started?",
  subtitle = "Join healthcare professionals, researchers, community organisations, and institutional partners working to advance health and wellbeing across Nigeria.",
  primaryButtonText = "Get in Touch",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Our Focus Areas",
  secondaryButtonHref = "/mission-vision#focus",
  className = "",
}: CommunityCTAProps) {
  return (
    <section
      className={`py-12 sm:py-16 lg:py-20 bg-canvas relative overflow-hidden ${className}`}
    >
      <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl bg-white border border-slate-200 border-t-4 border-t-navy py-14 sm:py-20 px-6 sm:px-12 flex flex-col items-center justify-center text-center">
          {/* Center Content */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <Image
              src="/images/favicon-black.png"
              alt="Liberty Health & Wellbeing Foundation Emblem"
              width={20}
              height={20}
              className="w-5 h-5 object-contain shrink-0"
            />
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading">
              {badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.14] max-w-2xl">
            {title}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 mt-4 max-w-xl leading-relaxed">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href={primaryButtonHref}
              className="px-8 py-3.5 rounded-full bg-primary text-white font-bold text-sm inline-flex items-center gap-2 shadow-xs"
            >
              <span>{primaryButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="px-7 py-3.5 rounded-full bg-canvas text-navy border border-slate-200 font-semibold text-sm inline-flex items-center gap-2"
              >
                <span>{secondaryButtonText}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
