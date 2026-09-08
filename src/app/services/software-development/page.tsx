// src/app/services/software-development/page.tsx
import Link from "next/link";
import {
  Code2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  PhoneCall,
} from "lucide-react";

export const metadata = {
  title: "Custom Software Development & API Integration | FusionWorks AI",
  description:
    "End-to-end custom software engineering, modern web and mobile application development, enterprise cloud architectures, and bespoke PSA/RMM tool integrations for scaling tech providers.",
  keywords: [
    "Custom Software Development",
    "MSP Software Engineering",
    "API Integrations BPO",
    "Cloud Application Development",
    "Full-Stack Web Development",
    "Mobile App Development",
    "Next.js React Node.js Development",
    "Internal Tooling Automation",
  ],
};

export default function SoftwareDevelopmentPage() {
  const coreDeliverables = [
    {
      title: "Custom Cloud & SaaS Application Engineering",
      desc: "Architecting resilient, multi-tenant web platforms, internal client portals, and microservices powered by modern Next.js, React, Node.js, and TypeScript stacks.",
    },
    {
      title: "Bespoke PSA, RMM & Third-Party API Integrations",
      desc: "Custom middleware connecting ConnectWise, HaloPSA, Datto, and proprietary databases with bidirectional webhooks, automated data syncs, and custom dashboards.",
    },
    {
      title: "Mobile App Development & Cross-Platform Solutions",
      desc: "High-performance iOS and Android applications developed with Flutter and React Native, featuring secure biometric authentication, offline synchronization, and push notifications.",
    },
    {
      title: "Legacy Code Refactoring & Security Hardening",
      desc: "Modernizing monolithic architectures into scalable containers, remediating vulnerability backlogs, optimizing database queries, and enforcing OWASP Top 10 defenses.",
    },
  ];

  const engineeringMetrics = [
    { value: "99.99%", label: "Deployment Reliability Target" },
    { value: "SOC 2", label: "Aligned DevSecOps Standards" },
    { value: "100%", label: "Source Code & IP Ownership" },
    { value: "Agile", label: "Bi-Weekly Sprint Releases" },
  ];

  const developmentLifecycle = [
    {
      step: "01",
      title: "Discovery & System Architecture Design",
      desc: "We analyze technical constraints, define database schemas, document API contracts, and establish modular architectural blueprints.",
    },
    {
      step: "02",
      title: "Agile Sprints & Automated CI/CD Pipelines",
      desc: "Test-driven engineering sprints with automated unit testing, static code analysis, and continuous deployment environments for live stakeholder reviews.",
    },
    {
      step: "03",
      title: "Security Audits, Deployment & Maintenance",
      desc: "Comprehensive penetration testing, zero-downtime production deployment, complete documentation handover, and ongoing telemetry support.",
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
              <span>Full-Cycle Product Engineering</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              Custom Software{" "}
              <span className="text-[#0052ff]">
                Development
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Accelerate your engineering roadmap without the overhead of lengthy hiring cycles. From specialized PSA middleware and automated internal tools to enterprise SaaS platforms, our engineers deliver clean, scalable, and audit-ready software tailored to your operational specifications.
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
                href="tel:9492873678"
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-sm hover:border-[#0052ff]/40"
              >
                <PhoneCall className="w-4 h-4 text-[#0052ff]" />
                <span>(949) 287-3678</span>
              </a>
            </div>
          </div>

          {/* Metric Highlights Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="p-2.5 bg-[#0052ff]/10 text-[#0052ff] rounded-xl border border-[#0052ff]/20">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-bold text-zinc-950">Engineering Benchmarks</h2>
                <span className="text-xs text-zinc-500">Enterprise development standards</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {engineeringMetrics.map((item, idx) => (
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
              Technical Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              End-to-End Application Architecture
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm">
              Engineered with clean separation of concerns, high throughput, and robust data isolation.
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
              Development Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              How We Build & Ship Software
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {developmentLifecycle.map((phase, idx) => (
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
              <Sparkles className="w-4 h-4" /> Production-Ready Code
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Have a Custom Application or Integration in Mind?
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Connect with our technical architects to scope your requirements, define milestone deliverables, and launch your dedicated engineering sprint.
            </p>

            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 active:scale-95"
              >
                <span>Request Software Engineering Scope</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}