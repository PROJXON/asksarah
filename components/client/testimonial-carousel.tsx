"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Testimonial } from "@/components/sections/testimonial-section"

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = 400
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Desktop arrows (client) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="hidden md:flex justify-end gap-2 -mt-[72px] mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-3 border border-border hover:bg-secondary transition-colors rounded-full"
            aria-label="Previous testimonials"
            type="button"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 border border-border hover:bg-secondary transition-colors rounded-full"
            aria-label="Next testimonials"
            type="button"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-[calc((100vw-80rem)/2+1.5rem)] pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[350px] md:w-[400px] bg-secondary/50 p-8 md:p-10 rounded-lg"
            style={{ scrollSnapAlign: "start" }}
          >
            <blockquote className="text-lg leading-relaxed text-foreground mb-8">
              {t.quote}
            </blockquote>
            <div>
              <p className="font-medium text-foreground">— {t.author}</p>
              <p className="text-sm text-muted-foreground mt-1">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
