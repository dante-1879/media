"use client"

import React from "react"
import { MessageSquare } from "lucide-react"

export function WhatsAppCTA() {
  return (
    <div className="w-full max-w-md px-6 py-5 rounded-xl bg-gradient-to-br from-[#FFD939] to-[#FFE885] text-[#1C1C22] text-center shadow-lg mx-auto">
      <h3 className="text-sm font-black tracking-tight mb-1">
        Want to Start without the hassle work?
      </h3>
      <p className="text-xs font-bold opacity-90 leading-relaxed text-balance mb-4">
        Message us on WhatsApp with a short introduction about yourself.
      </p>
      
      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=9779700042594&text&type=phone_number&app_absent=0" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-black bg-[#1C1C22] text-[#FFD939] hover:bg-[#2D2D35] transition-all hover:scale-[1.02] active:scale-[0.98] duration-300 shadow-xs cursor-pointer"
      >
        <MessageSquare className="w-3.5 h-3.5 fill-[#FFD939]" />
        <span>Message on WhatsApp</span>
      </a>
    </div>
  )
}