"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  GraduationCap,
  Stethoscope,
  BookOpen,
  Quote,
  Target,
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HeartPulse,
  Landmark,
} from "lucide-react";

export interface TeamMemberProfile {
  id: string;
  index: string;
  departmentCode: string;
  departmentName: string;
  name: string;
  role: string;
  subRole: string;
  identityLine?: string;
  email?: string;
  image: string | null;
  qualifications: string[];
  bio: string[];
  motivation: string | null;
  motto: string | null;
  mottoLabel: string | null;
  responsibilities?: string[];
  tag: string;
}

const executiveScrollStack: TeamMemberProfile[] = [
  {
    id: "founder-chairman",
    index: "01",
    departmentCode: "DEPT A · EXECUTIVE STEWARDSHIP",
    departmentName: "Founder & Chairman",
    name: "Dr. Oluwasegun E. Awosan",
    role: "Founder & Chairman",
    subRole: "Chairman, Board of Trustees",
    email: "emmanuel.awosan@libertyhealthwellbeing.org",
    image: "/images/Segun Awosan.jpeg",
    qualifications: [
      "Medical Degree (MD)",
      "MSc Global Healthcare Management — Coventry University",
      "CMI Level 7 Strategic Management & Leadership",
      "Postgraduate Certificate in Data Science & Generative AI",
    ],
    bio: [
      "Dr. Oluwasegun E. Awosan is the Founder and Chairman of Liberty Health & Wellbeing Foundation. His professional and academic background spans medicine, global healthcare management, research and strategic leadership.",
      "His interests extend beyond conventional healthcare delivery to the wider factors influencing health and wellbeing, including mental health, addiction, health inequalities and the relationship between public institutions and community wellbeing.",
      "Through the Foundation, he seeks to connect evidence-based research, preventive healthcare, public education, advocacy and strategic partnerships to develop sustainable solutions for underserved communities.",
    ],
    motivation:
      "His vision for the Foundation emerged from a desire to address the social, behavioural and institutional challenges influencing people’s health and quality of life. He believes meaningful improvements in wellbeing require more than treating illness; they require prevention, education, stronger communities and systems that support healthier lives.",
    motto: null,
    mottoLabel: null,
    tag: "Medicine · Global Healthcare Management · Strategy",
  },
  {
    id: "governance-engagement",
    index: "02",
    departmentCode: "GOVERNANCE & COMMUNITY ENGAGEMENT",
    departmentName: "Peacebuilding & Outreach Safety",
    name: "Dr. Florence F. Awosan, PhD",
    role: "Secretary, Board of Trustees",
    subRole:
      "Proposed Portfolio: Head of Community Engagement, Peacebuilding & Outreach Safety",
    identityLine:
      "Peace Studies and Conflict Resolution Scholar · Researcher · Conflict Management and Peacebuilding Practitioner",
    image: "/images/Dr. Florence F. Awosan, PhD img.jpeg",
    qualifications: [
      "Doctor of Philosophy (PhD) in Peace Studies and Conflict Resolution",
      "Master of Science (MSc) in Peace Studies and Conflict Resolution",
      "Bachelor of Science (Honours) in Biochemistry",
    ],
    bio: [
      "Dr. Florence F. Awosan is a Peace Studies and Conflict Resolution scholar, researcher and peacebuilding practitioner with an interdisciplinary academic background spanning conflict resolution, peace studies and biochemistry.",
      "Her professional interests focus on sustainable peace, conflict prevention, human security and the relationship between peaceful societies and population health.",
      "She recognises that conflict can have profound consequences for public health and community wellbeing, including displacement, loss of livelihoods, environmental degradation, damage to essential infrastructure and disruption of healthcare services.",
      "Through her work with Liberty Health & Wellbeing Foundation, she seeks to contribute evidence-informed approaches to community engagement, conflict-sensitive outreach, peacebuilding and the development of resilient, inclusive communities. Her expertise supports the Foundation’s broader commitment to addressing the social and institutional conditions that influence health, safety, dignity and wellbeing.",
    ],
    motivation:
      "Dr. Awosan is motivated by the understanding that sustainable peace is a fundamental prerequisite for human security, effective healthcare systems and societal wellbeing. She is committed to promoting evidence-informed approaches to conflict prevention, management and resolution, recognising that peaceful communities create stronger foundations for protecting lives, improving public health and supporting sustainable development. Through research, professional practice and knowledge dissemination, she seeks to advance inclusive communities where individuals can live with dignity, security and access to essential services.",
    motto:
      "Lasting peace is achieved not merely by resolving conflicts, but by transforming the conditions that give rise to them and building societies founded on justice, inclusion and mutual understanding.",
    mottoLabel: "Personal Motto",
    responsibilities: [
      "Support community outreach planning and stakeholder engagement.",
      "Advise on conflict-sensitive programme implementation.",
      "Develop community engagement and peacebuilding initiatives.",
      "Support outreach risk assessments and safety protocols.",
      "Promote constructive relationships with community leaders and local institutions.",
      "Contribute research and policy perspectives on conflict, human security and public health.",
      "Support training on conflict prevention, de-escalation and community relations.",
    ],
    tag: "Peacebuilding · Human Security · Outreach Safety",
  },
];

const medicalTeam: TeamMemberProfile[] = [
  {
    id: "dr-wuraola-awosan",
    index: "01",
    departmentCode: "DEPT B · MEDICAL & CLINICAL TEAM",
    departmentName: "Medical & Public Health",
    name: "Dr. Wuraola Ruth Awosan",
    role: "Medical & Public Health Team Member",
    subRole:
      "Founder & Chairman, WuraCare Mothers and Children Initiative (WuraCare MCI)",
    image: "/images/Wura Awosan.jpeg",
    qualifications: [
      "Doctor of Medicine (MD) — Ternopil National Medical University, Ukraine",
      "Master of Public Health (MPH, Epidemiology) — Liberty University, USA",
      "Doctor of Public Health (DrPH) Candidate in Maternal & Child Health — Liberty University, USA",
    ],
    bio: [
      "Dr. Wuraola Ruth Awosan is a medical doctor, public health professional and maternal and child health advocate whose work focuses on disease prevention, health equity and improving healthcare outcomes for vulnerable populations.",
      "She holds a Doctor of Medicine degree from Ternopil National Medical University, Ukraine, and a Master of Public Health with a concentration in Epidemiology from Liberty University, USA. She is currently pursuing a Doctor of Public Health (DrPH) in Maternal and Child Health at Liberty University.",
      "Her approach to public health is rooted in understanding the circumstances that shape health outcomes long before patients reach healthcare facilities. With a particular interest in maternal and child health, she advocates for early intervention, community-informed research and stronger healthcare systems that identify and address risks before they become critical.",
      "She is also the Founder of WuraCare Mothers and Children Initiative, an organisation dedicated to improving maternal and child wellbeing through community engagement and health education. Her work emphasises collaboration with nurses, midwives and community leaders to develop trusted, culturally relevant approaches to healthcare delivery.",
      "Through her medical background, epidemiological training and community-focused leadership, she brings a valuable perspective to the Foundation’s commitment to preventive healthcare, evidence-informed interventions and equitable access to quality healthcare.",
    ],
    motivation: null,
    motto:
      "You can treat what is in front of you and still have arrived late. This work is about arriving early.",
    mottoLabel: "Personal Philosophy",
    tag: "Maternal & Child Health · Epidemiology",
  },
  {
    id: "dr-awosan-oluwagbenga",
    index: "02",
    departmentCode: "DEPT B · MEDICAL & CLINICAL TEAM",
    departmentName: "Medical & Clinical",
    name: "Dr. Awosan Oluwagbenga S.",
    role: "Medical & Clinical Team Member",
    subRole: "Preventive Medicine & Public Health",
    image: "/images/Awosan Gbenga.jpeg",
    qualifications: [
      "MBBS — Afe Babalola University, Ado-Ekiti (ABUAD)",
      "MSc Public Health — In Progress",
    ],
    bio: [
      "Dr. Awosan Oluwagbenga S. is a medical doctor and member of the Medical and Clinical Team at Liberty Health & Wellbeing Foundation.",
      "He holds a Bachelor of Medicine, Bachelor of Surgery from Afe Babalola University, Ado-Ekiti, and is currently pursuing a Master of Science in Public Health.",
      "With a strong interest in preventive medicine, public health and community development, he believes effective healthcare extends beyond hospital settings to address the wider factors influencing individual and population health.",
      "He is passionate about applying medical knowledge, promoting health education and collaborating on sustainable initiatives that improve healthcare accessibility and community wellbeing.",
    ],
    motivation:
      "He is committed to contributing his medical knowledge, professional skills and ideas to initiatives that empower communities, promote disease prevention and improve health outcomes.",
    motto: null,
    mottoLabel: null,
    tag: "Preventive Medicine · Public Health",
  },
  {
    id: "mariam-adebukola-ogunjobi",
    index: "03",
    departmentCode: "DEPT B · MEDICAL & CLINICAL TEAM",
    departmentName: "Specialist Oncology Nursing",
    name: "Mariam Adebukola Ogunjobi",
    role: "Clinical Nurse Specialist — Breast Care Oncology",
    subRole: "Cancer Awareness, Early Detection & Patient Advocacy",
    image: "/images/Nurse Maria img.jpeg",
    qualifications: [
      "UK Registered Nurse & Nigerian Registered Nurse",
      "Advanced Clinical Practice (ACPG)",
      "Acute Medicine and Respiratory Nursing",
      "Specialist Breast Care and Oncology",
      "Patient Advocacy and Clinical Leadership",
    ],
    bio: [
      "Mariam Adebukola Ogunjobi is a Clinical Nurse Specialist in Breast Care Oncology, with professional experience spanning acute medicine, respiratory nursing, specialist cancer care and patient advocacy.",
      "Her clinical interests focus on cancer awareness, early detection, timely diagnosis and improving access to compassionate, patient-centred care.",
      "She is particularly passionate about strengthening cancer education and screening awareness across Nigeria and Africa, challenging misconceptions and reducing stigma through advocacy and community engagement.",
      "She brings specialist nursing knowledge and a strong commitment to improving health literacy and supporting individuals throughout their healthcare journey.",
    ],
    motivation:
      "Mariam is motivated by the belief that everyone deserves timely diagnosis, appropriate treatment and compassionate support, regardless of background or circumstances. She hopes to contribute to a healthcare environment where awareness leads to action and early intervention improves lives.",
    motto:
      "Turning awareness into action, early detection into hope, and compassionate care into impact.",
    mottoLabel: "Personal Motto",
    tag: "Breast Care Oncology · Specialist Nursing",
  },
  {
    id: "dr-ohaekwusi-blessing-chioma",
    index: "04",
    departmentCode: "DEPT B · MEDICAL & CLINICAL TEAM",
    departmentName: "Women’s & Children’s Health",
    name: "Dr. Ohaekwusi Blessing Chioma",
    role: "Medical & Clinical Team Member",
    subRole: "Women’s, Maternal & Child Health",
    image: "/images/Dr Blessing chioma img.jpeg",
    qualifications: [
      "Doctor of Medicine (MD) — I. Horbachevsky Ternopil National Medical University, Ternopil, Ukraine",
    ],
    bio: [
      "Dr. Ohaekwusi Blessing Chioma is a compassionate and dedicated medical doctor committed to improving lives through quality, accessible and patient-centred healthcare.",
      "Her clinical experience has strengthened her ability to take initiative, work collaboratively, make informed decisions and advocate for patients’ needs.",
      "She has a particular interest in women’s and children’s health, with a strong commitment to improving maternal and child health outcomes through accessible healthcare, education and community-focused initiatives.",
      "As a member of the Medical and Clinical Team at Liberty Health & Wellbeing Foundation, she brings a patient-centred perspective and a commitment to supporting healthier individuals, families and communities.",
    ],
    motivation:
      "Dr. Ohaekwusi is motivated by a desire to make quality healthcare more accessible, particularly for women and children. She hopes to contribute to initiatives that improve maternal and child health outcomes, strengthen patient advocacy and create healthier communities.",
    motto: null,
    mottoLabel: null,
    tag: "Women’s & Children’s Health · Patient Advocacy",
  },
  {
    id: "dr-okwuchukwu-valentine",
    index: "05",
    departmentCode: "DEPT B · MEDICAL & CLINICAL TEAM",
    departmentName: "Preventive Medicine & Sonography",
    name: "Dr. Okwuchukwu Valentine C.",
    role: "Medical & Clinical Team Member",
    subRole: "CEO / Managing Director, Marlix Healthcare Ltd",
    image: "/images/Dr. Valentine.jpeg",
    qualifications: [
      "MBBS",
      "MPH (Master of Public Health)",
      "Cli.Sono (Clinical Sonography)",
    ],
    bio: [
      "Dr. Okwuchukwu Valentine C. is a medical doctor, public health professional and healthcare entrepreneur committed to improving access to quality, affordable and patient-centred healthcare.",
      "As Chief Executive Officer and Managing Director of Marlix Healthcare Ltd, he champions preventive medicine, early disease detection, evidence-based clinical practice and accessible healthcare services, particularly for underserved communities.",
      "His professional interests encompass community medical outreach, public health education, health data utilisation, disease prevention and strengthening referral pathways between primary healthcare and specialist medical services.",
      "Driven by the belief that healthcare should begin with prevention rather than illness, Dr. Valentine advocates for proactive healthcare delivery, informed patient participation and sustainable community-based interventions.",
      "His commitment to accessible healthcare and population health improvement aligns with Liberty Health & Wellbeing Foundation’s mission to advance health equity, preventive healthcare and community wellbeing.",
    ],
    motivation: null,
    motto: "Better Health. A Healthier You.",
    mottoLabel: "Personal Philosophy",
    tag: "Preventive Medicine · Clinical Sonography",
  },
];

const operationalDepartments: TeamMemberProfile[] = [
  {
    id: "bolaji-temitope-oyemade",
    index: "01",
    departmentCode: "DEPT D · EDITORIAL DEPARTMENT",
    departmentName: "Editorial Department",
    name: "Bolaji Temitope Oyemade",
    role: "Chief Editor",
    subRole: "Research Communication & Editorial Direction",
    image: "/images/Chief editor img.jpeg",
    qualifications: [
      "M.A. Peace, Conflict and Humanitarian Studies — University of Ibadan, Nigeria",
    ],
    bio: [
      "Bolaji Temitope Oyemade brings an academic background in humanitarian studies and social research to her role as Chief Editor at Liberty Health & Wellbeing Foundation.",
      "Her interests focus on understanding how conflict, inequality and social exclusion shape human wellbeing, particularly among vulnerable and underserved populations.",
      "She contributes a multidisciplinary perspective to the Foundation’s editorial direction, with an emphasis on clear, responsible and evidence-informed communication. Her approach recognises the importance of connecting research with lived experiences and encouraging constructive responses to the challenges affecting individuals and communities.",
    ],
    motivation:
      "Bolaji is driven by a desire to understand the circumstances shaping people’s lives, particularly those affected by conflict, inequality and exclusion. She believes research and informed communication should bring attention to overlooked experiences and encourage more thoughtful responses to social challenges.",
    motto:
      "Wellbeing is shaped not only by the care people receive but also by the conditions in which they live.",
    mottoLabel: "Personal Motto",
    tag: "Humanitarian Studies · Social Research",
  },
  {
    id: "moses-bolawaye-adegbite",
    index: "02",
    departmentCode: "DEPT D · EDITORIAL DEPARTMENT",
    departmentName: "Editorial Department",
    name: "Moses Bolawaye Adegbite",
    role: "Assistant Editor",
    subRole: "Publications & Public Health Content Review",
    image: "/images/Moses Bolawaye Adegbite img.jpeg",
    qualifications: [
      "Editorial Review, Publications & Public Health Content Development",
    ],
    bio: [
      "Moses supports the Chief Editor in preparing, reviewing and refining the Foundation’s educational and editorial content.",
      "His role includes assisting with publications, maintaining editorial consistency and supporting the communication of accurate, accessible health and wellbeing information for the public.",
    ],
    motivation: null,
    motto: null,
    mottoLabel: null,
    tag: "Editorial Consistency · Public Health Publications",
  },
  {
    id: "agbaje-favour",
    index: "03",
    departmentCode: "DEPT E · COMMUNICATIONS & SOCIAL MEDIA",
    departmentName: "Communications & Social Media",
    name: "Agbaje Favour",
    role: "Social Media Expert",
    subRole: "Digital Health Advocacy & Public Engagement",
    image: "/images/Favour Agbaje img.jpeg",
    qualifications: [
      "Third-Year Nursing Student — Joseph Ayo Babalola University, Nigeria",
    ],
    bio: [
      "Agbaje Favour combines a passion for healthcare advocacy with digital communication to support the online presence, public engagement and health awareness initiatives of Liberty Health & Wellbeing Foundation.",
      "As a nursing student, she brings a developing understanding of preventive healthcare, patient education and community wellbeing to her communications role.",
      "She is passionate about using digital platforms to make reliable health information more accessible, promote meaningful conversations around public health and connect communities with the Foundation’s mission. Her interests lie at the intersection of healthcare, digital engagement and community development.",
    ],
    motivation:
      "Favour’s interest in healthcare developed during her secondary school years, when she became increasingly aware of inequalities in access to quality medical services and professional care. She believes healthcare should include education, prevention and empowering individuals to make informed decisions about their health. Her motivation is to contribute to initiatives that improve quality of life and create healthier communities.",
    motto: null,
    mottoLabel: null,
    tag: "Nursing · Digital Health Communication",
  },
  {
    id: "kolade-oyemade",
    index: "04",
    departmentCode: "DEPT C · FINANCE DEPARTMENT",
    departmentName: "Finance Department",
    name: "Kolade Oyemade",
    role: "Head of Finance",
    subRole: "Financial Planning, Budgeting & Resource Accountability",
    image: null,
    qualifications: [
      "Financial Administration, Budgeting & Fundraising Accountability",
    ],
    bio: [
      "Kolade Oyemade serves as Head of Finance at Liberty Health & Wellbeing Foundation.",
      "The Finance Department supports financial planning, budgeting, financial administration, record-keeping, fundraising accountability and responsible resource management across all Foundation initiatives.",
    ],
    motivation: null,
    motto: null,
    mottoLabel: null,
    tag: "Financial Governance · Resource Stewardship",
  },
];

export default function TeamInteractiveShowcase() {
  const [activeMedicalIdx, setActiveMedicalIdx] = useState(0);
  const [activeOpsIdx, setActiveOpsIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const opsTouchStartX = useRef<number | null>(null);

  // Handle deep-linking via URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const medIndex = medicalTeam.findIndex((m) => m.id === hash);
      if (medIndex !== -1) {
        setActiveMedicalIdx(medIndex);
      }

      if (hash === "editorial" || hash === "editorial-department") {
        setActiveOpsIdx(0);
      } else if (hash === "communications") {
        setActiveOpsIdx(2);
      } else if (hash === "finance") {
        setActiveOpsIdx(3);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const activeMedical = medicalTeam[activeMedicalIdx];
  const nextMedical =
    medicalTeam[(activeMedicalIdx + 1) % medicalTeam.length];

  const handleMedPrev = () => {
    setActiveMedicalIdx(
      (prev) => (prev - 1 + medicalTeam.length) % medicalTeam.length
    );
  };

  const handleMedNext = () => {
    setActiveMedicalIdx((prev) => (prev + 1) % medicalTeam.length);
  };

  const activeOps = operationalDepartments[activeOpsIdx];
  const handleOpsPrev = () => {
    setActiveOpsIdx(
      (prev) =>
        (prev - 1 + operationalDepartments.length) %
        operationalDepartments.length
    );
  };
  const handleOpsNext = () => {
    setActiveOpsIdx((prev) => (prev + 1) % operationalDepartments.length);
  };

  return (
    <div className="flex flex-col w-full">
      {/* =========================================================
          PART 1: STICKY SCROLL-STACK — EXECUTIVE & GOVERNANCE
      ========================================================= */}
      <section
        id="founder-chairman"
        className="py-16 sm:py-24 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                01 · Executive &amp; Governance Scroll-Stack
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
                Executive Leadership &amp; Governance
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed font-normal">
                Scroll through our statutory leadership cards. Each profile stacks into place to highlight our institutional stewardship and peacebuilding governance.
              </p>
            </div>
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              SCROLL STACK · 02 PROFILES
            </div>
          </div>

          {/* Sticky Scroll Stack Container */}
          <div className="relative space-y-12 sm:space-y-16 pb-6">
            {executiveScrollStack.map((leader, idx) => (
              <div
                key={leader.id}
                id={idx === 1 ? "governance-engagement" : undefined}
                style={{
                  top: `${96 + idx * 28}px`,
                }}
                className="lg:sticky rounded-2xl bg-canvas border border-slate-200 transition-all duration-300 overflow-hidden"
              >
                {/* Top Architectural Index Bar */}
                <div className="bg-navy text-white px-6 sm:px-8 py-3.5 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-primary">
                      {leader.index} / 02
                    </span>
                    <span className="text-white/25">|</span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white font-heading">
                      {leader.departmentCode}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-300 hidden sm:inline">
                    {leader.tag}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 lg:p-10 bg-white">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Portrait & Qualifications */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                      {leader.image && (
                        <div className="relative w-56 sm:w-64 lg:w-full aspect-[4/5] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 mb-5">
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 256px, 360px"
                            priority={idx === 0}
                          />
                        </div>
                      )}

                      <div className="w-full">
                        <div className="border-l-2 border-primary pl-3 mb-2 text-left">
                          <span className="block text-xs font-bold uppercase tracking-widest text-primary font-heading">
                            {leader.role}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading tracking-tight text-left">
                          {leader.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-primary mt-1 text-left">
                          {leader.subRole}
                        </p>
                        {leader.identityLine && (
                          <p className="text-xs text-slate-500 font-medium mt-1.5 leading-snug text-left">
                            {leader.identityLine}
                          </p>
                        )}

                        {leader.email && (
                          <a
                            href={`mailto:${leader.email}`}
                            className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-navy hover:text-primary transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5 text-primary" />
                            <span>{leader.email}</span>
                          </a>
                        )}

                        <div className="mt-5 p-4 rounded-xl bg-canvas border border-slate-200/80 text-left">
                          <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider mb-2.5 font-heading">
                            <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                            <span>Academic Qualifications</span>
                          </div>
                          <ul className="space-y-2 text-xs text-slate-700">
                            {leader.qualifications.map((q, qIdx) => (
                              <li key={qIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                <span>{q}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Biography, Motivation, Motto & Responsibilities */}
                    <div className="lg:col-span-8 flex flex-col gap-6 text-left">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2.5 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span>Professional Biography</span>
                        </h4>
                        <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                          {leader.bio.map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>

                      {leader.motivation && (
                        <div className="p-5 sm:p-6 rounded-xl bg-canvas border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            <span>Professional Motivation</span>
                          </h4>
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            {leader.motivation}
                          </p>
                        </div>
                      )}

                      {leader.motto && (
                        <div className="p-5 sm:p-6 rounded-xl bg-primary-light/60 border border-badge-gold-border/70 relative">
                          <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4 pointer-events-none" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-primary font-heading block mb-1">
                            {leader.mottoLabel || "Personal Motto"}
                          </span>
                          <blockquote className="text-navy font-heading italic text-base sm:text-lg font-semibold leading-snug">
                            “{leader.motto}”
                          </blockquote>
                        </div>
                      )}

                      {leader.responsibilities && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-3 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            <span>Proposed Responsibilities Within the Foundation</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {leader.responsibilities.map((item, rIdx) => (
                              <div
                                key={rIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-canvas p-3 rounded-lg border border-slate-200/70"
                              >
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PART 2: INTERACTIVE SWIPE & CARD-STACK DECK — MEDICAL TEAM
      ========================================================= */}
      <section
        id="medical-clinical"
        className="py-16 sm:py-24 bg-canvas border-b border-slate-200/80 overflow-hidden"
      >
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Swipe Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                02 · Interactive Clinical Card Stack &amp; Swipe Deck
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
                Medical &amp; Clinical Team
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed font-normal">
                Swipe or select a specialist below to explore our medical doctors, clinical nurse specialists, and public health epidemiologists.
              </p>
            </div>

            {/* Deck Counter & Prev/Next Controls */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right mr-2">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                  SPECIALIST DECK
                </div>
                <div className="text-lg font-extrabold font-mono text-navy">
                  {activeMedical.index}{" "}
                  <span className="text-slate-300 font-normal">/ 05</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleMedPrev}
                aria-label="Previous medical team member"
                className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleMedNext}
                aria-label="Next medical team member"
                className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Specialist Selector Strip (Horizontal Swipeable Bar) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {medicalTeam.map((member, idx) => {
              const isSelected = idx === activeMedicalIdx;
              return (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setActiveMedicalIdx(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-navy border-slate-200/80"
                  }`}
                >
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-white/20 flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="40px"
                      />
                    ) : (
                      <Stethoscope
                        className={`w-5 h-5 ${
                          isSelected ? "text-primary" : "text-blue"
                        }`}
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isSelected ? "text-primary" : "text-slate-400"
                      }`}
                    >
                      {member.index} · {member.departmentName}
                    </div>
                    <div
                      className={`text-xs font-bold truncate font-heading ${
                        isSelected ? "text-white" : "text-navy"
                      }`}
                    >
                      {member.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stacked Deck Visual Container (with Touch Swipe Support) */}
          <div
            data-no-sr
            className="relative"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const deltaX = e.changedTouches[0].clientX - touchStartX.current;
              if (deltaX < -50) handleMedNext();
              if (deltaX > 50) handleMedPrev();
              touchStartX.current = null;
            }}
          >
            {/* Active Foreground Card */}
            <div
              key={activeMedical.id}
              className="relative z-10 rounded-2xl bg-white border border-slate-200 overflow-hidden"
            >
              {/* Top Deck Bar */}
              <div className="bg-navy text-white px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-primary">
                    CARD {activeMedical.index} OF 05
                  </span>
                  <span className="text-white/25">|</span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white font-heading">
                    {activeMedical.tag}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleMedNext}
                  className="text-xs font-semibold text-slate-300 hover:text-primary inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next: {nextMedical.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                </button>
              </div>

              {/* Active Card Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                    {activeMedical.image ? (
                      <div className="relative w-56 sm:w-64 lg:w-full aspect-[4/5] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 mb-5">
                        <Image
                          src={activeMedical.image}
                          alt={activeMedical.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 256px, 360px"
                        />
                      </div>
                    ) : (
                      <div className="w-56 sm:w-64 lg:w-full aspect-[4/4.2] rounded-xl bg-canvas border border-slate-200 flex flex-col items-center justify-center p-6 mb-5">
                        <Stethoscope className="w-14 h-14 text-blue mb-3" />
                        <span className="text-lg font-extrabold text-navy font-heading text-center">
                          {activeMedical.name}
                        </span>
                        <span className="text-xs font-semibold text-blue uppercase tracking-wider mt-1 text-center">
                          {activeMedical.tag}
                        </span>
                      </div>
                    )}

                    <div className="w-full text-left">
                      <div className="border-l-2 border-blue pl-3 mb-2">
                        <span className="block text-xs font-bold uppercase tracking-widest text-blue font-heading">
                          {activeMedical.role}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading tracking-tight">
                        {activeMedical.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-primary mt-1">
                        {activeMedical.subRole}
                      </p>

                      <div className="mt-5 p-4 rounded-xl bg-canvas border border-slate-200/80">
                        <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider mb-2.5 font-heading">
                          <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                          <span>Qualifications &amp; Expertise</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {activeMedical.qualifications.map((q, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-8 flex flex-col justify-between gap-6 text-left">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2.5 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span>Professional Biography</span>
                        </h4>
                        <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                          {activeMedical.bio.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </div>

                      {activeMedical.motivation && (
                        <div className="p-5 rounded-xl bg-canvas border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            <span>Motivation</span>
                          </h4>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {activeMedical.motivation}
                          </p>
                        </div>
                      )}

                      {activeMedical.motto && (
                        <div className="p-5 rounded-xl bg-primary-light/60 border border-badge-gold-border/70 relative">
                          <Quote className="w-7 h-7 text-primary/30 absolute top-4 right-4 pointer-events-none" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-primary font-heading block mb-1">
                            {activeMedical.mottoLabel || "Personal Motto"}
                          </span>
                          <blockquote className="text-navy font-heading italic text-base font-semibold leading-snug">
                            “{activeMedical.motto}”
                          </blockquote>
                        </div>
                      )}
                    </div>

                    {/* Bottom Card Deck Navigation Footer */}
                    <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-1.5">
                        {medicalTeam.map((m, dotIdx) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setActiveMedicalIdx(dotIdx)}
                            aria-label={`Select ${m.name}`}
                            className={`h-1.5 rounded-full transition-all cursor-pointer ${
                              dotIdx === activeMedicalIdx
                                ? "w-8 bg-primary"
                                : "w-2 bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleMedPrev}
                          className="px-4 py-2 rounded-full bg-canvas border border-slate-200 text-xs font-bold text-navy cursor-pointer"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={handleMedNext}
                          className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Next Specialist</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Note on Additional Medical Professionals */}
          <div className="mt-6 p-5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between flex-wrap gap-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-3">
              <HeartPulse className="w-5 h-5 text-primary shrink-0" />
              <span>
                <strong>Expanding Clinical Network:</strong> The Foundation is developing a wider medical and nursing team. Additional members will be published as their profiles and qualifications are finalised.
              </span>
            </div>
            <Link
              href="/opportunities"
              className="text-xs font-bold text-primary hover:text-navy inline-flex items-center gap-1 shrink-0"
            >
              <span>Join Our Clinical Network</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          PART 3: INTERACTIVE DEPARTMENTAL DECK — EDITORIAL, COMMUNICATIONS & FINANCE
      ========================================================= */}
      <section
        id="editorial"
        className="py-16 sm:py-24 bg-white border-b border-slate-200/80"
      >
        <div id="communications" />
        <div id="finance" />
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                03 · Departmental Leadership Deck
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
                Editorial, Communications &amp; Finance
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed font-normal">
                Swipe or switch between our Editorial, Digital Communications, and Financial Stewardship leaders.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right mr-2">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                  OPERATIONS DECK
                </div>
                <div className="text-lg font-extrabold font-mono text-navy">
                  {activeOps.index}{" "}
                  <span className="text-slate-300 font-normal">/ 04</span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleOpsPrev}
                aria-label="Previous department member"
                className="w-11 h-11 rounded-full bg-canvas border border-slate-200 flex items-center justify-center text-navy cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleOpsNext}
                aria-label="Next department member"
                className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4-Column Selector Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {operationalDepartments.map((member, idx) => {
              const isSelected = idx === activeOpsIdx;
              return (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setActiveOpsIdx(idx)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    isSelected
                      ? "bg-navy text-white border-navy"
                      : "bg-canvas text-navy border-slate-200/80"
                  }`}
                >
                  <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-white border border-slate-200/60 flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="44px"
                      />
                    ) : (
                      <Landmark
                        className={`w-5 h-5 ${
                          isSelected ? "text-primary" : "text-navy"
                        }`}
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isSelected ? "text-primary" : "text-slate-400"
                      }`}
                    >
                      {member.index} · {member.role}
                    </div>
                    <div
                      className={`text-xs sm:text-sm font-bold truncate font-heading ${
                        isSelected ? "text-white" : "text-navy"
                      }`}
                    >
                      {member.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Departmental Card */}
          <div
            className="relative"
            onTouchStart={(e) => {
              opsTouchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (opsTouchStartX.current === null) return;
              const deltaX =
                e.changedTouches[0].clientX - opsTouchStartX.current;
              if (deltaX < -50) handleOpsNext();
              if (deltaX > 50) handleOpsPrev();
              opsTouchStartX.current = null;
            }}
          >
            <div className="rounded-2xl bg-canvas border border-slate-200 overflow-hidden">
              <div className="bg-navy text-white px-6 sm:px-8 py-3.5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-primary">
                    {activeOps.index} / 04
                  </span>
                  <span className="text-white/25">|</span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white font-heading">
                    {activeOps.departmentCode}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-300 hidden sm:inline">
                  {activeOps.tag}
                </span>
              </div>

              <div className="p-6 sm:p-8 lg:p-10 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column */}
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                    {activeOps.image ? (
                      <div className="relative w-56 sm:w-64 lg:w-full aspect-[4/5] rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 mb-5">
                        <Image
                          src={activeOps.image}
                          alt={activeOps.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 256px, 360px"
                        />
                      </div>
                    ) : (
                      <div className="w-56 sm:w-64 lg:w-full aspect-[4/4.2] rounded-xl bg-canvas border border-slate-200 flex flex-col items-center justify-center p-6 mb-5">
                        <Landmark className="w-14 h-14 text-primary mb-3" />
                        <span className="text-lg font-extrabold text-navy font-heading text-center">
                          {activeOps.name}
                        </span>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider mt-1 text-center">
                          {activeOps.role} · Appointment Confirmed
                        </span>
                      </div>
                    )}

                    <div className="w-full text-left">
                      <div className="border-l-2 border-primary pl-3 mb-2">
                        <span className="block text-xs font-bold uppercase tracking-widest text-primary font-heading">
                          {activeOps.role} · {activeOps.departmentName}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading tracking-tight">
                        {activeOps.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                        {activeOps.subRole}
                      </p>

                      <div className="mt-5 p-4 rounded-xl bg-canvas border border-slate-200/80">
                        <div className="flex items-center gap-2 text-xs font-bold text-navy uppercase tracking-wider mb-2 font-heading">
                          <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                          <span>Qualification &amp; Scope</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {activeOps.qualifications.map((q, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-8 flex flex-col justify-between gap-6 text-left">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2.5 flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span>Professional Biography &amp; Role</span>
                        </h4>
                        <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                          {activeOps.bio.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </div>

                      {activeOps.motivation && (
                        <div className="p-5 rounded-xl bg-canvas border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            <span>Motivation</span>
                          </h4>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {activeOps.motivation}
                          </p>
                        </div>
                      )}

                      {activeOps.motto && (
                        <div className="p-5 rounded-xl bg-primary-light/60 border border-badge-gold-border/70 relative">
                          <Quote className="w-7 h-7 text-primary/30 absolute top-4 right-4 pointer-events-none" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-primary font-heading block mb-1">
                            {activeOps.mottoLabel || "Personal Motto"}
                          </span>
                          <blockquote className="text-navy font-heading italic text-base font-semibold leading-snug">
                            “{activeOps.motto}”
                          </blockquote>
                        </div>
                      )}
                    </div>

                    <div className="pt-5 border-t border-slate-200/80 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-1.5">
                        {operationalDepartments.map((m, dotIdx) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setActiveOpsIdx(dotIdx)}
                            aria-label={`Select ${m.name}`}
                            className={`h-1.5 rounded-full transition-all cursor-pointer ${
                              dotIdx === activeOpsIdx
                                ? "w-8 bg-primary"
                                : "w-2 bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleOpsPrev}
                          className="px-4 py-2 rounded-full bg-canvas border border-slate-200 text-xs font-bold text-navy cursor-pointer"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          onClick={handleOpsNext}
                          className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Next Member</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

