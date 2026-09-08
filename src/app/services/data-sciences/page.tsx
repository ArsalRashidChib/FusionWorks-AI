// src/app/services/data-sciences/page.tsx
import Link from "next/link";
import {
  DatabaseZap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
  PhoneCall,
} from "lucide-react";

export const metadata = {
  title: "Data Science, Machine Learning & Predictive Analytics | FusionWorks AI",
  description:
    "End-to-end data science services, custom machine learning pipelines, predictive telemetry models, automated ETL infrastructure, and business intelligence dashboards for scaling MSPs and technology companies.",
  keywords: [
    "Data Science Services",
    "Predictive Analytics MSP",
    "Machine Learning Engineering",
    "ETL Pipeline Automation",
    "Business Intelligence Dashboards",
    "Ticket Analytics Machine Learning",
    "IT Telemetry Modeling",
    "AI Predictive Maintenance",
  ],
};

export default function DataSciencesPage() {
  const coreDeliverables = [
    {
      title: "Predictive Incident & Telemetry Modeling",
      desc: "Train machine learning models on endpoint logs and historical ticket queues to forecast recurring hardware failures, bandwidth bottlenecks, and outage risks before they impact users.",
    },
    {
      title: "Automated ETL & Centralized Data Lake Pipelines",
      desc: "Ingest, transform, and harmonize fragmented telemetry from multiple PSAs, RMMs, cloud billing APIs, and CRM platforms into automated, query-optimized analytical warehouses.",
    },
    {
      title: "NLP-Driven Ticket Classification & Sentiment Analysis",
      desc: "Implement natural language processing models that evaluate inbound ticket text in real time, score customer urgency, flag negative sentiment spikes, and suggest remediation runbooks.",
    },
    {
      title: "Executive Business Intelligence & SLA Dashboards",
      desc: "Build automated, interactive dashboards delivering deep visibility into customer churn probabilities, engineer utilization rates, recurring ticket root causes, and gross margin analytics.",
    },
  ];

  const dataMetrics = [
    { value: "98%+", label: "Model Inference Accuracy" },
    { value: "<100ms", label: "Real-Time Pipeline Latency" },
    { value: "100%", label: "Encrypted Data Ingestion" },
    { value: "Automated", label: "Continuous Model Retraining" },
  ];

  const onboardingPhases = [
    {
      step: "01",
      title: "Data Audit & Source Architecture",
      desc: "We catalog historical data silos, evaluate schema cleanliness across your PSA, RMM, and external databases, and establish secure read-only analytical pipelines.",
    },
    {
      step: "02",
      title: "Feature Engineering & Model Training",
      desc: "Our data scientists extract relevant features, validate statistical baselines, train tailored predictive algorithms, and benchmark performance against real-world ticket distributions.",
    },
    {
      step: "03",
      title: "Production Deployment & Live Dashboards",
      desc: "Seamlessly deploy inference APIs into production workflows, connect interactive visualization tools, and establish automated drift monitoring routines.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 selection:bg-[#0052ff] selection:text-white py-16 sm:py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[#0052ff]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0052ff]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
        
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-[#0052ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0052ff]/20 bg-[#0052ff]/10 text-[#0052ff] text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
              <span>Advanced Analytics & Intelligence</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              Data Science &{" "}
              <span className="text-[#0052ff]">
                Predictive Analytics
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Transform passive logs, ticket histories, and operational telemetry into actionable intelligence. We design automated machine learning pipelines, predictive fault models, and custom business intelligence dashboards that help you eliminate recurring tickets, minimize churn, and unlock operational efficiencies.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 hover:shadow-[#0052ff]/40"
              >
                <span>Request Custom Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9492873678"
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-sm flex items-center justify-center gap-2.5 transition-all shadow-sm hover:border-[#0052ff]/40"
              >
                <PhoneCall className="w-4 h-4 text-[#0052ff]" />
                <span>(949) 287-3678</span>
              </a>
            </div>
          </div>

          {/* Metric Highlights Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 pb-4">
              <div className="p-2.5 bg-[#0052ff]/10 text-[#0052ff] rounded-xl border border-[#0052ff]/20">
                <DatabaseZap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-base font-bold text-zinc-950">Analytics Standards</h2>
                <span className="text-xs text-zinc-500">Enterprise data science benchmarks</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {dataMetrics.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-zinc-100 bg-zinc-50/70">
                  <div className="text-2xl font-extrabold text-[#0052ff] font-mono">{item.value}</div>
                  <div className="text-[11px] font-semibold text-zinc-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              Technical Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              Applied Machine Learning & Data Engineering
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm">
              Engineered with production-grade reliability, automated data cleansing, and explainable models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreDeliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl border border-zinc-200 bg-white hover:border-[#0052ff]/50 hover:shadow-xl hover:shadow-[#0052ff]/10 transition-all duration-300 space-y-3 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0052ff] flex-shrink-0" />
                  <h3 className="text-lg font-bold text-zinc-950">{item.title}</h3>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3-Step Execution Workflow */}
        <section className="p-8 sm:p-12 rounded-3xl border border-zinc-200 bg-zinc-50/70 shadow-lg shadow-zinc-200/50 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              Deployment Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
              From Raw Silos to Actionable Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onboardingPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-zinc-200 bg-white space-y-3 hover:border-[#0052ff]/40 hover:shadow-sm transition-all"
              >
                <div className="text-xs font-mono font-bold text-[#0052ff]">
                  PHASE {phase.step}
                </div>
                <h3 className="text-base font-bold text-zinc-950">{phase.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[#0052ff]/20 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/30 p-10 sm:p-12 text-center space-y-6 shadow-xl shadow-[#0052ff]/5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052ff]">
              <Sparkles className="w-4 h-4" /> Predictive Intelligence
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight">
              Ready to Turn Operational Data Into a Growth Engine?
            </h2>

            <p className="text-zinc-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Schedule a scoping conversation with our data science team to review your telemetry sources, reporting challenges, and predictive use cases.
            </p>

            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#0052ff] hover:bg-[#0045d8] text-white font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-lg shadow-[#0052ff]/25 active:scale-95"
              >
                <span>Request Data Science Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}