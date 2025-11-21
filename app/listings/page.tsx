import type { Metadata } from "next";
import { ListingCard } from "@/components/listing-card";
import { listings } from "@/lib/listings";

export const metadata: Metadata = {
  title: "Featured Listings",
  description:
    "Browse the curated Ask Sarah Conner collection of coastal estates, desert havens, and skyline penthouses.",
};

const filters = [
  "Coastal retreats",
  "Desert sanctuaries",
  "Lock-and-leave",
  "Wellness-forward",
  "Entertaining",
];

export default function ListingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
          Portfolio
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-white">
              Featured listings with private previews on request.
            </h1>
            <p className="mt-2 max-w-2xl text-lg text-slate-300">
              Every property receives its own narrative—from cinematic films to
              scent and sound design—so buyers feel the lifestyle from the first
              moment. Select a listing to see details, amenities, and services
              curated for each residence.
            </p>
          </div>
          <div className="text-sm text-slate-300">
            Need a tailored collection?{" "}
            <a
              href="mailto:hello@asksarahconner.com"
              className="font-semibold text-white"
            >
              Email Sarah directly.
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-wide text-slate-200 transition hover:border-white hover:bg-white/10"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </section>
    </div>
  );
}

