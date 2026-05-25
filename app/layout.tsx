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
    "Trusted luxury real estate advisor serving Malibu, Pacific Palisades, Beverly Hills, & the Coachella Valley. Strategic guidance & personalized service from The Agency.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sarah Conner | Luxury Real Estate",
    description: "Trusted luxury real estate advisor serving Malibu, Pacific Palisades, Beverly Hills, & the Coachella Valley. Strategic guidance from The Agency.",
    url: "https://asksarahconner.com",
    siteName: "Ask Sarah Conner",
    images: [
      {
        url: "/Sarah-Conner.webp", 
        width: 1200,
        height: 630,
        alt: "Sarah Conner - Luxury Real Estate Agent",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable} ${playfair.variable}`}>
      <body>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5TC7JHK8');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5TC7JHK8" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SchemaMarkup />
      </body>
    </html>
  );
}