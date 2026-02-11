import type React from "react"
import type { Metadata } from "next"
import { Gentium_Book_Plus, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/sections/site-header"
import { Footer } from "@/components/sections/site-footer"
import "./globals.css"

const gentium = Gentium_Book_Plus({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-gentium",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Sarah Conner | Luxury Real Estate | Malibu & Los Angeles",
  description:
    "Your trusted luxury real estate advisor serving Malibu, Pacific Palisades, Beverly Hills, and Los Angeles. Strategic guidance, creative vision, and personalized service from The Agency.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      
      <body className={`${gentium.variable} ${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
