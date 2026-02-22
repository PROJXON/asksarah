import { Phone } from "lucide-react";
import TestimonialsCarousel from "@/components/client/testimonial-carousel";

export type Testimonial = {
  quote: string;
  author: string;
  // Optional headshot URL — leave blank or omit if unavailable
  headshot?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Sarah is the most fantastic realtor I've ever hired. She located an incredible home, and negotiated below market price in Rancho Mirage, CA. I cant say enough about her and what she does for me. She assisted with many aspects of the negotiation, has gone above and beyond in helping me meet contractor’s, and find furnishings! She did not just disappear after the sale!",
    author: 'Jacob E "Jack" Tauber, MD',
    headshot: "/Jack.jpeg",
  },
  {
    quote:
      "Sarah sold my house in just 3 days with multiple offers. Other agents had it for five years. She is the best agent I have ever hired!",
    author: "Joyce Brandman Foundation",
    headshot: "/Joyce-Brandman.webp",
  },
  {
    quote:
      "Sarah's experience and knowledge of the Palms Spring and adjacent areas proved invaluable to us. She was and is an important asset for us for referrals to numerous other professionals in the area that we have already utilized their services. Most importantly just a fantastic human being and could not endorse her services as a luxury agent any more strongly.",
    author: "David Smith, OMM Partner",
    headshot: "/David.jpeg",
  },
  {
    quote:
      "Sarah is an incredible strategist, a talented entrepreneur, a visionary and a community leader. She is an asset to any project or organization she works with, and has the perfect combination of soft touch and hardline negotiator",
    author: "Lori Martin Gregory, MBA",
    headshot: "/Lori.jpeg",
  },
  {
    quote:
      "Through Sarah's and her partner, Pate's, help and guidance, we purchased a multi-million dollar investment property. I am a retired attorney and my husband and I are passionate about real estate and design, and can recognize quality and excellence in those representing us. Sarah and Pate were beyond exceptional. After the purchase, Sarah is helping us manage the home as a luxury rental property and her help is invaluable.",
    author: "R. Goldman",
  },
 
];

export default function TestimonialSection() {
  return (
    <section id="testimonial-section" className="py-10 lg:py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4 font-medium">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-foreground">
              Trusted by Clients
            </h2>
          </div>

          {/* Buttons move into client component so this stays server */}
          <div className="hidden md:flex gap-2" />
        </div>
      </div>

      {/* Client-only carousel */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* CTA (server) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 text-center">
        <p className=" text-muted-foreground mb-6">
          Ready to be the next success story?
        </p>
        <a
          href="tel:+13108717600"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-lg font-medium tracking-wider  hover:bg-primary/90 transition-colors rounded-sm"
        >
          <Phone className="h-4 w-4" />
          Let&apos;s Chat
        </a>
      </div>
    </section>
  );
}
