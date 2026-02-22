"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string };

export default function HeaderInteractions({
  navLinks,
}: {
  navLinks: NavLink[];
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // On non-home pages, treat the header as always "scrolled"
  const isHomePage = pathname === "/";
  const isDark = !scrolled && isHomePage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply styles to the SERVER-rendered header + its children
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    // Header background
    header.classList.toggle("bg-background/90", !isDark);
    header.classList.toggle("backdrop-blur", !isDark);
    header.classList.toggle("bg-transparent", isDark);

    // Brand colors
    const title = header.querySelector('[data-brand="title"]');
    const subtitle = header.querySelector('[data-brand="subtitle"]');
    title?.classList.toggle("text-foreground", !isDark);
    title?.classList.toggle("text-white", isDark);
    subtitle?.classList.toggle("text-muted-foreground", !isDark);
    subtitle?.classList.toggle("text-white/70", isDark);

    // Desktop link colors
    header.querySelectorAll("[data-navlink]").forEach((el) => {
      el.classList.toggle("text-muted-foreground", !isDark);
      el.classList.toggle("hover:text-foreground", !isDark);
      el.classList.toggle("text-white/80", isDark);
      el.classList.toggle("hover:text-white", isDark);
    });

    // Call button styles
    const call = header.querySelector("[data-call]");
    if (call) {
      call.classList.toggle("bg-primary", !isDark);
      call.classList.toggle("text-primary-foreground", !isDark);
      call.classList.toggle("hover:bg-primary/90", !isDark);

      call.classList.toggle("bg-white/10", isDark);
      call.classList.toggle("backdrop-blur-sm", isDark);
      call.classList.toggle("text-white", isDark);
      call.classList.toggle("hover:bg-white/20", isDark);
      call.classList.toggle("border", isDark);
      call.classList.toggle("border-white/30", isDark);
    }
  }, [isDark]);

  return (
    <div className="md:hidden">
      <button
        className="p-2"
        onClick={() => setMobileMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        type="button"
      >
        {mobileMenuOpen ? (
          <X
            className={`h-6 w-6 ${isDark ? "text-white" : "text-foreground"}`}
          />
        ) : (
          <Menu
            className={`h-6 w-6 ${isDark ? "text-white" : "text-foreground"}`}
          />
        )}
      </button>

      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-20 py-6 border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+13108715600"
              className="bg-primary text-primary-foreground px-6 py-4 text-sm tracking-widest uppercase text-center hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              (310) 871-7600
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
