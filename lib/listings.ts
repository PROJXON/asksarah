export type Listing = {
  id: string;
  slug: string;
  name: string;
  location: string;
  price: string;
  status: "Available" | "In Escrow" | "Private Preview";
  tagline: string;
  description: string;
  specs: {
    beds: number;
    baths: number;
    sqft: number;
  };
  lotSize: string;
  coverImage: string;
  gallery: string[];
  highlights: string[];
  lifestyle: string[];
  experience: string;
  amenities: string[];
  services: string[];
};

export const listings: Listing[] = [
  {
    id: "malibu-clifftop",
    slug: "malibu-clifftop-estate",
    name: "Malibu Clifftop Estate",
    location: "Malibu, California",
    price: "$18,500,000",
    status: "Available",
    tagline: "Sweeping Pacific horizons meet gallery-level interiors.",
    description:
      "Perched atop Malibu's most dramatic bluff, this glass-and-stone residence brings the ocean indoors with 270° views, seamless indoor-outdoor living, and resort-grade wellness amenities.",
    specs: {
      beds: 5,
      baths: 7,
      sqft: 8600,
    },
    lotSize: "1.2 acres",
    coverImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: [
      "Infinity edge pool that melts into the Pacific",
      "Private wellness level with spa, cold plunge, and yoga deck",
      "Expansive primary suite floating over the coastline",
    ],
    lifestyle: ["Coastal", "Modern", "Entertaining"],
    experience:
      "Morning sunlight shimmers across the Pacific while walls of glass disappear, connecting the great room to cantilevered decks for effortless gatherings.",
    amenities: [
      "Dual kitchens with concealed caterer's prep",
      "Smart home environmental scenes",
      "Private screening lounge",
      "Temperature-controlled wine library",
    ],
    services: [
      "Discreet security and arrival experience",
      "On-call estate management",
      "Turn-key furnishing curation",
    ],
  },
  {
    id: "desert-haven",
    slug: "serenity-desert-haven",
    name: "Serenity Desert Haven",
    location: "Palm Springs, California",
    price: "$9,250,000",
    status: "In Escrow",
    tagline: "Mirage-like water features frame a sculptural desert retreat.",
    description:
      "A modernist desert sanctuary balancing monolithic stonework with reflective pools, native landscaping, and a private guest compound for multigenerational living.",
    specs: {
      beds: 6,
      baths: 6.5,
      sqft: 6400,
    },
    lotSize: "2.7 acres",
    coverImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: [
      "Floating glass pavilion for entertaining",
      "Desert botanical path with curated art moments",
      "Solar-powered energy ecosystem",
    ],
    lifestyle: ["Desert", "Wellness", "Architectural"],
    experience:
      "Move seamlessly from cool, gallery-inspired interiors to fire-lit terraces framing mountain silhouettes and star-studded skies.",
    amenities: [
      "Massage suite & red-light therapy room",
      "Private casita village",
      "Lap pool with submerged lounge deck",
      "Chef's kitchen anchored by a 20-foot stone island",
    ],
    services: [
      "Concierge arrival program",
      "Bespoke art placement advisory",
      "Seasonal landscape curation",
    ],
  },
  {
    id: "urban-penthouse",
    slug: "skyline-penthouse-collection",
    name: "Skyline Penthouse Collection",
    location: "Century City, California",
    price: "$12,750,000",
    status: "Private Preview",
    tagline: "Penthouse living with five-star hotel services on demand.",
    description:
      "Wrapped in floor-to-ceiling glass, this duplex penthouse floats above LA's Westside with 360° views, double-height entertaining spaces, and a private rooftop club deck.",
    specs: {
      beds: 4,
      baths: 5.5,
      sqft: 5200,
    },
    lotSize: "Private rooftop",
    coverImage:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
    ],
    highlights: [
      "Sky lounge with plunge pool and outdoor cinema",
      "Private elevator vestibule with art wall",
      "Two-story great room with floating stair and sculptural bar",
    ],
    lifestyle: ["Urban", "Lock-and-Leave", "Curated Services"],
    experience:
      "Host sunset dinners with the entire city illuminated beneath you, then retreat to a spa-level primary suite with dual dressing galleries.",
    amenities: [
      "Residents-only wellness club",
      "24-hour lifestyle concierge",
      "Secure valet fleet lounge",
      "Collector's wine wall",
    ],
    services: [
      "Hotel-branded housekeeping",
      "On-demand sommelier & private chef network",
      "Global travel coordination",
    ],
  },
];

export const featuredListings = listings.slice(0, 2);

export function getListing(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}

