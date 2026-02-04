import { Phone } from "lucide-react"
import PropertiesGrid from "@/components/client/properties-grid"

export type Listing = {
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
    image: "/Malibu-Oceanfront.webp",
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
    image: "/Pacific-Palisades.webp",
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
    image: "/Carbon-Beach.webp",
    status: "Just Sold",
  },
]

export default function PropertiesSection() {
  return (
    <section id="listings-section" className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
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

        {/* Client-only grid */}
        <PropertiesGrid listings={listings} />

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
