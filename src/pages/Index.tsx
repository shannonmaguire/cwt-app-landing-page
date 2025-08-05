import { TestimonialBadge } from "@/components/portal/TestimonialBadge";
import HeroSection from "@/components/portal/HeroSection";
import FeatureOverview from "@/components/portal/FeatureOverview";
import { AppPreview } from "@/components/portal/AppPreview";
import TestimonialSection from "@/components/portal/TestimonialSection";
import PricingSection from "@/components/portal/PricingSection";
import FAQSection from "@/components/portal/FAQSection";

const Index = () => {
  return (
    <div>
      <TestimonialBadge />
      <HeroSection />
      <FeatureOverview />
      <AppPreview />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default Index;
