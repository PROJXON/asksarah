import Link from "next/link";
import { ListingCard } from "@/components/listing-card";
import { featuredListings } from "@/lib/listings";
import { testimonials } from "@/lib/testimonials";

const stats = [
  { label: "Total sales", value: "$1B+" },
  { label: "Transactions", value: "600+" },
  { label: "Markets represented", value: "12" },
  { label: "Years combined", value: "30" },
];

const reviewDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const formatReviewDate = (date: string) =>
  reviewDateFormatter.format(new Date(date));

const highlightedTestimonials = [...testimonials]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 2);

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-16 md:flex-row md:px-8">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Luxury real estate
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl">
            Exquisite Properties, <br className="hidden md:block" />
            Unmatched Luxury.
          </h1>
          <p className="text-lg text-slate-200">
            Pate and Sarah guide every transaction together, blending editorial
            storytelling with concierge-level service from Malibu&apos;s coastal
            cliffs to the serenity of the desert. Expect bespoke preparation,
            private previews, and negotiations shaped around your lifestyle.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+13108717600"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-slate-200"
            >
              Call Sarah
            </a>
            <Link
              href="/listings"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              View Listings
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
          <div className="rounded-2xl border border-white/15 bg-black/40 p-5">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Signature approach
            </p>
            <p className="mt-4 text-lg text-slate-200">
              “We don’t just sell homes—we craft an experience built on
              storytelling, trust, and detail.”
            </p>
            <p className="mt-4 font-semibold text-white">Sarah Conner</p>
            <p className="text-sm text-slate-400">Broker Associate</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-black/40 p-5">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Focus markets
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
              <li>Malibu &amp; Pacific Palisades coastline</li>
              <li>Desert enclaves from Palm Springs to Scottsdale</li>
              <li>Lock-and-leave penthouses across the Westside</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="listings" className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
              Featured listings
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Curated for every horizon
            </h2>
            <p className="text-slate-300">
              Explore the homes currently captivating buyers across Malibu,
              Century City, and the high desert.
            </p>
          </div>
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            View the full portfolio →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:px-8"
      >
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
            Bespoke process
          </p>
          <h2 className="text-3xl font-semibold text-white">
            From Malibu’s coastal charm to the serenity of the desert.
          </h2>
          <p className="text-lg text-slate-200">
            Every showing, film, and private event is choreographed to immerse
            buyers in the story of your property. Lighting queues, scent
            curation, bespoke print, and on-site concierge transform viewings
            into sensory experiences.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Editorial marketing",
                copy: "Film-grade visuals, custom microsites, and targeted global placement.",
              },
              {
                title: "Concierge services",
                copy: "Relocation planning, design consultations, and on-demand estate management.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-slate-200">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <div className="h-72 rounded-[32px] border border-white/10 bg-gradient-to-tr from-slate-700 via-slate-900 to-black p-6 text-white shadow-2xl">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-200">
              Malibu
            </p>
            <p className="mt-4 text-2xl font-semibold">
              Clifftop decks suspended over the Pacific with sunrise meditation
              terraces.
            </p>
          </div>
          <div className="h-72 rounded-[32px] border border-white/10 bg-gradient-to-tr from-amber-600/40 via-orange-500/20 to-black p-6 text-white shadow-2xl">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-200">
              Desert
            </p>
            <p className="mt-4 text-2xl font-semibold">
              Sculptural pavilions, reflection pools, and stargazing lounges set
              against mountain silhouettes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
              Voices
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Hear it from our clients
            </h2>
            <p className="text-slate-300">
              Reviews from sellers, buyers, and developers who trusted the
              AskSarahConner experience.
            </p>
          </div>
          <Link
            href="/reviews"
            className="text-sm font-semibold text-white underline-offset-4 hover:underline"
          >
            Explore reviews
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {highlightedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-amber-200">
                {testimonial.title}
              </p>
              <p className="mt-3 text-lg text-white">“{testimonial.quote}”</p>
              <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400">
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.client}
                  </p>
                  {testimonial.meta && (
                    <p className="text-slate-400">{testimonial.meta}</p>
                  )}
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {formatReviewDate(testimonial.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="connect"
        className="mx-auto max-w-6xl rounded-[32px] border border-white/15 bg-white/5 px-6 py-14 text-white md:px-12"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-200">
              Connect
            </p>
            <h2 className="text-3xl font-semibold">
              Ready to preview in person?
            </h2>
            <p className="text-slate-200">
              Let us schedule a confidential consultation or private showing.
              We respond within the hour and tailor the agenda around how you
              prefer to experience a property.
            </p>
          </div>
          <div className="space-y-3 text-sm uppercase tracking-wide text-slate-300">
            <a
              href="tel:+13108717600"
              className="block rounded-full border border-white/20 px-5 py-3 text-center font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Call 310.871.7600
            </a>
            <a
              href="mailto:hello@asksarahconner.com"
              className="block rounded-full border border-white/20 px-5 py-3 text-center font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              hello@asksarahconner.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
