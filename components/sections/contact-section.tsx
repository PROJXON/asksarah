import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import ContactFormClient from "@/components/client/contact-form"

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
            Whether you&apos;re buying, selling, or exploring possibilities in Malibu
            or Los Angeles, I&apos;m here to help make your real estate goals a reality.
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
                className="w-32 h-32 object-cover rounded-full mx-auto lg:mx-0"
              />
            </div>

            <h3 className="text-xl font-medium text-foreground mb-2">Sarah Conner</h3>
            <p className="text-muted-foreground mb-8">Real Estate Advisor | The Agency</p>

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
                <address className="not-italic">
                  The Agency Beverly Hills<br />
                  9465 Wilshire Blvd<br />
                  Beverly Hills, CA 90212
                </address>
              </div>
            </div>

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
  )
}
