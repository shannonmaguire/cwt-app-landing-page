import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import globeImage from "@/assets/globe-hero.jpg";
import bookImage from "@/assets/book-hero.jpg";
import brainImage from "@/assets/brain-hero.jpg";

// Change this to switch between hero images: 'globe', 'book', or 'brain'
const HERO_IMAGE_TYPE: 'globe' | 'book' | 'brain' = 'brain';

export function HeroSection() {
  // Select hero image based on type
  const getHeroImage = () => {
    switch (HERO_IMAGE_TYPE) {
      case 'book':
        return { src: bookImage, alt: "Open book representing the full financial story", className: "w-full h-full object-contain" };
      case 'brain':
        return { src: brainImage, alt: "Brain representing financial intelligence", className: "w-full h-full object-contain" };
      default:
        return { src: globeImage, alt: "Earth globe representing global creator economy", className: "w-full h-full object-cover rounded-full" };
    }
  };

  const heroImage = getHeroImage();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                You need the full story.
              </h1>
              
              <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
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
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 hover:scale-105 px-8 py-3 text-base font-semibold rounded-full min-w-[200px] transition-all duration-200"
              >
                Get the System
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 bg-background/50 hover:bg-secondary/30 hover:scale-105 px-8 py-3 text-base rounded-full min-w-[200px] group transition-all duration-200"
              >
                Book a walkthrough
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Main Image */}
              <div className="relative z-10 aspect-square flex items-center justify-center p-8">
                <img 
                  src={heroImage.src} 
                  alt={heroImage.alt} 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 left-8 animate-bounce">
                <div className="w-3 h-3 bg-accent rounded-full opacity-60"></div>
              </div>
              <div className="absolute top-1/4 right-4 animate-pulse">
                <div className="w-2 h-2 bg-primary rounded-full opacity-40"></div>
              </div>
              <div className="absolute bottom-1/4 left-4 animate-bounce delay-300">
                <div className="w-4 h-4 bg-secondary rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}