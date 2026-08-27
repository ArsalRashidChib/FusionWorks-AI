"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Bot, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white tracking-tight">
          <div className="p-1.5 rounded-lg bg-indigo-600 text-white">
            <Bot className="w-5 h-5" />
          </div>
          FusionWorks<span className="text-indigo-400">AI</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-full transition-all"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-900 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-zinc-300 hover:text-white text-base py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-4 w-full py-2.5 bg-indigo-600 text-white rounded-lg font-medium"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}