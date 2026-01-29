import { Phone } from "lucide-react";
import Image from "next/image";

export default function AboutSection(){
    return(
        <section id="about-section" className="py-20 lg:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/professional-elegant-real-estate-agent-woman.jpeg"
                alt="Sarah Conner - Luxury Real Estate Agent"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Content */}
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-accent mb-6 font-medium">
              Meet Sarah
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight tracking-tight text-foreground">
              Your Trusted Advisor in Malibu & Los Angeles
            </h2>
            
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
              Sarah Conner is a trusted real estate advisor based in The Agency&apos;s Beverly Hills office, serving Los Angeles, Malibu, and the Desert. She is known for her integrity, strategic mindset, and deeply personal approach—helping buyers and sellers navigate the market with clarity, confidence, and exceptional results.
              </p>
              <p>
              With a background in entrepreneurship, marketing, and real estate investment, Sarah brings both business savvy and emotional intelligence to every transaction. Her career began by managing and renovating her own family&apos;s Southern California properties, which naturally grew into helping friends and clients find homes and build long-term wealth. Today, she is recognized for unlocking a property&apos;s full potential through thoughtful strategy and smart design.
              </p>
              <p>
              Clients value Sarah&apos;s meticulous service before, during, and after every transaction, as well as her access to a trusted network of designers and service professionals—from contractors and electricians to solar and landscaping experts. Whether preparing a home for market or finding the perfect next chapter, Sarah ensures every detail is handled with care.
              </p>
              <p>
              Sarah holds an MBA from Pepperdine and a Master&apos;s in Communication from the University of Oklahoma. She lives between Pacific Palisades and Rancho Mirage, giving her unique insight into both markets. Outside of real estate, she serves as Board Chair of the Pacific Palisades Residents Association, supports several philanthropic organizations, and enjoys hiking, tennis, and time with her three college-aged children.
              </p>
            </div>


            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:+3108717600"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm"
              >
                <Phone className="h-4 w-4" />
                Let&apos;s Connect
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-secondary transition-colors rounded-sm"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
        </section>
    )
}