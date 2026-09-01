// src/app/about/page.tsx
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Users,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "About Us | White-Label MSP Helpdesk & NOC Partner | FusionWorks AI",
  description:
    "FusionWorks AI provides white-label 24/7 outsourced IT helpdesk, Tier 1 & Tier 2 support, NOC monitoring, and PSA/RMM integrations for scaling Managed Service Providers.",
  keywords: [
    "Outsourced MSP Helpdesk",
    "White Label IT Support",
    "24/7 NOC Monitoring",
    "Tier 1 Tier 2 Helpdesk",
    "After Hours IT Coverage",
    "MSP Staff Augmentation",
    "PSA RMM Integration",
  ],
};

export default function AboutPage() {
  const highlights = [
    {
      icon: <Layers className="w-5 h-5 text-[#0052ff]" />,
      title: "Native MSP Toolstack Integration",
      desc: "Zero-friction pairing with ConnectWise, Datto, HaloPSA, Autotask, Kaseya, and NinjaOne. We operate natively inside your ticketing queues with SOC 2-aligned zero-trust access controls.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-[#0052ff]" />,
      title: "Overhead Reduction & Margin Growth",
      desc: "Eliminate the recurring payroll, benefits, and recruitment overhead of sustaining an internal overnight engineering shift while safeguarding 40%+ gross service margins.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#0052ff]" />,
      title: "Certified Tier 1–Tier 3 Technicians",
      desc: "Strictly vetted support engineers certified across Microsoft 365, CompTIA, Azure Entra ID, and major cloud infrastructures answering calls under your brand identity.",
    },
  ];

  const operationalStats = [
    { metric: "24/7/365", label: "Continuous MSP Coverage" },
    { metric: "<15 Min", label: "Average SLA First Response" },
    { metric: "85%+", label: "First-Contact Resolution Rate" },
    { metric: "100%", label: "White-Labeled Deliverables" },
  ];

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 selection:bg-[#0052ff] selection:text-white py-16 sm:py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#0052ff]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Header (SEO-Optimized H1) */}
        <section className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/20 bg-[#0052ff]/10 text-[#0052ff] text-xs font-semibold tracking-wide shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
            <span>Enterprise White-Label Support</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
            Empowering MSPs With Reliable,{" "}
            <span className="text-[#0052ff]">
              Scalable 24/7 Support
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
            FusionWorks AI delivers white-label outsourced helpdesk, NOC monitoring, and after-hours IT coverage engineered exclusively to help Managed Service Providers scale capacity without operational burnout.
          </p>
        </section>

        {/* Operational Metrics Bar */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {operationalStats.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-zinc-200 bg-white text-center space-y-1 shadow-sm"
            >
              <div className="text-2xl sm:text-4xl font-extrabold text-[#0052ff] tracking-tight font-mono">
                {item.metric}
              </div>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </section>

        {/* Main Mission & Vision Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Who We Are Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-zinc-200 bg-white flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-4">
              <div className="p-3 bg-[#0052ff]/10 border border-[#0052ff]/20 text-[#0052ff] rounded-2xl w-fit">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                Who We Are
              </h2>
              <p className="text-zinc-700 text-sm sm:text-base leading-relaxed">
                FusionWorks AI acts as a transparent, seamless operational extension for Managed Service Providers. We handle frontline ticket queues, after-hours escalations, and automated infrastructure surveillance directly within your PSA/RMM systems.
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                By taking on labor-intensive Tier 1 end-user support and overnight NOC alerts, we free your senior engineering teams to focus on high-margin project delivery, vCIO strategy, and strategic account growth.
              </p>
            </div>

            <ul className="space-y-3 pt-6 border-t border-zinc-100 text-xs sm:text-sm text-zinc-700">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                <span>Strict non-disclosure agreements with 100% white-label delivery</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                <span>Dedicated Tier 1, Tier 2, and Tier 3 certified remote technicians</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                <span>Transparent SLA tracking with live shift handoff summaries</span>
              </li>
            </ul>
          </div>

          {/* Our Vision Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl border border-[#0052ff]/20 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/30 flex flex-col justify-between space-y-8 shadow-xl shadow-[#0052ff]/5">
            <div className="space-y-4">
              <div className="p-3 bg-[#0052ff]/10 border border-[#0052ff]/20 text-[#0052ff] rounded-2xl w-fit">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                Our Vision
              </h2>
              <p className="text-zinc-800 text-base font-semibold leading-relaxed">
                To become the most dependable and secure outsourced technical partner for growth-focused MSPs across North America and Europe.
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                We believe exceptional client retention requires unwavering availability. Our mission is providing elite support infrastructure that scales effortlessly alongside your endpoint volume.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-200">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0052ff] hover:text-[#0045d8] transition-colors group"
              >
                <span>Partner with our engineering team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </section>

        {/* Value Pillars */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              <Sparkles className="w-3.5 h-3.5" /> Architectural Pillars
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
              Designed for High-Velocity MSP Operations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-zinc-200 bg-white hover:border-[#0052ff]/50 hover:shadow-xl hover:shadow-[#0052ff]/10 transition-all duration-300 space-y-4 shadow-sm"
              >
                <div className="p-3 rounded-2xl bg-[#0052ff]/10 border border-[#0052ff]/20 w-fit text-[#0052ff]">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-zinc-950 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}