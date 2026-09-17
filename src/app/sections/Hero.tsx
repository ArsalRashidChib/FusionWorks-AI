// src/app/sections/Hero.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the email content
    const subject = encodeURIComponent(`New Proposal Request: ${formData.company}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nI would like to request a custom proposal.`
    );
    
    // Triggers the user's default email client
    window.location.href = `mailto:fusionworksai@outlook.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative bg-white w-full flex flex-col">
      
      {/* 
        ========================================================================
        1. HERO SECTION (CONTAINER)
        ========================================================================
      */}
      <div className="relative w-full pt-20 lg:pt-32 pb-24 lg:pb-32">
        
        {/* 
          A. THE ANGLED PHOTOGRAPHIC BACKGROUND (ISOLATED)
          By isolating the clip-path here, the form is free to overlap the edge.
        */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 88%, 0% 100%)",
            backgroundImage: "url('https://images.pexels.com/photos/8821401/pexels-photo-8821401.jpeg?cs=srgb&dl=pexels-chaitaastic-8821401.jpg&fm=jpg')",
          }}
        >
          {/* Deep gradient overlay for text readability & premium feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1121]/95 via-[#0b1121]/75 to-black/40 pointer-events-none" />
          
          {/* Subtle grid overlay for tech texture */}
          <div 
            className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" 
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />
        </div>

        {/* B. THE CONTENT LAYER (Not Clipped) */}
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md shadow-sm mx-auto lg:mx-0">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Enterprise-Grade IT Support</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black tracking-tight text-white leading-[1.1] lg:whitespace-nowrap">
                24/7{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-100">
                  Outsourcing Support
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed drop-shadow-md">
                We don't just resolve tickets — we design seamless experiences giving your business uninterrupted coverage while drastically reducing operational costs.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
                <a 
                  href="tel:9492873678"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0052ff] hover:bg-blue-600 active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-[0_0_30px_-5px_rgba(0,82,255,0.4)]"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Start Now</span>
                </a>
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2.5 group"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Floating Native UI Composition */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center min-h-[400px]">
              
              {/* 
                Sensible B2B Lead Form 
                Translated aggressively down on Desktop (lg:translate-y-36) to overlap the angled background.
                Background adjusted to /90 so it stays solid when hanging over the white section below.
              */}
              <div className="relative z-30 w-full max-w-[400px] bg-[#0b1121]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] lg:translate-x-4 lg:translate-y-36 xl:translate-y-44 mt-8 lg:mt-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-[#0052ff] rounded-xl text-white shadow-inner">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">Fast-Track Setup</h3>
                    <p className="text-xs text-blue-200">Get your custom SLA today.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-400 focus:bg-black/20 transition-all placeholder:text-slate-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-400 focus:bg-black/20 transition-all placeholder:text-slate-400"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-blue-400 focus:bg-black/20 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0052ff] hover:bg-blue-600 text-white font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#0052ff]/30 flex justify-center items-center gap-2"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-center text-slate-400 font-medium">
                      Fast 24-hour response • No commitment required
                    </p>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        2. THE LOWER CONTENT SECTION
        Because the form is floating on the right side, the left-aligned text 
        here sits perfectly beside it without colliding.
        ========================================================================
      */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-10 pb-16 lg:pb-24 w-full">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1121] tracking-tight leading-[1.15]">
            Empowering Businesses with <br className="hidden sm:block" />
            <span className="text-[#0052ff]">Intelligent Solutions</span>
          </h2>
          
          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            FusionWorks AI is a trusted partner for businesses seeking to streamline operations, enhance customer experiences, and scale efficiently. With a strong foundation in BPO, IT services, and back-office support, we combine people, process, and technology to deliver measurable value. Our commitment to quality, innovation, and client satisfaction has helped us build long-term partnerships across industries from startups to global enterprises.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-bold text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>BPO & Back-Office Support</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0052ff]" />
              <span>Secure IT Services</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <span>Scalable Operations</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}