export type Testimonial = {
  id: string;
  title: string;
  quote: string;
  client: string;
  date: string;
  meta?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "jessica",
    title: "Beyond Expectations!",
    quote:
      "The exquisite viewing of my new home will always be one of my most cherished memories thanks to Sarah!",
    client: "Jessica",
    date: "2025-09-10",
    meta: "Private buyer | Malibu preview",
  },
  {
    id: "reshawna-devine",
    title: "Elegance Redefined!",
    quote: "Amazing experience with fabulous people!",
    client: "ReShawna Devine",
    date: "2025-08-05",
    meta: "Luxury seller | Beverly Hills",
  },
  {
    id: "jones-family",
    title: "Why ever go anywhere else",
    quote:
      "Sarah made every step in the process seamless and forever unforgettable!",
    client: "Mr. & Mrs. Jones",
    date: "2025-09-02",
    meta: "Estate sale | Pacific Palisades",
  },
  {
    id: "david-smith",
    title: "Wonderful Experience",
    quote:
      "Sarahs experience and knowledge of the Palms Spring and adjacent areas proved invaluable to us. She was and is an important asset for us for referrals to numerous other professionals in the area that we have already utilized their services. Most importantly just a fantastic human being and could not endorse her services as a luxury agent any more strongly.",
    client: "David Smith, OMM Partner",
    date: "2025-09-22",
    meta: "Investment acquisition | Greater Palm Springs",
  },
  {
    id: "joyce-brandman",
    title: "Quicker than the rest!",
    quote:
      "Sarah sold my house in just 3 days with multiple offers. Other agents had it for five years. She is the best agent I have ever hired!",
    client: "Joyce Brandman Foundation",
    date: "2025-09-13",
    meta: "Foundation leadership | Seller",
  },
  {
    id: "jacob-tauber",
    title: "Best in business!",
    quote:
      "Sarah is the most fantastic realtor I've ever hired. She located an incredible home, and negotiated below market price in Rancho Mirage, CA. I cant say enough about her and what she does for me. She assisted with many aspects of the negotiation, has gone above and beyond in helping me meet contractor's, and find furnishings! She did not just disappear after the sale!",
    client: 'Jacob E. "Jack" Tauber, MD',
    date: "2025-10-03",
    meta: "Rancho Mirage acquisition | Concierge services",
  },
  {
    id: "lori-martin-gregory",
    title: "Incredible Strategist",
    quote:
      "Sarah is an incredible strategist, a talented entrepreneur, a visionary and a community leader. She is an asset to any project or organization she works with, and has the perfect combination of soft touch and hardline negotiator",
    client: "Lori Martin Gregory, MBA",
    date: "2017-10-06",
    meta: "Entrepreneur & community leader",
  },
];

