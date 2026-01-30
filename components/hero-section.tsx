"use client"
import { Phone, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image";
import { useState, useEffect} from "react"

const heroSlides =[
  {
    image: "/Malibu-Oceanfront.webp",
    tagline: "Malibu Oceanfront"
  },
  {
    image: "/Pacific-Palisades.webp",
    tagline: "Pacific Palisades",
  },
  {
    image: "/Beverly-Hills.webp",
    tagline: "Beverly Hills",
  }
];


export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, 5000)
  return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)


  return (
  <section className="relative h-screen">
     {heroSlides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${
      index === currentSlide ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
      src={slide.image}
      alt={slide.tagline}
      width={1920}
      height={1080}
      className="w-full h-full object-cover filter brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/70" />
    </div>
    ))}
    {/* Navigation Arrows */}
    <button
    onClick={prevSlide}
    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors rounded-full"
    aria-label="Previous slide"
    >
    <ChevronLeft className="h-6 w-6 text-white" />
    </button>
    <button
    onClick={nextSlide}
    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors rounded-full"
    aria-label="Next slide"
    >
    <ChevronRight className="h-6 w-6 text-white" />
    </button>
     <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
    <p className="text-base md:text-lg tracking-[0.3em] uppercase text-white/80 mb-4 font-light">
      {heroSlides[currentSlide].tagline}
    </p>
    
    <h1 className="text-7xl md:text-9xl lg:text-[7rem] font-serif font-light text-white tracking-tight">
      Sarah Conner
    </h1>
    
    <p className="mt-6 text-base md:text-lg tracking-[0.15em] uppercase text-white/70 font-medium">
      Malibu & Los Angeles Luxury Real Estate
    </p>

    {/* CTAs */}
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

    {/* Slide Indicators */}
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
      {heroSlides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-12 h-0.5 transition-colors rounded-full ${
        index === currentSlide ? "bg-white" : "bg-white/30"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
      ))}
    </div>
    </div>

  </section>
  )
}
