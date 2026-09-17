// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Services", href: "/services" },
    { name: "Target Industries", href: "/industries" },
    { name: "Contact & Scoping", href: "/contact" },
  ];

  const mspServices = [
    { name: "24/7/365 Helpdesk Support", href: "/services/helpdesk-support" },
    { name: "NOC Monitoring & Triage", href: "/services/after-hours-monitoring" },
    { name: "Remote Troubleshooting", href: "/services/remote-troubleshooting" },
    { name: "Ticket Management & PSA", href: "/services/ticket-management" },
    { name: "Customer Support Outsourcing", href: "/services/customer-support" },
  ];

  return (
    <footer className="relative border-t border-slate-100 bg-white text-slate-600 overflow-hidden selection:bg-[#0052ff] selection:text-white">
      
      {/* Subtle Premium Background Mesh & Glow */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-32 bg-[#0052ff]/5 blur-[130px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Overview (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0">
                <Image
                  src="/Logo-Dark.png"
                  alt="FusionWorks AI"
                  fill
                  priority
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-950">
                  FUSION<span className="text-[#0052ff]">WORKS</span>
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md font-medium">
              Enterprise-grade outsourced helpdesk, 24/7/365 NOC surveillance, and after-hours IT operations engineered exclusively for scaling Managed Service Providers.
            </p>

            {/* Operational Guarantees */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-[#0052ff] group-hover:border-[#0052ff]/30 transition-colors">
                  <Clock className="w-4 h-4" />
                </div>
                <span>24/7/365 Active Engineering Standby</span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-[#0052ff] group-hover:border-[#0052ff]/30 transition-colors">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>100% White-Labeled & NDA Protected</span>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 text-[#0052ff] group-hover:border-[#0052ff]/30 transition-colors">
                  <Zap className="w-4 h-4" />
                </div>
                <span>
                  &lt;15 Mins Response Time{" "}
                  <span className="text-slate-400 font-medium ml-1 tracking-wide uppercase text-[10px]">
                    * If Required
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4 pt-2 lg:pt-0">
            <h4 className="text-slate-950 text-sm font-bold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-[#0052ff] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="text-slate-300 group-hover:text-[#0052ff] transition-colors">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: MSP Solutions (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4 pt-2 lg:pt-0">
            <h4 className="text-slate-950 text-sm font-bold uppercase tracking-wider">
              MSP Solutions
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {mspServices.map((svc) => (
                <li key={svc.name}>
                  <Link
                    href={svc.href}
                    className="text-slate-600 hover:text-[#0052ff] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="text-slate-300 group-hover:text-[#0052ff] transition-colors">›</span>
                    <span>{svc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Action (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4 pt-2 lg:pt-0">
            <h4 className="text-slate-950 text-sm font-bold uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-sm">
              <a
                href="tel:9492873678"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 hover:text-slate-950 hover:border-[#0052ff]/30 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="p-1.5 rounded-lg bg-white border border-slate-100 group-hover:border-[#0052ff]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                </div>
                <span className="font-bold text-xs sm:text-sm">(949) 287-3678</span>
              </a>

              <a
                href="mailto:fusionworksai@outlook.com"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-700 hover:text-slate-950 hover:border-[#0052ff]/30 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="p-1.5 rounded-lg bg-white border border-slate-100 group-hover:border-[#0052ff]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                </div>
                <span className="font-bold text-xs sm:text-sm truncate">fusionworksai@outlook.com</span>
              </a>
            </div>

            <div className="pt-3">
              <Link
                href="/contact"
                className="w-full py-4 px-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-[0_8px_20px_-6px_rgba(0,82,255,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(0,82,255,0.5)] active:scale-[0.98] transition-all group"
              >
                <span>Request SLA Proposal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div>
            © {new Date().getFullYear()} FusionWorks AI. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#0052ff] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/terms" className="hover:text-[#0052ff] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}