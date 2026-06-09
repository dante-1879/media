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
  title: "notronml. media | Precision Intelligence",
  description:
    "notronml. media — neural architectures built from first principles. Composable, auditable ML systems engineered to perform exactly where it counts.",
  generator: "notronml.media",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "notronml. media | Precision Intelligence",
    description:
      "Neural architectures built from first principles. Composable, auditable ML systems engineered to perform exactly where it counts.",
    url: "https://notronml.media",
    siteName: "notronml. media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "notronml. media | Precision Intelligence",
    description:
      "Neural architectures built from first principles. Composable, auditable ML systems.",
    site: "@notronml",
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
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  )
}
