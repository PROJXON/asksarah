import {
  // Heart,
  // Users,
  // Award,
  // Sparkles,
  // Shield,
  // Home,
  Wrench,
  Network,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "More About Sarah Conner | Ask Sarah Conner",
  description:
    "Get to know Sarah Conner - her passion for people, unmatched drive, and personalized approach to luxury real estate from Malibu to the desert.",
};

// const qualities = [
//   {
//     icon: Heart,
//     title: "Passion for People",
//     description:
//       "She is drawn to real estate because she loves helping people find their dream homes and build family wealth. Her integrity, thoughtfulness, and business savvy ensure clients achieve their greatest possible results.",
//     number: "01",
//   },
//   {
//     icon: Sparkles,
//     title: "Unmatched Drive",
//     description:
//       "Her care for clients and unmatched work ethic ensure consistently reliable, detail-oriented service. Clients receive meticulous support before, during, and after transactions.",
//     number: "02",
//   },
//   {
//     icon: Award,
//     title: "Personalized Experience",
//     description:
//       "Known for her strategic mindset, creative vision, and deeply personal approach, Sarah brings a rare combination of business acumen and emotional intelligence to every transaction. With a background in entrepreneurship, marketing, and real estate investment, she helps clients navigate the market with clarity, confidence, and optimal results.",
//     number: "03",
//   },
//   {
//     icon: Shield,
//     title: "Gets the Job Done",
//     description:
//       "Her win/win negotiating style and dependability take the stress out of the real estate process. This isn\u2019t reality TV — it\u2019s real life: no drama, no fuss — just results.",
//     number: "04",
//   },
//   {
//     icon: Users,
//     title: "Dynamic Partnership",
//     description:
//       "Sarah and her business partner Pate collectively bring unparalleled real estate knowledge that spans from Malibu to the desert. Together they\u2019ve closed over one billion dollars in transactions.",
//     number: "05",
//   },
//   {
//     icon: Home,
//     title: "White Glove Service",
//     description:
//       "With Sarah, buyers maximize their potential in creating their dream home and secure the best leverage for their investment. Sellers realize the highest financial potential of their property and sell faster. Every transaction is handled thoughtfully with white-glove, concierge-level service.",
//     number: "06",
//   },
// ];

export default function WhySarahPage() {
  return (
    <main className="bg-background min-h-screen">
      <section className="py- lg:py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm tracking-[0.15em] uppercase text-primary font-medium mb-4">
                More About Sarah Conner
              </p>
              <div className="mt-20 space-y-6 text-muted-foreground leading-relaxed text-lg">
                <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground leading-tight -mt-8 md:-mt-10 relative z-10">
                  A Legacy Unlocked
                </h2>
                <p>
                  {
                    "Sarah's real estate career began with her own family's portfolio \u2014 buying, renovating, and managing properties across Southern California. As she began helping friends find homes and investment opportunities, the next step came naturally."
                  }
                </p>
                <p>
                  {
                    "Today, she is known for her talent for unlocking a property's full potential through smart design and thoughtful strategy. Whether clients are selling their home or moving into a new one, her team transforms spaces to enhance their appeal and maximize their value."
                  }
                </p>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/Sarah-Conner.webp"
                alt="Sarah Conner portrait"
                className="w-full h-full object-cover"
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Qualities - Numbered Cards
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
                className="bg-background p-8 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group relative overflow-hidden"
              >
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
      </section> */}

      {/* Partnership - Split with accent background */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-[#1a1a1a]  overflow-hidden shadow-sm rounded-xl">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-10 md:p-16 text-black">
                <p className="text-sm tracking-[0.2em] uppercase text-primary-foreground/50 font-medium mb-4">
                  Our Partnership
                </p>
                <h2 className="text-3xl md:text-5xl font-serif font-light text-primary-foreground leading-tight">
                  Sarah And Pate
                </h2>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-4xl md:text-4xl font-sans italic font-light text-primary">
                    $1B+
                  </span>
                  <span className="text-primary-foreground/60 font-sans italic ">
                    in closed transactions
                  </span>
                </div>
                <div className="mt-8 space-y-5 text-primary-foreground/80 text-lg leading-relaxed">
                  <p>
                    Pate and Sarah partner on each transaction, working
                    seamlessly together. They have closed over one billion
                    dollars in real estate transactions.
                  </p>
                  <p>
                    Their combined expertise spans from Malibu to the desert,
                    ensuring every client receives unparalleled service and
                    results.
                  </p>
                </div>
              </div>
              <div className="aspect-square lg:aspect-auto lg:h-full">
                <Image
                  src="/SarahandPate.webp"
                  alt="Sarah Conner and Pate Stevens"
                  className="w-full h-full object-cover"
                  width={600}
                  height={600}
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
            <div className="bg-background p-10 md:p-12 rounded-xl border border-border relative overflow-hidden group hover:border-primary/20 transition-all">
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
                    " Whether you're selling your home or moving into a new one, our talented design team, led by celebrity designer Mark Williams, is here to help you achieve your goals. With an eye for detail and a passion for elegance, we transform spaces to enhance their appeal and maximize their value. Trust us to bring your vision to life and make your property stand out in the market."
                  }
                </p>
              </div>
            </div>

            <div className="bg-background p-10 md:p-12 rounded-xl border border-border relative overflow-hidden group hover:border-primary/20 transition-all">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-50 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Network className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-2xl font-serif font-light text-foreground mb-2">
                  Valuble Network
                </h3>
                <p className="text-sm text-primary font-medium mb-4">
                  Trusted Resources on Speed Dial
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {
                    "All of Sarah's friends ask her for advice pertaining to the most expert methods to promote real estate, interior and exterior design, service people and trusted resources.  When you hire Sarah you get access to her valuable network whether you need an electrician, solar, gardening or any type of service and repair."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
