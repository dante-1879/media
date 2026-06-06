"use client"

import Link from "next/link"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-[#0D0D12]/70 border border-[#FAFAFA]/10 backdrop-blur-md shadow-lg">
        <Link href="/" className="font-display text-lg font-semibold text-[#FAFAFA]">
          Acme
        </Link>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-[#878792] hover:text-[#FAFAFA]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#pricing"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-[#FFD939] to-[#FFE885] text-[#1C1C22] font-medium hover:brightness-105 transition-all"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}
