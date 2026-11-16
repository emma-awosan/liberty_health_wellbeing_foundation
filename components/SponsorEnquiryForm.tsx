"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Building2, Mail, Phone, User, Briefcase } from "lucide-react";

export default function SponsorEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    organisationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    supportType: "Funding / Financial Sponsorship",
    focusInterest: "Preventive Healthcare & Screening Awareness",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-emerald-200 text-center shadow-sm">
        <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-extrabold text-navy font-heading">
          Sponsorship Enquiry Received
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-lg mx-auto leading-relaxed">
          Thank you, <strong>{formData.contactPerson}</strong>. Your interest in the Founding Sponsors Programme on behalf of{" "}
          <strong>{formData.organisationName || "your organisation"}</strong> has been recorded. You may also forward official documentation directly to{" "}
          <a
            href="mailto:emmanuel.awosan@libertyhealthwellbeing.org"
            className="text-primary font-bold underline"
          >
            emmanuel.awosan@libertyhealthwellbeing.org
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-2.5 rounded-full bg-navy text-white text-xs font-bold"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/80 space-y-5"
    >
      <div className="border-b border-slate-100 pb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block">
          Founding Sponsors Programme
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-heading mt-1">
          Become a Sponsor — Enquiry Form
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Support Foundation activities through funding, medical supplies, educational materials, professional services, or community outreach resources.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
            Organisation / Individual Name *
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={formData.organisationName}
              onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}
              placeholder="e.g. Acme Corporate Ltd"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-canvas border border-slate-200 text-sm text-navy focus:bg-white focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
            Contact Person Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              placeholder="Full Name & Title"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-canvas border border-slate-200 text-sm text-navy focus:bg-white focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
            Official Email Address *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@company.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-canvas border border-slate-200 text-sm text-navy focus:bg-white focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
            Telephone Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+234 ..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-canvas border border-slate-200 text-sm text-navy focus:bg-white focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
            Nature of Contribution *
          </label>
          <div className="relative">
            <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={formData.supportType}
              onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-canvas border border-slate-200 text-sm text-navy focus:bg-white focus:border-primary outline-none transition-all"
            >
              <option>Funding / Financial Sponsorship</option>
              <option>Medical Supplies &amp; Outreach Kits</option>
              <option>Educational Materials &amp; Community Resources</option>
              <option>Professional / Technical Services</option>
              <option>Event &amp; Programme Logistics Support</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
            Preferred Programme Area
          </label>
          <select
            value={formData.focusInterest}
            onChange={(e) => setFormData({ ...formData, focusInterest: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-canvas border border-slate-200 text-sm text-navy focus:bg-white focus:border-primary outline-none transition-all"
          >
            <option>Preventive Healthcare &amp; Screening Awareness</option>
            <option>Mental Health &amp; Wellbeing Initiatives</option>
            <option>Addiction &amp; Gambling Awareness</option>
            <option>Women’s, Maternal &amp; Child Health</option>
            <option>Community Health Research &amp; Policy</option>
            <option>General Founding Sponsorship (₦20M Campaign)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">
          Sponsorship Proposal / Message *
        </label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Share how your organisation would like to collaborate or sponsor our initiatives..."
          className="w-full p-4 rounded-xl bg-canvas border border-slate-200 text-sm text-navy focus:bg-white focus:border-primary outline-none transition-all"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-[11px] text-slate-500 max-w-md">
          All sponsorships are governed by formal agreements approved by the Board of Trustees.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-bold text-sm shrink-0 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Submit Sponsorship Enquiry</span>
        </button>
      </div>
    </form>
  );
}

