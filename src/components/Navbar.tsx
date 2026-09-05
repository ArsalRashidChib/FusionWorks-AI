// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  Headphones,
  Activity,
  MonitorCheck,
  TicketCheck,
  PhoneCall,
  TrendingUp,
  CalendarCheck,
  UserCheck,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const serviceDropdown = [
    {
      name: "Helpdesk Support (Tier 1 & Tier 2)",
      href: "/services/helpdesk-support",
      desc: "White-label 24/7 end-user IT support",
      icon: <Headphones className="w-4 h-4 text-[#0052ff]" />,
    },
    {
      name: "After-Hours & NOC Monitoring",
      href: "/services/after-hours-monitoring",
      desc: "Proactive telemetry & alert triage",
      icon: <Activity className="w-4 h-4 text-[#0052ff]" />,
    },
    {
      name: "Remote Troubleshooting",
      href: "/services/remote-troubleshooting",
      desc: "Audited Tier 2/3 remote incident remediation",
      icon: <MonitorCheck className="w-4 h-4 text-[#0052ff]" />,
    },
    {
      name: "Ticket Management & PSA Integration",
      href: "/services/ticket-management",
      desc: "ConnectWise, Datto, Autotask & HaloPSA dispatch",
      icon: <TicketCheck className="w-4 h-4 text-[#0052ff]" />,
    },
    {
      name: "Inbound & Outbound Customer Support",
      href: "/services/customer-support",
      desc: "Omnichannel customer voice & chat support",
      icon: <PhoneCall className="w-4 h-4 text-[#0052ff]" />,
    },
    {
      name: "Inbound & Outbound Lead Generation",
      href: "/services/lead-generation",
      desc: "Retail acquisition & retention portfolio outreach",
      icon: <TrendingUp className="w-4 h-4 text-[#0052ff]" />,
    },
    {
      name: "Appointment Setting",
      href: "/services/appointment-setting",
      desc: "Direct calendar booking for B2B executives",
      icon: <CalendarCheck className="w-4 h-4 text-[#0052ff]" />,
    },
    {
      name: "Virtual & Administrative Assistant",
      href: "/services/virtual-assistant",
      desc: "Back-office operations & executive management",
      icon: <UserCheck className="w-4 h-4 text-[#0052ff]" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200 text-zinc-900 shadow-md">
      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Clean Logo Brand */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0">
            <Image
              src="/Logo-Dark.png"
              alt="FusionWorks AI"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-lg sm:text-xl font-black tracking-tight text-zinc-900 ">
              FUSION<span className="text-[#0052ff]">WORKS</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-zinc-600">
          <Link
            href="/"
            className={`transition-colors hover:text-[#0052ff] ${
              pathname === "/" ? "text-[#0052ff] font-bold" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`transition-colors hover:text-[#0052ff] ${
              pathname === "/about" ? "text-[#0052ff] font-bold" : ""
            }`}
          >
            About Us
          </Link>

          {/* Enhanced Services Mega-Dropdown */}
          <div className="relative group py-6">
            <Link
              href="/services"
              className={`flex items-center gap-1 transition-colors hover:text-[#0052ff] ${
                pathname.startsWith("/services") ? "text-[#0052ff] font-bold" : ""
              }`}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-[#0052ff] group-hover:rotate-180 transition-transform duration-200" />
            </Link>

            {/* Dropdown Menu Box */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white border border-zinc-200 shadow-2xl rounded-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -translate-y-2 group-hover:translate-y-0 grid grid-cols-2 gap-2">
              {serviceDropdown.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 group/item transition-colors border border-transparent hover:border-[#0052ff]/20"
                >
                  <div className="p-2 rounded-lg bg-blue-50 hover/item:bg-[#0052ff] text-[#0052ff] group-hover/item:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-zinc-900 group-hover/item:text-[#0052ff] transition-colors leading-snug">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                </Link>
              ))}

              <div className="col-span-2 pt-3 mt-1 border-t border-zinc-100 flex items-center justify-between px-2 text-xs">
                <span className="text-zinc-500 font-medium">Need a specialized hybrid scope?</span>
                <Link
                  href="/services"
                  className="font-bold text-[#0052ff] hover:underline inline-flex items-center gap-1"
                >
                  View full catalog <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/industries"
            className={`transition-colors hover:text-[#0052ff] ${
              pathname === "/industries" ? "text-[#0052ff] font-bold" : ""
            }`}
          >
            Industries
          </Link>
          <Link
            href="/blogs"
            className={`transition-colors hover:text-[#0052ff] ${
              pathname === "/blogs" ? "text-[#0052ff] font-bold" : ""
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/contact"
            className={`transition-colors hover:text-[#0052ff] ${
              pathname === "/contact" ? "text-[#0052ff] font-bold" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white text-sm font-bold tracking-wide transition-all shadow-lg shadow-[#0052ff]/20 hover:shadow-[#0052ff]/30 flex items-center gap-2 active:scale-95"
          >
            <span>Request Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-zinc-900" /> : <Menu className="w-6 h-6 text-zinc-900" />}
        </button>
      </div>

      {/* Mobile Responsive Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-6 py-6 space-y-4 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-zinc-600 hover:text-[#0052ff]"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-zinc-600 hover:text-[#0052ff]"
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-zinc-600 hover:text-[#0052ff]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#0052ff]" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="pl-3 py-2 space-y-2 border-l-2 border-zinc-200 my-1">
                  {serviceDropdown.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2.5 text-xs font-medium text-zinc-600 hover:text-[#0052ff] py-1.5"
                    >
                      <div className="p-1 rounded bg-blue-50 text-[#0052ff]">
                        {sub.icon}
                      </div>
                      <span>{sub.name}</span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setIsOpen(false)}
                    className="block text-xs font-bold text-[#0052ff] pt-1"
                  >
                    View All Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/industries"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-zinc-600 hover:text-[#0052ff]"
            >
              Industries
            </Link>

            <Link
              href="/blogs"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-zinc-600 hover:text-[#0052ff]"
            >
              Blogs
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-semibold text-zinc-600 hover:text-[#0052ff]"
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-zinc-200 space-y-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3.5 bg-[#0052ff] hover:bg-[#0045d8] text-white rounded-xl font-bold text-sm shadow-md shadow-[#0052ff]/20"
            >
              Request Free Quote
            </Link>

            <a
              href="tel:1234567890"
              className="flex items-center justify-center gap-2 py-3 border border-zinc-200 bg-zinc-50 rounded-xl text-zinc-700 font-semibold text-sm hover:bg-zinc-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#0052ff]" />
              <span>(123) 456-7890</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
