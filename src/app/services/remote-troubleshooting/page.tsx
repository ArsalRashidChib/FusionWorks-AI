// src/app/services/remote-troubleshooting/page.tsx
import Link from "next/link";
import {
  MonitorCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
  Server,
  Zap,
  PhoneCall,
  Terminal,
  ArrowLeft,
  Sparkles,
  Network,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "Remote IT Troubleshooting & Tier 2/3 Remediation | FusionWorks AI",
  description:
    "White-label remote IT troubleshooting, Tier 2 and Tier 3 infrastructure remediation, Active Directory/Entra ID diagnostics, and secure network triage for MSPs.",
  keywords: [
    "Remote IT Troubleshooting",
    "Tier 2 IT Support MSP",
    "Tier 3 Remediation Outsourcing",
    "Active Directory Diagnostics",
    "Azure Entra ID Troubleshooting",
    "Remote Desktop Support MSP",
    "Firewall VPN Remediation",
    "White Label IT Remediation",
  ],
};

export default function RemoteTroubleshootingPage() {
  const coreDeliverables = [
    {
      title: "Identity, Directory & Cloud Tenant Remediation",
      desc: "Deep diagnostics across on-premise Active Directory, Azure Entra ID, Group Policy Objects (GPO), hybrid identity sync loops, and SAML/SSO federation issues.",
    },
    {
      title: "Network Gateway, Firewall & VPN Triage",
      desc: "Remediation of IPsec/SSL VPN tunnels, firewall ACL configurations, VLAN routing roadblocks, DNS cache poisoning, and secure gateway packet drops.",
    },
    {
      title: "Endpoint Isolation & EDR Security Incident Containment",
      desc: "Fast remote triage for flagged endpoint telemetry, malware containment protocols, BitLocker recovery keys, and corrupted security definitions.",
    },
    {
      title: "Virtualization & Hypervisor Diagnostics",
      desc: "Remote performance tuning, VM snapshot management, host resource allocation, and datastore connectivity fixes across VMware ESXi, Hyper-V, and Azure VMs.",
    },
  ];

  const slaMetrics = [
    { value: "85%+", label: "First-Touch Resolution Rate" },
    { value: "256-Bit", label: "Encrypted Audited Sessions" },
    { value: "<20 Min", label: "Tier 2/3 Escalation Pickup" },
    { value: "100%", label: "Root Cause Documentation" },
  ];

  const onboardingPhases = [
    {
      step: "01",
      title: "Zero-Trust Credential & RMM Isolation",
      desc: "We establish role-based access control (RBAC) via your central RMM platform with strictly logged session recordings and ephemeral technician keys.",
    },
    {
      step: "02",
      title: "Escalation Matrix & SLA Tier Definition",
      desc: "Configuring precise threshold criteria distinguishing routine Tier 1 tickets from complex Tier 2/3 engineering roadblocks.",
    },
    {
      step: "03",
      title: "Live Escalation Dispatch & Root-Cause KB Ingestion",
      desc: "Immediate resolution of complex ticket queues coupled with structured post-incident documentation preventing repeating issue loops.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-[#0052ff] selection:text-white py-16 sm:py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#0052ff]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0052ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-[#0052ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/40 bg-[#0052ff]/10 text-[#6699ff] text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
              <span>Advanced Tier 2 & Tier 3 Remediation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Secure Remote{" "}
              <span className="bg-gradient-to-r from-[#0052ff] via-[#3377ff] to-[#80aaff] bg-clip-text text-transparent">
                Troubleshooting
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              When basic Tier 1 support hits a roadblock, our senior engineers step in. We deliver secure, audited remote remediation sessions directly inside your RMM, diagnosing root causes and stabilizing critical client infrastructure without tying up your internal leads.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/30 hover:shadow-[#0052ff]/50"
              >
                <span>Request Custom Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:1234567890"
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-white/[0.1] bg-zinc-950/80 hover:bg-zinc-900 text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#0052ff]" />
                <span>(123) 456-7890</span>
              </a>
            </div>
          </div>

          {/* Metric Highlights Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-white/[0.08] bg-zinc-950/80 backdrop-blur-xl shadow-2xl shadow-black/80 space-y-6">
            <div className="flex items-center gap-3 border-b border-white/[0.08] pb-4">
              <div className="p-2.5 bg-[#0052ff]/10 text-[#0052ff] rounded-xl">
                <MonitorCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Tier 2/3 Resolution Standards</h2>
                <span className="text-xs text-zinc-400">Audited session benchmarks</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {slaMetrics.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-white/[0.06] bg-black/60">
                  <div className="text-2xl font-extrabold text-white font-mono">{item.value}</div>
                  <div className="text-[11px] font-semibold text-zinc-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              Technical Focus Areas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Advanced Troubleshooting Scope
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Engineered for complex workstation, cloud tenant, and network infrastructure recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreDeliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-white/[0.08] bg-zinc-950/80 hover:border-[#0052ff]/50 hover:bg-zinc-900/90 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0052ff] flex-shrink-0" />
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3-Step Execution Workflow */}
        <section className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-zinc-950/80 backdrop-blur-xl shadow-lg space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              Remediation Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Audited Session Governance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onboardingPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/[0.08] bg-black/80 space-y-3"
              >
                <div className="text-xs font-mono font-bold text-[#0052ff]">
                  PHASE {phase.step}
                </div>
                <h3 className="text-base font-bold text-white">{phase.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[#0052ff]/40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-10 sm:p-12 text-center space-y-6 shadow-2xl shadow-black/80 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              <Sparkles className="w-4 h-4" /> Resolve Complex Tickets
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Need Reliable Tier 2 & 3 Support Capacity?
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Let's discuss your current escalation backlog, RMM integration requirements, and customized SLA response parameters.
            </p>

            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 active:scale-95"
              >
                <span>Request Troubleshooting Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}