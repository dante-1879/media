"use client"

import Link from "next/link"
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 relative bg-[#0D0D12] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/5 via-transparent to-transparent" />

      {/* Brand accent glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Circle 1: radius 133.98 (diameter 267.97) center a little left of "We" */}
        <div
          className="absolute rounded-full bg-[#F4CF31] opacity-[0.07] blur-[25px]"
          style={{
            width: "267.97px",
            height: "267.97px",
            left: "calc(50% - 260px)",
            top: "calc(50% - 120px)",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Circle 2: radius 218.8 (diameter 437.61) center around "o" in "Notnorml" */}
        <div
          className="absolute rounded-full bg-[#F4CF31] opacity-[0.07] blur-[40px]"
          style={{
            width: "437.61px",
            height: "437.61px",
            left: "calc(50% + 200px)",
            top: "calc(50% - 30px)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Badge - customize your announcement */}
        <div className="inline-flex items-center gap-2 px-10 py-2 rounded-full bg-[#0D0D12] border border-[#F4CF31] mb-8">
          <span className="text-sm text-[#F4CF31]">notnorml.com</span>
        </div>

        {/* Headline - customize your value proposition */}
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-[#FAFAFA]">We&apos;re building something </span>
          <span className="text-[#F4CF31]">Notnorml</span>
          <span className="text-[#FAFAFA]">. Want in?</span>
        </h1>

        {/* Subheadline - describe your product */}
        <p className="text-lg md:text-xl text-[#878792] mx-auto mb-10 leading-relaxed md:whitespace-nowrap">We are growing ad creative agency. We need someone who take creatives seriously</p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#positions"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FFD939] to-[#FFE885] hover:brightness-105 active:scale-95 transition-all duration-300 shadow-md"
          >
            <span className="text-sm font-medium text-[#1C1C22]">View Open Positions</span>
          </Link>
          <Link
            href="#apply"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-[#F4CF31] bg-transparent hover:bg-[#F4CF31]/10 active:scale-95 transition-all duration-300 shadow-md"
          >
            <span className="text-sm font-medium text-[#FAFAFA]">Apply Now</span>
          </Link>

        </div>
        <div className="flex flex-col items-center gap-2 mt-16 animate-pulse">
          <p className="text-sm text-[#878792]">Scroll to explore</p>
          <ArrowDown className="w-4 h-4 text-[#878792]" />
        </div>

      </div>
    </section>
  )
}
