// src/app/sections/CoreValues.tsx
import { Clock, Zap, Users2, ShieldCheck, CheckCircle2, TrendingDown } from "lucide-react";

export default function CoreValues() {
  const pillars = [
    {
      icon: <Clock className="w-6 h-6 text-[#0052ff]" />,
      badge: "Zero Downtime Gap",
      title: "24/7/365 Support Coverage",
      desc: "Never miss an overnight alert or client call. Provide seamless support across weekends, bank holidays, and after-hours.",
      stats: "100% SLA Availability",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0052ff]" />,
      badge: "Industry-Leading Speeds",
      title: "Rapid SLA Response Times",
      desc: "Engineered escalation pathways and instant ticket triaging ensure your clients get resolution within minutes, not hours.",
      stats: "<15 Min First Response",
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-[#0052ff]" />,
      badge: "Margin Expansion",
      title: "Reduced Staffing Overhead",
      desc: "Eliminate the excessive payroll, training, and recruitment expenses of sustaining an in-house overnight IT shift.",
      stats: "Up to 50% Cost Savings",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0052ff]" />,
      badge: "Enterprise Expertise",
      title: "Certified Tier 1 & Tier 2 Techs",
      desc: "Dedicated technicians holding Microsoft, CompTIA, and major cloud certifications operating strictly under your brand voice.",
      stats: "100% White-Labeled",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-black text-white overflow-hidden border-t border-white/[0.08] selection:bg-[#0052ff] selection:text-white">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0052ff]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0052ff]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/40 bg-[#0052ff]/10 text-[#6699ff] text-xs sm:text-sm font-semibold tracking-wide shadow-sm shadow-[#0052ff]/20">
            <Users2 className="w-4 h-4 text-[#0052ff]" />
            <span>Why MSPs Choose Fusion Works AI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Built to Protect Your Brand,{" "}
            <span className="bg-gradient-to-r from-[#0052ff] via-[#3377ff] to-[#80aaff] bg-clip-text text-transparent">
              Elevate Your Margins
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Scalable outsourced IT support solutions designed specifically to eliminate operational burnout and deliver white-glove support to your clients.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-white/[0.08] bg-zinc-950/80 p-7 sm:p-8 flex flex-col justify-between hover:border-[#0052ff]/50 hover:bg-zinc-900/90 transition-all duration-300 group hover:-translate-y-1 backdrop-blur-md shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#0052ff]/10 border border-[#0052ff]/20 text-[#0052ff] group-hover:scale-105 group-hover:bg-[white] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#80aaff] bg-[#0052ff]/10 border border-[#0052ff]/30 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight pt-2">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Metric Pill */}
              <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                <span>{item.stats}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}