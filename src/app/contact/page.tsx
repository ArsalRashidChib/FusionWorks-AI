// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Headphones,
  Lock,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Scoping Form Submitted:", formData);
    setSubmitted(true);
  };

  const contactDirects = [
    {
      icon: <Phone className="w-5 h-5 text-[#0052ff]" />,
      title: "Direct Phone Line",
      detail: "(123) 456-7890",
      href: "tel:1234567890",
      badge: "Available 24/7/365",
    },
    {
      icon: <Mail className="w-5 h-5 text-[#0052ff]" />,
      title: "Scoping & Inquiries",
      detail: "info@fusionworksai.com",
      href: "mailto:info@fusionworksai.com",
    
    },
  ];

  const securityAssurances = [
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#0052ff]" />,
      text: "100% White-Labeled Delivery",
    },
    {
      icon: <Lock className="w-4 h-4 text-[#0052ff]" />,
      text: "Strict Mutual NDA Protection",
    },
   
  ];

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 selection:bg-[#0052ff] selection:text-white py-16 sm:py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#0052ff]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <section className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/20 bg-[#0052ff]/10 text-[#0052ff] text-xs font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0052ff]" />
            <span>Technical Scoping & Consultations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            Let's Build Your Dedicated{" "}
            <span className="text-[#0052ff]">
              Support Infrastructure
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Connect with our technical solution architects to assess endpoint volume, integrate toolsets, and configure custom SLA coverage.
          </p>
        </section>

        {/* Main Grid: Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact & Security Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl border border-zinc-200 bg-white space-y-6 shadow-sm">
              <div className="space-y-2">
                <div className="p-3 bg-[#0052ff]/10 border border-[#0052ff]/20 text-[#0052ff] rounded-2xl w-fit">
                  <Headphones className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight pt-2">
                  Direct Dispatch & Support
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Have an urgent coverage gap or need immediate technical scoping? Reach our solutions team directly.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {contactDirects.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-2xl border border-zinc-200 bg-zinc-50/60 hover:border-[#0052ff]/50 hover:bg-white hover:shadow-md hover:shadow-[#0052ff]/5 transition-all duration-200 group"
                  >
                    <div className="p-2.5 rounded-xl bg-white border border-zinc-200 text-[#0052ff] shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs text-zinc-500 font-medium block">
                        {item.title}
                      </span>
                      <span className="text-sm font-bold text-zinc-900 group-hover:text-[#0052ff] transition-colors">
                        {item.detail}
                      </span>
                      <span className="text-[10px] font-semibold text-[#0052ff] block mt-0.5">
                        {item.badge}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Security Assurance Badge Card */}
            <div className="p-6 rounded-3xl border border-zinc-200 bg-zinc-50/70 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block px-1">
                Enterprise Assurance
              </span>
              <div className="space-y-2.5">
                {securityAssurances.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-medium text-zinc-700">
                    <div className="p-1 rounded-lg bg-[#0052ff]/10 text-[#0052ff]">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Form Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50">
              {submitted ? (
                <div className="text-center py-16 space-y-5">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 w-fit mx-auto">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight">
                    Proposal Request Received
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Our technical solutions architects are reviewing your service parameters and will provide a tailored scope within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl border border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-xs font-semibold text-zinc-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1 mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                      Request a Custom Proposal
                    </h3>
                    <p className="text-xs text-zinc-500 font-medium">
                      Fill out the details below to receive a custom SLA coverage plan.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] focus:bg-white transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] focus:bg-white transition-all placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] focus:bg-white transition-all placeholder:text-zinc-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme MSP Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] focus:bg-white transition-all placeholder:text-zinc-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 text-sm focus:outline-none focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] focus:bg-white transition-all truncate"
                    >
                      <option value="" disabled>Select a Service</option>
                      <option value="helpdesk-support">Helpdesk Support (Tier 1 & Tier 2)</option>
                      <option value="after-hours-monitoring">After-Hours & NOC Monitoring</option>
                      <option value="remote-troubleshooting">Remote Troubleshooting</option>
                      <option value="ticket-management">Ticket Management & Dispatch</option>
                      <option value="customer-support">Inbound / Outbound Customer Support</option>
                      <option value="lead-generation">Inbound / Outbound Lead Generation</option>
                      <option value="appointment-setting">Appointment Setting</option>
                      <option value="virtual-assistant">Virtual / Administrative Assistant</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Project Details / Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify your endpoint volume, current PSA/RMM stack, coverage hours (e.g. 24/7 or after-hours only), and target timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#0052ff] focus:ring-1 focus:ring-[#0052ff] focus:bg-white transition-all placeholder:text-zinc-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-[0.98] text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#0052ff]/25 hover:shadow-[#0052ff]/40 flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request for Proposal</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}