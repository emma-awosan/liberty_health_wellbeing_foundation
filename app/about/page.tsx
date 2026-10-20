import React from "react";
import Image from "next/image";
import CommunityCTA from "@/components/CommunityCTA";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import { 
  GenesisIllustration,
  GrowthIllustration,
  FutureIllustration,
  StoryArrowDesktop,
  StoryArrowMobile,
} from "@/components/StoryIllustrations";
import { 
  HeartPulse,
  ShieldAlert,
  Users,
  Stethoscope,
  Target,
  Compass,
  ShieldCheck,
  HandHeart,
  Lightbulb,
  Handshake,
  Sprout
} from "lucide-react";

export const metadata = {
  title: "About Us | Liberty Health & Wellbeing Foundation",
  description: "Discover the purpose, story, leadership, and values guiding Liberty Health & Wellbeing Foundation across Africa.",
};

export default function AboutPage() {
  const leaders = [
    {
      name: "Dr. Folasade Adeleke",
      role: "Founder & Executive Director",
      avatarSrc: "/images/avatars/avatar-1.jpg",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Dr. Emmanuel Mensah",
      role: "Director of Community Health",
      avatarSrc: "/images/avatars/avatar-2.jpg",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Amina Diallo",
      role: "Head of Strategic Partnerships",
      avatarSrc: "/images/avatars/avatar-3.jpg",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Kofi Boateng",
      role: "Head of Impact & Sustainability",
      avatarSrc: "/images/avatars/avatar-4.jpg",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Dr. Zainab Al-Hassan",
      role: "Head of Maternal & Child Health",
      avatarSrc: "/images/avatars/avatar-5.jpg",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Samuel Osei",
      role: "Director of Field Logistics & Tech",
      avatarSrc: "/images/avatars/avatar-6.jpg",
      linkedinUrl: "https://linkedin.com",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          HERO SECTION: MATCHING REFERENCE DESIGN IN OUR BRAND COLORS
      ========================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#051320] via-[#071929] to-[#0a233a] text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        {/* Subtle Brand Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-sky/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20">
          
          {/* Headline & Subtitle */}
          <div className="text-center max-w-5xl lg:max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold text-white tracking-tight leading-[1.14]">
              Your strategic partner for <br className="hidden md:inline" />
              <span>community health &amp; wellbeing</span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-5 sm:mt-6 font-normal">
              With deep grassroots reach across Africa, our dedicated team is committed to driving lasting health equity, social empowerment, and sustainable community wellbeing.
            </p>
          </div>

          {/* 3 Tall Rounded Photo Cards (Full Width Matching Navbar Maxwidth) */}
          <div className="grid grid-cols-3 gap-3.5 sm:gap-5 md:gap-6 lg:gap-8 w-full mt-10 sm:mt-14">
            
            {/* Card 1: Healthcare Leadership / Clinical Director */}
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-md border border-white/10 bg-navy-dark/60 group">
              <Image
                src="/images/about-hero-1.jpg"
                alt="Healthcare leadership and clinic direction at Liberty Foundation"
                fill
                className="object-cover object-[center_20%] scale-110 group-hover:scale-115 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 33vw, 380px"
              />
            </div>

            {/* Card 2: Strategy & Team Collaboration */}
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-md border border-white/10 bg-navy-dark/60 group">
              <Image
                src="/images/about-hero-2.jpg"
                alt="Healthcare strategy and collaborative planning at Liberty Foundation"
                fill
                className="object-cover object-[center_35%] scale-110 group-hover:scale-115 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 33vw, 380px"
              />
            </div>

            {/* Card 3: Frontline Community Outreach */}
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-md border border-white/10 bg-navy-dark/60 group">
              <Image
                src="/images/about-hero-3.jpg"
                alt="Frontline healthcare outreach and community nursing"
                fill
                className="object-cover object-[center_25%] scale-110 group-hover:scale-115 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 33vw, 380px"
              />
            </div>

          </div>

        </div>

        {/* Dynamic Curved Wave Section Divider */}
        <HeroWaveDivider />
      </section>

      {/* =========================================
          SECTION 2: CORE PILLARS & WHO WE ARE (MATCHING REFERENCE DESIGN)
      ========================================= */}
      <section className="pt-10 sm:pt-14 lg:pt-18 pb-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              Organizational Overview
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.18]">
              Core foundations that set our impact apart
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
              Explore the fundamental pillars designed to champion healthcare equity, deliver frontline medical relief, and build resilient communities across Africa.
            </p>
          </div>

          {/* 3-Column / 5-Element Layout (Left 2 Cards | Center Photo | Right 2 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch w-full">
            
            {/* Left Column: 2 Cards */}
            <div className="flex flex-col gap-5 lg:gap-6 order-2 md:order-1">
              
              {/* Card 1: Why Established */}
              <div className="bg-[#f7f8fa] rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/70 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all group flex-1">
                <div className="w-11 h-11 rounded-full bg-navy text-primary flex items-center justify-center mb-6 shrink-0 shadow-xs border border-navy-dark/20 group-hover:scale-105 transition-transform">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-navy font-heading mb-2">
                    Why Established
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Founded in response to systemic healthcare infrastructure gaps, preventable mortality, and economic hardship affecting underserved African households.
                  </p>
                </div>
              </div>

              {/* Card 2: The Challenge We Address */}
              <div className="bg-[#f7f8fa] rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/70 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all group flex-1">
                <div className="w-11 h-11 rounded-full bg-navy text-primary flex items-center justify-center mb-6 shrink-0 shadow-xs border border-navy-dark/20 group-hover:scale-105 transition-transform">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-navy font-heading mb-2">
                    The Challenge We Address
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Overcoming preventive health illiteracy, scarce diagnostic resources, geographic isolation, and fragile frontline community care systems.
                  </p>
                </div>
              </div>

            </div>

            {/* Center Column: Tall Portrait Photo */}
            <div className="order-1 md:order-2 relative rounded-xl overflow-hidden aspect-[3/4] md:aspect-auto md:h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] shadow-sm border border-slate-200/80 bg-slate-100 group">
              <Image
                src="/images/whoweare-center.jpg"
                alt="Executive healthcare director and community leader at Liberty Foundation"
                fill
                className="object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Right Column: 2 Cards */}
            <div className="flex flex-col gap-5 lg:gap-6 order-3 md:order-3">
              
              {/* Card 3: Who We Serve & Reach */}
              <div className="bg-[#f7f8fa] rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/70 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all group flex-1">
                <div className="w-11 h-11 rounded-full bg-navy text-primary flex items-center justify-center mb-6 shrink-0 shadow-xs border border-navy-dark/20 group-hover:scale-105 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-navy font-heading mb-2">
                    Who We Serve &amp; Reach
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Prioritizing vulnerable mothers, infants, youths, and marginalized rural communities across East, West, and Central Africa with targeted regional hubs.
                  </p>
                </div>
              </div>

              {/* Card 4: Our Scope of Work */}
              <div className="bg-[#f7f8fa] rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/70 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all group flex-1">
                <div className="w-11 h-11 rounded-full bg-navy text-primary flex items-center justify-center mb-6 shrink-0 shadow-xs border border-navy-dark/20 group-hover:scale-105 transition-transform">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-navy font-heading mb-2">
                    Our Scope of Work
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Conducting mobile medical checkups, primary care training, health literacy drives, youth wellness mentorship, and clean water ecosystems.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: OUR STORY & EVOLUTION
      ========================================= */}
      <section className="py-20 lg:py-28 bg-canvas border-y border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              Journey &amp; Evolution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
              Our Story
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              From a compassionate grassroots initiative to a structured Pan-African non-profit movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 relative">
            
            {/* Card 1: The Genesis */}
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-xs border border-slate-200/90 flex flex-col justify-between hover:shadow-xs hover:border-primary/40 transition-all duration-300 group relative">
              {/* Desktop Connecting Milestone from Card 1 to Card 2 */}
              <div className="hidden md:flex absolute left-full top-[115px] -translate-y-1/2 w-8 lg:w-12 xl:w-16 2xl:w-20 z-20 pointer-events-none items-center justify-center">
                <StoryArrowDesktop />
              </div>

              <div>
                {/* Illustration Showcase */}
                <div className="mb-6">
                  <GenesisIllustration />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-primary-light text-primary flex items-center justify-center font-bold text-sm shrink-0 border border-primary/20 shadow-2xs">
                    01
                  </div>
                  <h3 className="text-xl font-bold text-navy font-heading">
                    The Genesis
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Liberty Health &amp; Wellbeing Foundation was inspired by first-hand encounters with rural clinic shortages and maternal vulnerabilities. The founders witnessed how simple preventive awareness and reliable medical access could immediately rescue families from avoidable crises.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Rooted in deep empathy</span>
                <span className="text-[11px] font-medium text-slate-400">Step 01</span>
              </div>
            </div>

            {/* Mobile Connecting Milestone between Card 1 & Card 2 */}
            <div className="flex md:hidden justify-center items-center py-1 text-primary">
              <StoryArrowMobile />
            </div>

            {/* Card 2: Growth & Milestones */}
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-xs border border-slate-200/90 flex flex-col justify-between hover:shadow-xs hover:border-blue/40 transition-all duration-300 group relative">
              {/* Desktop Connecting Milestone from Card 2 to Card 3 */}
              <div className="hidden md:flex absolute left-full top-[115px] -translate-y-1/2 w-8 lg:w-12 xl:w-16 2xl:w-20 z-20 pointer-events-none items-center justify-center">
                <StoryArrowDesktop />
              </div>

              <div>
                {/* Illustration Showcase */}
                <div className="mb-6">
                  <GrowthIllustration />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-blue-light text-blue flex items-center justify-center font-bold text-sm shrink-0 border border-blue/20 shadow-2xs">
                    02
                  </div>
                  <h3 className="text-xl font-bold text-navy font-heading">
                    Growth &amp; Milestones
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Through collaborative alliances with regional clinical leaders and volunteer networks, the foundation expanded from pop-up health checkups into multi-faceted programs incorporating educational empowerment, clean water infrastructure, and vocational hygiene academies.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue">
                <span>Expanding across borders</span>
                <span className="text-[11px] font-medium text-slate-400">Step 02</span>
              </div>
            </div>

            {/* Mobile Connecting Milestone between Card 2 & Card 3 */}
            <div className="flex md:hidden justify-center items-center py-1 text-primary">
              <StoryArrowMobile />
            </div>

            {/* Card 3: The Future Direction */}
            <div className="bg-white p-6 sm:p-7 rounded-xl shadow-xs border border-slate-200/90 flex flex-col justify-between hover:shadow-xs hover:border-navy/40 transition-all duration-300 group relative">
              <div>
                {/* Illustration Showcase */}
                <div className="mb-6">
                  <FutureIllustration />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-navy-light text-navy flex items-center justify-center font-bold text-sm shrink-0 border border-navy/20 shadow-2xs">
                    03
                  </div>
                  <h3 className="text-xl font-bold text-navy font-heading">
                    The Future Direction
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Phase 1 lays the digital, logistical, and partnership foundation. Looking ahead, Liberty aims to establish 100+ permanent sustainable community health hubs equipped with telemedicine capabilities and community-governed maintenance models.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-navy">
                <span>Generational transformation</span>
                <span className="text-[11px] font-medium text-slate-400">Step 03</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: OUR MISSION & VISION
      ========================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            <div className="p-8 sm:p-10 rounded-xl bg-gradient-to-br from-navy to-navy-dark text-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary font-heading mb-4">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-4 text-white">
                  Improving Health, Promoting Knowledge, Empowering All.
                </h3>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                  “To improve health and wellbeing by providing innovative solutions, promoting education, and supporting sustainable initiatives that empower individuals and strengthen communities across Africa.”
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300">
                Action-Oriented • People-First • Systemic Quality
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-xl bg-gradient-to-br from-navy-deep to-navy-dark text-white shadow-sm flex flex-col justify-between border border-primary/30">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary font-heading mb-4">
                  <Compass className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-4 text-white">
                  A Thriving, Resilient and Sustainable African Continent.
                </h3>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                  “To contribute to a healthier, empowered and more sustainable Africa where individuals and communities have the opportunity to thrive.”
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300">
                Enduring Impact • Community Autonomy • Dignity for All
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: OUR CORE VALUES (MATCHING REFERENCE DESIGN)
      ========================================= */}
      <section className="py-20 lg:py-28 bg-canvas border-b border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Bold Editorial Headline & Narrative */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-3">
                Principles of Conduct
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy font-heading tracking-tight leading-[1.08]">
                Our <br className="hidden sm:inline" />
                Values
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-6 leading-relaxed max-w-md font-normal">
                At Liberty Health &amp; Wellbeing Foundation, our values guide everything we do. They shape our field interactions, healthcare decisions, and the enduring community partnerships we build across Africa.
              </p>

              <div className="mt-8 pt-8 border-t border-slate-200/80 max-w-md">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-primary font-heading">
                  <span className="w-6 h-[2px] bg-primary rounded-full"></span>
                  <span>Ethical Framework</span>
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Every initiative adheres to strict community dignity, transparent clinical governance, and lasting public health impact.
                </p>
              </div>
            </div>

            {/* Right Column: Values Cards Grid (Featured Hero Card + Clean White Cards) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                
                {/* 1. Compassion (Hero Featured Card in Brand Gold Gradient) */}
                <div className="bg-gradient-to-br from-[#C18E3C] via-[#B88434] to-[#A07026] text-white rounded-xl p-6 sm:p-7 shadow-xs hover:shadow-xs flex flex-col justify-between group hover:-translate-y-0.5 transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform border border-white/20">
                      <HandHeart className="w-6 h-6 stroke-[2]" />
                    </div>
                    <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal">
                      We put people and their wellbeing at the heart of what we do.
                    </p>
                  </div>
                  <div>
                    <div className="w-full h-[1.5px] bg-white/30 my-5" />
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading tracking-tight">
                      Compassion
                    </h3>
                  </div>
                </div>

                {/* 2. Integrity */}
                <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-canvas border border-slate-200/60 flex items-center justify-center mb-6 text-navy group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-6 h-6 stroke-[2]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      We operate with honesty, accountability and transparency.
                    </p>
                  </div>
                  <div>
                    <div className="w-full h-[1.5px] bg-primary/40 my-5" />
                    <h3 className="text-base sm:text-lg font-bold text-navy font-heading tracking-tight">
                      Integrity
                    </h3>
                  </div>
                </div>

                {/* 3. Empowerment */}
                <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-canvas border border-slate-200/60 flex items-center justify-center mb-6 text-blue group-hover:scale-105 transition-transform">
                      <Lightbulb className="w-6 h-6 stroke-[2]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      We believe people should have the knowledge, opportunities and resources to improve their lives.
                    </p>
                  </div>
                  <div>
                    <div className="w-full h-[1.5px] bg-primary/40 my-5" />
                    <h3 className="text-base sm:text-lg font-bold text-navy font-heading tracking-tight">
                      Empowerment
                    </h3>
                  </div>
                </div>

                {/* 4. Collaboration */}
                <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-canvas border border-slate-200/60 flex items-center justify-center mb-6 text-navy group-hover:scale-105 transition-transform">
                      <Handshake className="w-6 h-6 stroke-[2]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      We believe meaningful change is achieved through partnerships and collective action.
                    </p>
                  </div>
                  <div>
                    <div className="w-full h-[1.5px] bg-primary/40 my-5" />
                    <h3 className="text-base sm:text-lg font-bold text-navy font-heading tracking-tight">
                      Collaboration
                    </h3>
                  </div>
                </div>

                {/* 5. Sustainability */}
                <div className="sm:col-span-2 bg-white rounded-xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xs hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-canvas border border-slate-200/60 flex items-center justify-center mb-6 text-primary group-hover:scale-105 transition-transform">
                      <Sprout className="w-6 h-6 stroke-[2]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      We focus on solutions that can create lasting impact.
                    </p>
                  </div>
                  <div>
                    <div className="w-full h-[1.5px] bg-primary/40 my-5" />
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-bold text-navy font-heading tracking-tight">
                        Sustainability
                      </h3>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        Generational Durability
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: LEADERSHIP TEAM (MATCHING REFERENCE DESIGN)
      ========================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Left-Aligned Header Matching Reference */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Meet our Leadership team
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Meet the dedicated individuals who drive our foundation&apos;s mission with their clinical expertise, visionary governance, and passion for community health.
            </p>
          </div>

          {/* 3-Column Grid Matching Reference Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {leaders.map((leader) => (
              <div 
                key={leader.name}
                className="relative aspect-[4/4.6] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs group transition-all duration-300 hover:shadow-md"
              >
                {/* Full Card Portrait Photo */}
                <Image
                  src={leader.avatarSrc}
                  alt={leader.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Floating Bottom Pill/Card Overlay */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-slate-200/90 shadow-md shadow-slate-900/5 flex items-center justify-between gap-3 z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-navy font-heading truncate leading-snug">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-medium truncate mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                  
                  {/* LinkedIn Icon Button */}
                  <a
                    href={leader.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg border border-slate-200/90 bg-white hover:bg-slate-50 hover:border-navy text-slate-700 hover:text-navy flex items-center justify-center shrink-0 transition-colors"
                    aria-label={`${leader.name} on LinkedIn`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 7: CLOSING CALL TO ACTION
      ========================================= */}
      <CommunityCTA 
        title="Ready to get started?"
        subtitle="Join healthcare professionals, institutional partners, donors, and grassroots advocates building lasting health resilience across Africa."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
      />

    </div>
  );
}
