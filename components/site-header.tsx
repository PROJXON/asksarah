"use client"

import { useState, useEffect} from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"  

const navLinks = [
  { href: "#about-section", label: "About" },
  { href: "#listings-section", label: "Properties" },
  { href: "#testimonial-section", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
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

    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Image 
            src="/ASC-transparent-logo.png"
            alt="Ask Sarah Conner"
            width={240}
            height={80}
          />
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wider uppercase transition-colors font-medium ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+13105551234"
              className={`px-5 py-2.5 text-sm tracking-wider uppercase transition-colors flex items-center gap-2 rounded-sm font-medium ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/30"
              }`}
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  aria-label="Toggle menu">
            {mobileMenuOpen ? <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} /> : <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-white"}`} />}
          </button>
        </div>

        {/* Mobile navigation */}
       {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background">
            <div className="flex flex-col gap-6">
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
      </nav>
    </header>
  )
}