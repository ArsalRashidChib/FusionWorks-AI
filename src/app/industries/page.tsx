import Link from "next/link";
import {
  Server,
  HeartPulse,
  Landmark,
  ShoppingCart,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Layers,
} from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Server className="w-6 h-6 text-indigo-400" />,
      name: "Managed Service Providers (MSPs)",
      desc: "White-labeled 24/7 helpdesk, Tier 1–Tier 2 escalation handling, and seamless NOC integration to expand MSP client capacity.",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-indigo-400" />,
      name: "Healthcare IT",
      desc: "HIPAA-compliant remote technical support, EHR/EMR application troubleshooting, and urgent infrastructure uptime monitoring.",
    },
    {
      icon: <Landmark className="w-6 h-6 text-indigo-400" />,
      name: "Financial Services",
      desc: "Strict compliance workflows, zero-trust remote access, secure endpoint maintenance, and rapid incident response protocols.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-indigo-400" />,
      name: "Retail & E-Commerce",
      desc: "High-volume POS troubleshooting, payment gateway infrastructure support, and around-the-clock weekend incident triaging.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
      name: "Professional Services",
      desc: "Dedicated user onboarding, secure cloud identity management, and fast ticket turnaround for legal, accounting, and consulting firms.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-400" />,
      name: "Education",
      desc: "Remote desktop configuration, LMS connectivity support, and scalable off-hours technical help for faculty and students.",
    },
  ];

  return (
    <div className="space-y-24 py-16">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wide">
          <Layers className="w-4 h-4" /> Sector-Specific Expertise
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Industries We{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
            Support & Scale
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Specialized technical support workflows engineered to meet the unique compliance, operational, and uptime demands of diverse industries.
        </p>
      </section>

      {/* Industries Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700/80 hover:bg-zinc-900/70 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl w-fit group-hover:scale-105 transition-transform">
                  {ind.icon}
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">{ind.name}</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Callout Section */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-950 p-10 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need tailored support coverage for your sector?
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto leading-relaxed">
            Our teams adapt to your customized SLA requirements, security standards, and industry-specific software suites.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/25"
            >
              Discuss Your Industry Requirements <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}