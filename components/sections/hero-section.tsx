import { Phone } from "lucide-react";
import { HeroSlider } from "../client/hero-slider";

export default function HeroSection() {
  return (
    <HeroSlider>
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="tel:+1310871760"
          className="bg-white text-stone-800 px-10 py-5 text-base font-medium tracking-wide hover:bg-white/90 transition-all flex items-center gap-3 rounded-md"
        >
          <Phone className="h-5 w-5" />
          Let&apos;s Talk
        </a>
        <a
          href="/why-ASC"
          className="border border-white/60 text-white px-10 py-5 text-base font-medium tracking-wide hover:bg-white/10 hover:border-white transition-colors rounded-md"
        >
          Get to know Sarah
        </a>
      </div>
    </HeroSlider>
  );
}
