// src/app/privacy-policy/page.tsx
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | FusionWorks AI",
  description: "Enterprise privacy policy, data handling, and security governance protocols for FusionWorks AI outsourced MSP support services.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "September 1, 2026";

  const sections = [
    {
      id: "introduction",
      title: "1. Overview & Commitment",
      content: (
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          At <strong className="text-white">FusionWorks AI</strong>, we provide white-label outsourced helpdesk, NOC monitoring, and technical infrastructure support to Managed Service Providers (MSPs). We treat data privacy and client confidentiality as core operational requirements. This Privacy Policy outlines how we collect, handle, protect, and process data when delivering our services or when you interact with our website and support channels.
        </p>
      ),
    },
    {
      id: "data-collection",
      title: "2. Information We Collect",
      content: (
        <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>We collect only the necessary operational data required to scope, execute, and verify technical support services:</p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li><strong className="text-zinc-200">Contact & Invoicing Data:</strong> Name, work email address, telephone numbers, company name, and billing details provided during consultation or contract execution.</li>
            <li><strong className="text-zinc-200">Service Desk & Telemetry Logs:</strong> Incident logs, ticket summaries, endpoint telemetry, and session timestamps generated through partner-authorized PSA/RMM tool connections.</li>
            <li><strong className="text-zinc-200">Communication Records:</strong> Audio recordings of support calls (where enabled for quality assurance and training) and written chat or ticket transcripts.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-use",
      title: "3. How We Use Information",
      content: (
        <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>All data collected is utilized strictly within the scope of our client agreements:</p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>Delivering 24/7/365 white-labeled Tier 1 and Tier 2 remote support.</li>
            <li>Triaging, resolving, and escalating technical tickets via your designated PSA/RMM platforms.</li>
            <li>Monitoring infrastructure health and alerting partner engineers to critical thresholds.</li>
            <li>Generating operational SLA metrics, shift handoff logs, and performance reports.</li>
          </ul>
          <p className="text-zinc-300 font-medium">We do not sell, rent, or monetize partner or end-user data under any circumstances.</p>
        </div>
      ),
    },
    {
      id: "security-controls",
      title: "4. Security Architecture & Confidentiality",
      content: (
        <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>We deploy strict physical, technical, and administrative controls to protect partner systems and end-user data:</p>
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li><strong className="text-zinc-200">Zero-Trust Remote Sessions:</strong> Support connections utilize audited 256-bit encrypted channels directly via your RMM infrastructure.</li>
            <li><strong className="text-zinc-200">Strict Non-Disclosure (NDA):</strong> Every technician and engineer is bound by enforceable non-disclosure agreements ensuring full white-label brand anonymity.</li>
            <li><strong className="text-zinc-200">Access Governance:</strong> Role-based access controls (RBAC) and multi-factor authentication (MFA) are enforced across all internal workstations and tool dashboards.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-retention",
      title: "5. Data Retention & Third-Party Sharing",
      content: (
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
          We retain operational session data only for the duration required by service agreements or legal mandates. Third-party disclosure is limited strictly to vetted infrastructure subprocessors (such as encrypted telecommunications gateways or authorized PSA API bridges) necessary to maintain service availability.
        </p>
      ),
    },
    {
      id: "contact-privacy",
      title: "6. Privacy Inquiries & Governance",
      content: (
        <div className="space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>For questions regarding this policy, security certifications, or data handling protocols, contact our security and compliance team:</p>
          <div className="p-4 rounded-2xl border border-white/[0.08] bg-zinc-950/80 inline-flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#0052ff] flex-shrink-0" />
            <div>
              <span className="text-xs text-zinc-400 block font-semibold uppercase tracking-wider">Compliance Officer</span>
              <a href="mailto:privacy@fusionworksai.com" className="text-sm font-bold text-white hover:text-[#0052ff] transition-colors">
                privacy@fusionworksai.com
              </a>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-[#0052ff] selection:text-white py-16 sm:py-24 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-[#0052ff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-white hover:text-[#0052ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-4 border-b border-white/[0.08] pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/40 bg-[#0052ff]/10 text-[#6699ff] text-xs font-semibold tracking-wide">
            <Lock className="w-4 h-4 text-[#0052ff]" />
            <span>Governance & Security Standards</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Privacy Policy
          </h1>

          <p className="text-sm text-zinc-400">
            Last Updated: <span className="text-zinc-200 font-medium">{lastUpdated}</span>
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-10">
          {sections.map((section) => (
            <div
              key={section.id}
              className="p-6 sm:p-8 rounded-3xl border border-white/[0.08] bg-zinc-950/80 backdrop-blur-md space-y-4 shadow-sm"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {section.title}
              </h2>
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}