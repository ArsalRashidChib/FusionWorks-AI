// src/app/sections/core-pillars.tsx
import Link from "next/link";
import {
  Clock,
  Cpu,
  Users2,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function CorePillars() {
  const pillars = [
    {
      icon: <Clock className="w-6 h-6 text-[#0052ff]" />,
      title: "24/7/365 Always-On Support",
      badge: "Zero Gaps",
      desc: "Your customers never sleep, and neither do we. We provide around-the-clock availability so you never miss an inquiry.",
      detail: "100% SLA Availability",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#0052ff]" />,
      title: "Intelligent Automation",
      badge: "Instant Resolution",
      desc: "Our AI-powered workflows sort, route, and resolve simple inquiries instantly to keep response times under minutes.",
      detail: "<15 Min First Touch",
    },
    {
      icon: <Users2 className="w-6 h-6 text-[#0052ff]" />,
      title: "Dedicated Human Experts",
      badge: "Empathetic Care",
      desc: "Complex, sensitive, or high-value tasks are always handled by skilled, empathetic human specialists operating under your brand.",
      detail: "100% White-Labeled",
    },
    {
      icon: <Layers className="w-6 h-6 text-[#0052ff]" />,
      title: "Omnichannel Mastery",
      badge: "Unified Journey",
      desc: "We unify your voice, live chat, email, text, and social media channels into one continuous, friction-free customer journey.",
      detail: "Omnichannel Integration",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-white text-zinc-900 overflow-hidden border-t border-zinc-200 selection:bg-[#0052ff] selection:text-white">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0052ff]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/20 bg-[#0052ff]/10 text-[#0052ff] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
            <span>Operational Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            Our Core{" "}
            <span className="text-[#0052ff]">
              Pillars
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Scalable, enterprise-grade frontline and technical support engineered to elevate customer satisfaction and maximize gross margins.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-zinc-200 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-[#0052ff]/50 hover:shadow-xl hover:shadow-[#0052ff]/10 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-[#0052ff]/10 border border-[#0052ff]/20 text-[#0052ff]">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#0052ff] bg-[#0052ff]/10 border border-[#0052ff]/20 px-2.5 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-950 tracking-tight pt-2">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Seamless Outsourcing Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-[#0052ff]/20 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/30 p-8 sm:p-12 lg:p-14 shadow-xl shadow-[#0052ff]/5">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              Seamless Outsourcing • Zero Overhead
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Scale Your Frontline Operations Without the Staffing Burden
            </h3>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
              Building an internal, round-the-clock support operation is expensive and exhausting. Partnering with us allows you to instantly scale your customer-facing operations without the burden of hiring, training, or managing infrastructure. We seamlessly plug right into your existing CRM, functioning as an authentic, highly responsive extension of your brand.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-95 text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 hover:shadow-[#0052ff]/40"
              >
                <span>Partner With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all hover:border-[#0052ff]/40 active:scale-95 shadow-sm"
              >
                <span>Explore Capabilities</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}