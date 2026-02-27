"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LogoTransition() {
  const [alternating, setAlternating] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  // On non-home pages or when scrolled: always show asclogo2
  // On home page hero: alternate between logos
  const showClientLogo = (!isHomePage || scrolled) ? true : alternating;

  useEffect(() => {
    if (!isHomePage || scrolled) return; // only alternate on home hero

    const interval = setInterval(() => {
      setAlternating((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [scrolled, isHomePage]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isWhiteBg = !isHomePage || scrolled;

  return (
    <div className="relative w-30 h-30">
      <div
        aria-hidden={!showClientLogo}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
          showClientLogo ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"
        }`}
        style={{ willChange: "opacity" }}
      >
        <Image
          src={isWhiteBg ? "/asclogo2.svg" : "/ASCWHITELOGO.svg"}
          alt="Ask Sarah Conner"
          width={300}
          height={80}
          className="object-contain"
        />
      </div>

      <div
        aria-hidden={showClientLogo}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
          showClientLogo ? "opacity-0 z-10 pointer-events-none" : "opacity-100 z-20"
        }`}
        style={{ willChange: "opacity" }}
      >
        <Image
          src="/agency-logo.svg"
          alt="Agency Logo"
          width={300}
          height={80}
          className="object-contain"
        />
      </div>
    </div>
  );
}