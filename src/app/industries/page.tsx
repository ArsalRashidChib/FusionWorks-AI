// src/app/industries/page.tsx
import Link from "next/link";
import {
  Server,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileCheck,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Industry-Specific IT Support & White-Label MSP Solutions | FusionWorks AI",
  description:
    "Explore our industry-specific IT helpdesk, 24/7 NOC monitoring, and compliant outsourced support services tailored for MSPs, Healthcare IT, Financial Institutions, Retail, Legal, and Education.",
  keywords: [
    "MSP Outsourced Helpdesk",
    "Healthcare IT Support HIPAA",
    "Financial Services IT Compliance",
    "Retail POS Support 24/7",
    "Legal IT Helpdesk",
    "White-Label Technical Support",
    "SOC 2 Type II Compliant Support",
    "EHR EMR System Support",
  ],
};

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Server className="w-6 h-6 text-[#0052ff]" />,
      name: "Managed Service Providers (MSPs)",
      tagline: "White-Label Helpdesk & NOC Capacity Expansion",
      desc: "Dedicated Tier 1–Tier 3 support seamlessly integrated into your PSA/RMM stack. Expand your endpoint coverage 24/7/365 without increasing in-house payroll or overhead.",
      capabilities: [
        "ConnectWise, Datto, Autotask & HaloPSA native triage",
        "Overnight & weekend NOC alert remediation",
        "White-labeled customer communication & branded portal",
      ],
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-[#0052ff]" />,
      name: "Healthcare IT & Medical Clinics",
      tagline: "HIPAA-Aligned Support & EHR/EMR Triage",
      desc: "Urgent remote technical support prioritizing clinical uptime, zero-trust session controls, and rapid troubleshooting for mission-critical electronic medical records systems.",
      capabilities: [
        "EHR/EMR application access & endpoint diagnostics",
        "HIPAA-compliant session governance & audit trails",
        "High-priority triage for clinical workstations & telehealth",
      ],
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#0052ff]" />,
      name: "Financial Services & Banking",
      tagline: "SOC 2-Ready Remote Support & Compliance",
      desc: "Security-first incident response and identity governance designed for accounting firms, wealth management offices, and community financial institutions.",
      capabilities: [
        "Zero-trust credential verification & MFA enforcement",
        "Encrypted remote session isolation & telemetry logs",
        "Rapid remediation for accounting software & databases",
      ],
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-[#0052ff]" />,
      name: "Retail & E-Commerce",
      tagline: "24/7 POS Workstation & Payment Uptime",
      desc: "Around-the-clock technical coverage ensuring point-of-sale terminals, warehouse inventory systems, and payment gateway connections maintain unbroken uptime during peak hours.",
      capabilities: [
        "Weekend & holiday emergency POS troubleshooting",
        "Inventory management software & scanner triage",
        "Network gateway uptime & payment pipeline monitoring",
      ],
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#0052ff]" />,
      name: "Legal & Professional Services",
      tagline: "Confidential Document Management & Access Support",
      desc: "Fast, discreet Tier 1 and Tier 2 remote support protecting billable hours for law firms, management consultancies, and corporate professional practices.",
      capabilities: [
        "Document management system (DMS) configuration",
        "Secure cloud identity & Azure Entra ID access control",
        "Strict non-disclosure agreements & encrypted channels",
      ],
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#0052ff]" />,
      name: "Education & Academic Institutions",
      tagline: "LMS Connectivity & Scalable User Onboarding",
      desc: "Scalable helpdesk support for K-12 districts and higher education institutions, resolving digital classroom friction, LMS connectivity, and faculty account provisioning.",
      capabilities: [
        "Canvas, Blackboard, & Google Workspace troubleshooting",
        "Bulk student & faculty identity provisioning cycles",
        "Off-hours helpdesk coverage for remote learners",
      ],
    },
  ];

  const complianceBadges = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#0052ff]" />,
      title: "HIPAA-Aligned Safeguards",
      desc: "Zero-trust session controls and privacy protocols ensuring protected health information (PHI) remains secure.",
    },
    {
      icon: <Lock className="w-5 h-5 text-[#0052ff]" />,
      title: "SOC 2 Type II Aligned Controls",
      desc: "Role-based access controls, audited support connections, and isolated partner credentials.",
    },
    {
      icon: <FileCheck className="w-5 h-5 text-[#0052ff]" />,
      title: "Enterprise NDA Protection",
      desc: "Strict non-disclosure agreements guaranteeing complete white-label anonymity for your MSP brand.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-[#0052ff] selection:text-white py-16 sm:py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#0052ff]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0052ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Header (SEO-Optimized H1) */}
        <section className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/40 bg-[#0052ff]/10 text-[#6699ff] text-xs font-semibold tracking-wide shadow-sm shadow-[#0052ff]/20">
            <Sparkles className="w-4 h-4 text-[#0052ff]" />
            <span>Vertical Expertise & Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Industries We{" "}
            <span className="bg-gradient-to-r from-[#0052ff] via-[#3377ff] to-[#80aaff] bg-clip-text text-transparent">
              Support & Scale
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Specialized technical workflows and white-label IT support models engineered to meet the stringent compliance, data privacy, and 24/7 uptime benchmarks of modern enterprises.
          </p>
        </section>

        {/* Industries Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-white/[0.08] bg-zinc-950/80 hover:border-[#0052ff]/50 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-sm hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-3.5 bg-[#0052ff]/10 border border-[#0052ff]/20 rounded-2xl w-fit group-hover:scale-105 group-hover:bg-[white] text-[#0052ff] group-hover:text-white transition-all duration-300">
                  {ind.icon}
                </div>

                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {ind.name}
                  </h2>
                  <span className="text-xs font-semibold text-[#6699ff] block">
                    {ind.tagline}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed">
                  {ind.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                    Core Vertical Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs text-zinc-400">
                    {ind.capabilities.map((cap, capIdx) => (
                      <li key={capIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0052ff] flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-[#6699ff] transition-colors"
                >
                  <span>Request industry SLA specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Security & Compliance Framework */}
        <section className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-zinc-950/80 backdrop-blur-xl shadow-lg shadow-black/60 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              Data Protection & Privacy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Enterprise Governance & Security Standards
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Every remote troubleshooting session, support ticket, and voice interaction is governed by strict compliance controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceBadges.map((badge, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/[0.08] bg-black/80 space-y-3 hover:border-[#0052ff]/40 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-white/[0.08] w-fit">
                  {badge.icon}
                </div>
                <h3 className="text-base font-bold text-white">{badge.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Scoping Callout */}
        <section className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[#0052ff]/40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-10 sm:p-14 text-center space-y-6 shadow-2xl shadow-black/80 backdrop-blur-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Need Tailored Support Coverage for Your Sector?
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Our engineering and dispatch teams adapt to your customized SLA requirements, security baselines, and industry-specific software toolchains.
            </p>

            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 active:scale-95"
              >
                <span>Discuss Your Industry Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}