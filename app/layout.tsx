import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Lato, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/sections/site-header";
import { Footer } from "@/components/sections/site-footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sarah Conner | Luxury Real Estate | Malibu & Los Angeles",
  description:
    "Your trusted luxury real estate advisor serving Malibu, Pacific Palisades, Beverly Hills, and Los Angeles. Strategic guidance, creative vision, and personalized service from The Agency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
