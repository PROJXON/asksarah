import { Phone } from "lucide-react"
import TestimonialsCarousel from "@/components/client/testimonial-carousel"

export type Testimonial = {
  quote: string
  author: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Sarah establishes a trusting relationship by listening carefully to her clients. She genuinely wants to honor her client's wishes while sharing her expertise on how to best position a property.",
    author: "Client A",
    location: "Pacific Palisades, CA",
  },
  {
    quote:
      "Sarah's strategic mindset and marketing background made all the difference. She positioned our home beautifully and we sold for above asking price in just two weeks.",
    author: "Client B",
    location: "Malibu, CA",
  },
  {
    quote:
      "We wanted both a beach property and a desert retreat. Sarah made it happen. Her connections in both markets are unmatched. If you're serious about luxury real estate, call her.",
    author: "Client C",
    location: "Point Dume & Rancho Mirage, CA",
  },
  {
    quote:
      "As a first-time buyer in today's market, Sarah guided us through the entire process with patience and expertise. She found us a wonderful home for our family.",
    author: "Client D",
    location: "Beverly Hills, CA",
  },
  {
    quote:
      "From the initial research to closing, Sarah was there every step of the way. Her dedication, hard work, and genuine care for clients is rare in this industry.",
    author: "Client E",
    location: "Santa Monica, CA",
  },
]

export default function TestimonialSection() {
  return (
    <section id="testimonial-section" className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4 font-medium">
              What Clients Say
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-foreground">
              Client Stories
            </h2>
          </div>

          {/* Buttons move into client component so this stays server */}
          <div className="hidden md:flex gap-2" />
        </div>
      </div>

      {/* Client-only carousel */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* CTA (server) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 text-center">
        <p className="text-lg text-foreground mb-6">
          Ready to be the next success story?
        </p>
        <a
          href="tel:+13108717600"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm"
        >
          <Phone className="h-4 w-4" />
          Call: (310) 871-7600
        </a>
      </div>
    </section>
  )
}
