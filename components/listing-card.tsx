import Link from 'next/link';
import type { Listing } from '@/lib/listings';

type ListingCardProps = {
  listing: Listing;
  compact?: boolean;
};

export function ListingCard({ listing, compact }: ListingCardProps) {
  return (
    <Link
      href={`/listings/${listing.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-white/8 bg-white/5 shadow-2xl ring-1 ring-black/5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/8"
    >
      <div
        className="h-64 w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${listing.coverImage})` }}
        aria-hidden
      />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
          <span>{listing.location}</span>
          <span className="rounded-full border border-white/15 px-2 py-0.5 text-white/80">
            {listing.status}
          </span>
        </div>
        <div>
          <p className="text-2xl font-semibold text-white">{listing.name}</p>
          <p className="text-sm text-slate-300">{listing.tagline}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
          <span>{listing.specs.beds} bd</span>
          <span>{listing.specs.baths} ba</span>
          <span>
            {(listing.specs.sqft / 1000).toFixed(1)}k ft<sup>2</sup>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-white">{listing.price}</p>
          <span className="text-xs uppercase tracking-widest text-slate-400">
            View details
          </span>
        </div>
      </div>
      {!compact && (
        <div className="border-t border-white/10 p-6">
          <div className="flex flex-wrap gap-2 text-xs text-slate-300">
            {listing.highlights.slice(0, 3).map((highlight) => (
              <span
                key={highlight}
                className="rounded-full border border-white/15 px-3 py-1"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      )}
    </Link>
  );
}

