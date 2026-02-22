import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import ContactFormClient from "@/components/client/contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-accent mb-4 font-medium">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-foreground">
            Let&apos;s Connect
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re buying, selling, or exploring possibilities in
            southern California I&apos;m here to help make your real estate
            goals a reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Client-only Form */}
          <ContactFormClient />

          {/* Server-rendered Contact Details */}
          <div>
            <div className="mb-12">
              <Image
                src="/Sarah-Port.webp"
                alt="Sarah Conner"
                width={128}
                height={128}
                className="w-32 h-32 object-cover mx-auto lg:mx-0"
              />
            </div>

            <div className="mt-8 flex items-center gap-4">
              <h3 className="text-2xl font-medium text-foreground mb-2">
                Sarah Conner
              </h3>
              <span
                aria-hidden="true"
                className="w-px h-6 bg-muted-foreground/60"
              />
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/sarahbethconner/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sarah-beth-rena-conner-22776620/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href="https://www.instagram.com/asksarahconner/"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <p className="text-muted-foreground mb-8">
              Real Estate Advisor | The Agency
            </p>

            <div className="space-y-6">
              <a
                href="tel:+13108717600"
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(310) 871-7600</span>
              </a>

              <a
                href="mailto:sarahsunshineconner@icloud.com"
                className="flex items-center gap-4 text-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>sarahsunshineconner@icloud.com</span>
              </a>

              <div className="flex items-start gap-4 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-1" />
                <div className="not-italic">
                  <div className="mb-4 flex items-center justify-center lg:justify-start gap-3">
                    {/* <Image
                      src="/Agencylogo.webp"
                      alt="The Agency logo"
                      width={56}
                      height={20}
                      className="object-contain w-14 h-auto"
                      /> */}
                    <h4 className=" uppercase tracking-[0.2em] text-accent font-medium">
                      the agency
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <address className="not-italic sm:pr-4">
                      331 Foothill Rd #100
                      <br />
                      Beverly Hills, CA 90210
                    </address>

                    <address className="not-italic sm:border-l sm:border-muted-foreground/40 sm:pl-4">
                      73-545 El Paseo #2504
                      <br />
                      Palm Desert, CA 92260
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons */}

            <div className="mt-12 p-6 bg-secondary">
              <p className="text-foreground mb-4">Prefer to talk?</p>
              <a
                href="tel:+3108717600"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
