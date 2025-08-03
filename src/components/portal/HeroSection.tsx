import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, DollarSign, Brain, Target, Zap, BarChart3 } from "lucide-react";
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
                Start Your Financial Intelligence
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-border/50 bg-background/50 hover:bg-secondary/30 hover:scale-105 px-8 py-3 text-base rounded-full min-w-[200px] group transition-all duration-200"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Watch Intelligence Demo
              </Button>
            </div>
          </div>

          {/* Revolutionary Brain Intelligence Hub */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl lg:max-w-3xl h-96 lg:h-[500px]">
              
              {/* Neural Network Background */}
              <div className="absolute inset-0">
                {/* Animated gradient layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/15 to-secondary/20 rounded-full blur-3xl scale-150 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-accent/8 via-primary/12 to-secondary/15 rounded-full blur-2xl scale-125 animate-pulse delay-1000"></div>
                
                {/* Neural connection lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  
                  {/* Animated connection paths */}
                  <path d="M50,150 Q200,50 350,150" stroke="url(#neuralGrad)" strokeWidth="2" fill="none" className="animate-pulse delay-200">
                    <animate attributeName="stroke-dasharray" values="0,1000;50,950;100,900;0,1000" dur="4s" repeatCount="indefinite" />
                  </path>
                  <path d="M50,250 Q200,350 350,250" stroke="url(#neuralGrad)" strokeWidth="2" fill="none" className="animate-pulse delay-500">
                    <animate attributeName="stroke-dasharray" values="0,1000;50,950;100,900;0,1000" dur="4s" repeatCount="indefinite" />
                  </path>
                  <path d="M150,50 Q200,200 250,350" stroke="url(#neuralGrad)" strokeWidth="1.5" fill="none" className="animate-pulse delay-700">
                    <animate attributeName="stroke-dasharray" values="0,800;40,760;80,720;0,800" dur="3s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>

              {/* Advanced Financial Insights Floating Around */}
              <div className="absolute top-8 left-8 animate-bounce">
                <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-semibold">Revenue Pattern</span>
                  </div>
                  <div className="text-xs text-primary/80 mt-1">+127% this quarter</div>
                </div>
              </div>

              <div className="absolute top-16 right-12 animate-pulse delay-300">
                <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 px-3 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-accent">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm font-semibold">$47.2K</span>
                  </div>
                  <div className="text-xs text-accent/80">Monthly recurring</div>
                </div>
              </div>

              <div className="absolute top-1/3 left-4 animate-bounce delay-500">
                <div className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 px-3 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-secondary">
                    <Target className="h-4 w-4" />
                    <span className="text-sm font-semibold">Optimization</span>
                  </div>
                  <div className="text-xs text-secondary/80">AI-powered insights</div>
                </div>
              </div>

              <div className="absolute bottom-1/3 right-8 animate-pulse delay-700">
                <div className="bg-primary/20 backdrop-blur-sm border border-primary/30 px-3 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-primary">
                    <BarChart3 className="h-4 w-4" />
                    <span className="text-sm font-semibold">ROI Analysis</span>
                  </div>
                  <div className="text-xs text-primary/80">312% improvement</div>
                </div>
              </div>

              <div className="absolute bottom-12 left-12 animate-bounce delay-1000">
                <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 px-3 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-accent">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm font-semibold">Smart Alerts</span>
                  </div>
                  <div className="text-xs text-accent/80">Pattern detected</div>
                </div>
              </div>

              <div className="absolute top-1/2 right-4 animate-pulse delay-1200">
                <div className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 px-3 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2 text-secondary">
                    <Brain className="h-4 w-4" />
                    <span className="text-sm font-semibold">Intelligence</span>
                  </div>
                  <div className="text-xs text-secondary/80">Learning patterns</div>
                </div>
              </div>

              {/* Floating data particles */}
              <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-ping delay-500"></div>
              <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-secondary/40 rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-1/6 right-1/4 w-2.5 h-2.5 bg-primary/30 rounded-full animate-ping delay-1500"></div>

              {/* Main Brain Image - Center Stage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                  {/* Pulsing energy rings */}
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-4 border border-accent/20 rounded-full animate-ping delay-300"></div>
                  <div className="absolute inset-8 border border-secondary/20 rounded-full animate-ping delay-600"></div>
                  
                  {/* Brain container with enhanced effects */}
                  <div className="relative w-full h-full flex items-center justify-center p-8">
                    {isProcessing ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="relative">
                          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
                          <div className="absolute inset-0 animate-spin rounded-full h-16 w-16 border-r-2 border-accent delay-150"></div>
                        </div>
                      </div>
                    ) : (
                      <div className="relative group">
                        <img 
                          src={heroImage.src} 
                          alt={heroImage.alt} 
                          className={`${heroImage.className} group-hover:scale-105 transition-all duration-500 group-hover:filter group-hover:drop-shadow-2xl`}
                        />
                        {/* Interactive glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-secondary rounded-full shadow-lg"></div>
                </div>
              </div>

              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-secondary to-primary rounded-full shadow-lg"></div>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Intelligence Metrics Bar */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary">97%</div>
                <div className="text-xs text-muted-foreground">Pattern Recognition</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-accent">3.2x</div>
                <div className="text-xs text-muted-foreground">Revenue Growth</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-xs text-muted-foreground">Smart Monitoring</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-xs text-muted-foreground">Prediction Accuracy</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-accent">47ms</div>
                <div className="text-xs text-muted-foreground">Real-time Analysis</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-2xl font-bold text-secondary">∞</div>
                <div className="text-xs text-muted-foreground">Learning Potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}