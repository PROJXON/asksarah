"use client"

import { Phone, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type Stat = { value: ReactNode; label: string };
const stats: Stat[] = [
  { value: "$1B+", label: "Sales to Date" },
  { value: "#02272182", label: "License:" },
  {
    value: <span className="text-red-600">The Agency</span>,
    label: "Beverly Hills & Palm Desert",
  },
];

type Service = {
  id: string;
  title: string;
  teaser: string;
  media?: { type: "image" | "video"; src: string; alt?: string };
  details: string;
  steps?: string[];
};

const services: Service[] = [
  {
    id: "finding",
    title: "Finding Your Home",
    teaser: "Let’s discover properties that match your lifestyle and dreams",
    media: { type: "image", src: "/SarahRedDress.webp", alt: "Finding your home" },
    details:
      "Personalized search, neighborhood insights, and guided tours tailored to your needs.",
    steps: [
      "You're Not Just Buying a House — You're Choosing Your Future. A home is where birthdays are celebrated, milestones happen, and memories are made. We protect your family's security, your financial future, and your peace of mind.",
      "You Deserve Someone Who Stands on Your Side. We work exclusively for you — not the seller or the platform. Sarah & Pate negotiate for your best price, protect you from hidden risks, and tell you the truth even when it's hard.",
      "Experience Brings Calm to Emotional Decisions. We anticipate problems before they happen, guide you step‑by‑step, and turn confusion into clarity so confidence replaces anxiety.",
      "Sarah & Pate See What You Might Miss. We look beyond staging and emotion to uncover foundation issues, overpricing, and risky contract terms to protect you from costly mistakes.",
      "Negotiation Is Emotional — Strategy Shouldn't Be. We negotiate with strategy instead of pressure, data instead of guesswork, and patience instead of panic to achieve better terms and stronger offers.",
      "Trust Is Earned Through Transparency. We explain every step clearly, break down complex contracts, encourage questions, and never rush your decision so you always feel supported.",
      "With You Beyond Closing Day. We remain a resource for contractor recommendations, market value updates, and future buying or selling advice — building relationships for life.",
      "\"Buying a home is one of the biggest decisions you'll ever make. You deserve someone who protects your investment, respects your dreams, and stands firmly in your corner — every step of the way.\""
    ],
  },
  {
    id: "selling",
    title: "Selling Your Home",
    teaser: "Strategic marketing to showcase what makes your home special",
    media: { type: "video", src: "/IMG_0597.MOV", alt: "Selling your home" },
    details:
      "Strategic pricing, powerful marketing, expert negotiation, and white‑glove transaction management to maximize your net proceeds and minimize stress.",
    steps: [
      "Proven Track Record of Results — We consistently sell homes at or above asking price. Backed by market data and strong negotiation skills, we help sellers maximize equity — not leave money on the table.",
      "Strategic Pricing Expertise — Pricing isn't guesswork. We analyze local trends, buyer demand, and recent comparable sales to position your home to attract competition — and competition drives price up.",
      "Powerful Marketing That Creates Demand — More exposure = more buyers = higher offers. We deploy professional photography & video, targeted digital advertising, social media campaigns, and MLS syndication to major platforms to create urgency and demand.",
      "Expert Negotiation That Protects Your Bottom Line — Anyone can get an offer; not everyone can negotiate one. We create bidding wars when possible, negotiate repairs and contingencies strategically, and structure deals to reduce risk and increase certainty.",
      "White‑Glove Experience from Start to Finish — Clear communication at every step, a step‑by‑step plan and timeline, vendor coordination (staging, repairs, inspections), and full transaction management so there are no surprises.",
      "Strategic Home Preparation Guidance — Small improvements can mean big returns. We advise what to fix (and what not to fix), staging recommendations, ROI‑focused upgrades, and pre‑listing strategies. In some cases we can arrange strategic renovations and payment can come out of escrow.",
      "Local Market Authority — Deep Southern California market knowledge, buyer psychology, and micro‑market insights give you an edge over agents who simply list and wait.",
      "Transparent Communication & Accountability — You deserve to know exactly what's happening with your biggest asset. We provide showing feedback, honest advice, and consistent updates so you always know where things stand.",
      "A Network That Works for You — From lenders and inspectors to contractors and attorneys, we bring a trusted network to ensure a smooth closing and faster resolution of issues.",
      "Client Success Stories & Social Proof — Past clients consistently describe the experience as professional, stress‑free, and highly profitable. Testimonials build trust — and results reinforce it."
    ],
  },
  {
    id: "wealth",
    title: "Building Wealth",
    teaser: "Smart investment opportunities to grow your portfolio",
    media: { type: "image", src: "/Wealth.webp", alt: "Building wealth" },
    details:
      "Long-term investment strategies and portfolio analysis for sustained growth.",
    steps: [
      "Investment goal assessment",
      "Market research and opportunity sourcing",
      "Acquisition and asset management advice",
      "Exit planning and tax considerations",
      "Real estate is a relationship business. Over time, Sarah and Pate have built strong connections with agents, investors, lenders, contractors, and local experts. These relationships give them access to off-market deals, early leads, and insider insights that aren’t available through public listing platforms.",
      "Experts & Continuous Learners — Market conditions evolve constantly, and so do Sarah and Pate. They are committed to lifelong learning—studying shifts, attending industry events, and adapting their approach to new trends—to ensure they are always tuned to the best opportunities available.",
      "Proactive & Resourceful — Rather than waiting for good deals to surface, Sarah and Pate actively search for them—using creative tools, public records, targeted research, and strategic outreach to uncover properties that others miss. Whether it’s identifying a motivated seller or spotting a future growth corridor, their approach is never passive.",
      "Clear Communication & Trust — Sarah and Pate prioritize transparent, honest communication—sharing insights, explaining opportunities clearly, and building trust with every investor they work with. Their goal is not just to find properties, but to build long-term success for each person they partner with. Whether you are interested in an exchange property, achieving tax benefits by investing in real estate, or creating a profitable real estate portfolio, Sarah and Pate can be your trusted team."
    ],
  },
];

function Modal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-6 overflow-y-auto"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative z-10 max-w-3xl w-full mx-auto bg-white/95 dark:bg-slate-900/95 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between p-6 border-b dark:border-slate-700">
          <h3 className="text-2xl font-serif font-medium text-foreground">
            {service.title}
          </h3>
          <button
            aria-label="Close"
            onClick={onClose}
            className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 grid  gap-6">
          <div className="md:col-span-1 w-full aspect-[4/3] overflow-hidden rounded">
          </div>

          <div className="md:col-span-2">
            <p className="text-lg text-muted-foreground mb-4">{service.teaser}</p>
            <p className="text-foreground mb-4">{service.details}</p>

            {service.steps?.length ? (
              <>
                <h4 className="font-medium mb-2">Typical steps</h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                  {service.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </>
            ) : null}

            <div className="flex items-center gap-4 mt-4">
              <a onClick={onClose} href="#contact"
                className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="text-lg font-medium">Contact to discuss</span>
              </a>
              <button
                onClick={onClose}
                className="ml-auto px-4 py-2 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatsSection() {
  const [openService, setOpenService] = useState<Service | null>(null);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-serif font-medium tracking-tight text-foreground">
            Built on Experience And Results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Strategic guidance for luxury real estate in southern California.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-sans italic text-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-base text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 mt-20">
          <h2 className="text-4xl md:text-4xl font-serif font-light tracking-tight text-foreground">
            What support are you looking for?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Whether buying a first home, selling a cherished property, or
            exploring investment opportunities, expert guidance is provided
            every step of the way.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setOpenService(s)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg text-left"
            >
              {s.media?.type === "image" ? (
                <Image
                  src={s.media.src}
                  alt={s.media.alt || s.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              ) : s.media?.type === "video" ? (
                <video
                  src={s.media.src}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : null}

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent group-hover:from-slate-900/70 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/30">
                <h3 className="text-2xl font-serif font-light text-white tracking-wide">
                  {s.title}
                </h3>
                <p className="text-white/70 text-lg mt-1">{s.teaser}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4 ">Not sure where to start?</p>
          <a
            href="tel:+13108717600"
            className="inline-flex items-center gap-3 text-foreground hover:text-accent transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="text-lg font-medium">Let&apos;s talk</span>
          </a>
        </div>
      </div>

      {openService && (
        <Modal service={openService} onClose={() => setOpenService(null)} />
      )}
    </section>
  );
}
