import Link from "next/link";
import {
  Clock,
  Zap,
  Users2,
  Headphones,
  Activity,
  Moon,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  const valueProps = [
    {
      icon: <Clock className="w-6 h-6 text-indigo-400" />,
      title: "24/7 Coverage",
      desc: "Round-the-clock support coverage for nights, weekends, and holidays so your client systems never sleep.",
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-400" />,
      title: "Fast Ticket Resolution",
      desc: "Efficient issue handling with rapid escalation paths, structured SLAs, and streamlined resolution workflows.",
    },
    {
      icon: <Users2 className="w-6 h-6 text-indigo-400" />,
      title: "Remote IT Experts",
      desc: "Certified professionals providing remote support across hybrid cloud and mission-critical infrastructure environments.",
    },
  ];

  const serviceCapabilities = [
    {
      icon: <Headphones className="w-5 h-5 text-indigo-400" />,
      title: "Helpdesk Support",
      desc: "Seamless Tier 1 and Tier 2 support deeply integrated into your ticketing tools and standard operating procedures.",
    },
    {
      icon: <Activity className="w-5 h-5 text-indigo-400" />,
      title: "NOC Monitoring",
      desc: "Proactive network monitoring and rapid alert response designed to safeguard uptime and business continuity.",
    },
    {
      icon: <Moon className="w-5 h-5 text-indigo-400" />,
      title: "After-Hours Support",
      desc: "Extend your support availability overnight and on holidays without taking on the overhead of internal staffing.",
    },
  ];

  return (
    <div className="space-y-28 py-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wide">
          <ShieldCheck className="w-4 h-4" /> Built Exclusively for Modern MSPs
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
          24/7 Helpdesk Outsourcing{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
            for Scaling MSPs
          </span>
        </h1>

        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Fusion Works AI delivers reliable after-hours IT support, remote helpdesk services, NOC monitoring, and ticket management solutions for Managed Service Providers.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/25"
          >
            Schedule Consultation <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 font-medium transition-all"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Why MSPs Choose Us */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">Why MSPs Choose Us</h2>
          <p className="text-zinc-400 text-sm">
            Scalable outsourced IT support solutions built to protect your brand reputation and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all group"
            >
              <div className="p-3 bg-zinc-800/80 rounded-xl w-fit mb-6 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-900/30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCapabilities.map((cap, idx) => (
              <div key={idx} className="space-y-3 p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cap.title}</h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed pl-11">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 to-zinc-900/80 p-10 sm:p-12 text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Need Reliable Off-Hours IT Support?
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              Partner with Fusion Works AI and deliver enterprise-level support around the clock without inflating operational headcount.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/30"
            >
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}