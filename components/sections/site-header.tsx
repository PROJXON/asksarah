import Link from "next/link";
import LogoTransition from "../client/logo-transition";
import { Phone } from "lucide-react";
import HeaderInteractions from "@/components/client/header-interactions";

const navLinks = [
  { href: "/#about-section", label: "About" },
  { href: "/why-ASC", label: "Sarah Conner" },
  { href: "https://www.theagencyre.com/agent/pate-stevens", label: "Pate Stevens", external: true },
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
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-navlink
                  className="text-md tracking-wider uppercase font-medium transition-colors text-white/80 hover:text-white"
                >
                  {link.label}
                </a>
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
