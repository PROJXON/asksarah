"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

type NavLink = { href: string; label: string }

export default function HeaderInteractions({ navLinks }: { navLinks: NavLink[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Apply scrolled styles to the SERVER header + its server-rendered children
  useEffect(() => {
    const header = document.getElementById("site-header")
    if (!header) return

    // Header background
    header.classList.toggle("bg-background/90", scrolled)
    header.classList.toggle("backdrop-blur", scrolled)
    header.classList.toggle("bg-transparent", !scrolled)

    // Brand colors
    const title = header.querySelector('[data-brand="title"]')
    const subtitle = header.querySelector('[data-brand="subtitle"]')
    title?.classList.toggle("text-foreground", scrolled)
    title?.classList.toggle("text-white", !scrolled)
    subtitle?.classList.toggle("text-muted-foreground", scrolled)
    subtitle?.classList.toggle("text-white/70", !scrolled)

    // Desktop links colors
    header.querySelectorAll("[data-navlink]").forEach((el) => {
      el.classList.toggle("text-muted-foreground", scrolled)
      el.classList.toggle("hover:text-foreground", scrolled)
      el.classList.toggle("text-white/80", !scrolled)
      el.classList.toggle("hover:text-white", !scrolled)
    })

    // Call button styles
    const call = header.querySelector("[data-call]")
    if (call) {
      call.classList.toggle("bg-primary", scrolled)
      call.classList.toggle("text-primary-foreground", scrolled)
      call.classList.toggle("hover:bg-primary/90", scrolled)

      call.classList.toggle("bg-white/10", !scrolled)
      call.classList.toggle("backdrop-blur-sm", !scrolled)
      call.classList.toggle("text-white", !scrolled)
      call.classList.toggle("hover:bg-white/20", !scrolled)
      call.classList.toggle("border", !scrolled)
      call.classList.toggle("border-white/30", !scrolled)
    }
  }, [scrolled])

  return (
    <div className="md:hidden">
      <button
        className="p-2"
        onClick={() => setMobileMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        type="button"
      >
        {mobileMenuOpen ? (
          <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
        ) : (
          <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />
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
              href="tel:+13105551234"
              className="bg-primary text-primary-foreground px-6 py-4 text-sm tracking-widest uppercase text-center hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              (310) 555-1234
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
