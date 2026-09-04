// src/app/services/page.tsx
import Link from "next/link";
import {
  Headphones,
  Activity,
  MonitorCheck,
  TicketCheck,
  PhoneCall,
  TrendingUp,
  CalendarCheck,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Outsourced MSP & Enterprise IT Support Services | FusionWorks AI",
  description:
    "Explore our complete catalog of white-label helpdesk, 24/7 NOC monitoring, inbound/outbound support, B2B lead generation, appointment setting, and virtual administrative support.",
};

export default function ServicesPage() {
  const serviceList = [
    {
      slug: "helpdesk-support",
      icon: <Headphones className="w-6 h-6 text-[#0052ff]" />,
      title: "Helpdesk Support (Tier 1 & 2)",
      category: "Frontline IT Operations",
      summary: "White-label Tier 1 and Tier 2 remote desktop and application support operating directly inside your PSA.",
      details: [
        "End-user onboarding, offboarding & account provisioning",
        "Hardware, software & M365 suite troubleshooting",
        "Omnichannel triage across email, chat, and live phone lines",
        "Strict adherence to custom response and resolution SLAs",
      ],
    },
    {
      slug: "after-hours-monitoring",
      icon: <Activity className="w-6 h-6 text-[#0052ff]" />,
      title: "After-Hours & NOC Monitoring",
      category: "24/7 Surveillance",
      summary: "Round-the-clock infrastructure telemetry, alert triage, and emergency dispatch while your internal engineers rest.",
      details: [
        "Continuous server, network, and firewall health tracking",
        "Intelligent alert suppression and noise reduction",
        "Overnight and weekend rapid emergency escalations",
        "Automated backup checks and server failover drills",
      ],
    },
    {
      slug: "remote-troubleshooting",
      icon: <MonitorCheck className="w-6 h-6 text-[#0052ff]" />,
      title: "Remote Troubleshooting",
      category: "Tier 2 & 3 Remediation",
      summary: "Audited remote desktop sessions resolving complex cloud, network, and identity management issues.",
      details: [
        "Active Directory & Azure Entra ID credential fixes",
        "VPN tunnel configuration and routing diagnostics",
        "Endpoint containment and security remediation",
        "Root cause logging for recurring ticket queues",
      ],
    },
    {
      slug: "ticket-management",
      icon: <TicketCheck className="w-6 h-6 text-[#0052ff]" />,
      title: "Ticket Management & Dispatch",
      category: "Workflow Automation",
      summary: "Seamless ticket prioritization, escalation handling, and SLA enforcement directly via your PSA/RMM tools.",
      details: [
        "Deep ConnectWise, Datto, Autotask, and HaloPSA integration",
        "Structured multi-tier escalation pathways",
        "Real-time shift handoffs and audit-ready logging",
        "End-of-month SLA metrics and resolution reporting",
      ],
    },
    {
      slug: "customer-support",
      icon: <PhoneCall className="w-6 h-6 text-[#0052ff]" />,
      title: "Inbound & Outbound Customer Support",
      category: "Omnichannel BPO",
      summary: "Dedicated bilingual support teams delivering high-touch customer service across voice, live chat, and ticketing.",
      details: [
        "24/7 omnichannel customer assistance and inquiries",
        "Customer issue logging and escalation management",
        "Quality assurance monitoring with 100% call recording",
        "Customized corporate script and brand alignment",
      ],
    },
    {
      slug: "lead-generation",
      icon: <TrendingUp className="w-6 h-6 text-[#0052ff]" />,
      title: "Inbound & Outbound Lead Generation",
      category: "Growth & Retention",
      summary: "Targeted retail acquisition campaigns combined with high-touch client retention and account expansion pipelines.",
      details: [
        "B2B cold outbound calling and warm inbound qualification",
        "Retail pipeline expansion and churn reduction campaigns",
        "Retention portfolio outreach and account renewal tracking",
        "CRM data cleansing and enriched lead scoring",
      ],
    },
    {
      slug: "appointment-setting",
      icon: <CalendarCheck className="w-6 h-6 text-[#0052ff]" />,
      title: "Appointment Setting",
      category: "Sales Pipeline Acceleration",
      summary: "High-conversion meeting scheduling pairing qualified decision-makers directly with your executive sales reps.",
      details: [
        "Direct calendar booking into Google Calendar & Outlook",
        "Strict ICP vetting and decision-maker validation",
        "Pre-meeting briefing documentation and stakeholder notes",
        "Automated meeting reminders reducing no-show rates",
      ],
    },
    {
      slug: "virtual-assistant",
      icon: <UserCheck className="w-6 h-6 text-[#0052ff]" />,
      title: "Virtual & Administrative Assistant",
      category: "Executive Operations",
      summary: "Specialized virtual assistants handling back-office admin tasks, calendar management, and operational workflows.",
      details: [
        "Executive calendar, travel, and inbox management",
        "Data entry, invoice processing, and billing reconciliation",
        "CRM and ERP database hygiene and hygiene audits",
        "Custom administrative reporting and meeting minutes",
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 selection:bg-[#0052ff] selection:text-white py-16 sm:py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#0052ff]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <section className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/20 bg-[#0052ff]/10 text-[#0052ff] text-xs font-semibold tracking-wide shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
            <span>End-to-End MSP & Business Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
            Comprehensive Outsourced{" "}
            <span className="text-[#0052ff]">
              IT & Growth Services
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
Tailored Solutions to Fuel Your GrowthWe engineer custom business process outsourcing (BPO) solutions that combine automated speed with human intelligence. Whatever your business needs to scale, we have a specialized team ready to deliver.          </p>
        </section>

        {/* Services Grid (8 Services) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          {serviceList.map((svc) => (
            <div
              key={svc.slug}
              className="p-8 sm:p-10 rounded-3xl border border-zinc-200 bg-white hover:border-[#0052ff]/50 hover:shadow-xl hover:shadow-[#0052ff]/10 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-sm hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-[#0052ff]/10 border border-[#0052ff]/20 rounded-2xl w-fit text-[#0052ff]">
                    {svc.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#0052ff] bg-[#0052ff]/10 border border-[#0052ff]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {svc.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-zinc-950 tracking-tight pt-2">
                  {svc.title}
                </h2>
                
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {svc.summary}
                </p>

                <ul className="space-y-2.5 pt-4 border-t border-zinc-100 text-xs sm:text-sm text-zinc-600">
                  {svc.details.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0052ff] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <div className="pt-6 border-t border-zinc-100">
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-zinc-800 group-hover:text-[#0052ff] transition-colors"
                >
                  <span>Explore service specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Scoping CTA Card */}
        <section className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[#0052ff]/20 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/30 p-10 sm:p-12 text-center space-y-6 shadow-xl shadow-[#0052ff]/5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              <Sparkles className="w-4 h-4" /> Ready to Scale
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Need a Custom Multi-Tier SLA or Hybrid Team?
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Schedule a technical scoping session to connect your toolchain, define escalation matrices, and launch within 5–7 business days.
            </p>

            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 active:scale-95"
              >
                <span>Request Custom Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}