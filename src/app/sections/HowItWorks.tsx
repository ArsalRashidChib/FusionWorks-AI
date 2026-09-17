// src/app/sections/HowItWorks.tsx
import Link from "next/link";
import { SearchCheck, GitFork, Rocket, ArrowRight, ShieldCheck, Check } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <SearchCheck className="w-6 h-6" />,
      iconBg: "bg-blue-50 text-[#0052ff] border-blue-100 group-hover:border-blue-300",
      title: "Discovery & Audit",
      subtitle: "Aligning scopes and SLAs",
      subtitleColor: "text-[#0052ff]",
      highlights: ["Ticket volume analysis", "Escalation criteria setup", "Custom SLA definition"],
    },
    {
      number: "02",
      icon: <GitFork className="w-6 h-6" />,
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100 group-hover:border-cyan-300",
      title: "PSA / RMM Integration",
      subtitle: "Plugging directly into your stack",
      subtitleColor: "text-cyan-600",
      highlights: ["Secure API & tool pairing", "Branded email & voice setup", "SOP & runbook ingestion"],
    },
    {
      number: "03",
      icon: <Rocket className="w-6 h-6" />,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:border-indigo-300",
      title: "Seamless Go-Live",
      subtitle: "24/7 uninterrupted coverage",
      subtitleColor: "text-indigo-600",
      highlights: ["Shadowing & warm handoff", "Live ticket dispatch", "Daily metric reporting"],
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-100 selection:bg-[#0052ff] selection:text-white">
      
      {/* 
        ========================================================================
        1. CRISP WHITE BACKGROUND & AMBIENT GLOWS
        ========================================================================
      */}
      {/* Ultra-subtle, airy dot pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      {/* Bright, clean ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[40%] h-[50%] bg-cyan-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0052ff]/10 bg-[#0052ff]/5 text-[#0052ff] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
            <span>Frictionless Onboarding</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
            How It Works in{" "}
            <span className="text-[#0052ff] relative whitespace-nowrap">
              3 Simple Steps
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Transition your after-hours and helpdesk workflows smoothly without disrupting day-to-day client operations.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          
          {/* Visual connector line hidden on mobile */}
          <div className="hidden md:block absolute top-[15%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-slate-100 to-transparent z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 flex flex-col h-full transition-all duration-500 group shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,82,255,0.12)] hover:-translate-y-2 hover:border-[#0052ff]/30"
            >
              <div className="flex-1 space-y-8">
                
                {/* Step Number & Icon Header */}
                <div className="flex items-start justify-between">
                  <div className={`p-4 rounded-2xl border transition-all duration-500 shadow-sm group-hover:scale-110 flex items-center justify-center ${step.iconBg}`}>
                    {step.icon}
                  </div>
                  <span className="text-5xl lg:text-6xl font-black text-slate-50 group-hover:text-[#0052ff]/10 transition-colors tracking-tighter select-none pointer-events-none">
                    {step.number}
                  </span>
                </div>

                {/* Step Titles */}
                <div className="space-y-2">
                  <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${step.subtitleColor}`}>
                    {step.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    {step.title}
                  </h3>
                </div>

                {/* Bullet Highlights */}
                <div className="space-y-3 pt-6 border-t border-slate-100">
                  {step.highlights.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                      <div className={`flex items-center justify-center w-5 h-5 rounded-full bg-slate-50 border border-slate-200 group-hover:border-[#0052ff]/20 transition-colors`}>
                        <Check className="w-3 h-3 text-slate-400 group-hover:text-[#0052ff] transition-colors" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Prompt */}
        <div className="flex justify-center pt-8">
          <Link
            href="/contact"
            className="px-10 py-5 rounded-2xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-[0_8px_30px_-6px_rgba(0,82,255,0.4)] hover:shadow-[0_12px_40px_-6px_rgba(0,82,255,0.5)] active:scale-[0.98] hover:-translate-y-0.5 group"
          >
            <span>Start Your 3-Step Onboarding</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}