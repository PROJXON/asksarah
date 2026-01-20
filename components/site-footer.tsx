import Link from "next/link"
import { Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Final CTA */}
        <div className="text-center pb-12 mb-12 border-b border-primary-foreground/20">
          <h3 className="text-2xl md:text-3xl font-light">Ready to Make Your Move?</h3>
          <p className="mt-4 text-primary-foreground/80">One call could change everything.</p>
          <a
            href="tel:+310871-7600"
            className="mt-6 inline-flex items-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primary-foreground/90 transition-colors"
          >
            <Phone className="h-5 w-5" />
            (310) 871-7600
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Sarah Conner</h3>
            <p className="mt-4 text-primary-foreground/80 text-sm leading-relaxed">
              Luxury Real Estate
              <br />
              The Agency, Beverly Hills
            </p>
            <p className="mt-2 text-primary-foreground/60 text-sm">LA • Malibu • The Desert</p>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <Link
                href="#about"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                About
              </Link>
              <Link
                href="#listings"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Properties
              </Link>
              <Link
                href="#testimonials"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-6">Office</h4>
            <address className="not-italic text-primary-foreground/80 text-sm leading-relaxed">
              The Agency Beverly Hills
              <br />
              9465 Wilshire Blvd
              <br />
             Beverly Hills, CA 90212
              <br />
              <br />
              <a href="tel:+3108717600" className="hover:text-primary-foreground transition-colors">
                (310) 871-7600
              </a>
              <br />
              <a href="mailto:sarahsunshineconner@icloud.com" className="hover:text-primary-foreground transition-colors">
                sarahsunshineconner@icloud.com
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Ask Sarah Conner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
