import type { Metadata } from "next";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Hear from luxury buyers, sellers, and developers who partnered with Ask Sarah Conner.",
};

const reviewDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const orderedTestimonials = [...testimonials].sort((a, b) =>
  b.date.localeCompare(a.date)
);

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
          Reviews
        </p>
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          Hear it from our happy clients.
        </h1>
        <p className="text-lg text-slate-300">
          Private sellers, relocating families, and developers trust Sarah
          Conner &amp; Pate Stevens with their most meaningful transactions.
          Every story below represents a bespoke plan and a record result.
        </p>
      </section>

      <section className="mt-12 space-y-6">
        {orderedTestimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200 md:p-8"
          >
            <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.3em] text-slate-400 md:flex-row md:items-center md:justify-between">
              <p className="text-amber-100">{testimonial.title}</p>
              <p>{reviewDateFormatter.format(new Date(testimonial.date))}</p>
            </div>
            <p className="mt-4 text-lg text-white">“{testimonial.quote}”</p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold uppercase tracking-[0.3em] text-slate-200">
                  {testimonial.client}
                </p>
                {testimonial.meta && <p>{testimonial.meta}</p>}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

