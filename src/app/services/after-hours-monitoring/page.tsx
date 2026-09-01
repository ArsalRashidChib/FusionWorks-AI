// src/app/services/after-hours-monitoring/page.tsx
import Link from "next/link";
import {
  Activity,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Server,
  AlertTriangle,
  ArrowLeft,
  BellRing,
  Sparkles,
  PhoneCall,
  Terminal,
} from "lucide-react";

export const metadata = {
  title: "24/7 After-Hours & NOC Monitoring Services | FusionWorks AI",
  description:
    "White-label after-hours IT monitoring, overnight NOC surveillance, automated alert remediation, and critical outage response for Managed Service Providers.",
  keywords: [
    "After Hours IT Monitoring",
    "24/7 NOC Surveillance",
    "Overnight IT Coverage MSP",
    "Automated Alert Remediation",
    "Weekend IT Support for MSPs",
    "White Label NOC Services",
    "Server Uptime Monitoring",
    "Critical Incident Dispatch",
  ],
};

export default function AfterHoursMonitoringPage() {
  const coreDeliverables = [
    {
      title: "24/7/365 Continuous Infrastructure Telemetry",
      desc: "Live surveillance across on-premise servers, cloud hypervisors (Azure, AWS), SNMP network appliances, firewalls, and critical service ports.",
    },
    {
      title: "Intelligent Alert Triaging & Noise Reduction",
      desc: "Suppression of non-actionable transient alarms and false positives to isolate actionable incidents using predefined ITIL thresholds.",
    },
    {
      title: "Automated Self-Healing & Scripted Remediation",
      desc: "Immediate execution of pre-approved remediation scripts, safe service restarts, and server reboot playbooks before escalating.",
    },
    {
      title: "Critical Incident Escalation & On-Call Dispatch",
      desc: "Structured escalation pathways routing P1/P2 outages to designated on-call MSP engineers via phone tree, SMS, or Teams integration.",
    },
  ];

  const slaMetrics = [
    { value: "99.9%", label: "Uptime Maintenance Target" },
    { value: "<10 Min", label: "P1 Critical Alert Response" },
    { value: "24/7/365", label: "Overnight & Weekend Standby" },
    { value: "100%", label: "Audit-Ready Incident Logging" },
  ];

  const onboardingPhases = [
    {
      step: "01",
      title: "Threshold & RMM Baseline Setup",
      desc: "We configure warning and critical alert thresholds across CPU, disk space, RAM, network latency, and service availability in your RMM.",
    },
    {
      step: "02",
      title: "Emergency Runbook & Escalation Matrix",
      desc: "Documenting client-specific reboot authorization windows, third-party vendor details (ISPs, hosters), and on-call engineer phone trees.",
    },
    {
      step: "03",
      title: "Shift Handover & Live Overnight Go-Live",
      desc: "Seamless evening shift handoffs with structured morning summary reports detailing resolved alarms and open high-priority tickets.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 selection:bg-[#0052ff] selection:text-white py-16 sm:py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#0052ff]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-[#0052ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/20 bg-[#0052ff]/10 text-[#0052ff] text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
              <span>24/7/365 Proactive NOC Operations</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              After-Hours &{" "}
              <span className="text-[#0052ff]">
                NOC Monitoring
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Protect your engineers from midnight burnout while maintaining unbroken SLA guarantees. Our dedicated NOC team monitors infrastructure telemetry around the clock, fixing issues remotely or escalating critical outages based on your exact runbooks.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 hover:shadow-[#0052ff]/40"
              >
                <span>Request Custom Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:1234567890"
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-sm hover:border-[#0052ff]/40"
              >
                <PhoneCall className="w-4 h-4 text-[#0052ff]" />
                <span>(123) 456-7890</span>
              </a>
            </div>
          </div>

          {/* Metric Highlights Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="p-2.5 bg-[#0052ff]/10 text-[#0052ff] rounded-xl border border-[#0052ff]/20">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-bold text-zinc-950">NOC Operational Benchmarks</h2>
                <span className="text-xs text-zinc-500">Continuous 24/7 SLA verification</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {slaMetrics.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-zinc-100 bg-zinc-50/70">
                  <div className="text-2xl font-extrabold text-[#0052ff] font-mono">{item.value}</div>
                  <div className="text-[11px] font-semibold text-zinc-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              Operational Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Comprehensive NOC Surveillance Capabilities
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm">
              Proactive alert mitigation and system resilience protocols designed for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreDeliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-zinc-200 bg-white hover:border-[#0052ff]/50 hover:shadow-xl hover:shadow-[#0052ff]/10 transition-all duration-300 space-y-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0052ff] flex-shrink-0" />
                  <h3 className="text-lg font-bold text-zinc-950">{item.title}</h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3-Step Execution Workflow */}
        <section className="p-8 sm:p-12 rounded-3xl border border-zinc-200 bg-zinc-50/70 shadow-lg shadow-zinc-200/50 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              Onboarding Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              NOC Toolchain & Protocol Integration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onboardingPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-zinc-200 bg-white space-y-3 hover:border-[#0052ff]/40 hover:shadow-sm transition-all"
              >
                <div className="text-xs font-mono font-bold text-[#0052ff]">
                  PHASE {phase.step}
                </div>
                <h3 className="text-base font-bold text-zinc-950">{phase.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[#0052ff]/20 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/30 p-10 sm:p-12 text-center space-y-6 shadow-xl shadow-[#0052ff]/5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              <Sparkles className="w-4 h-4" /> Uninterrupted Protection
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Ready to Safeguard Your Client Infrastructure 24/7?
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Let's connect to review your monitored endpoint counts, RMM telemetry integrations, and on-call escalation procedures.
            </p>

            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 active:scale-95"
              >
                <span>Request NOC Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}