'use client'

import { useState } from "react"
import Image from "next/image"
import type React from "react"
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"


export default function ContactForm(){

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" })
  }

    return(
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
          {/* Form */}
          <div className="bg-secondary/30 p-8 md:p-10 rounded-lg">
            <h3 className="text-2xl font-serif font-light text-foreground mb-2">Send a Message</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Fill out the form and I&apos;ll be in touch within 24 hours.
            </p>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
                <p className="text-foreground font-medium">Thank you!</p>
                <p className="text-muted-foreground mt-2">I&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors rounded-sm"
                      placeholder="Full Name *"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors rounded-sm"
                      placeholder="Phone Number *"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors rounded-sm"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors text-muted-foreground rounded-sm"
                  >
                    <option value="">Interested in...</option>
                    <option value="buying">Buying in Malibu/LA</option>
                    <option value="selling">Selling my property</option>
                    <option value="both">Selling & Buying</option>
                    <option value="investing">Investment opportunities</option>
                    <option value="consultation">General consultation</option>
                  </select>
                </div>

                <div>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none rounded-sm"
                    placeholder="Tell me more about what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Details */}
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

            {/* Quick Call CTA */}
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