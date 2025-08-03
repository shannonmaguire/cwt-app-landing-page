import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import globeImage from "@/assets/globe-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        
        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            You need the full story.
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Most creators know the brand, the collab, the PayPal balance. But they don't 
              know the pattern. They don't know what's working. And they don't know what 
              it all adds up to.
            </p>
            
            <p className="text-lg md:text-xl text-foreground font-medium italic">
              Creator Wealth Tools gives you the full picture so you can make 
              smarter moves with your money.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-base font-semibold rounded-full min-w-[200px]"
          >
            Get the System
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border/50 bg-background/50 hover:bg-secondary/30 px-8 py-3 text-base rounded-full min-w-[200px] group"
          >
            Book a walkthrough
            <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Globe Image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-90">
        <img 
          src={globeImage} 
          alt="Earth globe representing global creator economy" 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </section>
  );
}