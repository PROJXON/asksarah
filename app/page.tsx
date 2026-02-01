
import { HeroSection } from "@/components/hero-section";
import AboutSection from "@/components/server/about-section"; 
import ReviewSection from "@/components/testimonial-section";
import { PropertiesSection } from "@/components/properties-section";
import { StatsSection } from "@/components/server/stats-section";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      <HeroSection />
      <StatsSection />
      <AboutSection />
      <PropertiesSection/>
      <ReviewSection />
      <ContactForm />

    </main>
  )
}
