import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function AboutSection(){
    return(
        <section id="about-section" className="py-20 lg:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
          {/* Content */}
          <div className="lg:pt-8">
            <h2 className="text-3xl md:text-4xl font-serif font-light leading-tight tracking-tight text-foreground">
              Why AskSarahConner.com
            </h2>
            
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg text-center lg:text-left">
              <p>
              At AskSarahConner.com, we redefine the art of  real estate. Specializing in high-end properties that captivate and inspire, we provide an unparalleled experience for those seeking extraordinary homes and investment opportunities. Our portfolio spans the world’s most prestigious locations, offering a curated selection of residences that embody sophistication, craftsmanship, and timeless beauty.
              </p>
              <p>
              With a deep understanding of the luxury market, our team combines expertise, discretion, and personalized service to guide you through every facet of your real estate journey. Whether you're looking for a private estate, a penthouse in the heart of the city, or a secluded retreat by the water, we connect you with properties that reflect your unique taste and lifestyle.
              </p>
              <p>
              We don’t just sell homes—we offer an experience. Every interaction is built on trust, dedication, and a commitment to exceeding expectations.  With Sarah, luxury is not a price tag, it’s a promise.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a
                href="tel:+13105551234"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors rounded-md"
              >
                <Phone className="h-4 w-4" />
                Let's Chat
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 text-sm font-medium tracking-wide hover:bg-secondary transition-colors rounded-md"
              >
                Send Me a Note
              </a>
              <Link
                href="/why-ASC"
                className="inline-flex items-center gap-3 text-accent hover:text-primary transition-colors text-sm font-medium tracking-wide py-4"
              >
                <Heart className="h-4 w-4" />
                Get to Know Me Better
              </Link>
            </div>
          </div>
        </div>
      </div>
        </section>
    )
}