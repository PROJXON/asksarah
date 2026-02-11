import {
  Phone,
  Mail,
  ArrowLeft,
  Heart,
  Users,
  Award,
  Sparkles,
  Shield,
  Home,
  Wrench,
  Star,
  Network,
  Quote,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "More About Sarah Conner | Ask Sarah Conner",
  description:
    "Get to know Sarah Conner - her passion for people, unmatched drive, and personalized approach to luxury real estate from Malibu to the desert.",
};

const qualities = [
  {
    icon: Heart,
    title: "Passion for People",
    description:
      "I\u2019m drawn to real estate because I love helping people find their dream homes and build their family wealth. My integrity, thoughtfulness, and business savvy ensure my clients achieve their greatest possible results.",
    number: "01",
  },
  {
    icon: Sparkles,
    title: "Unmatched Drive",
    description:
      "My care for my clients and unmatched work ethic mean you will receive constantly reliable, detail-oriented service. I provide meticulous service before, during, and after transactions.",
    number: "02",
  },
  {
    icon: Award,
    title: "Personalized Experience",
    description:
      "Known for my strategic mindset, creative vision, and deeply personal approach, I bring a rare combination of business acumen and emotional intelligence to every transaction. With a background in entrepreneurship, marketing, and real estate investment, I help my clients navigate the market with clarity, confidence, and greatest results.",
    number: "03",
  },
  {
    icon: Shield,
    title: "Gets the Job Done",
    description:
      "My win/win negotiating style and dependability take the stress out of the real estate process. This isn\u2019t reality TV, this is your real life. No drama, no fuss \u2014 all results.",
    number: "04",
  },
  {
    icon: Users,
    title: "Dynamic Partnership",
    description:
      "My business partner Pate and I collectively bring unparalleled real estate knowledge that spans from Malibu to the desert. Together we\u2019ve closed over one billion dollars in transactions.",
    number: "05",
  },
  {
    icon: Home,
    title: "White Glove Service",
    description:
      "With me, buyers maximize their potential in creating their dream home and create the best leverage for their investment. Sellers realize the highest financial potential of their property and sell faster. Every transaction is handled thoughtfully with white glove concierge-level service.",
    number: "06",
  },
];

const funFacts = [
  { label: "Pacific Palisades resident", icon: MapPin },
  { label: "Proud Mom", icon: Heart },
  { label: "MBA, Pepperdine", icon: Award },
  { label: "Tennis lover", icon: Star },
  { label: "Trail hiker", icon: Sparkles },
  { label: "Community leader", icon: Users },
  { label: "Dog lover", icon: Heart },
];

export default function WhySarahPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero - Photo Collage Grid */}
      <section className="">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-6 items-end">
            {/* Main portrait */}
            <div className="lg:col-span-5">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src="/Sarah-Conner.webp"
                  alt="Sarah Conner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Text + smaller images */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Big name */}
              <div>
                <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-4">
                  Nice to Meet You
                </p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-foreground tracking-tight leading-none">
                  {"I'm Sarah Conner"}
                </h1>
                <div className="mt-4 w-20 h-1 bg-primary rounded-full" />
              </div>

              {/* Two smaller images side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/Malibu-Coast.webp"
                    alt="Malibu coastline"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/Desert-Beauty.webp"
                    alt="Desert beauty"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Tagline under images */}
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                From the stunning Malibu coastline to the serene beauty of the
                Coachella Valley, I help people find homes they love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts - Interactive Cards */}
      <section className="py-12 lg:py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {funFacts.map((fact) => (
              <span
                key={fact.label}
                className="inline-flex items-center gap-2 px-5 py-3 bg-secondary border border-border rounded-full text-sm text-foreground hover:border-primary/40 hover:bg-red-50 transition-all cursor-default group"
              >
                <fact.icon className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors" />
                {fact.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro - Large Editorial Text */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-foreground leading-relaxed">
            {
              "I’m drawn to real estate because I love helping people find their dream homes and build their family wealth — and my integrity, thoughtfulness, and business savvy ensure my clients achieve their greatest possible results."
            }
          </p>
        
        </div>
      </section>

      {/* Legacy Story - Magazine Layout */}
      <section className="py-16 lg:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-8xl md:text-9xl font-serif font-light text-primary/10 leading-none block">
                Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground leading-tight -mt-8 md:-mt-10 relative z-10">
                A Legacy Unlocked
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  {
                    "My real estate career began with my own family\u2019s portfolio \u2014 buying, renovating, and managing properties across Southern California. As I began helping friends find homes and investment opportunities, the next step came naturally."
                  }
                </p>
                <p>
                  {
                    "Today, I\u2019m known for my talent for unlocking a property\u2019s full potential through smart design and thoughtful strategy. Whether you\u2019re selling your home or moving into a new one, my team transforms spaces to enhance their appeal and maximize their value."
                  }
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="/Sarah-Port.webp"
                  alt="Sarah Conner portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-lg">
                <p className="text-3xl font-serif font-light">30+</p>
                <p className="text-sm text-primary-foreground/70">
                  Years in Real Estate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote - Big & Bold */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 mb-8">
            <Quote className="w-7 h-7 text-primary" />
          </div>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground leading-snug">
            {"We don\u2019t just sell homes \u2014 we offer an "}
            <span className="text-primary italic">experience</span>
            {". Luxury is not a price tag, it\u2019s a "}
            <span className="text-primary italic">promise</span>.
          </blockquote>
        </div>
      </section>

      {/* Qualities - Numbered Cards */}
      <section className="py-16 lg:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium mb-4">
              Why Clients Choose Sarah
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground">
              Six Reasons to Work With Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualities.map((quality) => (
              <div
                key={quality.title}
                className="bg-background p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group relative overflow-hidden"
              >
                {/* Large background number */}
                <span className="absolute top-4 right-6 text-7xl font-serif font-light text-primary/[0.07] leading-none">
                  {quality.number}
                </span>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <quality.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-3">
                    {quality.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {quality.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership - Split with accent background */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-foreground rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-10 md:p-16">
                <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/50 font-medium mb-4">
                  Our Partnership
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-primary-foreground leading-tight">
                  Sarah & Pate
                </h2>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-5xl md:text-6xl font-serif font-light text-primary">
                    $1B+
                  </span>
                  <span className="text-primary-foreground/60 text-sm">
                    in closed transactions
                  </span>
                </div>
                <div className="mt-8 space-y-5 text-primary-foreground/80 leading-relaxed">
                  <p>
                     Pate and I are partners who work seamlessly on each and every
                    transaction together. We've closed over one billion dollars in real
                    estate transactions.
                  </p>
                  <p>
                    Our combined expertise spans from Malibu to the desert,
                    ensuring every client receives unparalleled service and
                    results.
                  </p>
                </div>
              </div>
              <div className="aspect-square lg:aspect-auto lg:h-full">
                <img
                  src="/SarahandPate.webp"
                  alt="Sarah Conner and Pate Stevens"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Team & Network */}
      <section className="py-16 lg:py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-background p-10 md:p-12 rounded-3xl border border-border relative overflow-hidden group hover:border-primary/20 transition-all">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-red-50 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Wrench className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-2xl font-serif font-light text-foreground mb-2">
                  Top Tier Design Team
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  Led by Mark Williams
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "Whether you\u2019re selling your home or moving into a new one, our talented design team, led by celebrity designer Mark Williams, is here to help you achieve your goals. With an eye for detail and a passion for elegance, we transform spaces to enhance their appeal and maximize their value. Trust us to bring your vision to life and make your property stand out in the market."
                  }
                </p>
              </div>
            </div>

            <div className="bg-background p-10 md:p-12 rounded-3xl border border-border relative overflow-hidden group hover:border-primary/20 transition-all">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-50 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Network className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-2xl font-serif font-light text-foreground mb-2">
                  My Network is Your Network
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  Trusted Resources on Speed Dial
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "All of my friends ask me for advice on the best methods to promote real estate, interior and exterior design, service people, and trusted resources. When you work with me, you get access to my valuable network \u2014 whether you need an electrician, solar, gardening, or any type of service and repair."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pacific Palisades - Lifestyle Image */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img
                src="/Pasadilla.webp"
                alt="Pacific Palisades community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full text-sm text-primary font-medium mb-6">
                <MapPin className="w-3.5 h-3.5" />
                My Home Base
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground leading-tight">
                Pacific Palisades Local
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                {
                  "I\u2019m a Palisades resident and former Chair of the Pacific Palisades Residents Association. I\u2019m not just an agent \u2014 I\u2019m a neighbor who genuinely cares about the people and places that make this community home."
                }
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground border border-border">
                  Former PPRA Chair
                </span>
                <span className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground border border-border">
                  Community Advocate
                </span>
                <span className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground border border-border">
                  Local Expert
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Warm & Fun
      <section className="py-20 lg:py-28 bg-primary rounded-t-[3rem]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-8">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-primary-foreground leading-tight">
            {"Let\u2019s Find Your Place"}
          </h2>
          <p className="mt-6 text-primary-foreground/80 text-lg max-w-xl mx-auto leading-relaxed">
            {
              "I\u2019d love to hear about what you\u2019re looking for. No pressure, just a conversation between friends."
            }
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+13108717600"
              className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-full font-medium hover:bg-background/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call (310) 871-7600
            </a>
            <a
              href="mailto:sarah@theagency.com"
              className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send Me a Note
            </a>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to homepage
          </Link>
        </div>
      </section> */}
    </main>
  );
}
