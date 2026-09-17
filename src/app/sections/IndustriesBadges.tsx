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
      icon: <HeartPulse className="w-6 h-6" />,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      title: "Healthcare IT",
      focus: "EHR/EMR Systems & Clinics",
      focusColor: "text-emerald-600",
      desc: "Fast response troubleshooting for telehealth portals, patient management systems, and clinical endpoint workstations.",
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      iconBg: "bg-blue-50 text-[#0052ff] border-blue-100",
      title: "Financial Services",
      focus: "Wealth, Banking & Accounting",
      focusColor: "text-[#0052ff]",
      desc: "Strict multi-factor access protocols, encrypted session logging, and rapid remediation for critical financial pipelines.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
      title: "Retail & E-Commerce",
      focus: "POS & Inventory Architecture",
      focusColor: "text-cyan-600",
      desc: "Around-the-clock weekend monitoring, POS workstation recoveries, and payment gateway downtime triage.",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      title: "Legal & Professional",
      focus: "Law Firms & Consultancies",
      focusColor: "text-indigo-600",
      desc: "Confidentiality-first remote support, document management troubleshooting, and secure cloud access controls.",
    },
  ];

  const complianceStandards = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      label: "HIPAA-Aligned Workflows",
      detail: "Zero-trust session policies and PHI privacy safeguards.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      label: "SOC 2 Type II Ready Controls",
      detail: "Role-based access, audited sessions, and credential isolation.",
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      iconBg: "bg-blue-50 text-[#0052ff] border-blue-100",
      label: "Strict NDA & White-Labeling",
      detail: "Complete brand anonymity with enterprise confidentiality.",
    },
    {
      icon: <Server className="w-5 h-5" />,
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
      label: "256-Bit Encrypted Sessions",
      detail: "Encrypted RMM access channels with detailed audit trails.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden selection:bg-[#0052ff] selection:text-white">
      
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
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[40%] h-[60%] bg-[#0052ff]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-[-10%] w-[30%] h-[40%] bg-emerald-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0052ff]/10 bg-[#0052ff]/5 text-[#0052ff] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0052ff]" />
            <span>Verticals & Security Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
            Tailored Industry Workflows,{" "}
            <br className="hidden sm:block" />
            <span className="text-[#0052ff] relative whitespace-nowrap">
              Enterprise Compliance
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Whether managing regulated clinics or high-volume legal databases, our support models adapt to strict operational and data privacy requirements.
          </p>
        </div>

        {/* Specialized Industry Verticals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="relative rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 flex flex-col h-full transition-all duration-500 group shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,82,255,0.12)] hover:-translate-y-2 hover:border-[#0052ff]/30"
            >
              <div className="flex-1 space-y-6 relative z-10">
                {/* Dedicated Icon Block */}
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl border transition-all duration-500 shadow-sm group-hover:scale-110 ${ind.iconBg}`}>
                  {ind.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                      {ind.title}
                    </h3>
                    <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${ind.focusColor}`}>
                      {ind.focus}
                    </span>
                  </div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {ind.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Compliance Banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100/50 p-8 sm:p-12 shadow-xl shadow-slate-200/50 group">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3 relative z-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Enterprise Compliance & Data Security
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Rigorous protocols implemented on every ticket, call, and remote connection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {complianceStandards.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col space-y-5 hover:border-[#0052ff]/30 hover:shadow-lg hover:shadow-[#0052ff]/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl border shadow-sm ${item.iconBg}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1.5">{item.label}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="flex justify-center pt-4">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#0052ff] transition-colors group"
          >
            <span>Explore all supported industries</span>
            <ArrowRight className="w-4 h-4 text-[#0052ff] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}