// src/app/sections/CtaBanner.tsx
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Zap } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative py-20 sm:py-28 bg-white text-slate-900 overflow-hidden border-t border-slate-100 selection:bg-[#0052ff] selection:text-white">
      
      {/* 
        ========================================================================
        1. PREMIUM LIGHT BACKGROUND & MESH
        ========================================================================
      */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-[#0052ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Main CTA Card Container */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#0052ff]/10 bg-gradient-to-br from-blue-50/50 via-white to-blue-100/30 p-8 sm:p-14 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,82,255,0.1)] group">
          
          {/* Animated Background Glow inside Banner */}
          <div className="absolute top-[-50%] right-[-10%] w-[50%] h-[150%] bg-[#0052ff]/5 blur-[100px] pointer-events-none group-hover:bg-[#0052ff]/10 transition-all duration-700" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0052ff]/10 bg-[#0052ff]/5 text-[#0052ff] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
              <Zap className="w-4 h-4 text-[#0052ff]" />
              <span>Zero Risk • No Long-Term Contracts</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
              Ready to Deliver 24/7 IT Support{" "}
              <br className="hidden sm:block" />
              <span className="text-[#0052ff] relative whitespace-nowrap">
                Under Your Own Brand?
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Eliminate overnight engineer burnout, reduce operational overhead, and safeguard your client retention with our dedicated outsourced helpdesk teams.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-[0_8px_30px_-6px_rgba(0,82,255,0.4)] hover:shadow-[0_12px_40px_-6px_rgba(0,82,255,0.5)]"
              >
                <span>Request a Custom Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:9492873678"
                className="px-8 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-900 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-sm hover:shadow-md hover:border-[#0052ff]/30"
              >
                <PhoneCall className="w-4 h-4 text-[#0052ff]" />
                <span>Speak with an Advisor</span>
              </a>
            </div>

            {/* Security Guarantee */}
            <div className="pt-6 flex items-center justify-center gap-2 text-xs font-bold tracking-wide uppercase text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
              <span>Full NDA Protected • Rapid Onboarding within 5–7 Days</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}