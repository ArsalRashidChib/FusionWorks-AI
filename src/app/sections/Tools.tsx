// src/app/sections/TrustTools.tsx
"use client";

import {
  Server,
  Layers,
  Database,
  Cpu,
  MonitorCheck,
  ShieldCheck,
  Network,
  Terminal,
} from "lucide-react";

export default function TrustTools() {
  const tools = [
    { name: "ConnectWise", category: "PSA & RMM", icon: <Server className="w-5 h-5" /> },
    { name: "Datto", category: "BCDR & RMM", icon: <Database className="w-5 h-5" /> },
    { name: "HaloPSA", category: "Service Desk", icon: <Layers className="w-5 h-5" /> },
    { name: "Autotask", category: "PSA Platform", icon: <Cpu className="w-5 h-5" /> },
    { name: "Kaseya", category: "IT Management", icon: <MonitorCheck className="w-5 h-5" /> },
    { name: "NinjaOne", category: "Endpoint Control", icon: <Terminal className="w-5 h-5" /> },
    { name: "SentinelOne", category: "EDR Security", icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Auvik", category: "Network Monitoring", icon: <Network className="w-5 h-5" /> },
  ];

  const renderToolCards = (keyPrefix: string) => (
    <div className="flex shrink-0 items-center gap-6 animate-continuous-marquee">
      {tools.map((tool, idx) => (
        <div
          key={`${keyPrefix}-${idx}`}
          className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border border-white/[0.08] bg-zinc-950/80 backdrop-blur-md hover:border-[#0052ff]/50 hover:bg-zinc-900/90 transition-all duration-300 min-w-[210px] select-none shadow-sm group/card"
        >
          <div className="p-2 rounded-xl bg-[#0052ff]/10 text-[#0052ff] border border-[#0052ff]/20 group-hover/card:bg-[#0052ff] group-hover/card:text-white transition-colors duration-300">
            {tool.icon}
          </div>
          <div className="text-left">
            <span className="block text-sm font-bold text-white tracking-tight">
              {tool.name}
            </span>
            <span className="block text-[11px] font-medium text-zinc-400">
              {tool.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full border-y border-white/[0.08] bg-black py-12 overflow-hidden selection:bg-[#0052ff] selection:text-white">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-24 bg-[#0052ff]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-8 text-center relative z-10">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Seamlessly Compatible With Your Entire MSP & RMM Stack
        </p>
      </div>

      {/* Continuous Marquee Container */}
      <div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group">
        <div className="flex gap-6 w-max">
          {renderToolCards("track-1")}
          {renderToolCards("track-2")}
        </div>
      </div>
    </section>
  );
}