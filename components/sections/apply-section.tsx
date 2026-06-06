"use client"

import React, { useState, useEffect } from "react"
import { SendHorizontal, ChevronDown } from "lucide-react"

export function ApplySection() {
  const [selectedPosition, setSelectedPosition] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  // Listen for hash changes to pre-select position from positions links (e.g. #apply?position=video-editor)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith("#apply")) {
        const queryPart = hash.split("?")[1]
        if (queryPart) {
          const urlParams = new URLSearchParams(queryPart)
          const pos = urlParams.get("position")
          if (pos) {
            setSelectedPosition(pos)
          }
        }
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
      setSelectedPosition("")
    }, 5000)
  }

  return (
    <section id="apply" className="px-6 py-24 bg-[#0D0D12] scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-4">
            Apply <span className="text-[#F4CF31]">Now</span>
          </h2>
          <p className="text-[#878792] max-w-xl mx-auto text-balance text-lg">
            Ready to show us what you can build? Let&apos;s get to know you.
          </p>
        </div>

        {/* Form Container (rounded-2xl) */}
        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#FFD939] to-[#FFE885] border-transparent text-[#1C1C22] shadow-2xl relative overflow-hidden">
          {isSubmitted ? (
            <div className="py-16 text-center flex flex-col items-center justify-center min-h-[300px]">
              <span className="text-5xl mb-4">🚀</span>
              <h3 className="font-heading text-2xl font-black mb-2 text-[#1C1C22]">
                Application Received!
              </h3>
              <p className="text-sm text-[#1C1C22]/80 max-w-md mx-auto">
                Thank you for applying to Notnorml energy. Our AI agent is currently reviewing your application. We will be in touch shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-black  tracking-wider text-[#1C1C22]/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF5C8] border border-black/5 text-[#1C1C22] placeholder:text-[#1C1C22]/40 focus:bg-[#FAFAFA] focus:outline-hidden focus:ring-2 focus:ring-[#1C1C22]/20 transition-all duration-300 text-sm font-semibold shadow-2xs"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-black  tracking-wider text-[#1C1C22]/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF5C8] border border-black/5 text-[#1C1C22] placeholder:text-[#1C1C22]/40 focus:bg-[#FAFAFA] focus:outline-hidden focus:ring-2 focus:ring-[#1C1C22]/20 transition-all duration-300 text-sm font-semibold shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-black  tracking-wider text-[#1C1C22]/80 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+977 98XXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF5C8] border border-black/5 text-[#1C1C22] placeholder:text-[#1C1C22]/40 focus:bg-[#FAFAFA] focus:outline-hidden focus:ring-2 focus:ring-[#1C1C22]/20 transition-all duration-300 text-sm font-semibold shadow-2xs"
                  />
                </div>

                {/* Position Applying For */}
                <div>
                  <label className="block text-xs font-black  tracking-wider text-[#1C1C22]/80 mb-2">
                    Position Applying For *
                  </label>
                  <div className="relative">
                    <select
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF5C8] border border-black/5 text-[#1C1C22] focus:bg-[#FAFAFA] focus:outline-hidden focus:ring-2 focus:ring-[#1C1C22]/20 transition-all duration-300 text-sm font-semibold shadow-2xs appearance-none pr-10 cursor-pointer"
                    >
                      <option value="" disabled>Select a position</option>
                      <option value="video-editor">Full-time Video Editor</option>
                      <option value="cinematographer">Cinematographer</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[#1C1C22]/70 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Current Location */}
                <div>
                  <label className="block text-xs font-black  tracking-wider text-[#1C1C22]/80 mb-2">
                    Current Location
                  </label>
                  <input
                    type="text"
                    placeholder="Kathmandu, Nepal"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF5C8] border border-black/5 text-[#1C1C22] placeholder:text-[#1C1C22]/40 focus:bg-[#FAFAFA] focus:outline-hidden focus:ring-2 focus:ring-[#1C1C22]/20 transition-all duration-300 text-sm font-semibold shadow-2xs"
                  />
                </div>

                {/* Years of Experience */}
                <div>
                  <label className="block text-xs font-black  tracking-wider text-[#1C1C22]/80 mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 2 years"
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF5C8] border border-black/5 text-[#1C1C22] placeholder:text-[#1C1C22]/40 focus:bg-[#FAFAFA] focus:outline-hidden focus:ring-2 focus:ring-[#1C1C22]/20 transition-all duration-300 text-sm font-semibold shadow-2xs"
                  />
                </div>
              </div>

              {/* Portfolio Link */}
              <div>
                <label className="block text-xs font-black  tracking-wider text-[#1C1C22]/80 mb-1">
                  Portfolio Link
                </label>

                <input
                  type="url"
                  placeholder="https://your-portfolio.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF5C8] border border-black/5 text-[#1C1C22] placeholder:text-[#1C1C22]/40 focus:bg-[#FAFAFA] focus:outline-hidden focus:ring-2 focus:ring-[#1C1C22]/20 transition-all duration-300 text-sm font-semibold shadow-2xs"
                />
                <span className="block text-[10px] pt-2 font-bold text-[#FAFAFA] mb-2">
                  Required for Video Editors and Cinematographers (showreel, social profile, or sample work)
                </span>
              </div>

              {/* Why you'd be great */}
              <div>
                <label className="block text-xs font-black  tracking-wider text-[#1C1C22]/80 mb-2">
                  Why you&apos;d be great for this role at NotNorml media? *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about yourself, your experience, and why you'd be a great fit..."
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF5C8] border border-black/5 text-[#1C1C22] placeholder:text-[#1C1C22]/40 focus:bg-[#FAFAFA] focus:outline-hidden focus:ring-2 focus:ring-[#1C1C22]/20 transition-all duration-300 text-sm font-semibold shadow-2xs resize-y min-h-[100px]"
                />
              </div>

              {/* Disclaimer Note Box */}
              <div className="p-5 rounded-xl bg-black/10 border border-black/5 text-sm text-[#1C1C22] leading-relaxed">
                <span className="font-extrabold block mb-1">📌 Note:</span>
                AI reviews all applications first. Be specific & professional. Portfolio is non-negotiable for Video Editor and Cinematographer roles. Show reels, social profile, or sample work—anything that proves you can do the job. No portfolio? We&apos;ll know.
              </div>

              {/* Submit Button (Full Width, Gold Gradient with Backdrop Shadow) */}
              <div className="pt-2">
              <button
                type="submit"
                className="w-full px-8 py-3.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#FFD939] to-[#FFE885] text-[#1C1C22] hover:brightness-105 transition-all hover:scale-[1.01] active:scale-[0.99] duration-300 shadow-[0_4px_12px_rgba(28,28,34,0.15)] hover:shadow-[0_6px_18px_rgba(28,28,34,0.22)] flex items-center justify-center gap-2 border border-black/5 cursor-pointer"
              >
                <SendHorizontal className="w-4 h-4 text-[#1C1C22] -rotate-55" />
                <span>Let&apos;s goooooo</span>
              </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
