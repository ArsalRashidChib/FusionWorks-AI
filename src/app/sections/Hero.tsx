// src/app/sections/Hero.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Headphones,
  Zap,
} from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const trustBadges = [
    "24/7/365 Coverage",
    "15-Min Response Time",
    "No Long-Term Lock-in",
    "Tier 1 & Tier 2 Certified",
    "Seamless PSA/RMM Integration",
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black text-white selection:bg-[#0052ff] selection:text-white">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 "
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/8821401/pexels-photo-8821401.jpeg?_gl=1*1kmlev9*_ga*MzE5NTM3NDA1LjE3NzQ1NTc5MjQ.*_ga_8JE65Q40S6*czE3ODgwOTYxMjkkbzM4JGcxJHQxNzg4MDk2MTM0JGo1NSRsMCRoMA..')`,
        }}
      />

      {/* Corporate Black & #0052ff Ambient Layers */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/90 to-black/75" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(#0052ff_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-20" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0052ff]/20 rounded-full blur-[130px] pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0052ff]/15 rounded-full blur-[100px] pointer-events-none z-[1]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Value Messaging */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0052ff]/40 bg-[#0052ff]/10 backdrop-blur-md text-[#6699ff] text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-[#0052ff]/20">
              <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
              <span>White-Label IT Support for MSPs</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              24/7 Helpdesk Outsourcing{" "}
              <span className="bg-gradient-to-r from-[#0052ff] via-[#3377ff] to-[#80aaff] bg-clip-text text-transparent">
                for Scaling MSPs
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Fusion Works AI delivers reliable after-hours IT support, remote helpdesk services, NOC monitoring, and ticket management solutions purpose-built for Managed Service Providers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href="tel:1234567890"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-95 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/30 hover:shadow-[#0052ff]/50"
              >
                <PhoneCall className="w-4 h-4" /> Call Now
              </a>
              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:bg-zinc-900 active:scale-95 text-zinc-100 font-semibold text-sm sm:text-base backdrop-blur-md transition-all hover:border-[#0052ff]/40 flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 sm:pt-8 border-t border-zinc-900">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-zinc-300">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-left">
                    <CheckCircle2 className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Form Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white text-zinc-900 rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl shadow-black/80 border border-zinc-200">
              <div className="text-center mb-6">
                <span className="inline-block p-2 rounded-xl bg-blue-50 text-[#0052ff] mb-2">
                  <Headphones className="w-5 h-5" />
                </span>
                <h3 className="text-2xl font-bold text-black tracking-tight">
                  Request a Free Quote
                </h3>
                <p className="text-xs text-zinc-500 mt-1 font-medium">
                  Custom SLA coverage plans delivered within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="sr-only">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#0052ff] focus:bg-white focus:border-transparent transition-all placeholder:text-zinc-400"
                  />
                </div>

                <div>
                  <label className="sr-only">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#0052ff] focus:bg-white focus:border-transparent transition-all placeholder:text-zinc-400"
                  />
                </div>

                <div>
                  <label className="sr-only">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Work Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#0052ff] focus:bg-white focus:border-transparent transition-all placeholder:text-zinc-400"
                  />
                </div>

                <div>
                  <label className="sr-only">Select Service</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052ff] focus:bg-white focus:border-transparent transition-all truncate"
                  >
                    <option value="" disabled>Select Service Needed</option>
                    <option value="customer-support">Inbound / Outbound Customer Support</option>
                    <option value="lead-generation">Inbound / Outbound Lead Generation</option>
                    <option value="appointment-setting">Appointment Setting</option>
                    <option value="helpdesk-support">Helpdesk Support (Tier 1 & Tier 2)</option>
                    <option value="after-hours-monitoring">After-Hours NOC Monitoring</option>
                    <option value="remote-troubleshooting">Remote Troubleshooting</option>
                    <option value="ticket-management">Ticket Management</option>
                    <option value="virtual-assistant">Virtual / Administrative Assistant</option>
                  </select>
                </div>

                <div>
                  <label className="sr-only">Your Message</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="How can we help? (e.g. current pain points, requirements)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-black text-sm focus:outline-none focus:ring-2 focus:ring-[#0052ff] focus:bg-white focus:border-transparent transition-all placeholder:text-zinc-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-semibold text-sm tracking-wide transition-all shadow-md shadow-[#0052ff]/25 hover:shadow-lg hover:shadow-[#0052ff]/35 active:scale-[0.98] flex items-center justify-center gap-2 mt-2 group"
                >
                  <Zap className="w-4 h-4 text-blue-200 fill-blue-200 group-hover:scale-110 transition-transform" />
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-auto" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}