
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

type DropdownItem = { href: string; label: string; external?: boolean };
type NavLink = { href?: string; label: string; dropdown?: DropdownItem[] };

export default function HeaderInteractions({ navLinks }: { navLinks: NavLink[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isDark = !scrolled && isHomePage;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply scroll-based styles to server-rendered header elements
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    header.classList.toggle("bg-background/90", !isDark);
    header.classList.toggle("backdrop-blur", !isDark);
    header.classList.toggle("bg-transparent", isDark);

    const title = header.querySelector('[data-brand="title"]');
    const subtitle = header.querySelector('[data-brand="subtitle"]');
    title?.classList.toggle("text-foreground", !isDark);
    title?.classList.toggle("text-white", isDark);
    subtitle?.classList.toggle("text-muted-foreground", !isDark);
    subtitle?.classList.toggle("text-white/70", isDark);

    header.querySelectorAll("[data-navlink]").forEach((el) => {
      el.classList.toggle("text-muted-foreground", !isDark);
      el.classList.toggle("hover:text-foreground", !isDark);
      el.classList.toggle("text-white/80", isDark);
      el.classList.toggle("hover:text-white", isDark);
    });

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

  // Wire up desktop dropdown toggles on the server-rendered elements
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    const wrappers = header.querySelectorAll<HTMLElement>("[data-dropdown-wrapper]");
    const cleanups: (() => void)[] = [];

    wrappers.forEach((wrapper) => {
      const trigger = wrapper.querySelector<HTMLButtonElement>("[data-dropdown-trigger]");
      const panel = wrapper.querySelector<HTMLElement>("[data-dropdown-panel]");
      const chevron = wrapper.querySelector<SVGElement>("[data-dropdown-chevron]");

      if (!trigger || !panel) return;

      const toggle = () => {
        const isOpen = !panel.classList.contains("hidden");
        // Close all first
        header.querySelectorAll<HTMLElement>("[data-dropdown-panel]").forEach((p) => p.classList.add("hidden"));
        header.querySelectorAll<SVGElement>("[data-dropdown-chevron]").forEach((c) => (c.style.transform = ""));
        // Then open this one if it was closed
        if (!isOpen) {
          panel.classList.remove("hidden");
          if (chevron) chevron.style.transform = "rotate(180deg)";
        }
      };

      const handleOutside = (e: MouseEvent) => {
        if (!wrapper.contains(e.target as Node)) {
          panel.classList.add("hidden");
          if (chevron) chevron.style.transform = "";
        }
      };

      trigger.addEventListener("click", toggle);
      document.addEventListener("mousedown", handleOutside);
      cleanups.push(() => {
        trigger.removeEventListener("click", toggle);
        document.removeEventListener("mousedown", handleOutside);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        className="p-2"
        onClick={() => setMobileMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        type="button"
      >
        {mobileMenuOpen ? (
          <X className={`h-6 w-6 ${isDark ? "text-white" : "text-foreground"}`} />
        ) : (
          <Menu className={`h-6 w-6 ${isDark ? "text-white" : "text-foreground"}`} />
        )}
      </button>

      {/* Mobile panel */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-20 py-6 border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  {/* Accordion trigger */}
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-3 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() =>
                      setMobileOpenDropdown((prev) => (prev === link.label ? null : link.label))
                    }
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        mobileOpenDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion items */}
                  {mobileOpenDropdown === link.label && (
                    <div className="flex flex-col pl-4 border-l border-border mb-2">
                      {link.dropdown.map((item) =>
                        item.external ? (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2.5 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="py-2.5 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="py-3 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

            
            <a
              href="tel:+13108717600"
              className="mt-3 bg-primary text-primary-foreground px-6 py-4 text-sm tracking-widest uppercase text-center hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
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