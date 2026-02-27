"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LogoTransition() {
  const [alternating, setAlternating] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  // On non-home pages: always show client logo (ASCLOGO2)
  // On home page: alternate between logos, even after scrolling
  const showClientLogo = isHomePage ? alternating : true;

  useEffect(() => {
    if (!isHomePage) return; // only alternate on home page

    const interval = setInterval(() => {
      setAlternating((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHomePage]);

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
          src={isWhiteBg ? "/ASCLOGO2.svg" : "/ASCWHITELOGO.svg"}
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