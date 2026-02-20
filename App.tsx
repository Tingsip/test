import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/sections/HeroSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { HowItWorksSection } from '@/sections/HowItWorksSection';
import { PricingSection } from '@/sections/PricingSection';
import { TrackingSection } from '@/sections/TrackingSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { StatsSection } from '@/sections/StatsSection';
import { FAQSection } from '@/sections/FAQSection';
import { ContactSection } from '@/sections/ContactSection';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <PricingSection />
        <TrackingSection />
        <TestimonialsSection />
        <StatsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
