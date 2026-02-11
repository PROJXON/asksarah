"use client"

import { useState } from "react"
import type React from "react"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
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

  return (
    <div className="bg-secondary/30 p-8 md:p-10 rounded-lg">
      <h3 className="text-2xl font-serif font-light text-foreground mb-2">
        Send a Message
      </h3>
      <p className="text-sm text-muted-foreground mb-8">
        Fill out the form and I&apos;ll be in touch within 24 hours.
      </p>

      {submitted ? (
        <div className="py-12 text-center">
          <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" />
          <p className="text-foreground font-medium">Thank you!</p>
          <p className="text-muted-foreground mt-2">
            I&apos;ll be in touch within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors rounded-sm"
                placeholder="Full Name *"
              />
            </div>

            <div>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors rounded-sm"
                placeholder="Phone Number *"
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors rounded-sm"
              placeholder="Email Address"
            />
          </div>

          <div>
            <select
              value={formData.interest}
              onChange={(e) =>
                setFormData({ ...formData, interest: e.target.value })
              }
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
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
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
  )
}
