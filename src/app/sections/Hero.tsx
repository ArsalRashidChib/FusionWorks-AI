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
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#070b14] text-white selection:bg-[#0052ff] selection:text-white">
      {/* 1. Background Image */}
     {/* 1. Background Image with Blur */}
<div
  className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat  "
  style={{
    backgroundImage: `url('https://img.magnific.com/free-photo/santa-monica-pier-beach-los-angeles_649448-4112.jpg?semt=ais_hybrid&w=740&q=80')`,
  }}
/>

      {/* 2. Gradient Overlay (Transparent top fading into Black at bottom) */}
<div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#000000]/30 via-[#000000]/30 to-[#000000]/50" />
      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Value Messaging */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
          

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-md">
              24/7 Coverage{" "}
              <span className="text-[#ffffff]">
Customer Support and Outsourcing              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-sm">
Where Human Heart Meets AI EfficiencyAt Fusion AI Works, we don't just resolve tickets—we design seamless experiences. We are a next-generation contact center bridging the gap between innovative technology and real human empathy. By automating the routine and personalizing the complex, we give your business 24/7/365 coverage while drastically reducing operational costs.            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href="tel:1234567890"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-95 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/30 hover:shadow-[#0052ff]/50"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/20 bg-slate-900/60 hover:bg-slate-800/80 active:scale-95 text-slate-100 font-semibold text-sm sm:text-base backdrop-blur-md transition-all hover:border-[#0052ff]/50 flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 sm:pt-8 border-t border-slate-700/50">
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-slate-200">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-left">
                    <CheckCircle2 className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                    <span className="drop-shadow-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Form Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white text-zinc-900 rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl shadow-black/80 border border-zinc-200">
              <div className="text-center mb-6">
                <span className="inline-block p-2 rounded-xl bg-[#0052ff]/10 text-[#0052ff] mb-2">
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
                    <option value="helpdesk-support">Helpdesk Support (Tier 1 & Tier 2)</option>
                    <option value="after-hours-monitoring">After-Hours NOC Monitoring</option>
                    <option value="remote-troubleshooting">Remote Troubleshooting</option>
                    <option value="ticket-management">Ticket Management</option>
                    <option value="customer-support">Inbound / Outbound Customer Support</option>
                    <option value="lead-generation">Inbound / Outbound Lead Generation</option>
                    <option value="appointment-setting">Appointment Setting</option>
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
                  <Zap className="w-4 h-4 text-white fill-white group-hover:scale-110 transition-transform" />
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
