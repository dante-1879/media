"use client"

import React from "react"

export function FooterSection() {
  return (
    <footer className="bg-[#0D0D12] px-6 pb-12 pt-4 border-t border-white/5">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Compact Gradient Application Box */}
        <div className="w-full max-w-md px-6 py-4 rounded-xl bg-gradient-to-br from-[#FFD939] to-[#FFE885] text-[#1C1C22] text-center shadow-lg mb-8 mx-auto">
          <p className="text-xs md:text-sm font-bold opacity-90 leading-relaxed text-balance">
            We read every application. We reply to the ones that matter.
          </p>
        </div>

        {/* Single Link in Solid #F4CF31 */}
        <div className="mb-6 text-sm font-bold text-[#F4CF31]">
          <a href="https://notnorml.com" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
            notnorml.com
          </a>
        </div>

        {/* Copyright in #878792 */}
        <div className="text-xs font-semibold text-[#878792] tracking-wide text-center">
          &copy; 2026 Notnorml Media Pvt. Ltd. All rights reserved.
        </div>
        
      </div>
    </footer>
  )
}