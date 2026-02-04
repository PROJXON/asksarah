import HeroSliderClient from "../client/hero-slider"
import { Phone } from "lucide-react"

const heroSlides = [
  { image: "/Malibu-Oceanfront.webp", tagline: "Malibu Oceanfront" },
  { image: "/Pacific-Palisades.webp", tagline: "Pacific Palisades" },
  { image: "/Beverly-Hills.webp", tagline: "Beverly Hills" },
]

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      {/* Client-only: slideshow images + arrows + indicators */}
      <HeroSliderClient slides={heroSlides} />

      {/* Server-rendered: your content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* This tagline will be dynamic in the slider; don’t duplicate it here */}

        <h1 className="text-7xl md:text-9xl lg:text-[7rem] font-serif font-light text-white tracking-tight">
          Sarah Conner
        </h1>

        <p className="mt-6 text-base md:text-lg tracking-[0.15em] uppercase text-white/70 font-medium">
          Malibu & Los Angeles Luxury Real Estate
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="tel:+13105551234"
            className="bg-white text-slate-800 px-8 py-4 text-base md:text-lg font-medium tracking-wider uppercase hover:bg-white/90 transition-all flex items-center gap-3 rounded-sm"
          >
            <Phone className="h-5 w-5" />
            (310) 555-1234
          </a>

          <a
            href="#listings-section"
            className="border border-white/60 text-white px-8 py-4 text-base md:text-lg font-medium tracking-wider uppercase hover:bg-white/10 hover:border-white transition-colors rounded-sm"
          >
            View Properties
          </a>
        </div>
      </div>
    </section>
  )
}
