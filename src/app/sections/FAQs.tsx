// src/app/sections/FAQs.tsx
"use client";

import { useState } from "react";
import { MessageCircleQuestion, Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will my clients know they are talking to an outsourced team?",
      answer: "Absolutely not. We operate as a 100% white-labeled extension of your MSP. We answer calls using your company name, reply from your email domain, and work directly inside your existing ticketing system. To your clients, we are simply your overnight or frontline engineering team.",
    },
    {
      question: "Am I locked into a restrictive long-term contract?",
      answer: "No. We believe in earning your business every single month. We offer flexible, zero long-term lock-in agreements. You can scale your coverage up or down based on your seasonal ticket volume and business growth without being penalized.",
    },
    {
      question: "Do I need to migrate to your PSA or RMM tools?",
      answer: "Not at all. We are tool-agnostic and seamlessly integrate into your existing stack. Whether you use ConnectWise, Autotask, HaloPSA, Datto, or NinjaOne, our engineers plug directly into your environment using strict, zero-trust access protocols.",
    },
    {
      question: "How do you handle data security and compliance (HIPAA, SOC 2)?",
      answer: "Security is our baseline. Our operational environment is aligned with SOC 2 Type II and HIPAA standards. We enforce strict multi-factor authentication, role-based access controls (RBAC), and 256-bit encrypted sessions to ensure your clients' PHI and sensitive data remain completely isolated and secure.",
    },
    {
      question: "How fast is the onboarding process?",
      answer: "Our standard deployment takes just 5 to 7 business days. We conduct a rapid operational audit, establish your escalation pathways, ingest your core SOPs, and run shadow sessions with your team to ensure a flawless, uninterrupted go-live.",
    },
    {
      question: "What happens if a ticket requires an on-site visit or high-level escalation?",
      answer: "If a ticket cannot be resolved remotely or falls outside our agreed-upon Tier 1/Tier 2 scope, we immediately escalate it back to your internal Tier 3 team or dispatch coordinator, complete with detailed diagnostic logs and a warm handoff.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-100 selection:bg-[#0052ff] selection:text-white">
      
      {/* 
        ========================================================================
        1. CRISP WHITE BACKGROUND & MESH
        ========================================================================
      */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-cyan-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0052ff]/10 bg-[#0052ff]/5 text-[#0052ff] text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm">
            <MessageCircleQuestion className="w-4 h-4 text-[#0052ff]" />
            <span>Common Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15]">
            Everything You Need to Know{" "}
            <br className="hidden sm:block" />
            <span className="text-[#0052ff] relative whitespace-nowrap">
              Before We Start
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        {/* Smooth Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className={`group rounded-2xl border transition-all duration-300 bg-white shadow-sm overflow-hidden ${
                  isOpen 
                    ? "border-[#0052ff]/30 shadow-[0_10px_30px_-10px_rgba(0,82,255,0.15)] ring-1 ring-[#0052ff]/10" 
                    : "border-slate-200 hover:border-[#0052ff]/20 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 sm:p-8 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-[#0052ff]" : "text-slate-900 group-hover:text-[#0052ff]"}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Plus/Minus Icon Wrapper */}
                  <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                    isOpen 
                      ? "bg-[#0052ff] border-[#0052ff] text-white rotate-180" 
                      : "bg-slate-50 border-slate-200 text-slate-400 group-hover:border-[#0052ff]/30 group-hover:text-[#0052ff]"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Content Wrapper */}
                <div 
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Link */}
        <div className="flex justify-center pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0052ff] transition-colors group"
          >
            <span>Have a specific operational question? Ask our team</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}