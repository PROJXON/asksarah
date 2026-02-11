"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import type { Testimonial } from "@/components/sections/testimonial-section"

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Navigation Buttons */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="hidden md:flex justify-end gap-2 -mt-[72px] mb-6">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous testimonials"
            className="p-3 border border-border hover:bg-secondary transition-colors rounded-full"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next testimonials"
            className="p-3 border border-border hover:bg-secondary transition-colors rounded-full"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-[calc((100vw-80rem)/2+1.5rem)] pb-4 snap-x snap-mandatory"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[350px] md:w-[400px] bg-secondary/50 p-8 md:p-10 rounded-lg snap-start"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg leading-relaxed text-foreground mb-6">
              {testimonial.quote}
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.headshot}
                alt={testimonial.author}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
              <p className="font-medium text-foreground">— {testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
