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
    { name: "ConnectWise", category: "PSA & RMM", icon: <Server className="w-5 h-5" />, color: "blue" },
    { name: "Datto", category: "BCDR & RMM", icon: <Database className="w-5 h-5" />, color: "cyan" },
    { name: "HaloPSA", category: "Service Desk", icon: <Layers className="w-5 h-5" />, color: "indigo" },
    { name: "Autotask", category: "PSA Platform", icon: <Cpu className="w-5 h-5" />, color: "emerald" },
    { name: "Kaseya", category: "IT Management", icon: <MonitorCheck className="w-5 h-5" />, color: "blue" },
    { name: "NinjaOne", category: "Endpoint Control", icon: <Terminal className="w-5 h-5" />, color: "cyan" },
    { name: "SentinelOne", category: "EDR Security", icon: <ShieldCheck className="w-5 h-5" />, color: "indigo" },
    { name: "Auvik", category: "Network Monitoring", icon: <Network className="w-5 h-5" />, color: "emerald" },
  ];

  const getColorStyles = (color: string) => {
    switch (color) {
      case "cyan":
        return "bg-cyan-50 text-cyan-600 border-cyan-100 group-hover/card:border-cyan-300";
      case "indigo":
        return "bg-indigo-50 text-indigo-600 border-indigo-100 group-hover/card:border-indigo-300";
      case "emerald":
        return "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover/card:border-emerald-300";
      case "blue":
      default:
        return "bg-blue-50 text-[#0052ff] border-blue-100 group-hover/card:border-blue-300";
    }
  };

  const renderToolCards = (keyPrefix: string) => (
    <div className="flex shrink-0 items-center gap-6 animate-continuous-marquee group-hover:[animation-play-state:paused]">
      {tools.map((tool, idx) => (
        <div
          key={`${keyPrefix}-${idx}`}
          className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-slate-200 bg-white hover:border-[#0052ff]/30 hover:shadow-[0_8px_20px_-8px_rgba(0,82,255,0.15)] hover:-translate-y-0.5 transition-all duration-300 min-w-[220px] select-none shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] group/card cursor-pointer"
        >
          <div className={`p-2.5 rounded-xl border transition-colors duration-300 shadow-sm ${getColorStyles(tool.color)}`}>
            {tool.icon}
          </div>
          <div className="text-left">
            <span className="block text-sm font-bold text-slate-900 tracking-tight">
              {tool.name}
            </span>
            <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
              {tool.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full border-y border-slate-100 bg-white py-16 overflow-hidden selection:bg-[#0052ff] selection:text-white">
      
      {/* Subtle Premium Background Mesh */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-24 bg-[#0052ff]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-10">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400">
          Seamlessly Compatible With Your Entire MSP & RMM Stack
        </p>
      </div>

      {/* Continuous Marquee Container */}
      <div className="relative z-10 w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group">
        <div className="flex gap-6 w-max">
          {renderToolCards("track-1")}
          {renderToolCards("track-2")}
        </div>
      </div>
    </section>
  );
}