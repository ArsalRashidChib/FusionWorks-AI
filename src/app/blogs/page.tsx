// src/app/blogs/page.tsx
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Bell,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "Blog & Insights | FusionWorks AI",
  description:
    "Expert articles, NOC best practices, helpdesk strategies, and scaling guides for MSPs. Coming soon to FusionWorks AI.",
};

export default function BlogPage() {
  const upcomingTopics = [
    {
      title: "24/7 SLA Engineering",
      desc: "Architecting zero-downtime escalation matrices for scaling MSPs.",
    },
    {
      title: "PSA & RMM Optimization",
      desc: "Native queue dispatch strategies for ConnectWise, Datto & HaloPSA.",
    },
    {
      title: "Overhead Margin Expansion",
      desc: "How white-label helpdesks protect 40%+ gross service margins.",
    },
  ];

  return (
    <main className="relative min-h-[85vh] flex items-center justify-center bg-white text-zinc-900 selection:bg-[#0052ff] selection:text-white py-16 sm:py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#0052ff]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Header Badge & Title */}
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0052ff]/20 bg-[#0052ff]/10 text-[#0052ff] text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0052ff]" />
            <span>MSP Knowledge Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.15]">
            Our First Blog Post is{" "}
            <span className="text-[#0052ff]">
              Coming Soon
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
            We are currently crafting in-depth playbooks, SLA blueprints, and operational guides engineered to help Managed Service Providers scale without burnout.
          </p>
        </div>

        {/* Sneak Peek Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
          {upcomingTopics.map((topic, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/60 shadow-sm space-y-2 hover:border-[#0052ff]/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#0052ff] uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" /> Upcoming Topic
              </div>
              <h2 className="text-base font-bold text-zinc-950 tracking-tight">
                {topic.title}
              </h2>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-95 text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 hover:shadow-[#0052ff]/40"
          >
            <span>Request a Custom Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all hover:border-[#0052ff]/40 active:scale-95 shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-[#0052ff]" />
            <span>Explore All Services</span>
          </Link>
        </div>

      </div>
    </main>
  );
}