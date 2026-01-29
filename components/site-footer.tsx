
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-serif font-light tracking-tight">Sarah Conner</h3>
            <p className="mt-2 text-primary-foreground/60 text-sm">The Agency Beverly Hills</p>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed max-w-md">
              Strategic guidance, creative vision, and personalized service for 
              buyers and sellers across Malibu, Pacific Palisades, Beverly Hills, and Los Angeles.
            </p>
          
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">Navigate</h4>
            <nav className="space-y-3">
              <Link href="#about" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                About
              </Link>
              <Link href="#listings" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Portfolio
              </Link>
              <Link href="#testimonials" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Testimonials
              </Link>
              <Link href="#contact" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                Connect
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-6">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+3108717600" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                (310) 871-7600
              </a>
              <a href="mailto:sarah@theagencyre.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                sarahsunshineconner@icloud.com
              </a>
            </div>
            <address className="not-italic text-primary-foreground/60 text-sm mt-6 leading-relaxed">
              9465 Wilshire Blvd<br />
              Beverly Hills, CA 90212
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Sarah Conner | The Agency. All rights reserved.
          </p>
          <a
            href="tel:+3108717600"
            className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors text-sm"
          >
            <Phone className="h-4 w-4" />
            Ready to connect? Call now
          </a>
        </div>
      </div>
    </footer>
  )
}
