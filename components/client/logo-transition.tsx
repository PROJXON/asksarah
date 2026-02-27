"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function LogoTransition() {
  const [showClientLogo, setShowClientLogo] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowClientLogo((prev) => !prev);
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10); // threshold: change when user scrolls down a bit
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // set explicit size to match images so they don't reflow during transition
    <div className="relative w-30 h-30">
      <div
        aria-hidden={!showClientLogo}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
          showClientLogo
            ? "opacity-100 z-20"
            : "opacity-0 z-10 pointer-events-none"
        }`}
        style={{ willChange: "opacity" }}
      >
        <Image
          src={scrolled ? "/asclogo2.svg" : "/ASCWHITELOGO.svg"}
          alt={scrolled ? "ASC Logo 2" : "Ask Sarah Conner"}
          width={300}
          height={80}
          className="object-contain "
        />
      </div>

      <div
        aria-hidden={showClientLogo}
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
          showClientLogo
            ? "opacity-0 z-10 pointer-events-none"
            : "opacity-100 z-20"
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
