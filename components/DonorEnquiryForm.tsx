"use client";

import React, { useState } from "react";
import { CheckCircle2, HeartHandshake, Send } from "lucide-react";

export default function DonorEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-heading">
          Thank You for Supporting Our Mission
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-lg mx-auto leading-relaxed">
          Your donation pledge / support enquiry has been recorded. Our Finance Department will follow up with verified remittance details via{" "}
          <a
            href="mailto:emmanuel.awosan@libertyhealthwellbeing.org"
            className="font-bold text-navy underline"
          >
            emmanuel.awosan@libertyhealthwellbeing.org
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 px-5 py-2.5 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-wider"
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
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary font-heading mb-1">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Donor Pledge &amp; Support Enquiry</span>
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-heading">
          Register Your Contribution or Request Official Remittance Details
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Online cross-border and domestic payment gateway integration is being finalised with our technology partner. Complete this form or email{" "}
          <a
            href="mailto:emmanuel.awosan@libertyhealthwellbeing.org"
            className="font-semibold text-navy underline"
          >
            emmanuel.awosan@libertyhealthwellbeing.org
          </a>{" "}
          to coordinate your contribution.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            Full Name / Organisation *
          </label>
          <input
            type="text"
            required
            placeholder="Your full name or organisation"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+234 ... / +44 ..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            Support Category *
          </label>
          <select
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          >
            <option value="" disabled>
              Select way to support...
            </option>
            <option value="Individual Donation">Individual Donation</option>
            <option value="Corporate / Programme Sponsorship">
              Corporate / Programme Sponsorship
            </option>
            <option value="Community Medical Outreach Support">
              Community Medical Outreach Support
            </option>
            <option value="Maternal & Child Health Support">
              Maternal &amp; Child Health Support
            </option>
            <option value="Mental Health & Addiction Awareness">
              Mental Health &amp; Addiction Awareness
            </option>
            <option value="Research & Advocacy Grant">
              Research &amp; Advocacy Grant
            </option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
          Donor Acknowledgement Preference *
        </label>
        <select
          required
          defaultValue="Public Acknowledgement"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
        >
          <option value="Public Acknowledgement">
            I am happy to be acknowledged publicly as a supporter (where applicable)
          </option>
          <option value="Anonymous Contribution">
            I prefer my contribution to remain anonymous
          </option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
          Message or Specific Area of Interest
        </label>
        <textarea
          rows={3}
          placeholder="Share any details about how you would like to support the ₦20,000,000 Fundraising Initiative..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-bold text-sm shadow-xs cursor-pointer"
      >
        <Send className="w-4 h-4" />
        <span>Submit Donation / Support Enquiry</span>
      </button>
    </form>
  );
}

