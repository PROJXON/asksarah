import Link from "next/link";
import { Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Use 1 / 2 / 4 columns so layout adapts gradually and avoids overlap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logos */}
          <div className="flex flex-col items-start gap-6 min-w-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full flex-wrap">
              <div className="max-w-[150px] w-full sm:w-auto">
                <Image
                  src="/ASC-transparent-logo.png"
                  alt="Ask Sarah Conner"
                  width={110}
                  height={30}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="max-w-[120px] w-full sm:w-auto">
                <Image
                  src="/agency-logo.svg"
                  alt="The Agency"
                  width={64}
                  height={18}
                  className="w-full h-auto object-contain rounded-sm"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-start gap-4 min-w-0">
            <h4 className="font-medium text-lg tracking-wider font-serif mb-2">
              Navigate
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link
                href="#about"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words whitespace-normal"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words whitespace-normal"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words whitespace-normal"
              >
                Ask
              </Link>
              <Link
                href="#listings"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words whitespace-normal"
              >
                Portfolio
              </Link>
              <Link
                href="/why-ASC"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words whitespace-normal"
              >
                More About Sarah Conner
              </Link>
            </nav>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col items-start gap-4 min-w-0">
            <h4 className="font-medium tracking-wider font-serif text-lg mb-2">
              Contact
            </h4>
            <div className="space-y-3 w-full">
              <a
                href="tel:+1310-871-7600"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words whitespace-normal"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                (310) 871-7600
              </a>
              <a
                href="mailto:sarah@asksarahconner.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words whitespace-normal"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                sarah@asksarahconner.com
              </a>
            </div>

            <div className="mt-3 w-full">
              <h4 className="font-medium tracking-wider font-serif text-lg mb-3">
                Socials
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/sarah-beth-rena-conner-22776620/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/sarahbethconner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/asksarahconner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* CAR Membership Badge */}
            <div className="flex items-center gap-4 mt-2 min-w-0">
              <span className="font-medium tracking-wider font-serif text-lg mb-2 whitespace-nowrap">
                Member of
              </span>

              {/* Keep the badges on a single line: prevent wrapping and allow horizontal scroll on very small screens */}
              <div className="flex items-center gap-4 flex-nowrap overflow-x-auto">
                <div className="max-w-[140px] flex-shrink-0">
                  <Image
                    src="/REALTOR-trans.png"
                    alt="REALTOR"
                    width={140}
                    height={70}
                    className="w-auto h-14 object-contain rounded-sm filter brightness-0 invert"
                  />
                </div>
                <div className="max-w-[120px] flex-shrink-0">
                  <Image
                    src="/CAR-trans.png"
                    alt="California Association of Realtors"
                    width={140}
                    height={70}
                    className="w-auto h-14 object-contain rounded-sm filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-start gap-4 min-w-0">
            <h4 className="font-medium tracking-wider font-serif text-lg mb-2">
              Offices
            </h4>
            <address className="not-italic text-primary-foreground/60 leading-relaxed break-words whitespace-normal">
              <div>
                <span className="font-medium">The Agency — Beverly Hills</span>
                <br />
                331 Foothill Rd #100
                <br />
                Beverly Hills, CA 90210
              </div>
              <div className="mt-3">
                <span className="font-medium">The Agency — Palm Desert</span>
                <br />
                73-545 El Paseo #2504
                <br />
                Palm Desert, CA 92260
                <br />
                United States
              </div>
            </address>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <div className="flex items-center gap-6 flex-wrap">
            <p className="text-primary-foreground/50">
              Copyright © {new Date().getFullYear()} Ask Sarah Conner. All rights reserved.
            </p>
            <a
              href="https://www.projxon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/50 hover:underline"
              title="Projxon — external link"
              aria-label="Projxon website (opens in a new tab)"
            >
              Powered by <span className="text-white">PROJXON</span>
            </a>
          </div>

          <div className="max-w-[120px] w-full sm:w-auto">
            <Image
              src="/ASC-transparent-logo.png"
              alt="Ask Sarah Conner logo"
              width={96}
              height={28}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
