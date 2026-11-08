import React from "react";
import CommunityCTA from "@/components/CommunityCTA";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import { 
  Target, 
  Compass, 
  Activity, 
  Users, 
  Heart, 
  GraduationCap, 
  Sprout, 
  Handshake, 
  CheckCircle2, 
  ShieldCheck, 
  SunMedium, 
  Globe2 
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission & Vision",
  description:
    "Explore the Mission, Vision, core approaches, and strategic focus areas of Liberty Health & Wellbeing Foundation (CAC No. 9469157) in Nigeria.",
  alternates: {
    canonical: "/mission-vision",
  },
  openGraph: {
    title: "Mission & Vision | Liberty Health & Wellbeing Foundation",
    description:
      "Explore the foundational mission and vision of Liberty Health & Wellbeing Foundation in advancing preventive health and equity in Nigeria.",
    url: "https://libertyhealthwellbeing.org/mission-vision",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Mission & Vision - Liberty Health & Wellbeing Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission & Vision | Liberty Health & Wellbeing Foundation",
    description:
      "Our Mission and Vision for community health, preventive care, and equity across Nigeria.",
    images: ["/images/hero.jpg"],
  },
};

export default function MissionVisionPage() {
  const focusAreas = [
    {
      number: "01",
      tag: "PREVENTION",
      title: "Community Preventive Health",
      description: "Promoting health awareness, disease prevention, and practical health education to support healthier daily choices across underserved populations.",
      icon: Activity,
      colorClass: "text-primary",
      bgClass: "bg-primary-light",
      directive: "Early action & health awareness",
    },
    {
      number: "02",
      tag: "EQUITY",
      title: "Mental Health & Health Equity",
      description: "Promoting mental wellbeing and systematically addressing socioeconomic and systemic barriers that prevent vulnerable people from accessing vital care.",
      icon: Heart,
      colorClass: "text-blue",
      bgClass: "bg-blue-light",
      directive: "Inclusion & holistic wellness",
    },
    {
      number: "03",
      tag: "CAPACITY",
      title: "Capacity Building",
      description: "Strengthening community health literacy, developing local partner capabilities, and empowering grassroots health workers with actionable tools.",
      icon: GraduationCap,
      colorClass: "text-navy",
      bgClass: "bg-navy-light",
      directive: "Knowledge sharing & empowerment",
    },
    {
      number: "04",
      tag: "EVIDENCE",
      title: "Research, Monitoring & Evidence",
      description: "Gathering field data, monitoring programme execution, and learning from community experiences to continuously inform and improve public health initiatives.",
      icon: Sprout,
      colorClass: "text-sky",
      bgClass: "bg-sky-light",
      directive: "Data-led & evidence-guided",
    },
  ];

  const approaches = [
    {
      title: "Prevention Before Crisis",
      tag: "Early Action",
      description: "Promoting knowledge, early intervention, and reliable health information so communities can avert preventable health emergencies before they occur.",
      icon: Activity,
      highlight: "Knowledge & Early Action",
    },
    {
      title: "Communities at the Centre",
      tag: "Local Ownership",
      description: "Collaborating directly with communities, local leaders, and grassroots stakeholders to understand real priorities and co-design tailored responses.",
      icon: Users,
      highlight: "Community-Centred",
    },
    {
      title: "Evidence that Guides Action",
      tag: "Quality & Learning",
      description: "Using research, field monitoring, and continuous learning to refine and enhance community initiatives as they grow and evolve.",
      icon: ShieldCheck,
      highlight: "Evidence-Informed",
    },
    {
      title: "Sustainable Partnerships",
      tag: "Collaboration",
      description: "Working alongside healthcare professionals, researchers, community organisations, and institutional partners to create lasting impact.",
      icon: Handshake,
      highlight: "Institutional Alliances",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO: STRATEGIC DIRECTION
      ========================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#051320] via-[#071929] to-[#0a233a] text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-sky/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pb-12 sm:pb-16 lg:pb-20">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary font-heading mb-3">
            Our Guiding Direction
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12]">
            Mission &amp; Vision
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-5 max-w-3xl mx-auto leading-relaxed font-light">
            Foundational guiding statements for Liberty Health &amp; Wellbeing Foundation (Incorporated Trustees · CAC No. 9469157).
          </p>
        </div>

        <HeroWaveDivider />
      </section>

      {/* =========================================
          DUAL STRATEGIC BLUEPRINT: MISSION & VISION
      ========================================= */}
      <section className="pt-10 sm:pt-14 lg:pt-16 pb-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
              Strategic Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Foundational Statements
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Our active operational mandate and our long-term aspiration for community healthcare in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Mission Card */}
            <div className="relative rounded-xl bg-canvas border border-primary/40 p-8 sm:p-12 shadow-xs flex flex-col justify-between group hover:border-primary transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0 border border-primary/30">
                    <Target className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-primary px-3 py-1.5 rounded-full bg-primary-light uppercase tracking-wider">
                    Our Mandate
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading block mb-1">
                  Purpose &amp; Objective
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy font-heading tracking-tight">
                  Our Mission
                </h3>

                <blockquote className="my-6 text-lg sm:text-xl font-medium text-navy leading-relaxed italic border-l-4 border-primary pl-5 sm:pl-6 py-1">
                  “To improve community health and wellbeing by delivering preventive, inclusive, and evidence-informed health programmes that address priority health needs in underserved populations.”
                </blockquote>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Our mission guides every health awareness campaign, training module, and partnership. It focuses on tangible health equity and sustainable improvements in quality of life.
                </p>

                <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Preventive Health Delivery:</strong> Promoting early diagnosis and actionable health knowledge.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Inclusive Care:</strong> Prioritizing vulnerable groups, mothers, and underserved populations.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Evidence-Informed:</strong> Grounding every programme in verified data and community learning.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative rounded-xl bg-navy-deep text-white border border-blue/40 p-8 sm:p-12 shadow-xs flex flex-col justify-between group hover:border-blue transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/10 text-sky flex items-center justify-center shrink-0 border border-white/20">
                    <Compass className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-sky px-3 py-1.5 rounded-full bg-white/10 uppercase tracking-wider">
                    Our Horizon
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading block mb-1">
                  Strategic Destination
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
                  Our Vision
                </h3>

                <blockquote className="my-6 text-lg sm:text-xl font-medium text-sky leading-relaxed italic border-l-4 border-sky pl-5 sm:pl-6 py-1">
                  “A Nigeria where individuals and communities have equitable access to health knowledge, preventive care, and support systems that enable healthier and more fulfilling lives.”
                </blockquote>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  We look forward to communities equipped with knowledge, resilient primary support networks, and equal access to health literacy regardless of geography or background.
                </p>

                <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                    <span><strong>Equitable Access:</strong> Removing barriers to health knowledge and preventive support.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                    <span><strong>Empowered Communities:</strong> Fostering self-reliance and local community health leadership.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                    <span><strong>Fulfilling Lives:</strong> Linking health and wellbeing directly to broader human opportunity.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          THE FOUR STRATEGIC FOCUS AREAS
      ========================================= */}
      <section className="py-20 lg:py-28 bg-canvas">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
              Strategic Priorities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Four Areas of Focus
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Our core programmatic priorities as we develop community-centred initiatives and partnerships across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {focusAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={area.title}
                  className="p-8 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-full ${area.bgClass} flex items-center justify-center shrink-0 ${area.colorClass} group-hover:scale-105 transition-transform`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-extrabold text-primary font-mono tracking-wider">
                        {area.number} / {area.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy font-heading mb-2.5">
                      {area.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {area.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-navy">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{area.directive}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          OUR CORE APPROACH (HOW WE WORK)
      ========================================= */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Our Approach
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              How we approach community health challenges to ensure programmes remain grounded, evidence-informed, and sustainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {approaches.map((app) => {
              const IconComp = app.icon;
              return (
                <div
                  key={app.title}
                  className="p-7 rounded-xl bg-canvas border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {app.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy font-heading mb-2">
                      {app.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {app.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-navy">
                    <ShieldCheck className="w-4 h-4 text-blue shrink-0" />
                    <span>{app.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          CLOSING CALL TO ACTION
      ========================================= */}
      <CommunityCTA 
        badge="Building Partnerships"
        title="Building partnerships for healthier communities."
        subtitle="We welcome conversations with healthcare professionals, researchers, community organisations and potential collaborators."
        primaryButtonText="Contact the Foundation"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Focus Areas"
        secondaryButtonHref="/#focus-areas"
      />

    </div>
  );
}
