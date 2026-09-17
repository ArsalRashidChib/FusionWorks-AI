// src/app/sections/Hero.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  Activity,
  Headphones,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col">
      
      {/* 
        ========================================================================
        1. THE ANGLED HERO BACKGROUND
        ========================================================================
        Uses a complex mesh gradient (Blue, Emerald, Orange) to create a warm, 
        premium tech feel, cut dynamically at the bottom.
      */}
      <div 
        className="relative w-full pb-32 pt-20 lg:pt-32 lg:pb-48 overflow-visible"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 0% 100%)",
          backgroundColor: "#0b1121", // Deep navy base
        }}
      >
        {/* Blurred Mesh Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-emerald-500/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-[10%] right-[-10%] w-[60%] h-[80%] bg-orange-500/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[60%] bg-[#0052ff]/40 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Subtle grid overlay for texture */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black tracking-tight text-white leading-[1.1]">
               24/7 
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-100">
                  Coverage Customer Support and Outsourcing
                </span>
              </h1>

              <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
 We don't just resolve tickets — we design seamless experiences giving your business 24/7 coverage while drastically reducing operational costs.              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="tel:9492873678"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0052ff] hover:bg-blue-600 active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/30"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Start Now</span>
                </a>
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 text-white font-bold text-sm backdrop-blur-md transition-all flex items-center justify-center gap-2.5 group"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Floating Native UI Composition */}
            <div className="lg:col-span-6 relative flex justify-center items-center min-h-[400px] lg:min-h-[500px]">
              
              {/* Central Element: The Functional Quote Form dressed as a Glass Widget */}
              <div className="relative z-20 w-full max-w-[380px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-black/50 lg:translate-x-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-[#0052ff] rounded-xl text-white shadow-inner">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">Fast-Track Setup</h3>
                    <p className="text-xs text-blue-200">Get your custom SLA today.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white text-sm focus:outline-none focus:border-[#0052ff] transition-colors placeholder:text-slate-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white text-sm focus:outline-none focus:border-[#0052ff] transition-colors placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-100 text-[#0052ff] font-bold text-sm tracking-wide transition-all shadow-md mt-2 flex justify-center items-center gap-2"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              

            </div>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        2. THE LOWER CONTENT SECTION
        ========================================================================
      */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-24 w-full -mt-10 lg:-mt-20">
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