// src/app/sections/IndustriesBadges.tsx
import Link from "next/link";
import {
  HeartPulse,
  Landmark,
  ShoppingCart,
  Scale,
  ShieldCheck,
  Lock,
  FileCheck,
  Server,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function IndustriesBadges() {
  const industries = [
    {
      icon: <HeartPulse className="w-5 h-5 text-[#0052ff]" />,
      title: "Healthcare IT",
      focus: "EHR/EMR Systems & Clinics",
      desc: "Fast response troubleshooting for telehealth portals, patient management systems, and clinical endpoint workstations.",
    },
    {
      icon: <Landmark className="w-5 h-5 text-[#0052ff]" />,
      title: "Financial Services",
      focus: "Wealth, Banking & Accounting",
      desc: "Strict multi-factor access protocols, encrypted session logging, and rapid remediation for critical financial pipelines.",
    },
    {
      icon: <ShoppingCart className="w-5 h-5 text-[#0052ff]" />,
      title: "Retail & E-Commerce",
      focus: "POS & Inventory Architecture",
      desc: "Around-the-clock weekend monitoring, POS workstation recoveries, and payment gateway downtime triage.",
    },
    {
      icon: <Scale className="w-5 h-5 text-[#0052ff]" />,
      title: "Legal & Professional",
      focus: "Law Firms & Consultancies",
      desc: "Confidentiality-first remote support, document management troubleshooting, and secure cloud access controls.",
    },
  ];

  const complianceStandards = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0052ff]" />,
      label: "HIPAA-Aligned Workflows",
      detail: "Zero-trust session policies and PHI privacy safeguards.",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#0052ff]" />,
      label: "SOC 2 Type II Ready Controls",
      detail: "Role-based access, audited sessions, and credential isolation.",
    },
    {
      icon: <FileCheck className="w-5 h-5 text-[#0052ff]" />,
      label: "Strict NDA & White-Labeling",
      detail: "Complete brand anonymity with enterprise confidentiality.",
    },
    {
      icon: <Server className="w-5 h-5 text-[#0052ff]" />,
      label: "256-Bit Encrypted Sessions",
      detail: "Encrypted RMM access channels with detailed audit trails.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-black text-white overflow-hidden border-t border-white/[0.08] selection:bg-[#0052ff] selection:text-white">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#0052ff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/40 bg-[#0052ff]/10 text-[#6699ff] text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-[#0052ff]/20">
            <Sparkles className="w-4 h-4 text-[#0052ff]" />
            <span>Verticals & Security Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Tailored Industry Workflows,{" "}
            <span className="bg-gradient-to-r from-[#0052ff] via-[#3377ff] to-[#80aaff] bg-clip-text text-transparent">
              Enterprise Compliance
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Whether managing regulated clinics or high-volume legal databases, our support models adapt to strict operational and data privacy requirements.
          </p>
        </div>

        {/* Specialized Industry Verticals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-white/[0.08] bg-zinc-950/80 p-7 flex flex-col justify-between hover:border-[#0052ff]/50 hover:bg-zinc-900/90 transition-all duration-300 group hover:-translate-y-1 backdrop-blur-md shadow-sm"
            >
              <div className="space-y-4">
                <div className="p-3 bg-[#0052ff]/10 border border-[#0052ff]/20 rounded-2xl w-fit group-hover:scale-105 group-hover:bg-[white] text-[#0052ff] group-hover:text-white transition-all duration-300">
                  {ind.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {ind.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#0052ff] block pt-0.5">
                    {ind.focus}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Compliance Highlight Bar */}
        <div className="rounded-3xl border border-white/[0.08] bg-zinc-950/90 p-8 sm:p-10 backdrop-blur-xl shadow-lg shadow-black/60">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Enterprise Compliance & Data Security Standards
            </h3>
            <p className="text-xs text-zinc-400">
              Rigorous protocols implemented on every ticket, call, and remote connection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-white/[0.08] bg-black/80 flex flex-col space-y-2.5 hover:border-[#0052ff]/40 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] w-fit text-[#0052ff]">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-zinc-100">{item.label}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="flex justify-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-[#0052ff] transition-colors"
          >
            Explore all supported industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}