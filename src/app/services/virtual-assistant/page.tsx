// src/app/services/virtual-assistant/page.tsx
import Link from "next/link";
import {
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  PhoneCall,
} from "lucide-react";

export const metadata = {
  title: "Virtual & Administrative Assistant Services | FusionWorks AI",
  description:
    "Dedicated executive virtual assistants and back-office administrative support for MSPs and high-growth technology companies. Inbox triage, calendar management, and CRM maintenance.",
  keywords: [
    "Virtual Assistant Services MSP",
    "Executive Administrative Assistant BPO",
    "Outsourced Back Office Support",
    "Calendar Management Virtual Assistant",
    "CRM Database Hygiene Services",
    "Executive Inbox Management",
    "IT Administrative Outsourcing",
    "Billing Reconciliation Assistant",
  ],
};

export default function VirtualAssistantPage() {
  const coreDeliverables = [
    {
      title: "Executive Inbox & Calendar Management",
      desc: "Complete scheduling coordination across Google Workspace and Outlook 365, priority inbox triage, drafting responses, and buffer-protected calendar optimization.",
    },
    {
      title: "CRM, PSA & Database Hygiene",
      desc: "Contact deduplication, record updates, pipeline stage tracking, and data cleaning across HubSpot, Salesforce, ConnectWise, and custom ERP tools.",
    },
    {
      title: "Invoicing, Billing & Vendor Reconciliation",
      desc: "Processing recurring invoices, preliminary accounts payable/receivable categorization, expense tracking, and vendor receipt matching.",
    },
    {
      title: "Operational Documentation & Travel Logistics",
      desc: "Drafting internal standard operating procedures, meeting minutes, technical summaries, and comprehensive domestic or international travel itineraries.",
    },
  ];

  const operationalMetrics = [
    { value: "40+ Hrs", label: "Monthly Executive Time Saved" },
    { value: "100%", label: "Strict NDA & Security Binding" },
    { value: "Daily", label: "Structured Async Standups" },
    { value: "Multi-Tool", label: "Slack / Teams / ClickUp / Asana" },
  ];

  const onboardingPhases = [
    {
      step: "01",
      title: "Workflow & Toolstack Audit",
      desc: "We analyze your recurring administrative tasks, communication channels, preferred tools, and daily operational requirements.",
    },
    {
      step: "02",
      title: "Dedicated Assistant Pairing & Security Setup",
      desc: "Assigning a vetted administrative specialist with role-based access controls, password vault isolation, and signed non-disclosure agreements.",
    },
    {
      step: "03",
      title: "Seamless Handoff & Daily Async Reporting",
      desc: "Execution of daily tasks with clear status checklists, async handoff logs, and continuous task optimization.",
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
              <span>Executive Back-Office Operations</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              Virtual &{" "}
              <span className="text-[#0052ff]">
                Administrative Assistant
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Reclaim valuable executive hours. Our dedicated virtual assistants manage repetitive operational workflows, inbox clutter, calendar logistics, and database hygiene so your leadership team can focus on strategic growth.
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
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-bold text-zinc-950">Executive Productivity Gains</h2>
                <span className="text-xs text-zinc-500">Reliable operational assistance</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {operationalMetrics.map((item, idx) => (
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
              Administrative Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Comprehensive Virtual Assistant Services
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm">
              Engineered to remove administrative friction across executive and back-office pipelines.
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
              Integration Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              How We Integrate With Your Workflows
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
              <Sparkles className="w-4 h-4" /> Offload Repetitive Tasks
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Ready to Free Up Your Leadership Team?
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Let&apos;s map out your administrative task list, required software permissions, and match you with a dedicated operational specialist.
            </p>

            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 active:scale-95"
              >
                <span>Request Virtual Assistant Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}