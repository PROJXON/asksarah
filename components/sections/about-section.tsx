import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about-section" className="py-10 lg:py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4 font-medium">
              About Us
            </p>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                With a track record of over $1 billion in successfully closed
                transactions, AskSarahConner.com redefines the art of real
                estate. Specializing in high-end properties that captivate and
                inspire, we provide an unparalleled experience for those seeking
                extraordinary homes and investment opportunities. Our portfolio
                spans the {"world\u2019s"} most prestigious locations, offering
                a curated selection of residences that embody sophistication,
                craftsmanship, and timeless beauty.
              </p>
              <p>
                With a deep understanding of the luxury market, our team
                combines expertise, discretion, and personalized service to
                guide you through every facet of your real estate journey.
                Whether {"you\u2019re"} looking for a private estate, a
                penthouse in the heart of the city, or a secluded retreat by the
                water, we connect you with properties that reflect your unique
                taste and lifestyle.
              </p>
              <p className="text-foreground font-serif text-2xl leading-relaxed">
                {
                  "We don\u2019t just sell homes\u2014we offer an experience. Every interaction is built on trust, dedication, and a commitment to exceeding expectations. With Sarah, luxury is not a price tag, it\u2019s a promise."
                }
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a
                href="tel:+13105551234"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-base font-medium tracking-wide hover:bg-primary/90 transition-colors rounded-md"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 text-base font-medium tracking-wide hover:bg-secondary transition-colors rounded-md"
              >
                Contact Us
              </a>
              <Link
                href="/why-ASC"
                className="inline-flex items-center gap-3 text-accent hover:text-primary transition-colors text-base font-medium tracking-wide py-4"
              >
                More about Sarah Conner
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/SarahandPate.webp"
                alt="Sarah Conner - Luxury Real Estate Agent"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="my-20 border-t border-border">
          <div className="max-w-4xl mx-auto ">
            <h2 className="text-4xl md:text-5xl font-serif font-normal leading-tight tracking-tight text-foreground text-center">
              Why AskSarahConner.com?
            </h2>
            <div className="mt-12 flex flex-col gap-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Selling or buying a home is among the biggest transactions most
                will make in their lifetime. While exciting, the process can
                also be stressful. This is true even for the most experienced
                buyers and sellers. There are always many variables to consider,
                ranging from property-type, price and location to financing,
                taxes and renovations.
              </p>
              <p>
                Not surprisingly, when weighing all these factors, one common
                denominator
                {" emerges\u2026"} which is for clients to have many questions.
                After all, everyone wants to make the right moves and check all
                the boxes on their wish list. For this reason, we have found
                that providing insightful answers brings confidence and calm.
              </p>
              <p>
                {
                  "This belief was the genesis for \u201CAskSarahConner.com.\u201D We want you to enjoy the peace of mind that comes from knowing that all your questions and concerns are welcome and will be addressed. Our answers are based on decades of experience, with over $1 billion in successfully closed sales."
                }
              </p>
              <p>
                {
                  "We also have a wide range of allied partners who can be tapped when specialized expertise is needed, such as for real estate law, taxes, banking, design and construction. Whether it\u2019s for a personal residence or an investment property, rest assured we have the answers you\u2019re looking for."
                }
              </p>
            </div>

            <div className="mt-10 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-primary hover:text-foreground transition-colors text-sm font-heading font-medium tracking-[0.15em] uppercase"
              >
                Contact Us With Your Questions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
