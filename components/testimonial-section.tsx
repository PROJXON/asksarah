"use client"

import {useRef} from "react"
import{ ChevronLeft, ChevronRight, Phone} from "lucide-react" 

const testimonials = [
    {
        quote: "Sarah establishes a trusting relationship by listening carefully to her clients. She genuinely wants to honor her client's wishes while sharing her expertise on how to best position a property.",
        author: "Client A",
        Location: "Pacific Palisades, CA"
    },
     {
        quote: "Sarah's strategic mindset and marketing background made all the difference. She positioned our home beautifully and we sold for above asking price in just two weeks.",
        author: "Client B",
        Location: "Malibu, CA"
    }, {
        quote: "We wanted both a beach property and a desert retreat. Sarah made it happen. Her connections in both markets are unmatched. If you're serious about luxury real estate, call her.",
        author: "Client C",
        Location: "Point dume & Ranco Mirage, CA"
    }, {
        quote: "As a first-time buyer in today's market, Sarah guided us through the entire process with patience and expertise. She found us a wonderful home for our family.",
        author: "Client D",
        Location: "Beverly Hills, CA"
    }, {
        quote: "From the initial research to closing, Sarah was there every step of the way. Her dedication, hard work, and genuine care for clients is rare in this industry.",
        author: "Client E",
        Location: "Santa Monica, CA"
    },
]


export default function ReviewSection(){

      const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

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
          
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-border hover:bg-secondary transition-colors rounded-full"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-border hover:bg-secondary transition-colors rounded-full"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-[calc((100vw-80rem)/2+1.5rem)] pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[350px] md:w-[400px] bg-secondary/50 p-8 md:p-10 rounded-lg"
            style={{ scrollSnapAlign: "start" }}
          >
            <blockquote className="text-lg leading-relaxed text-foreground mb-8">
              {testimonial.quote}
            </blockquote>
            <div>
              <p className="font-medium text-foreground">— {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
     <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 text-center">
        <p className="text-lg text-foreground mb-6">Ready to be the next success story?</p>
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