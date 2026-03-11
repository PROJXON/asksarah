import Link from "next/link";
import LogoTransition from "../client/logo-transition";
import { Phone } from "lucide-react";
import HeaderInteractions from "@/components/client/header-interactions";

const navLinks = [
  {
    label: "About",
    dropdown: [
      { href: "/#about-section", label: "About Us" },
      { href: "/why-ASC", label: "Sarah Conner" },
      { href: "https://www.theagencyre.com/agent/pate-stevens", label: "Pate Stevens", external: true },
    ],
  },
  { href: "/#testimonial-section", label: "Testimonials" },
  { href: "/#contact", label: "Ask" },
  { href: "/#listings-section", label: "Properties" },
];

export default function Header() {
  return (
    <header
      id="site-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-auto items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex flex-col">
            <LogoTransition />
          </Link>

          {/* Desktop nav (server-rendered, styled by HeaderInteractions) */}
          <div
            className="hidden md:flex md:items-center md:gap-8"
            aria-label="Desktop navigation"
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                // Dropdown trigger — rendered server-side as a plain anchor,
                // HeaderInteractions will wire up the interactivity via data attrs
                <div key={link.label} className="relative" data-dropdown-wrapper>
                  <button
                    data-navlink
                    data-dropdown-trigger
                    className="text-md tracking-wider uppercase font-medium transition-colors text-white/80 hover:text-white flex items-center gap-1"
                    type="button"
                  >
                    {link.label}
                    <svg
                      data-dropdown-chevron
                      className="h-3.5 w-3.5 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown panel — hidden by default, toggled by HeaderInteractions */}
                  <div
                    data-dropdown-panel
                    className="hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-background/95 backdrop-blur border border-border rounded-sm shadow-lg py-1 z-50"
                  >
                    {link.dropdown.map((item) =>
                      item.external ? (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  data-navlink
                  className="text-md tracking-wider uppercase font-medium transition-colors text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}

            <a
              href="tel:+13108717600"
              data-call
              className="px-5 py-2.5 text-md tracking-wider uppercase flex items-center gap-2 rounded-sm font-medium transition-colors bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
          </div>

          {/* Client-only: mobile menu + scroll styling */}
          <HeaderInteractions navLinks={navLinks} />
        </div>
      </nav>
    </header>
  );
}