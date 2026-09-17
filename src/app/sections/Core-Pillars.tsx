// src/app/sections/core-pillars.tsx
import Link from "next/link";
import {
  Clock,
  Cpu,
  Users2,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function CorePillars() {
  const pillars = [
    {
      icon: <Clock className="w-6 h-6" />,
      iconBg: "bg-blue-50 text-[#0052ff] border-blue-100",
      title: "24/7/365 Always-On Support",
      badge: "Zero Gaps",
      badgeStyle: "bg-blue-50 text-[#0052ff] border-blue-200",
      desc: "Your customers never sleep, and neither do we. We provide around-the-clock availability so you never miss an inquiry.",
      detail: "100% SLA Availability",
      detailColor: "text-[#0052ff]",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
      title: "Intelligent Automation",
      badge: "Instant Resolution",
      badgeStyle: "bg-cyan-50 text-cyan-600 border-cyan-200",
      desc: "Our AI-powered workflows sort, route, and resolve simple inquiries instantly to keep response times under minutes.",
      detail: "<15 Min First Touch *if required",
      detailColor: "text-cyan-600",
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      title: "Dedicated Human Experts",
      badge: "Empathetic Care",
      badgeStyle: "bg-emerald-50 text-emerald-600 border-emerald-200",
      desc: "Complex, sensitive, or high-value tasks are always handled by skilled, empathetic human specialists operating under your brand.",
      detail: "100% White-Labeled",
      detailColor: "text-emerald-600",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      title: "Omnichannel Mastery",
      badge: "Unified Journey",
      badgeStyle: "bg-indigo-50 text-indigo-600 border-indigo-200",
      desc: "We unify your voice, live chat, email, text, and social media channels into one continuous, friction-free customer journey.",
      detail: "Omnichannel Integration",
      detailColor: "text-indigo-600",
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
      <div className="absolute top-0 right-[-5%] w-[40%] h-[50%] bg-[#0052ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[60%] bg-cyan-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0052ff]/10 bg-[#0052ff]/5 text-[#0052ff] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
            <span>Operational Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
            Our Core{" "}
            <span className="text-[#0052ff] relative whitespace-nowrap">
              Pillars
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Scalable, enterprise-grade frontline and technical support engineered to elevate customer satisfaction and maximize gross margins.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-[2rem] border border-slate-200 bg-white p-7 sm:p-8 flex flex-col h-full transition-all duration-500 group shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,82,255,0.12)] hover:-translate-y-2 hover:border-[#0052ff]/30"
            >
              {/* Top Content Area */}
              <div className="flex-1 space-y-8 relative z-10">
                
                {/* Dedicated Icon Block */}
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl border transition-all duration-500 shadow-sm group-hover:scale-110 ${item.iconBg}`}>
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="space-y-4">
                  <span className={`inline-block text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border transition-colors ${item.badgeStyle}`}>
                    {item.badge}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Metric Pill (Stays at the bottom due to flex-1 above) */}
              <div className="pt-6 mt-8 border-t border-slate-100 flex items-start gap-2.5 text-xs font-bold tracking-wide uppercase relative z-10">
                <CheckCircle2 className={`w-4 h-4 mt-[1px] ${item.detailColor} flex-shrink-0`} />
                <span className={`${item.detailColor} leading-relaxed`}>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Seamless Outsourcing Banner */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[#0052ff]/10 bg-gradient-to-br from-blue-50 via-white to-[#0052ff]/5 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#0052ff]/5 mt-12 group">
          
          <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-gradient-to-l from-blue-100/40 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              Seamless Outsourcing • Zero Overhead
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.1]">
              Scale Your Frontline Operations Without the Staffing Burden
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              Building an internal, round-the-clock support operation is expensive and exhausting. Partnering with us allows you to instantly scale your customer-facing operations without the burden of hiring, training, or managing infrastructure. We seamlessly plug right into your existing CRM, functioning as an authentic, highly responsive extension of your brand.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-[0_8px_30px_-6px_rgba(0,82,255,0.4)] hover:shadow-[0_12px_40px_-6px_rgba(0,82,255,0.5)]"
              >
                <span>Partner With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-900 font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-sm hover:shadow-md hover:border-[#0052ff]/30"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}