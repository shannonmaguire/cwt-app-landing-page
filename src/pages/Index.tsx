import { PortalHeader } from "@/components/portal/PortalHeader";
import { TestimonialBadge } from "@/components/portal/TestimonialBadge";
import { HeroSection } from "@/components/portal/HeroSection";
import { AppPreview } from "@/components/portal/AppPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      
      <main>
        <TestimonialBadge />
        <HeroSection />
        <AppPreview />
      </main>
    </div>
  );
};

export default Index;
