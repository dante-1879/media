import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const plans = [
  {
    name: "Creative Agency",
    badge: "Ad Creatives",
    description: "Short-form content that doesn't just look good but it converts. We build scroll-stopping reels, hooks, and ad creatives for brands that are done blending in.",
    price: "",
    period: "",
    features: [
      "Scroll-stopping short-form video ads",
      "Hook-first creative strategy",
      "Platform-native content (Reels, TikTok, Shorts)",
      "Meta & social ad creatives",
    ],
    cta: "We don't make content. We make results.",
    highlighted: true,
  },
  {
    name: "Lead Magnets",
    badge: "Growth Engine",
    description: "A full-fledged marketing funnel built on digital platforms. We attract your audience, engage them, and convert them into actual paying customers.",
    price: "",
    period: "",
    features: [
      "Full digital marketing funnel setup",
      "Meta ads strategy & management",
      "Audience targeting & retargeting",
      "Conversion-focused campaign creatives",
    ],
    cta: "Your Meta ads are bleeding money. We fix that",
    highlighted: true,
  },
]

export function BuildingSection() {
  return (
    <section id="building" className="px-6 py-24 bg-[#0D0D12]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-4">
            What We're <span className="text-[#F4CF31]">Building</span>
          </h2>
          <p className="text-[#878792] max-w-xl mx-auto text-balance text-lg">
            Two products. One mission. Help business. Grow through ads.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl flex flex-col h-full border ${plan.highlighted
                ? "bg-gradient-to-br from-[#FFD939] to-[#FFE885] border-transparent text-[#1C1C22] shadow-lg"
                : "bg-[#1C1C22] border-[#FAFAFA]/10 text-[#FAFAFA] shadow-md"
                }`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                  <h3
                    className={`font-heading text-xl font-bold ${plan.highlighted ? "text-[#1C1C22]" : "text-[#FAFAFA]"
                      }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span
                      className={`inline-flex items-center px-3.5 py-1 rounded-full text-[10px] font-semibold tracking-wide shadow-sm ${plan.highlighted
                        ? "bg-[#1C1C22] text-[#F4CF31]"
                        : "bg-[#F4CF31] text-[#FAFAFA]"
                        }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className={`text-sm ${plan.highlighted ? "text-[#1C1C22]/80" : "text-[#FAFAFA]/80"}`}>{plan.description}</p>
              </div>

              {/* Price */}
              {plan.price && (
                <div className="mb-6">
                  <span
                    className={`font-display text-4xl font-bold ${plan.highlighted ? "text-[#1C1C22]" : "text-[#FAFAFA]"}`}
                  >
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? "text-[#1C1C22]/80" : "text-[#FAFAFA]/80"}`}>{plan.period}</span>
                </div>
              )}

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Image
                      src="/tick.png"
                      alt="tick"
                      width={20}
                      height={20}
                      className="shrink-0"
                    />
                    <span className={`text-sm ${plan.highlighted ? "text-[#1C1C22]/90" : "text-[#FAFAFA]"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#"
                className={`inline-flex items-center gap-2 mt-auto pt-4 text-xs font-normal text-[#878792] transition-colors w-fit ${plan.highlighted
                  ? "hover:text-[#1C1C22]"
                  : "hover:text-[#FAFAFA]/80"
                  }`}
              >
                <span className="text-[#878792] select-none">|</span>
                <span>{plan.cta}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
