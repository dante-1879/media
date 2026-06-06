import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { BuildingSection } from "@/components/sections/building-section"
import { VisionSection } from "@/components/sections/vision-section"
import { PositionsSection } from "@/components/sections/positions-section"
import { ApplySection } from "@/components/sections/apply-section"
import { ImpactSection } from "@/components/sections/impact-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { CtaSection } from "@/components/sections/cta-section"
import { FooterSection } from "@/components/sections/footer-section"
import {WhatsAppCTA} from "@/components/sections/whatsapp-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BuildingSection />
      <VisionSection />
      <PositionsSection />
      <ApplySection />
      <WhatsAppCTA />
      <FooterSection />
    </main>
  )
}
