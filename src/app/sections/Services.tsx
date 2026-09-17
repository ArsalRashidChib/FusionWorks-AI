// src/app/sections/Services.tsx
import Link from "next/link";
import {
  Headphones,
  Activity,
  MonitorCheck,
  Moon,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "helpdesk",
      title: "Helpdesk Support",
      subtitle: "Tier 1 End-User Support",
      themeColor: "text-[#0052ff]",
      iconBg: "bg-blue-50 text-[#0052ff] border-blue-100 group-hover:border-blue-300",
      icon: <Headphones className="w-6 h-6" />,
      tagline: "High-touch frontline support acting as a natural extension of your brand.",
      deliverables: [
        "End-user onboarding & account provisioning",
        "M365 & Line-of-Business app troubleshooting",
        "Hardware and peripheral triage & remote fixes",
        "Branded communication via portal, email & voice",
      ],
      metric: "<15 Min",
      metricLabel: "Response SLA",
    },
    {
      id: "noc",
      title: "NOC Monitoring",
      subtitle: "Proactive Infrastructure Surveillance",
      themeColor: "text-cyan-600",
      iconBg: "bg-cyan-50 text-cyan-600 border-cyan-100 group-hover:border-cyan-300",
      icon: <Activity className="w-6 h-6" />,
      tagline: "24/7 continuous health tracking to eliminate alerts before downtime strikes.",
      deliverables: [
        "Real-time server, hypervisor & network telemetry",
        "Automated patch verification & staging",
        "Critical threshold alert escalation pathways",
        "Nightly backup verification & disaster audits",
      ],
      metric: "99.9%",
      metricLabel: "Uptime Target",
    },
    {
      id: "troubleshooting",
      title: "Remote Troubleshooting",
      subtitle: "Secure Tier 1 Remediation",
      themeColor: "text-emerald-600",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:border-emerald-300",
      icon: <MonitorCheck className="w-6 h-6" />,
      tagline: "Fast, audited remote sessions to remediate complex infrastructure roadblocks.",
      deliverables: [
        "Active Directory & Azure Entra ID diagnostics",
        "VPN, firewall rules & gateway maintenance",
        "Endpoint security policy tuning & containment",
        "Root cause logging for repeating incident queues",
      ],
      metric: "85%+",
      metricLabel: "First-Touch Resolution",
    },
    {
      id: "after-hours",
      title: "After-Hours Coverage",
      subtitle: "Overnight & Weekend Standby",
      themeColor: "text-indigo-600",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:border-indigo-300",
      icon: <Moon className="w-6 h-6" />,
      tagline: "Round-the-clock protection while your internal staff takes time off.",
      deliverables: [
        "Weekday evening shifts from 5:00 PM to 8:00 AM",
        "Unbroken 24-hour weekend & holiday dispatch",
        "VIP account emergency alert routing",
        "Daily morning engineering shift summaries",
      ],
      metric: "24/7/365",
      metricLabel: "Active Coverage",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-100 selection:bg-[#0052ff] selection:text-white">
      
      {/* 
        ========================================================================
        1. CRISP WHITE BACKGROUND & MESH
        ========================================================================
      */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0052ff]/10 bg-[#0052ff]/5 text-[#0052ff] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0052ff]" />
            <span>Tailored MSP Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
            Comprehensive Support Layers,{" "}
            <br className="hidden sm:block" />
            <span className="text-[#0052ff] relative whitespace-nowrap">
              Built for Scale
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Plug certified engineers directly into your workflow to streamline tickets and maintain round-the-clock uptime.
          </p>
        </div>

        {/* Dynamic SaaS Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="relative group rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-12px_rgba(0,82,255,0.12)] hover:-translate-y-2 hover:border-[#0052ff]/30"
            >
              <div className="space-y-8">
                
                {/* Header with Icon and SLA Tag */}
                <div className="flex items-start justify-between">
                  <div className={`p-4 rounded-2xl border transition-all duration-500 shadow-sm group-hover:scale-110 flex items-center justify-center ${svc.iconBg}`}>
                    {svc.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl sm:text-3xl font-black tracking-tight ${svc.themeColor}`}>
                      {svc.metric}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-1">
                      {svc.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-2">
                  <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${svc.themeColor}`}>
                    {svc.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {svc.tagline}
                  </p>
                </div>

                {/* Scope Points */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  {svc.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm font-semibold text-slate-700">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 ${svc.themeColor} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer Link */}
              <div className="pt-8 mt-8 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 group-hover:text-[#0052ff] transition-colors"
                >
                  <span>Configure service scope</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Explore All Services Action Button */}
        <div className="flex justify-center pt-8">
          <Link
            href="/services"
            className="group px-8 py-4 rounded-2xl bg-white border border-slate-200 hover:border-[#0052ff]/30 text-slate-900 font-bold text-sm sm:text-base flex items-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#0052ff]/10 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore All Services</span>
            <div className="p-1.5 rounded-lg bg-blue-50 text-[#0052ff] border border-blue-100 group-hover:border-blue-200 transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}