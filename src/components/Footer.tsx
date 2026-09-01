// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
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
    <footer className="relative border-t border-zinc-200 bg-white text-zinc-600 overflow-hidden selection:bg-[#0052ff] selection:text-white">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-32 bg-[#0052ff]/5 blur-[130px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-12">
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
                <span className="text-lg sm:text-xl font-black tracking-tight text-zinc-900 ">
                  FUSION<span className="text-[#0052ff]">WORKS</span>
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-600 leading-relaxed max-w-md">
              Enterprise-grade outsourced helpdesk, 24/7/365 NOC surveillance, and after-hours IT operations engineered exclusively for scaling Managed Service Providers.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-zinc-700">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 text-[#0052ff]">
                  <Clock className="w-4 h-4" />
                </div>
                <span>24/7/365 Active Engineering Standby</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 text-[#0052ff]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>100% White-Labeled & NDA Protected</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-zinc-950 text-sm font-bold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 hover:text-[#0052ff] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="text-zinc-400 group-hover:text-[#0052ff] transition-colors">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: MSP Solutions (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-zinc-950 text-sm font-bold uppercase tracking-wider">
              MSP Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {mspServices.map((svc) => (
                <li key={svc.name}>
                  <Link
                    href={svc.href}
                    className="text-zinc-600 hover:text-[#0052ff] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="text-zinc-400 group-hover:text-[#0052ff] transition-colors">›</span>
                    <span>{svc.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Action (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-zinc-950 text-sm font-bold uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-sm">
              <a
                href="tel:1234567890"
                className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200 bg-zinc-50/60 text-zinc-700 hover:text-zinc-950 hover:border-[#0052ff]/50 transition-all"
              >
                <Phone className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">(123) 456-7890</span>
              </a>

              <a
                href="mailto:info@fusionworksai.com"
                className="flex items-center gap-3 p-3 rounded-xl border border-zinc-200 bg-zinc-50/60 text-zinc-700 hover:text-zinc-950 hover:border-[#0052ff]/50 transition-all"
              >
                <Mail className="w-4 h-4 text-[#0052ff] flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">info@fusionworksai.com</span>
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full py-3 px-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#0052ff]/20 active:scale-95 transition-all"
              >
                <span>Request SLA Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} FusionWorks AI. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-zinc-600">
            <Link href="/privacy-policy" className="hover:text-[#0052ff] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#0052ff] transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#0052ff] transition-colors">
              Service Level Agreement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}