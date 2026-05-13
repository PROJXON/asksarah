import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Lato, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Header from "@/components/sections/site-header";
import { Footer } from "@/components/sections/site-footer";
import SchemaMarkup from "@/components/sections/schema-markup";
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
  metadataBase: new URL("https://asksarahconner.com"),
  title: "Sarah Conner | Luxury Real Estate | Malibu & Los Angeles",
  description:
    "Trusted luxury real estate advisor serving Malibu, Pacific Palisades, Beverly Hills, & LA. Strategic guidance & personalized service from The Agency.",
  alternates: {
    canonical: "/",
  },
     verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} ${playfair.variable} font-sans antialiased`}
      >
        <SchemaMarkup />
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}