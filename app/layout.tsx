import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chethan Gowda — Full-Stack Developer · AI/ML · Blockchain",
  description:
    "Portfolio of Chethan Gowda — 2× hackathon winner building AI, blockchain, and full-stack products. React, Next.js, Node, Groq AI, Polygon.",
  keywords: [
    "Chethan Gowda",
    "Full-Stack Developer",
    "AI Engineer",
    "Blockchain",
    "React",
    "Next.js",
    "Groq AI",
    "Polygon",
    "Portfolio",
  ],
  authors: [{ name: "Chethan Gowda" }],
  openGraph: {
    title: "Chethan Gowda — Full-Stack Developer",
    description:
      "2× hackathon winner shipping AI, blockchain, and modern web products.",
    type: "website",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
