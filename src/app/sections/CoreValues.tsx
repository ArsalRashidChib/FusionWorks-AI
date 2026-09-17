// src/app/sections/CoreValues.tsx
import { Clock, Zap, Users2, CheckCircle2, TrendingDown } from "lucide-react";

export default function CoreValues() {
  const pillars = [
    {
      icon: <Clock className="w-6 h-6" />,
      iconBg: "bg-blue-50 text-[#0052ff] border-blue-100",
      badge: "Zero Downtime Gap",
      badgeStyle: "bg-blue-50 text-[#0052ff] border-blue-100 group-hover:border-blue-300",
      title: "24/7/365 Support Coverage",
      desc: "Never miss an overnight alert or client call. Provide seamless support across weekends, bank holidays, and after-hours.",
      stats: "100% SLA Availability",
      statsColor: "text-[#0052ff]",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100",
      badge: "Industry-Leading Speeds",
      badgeStyle: "bg-cyan-50 text-cyan-600 border-cyan-100 group-hover:border-cyan-300",
      title: "Rapid SLA Response Times",
      desc: "Engineered escalation pathways and instant ticket triaging ensure your clients get resolution within minutes, not hours.",
      stats: "<15 Min First Response *if required",
      statsColor: "text-cyan-600",
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      badge: "Margin Expansion",
      badgeStyle: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:border-indigo-300",
      title: "Reduced Staffing Overhead",
      desc: "Eliminate the excessive payroll, training, and recruitment expenses of sustaining an in-house overnight IT shift.",
      stats: "Up to 50% Cost Savings",
      statsColor: "text-indigo-600",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-100 selection:bg-[#0052ff] selection:text-white">
      
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
            <Users2 className="w-4 h-4 text-[#0052ff]" />
            <span>Why MSPs Choose FusionWorks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
            Built to Protect Your Brand,{" "}
            <br className="hidden sm:block" />
            <span className="text-[#0052ff] relative whitespace-nowrap">
              Elevate Your Margins
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Scalable outsourced IT support solutions designed specifically to eliminate operational burnout and deliver white-glove support to your clients.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 group shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,82,255,0.12)] hover:-translate-y-2 hover:border-[#0052ff]/30"
            >
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className={`p-3.5 rounded-2xl border transition-all duration-500 shadow-sm group-hover:scale-110 ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <span className={`text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border transition-colors ${item.badgeStyle}`}>
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Metric Pill */}
              <div className="pt-6 mt-8 border-t border-slate-100 flex items-center gap-2.5 text-xs font-bold tracking-wide uppercase relative z-10">
                <CheckCircle2 className={`w-4 h-4 ${item.statsColor} flex-shrink-0`} />
                <span className={`${item.statsColor} transition-colors duration-300`}>{item.stats}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}