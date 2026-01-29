"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone } from "lucide-react"

type Listing = {
  id: number
  title: string
  location: string
  priceLabel: string
  beds: number
  baths: number
  sqft: string
  image?: string
  status: "Represented" | "In Escrow" | "Just Sold" | "Portfolio"
}

const listings: Listing[] = [
  {
    id: 1,
    title: "Oceanfront Paradise",
    location: "Malibu",
    priceLabel: "Luxury Coastal Home",
    beds: 5,
    baths: 6,
    sqft: "6,200",
    image: "/Malibu-Oceanfront.jpeg",
    status: "Represented",
  },
  {
    id: 2,
    title: "Hillside Modern Estate",
    location: "Pacific Palisades",
    priceLabel: "Modern View Property",
    beds: 4,
    baths: 5,
    sqft: "5,100",
    image: "/Pacific-Palisades.jpeg",
    status: "In Escrow",
  },
  {
    id: 3,
    title: "Beachfront Retreat",
    location: "Carbon Beach",
    priceLabel: "Premier Beachfront",
    beds: 6,
    baths: 8,
    sqft: "8,500",
    image: "/Carbon-Beach.jpeg",
    status: "Just Sold",
  },
]

export function PropertiesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="listings-section" className="py-20 lg:py-24  bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4 font-medium">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-foreground">
              Featured Properties
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              A curated look at recent representation and the types of luxury homes I specialize in.
            </p>
          </div>

          <a
            href="#contact"
            className="text-sm tracking-wider uppercase text-foreground hover:text-accent transition-colors font-medium"
          >
            Request Current Availability →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <article
              key={listing.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(listing.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                {listing.image ? (
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    width={400}
                    height={300}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === listing.id ? "scale-105" : "scale-100"
                    }`}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Image unavailable</span>
                  </div>
                )}

                {/* badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs font-medium tracking-wider uppercase bg-white/90 backdrop-blur-sm text-slate-800 rounded-sm">
                    {listing.status}
                  </span>
                </div>

                {/* overlay (subtle, luxury vibe) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>

              <div className="pt-6">
                {/* instead of hard price */}
                <p className="text-2xl font-serif font-light text-foreground">
                  {listing.priceLabel}
                </p>

                <h3 className="text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                  {listing.title}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground mt-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{listing.location}</span>
                </div>

                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                  <span>{listing.beds} Beds</span>
                  <span>{listing.baths} Baths</span>
                  <span>{listing.sqft} SF</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground mb-6">
            Interested in scheduling a private showing?
          </p>
          <a
            href="tel:+3108717600"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm"
          >
            <Phone className="h-4 w-4" />
            Call: (310) 871-7600
          </a>
        </div>
      </div>
    </section>
  )
}
