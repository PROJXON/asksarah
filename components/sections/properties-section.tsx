import { Phone } from "lucide-react";
import PropertiesGrid from "@/components/client/properties-grid";

export type Listing = {
  id: number;
  title: string;
  location: string;
  priceLabel: string;
  beds: number;
  baths: number;
  sqft: string;
  image?: string;
  status: "Represented" | "In Escrow" | "Sold" | "Portfolio";
};

const listings: Listing[] = [
  {
    id: 1,
    title: "70461 Boothill RD, RANCHO MIRAGE, CA 92270",
    location: "Thunderbird Heights, Rancho Mirage",
    priceLabel: "Luxury Estate",
    beds: 4,
    baths: 5,
    sqft: "4,602",
    image: "/BootHill-Estate.webp",
    status: "Represented",
    description:
      "Rare classic California jewel home. Thunderbird Heights on double lot. Rare one of a kind estate home once owned by iconic Hollywood producer. Monthly and seasonal rentals. One of the most beautiful homes in one of the best neighborhoods!",
  } as Listing,
  {
    id: 2,
    title: "6 Rocky Ln, RANCHO MIRAGE, CA 92270",
    location: "Rancho Mirage",
    priceLabel: "Contemporary Estate",
    beds: 5,
    baths: 5,
    sqft: "5,997",
    image: "/RockyLn.webp",
    status: "Represented",
    description:
      "Rancho Mirage's exclusive enclave of just 24 custom homes, this striking contemporary estate offers over 6,000 square feet of refined luxury. Dramatic floor-to-ceiling glass, soaring ceilings, and open-concept design create seamless indoor-outdoor flow. The grand primary suite includes an office, dual spa-like baths, and two oversized walk-in closets. Additional guest suites are privately set throughout the home. A gourmet kitchen features state-of-the-art appliances, eat-in dining, and dual catering ovens.The resort-style pool, lush landscaping, mature fruit trees, and west-facing mountain views define desert elegance. The home also includes a three-car garage with golf cart space, and owned solar panels. Option to purchase fully furnished. A rare opportunity to own a private architectural masterpiece in one of Rancho Mirage's most sought-after communities. Close proximity to the airport, Palm Springs and Palm Desert. Shown by private appointment only.",
    // href: "https://www.theagencyre.com/single-family/clr/25563061/6-rocky-ln-rancho-mirage-ca-92270"
  } as Listing,
  {
    id: 3,
    title: "RANCHO MIRAGE",
    location: "Rancho Mirage",
    priceLabel: "Private Estate with Mountain Views",
    beds: 5,
    baths: 5,
    sqft: "4,283",
    image: "/KrestenRd.webp",
    status: "Sold",
    description:
      "Welcome to Rancho Encanto. This estate property offers unparalleled tranquility nestled in a private quiet neighborhood between the Springs and Thunderbird Country Clubs. Set on almost acre, the property showcases sweeping South and West panoramic mountain views all framed by meticulously landscaped gardens and a sparkling pool. This Santa Barbara-style estate has stunning 5-bedrooms and 5-bathrooms in the main residence and a detached 1-bedroom, 1-bath Casita that is perfect for guests, multi generational relatives, a home gym or office. The home has an open floor plan and an abundance of natural light throughout the interior. The living room is charming yet casually elegant with a fireplace and open beam ceilings. Entertain in the spacious kitchen and family room that has a disappearing 12' door that makes for seamless indoor /outdoor living. The Kitchen has been carefully appointed with a suite of stainless steel appliances from high-end manufacturers like Viking and Sub Zero, custom cabinets and a generous island with counter seating. The secluded primary suite features mountain views, vaulted ceilings, a fireplace, dual bathroom vanities, a walk-in closet and direct access to the backyard /pool area. The grounds feature an awe-inspiring pool and raised spa that seats 10, a beautiful covered outdoor pavilion with its own fireplace for entertainingand an al fresco dining. This immaculate estate combines the utmost privacy and convenience within a stunning natural setting and is located moments from charming boutiques, restaurants and renowned hiking trails. There is so much to see and a surprise everywhere you look. You really do need to come and view this unique property.",
    // External link to make this listing's image clickable
    // href: "https://www.theagencyre.com/single-family/clr/25494699ps/39525-kersten-rd-rancho-mirage-ca-92270"
  } as Listing,
];

export default function PropertiesSection() {
  return (
    <section id="listings-section" className="py-10 lg:py-10 bg-background">
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
            className=" tracking-wider uppercase text-foreground hover:text-accent transition-colors font-medium"
          >
            Request Current Availability →
          </a>
        </div>

        {/* Client-only grid */}
        <PropertiesGrid listings={listings} />

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className=" text-muted-foreground mb-6">
            Interested in scheduling a private showing?
          </p>
          <a
            href="tel:+3108717600"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium tracking-wider  hover:bg-primary/90 transition-colors rounded-sm"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </section>
  );
}
