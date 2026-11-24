"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  motivationLabel?: string;
  motto: string | null;
  mottoLabel: string | null;
  responsibilities?: string[];
  responsibilitiesLabel?: string;
  tag: string;
}

const executiveScrollStack: TeamMemberProfile[] = [
  {
    id: "founder-chairman",
    index: "01",
    departmentCode: "Executive Leadership",
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
      "Dr. Oluwasegun E. Awosan is the Founder and Chairman of Liberty Health & Wellbeing Foundation, with an academic and professional background spanning medicine, global healthcare management, research and strategic leadership.",
      "Through the Foundation, he connects evidence-based research, preventive healthcare, mental health and addiction awareness, public education and strategic partnerships to deliver sustainable solutions for underserved communities.",
    ],
    motivation:
      "His vision emerged from a commitment to address the social, behavioural and institutional determinants of health—recognising that lasting wellbeing requires prevention, education, stronger communities and accountable systems.",
    motto: null,
    mottoLabel: null,
    tag: "Medicine · Global Healthcare Management · Strategy",
  },
  {
    id: "governance-engagement",
    index: "02",
    departmentCode: "Governance & Community Engagement",
    departmentName: "Peacebuilding & Outreach Safety",
    name: "Dr. Florence F. Awosan, PhD",
    role: "Secretary, Board of Trustees",
    subRole: "Head of Community Engagement, Peacebuilding & Outreach Safety",
    identityLine:
      "Peace Studies & Conflict Resolution Scholar · Researcher · Peacebuilding Practitioner",
    image: "/images/Dr. Florence F. Awosan, PhD img.jpeg",
    qualifications: [
      "PhD in Peace Studies and Conflict Resolution",
      "MSc in Peace Studies and Conflict Resolution",
      "BSc (Honours) in Biochemistry",
    ],
    bio: [
      "Dr. Florence F. Awosan is a Peace Studies and Conflict Resolution scholar and practitioner whose work focuses on sustainable peace, conflict prevention, human security and population health.",
      "At Liberty Health & Wellbeing Foundation, she leads evidence-informed community engagement, conflict-sensitive outreach planning and safety protocols that strengthen inclusive, resilient communities.",
    ],
    motivation:
      "Motivated by the principle that sustainable peace is essential for human security and effective healthcare delivery, she advances conflict-sensitive practices that protect dignity and access to essential services.",
    motto:
      "Lasting peace is achieved not merely by resolving conflicts, but by transforming the conditions that give rise to them and building societies founded on justice, inclusion and mutual understanding.",
    mottoLabel: "Personal Motto",
    responsibilitiesLabel: "Key Responsibilities",
    responsibilities: [
      "Community outreach planning and stakeholder engagement.",
      "Conflict-sensitive programme implementation and risk assessment.",
      "Outreach safety protocols and local institutional relations.",
      "Research and policy guidance on conflict, human security and health.",
    ],
    tag: "Peacebuilding · Human Security · Outreach Safety",
  },
  {
    id: "sharon-opeyemi-adesina",
    index: "03",
    departmentCode: "Ethics, Governance & HR",
    departmentName: "Ethics, Governance & HR",
    name: "Sharon Opeyemi Adesina",
    role: "Ethics, Governance and HR",
    subRole: "Data Protection, Institutional Ethics & Accountable Governance",
    image: "/images/Sharon Opeyemi Adesina.jpeg",
    qualifications: [
      "BA International Law, First Class Honours",
      "MSc Business Management, Cybersecurity Specialisation",
      "CIPP/E Certification (In Progress)",
    ],
    bio: [
      "Sharon’s background in international law, cybersecurity and data protection informs her focus on privacy, ethical practice and accountable institutional governance.",
      "She supports the Foundation in safeguarding personal information, upholding regulatory compliance and maintaining transparent, responsible operational and human-resource processes.",
    ],
    motivation:
      "Sharon is committed to protecting people’s information and promoting ethical, accountable governance. Her background in law and cybersecurity informs her interest in privacy and responsible decision-making.",
    motivationLabel: "Inspiration",
    motto:
      "Trust grows where privacy, fairness and accountability are protected.",
    mottoLabel: "Personal Motto",
    tag: "International Law · Cybersecurity · Governance",
  },
];

const medicalTeam: TeamMemberProfile[] = [
  {
    id: "dr-wuraola-awosan",
    index: "01",
    departmentCode: "Medical & Clinical Team",
    departmentName: "Medical & Public Health",
    name: "Dr. Wuraola Ruth Awosan",
    role: "Medical & Public Health Specialist",
    subRole:
      "Founder & Chairman, WuraCare Mothers and Children Initiative (WuraCare MCI)",
    image: "/images/Wura Awosan.jpeg",
    qualifications: [
      "Doctor of Medicine (MD) — Ternopil National Medical University, Ukraine",
      "Master of Public Health (MPH, Epidemiology) — Liberty University, USA",
      "DrPH Candidate in Maternal & Child Health — Liberty University, USA",
    ],
    bio: [
      "Dr. Wuraola Ruth Awosan is a medical doctor, epidemiologist and maternal and child health advocate focused on disease prevention, health equity and early intervention for vulnerable populations.",
      "As Founder of WuraCare Mothers and Children Initiative (WuraCare MCI), she collaborates with clinicians, nurses and community leaders to deliver culturally relevant, evidence-informed maternal and child healthcare.",
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
    departmentCode: "Medical & Clinical Team",
    departmentName: "Preventive Medicine",
    name: "Dr. Awosan Oluwagbenga S.",
    role: "Medical Doctor — Preventive Medicine & Public Health",
    subRole: "Preventive Medicine & Community Health",
    image: "/images/Awosan Gbenga.jpeg",
    qualifications: [
      "MBBS — Afe Babalola University, Ado-Ekiti (ABUAD)",
      "MSc Public Health — In Progress",
    ],
    bio: [
      "Dr. Awosan Oluwagbenga S. is a medical doctor focused on preventive medicine, public health education and community development beyond conventional hospital settings.",
      "He applies clinical knowledge to sustainable community health initiatives that expand healthcare accessibility and strengthen population wellbeing.",
    ],
    motivation:
      "Committed to contributing clinical expertise to initiatives that empower communities, promote disease prevention and improve long-term health outcomes.",
    motto: null,
    mottoLabel: null,
    tag: "Preventive Medicine · Public Health",
  },
  {
    id: "mariam-adebukola-ogunjobi",
    index: "03",
    departmentCode: "Medical & Clinical Team",
    departmentName: "Specialist Oncology Nursing",
    name: "Mariam Adebukola Ogunjobi",
    role: "Clinical Nurse Specialist — Breast Care Oncology",
    subRole: "Cancer Awareness, Early Detection & Patient Advocacy",
    image: "/images/Nurse Maria img.jpeg",
    qualifications: [
      "UK Registered Nurse & Nigerian Registered Nurse",
      "Advanced Clinical Practice (ACPG)",
      "Acute Medicine, Respiratory Nursing & Specialist Breast Care Oncology",
      "Patient Advocacy and Clinical Leadership",
    ],
    bio: [
      "Mariam Adebukola Ogunjobi is a Clinical Nurse Specialist in Breast Care Oncology with extensive experience across acute medicine, respiratory nursing, specialist cancer care and patient advocacy.",
      "She leads cancer education and early screening awareness across Nigeria and Africa, challenging stigma and improving health literacy throughout the patient journey.",
    ],
    motivation:
      "Motivated by the belief that everyone deserves timely diagnosis, appropriate treatment and compassionate support regardless of background.",
    motto:
      "Turning awareness into action, early detection into hope, and compassionate care into impact.",
    mottoLabel: "Personal Motto",
    tag: "Breast Care Oncology · Specialist Nursing",
  },
  {
    id: "dr-ohaekwusi-blessing-chioma",
    index: "04",
    departmentCode: "Medical & Clinical Team",
    departmentName: "Women’s & Children’s Health",
    name: "Dr. Ohaekwusi Blessing Chioma",
    role: "Medical Doctor — Women’s, Maternal & Child Health",
    subRole: "Women’s, Maternal & Child Health",
    image: "/images/Dr Blessing chioma img.jpeg",
    qualifications: [
      "Doctor of Medicine (MD) — I. Horbachevsky Ternopil National Medical University, Ukraine",
    ],
    bio: [
      "Dr. Ohaekwusi Blessing Chioma is a medical doctor dedicated to improving lives through accessible, patient-centred clinical care and community health education.",
      "She focuses particularly on women’s and children’s health, advancing maternal and child outcomes through preventive education and community-focused initiatives.",
    ],
    motivation:
      "Driven to make quality healthcare accessible for women and children while strengthening patient advocacy and healthier family outcomes.",
    motto: null,
    mottoLabel: null,
    tag: "Women’s & Children’s Health · Patient Advocacy",
  },
  {
    id: "dr-okwuchukwu-valentine",
    index: "05",
    departmentCode: "Medical & Clinical Team",
    departmentName: "Preventive Medicine & Sonography",
    name: "Dr. Okwuchukwu Valentine C.",
    role: "Medical Doctor — Preventive Medicine & Clinical Sonography",
    subRole: "CEO / Managing Director, Marlix Healthcare Ltd",
    image: "/images/Dr. Valentine.jpeg",
    qualifications: [
      "MBBS",
      "MPH (Master of Public Health)",
      "Cli.Sono (Clinical Sonography)",
    ],
    bio: [
      "Dr. Okwuchukwu Valentine C. is a medical doctor, public health professional and CEO/Managing Director of Marlix Healthcare Ltd, championing preventive medicine, early detection and evidence-based clinical care.",
      "His work spans community medical outreach, diagnostic sonography awareness, health data utilisation and strengthening referral pathways between primary and specialist care.",
    ],
    motivation: null,
    motto:
      "Healthcare Beyond Treatment; Prevention, Access, Empowerment and Continuity of Care.",
    mottoLabel: "Personal Philosophy",
    tag: "Preventive Medicine · Clinical Sonography",
  },
  {
    id: "dr-ayongo-vivian-terkumbur",
    index: "06",
    departmentCode: "Medical & Clinical Team",
    departmentName: "Emergency & Preventive Medicine",
    name: "Dr. Ayongo Vivian Terkumbur",
    role: "Casualty & Emergency Medical Officer",
    subRole: "Trauma, Emergency & Preventive Care",
    image: "/images/Dr Ayongo Vivian Terkumbur.jpeg",
    qualifications: [
      "Doctor of Medicine (MD) — Ivano-Frankivsk, Ukraine",
    ],
    bio: [
      "Dr. Ayongo Vivian Terkumbur is a medical doctor with extensive frontline clinical experience in trauma care, emergency medicine and acute patient management.",
      "Passionate about patient-centred care and community health, she bridges emergency medical services and preventive healthcare through public health education, early intervention and equitable outreach for underserved populations.",
    ],
    motivation: null,
    motto:
      "Effective healthcare begins before an emergency, through awareness, prevention and timely intervention.",
    mottoLabel: "Professional Philosophy",
    tag: "Emergency Medicine · Preventive Healthcare",
  },
  {
    id: "dr-daso-boma",
    index: "07",
    departmentCode: "Medical & Clinical Team",
    departmentName: "General Surgery & Oncology",
    name: "Dr. Daso Boma E. (MD)",
    role: "Medical Officer — General Surgery & Oncology",
    subRole: "General Surgery, Oncology & Preventive Care",
    image: "/images/Dr Daso Boma E. (MD).jpeg",
    qualifications: [
      "Doctor of Medicine (MD) — Ivano-Frankivsk National Medical University",
      "Registered Medical Practitioner — Medical and Dental Council of Nigeria (MDCN)",
      "Registered Medical Practitioner — General Medical Council (GMC), United Kingdom",
    ],
    bio: [
      "Dr. Daso Boma E. is a Medical Officer with experience across different levels of healthcare and in several states in Nigeria. He studied at Ivano-Frankivsk National Medical University.",
      "Registered with the Medical and Dental Council of Nigeria and the General Medical Council in the UK, Dr. Boma is committed to improving access to quality healthcare, with professional interests in general surgery and oncology. At Liberty Health & Wellbeing Foundation, he contributes medical insight to community health initiatives and supports the Foundation’s work to expand access to health information and preventive care.",
    ],
    motivation: null,
    motto: null,
    mottoLabel: null,
    tag: "General Surgery · Oncology · Preventive Care",
  },
];

const operationalDepartments: TeamMemberProfile[] = [
  {
    id: "kolade-oyemade",
    index: "01",
    departmentCode: "Finance Department",
    departmentName: "Finance Department",
    name: "Kolade Oyemade",
    role: "Head of Finance",
    subRole: "Financial Planning & Resource Accountability",
    image: "/images/Kolade Oyemade.jpeg",
    qualifications: [
      "Bachelor of Science (BSc) in Management — V. N. Karazin Kharkiv National University, Ukraine",
      "Master of Science (MSc) in Finance and Investment — Berlin School of Business and Innovation, Germany",
    ],
    bio: [
      "Kolade Oyemade serves as Head of Finance at Liberty Health & Wellbeing Foundation. He holds a BSc in Management from V. N. Karazin Kharkiv National University and an MSc in Finance and Investment from Berlin School of Business and Innovation.",
      "His academic background in management, finance and investment supports the Foundation’s financial planning, budgeting, transparent record-keeping and effective resource allocation across all programmes and initiatives.",
    ],
    motivation:
      "Kolade’s role is to help ensure that the Foundation’s financial resources are managed responsibly and directed towards its health, wellbeing and community development objectives.",
    motivationLabel: "Contribution to the Foundation",
    motto: null,
    mottoLabel: null,
    responsibilitiesLabel: "Core Responsibilities",
    responsibilities: [
      "Financial planning and budget development.",
      "Financial administration and record-keeping.",
      "Monitoring expenditure and resource allocation.",
      "Supporting financial accountability and reporting.",
      "Promoting transparency and responsible financial management.",
    ],
    tag: "Financial Governance · Investment & Stewardship",
  },
  {
    id: "bolaji-temitope-oyemade",
    index: "02",
    departmentCode: "Editorial & Public Relations",
    departmentName: "Editorial Department",
    name: "Bolaji Temitope Oyemade",
    role: "Chief Editor",
    subRole: "Research Communication & Editorial Direction",
    image: "/images/Chief editor img.jpeg",
    qualifications: [
      "M.A. Peace, Conflict and Humanitarian Studies — University of Ibadan, Nigeria",
    ],
    bio: [
      "Bolaji Temitope Oyemade brings an academic background in humanitarian studies and social research to her role as Chief Editor, focusing on how conflict, inequality and social exclusion shape human wellbeing.",
      "She leads the Foundation’s editorial direction with an emphasis on clear, responsible and evidence-informed communication that connects research with lived community experiences.",
    ],
    motivation:
      "Driven to bring attention to overlooked experiences and encourage thoughtful, evidence-informed responses to social and public health challenges.",
    motto:
      "Wellbeing is shaped not only by the care people receive but also by the conditions in which they live.",
    mottoLabel: "Personal Motto",
    tag: "Humanitarian Studies · Editorial Direction",
  },
  {
    id: "moses-bolawaye-adegbite",
    index: "03",
    departmentCode: "Editorial & Public Relations",
    departmentName: "Editorial Department",
    name: "Moses Bolawaye Adegbite",
    role: "Assistant Editor",
    subRole: "Publications & Public Health Content Review",
    image: "/images/Moses Bolawaye Adegbite img.jpeg",
    qualifications: [
      "Editorial Review, Publications & Public Health Content Development",
    ],
    bio: [
      "Moses supports the Chief Editor in preparing, reviewing and refining the Foundation’s educational and editorial publications.",
      "He maintains editorial consistency and ensures the communication of accurate, accessible health and wellbeing information for the public.",
    ],
    motivation: null,
    motto: null,
    mottoLabel: null,
    tag: "Editorial Consistency · Public Health Publications",
  },
  {
    id: "esther-verah-obodoakor",
    index: "04",
    departmentCode: "Editorial & Public Relations",
    departmentName: "Editorial Department",
    name: "Esther Verah Obodoakor",
    role: "Editorial Specialist",
    subRole: "Reporting, Coordination & Public Information",
    image: "/images/esther.jpeg",
    qualifications: [
      "B.Tech. Science Laboratory Technology — Federal University of Technology, Owerri",
    ],
    bio: [
      "Esther brings a practical, organised approach to the Foundation’s editorial and public relations work, with experience across reporting, administration, coordination and community data collection.",
    ],
    motivation:
      "Esther’s strengths in reporting, administration, coordination and community data collection motivate her to help communicate the Foundation’s work clearly and keep its public information well organised.",
    motivationLabel: "Inspiration",
    motto:
      "Clear communication helps meaningful work reach the people it serves.",
    mottoLabel: "Personal Motto",
    tag: "Editorial Coordination · Science & Reporting",
  },
  {
    id: "agbaje-favour",
    index: "05",
    departmentCode: "Communications & Social Media",
    departmentName: "Communications & Social Media",
    name: "Agbaje Favour",
    role: "Social Media Expert",
    subRole: "Digital Health Advocacy & Public Engagement",
    image: "/images/Favour Agbaje img.jpeg",
    qualifications: [
      "Nursing Student — Joseph Ayo Babalola University, Nigeria",
    ],
    bio: [
      "Agbaje Favour combines healthcare advocacy with digital communication to lead the online presence, public engagement and health awareness campaigns of Liberty Health & Wellbeing Foundation.",
      "Drawing on her nursing training in preventive care and patient education, she uses digital platforms to make reliable health information accessible and connect communities with the Foundation’s mission.",
    ],
    motivation:
      "Favour believes healthcare must include education, prevention and empowering individuals to make informed decisions that create healthier communities.",
    motto: null,
    mottoLabel: null,
    tag: "Nursing · Digital Health Communication",
  },
  {
    id: "ramatu-aliyu-magaji",
    index: "06",
    departmentCode: "Data, Research & Digital Health",
    departmentName: "Monitoring, Evaluation & Health Informatics",
    name: "Ramatu Aliyu Magaji",
    role: "Lead, Monitoring, Evaluation & Health Informatics",
    subRole: "Africa CDC Public Health Informatics Fellow · Programme Officer, NACA",
    image: "/images/Ramatu Aliyu Magaji.jpeg",
    qualifications: [
      "PhD in Statistics (In Progress) — University of Abuja",
      "Master of Science (MSc) in Statistics",
      "Africa CDC Public Health Informatics Fellow (Attached to Kenya Ministry of Health)",
      "Programme Officer — National Agency for the Control of AIDS (NACA), Nigeria",
    ],
    bio: [
      "Ramatu Aliyu Magaji is a public health professional and statistician with experience in monitoring and evaluation, public health research, strategic information and health information systems. She is an Africa CDC Public Health Informatics Fellow attached to Kenya’s Ministry of Health and a Programme Officer at Nigeria’s National Agency for the Control of AIDS (NACA).",
      "Her work includes HIV programme monitoring, public health surveillance, data quality assessment, digital health initiatives and strengthening health information systems. At Liberty Health & Wellbeing Foundation, she supports the use of reliable data and evaluation to guide programmes, improve delivery and inform public health decisions.",
    ],
    motivation: null,
    motto: null,
    mottoLabel: null,
    tag: "Monitoring & Evaluation · Health Informatics · Statistics",
  },
  {
    id: "ademola-oke-oyewusi",
    index: "07",
    departmentCode: "Data, Research & Digital Health",
    departmentName: "Data & Digital Health",
    name: "Ademola Oke Oyewusi",
    role: "Data & Digital Health Specialist",
    subRole: "Health Data Systems, Social Research & Digital Infrastructure",
    image: "/images/Ademola Oke Oyewusi.jpeg",
    qualifications: [
      "BSc Computer Science — Usmanu Danfodiyo University, Sokoto",
    ],
    bio: [
      "Ademola’s work in social research and digital health stems from a longstanding concern about who can access healthcare, who is left out, and how displacement, insecurity and unequal access shape population health.",
      "He focuses on careful research, health data infrastructure and clear communication of overlooked community experiences to help decision-makers develop thoughtful, evidence-based responses.",
    ],
    motivation: null,
    motto:
      "Outcomes are shaped not only by treatment at the bedside but also by the data infrastructure upstream of it—the records that follow a person, the algorithms that sort them, the dashboards that decide where attention lands.",
    mottoLabel: "Personal Motto",
    tag: "Computer Science · Data & Digital Health",
  },
  {
    id: "joseph-tanko-john",
    index: "08",
    departmentCode: "Data, Research & Digital Health",
    departmentName: "Public Health Data & ICT4D",
    name: "Joseph Tanko John",
    role: "Health Data & ICT4D Specialist",
    subRole: "Public Health Data Systems & Field Digital Tools",
    image: "/images/Tanko John.jpeg",
    qualifications: [
      "B.S.Ed. Economics — Usmanu Danfodiyo University, Sokoto",
    ],
    bio: [
      "Joseph brings practical experience in digital health data and public health programmes spanning malaria, polio, and maternal and child health.",
      "Experienced with field data platforms including RedRose, KoboCollect and ODK, he is motivated by translating community and frontline health workers’ experiences into stronger, data-driven healthcare services.",
    ],
    motivation: null,
    motto: null,
    mottoLabel: null,
    tag: "Health Data · ICT4D · Field Analytics",
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
        const el = document.getElementById("medical-clinical");
        el?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      const opsIndex = operationalDepartments.findIndex((o) => o.id === hash);
      if (opsIndex !== -1) {
        setActiveOpsIdx(opsIndex);
        const el = document.getElementById("editorial");
        el?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      if (hash === "finance") {
        setActiveOpsIdx(0);
      } else if (hash === "editorial" || hash === "editorial-department") {
        setActiveOpsIdx(1);
      } else if (hash === "communications") {
        setActiveOpsIdx(4);
      } else if (hash === "data-digital-health") {
        setActiveOpsIdx(5);
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
          PART 1: EXECUTIVE LEADERSHIP, GOVERNANCE & ETHICS
      ========================================================= */}
      <section
        id="founder-chairman"
        className="py-16 sm:py-24 bg-white border-b border-slate-200/80"
      >
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              Institutional Stewardship
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
              Executive Leadership, Governance &amp; Ethics
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed font-normal">
              Meet our statutory trustees and governance leaders guiding the Foundation’s strategic direction, peacebuilding engagement, and ethical standards.
            </p>
          </div>

          {/* Sticky Leadership Cards */}
          <div className="relative space-y-12 sm:space-y-16 pb-6">
            {executiveScrollStack.map((leader, idx) => (
              <div
                key={leader.id}
                id={
                  idx === 1
                    ? "governance-engagement"
                    : idx === 2
                    ? "ethics-governance"
                    : undefined
                }
                style={{
                  top: `${92 + idx * 24}px`,
                }}
                className="lg:sticky rounded-2xl bg-canvas border border-slate-200 transition-all duration-300 overflow-hidden"
              >
                {/* Top Header Bar */}
                <div className="bg-navy text-white px-6 sm:px-8 py-3.5 flex items-center justify-between border-b border-white/10">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary font-heading">
                    {leader.departmentCode}
                  </span>
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
                            <span>
                              {leader.motivationLabel || "Professional Motivation"}
                            </span>
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
                            <span>
                              {leader.responsibilitiesLabel ||
                                "Key Responsibilities Within the Foundation"}
                            </span>
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
          PART 2: MEDICAL & CLINICAL TEAM
      ========================================================= */}
      <section
        id="medical-clinical"
        className="py-16 sm:py-24 bg-canvas border-b border-slate-200/80 overflow-hidden"
      >
        {/* Anchor targets for direct profile links */}
        {medicalTeam.map((m) => (
          <div key={m.id} id={m.id} />
        ))}
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Navigation Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                Clinical &amp; Public Health Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
                Medical &amp; Clinical Team
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed font-normal">
                Select a specialist below to explore our medical doctors, emergency physicians, clinical nurse specialists, and public health epidemiologists.
              </p>
            </div>

            {/* Prev/Next Controls */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleMedPrev}
                aria-label="Previous medical team profile"
                className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleMedNext}
                aria-label="Next medical team profile"
                className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Specialist Selector Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {medicalTeam.map((member, idx) => {
              const isSelected = idx === activeMedicalIdx;
              return (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setActiveMedicalIdx(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                    isSelected
                      ? "bg-navy text-white border-navy shadow-xs"
                      : "bg-white text-navy border-slate-200/80 hover:border-primary hover:bg-primary-light/45"
                  }`}
                >
                  <div className="relative w-11 h-11 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-white/20 flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="44px"
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
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        isSelected ? "text-primary" : "text-slate-400"
                      }`}
                    >
                      {member.departmentName}
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

          {/* Active Medical Profile Container */}
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
            <div
              key={activeMedical.id}
              className="relative z-10 rounded-2xl bg-white border border-slate-200 overflow-hidden"
            >
              {/* Top Profile Header Bar */}
              <div className="bg-navy text-white px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary font-heading">
                  {activeMedical.tag}
                </span>
                <button
                  type="button"
                  onClick={handleMedNext}
                  className="text-xs font-semibold text-slate-300 hover:text-primary inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next Profile: {nextMedical.name}</span>
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
                            <span>
                              {activeMedical.motivationLabel || "Motivation"}
                            </span>
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

                    {/* Profile Navigation Footer */}
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
        </div>
      </section>

      {/* =========================================================
          PART 3: FINANCE, EDITORIAL, COMMUNICATIONS & DIGITAL HEALTH
      ========================================================= */}
      <section
        id="editorial"
        className="py-16 sm:py-24 bg-white border-b border-slate-200/80"
      >
        <div id="communications" />
        <div id="finance" />
        <div id="data-digital-health" />
        {operationalDepartments.map((o) => (
          <div key={o.id} id={o.id} />
        ))}
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
                Operational Departments
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading tracking-tight leading-[1.12]">
                Finance, Editorial, Communications &amp; Digital Health
              </h2>
              <p className="text-slate-600 mt-3 text-base sm:text-lg leading-relaxed font-normal">
                Explore the operational specialists driving financial accountability, research communication, digital health advocacy, and public health data infrastructure.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleOpsPrev}
                aria-label="Previous department profile"
                className="w-11 h-11 rounded-full bg-canvas border border-slate-200 flex items-center justify-center text-navy cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleOpsNext}
                aria-label="Next department profile"
                className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Departmental Selector Tabs */}
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
                      ? "bg-navy text-white border-navy shadow-xs"
                      : "bg-canvas text-navy border-slate-200/80 hover:border-primary hover:bg-primary-light/45"
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
                      className={`text-[10px] font-bold uppercase tracking-wider truncate ${
                        isSelected ? "text-primary" : "text-slate-400"
                      }`}
                    >
                      {member.departmentName}
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
            data-no-sr
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
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary font-heading">
                  {activeOps.departmentCode}
                </span>
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
                          {activeOps.role}
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
                          <span>Academic Qualifications</span>
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

                      {activeOps.responsibilities && (
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-3 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            <span>
                              {activeOps.responsibilitiesLabel ||
                                "Responsibilities"}
                            </span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {activeOps.responsibilities.map((item, rIdx) => (
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

                      {activeOps.motivation && (
                        <div className="p-5 rounded-xl bg-canvas border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-navy font-heading mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            <span>
                              {activeOps.motivationLabel || "Motivation"}
                            </span>
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
                          <span>Next Profile</span>
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
