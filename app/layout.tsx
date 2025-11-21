import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 font-sans text-slate-50 antialiased`}
      >
        <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-black via-slate-950 to-slate-900">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(251,146,60,0.08),_transparent_55%)]" />
          <SiteHeader />
          <main className="relative flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
