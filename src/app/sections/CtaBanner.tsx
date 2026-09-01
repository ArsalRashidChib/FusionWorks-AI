// src/app/sections/CtaBanner.tsx
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Zap } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative py-16 sm:py-24 bg-black text-white overflow-hidden border-t border-white/[0.08] selection:bg-[#0052ff] selection:text-white">
      {/* Background Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-[#0052ff]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#0052ff]/40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-8 sm:p-14 lg:p-16 shadow-2xl shadow-black/80 backdrop-blur-xl">
          
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#0052ff_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/40 bg-[#0052ff]/10 text-[#6699ff] text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-[#0052ff]/20">
              <Zap className="w-4 h-4 text-[#0052ff]" />
              <span>Zero Risk • No Long-Term Contracts</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Deliver 24/7 IT Support{" "}
              <span className="bg-gradient-to-r from-[#0052ff] via-[#3377ff] to-[#80aaff] bg-clip-text text-transparent">
                Under Your Own Brand?
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Eliminate overnight engineer burnout, reduce operational overhead, and safeguard your client retention with our dedicated outsourced helpdesk teams.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-95 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/30 hover:shadow-[#0052ff]/50"
              >
                <span>Request a Custom Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:1234567890"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/[0.1] bg-zinc-950/80 hover:bg-zinc-900 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 backdrop-blur-sm transition-all hover:border-[#0052ff]/40 active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-[#0052ff]" />
                <span>Speak with an Advisor</span>
              </a>
            </div>

            {/* Security Guarantee */}
            <div className="pt-6 flex items-center justify-center gap-2 text-xs font-medium text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
              <span>Full NDA Protected • Rapid Onboarding within 5–7 Days</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}