import { PortalHeader } from "@/components/portal/PortalHeader";
import { TestimonialBadge } from "@/components/portal/TestimonialBadge";
import HeroSection from "@/components/portal/HeroSection";
import FeatureOverview from "@/components/portal/FeatureOverview";
import { AppPreview } from "@/components/portal/AppPreview";
import TestimonialSection from "@/components/portal/TestimonialSection";
import PricingSection from "@/components/portal/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      
      <main>
        <TestimonialBadge />
        <HeroSection />
        <FeatureOverview />
        <AppPreview />
        <TestimonialSection />
        <PricingSection />
      </main>
    </div>
  );
};

export default Index;
