import Link from "next/link";
import {
  Headphones,
  Activity,
  MonitorCheck,
  TicketCheck,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export default function ServicesPage() {
  const serviceList = [
    {
      icon: <Headphones className="w-6 h-6 text-indigo-400" />,
      title: "Helpdesk Support",
      summary: "Tier 1 and Tier 2 helpdesk support for MSP clients and end users.",
      details: [
        "End-user onboarding and account provisioning",
        "Hardware and software issue remediation",
        "Multi-channel support (Chat, Email, Voice)",
        "Strict adherence to your branded response times",
      ],
    },
    {
      icon: <Activity className="w-6 h-6 text-indigo-400" />,
      title: "After-Hours Monitoring",
      summary: "24/7 monitoring and rapid incident response to minimize downtime.",
      details: [
        "Continuous infrastructure and network surveillance",
        "Proactive alert filtering and automated triaging",
        "Overnight and weekend rapid response coverage",
        "Critical downtime mitigation and logging",
      ],
    },
    {
      icon: <MonitorCheck className="w-6 h-6 text-indigo-400" />,
      title: "Remote Troubleshooting",
      summary: "Secure remote support for desktops, servers, and cloud environments.",
      details: [
        "Secure remote session execution and diagnostics",
        "Virtual machine and cloud service remediation",
        "Server patch management and stability checks",
        "Firewall and network access maintenance",
      ],
    },
    {
      icon: <TicketCheck className="w-6 h-6 text-indigo-400" />,
      title: "Ticket Management",
      summary: "Efficient ticket handling and escalation management integrated into MSP workflows.",
      details: [
        "Direct PSA/RMM tool integration (ConnectWise, Autotask, HaloPSA)",
        "Structured Tier 1 to Tier 3 escalation pathways",
        "Detailed documentation and ticket lifecycle updates",
        "Customizable SLA tracking and metrics reporting",
      ],
    },
  ];

  return (
    <div className="space-y-24 py-16">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wide">
          <ShieldAlert className="w-4 h-4" /> End-to-End MSP Delivery
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Comprehensive Outsourced{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
            IT Services
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          High-performance support tiers engineered to seamlessly plug into your existing toolchain and maintain client trust 24/7.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceList.map((svc, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700/80 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl w-fit">
                  {svc.icon}
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">{svc.title}</h2>
                <p className="text-zinc-300 text-sm leading-relaxed">{svc.summary}</p>

                <ul className="space-y-2.5 pt-4 border-t border-zinc-800/80 text-sm text-zinc-400">
                  {svc.details.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-10 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to integrate custom Tier 1 & Tier 2 workflows?
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Schedule a scoping call to connect your PSA/RMM systems and configure your dedicated support coverage.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/25"
            >
              Request Service Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}