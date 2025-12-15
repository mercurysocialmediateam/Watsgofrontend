import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Features } from './components/Features';
import { WhyChooseWatsGo } from './components/WhyChooseWatsGo';
import { HowItWorks } from './components/HowItWorks';
import { DashboardPreview } from './components/DashboardPreview';
import { UseCases } from './components/UseCases';
import { AutomationSection } from './components/AutomationSection';
import { Pricing } from './components/Pricing';
import { ComparisonTable } from './components/ComparisonTable';
import { PricingFAQ } from './components/PricingFAQ';
import { Testimonials } from './components/Testimonials';
import { DownloadApp } from './components/DownloadApp';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WelcomePopup } from './components/WelcomePopup';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <WelcomePopup />
      <Hero />
      <TrustSection />
      <Features />
      <WhyChooseWatsGo />
      <HowItWorks />
      <DashboardPreview />
      <UseCases />
      <AutomationSection />
      <Pricing />
      <ComparisonTable />
      <PricingFAQ />
      <Testimonials />
      <DownloadApp />
      <FinalCTA />
      <Footer />
    </div>
  );
}