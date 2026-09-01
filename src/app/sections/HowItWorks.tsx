// src/app/sections/HowItWorks.tsx
import Link from "next/link";
import { SearchCheck, GitFork, Rocket, ArrowRight, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <SearchCheck className="w-6 h-6 text-[#0052ff]" />,
      title: "Discovery & Audit",
      subtitle: "Aligning scopes and SLAs",
      description:
        "We assess your existing ticket volumes, coverage gaps, escalation policies, and documentation to build an exact operational profile.",
      highlights: ["Ticket volume analysis", "Escalation criteria setup", "Custom SLA definition"],
    },
    {
      number: "02",
      icon: <GitFork className="w-6 h-6 text-[#0052ff]" />,
      title: "PSA / RMM Integration",
      subtitle: "Plugging directly into your stack",
      description:
        "Our engineers integrate with your PSA, RMM, phone systems, and knowledge base with zero-trust access controls under your brand.",
      highlights: ["Secure API & tool pairing", "Branded email & voice setup", "SOP & runbook ingestion"],
    },
    {
      number: "03",
      icon: <Rocket className="w-6 h-6 text-[#0052ff]" />,
      title: "Seamless Go-Live",
      subtitle: "24/7 uninterrupted coverage",
      description:
        "We initiate live ticket triage, after-hours coverage, and proactive monitoring with continuous quality assurance and daily reports.",
      highlights: ["Shadowing & warm handoff", "Live ticket dispatch", "Daily metric reporting"],
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-white text-zinc-900 overflow-hidden border-t border-zinc-200 selection:bg-[#0052ff] selection:text-white">
      {/* Accent Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[#0052ff]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/20 bg-[#0052ff]/10 text-[#0052ff] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
            <span>Frictionless Onboarding</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            How It Works in{" "}
            <span className="text-[#0052ff]">
              3 Simple Steps
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Transition your after-hours and helpdesk workflows smoothly without disrupting day-to-day client operations.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-zinc-200 bg-white p-8 sm:p-9 flex flex-col justify-between hover:border-[#0052ff]/50 hover:shadow-xl hover:shadow-[#0052ff]/10 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div className="space-y-6">
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0052ff]/10 border border-[#0052ff]/20 text-[#0052ff] group-hover:bg-[#0052ff] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-zinc-200 group-hover:text-[#0052ff]/30 transition-colors tracking-tight font-mono">
                    {step.number}
                  </span>
                </div>

                {/* Step Titles */}
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0052ff]">
                    {step.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-600 pt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-4 border-t border-zinc-100">
                  {step.highlights.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0052ff]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Prompt */}
        <div className="flex justify-center pt-2">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-2xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-semibold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 hover:shadow-[#0052ff]/40 active:scale-95 hover:-translate-y-0.5"
          >
            <span>Start Your 3-Step Onboarding</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}