"use client"

import { useState, useEffect} from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "#about-section", label: "About" },
  { href: "#listings-section", label: "Properties" },
  { href: "#testimonial-section", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll event listener
  useEffect(()=> {
    const handleScroll = () =>{
      setScrolled(window.scrollY > 50)
    }
    //will run on mount
    handleScroll();
    //removes the event listener 
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    //add scrolled class when scrolled to header 
    <header className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "bg-background/90" : "bg-transparent"}`}>
      {/* Top bar with phone */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between text-sm">
          <span className="hidden sm:block tracking-wide">Serving Malibu, LA & Palm Desert</span>
          <a
            href="tel:+3108717600"
            className="flex items-center gap-2 font-medium hover:opacity-80 transition-opacity mx-auto sm:mx-0"
          >
            <Phone className="h-4 w-4" />
            <span>Call Today: (310)871-7600</span>
          </a>
        </div>
      </div>

      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-tight text-foreground">Ask Sarah Conner</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+3108717600"
              className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+13105551234"
                className="bg-primary text-primary-foreground px-6 py-4 text-sm font-medium tracking-widest uppercase text-center hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                Call Now: (310) 871-7600
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}