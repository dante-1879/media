"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Check, Briefcase, MapPin, Users } from "lucide-react"
import Link from "next/link"

interface Position {
  id: string
  title: string
  statusBadge: string
  type: string
  location: string
  openings: string
  salary: string
  shortDescription: string
  longDescription: string
  responsibilities: string[]
  requirements: string[]
}

const positions: Position[] = [
  {
    id: "video-editor",
    title: "Full-time Video Editor",
    statusBadge: "🔥 Priority Hire",
    type: "Full-time Professional",
    location: "Lalitpur, Nepal",
    openings: "4 Positions",
    salary: "Rs 25,000 - Rs 60,000",
    shortDescription: "We need someone who cuts different. Not just clips but stories, hooks, and ads that actually convert. If short-form is your language, this seat has your name on it.",
    longDescription: "We're Notnorml Media, a Kathmandu-based ad creative agency. We make short-form content that stops scrolls and drives revenue. We need a full-time Video Editor who lives on the feed and thinks in hooks.",
    responsibilities: [
      "Create scroll-stopping short-form videos (Reels, TikToks, Shorts)",
      "Edit high-converting video ads and hooks",
      "Collaborate with content creators and strategists to optimize pacing",
      "Stay ahead of social media trends, meme formats, and audio cues",
    ],
    requirements: [
      "Professional proficiency in Premiere Pro, After Effects, or DaVinci Resolve",
      "Strong eye for pacing, sound design, typography, and visual effects",
      "Portfolio demonstrating successful short-form video work",
      "Lives in or can commute to Lalitpur, Nepal",
    ],
  },
  {
    id: "cinematographer",
    title: "Cinematographer",
    statusBadge: "🔥 Priority Hire",
    type: "Full-time Professional",
    location: "Lalitpur, Nepal",
    openings: "1 Position",
    salary: "Rs 25,000 - Rs 30,000",
    shortDescription: "We need someone who sees a story in every frame. Cameras, lighting, and framing you handle it all. Equipment is on us. Cinematic magic is on you.",
    longDescription: "We're Notnorml Media, a Kathmandu-based ad creative agency. We make short-form content that stops scrolls and drives revenue. We need a Cinematographer who has a strong visual eye and can translate ideas into high-quality raw footage.",
    responsibilities: [
      "Shoot high-quality vertical and horizontal video content for client campaigns",
      "Direct on-camera talent and orchestrate set lighting and framing",
      "Collaborate with creative directors to map visual shots to scripted hooks",
      "Manage equipment inventory and coordinate footage handoff to editors",
    ],
    requirements: [
      "Strong portfolio showcasing camera work, lighting, and frame composition",
      "Hands-on experience with mirrorless cameras, standard lighting rigs, and audio gear",
      "Creative problem solver who thrives in fast-paced production shoots",
      "Located in or willing to commute to Lalitpur, Nepal",
    ],
  },
]

export function PositionsSection() {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section id="positions" className="px-6 py-24 bg-[#0D0D12]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-4">
            Open <span className="text-[#F4CF31]">Positions</span>
          </h2>
          <p className="text-[#878792] max-w-xl mx-auto text-balance text-lg">
            Join our team and add to the Notnorml energy
          </p>
        </div>

        {/* Positions Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
          {positions.map((position) => {
            const isExpanded = !!expandedCards[position.id]
            return (
              <div
                key={position.id}
                className="p-8 rounded-2xl flex flex-col bg-gradient-to-br from-[#FFD939] to-[#FFE885] border-transparent text-[#1C1C22] shadow-lg transition-transform hover:scale-[1.02] duration-300"
              >
                {/* Card Top / Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wide bg-[#FFC31C] text-black border border-black/5">
                    {position.statusBadge}
                  </span>
                  <Link
                    href={`#apply?position=${position.id}`}
                    className="inline-flex items-center justify-center px-8 py-1.5 rounded-xl text-sm font-bold bg-gradient-to-r from-[#FFD939] to-[#FFE885] text-[#1C1C22] hover:brightness-105 transition-all hover:scale-105 duration-300 active:scale-95 shadow-[0_4px_12px_rgba(28,28,34,0.15)] hover:shadow-[0_6px_18px_rgba(28,28,34,0.22)] shrink-0"
                  >
                    Apply
                  </Link>
                </div>

                {/* Job Title */}
                <h3 className="font-heading text-2xl font-bold text-[#1C1C22] mb-3">
                  {position.title}
                </h3>

                {/* Job Meta Info Row */}
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs font-bold text-[#1C1C22]/80 mb-4">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-[#1C1C22]/80 shrink-0" />
                    <span>{position.type}</span>
                  </div>
                  <span className="text-[#1C1C22]/30 select-none">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#1C1C22]/80 shrink-0" />
                    <span>{position.location}</span>
                  </div>
                  <span className="text-[#1C1C22]/30 select-none">•</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#1C1C22]/80 shrink-0" />
                    <span>{position.openings}</span>
                  </div>
                </div>

                {/* Salary Text Box (Full Width) */}
                <div
                  className={`w-full text-center py-2.5 rounded-xl text-xs font-extrabold text-[#1C1C22] transition-colors duration-300 mb-6 border border-black/5 shadow-xs ${
                    isExpanded ? "bg-[#F4CF31]" : "bg-[#FFF5C8]"
                  }`}
                >
                  {position.salary}
                </div>

                {/* Short Description */}
                <p className="text-sm text-[#1C1C22]/80 leading-relaxed mb-6">
                  {position.shortDescription}
                </p>

                {/* View Details Toggle */}
                <div className="border-t border-[#1C1C22]/10 pt-4 flex flex-col items-center">
                  <button
                    onClick={() => toggleExpand(position.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#1C1C22] hover:opacity-85 transition-opacity cursor-pointer select-none"
                  >
                    <span>{isExpanded ? "Show Less" : "View Details"}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Expandable Details Container */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 text-left border-t border-[#1C1C22]/10 mt-4">
                        {/* Long Description */}
                        <p className="text-sm text-[#1C1C22]/90 leading-relaxed mb-6">
                          {position.longDescription}
                        </p>

                        {/* Responsibilities */}
                        <div className="mb-6">
                          <h4 className="font-heading text-sm font-bold text-[#1C1C22] mb-3 uppercase tracking-wider">
                            Responsibilities:
                          </h4>
                          <ul className="space-y-3.5">
                            {position.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1C1C22]/80">
                                <div className="size-4 shrink-0 rounded-full border border-[#1C1C22]/30 bg-black/5 flex items-center justify-center mt-0.5 shadow-2xs">
                                  <div className="size-1.5 rounded-full bg-[#1C1C22]" />
                                </div>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div className="mb-6">
                          <h4 className="font-heading text-sm font-bold text-[#1C1C22] mb-3 uppercase tracking-wider">
                            Requirements:
                          </h4>
                          <ul className="space-y-3.5">
                            {position.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1C1C22]/80">
                                <div className="size-4 shrink-0 rounded-full border border-[#1C1C22]/30 bg-black/5 flex items-center justify-center mt-0.5 shadow-2xs">
                                  <div className="size-1.5 rounded-full bg-[#1C1C22]" />
                                </div>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
