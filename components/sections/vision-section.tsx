import React from "react"
import Image from "next/image"

const visionItems = [
  {
    title: "Scroll Stoppers",
    image: "/scroll.png",
    description:
      "Every business has a story. We make it Unskippable. From the first frame to the last second we build content that stops the scroll and earns the click.",
  },
  {
    title: "Results Over Vanity",
    image: "/result.png",
    description:
      "Likes and views don't pay bills. Every creative decision we make is tied to one thing, actual revenue. We measure what matters.",
  },
  {
    title: "Always Ahead",
    image: "/ahead.png",
    description:
      "The digital market moves fast. We move faster. We stay ahead of trends, platforms, and algorithms. So our clients never fall behind.",
  },
]

export function VisionSection() {
  return (
    <section id="vision" className="px-6 py-24 bg-[#0D0D12]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-4">
            Our <span className="text-[#F4CF31]">Vision</span>
          </h2>
          <p className="text-[#878792] mx-auto text-lg max-w-2xl">
            Building full-fledged digital marketing funnels for every business from the first scroll to the final sale.
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl w-full">
            {visionItems.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl flex flex-col items-center text-center bg-gradient-to-br from-[#FFD939] to-[#FFE885] text-[#1C1C22] shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-4 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#1C1C22]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}