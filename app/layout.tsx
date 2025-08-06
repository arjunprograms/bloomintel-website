import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../theme-provider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "BloomIntel - AI Automation & IT Solutions",
  description:
    "Transform your business with AI automation, comprehensive IT support, and custom software solutions designed to scale with your growth.",
  generator: 'v0.dev',
  icons: {
    icon: '/images/bloom-intel-logo.png',
    shortcut: '/images/bloom-intel-logo.png',
    apple: '/images/bloom-intel-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
