import { CtaContactSection } from "./cta-contact";
import { FaqSection } from "./faq";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { HowItWorksSection } from "./how-it-works";
import { WhySection } from "./why";
import { ZamarFieldSection } from "./zamar-field";

export function LandingPage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <HowItWorksSection />
        <ZamarFieldSection />
        <FaqSection />
        <CtaContactSection />
      </main>
      <Footer />
    </div>
  );
}
