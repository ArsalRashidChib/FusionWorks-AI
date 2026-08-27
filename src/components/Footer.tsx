import Link from "next/link";
import { Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <div className="p-1 rounded bg-indigo-600 text-white">
              <Bot className="w-4 h-4" />
            </div>
            FusionWorksAI
          </div>
          <p className="text-sm text-zinc-500">
            Intelligent enterprise AI transformation, automation pipelines, and modern web architectures.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>Predictive Analytics</li>
            <li>Generative Workflows</li>
            <li>Enterprise Automation</li>
            <li>Cloud Data Lakes</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Connect</h4>
          <p className="text-sm text-zinc-500 mb-2">info@fusionworks.ai</p>
          <Link href="/contact" className="text-sm text-indigo-400 hover:underline">
            Request an audit &rarr;
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-6 border-t border-zinc-900 text-xs text-zinc-600 text-center">
        © {new Date().getFullYear()} FusionWorksAI. All rights reserved.
      </div>
    </footer>
  );
}