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
  status: "Represented" | "In Escrow" | "Sold" | "Portfolio"
  href?: string // Optional external link for the listing
}

const listings: Listing[] = [
  ({
    id: 1,
    title: "70461 Boothill RD, RANCHO MIRAGE, CA 92270",
    location: "Thunderbird Heights, Rancho Mirage",
    priceLabel: "Luxury Estate",
    beds: 4,
    baths: 5,
    sqft: "4,602",
    image: "/70461 Boothill RD, RANCHO MIRAGE, CA 92270.jpg",
    status: "Represented",
    href: "https://www.theagencyre.com/single-family/clr/25631759/70461-boothill-rd-rancho-mirage-ca-92270"
  } as Listing),
  ({
    id: 2,
    title: "6 Rocky Ln, RANCHO MIRAGE, CA 92270",
    location: "RANCHO MIRAGE",
    priceLabel: "Contemporary Estate",
    beds: 5,
    baths: 5,
    sqft: "5,997",
    image: "/6 Rocky Ln, RANCHO MIRAGE, CA 92270.jpg",
    status: "Represented",
    href: "https://www.theagencyre.com/single-family/clr/25563061/6-rocky-ln-rancho-mirage-ca-92270"
  } as Listing),
  ({
    id: 3,
    title: "39525 Kersten Rd, RANCHO MIRAGE, CA 92270",
    location: "Carbon Beach",
    priceLabel: "Private Estate with Mountain Views",
    beds: 5,
    baths: 5,
    sqft: "4,283",
    image: "/39525 Kersten Rd, RANCHO MIRAGE, CA 92270.jpg",
    status: "Sold",
    // External link to make this listing's image clickable
    href: "https://www.theagencyre.com/single-family/clr/25494699ps/39525-kersten-rd-rancho-mirage-ca-92270"
  } as Listing),
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
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wider  hover:bg-primary/90 transition-colors rounded-sm"
          >
            <Phone className="h-4 w-4" />
            Call: (310) 871-7600
          </a>
        </div>
      </div>
    </section>
  )
}
