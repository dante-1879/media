"use client"

import type React from "react"

import { ArrowRight } from "lucide-react"
import { LiquidMetalBorder } from "@/components/ui/liquid-metal-border"
import { cn } from "@/lib/utils"

interface LiquidCtaButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  theme?: "light" | "dark"
}

export function LiquidCtaButton({ children, className, onClick, theme = "dark" }: LiquidCtaButtonProps) {
  const isLight = theme === "light"

  return (
    <button
      onClick={onClick}
      className={cn("group transition-transform duration-300 hover:scale-105 active:scale-95", className)}
    >
      <div className={cn("rounded-full", isLight && "shadow-[0_8px_20px_rgba(0,0,0,0.25)]")}>
        <LiquidMetalBorder
          borderRadius={9999}
          borderWidth={2}
          theme={theme}
          opacity={1}
          speed={1.2}
          scale={3}
          colorBack="#FFD939"
          colorTint="#FFE885"
        >
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FFD939] to-[#FFE885]">
            <span className="text-sm font-medium transition-colors text-[#1C1C22]">
              {children}
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all duration-300 text-[#1C1C22]" />
          </div>
        </LiquidMetalBorder>
      </div>
    </button>
  )
}
