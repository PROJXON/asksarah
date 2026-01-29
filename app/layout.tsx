
import React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})


export const metadata: Metadata = {
  metadataBase: new URL("https://asksarahconner.com"),
  title: {
    default: "Ask Sarah Conner | Exquisite Properties, Unmatched Luxury",
    template: "%s | Ask Sarah Conner",
  },
  description:
    "Luxury real estate duo Sarah Conner & Pate Stevens deliver bespoke service, iconic marketing, and over $1B in closed sales across Malibu, the desert, and international markets.",
  openGraph: {
    title: "Ask Sarah Conner",
    description:
      "Discover editorial-grade marketing, concierge-level service, and a curated portfolio of luxury estates.",
    url: "https://asksarahconner.com",
    siteName: "Ask Sarah Conner",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Luxury coastal residence at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ask Sarah Conner",
    description:
      "Exquisite properties, unmatched luxury – discover your next home.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-black via-slate-950 to-slate-900">
          {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(251,146,60,0.08),_transparent_55%)]" />
          <main className="relative flex-1">{children}</main> */}
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
