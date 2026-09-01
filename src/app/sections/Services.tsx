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
      subtitle: "Tier 1 & Tier 2 End-User Support",
      icon: <Headphones className="w-6 h-6 text-[#0052ff]" />,
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
      icon: <Activity className="w-6 h-6 text-[#0052ff]" />,
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
      subtitle: "Secure Tier 2 & Tier 3 Remediation",
      icon: <MonitorCheck className="w-6 h-6 text-[#0052ff]" />,
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
      icon: <Moon className="w-6 h-6 text-[#0052ff]" />,
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
    <section className="relative py-20 sm:py-28 bg-white text-zinc-900 overflow-hidden border-t border-zinc-200 selection:bg-[#0052ff] selection:text-white">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/20 bg-[#0052ff]/10 text-[#0052ff] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0052ff]" />
            <span>Tailored MSP Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            Comprehensive Support Layers,{" "}
            <span className="text-[#0052ff]">
              Built for Scale
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Plug certified engineers directly into your workflow to streamline tickets and maintain round-the-clock uptime.
          </p>
        </div>

        {/* Static Aesthetic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="relative group rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10 flex flex-col justify-between hover:border-[#0052ff]/50 hover:shadow-xl hover:shadow-[#0052ff]/10 transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <div className="space-y-6">
                
                {/* Header with Static Icon and SLA Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#0052ff]/10 border border-[#0052ff]/20 text-[#0052ff]">
                    {svc.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-bold text-[#0052ff]">
                      {svc.metric}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400">
                      {svc.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0052ff]">
                    {svc.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-zinc-950 tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-zinc-600 pt-1 leading-relaxed">
                    {svc.tagline}
                  </p>
                </div>

                {/* Scope Points */}
                <div className="space-y-2.5 pt-2">
                  {svc.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600">
                      <CheckCircle2 className="w-4 h-4 text-[#0052ff] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer Link */}
              <div className="pt-8 mt-6 border-t border-zinc-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-600 group-hover:text-[#0052ff] transition-colors"
                >
                  <span>Configure service scope</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Explore All Services Action Button */}
        <div className="flex justify-center pt-4">
          <Link
            href="/services"
            className="group px-8 py-4 rounded-2xl bg-white border border-zinc-200 hover:border-[#0052ff]/60 hover:bg-zinc-50 text-zinc-900 font-semibold text-sm sm:text-base flex items-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#0052ff]/10 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore All Services</span>
            <div className="p-1 rounded-lg bg-[#0052ff]/10 text-[#0052ff] border border-[#0052ff]/20">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}