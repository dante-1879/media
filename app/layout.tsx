import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/providers/lenis-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "notronml. media | Digital Marketing Agency",
  description:
    "notronml. media — a performance-driven digital marketing agency focused on strategy, branding, and scalable growth systems that deliver measurable results.",

  generator: "notronml.media",

  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },

  openGraph: {
    title: "notronml. media | Digital Marketing Agency",
    description:
      "Performance-driven digital marketing agency focused on strategy, branding, and scalable growth systems.",
    url: "https://notronml.media",
    siteName: "notronml. media",
    type: "website",

    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "notronml media logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "notronml. media | Digital Marketing Agency",
    description:
      "Performance-driven digital marketing agency focused on strategy and scalable growth.",
    site: "@notronml",
    images: ["/logo.svg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500&family=Azeret+Mono:wght@400;500&family=Cal+Sans&family=Instrument+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
