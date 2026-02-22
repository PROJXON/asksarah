"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Listing } from "@/components/sections/properties-section";

interface PropertiesGridProps {
  listings: Listing[];
}

export default function PropertiesGrid({ listings }: PropertiesGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {listings.map((listing) => {
        const isHovered = hoveredId === listing.id;
        // const ImageWrapper = listing.href ? Link : "div";
        // const wrapperProps = listing.href
        //   ? { href: listing.href, target: "_blank", rel: "noopener noreferrer" }
        //   : {};

        return (
          <article
            key={listing.id}
            className="group"
            onMouseEnter={() => setHoveredId(listing.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image Container */}
            {listing.href ? (
              <Link
                href={listing.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block aspect-[4/3] overflow-hidden rounded-lg cursor-pointer`}
              >
                {listing.image ? (
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover transition-transform duration-700 ${
                      isHovered ? "scale-105" : "scale-100"
                    }`}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">
                      Image unavailable
                    </span>
                  </div>
                )}

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 text-sm font-medium tracking-wider uppercase bg-white/90 backdrop-blur-sm text-slate-800 rounded-sm">
                    {listing.status}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </Link>
            ) : (
              <div className="relative block aspect-[4/3] overflow-hidden rounded-lg">
                {listing.image ? (
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover transition-transform duration-700 ${
                      isHovered ? "scale-105" : "scale-100"
                    }`}
                  />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">
                      Image unavailable
                    </span>
                  </div>
                )}

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 text-sm font-medium tracking-wider uppercase bg-white/90 backdrop-blur-sm text-slate-800 rounded-sm">
                    {listing.status}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>
            )}

            {/* Property Details */}
            <div className="pt-6">
              <p className="text-2xl font-serif font-medium text-foreground">
                {listing.priceLabel}
              </p>

              <h3 className="text-lg text-foreground mt-1 group-hover:text-accent transition-colors">
                {listing.title}
              </h3>

              <div className="flex items-center gap-2 text-muted-foreground mt-2">
                <MapPin className="h-4 w-4" />
                <span className="">{listing.location}</span>
              </div>

              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border  text-muted-foreground">
                <span>{listing.beds} Beds</span>
                <span>{listing.baths} Baths</span>
                <span>{listing.sqft} SQFT</span>
                <Link
                  href="#contact"
                  className="px-3 py-1.5 font-medium tracking-wide border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
                >
                  Ask Sarah
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
