"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, ShieldAlert } from "lucide-react";

export default function VolunteerRegistrationForm() {
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
          Volunteer Application Received
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-lg mx-auto leading-relaxed">
          Thank you for registering your interest in the{" "}
          <strong>Founding Volunteers Programme — 2026/2027</strong>. Our team will review your profile and contact you via{" "}
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
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white border border-slate-200/80 space-y-6"
    >
      <div className="border-b border-slate-100 pb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-1">
          Founding Volunteers Programme — 2026/2027
        </span>
        <h3 className="text-2xl font-extrabold text-navy font-heading">
          Volunteer Registration Form
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Complete all required fields below to apply for our Founding Volunteers cohort or express interest in an available position.
        </p>
      </div>

      {/* Fields 1 to 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            1. Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            2. Email Address *
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
            3. Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+234 ... / +44 ..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            4. Country / Location *
          </label>
          <input
            type="text"
            required
            placeholder="e.g., Abuja, Nigeria / London, UK"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Fields 5 & 6 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            5. Educational or Professional Background *
          </label>
          <input
            type="text"
            required
            placeholder="e.g., Medicine, Nursing, Public Health, Media, Research..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            6. Skills &amp; Areas of Interest *
          </label>
          <input
            type="text"
            required
            placeholder="e.g., Health literacy, writing, outreach coordination..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Fields 7 & 8 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            7. Preferred Area of Volunteering / Role *
          </label>
          <select
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          >
            <option value="" disabled>
              Select preferred volunteering area or role...
            </option>
            <optgroup label="Volunteering Areas">
              <option value="Community Health Outreach">
                Community Health Outreach
              </option>
              <option value="Health Education & Public Awareness">
                Health Education &amp; Public Awareness
              </option>
              <option value="Mental Health & Addiction Awareness">
                Mental Health &amp; Addiction Awareness
              </option>
              <option value="Maternal & Child Health Support">
                Maternal &amp; Child Health Support
              </option>
              <option value="Research, Policy & Editorial Support">
                Research, Policy &amp; Editorial Support
              </option>
              <option value="Media, Communications & Digital Engagement">
                Media, Communications &amp; Digital Engagement
              </option>
              <option value="Events, Mobilisation & Project Support">
                Events, Mobilisation &amp; Project Support
              </option>
            </optgroup>
            <optgroup label="Available Positions (Expressions of Interest)">
              <option value="Position: Public Relations Officer">
                Position: Public Relations Officer
              </option>
              <option value="Position: Research & Programme Coordinator">
                Position: Research &amp; Programme Coordinator
              </option>
              <option value="Position: Volunteer Coordinator">
                Position: Volunteer Coordinator
              </option>
              <option value="Position: Protocol Officer">
                Position: Protocol Officer
              </option>
              <option value="Position: Site Coordinator">
                Position: Site Coordinator
              </option>
            </optgroup>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
            8. Availability *
          </label>
          <select
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
          >
            <option value="" disabled>
              Select your availability...
            </option>
            <option value="Weekends / Outreach Days">
              Weekends / Outreach Days
            </option>
            <option value="Part-Time (5–10 hours/week)">
              Part-Time (5–10 hours/week)
            </option>
            <option value="Flexible / Remote Project-Based">
              Flexible / Remote Project-Based
            </option>
            <option value="Full Campaign / Field Mobilisation">
              Full Campaign / Field Mobilisation
            </option>
          </select>
        </div>
      </div>

      {/* Field 9: Short Statement of Motivation */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
          9. Short Statement of Motivation *
        </label>
        <textarea
          rows={4}
          required
          placeholder="Tell us why you want to join Liberty Health & Wellbeing Foundation and how you hope to contribute..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-canvas text-sm text-navy focus:outline-none focus:border-primary"
        />
      </div>

      {/* Safeguarding Notice */}
      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
        <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <span>
          <strong>Clinical &amp; Safeguarding Notice:</strong> Clinical and specialist roles are subject to appropriate qualification verification and safeguarding requirements.
        </span>
      </div>

      {/* Field 10: Privacy & Consent Checkbox */}
      <div className="flex items-start gap-3">
        <input
          id="privacy-consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
        />
        <label
          htmlFor="privacy-consent"
          className="text-xs sm:text-sm text-slate-600 leading-relaxed"
        >
          <strong>10. Privacy &amp; Consent *:</strong> I consent to Liberty Health &amp; Wellbeing Foundation storing and processing the information provided in this form for the purpose of reviewing my volunteer or role expression of interest in accordance with ethical data protection standards.
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-bold text-sm shadow-xs cursor-pointer"
      >
        <Send className="w-4 h-4" />
        <span>Submit Volunteer Application</span>
      </button>
    </form>
  );
}

