import Link from "next/link";
import { Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center w-full h-full gap-">
              <Image
                src="/ASC-transparent-logo.png"
                alt="Ask Sarah Conner"
                width={220}
                height={60}
                className=" w-auto"
              />

              <Image
                src="/agency-logo.svg"
                alt="The Agency"
                width={120}
                height={32}
                className="h-20 w-auto rounded-sm"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg tracking-wider font-serif mb-6">
              Navigate
            </h4>
            <nav className="space-y-3">
              <Link
                href="#about"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors "
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors "
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors "
              >
                Ask
              </Link>
              <Link
                href="#listings"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors "
              >
                Portfolio
              </Link>
              <Link
                href="/why-ASC"
                className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors "
              >
                More About Sarah Conner
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium tracking-wider font-serif text-lg mb-6">
              Contact
            </h4>
            <div className="space-y-3 ">
              <a
                href="tel:+3108717600"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                (310) 871-7600
              </a>
              <a
                href="mailto:sarah@theagencyre.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                sarahsunshineconner@icloud.com
              </a>
            </div>

            {/* Socials */}
            <div className="mt-6">
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
            <address className="not-italic text-primary-foreground/60  mt-6 leading-relaxed">
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

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
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

          <div>
            <Image
              src="/ASC-transparent-logo.png"
              alt="Ask Sarah Conner logo"
              width={120}
              height={34}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
