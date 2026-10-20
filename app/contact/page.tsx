"use client";

import React, { useState } from "react";
import CommunityCTA from "@/components/CommunityCTA";
import HeroWaveDivider from "@/components/HeroWaveDivider";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Globe2
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjects = [
    "General Enquiry",
    "Partnership",
    "Volunteering",
    "Donation/Support",
    "Media",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate real smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "General Enquiry",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col w-full bg-canvas">
      {/* =========================================
          4.A: PAGE HEADER
      ========================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#051320] via-[#071929] to-[#0a233a] text-white pt-36 sm:pt-44 lg:pt-48 pb-0">
        {/* Subtle Brand Ambient Glows Matching About Page Hero */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-sky/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pb-14 sm:pb-18 lg:pb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight">
            Get in Touch
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-5 max-w-2xl mx-auto leading-relaxed font-light">
            Have a question, want to collaborate or interested in supporting our work? We would love to hear from you.
          </p>
        </div>

        {/* Dynamic Curved Wave Section Divider */}
        <HeroWaveDivider />
      </section>

      {/* =========================================
          MAIN CONTACT CONTENT: INFO & FORM
      ========================================= */}
      <section className="pt-10 sm:pt-14 pb-20 lg:pb-28 bg-white">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* 4.B: CONTACT INFORMATION */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2 sm:mb-3">
                  Contact Directory
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading tracking-tight mb-4">
                  Official Channels
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  Our secretariat and program teams are available to assist partners, healthcare institutions, field volunteers, and donors.
                </p>

                <div className="space-y-4 sm:space-y-5">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary-hover group-hover:scale-105 transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading">Official Email</h3>
                      <a href="mailto:contact@libertyhealthwellbeing.org" className="text-sm font-semibold text-navy hover:text-primary transition-colors block mt-0.5">
                        contact@libertyhealthwellbeing.org
                      </a>
                      <a href="mailto:partnerships@libertyhealthwellbeing.org" className="text-xs text-slate-500 hover:text-primary transition-colors block mt-0.5">
                        partnerships@libertyhealthwellbeing.org
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary-hover group-hover:scale-105 transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading">Phone Support</h3>
                      <p className="text-sm font-semibold text-navy mt-0.5">
                        +234 (0) 800-LIBERTY
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        +254 20 790 4100 (East Africa Desk)
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary-hover group-hover:scale-105 transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading">Office Addresses</h3>
                      <p className="text-sm font-semibold text-navy mt-0.5">
                        Liberty Health Secretariat, Plot 14 Victoria Island, Lagos, Nigeria
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Regional Coordination Office: Argwings Kodhek Rd, Kilimani, Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 p-4.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary-hover group-hover:scale-105 transition-all duration-300">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading">Working Hours</h3>
                      <p className="text-sm font-semibold text-navy mt-0.5">
                        Monday – Friday: 8:30 AM – 5:30 PM (WAT / EAT)
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Emergency Community Response Line: 24/7 on call
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.E: SOCIAL MEDIA */}
              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading mb-3">
                  Connect on Social Media
                </h3>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center focus:outline-none"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center focus:outline-none"
                    aria-label="Twitter"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center focus:outline-none"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center focus:outline-none"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* 4.C: CONTACT FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200/90 shadow-xs relative">
                
                {submitted ? (
                  <div className="py-12 px-4 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-light text-blue flex items-center justify-center mb-5 animate-bounce">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy font-heading">
                      Message Received!
                    </h3>
                    <p className="text-slate-600 text-sm mt-3 max-w-md leading-relaxed">
                      Thank you for contacting Liberty Health & Wellbeing Foundation. A member of our coordination team will review your inquiry under <strong>{formData.subject}</strong> and reach out shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-8 px-6 py-2.5 rounded-full bg-navy text-white text-xs font-semibold hover:bg-navy-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-1">
                        Direct Transmission
                      </span>
                      <h2 className="text-2xl font-bold text-navy font-heading mt-1">
                        Send Us a Message
                      </h2>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill out the details below and our regional coordination office will respond within 24-48 business hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Dr. Ngozi Okafor"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Email & Phone Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@organization.org"
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+234 ... / +254 ..."
                            className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Subject Selection */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Subject Category <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                        >
                          {subjects.map((subj) => (
                            <option key={subj} value={subj}>
                              {subj}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your organization, inquiry, proposal, or interest in volunteering..."
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all resize-none"
                        ></textarea>
                      </div>

                      {/* Submit */}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Submitting Message...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Message</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue" />
                        <span>All inquiries are kept confidential under foundation ethics.</span>
                      </div>
                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4.D: LOCATION & REGIONAL PRESENCE
      ========================================= */}
      <section className="py-20 lg:py-24 bg-canvas border-t border-slate-200/80">
        <div className="max-w-[1440px] 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-heading block mb-2">
              Geographic Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading tracking-tight">
              Our Locations &amp; Presence
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Coordinating operations from major regional hubs to frontline rural clinic posts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hub 1: West Africa */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between group hover:shadow-md transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-full bg-primary-light text-primary border border-badge-gold-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-primary px-3 py-1.5 rounded-full bg-primary-light uppercase tracking-wider">
                    Main Secretariat
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy font-heading">
                  West Africa Hub (Lagos)
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Oversees regional healthcare outreach, community medical kits, clinical logistics, and primary healthcare partner grants.
                </p>
                <div className="mt-6 pt-5 border-t border-slate-200/80 text-xs text-slate-600 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>Victoria Island, Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a href="mailto:lagos@libertyhealthwellbeing.org" className="hover:text-primary transition-colors">
                      lagos@libertyhealthwellbeing.org
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href="tel:+234800LIBERTY" className="hover:text-primary transition-colors">
                      +234 (0) 800-LIBERTY
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hub 2: East Africa */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between group hover:shadow-md transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-full bg-blue-light text-blue border border-badge-blue-border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Globe2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-blue px-3 py-1.5 rounded-full bg-blue-light uppercase tracking-wider">
                    Regional Operations
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy font-heading">
                  East Africa Hub (Nairobi)
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Focuses on sustainable clean water programs, community health worker vocational academies, and maternal wellness drives.
                </p>
                <div className="mt-6 pt-5 border-t border-slate-200/80 text-xs text-slate-600 space-y-2.5">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-blue shrink-0" />
                    <span>Argwings Kodhek Rd, Kilimani, Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-blue shrink-0" />
                    <a href="mailto:nairobi@libertyhealthwellbeing.org" className="hover:text-blue transition-colors">
                      nairobi@libertyhealthwellbeing.org
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-blue shrink-0" />
                    <a href="tel:+254207904100" className="hover:text-blue transition-colors">
                      +254 20 790 4100
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4.E: PARTNERSHIP / COLLABORATION CTA
      ========================================= */}
      <CommunityCTA 
        title="Ready to partner with us?"
        subtitle="We welcome opportunities to collaborate with individuals, institutions, and healthcare partners who share our commitment to expanding health access across Africa."
        primaryButtonText="Get in Touch"
        primaryButtonHref="#contact-form"
      />

    </div>
  );
}
