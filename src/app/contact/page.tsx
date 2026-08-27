"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Get in Touch</h1>
        <p className="text-zinc-400 mt-2 text-sm">Tell us about your project requirements or system goals.</p>
      </div>

      <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">Message Sent Successfully</h3>
            <p className="text-sm text-zinc-400">Our engineering team will review your project details and follow up shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-zinc-800/80 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Email</label>
                <input
                  required
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-zinc-800/80 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Subject / Requirement</label>
              <input
                required
                type="text"
                placeholder="AI Integration & Automation"
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Message</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-lg px-4 py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}