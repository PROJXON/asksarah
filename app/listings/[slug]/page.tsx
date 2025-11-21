import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getListing, listings } from "@/lib/listings";

type ListingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({
  params,
}: ListingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListing(slug);

  if (!listing) {
    return {
      title: "Listing not found",
    };
  }

  return {
    title: `${listing.name}`,
    description: listing.description,
  };
}

export default async function ListingPage({ params }: ListingPageProps) {
  const { slug } = await params;
  const listing = getListing(slug);

  if (!listing) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-6xl px-4 pb-24 pt-8 md:px-8">
      <Link
        href="/listings"
        className="text-sm uppercase tracking-[0.4em] text-slate-400 hover:text-white"
      >
        ← back to listings
      </Link>

      <header className="mt-6 space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
          {listing.location}
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {listing.name}
        </h1>
        <p className="text-lg text-slate-300">{listing.tagline}</p>
        <div className="flex flex-wrap gap-4 text-slate-200">
          <span className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-widest text-white/80">
            {listing.status}
          </span>
          <span className="text-2xl font-semibold">{listing.price}</span>
          <span className="text-sm text-slate-400">Lot {listing.lotSize}</span>
        </div>
      </header>

      <section className="mt-8 overflow-hidden rounded-[32px] border border-white/10">
        <div
          className="h-[420px] bg-cover bg-center"
          style={{ backgroundImage: `url(${listing.coverImage})` }}
        >
          <div className="h-full w-full bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
      </section>

      <section className="mt-10 grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 md:grid-cols-3">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Residence
          </p>
          <ul className="mt-4 space-y-2 text-lg text-white">
            <li>{listing.specs.beds} Bedrooms</li>
            <li>{listing.specs.baths} Bathrooms</li>
            <li>
              {listing.specs.sqft.toLocaleString()} ft<sup>2</sup>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Lifestyle
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-slate-200">
            {listing.lifestyle.map((life) => (
              <span
                key={life}
                className="rounded-full border border-white/20 px-3 py-1"
              >
                {life}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Private preview
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-200">
            <a
              href="tel:+13108717600"
              className="block rounded-full border border-white/20 px-4 py-2 text-center font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Schedule a call
            </a>
            <a
              href="mailto:hello@asksarahconner.com"
              className="block rounded-full border border-white/20 px-4 py-2 text-center font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Request dossier
            </a>
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Overview
          </p>
          <p className="text-lg text-slate-200">{listing.description}</p>
          <p className="text-sm text-slate-400">{listing.experience}</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Highlights
          </p>
          <ul className="list-disc space-y-2 pl-5 text-slate-200">
            {listing.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 grid gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Amenities
          </p>
          <ul className="mt-4 space-y-2 text-slate-200">
            {listing.amenities.map((amenity) => (
              <li key={amenity} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white" />
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Services
          </p>
          <ul className="mt-4 space-y-2 text-slate-200">
            {listing.services.map((service) => (
              <li key={service} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

