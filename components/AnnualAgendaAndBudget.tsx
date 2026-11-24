"use client";

import React, { useState } from "react";
import { Calendar, PieChart, CheckCircle2, Activity, BookOpen, FileCheck } from "lucide-react";

interface BudgetCategory {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  amountM: number;
  amountFormatted: string;
  percentage: number;
  color: string;
  description: string;
}

const budgetAllocations: BudgetCategory[] = [
  {
    id: "outreach-screening",
    index: "01",
    title: "Outreach & Community Screening",
    shortTitle: "Outreach / Screening",
    amountM: 14,
    amountFormatted: "₦14,000,000",
    percentage: 28,
    color: "#C18E3C", // Brand Gold
    description:
      "Field deployment, mobile screening logistics, community mobilisation, and scheduled medical outreaches across target states.",
  },
  {
    id: "medicines-equipment",
    index: "02",
    title: "Medicines & Clinical Equipment",
    shortTitle: "Medicines / Equipment",
    amountM: 10,
    amountFormatted: "₦10,000,000",
    percentage: 20,
    color: "#3662A4", // Brand Blue
    description:
      "Essential medications, point-of-care diagnostic kits, blood pressure and glucose monitors, and frontline clinical supplies.",
  },
  {
    id: "research-data-grants",
    index: "03",
    title: "Research, Data & Small Grants",
    shortTitle: "Research / Data / Grants",
    amountM: 8,
    amountFormatted: "₦8,000,000",
    percentage: 16,
    color: "#7BBBE6", // Sky Blue
    description:
      "Structured health data collection, statistical analysis, evidence briefs, and targeted community health research grants.",
  },
  {
    id: "maternal-womens-health",
    index: "04",
    title: "Maternal & Women’s Health",
    shortTitle: "Maternal / Women’s Health",
    amountM: 6,
    amountFormatted: "₦6,000,000",
    percentage: 12,
    color: "#E0AB53", // Warm Gold Mid
    description:
      "Cancer awareness screenings, antenatal and postnatal education, and dedicated women’s and maternal health interventions.",
  },
  {
    id: "education-advocacy",
    index: "05",
    title: "Health Education & Advocacy",
    shortTitle: "Education / Advocacy",
    amountM: 5,
    amountFormatted: "₦5,000,000",
    percentage: 10,
    color: "#5282C8", // Mid Blue
    description:
      "Multilingual public health education materials, preventive awareness campaigns, and evidence-based policy engagement.",
  },
  {
    id: "referrals-followup",
    index: "06",
    title: "Referrals & Patient Follow-Up",
    shortTitle: "Referrals / Follow-Up",
    amountM: 4,
    amountFormatted: "₦4,000,000",
    percentage: 8,
    color: "#94A3B8", // Slate Accent
    description:
      "Facilitating specialist hospital referrals, diagnostic continuity, and structured post-outreach patient follow-up.",
  },
  {
    id: "operations-evaluation",
    index: "07",
    title: "Operations & Programme Evaluation",
    shortTitle: "Operations / Evaluation",
    amountM: 3,
    amountFormatted: "₦3,000,000",
    percentage: 6,
    color: "#64748B", // Deep Slate
    description:
      "Monitoring and evaluation (M&E), data quality audits, financial reporting, and annual impact verification.",
  },
];

interface AgendaMonth {
  index: string;
  month: string;
  track: "OUTREACH" | "RESEARCH + EDUCATION" | "ANNUAL CLOSE-OUT";
  status: "Already Planned" | "Proposed" | "Scheduled Cycle";
  highlight?: string;
  deliverables: string;
}

const annualAgenda: AgendaMonth[] = [
  {
    index: "01",
    month: "Dec 2026",
    track: "OUTREACH",
    status: "Already Planned",
    highlight: "With 60 Seconds With Doc · Ogun State",
    deliverables:
      "Deliver scheduled outreach; screening, health education, referral records and consented programme data.",
  },
  {
    index: "02",
    month: "Jan 2027",
    track: "RESEARCH + EDUCATION",
    status: "Scheduled Cycle",
    deliverables:
      "Clean and analyse December data; publish a verified activity summary and health education materials.",
  },
  {
    index: "03",
    month: "Feb 2027",
    track: "OUTREACH",
    status: "Already Planned",
    highlight: "Cancer Awareness Outreach",
    deliverables:
      "Deliver scheduled second outreach; screening, maternal/women’s health education where feasible, referrals and data.",
  },
  {
    index: "04",
    month: "Mar 2027",
    track: "RESEARCH + EDUCATION",
    status: "Scheduled Cycle",
    deliverables:
      "Analyse February findings; release an evidence brief and targeted prevention education.",
  },
  {
    index: "05",
    month: "Apr 2027",
    track: "OUTREACH",
    status: "Proposed",
    highlight: "Hypertension & Diabetes Awareness",
    deliverables:
      "Community screening and hypertension/diabetes awareness; document referrals and programme metrics.",
  },
  {
    index: "06",
    month: "May 2027",
    track: "RESEARCH + EDUCATION",
    status: "Scheduled Cycle",
    deliverables:
      "Publish April programme findings and deliver community prevention education; review referral completion.",
  },
  {
    index: "07",
    month: "Jun 2027",
    track: "OUTREACH",
    status: "Proposed",
    highlight: "Maternal & Women’s Health Awareness",
    deliverables:
      "Maternal/women’s health awareness and appropriate screening or diagnostic referrals through clinical partners.",
  },
  {
    index: "08",
    month: "Jul 2027",
    track: "RESEARCH + EDUCATION",
    status: "Scheduled Cycle",
    deliverables:
      "Analyse June results; publish maternal-health learning brief and community education content.",
  },
  {
    index: "09",
    month: "Aug 2027",
    track: "OUTREACH",
    status: "Proposed",
    highlight: "Preventive Screening & Medication Support",
    deliverables:
      "Expand preventive health screening, medication access support and wellbeing education where funded.",
  },
  {
    index: "10",
    month: "Sep 2027",
    track: "RESEARCH + EDUCATION",
    status: "Scheduled Cycle",
    deliverables:
      "Publish August activity findings; assess health needs, data quality and programme effectiveness.",
  },
  {
    index: "11",
    month: "Oct 2027",
    track: "OUTREACH",
    status: "Proposed",
    highlight: "Targeted Community Outreach & Referrals",
    deliverables:
      "Conduct further community outreach, targeted screening, referrals and health education.",
  },
  {
    index: "12",
    month: "Nov 2027",
    track: "RESEARCH + EDUCATION",
    status: "Scheduled Cycle",
    deliverables:
      "Publish October findings; consolidate annual data, referral outcomes and education resources.",
  },
  {
    index: "13",
    month: "Dec 2027",
    track: "ANNUAL CLOSE-OUT",
    status: "Scheduled Cycle",
    highlight: "Verified Impact & Financial Report",
    deliverables:
      "Publish verified impact and financial report; evaluate programme delivery and approve 2028 priorities.",
  },
];

interface AnnualAgendaAndBudgetProps {
  theme?: "dark" | "light";
}

export default function AnnualAgendaAndBudget({
  theme = "dark",
}: AnnualAgendaAndBudgetProps) {
  const [selectedSliceIdx, setSelectedSliceIdx] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<
    "ALL" | "OUTREACH" | "RESEARCH + EDUCATION" | "ANNUAL CLOSE-OUT"
  >("ALL");

  const activeSlice = budgetAllocations[selectedSliceIdx];

  // SVG Donut chart geometry
  const radius = 84;
  const circumference = 2 * Math.PI * radius; // ~527.79
  let cumulativePercent = 0;

  const filteredAgenda =
    activeFilter === "ALL"
      ? annualAgenda
      : annualAgenda.filter((item) => item.track === activeFilter);

  const isDark = theme === "dark";

  return (
    <div className="w-full" data-no-sr>
      {/* =========================================================
          PART A: INTERACTIVE ₦50,000,000 BUDGET ALLOCATION PIE/DONUT CHART & LEDGER
      ========================================================= */}
      <div className="mb-16 sm:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              Dec 2026 – Dec 2027 Annual Programme Framework
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight leading-[1.12] ${
                isDark ? "text-white" : "text-navy"
              }`}
            >
              ₦50,000,000 Annual Budget{" "}
              <span className="text-primary">&amp; 1-Year Agenda</span>
            </h2>
            <p
              className={`mt-3.5 text-sm sm:text-base lg:text-lg leading-relaxed font-normal ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Transparent resource allocation across seven priority funding areas supporting alternating monthly community medical outreaches and research-education cycles from December 2026 through December 2027.
            </p>
          </div>

          <div
            className={`px-5 py-3.5 rounded-xl border shrink-0 ${
              isDark
                ? "bg-navy-dark/80 border-white/15 text-white"
                : "bg-canvas border-slate-200 text-navy"
            }`}
          >
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
              TOTAL 12-MONTH REQUIREMENT
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight mt-0.5">
              ₦50,000,000
            </div>
          </div>
        </div>

        {/* Interactive Pie/Donut Chart + 7-Row Allocation Ledger */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 border ${
            isDark
              ? "border-white/15 bg-navy-dark/45"
              : "border-slate-200 bg-white"
          }`}
        >
          {/* Left 5 Cols: Interactive SVG Donut Chart */}
          <div
            className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-between border-b lg:border-b-0 lg:border-r ${
              isDark ? "border-white/15" : "border-slate-200"
            }`}
          >
            <div className="w-full flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading flex items-center gap-2">
                <PieChart className="w-4 h-4" />
                <span>Interactive Fund Allocation</span>
              </span>
              <span
                className={`text-[11px] font-mono ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Click or hover slice
              </span>
            </div>

            {/* SVG Donut Chart */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center my-2">
              <svg
                viewBox="0 0 220 220"
                className="w-full h-full -rotate-90 transform overflow-visible"
                role="img"
                aria-label="₦50,000,000 Fund Allocation Donut Chart"
              >
                {budgetAllocations.map((slice, idx) => {
                  const strokeDasharray = `${
                    (slice.percentage / 100) * circumference
                  } ${circumference}`;
                  const strokeDashoffset = -(
                    (cumulativePercent / 100) *
                    circumference
                  );
                  cumulativePercent += slice.percentage;
                  const isSelected = idx === selectedSliceIdx;

                  return (
                    <circle
                      key={slice.id}
                      cx="110"
                      cy="110"
                      r={radius}
                      fill="transparent"
                      stroke={slice.color}
                      strokeWidth={isSelected ? 30 : 22}
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      onMouseEnter={() => setSelectedSliceIdx(idx)}
                      onClick={() => setSelectedSliceIdx(idx)}
                      className="cursor-pointer transition-all duration-300"
                      style={{
                        opacity: isSelected ? 1 : 0.78,
                      }}
                    />
                  );
                })}
              </svg>

              {/* Center Readout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 pointer-events-none">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                  {activeSlice.percentage}% OF BUDGET
                </span>
                <div
                  className={`text-2xl sm:text-3xl font-extrabold font-heading tracking-tight mt-0.5 ${
                    isDark ? "text-white" : "text-navy"
                  }`}
                >
                  ₦{activeSlice.amountM}M
                </div>
                <span
                  className={`text-xs font-bold leading-snug mt-1 max-w-[140px] ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {activeSlice.shortTitle}
                </span>
              </div>
            </div>

            {/* Active Slice Detail Card */}
            <div
              className={`w-full mt-4 p-4 rounded-xl border text-left ${
                isDark
                  ? "bg-navy-deep/80 border-white/15"
                  : "bg-canvas border-slate-200"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-xs font-bold text-primary font-heading">
                  {activeSlice.index} · {activeSlice.title}
                </span>
                <span
                  className={`text-xs font-mono font-bold ${
                    isDark ? "text-white" : "text-navy"
                  }`}
                >
                  {activeSlice.amountFormatted}
                </span>
              </div>
              <p
                className={`text-xs leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {activeSlice.description}
              </p>
            </div>
          </div>

          {/* Right 7 Cols: 7-Category Allocation Breakdown Ledger */}
          <div className="lg:col-span-7 flex flex-col justify-between divide-y divide-slate-200/20">
            {budgetAllocations.map((item, idx) => {
              const isSelected = idx === selectedSliceIdx;
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setSelectedSliceIdx(idx)}
                  onClick={() => setSelectedSliceIdx(idx)}
                  className={`w-full text-left p-4 sm:p-5 transition-colors cursor-pointer flex flex-col gap-2 ${
                    isDark
                      ? isSelected
                        ? "bg-white/10"
                        : "hover:bg-white/5"
                      : isSelected
                      ? "bg-primary-light/50"
                      : "hover:bg-canvas"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="w-3 h-3 rounded-xs shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs font-mono font-bold text-primary shrink-0">
                        {item.index}
                      </span>
                      <span
                        className={`text-sm sm:text-base font-extrabold font-heading truncate ${
                          isDark ? "text-white" : "text-navy"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2.5 shrink-0">
                      <span
                        className={`text-sm sm:text-base font-extrabold font-mono ${
                          isDark ? "text-white" : "text-navy"
                        }`}
                      >
                        {item.amountFormatted}
                      </span>
                      <span className="text-xs font-mono font-bold text-primary w-9 text-right">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Proportional Progress Bar */}
                  <div
                    className={`w-full h-1.5 rounded-full overflow-hidden ${
                      isDark ? "bg-white/10" : "bg-slate-100"
                    }`}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${(item.percentage / 28) * 100}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================
          PART B: 13-MONTH SCROLL & FILTER PROCESS AGENDA (DEC 2026 – DEC 2027)
      ========================================================= */}
      <div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              <span>1-Year Implementation Roadmap · Dec 2026 – Dec 2027</span>
            </span>
            <h3
              className={`text-2xl sm:text-3xl font-extrabold font-heading tracking-tight ${
                isDark ? "text-white" : "text-navy"
              }`}
            >
              13-Month Outreach, Research &amp; Education Cycle
            </h3>
            <p
              className={`text-xs sm:text-sm mt-1.5 max-w-2xl ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Each community outreach deployment is followed by a dedicated month of data cleaning, statistical analysis, evidence brief publication, and targeted health education.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {(
              [
                { key: "ALL", label: "All 13 Months" },
                { key: "OUTREACH", label: "Outreach (6)" },
                { key: "RESEARCH + EDUCATION", label: "Research + Education (6)" },
                { key: "ANNUAL CLOSE-OUT", label: "Annual Close-Out (1)" },
              ] as const
            ).map((tab) => {
              const active = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-3.5 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    active
                      ? "bg-primary text-white"
                      : isDark
                      ? "bg-white/10 text-slate-300 hover:bg-white/15"
                      : "bg-canvas border border-slate-200 text-navy hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Architectural 13-Month Process Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l ${
            isDark
              ? "border-white/15 bg-navy-dark/35"
              : "border-slate-200 bg-white"
          }`}
        >
          {filteredAgenda.map((item) => {
            const isOutreach = item.track === "OUTREACH";
            const isCloseOut = item.track === "ANNUAL CLOSE-OUT";

            return (
              <div
                key={item.month}
                className={`p-6 sm:p-7 border-r border-b flex flex-col justify-between relative transition-all duration-300 group ${
                  isDark
                    ? isCloseOut
                      ? "border-white/15 bg-primary/15 hover:bg-[#1D3557]"
                      : "border-white/15 bg-navy-dark/35 hover:bg-[#1D3557]"
                    : isCloseOut
                    ? "border-slate-200 bg-primary-light/40 hover:bg-primary-light"
                    : "border-slate-200 bg-white hover:bg-primary-light/50"
                }`}
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 ${
                    isOutreach
                      ? "bg-primary"
                      : isCloseOut
                      ? "bg-sky"
                      : "bg-blue"
                  }`}
                />

                <div>
                  {/* Month & Status Row */}
                  <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-current/10">
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs font-mono font-bold text-primary">
                        {item.index}
                      </span>
                      <span
                        className={`text-lg sm:text-xl font-extrabold font-heading tracking-tight ${
                          isDark ? "text-white" : "text-navy"
                        }`}
                      >
                        {item.month}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-xs ${
                        item.status === "Already Planned"
                          ? "bg-primary text-white"
                          : isDark
                          ? "bg-white/10 text-slate-300"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Track Title */}
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary font-heading mb-2">
                    {isOutreach ? (
                      <Activity className="w-3.5 h-3.5 shrink-0" />
                    ) : isCloseOut ? (
                      <FileCheck className="w-3.5 h-3.5 shrink-0" />
                    ) : (
                      <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    )}
                    <span>{item.track}</span>
                  </div>

                  {item.highlight && (
                    <div
                      className={`text-sm font-extrabold font-heading mb-2 ${
                        isDark ? "text-white" : "text-navy"
                      }`}
                    >
                      {item.highlight}
                    </div>
                  )}

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {item.deliverables}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-current/10 flex items-center justify-between text-[11px]">
                  <span
                    className={
                      isDark ? "text-slate-400" : "text-slate-500"
                    }
                  >
                    {isOutreach
                      ? "Field Screening & Data Capture"
                      : isCloseOut
                      ? "Audit & 2028 Strategy"
                      : "Analysis & Public Brief"}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
