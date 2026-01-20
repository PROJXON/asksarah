import { Phone, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32">
      <div className="absolute inset-0 z-0">
        <img src="/asc-background.webp" alt="Luxury Malibu estate" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-primary-foreground">
              Available for Consultations
            </span>
          </div>
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary-foreground/80 mb-6">
            The Agency Beverly Hills • LA, Malibu & The Desert
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-[0.95] tracking-tight text-balance">
            Exquisite Properties, Unmatched Luxury.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-primary-foreground/90 font-light leading-relaxed max-w-xl">
            Navigate the luxury market with clarity, confidence, and purpose. From coastal estates to desert retreats, I'll help unlock your property's full potential.
          </p>
          
          {/* Primary CTA - Phone */}
          <div className="mt-12 flex flex-col gap-4">
            <a
              href="tel:+13105551234"
              className="bg-primary-foreground text-foreground px-8 py-5 text-base font-medium tracking-widest uppercase hover:bg-primary-foreground/90 transition-all hover:scale-[1.02] flex items-center justify-center gap-3 sm:w-fit"
            >
              <Phone className="h-5 w-5" />
              Call Now: (310) 555-1234
            </a>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#listings"
                className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primary-foreground/10 transition-colors text-center flex items-center justify-center gap-2"
              >
                View Properties
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="border-2 border-primary-foreground/50 text-primary-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primary-foreground/10 hover:border-primary-foreground transition-colors text-center"
              >
                Send a Message
              </a>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-wrap gap-8 text-primary-foreground/80 text-sm">
            <div>
              <span className="text-2xl font-medium text-primary-foreground">MBA</span>
              <p>Pepperdine University</p>
            </div>
            <div>
              <span className="text-2xl font-medium text-primary-foreground">The Agency</span>
              <p>Beverly Hills</p>
            </div>
            <div>
              <span className="text-2xl font-medium text-primary-foreground">2 Markets</span>
              <p>Coast & Desert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
