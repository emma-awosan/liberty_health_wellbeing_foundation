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

export const metadata = {
  title: "Mission & Vision | Liberty Health & Wellbeing Foundation",
  description: "Learn about the core purpose, mission, vision, strategic pillars, and operational commitments of Liberty Health & Wellbeing Foundation across Africa.",
};

export default function MissionVisionPage() {
  const pillars = [
    {
      number: "01",
      title: "Improving Wellbeing",
      description: "Expanding direct access to preventative care, maternal-child health services, essential medical kits, and mental wellness resources to uplift baseline community health.",
      icon: Activity,
      colorClass: "text-primary",
      bgClass: "bg-primary-light",
      directive: "Clinical Access & Screenings",
    },
    {
      number: "02",
      title: "Empowering Individuals",
      description: "Equipping youth, women, and local health workers with actionable medical competencies, public hygiene skills, and personal agency to champion family wellness.",
      icon: Users,
      colorClass: "text-blue",
      bgClass: "bg-blue-light",
      directive: "Healthcare Ambassador Academies",
    },
    {
      number: "03",
      title: "Strengthening Communities",
      description: "Reinforcing grassroots clinic infrastructure, mobile emergency networks, and social support frameworks so remote settlements can withstand health crises.",
      icon: Heart,
      colorClass: "text-navy",
      bgClass: "bg-navy-light",
      directive: "Grassroots Clinical Logistics",
    },
    {
      number: "04",
      title: "Promoting Education",
      description: "Demystifying public health facts, training village health educators, and deploying tailored community outreach modules addressing preventable endemic diseases.",
      icon: GraduationCap,
      colorClass: "text-sky",
      bgClass: "bg-sky-light",
      directive: "Preventative Literacy Campaigns",
    },
    {
      number: "05",
      title: "Supporting Sustainable Initiatives",
      description: "Investing in generational solutions including solar-powered vaccine refrigeration, deep-aquifer boreholes, and self-sufficient local clinic operating models.",
      icon: Sprout,
      colorClass: "text-primary",
      bgClass: "bg-primary-light",
      directive: "Renewable Solar Infrastructure",
    },
    {
      number: "06",
      title: "Building Partnerships",
      description: "Uniting regional health ministries, medical universities, philanthropic donors, and traditional community leaders to scale impact and eliminate redundancies.",
      icon: Handshake,
      colorClass: "text-blue",
      bgClass: "bg-blue-light",
      directive: "Cross-Sector Collaborative Grants",
    },
  ];

  const commitments = [
    {
      title: "Community-Led Co-Design",
      tag: "Local Ownership",
      description: "Every clinic station, medical drive, and water project is planned and maintained in direct partnership with local village committees and community elders.",
      icon: Users,
      highlight: "100% Locally Anchored",
    },
    {
      title: "Radical Stewardship",
      tag: "Ethical Governance",
      description: "Every dollar and donation is transparently tracked. We conduct biannual independent audits and publish measurable clinical outcome logs for public accountability.",
      icon: ShieldCheck,
      highlight: "Biannually Audited",
    },
    {
      title: "Renewable & Solar Durability",
      tag: "Green Healthcare",
      description: "Our water filtration hubs and clinic cold-chains are powered 100% by solar energy, ensuring vital medicines stay viable regardless of municipal grid stability.",
      icon: SunMedium,
      highlight: "Zero Grid Dependency",
    },
    {
      title: "Pan-African Health Equity",
      tag: "Universal Dignity",
      description: "We focus relentlessly on remote, underserved frontline settlements, ensuring quality healthcare is treated as an unconditional human right across Africa.",
      icon: Globe2,
      highlight: "Frontline Priority",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO: MATCHING ABOUT PAGE HERO STYLING (NO BADGE)
      ========================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#051320] via-[#071929] to-[#0a233a] text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        {/* Subtle Brand Ambient Glows Matching About Page Hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-sky/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pb-12 sm:pb-16 lg:pb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight leading-[1.12]">
            Our Purpose, Mission &amp; Vision
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-5 max-w-3xl mx-auto leading-relaxed font-light">
            “At Liberty Health &amp; Wellbeing Foundation, we believe that healthier individuals and empowered communities are essential to building a stronger, more sustainable future across Africa.”
          </p>
        </div>

        {/* Dynamic Curved Wave Section Divider */}
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
              Our Mission &amp; Vision in Focus
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              How our day-to-day operational mandate and our 2035 long-term destination align to create lasting systemic impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Mission Card (Operational Mandate) */}
            <div className="relative rounded-xl bg-canvas border border-primary/40 p-8 sm:p-12 shadow-xs flex flex-col justify-between group hover:border-primary transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0 border border-primary/30">
                    <Target className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-primary px-3 py-1.5 rounded-full bg-primary-light uppercase tracking-wider">
                    Present Mandate
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading block mb-1">
                  Operational Roadmap
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy font-heading tracking-tight">
                  Our Mission
                </h3>

                <blockquote className="my-6 text-lg sm:text-xl font-medium text-navy leading-relaxed italic border-l-4 border-primary pl-5 sm:pl-6 py-1">
                  “To improve health and wellbeing by providing innovative solutions, promoting education, and supporting sustainable initiatives that empower individuals and strengthen communities across Africa.”
                </blockquote>

                <p className="text-sm text-slate-600 leading-relaxed">
                  This mission is not just a statement—it is our active operational mandate. Every grant deployed, clinical team mobilized, and medical post built is held to strict standards of frontline empowerment.
                </p>

                {/* Tangible Execution Pillars */}
                <div className="mt-8 pt-6 border-t border-slate-200/80 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Direct Clinical Access:</strong> Mobile dispensaries, medicine packs, and maternal checkups.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Actionable Education:</strong> Training local midwives, youth advocates, and community health teams.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Grassroots Infrastructure:</strong> Clean solar water hubs, sanitation posts, and clinic cold-chains.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card (Long-Term Horizon) */}
            <div className="relative rounded-xl bg-navy-deep text-white border border-blue/40 p-8 sm:p-12 shadow-xs flex flex-col justify-between group hover:border-blue transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/10 text-sky flex items-center justify-center shrink-0 border border-white/20">
                    <Compass className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold text-sky px-3 py-1.5 rounded-full bg-white/10 uppercase tracking-wider">
                    2035 Horizon
                  </span>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-heading block mb-1">
                  Strategic Destination
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
                  Our Vision
                </h3>

                <blockquote className="my-6 text-lg sm:text-xl font-medium text-sky leading-relaxed italic border-l-4 border-sky pl-5 sm:pl-6 py-1">
                  “To contribute to a healthier, empowered and more sustainable Africa where individuals and communities have the opportunity to thrive.”
                </blockquote>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  We envision a continent where geographical remoteness or economic background never determines life expectancy. A thriving Africa powered by self-sufficient healthcare systems and local clinical champions.
                </p>

                {/* Long-Term Horizon Milestones */}
                <div className="mt-8 pt-6 border-t border-white/15 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                    <span><strong>Equitable Life Chances:</strong> Eradicating preventable maternal, neonatal, and infectious casualties.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                    <span><strong>Institutional Autonomy:</strong> Regional clinic stations run and funded independently by local stakeholders.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                    <span><strong>Interconnected Systems:</strong> Clean water, nutrition, and clinical care reinforcing generational dignity.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          THE SIX STRATEGIC PILLARS (HOW WE EXECUTE)
      ========================================= */}
      <section className="py-20 lg:py-28 bg-canvas">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
              Operational Execution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              The Six Strategic Pillars
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              How our mission and vision transform into concrete, day-to-day community programs across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-full ${pillar.bgClass} flex items-center justify-center shrink-0 ${pillar.colorClass} group-hover:scale-105 transition-transform`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-extrabold text-slate-400 font-mono tracking-wider">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy font-heading mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-navy">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{pillar.directive}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================
          STRATEGIC COMMITMENTS & STANDARDS
          (REPLACING DUPLICATE VALUES LIST FROM ABOUT PAGE)
      ========================================= */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
              Accountability &amp; Standards
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Our Commitments to Africa
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              How we guarantee our healthcare interventions remain ethically grounded, culturally integrated, and enduring across all host communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {commitments.map((com) => {
              const IconComp = com.icon;
              return (
                <div
                  key={com.title}
                  className="p-7 rounded-xl bg-canvas border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {com.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-navy font-heading mb-2">
                      {com.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {com.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-navy">
                    <ShieldCheck className="w-4 h-4 text-blue shrink-0" />
                    <span>{com.highlight}</span>
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
        title="Ready to partner with our mission?"
        subtitle="Join healthcare professionals, institutional partners, donors, and grassroots advocates building lasting health resilience across Africa."
        primaryButtonText="Get in Touch"
        primaryButtonHref="/contact"
      />

    </div>
  );
}
