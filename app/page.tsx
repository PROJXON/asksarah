
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section"; 
import ReviewSection from "@/components/sections/testimonial-section";
import PropertiesSection from "@/components/sections/properties-section";
import { StatsSection } from "@/components/sections/stats-section";
import ContactForm from "@/components/sections/contact-section";
import { FloatingSarahButton } from "@/components/client/sarah-button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      <HeroSection />
      <StatsSection />
      <AboutSection />
      <PropertiesSection/>
      <ReviewSection />
      <ContactForm />
      <FloatingSarahButton />

    </main>
  )
}
