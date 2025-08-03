import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import globeImage from "@/assets/globe-hero.jpg";
import bookImage from "@/assets/book-hero.jpg";
import brainImage from "@/assets/brain-hero.jpg";
import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/lib/background-removal";

// Change this to switch between hero images: 'globe', 'book', or 'brain'
const HERO_IMAGE_TYPE: 'globe' | 'book' | 'brain' = 'brain';

export function HeroSection() {
  const [processedBrainImage, setProcessedBrainImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Process brain image to remove background
  useEffect(() => {
    if (HERO_IMAGE_TYPE === 'brain' && !processedBrainImage && !isProcessing) {
      setIsProcessing(true);
      const processImage = async () => {
        try {
          const response = await fetch(brainImage);
          const blob = await response.blob();
          const img = await loadImage(blob);
          const processedBlob = await removeBackground(img);
          const processedUrl = URL.createObjectURL(processedBlob);
          setProcessedBrainImage(processedUrl);
        } catch (error) {
          console.error('Failed to process brain image:', error);
          // Fallback to original image
          setProcessedBrainImage(brainImage);
        } finally {
          setIsProcessing(false);
        }
      };
      processImage();
    }
  }, [processedBrainImage, isProcessing]);

  // Select hero image based on type
  const getHeroImage = () => {
    switch (HERO_IMAGE_TYPE) {
      case 'book':
        return { src: bookImage, alt: "Open book representing the full financial story", className: "w-full h-full object-contain" };
      case 'brain':
        return { 
          src: processedBrainImage || brainImage, 
          alt: "Brain representing financial intelligence and pattern recognition", 
          className: "w-full h-full object-contain filter drop-shadow-lg" 
        };
      default:
        return { src: globeImage, alt: "Earth globe representing global creator economy", className: "w-full h-full object-cover rounded-full" };
    }
  };

  const heroImage = getHeroImage();

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Centered Content */}
        <div className="space-y-12">
          
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                You need the full story.
              </h1>
              
              <div className="space-y-4 max-w-3xl mx-auto">
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
                className="bg-foreground text-background hover:bg-foreground/90 hover:scale-105 px-8 py-3 text-base font-semibold rounded-full min-w-[200px] transition-all duration-200 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 bg-background/50 hover:bg-secondary/30 hover:scale-105 px-8 py-3 text-base rounded-full min-w-[200px] group transition-all duration-200"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                See Demo
              </Button>
            </div>
          </div>

          {/* Brain Visual - Centered */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Subtle background glow representing neural connections */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10 rounded-full blur-2xl scale-125"></div>
              
              {/* Financial data patterns floating around brain */}
              <div className="absolute top-8 left-8 animate-pulse">
                <div className="text-xs font-mono text-primary/60 bg-primary/10 px-2 py-1 rounded">$12.5K</div>
              </div>
              <div className="absolute top-1/4 right-4 animate-bounce delay-200">
                <div className="text-xs font-mono text-accent/60 bg-accent/10 px-2 py-1 rounded">+23%</div>
              </div>
              <div className="absolute bottom-1/3 left-4 animate-pulse delay-500">
                <div className="text-xs font-mono text-secondary/60 bg-secondary/10 px-2 py-1 rounded">Pattern</div>
              </div>
              <div className="absolute bottom-8 right-8 animate-bounce delay-700">
                <div className="text-xs font-mono text-primary/60 bg-primary/10 px-2 py-1 rounded">Trend↗</div>
              </div>
              
              {/* Main Brain Image */}
              <div className="relative z-10 aspect-square flex items-center justify-center p-8">
                {isProcessing ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <img 
                    src={heroImage.src} 
                    alt={heroImage.alt} 
                    className={heroImage.className}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}