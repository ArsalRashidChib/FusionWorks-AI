import Link from "next/link";
import { ShieldCheck, Target, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const highlights = [
    {
      title: "MSP Specialization",
      desc: "Purpose-built IT helpdesk solutions tailored exclusively to match MSP workflows, ticketing tools, and SLA benchmarks.",
    },
    {
      title: "Cost & Scale Optimization",
      desc: "Scale Tier 1 & Tier 2 support capacity instantly without the high overhead of full-time internal hiring.",
    },
    {
      title: "Vetted IT Professionals",
      desc: "A dedicated team of certified engineers equipped to handle mission-critical systems and user troubleshooting.",
    },
  ];

  return (
    <div className="space-y-24 py-16">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wide">
          <ShieldCheck className="w-4 h-4" /> About Fusion Works AI
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Empowering MSPs With Reliable,{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
            Scalable Support
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          We bridge the operational gap for Managed Service Providers by delivering seamless after-hours coverage, reducing overhead, and safeguarding client trust.
        </p>
      </section>

      {/* Main Mission & Team Section */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div className="p-8 sm:p-10 rounded-3xl border border-zinc-800 bg-zinc-900/40 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl w-fit">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Who We Are</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Fusion Works AI specializes in outsourced IT support and helpdesk solutions engineered directly for Managed Service Providers. Our primary mission is helping MSPs deliver seamless after-hours support while eliminating overhead bottlenecks and elevating customer satisfaction.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Our engineering team comprises seasoned IT professionals committed to providing reliable, responsive, and horizontally scalable technical support services round the clock.
            </p>
          </div>

          <ul className="space-y-2 pt-2 border-t border-zinc-800/80 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Dedicated Tier 1 & Tier 2 Technicians
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Transparent SLA & Ticket Reporting
            </li>
          </ul>
        </div>

        {/* Vision Card */}
        <div className="p-8 sm:p-10 rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/30 to-zinc-900/50 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-zinc-300 text-base leading-relaxed">
              To become the most trusted offshore and after-hours support partner for Managed Service Providers worldwide.
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We envision a future where MSPs of all sizes can effortlessly expand their coverage to 24/7 without risking burnout, sacrificing quality, or inflating payroll.
            </p>
          </div>

          <div className="pt-6 border-t border-indigo-500/20">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-white transition-colors"
            >
              Partner with our team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}