import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { removeBackground } from "@/lib/background-removal";
import brainHero from "@/assets/brain-hero.jpg";
import { ArrowRight, TrendingUp, DollarSign, Brain, Zap } from "lucide-react";

// Configuration for different hero images
const HERO_IMAGE_TYPE = 'brain'; // 'brain', 'book', or 'globe'

const HeroSection = () => {
  const [processedBrainImage, setProcessedBrainImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processBrainImage = async () => {
      try {
        setIsProcessing(true);
        
        const loadImage = (src: string): Promise<HTMLImageElement> => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
          });
        };

        const img = await loadImage(brainHero);
        const processedBlob = await removeBackground(img);
        const processedDataUrl = URL.createObjectURL(processedBlob);
        setProcessedBrainImage(processedDataUrl);
      } catch (error) {
        console.error('Error processing brain image:', error);
        setProcessedBrainImage(brainHero);
      } finally {
        setIsProcessing(false);
      }
    };

    processBrainImage();
  }, []);

  const getHeroImage = () => {
    switch (HERO_IMAGE_TYPE) {
      case 'brain':
        return {
          src: brainHero,
          alt: "Financial Intelligence Brain",
          className: "w-full h-full object-cover"
        };
      default:
        return {
          src: brainHero,
          alt: "Creator Wealth Tools Financial Intelligence",
          className: "w-full h-full object-cover"
        };
    }
  };

  const heroImage = getHeroImage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(97, 86, 144, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(97, 86, 144, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'pulse 4s ease-in-out infinite'
        }} />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <Brain className="w-4 h-4" />
              Financial Intelligence Platform
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
                You need the{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  full story
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Most creators know the <em>brand deal</em>, the <em>collab rate</em>, the PayPal notification. 
                <br />
                <strong className="text-foreground">But they don't know the patterns, the signals, the real money moves.</strong>
              </div>
            </div>

            {/* Value Props */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, text: "Revenue Intelligence", desc: "See which content actually pays" },
                { icon: DollarSign, text: "Total Money Clarity", desc: "Every dollar from every platform, tracked" },
                { icon: Brain, text: "Creator-Smart Insights", desc: "AI that gets the creator economy" },
                { icon: Zap, text: "Real-time Updates", desc: "Live data from all your platforms" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-all duration-300 hover:scale-105">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{item.text}</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Get My Creator Financial Intelligence
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/5 px-8 py-4 rounded-full text-lg font-semibold"
              >
                See How Creators Use This
              </Button>
            </div>

            {/* Social Proof */}
            <div className="text-sm text-muted-foreground">
              Trusted by <strong className="text-foreground">2,000+</strong> creators who've tracked over <strong className="text-foreground">$50M</strong> in brand deals, sponsorships & revenue
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Brain Visual */}
            <div className="relative z-10 max-w-lg mx-auto">
              {/* Floating Intelligence Cards */}
              <div className="absolute -top-8 -left-8 z-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="bg-card/80 backdrop-blur border border-border/50 rounded-xl p-4 shadow-lg">
                  <div className="text-xs text-muted-foreground mb-1">This Month's Brand Deals</div>
                  <div className="text-lg font-bold text-foreground">$12,400</div>
                  <div className="text-xs text-accent flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +23% vs last month
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-12 z-20 animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="bg-card/80 backdrop-blur border border-border/50 rounded-xl p-4 shadow-lg">
                  <div className="text-xs text-muted-foreground mb-1">Active Revenue Streams</div>
                  <div className="text-lg font-bold text-foreground">8 platforms</div>
                  <div className="text-xs text-accent">All synced automatically</div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-4 z-20 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                <div className="bg-card/80 backdrop-blur border border-border/50 rounded-xl p-4 shadow-lg">
                  <div className="text-xs text-muted-foreground mb-1">Revenue Goal</div>
                  <div className="text-lg font-bold text-foreground">78% Complete</div>
                  <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                    <div className="bg-accent h-1.5 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 z-20 animate-fade-in" style={{ animationDelay: '2s' }}>
                <div className="bg-card/80 backdrop-blur border border-border/50 rounded-xl p-4 shadow-lg">
                  <div className="text-xs text-muted-foreground mb-1">Hottest Right Now</div>
                  <div className="text-lg font-bold text-foreground">Affiliate Sales</div>
                  <div className="text-xs text-accent">+156% growth this quarter</div>
                </div>
              </div>

              {/* Central Brain with Processing Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  {processedBrainImage ? (
                    <img
                      src={processedBrainImage}
                      alt={heroImage.alt}
                      className={heroImage.className}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Brain className="w-20 h-20 text-primary/50 animate-pulse" />
                    </div>
                  )}
                  
                  {/* Processing Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Orbiting Elements */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-primary/60 rounded-full animate-pulse"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `
                      translate(-50%, -50%) 
                      rotate(${i * 60}deg) 
                      translateY(-180px)
                    `,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}
            </div>

            {/* Intelligence Metrics Bar */}
            <div className="mt-12 grid grid-cols-3 gap-4 opacity-80">
              {[
                { label: "Revenue Streams", value: "12", change: "+3" },
                { label: "Monthly Growth", value: "23%", change: "+5%" },
                { label: "Accuracy Rate", value: "99.7%", change: "Perfect" }
              ].map((metric, i) => (
                <div key={i} className="text-center p-3 bg-muted/30 rounded-lg border border-border/30">
                  <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                  <div className="text-xs text-accent mt-1">{metric.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;