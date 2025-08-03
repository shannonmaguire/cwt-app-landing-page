import { 
  TrendingUp, 
  PlusCircle, 
  Target, 
  BarChart3, 
  Brain, 
  Users, 
  FileText,
  ArrowRight,
  DollarSign,
  Tag,
  Calendar,
  Download
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: TrendingUp,
    title: "Income Source Tracking",
    description: "Track earnings from brand deals, affiliate platforms, UGC, coaching, and more. Group by client, platform, or category.",
    highlight: "Multi-platform integration",
    color: "primary"
  },
  {
    icon: PlusCircle,
    title: "Entry Logging System",
    description: "Income & expense tracking with custom tags. Attach sources and notes to every transaction for complete clarity.",
    highlight: "Custom categorization",
    color: "accent"
  },
  {
    icon: Target,
    title: "Goals Dashboard",
    description: "Set & track monthly income targets. Create specific financial goals like 'New camera' or 'Save $10K' with progress tracking.",
    highlight: "Visual progress tracking",
    color: "secondary"
  },
  {
    icon: BarChart3,
    title: "Category Sorting",
    description: "Sort earnings by type (Services, UGC, Affiliate, Product, etc.). Assign entries into groups for better analysis.",
    highlight: "Smart categorization",
    color: "primary"
  },
  {
    icon: Brain,
    title: "Trends & Insights",
    description: "Line graphs of income growth, spot high-earning streams, understand fluctuations month-over-month with AI-powered insights.",
    highlight: "AI-powered analysis",
    color: "accent"
  },
  {
    icon: Users,
    title: "Referral Program",
    description: "Earn $20 for every new user referred. Clean dashboard with referral tracking and automated payouts.",
    highlight: "$20 per referral",
    color: "secondary"
  },
  {
    icon: FileText,
    title: "Export-Ready Data",
    description: "Export entries for tax prep. CPA-ready documentation of income streams with professional formatting.",
    highlight: "Tax-ready exports",
    color: "primary"
  }
];

export function FeatureOverview() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4" />
            Financial Intelligence Platform
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Everything you need to understand your creator income
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stop guessing about your financial patterns. Get the complete picture of your creator economy 
            with tools designed for serious income analysis and growth planning.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorMap = {
              primary: "text-primary bg-primary/10 border-primary/20",
              accent: "text-accent bg-accent/10 border-accent/20", 
              secondary: "text-secondary bg-secondary/10 border-secondary/20"
            };
            
            return (
              <Card key={index} className="group relative p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                {/* Feature Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorMap[feature.color]} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                
                {/* Feature Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Highlight Badge */}
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {feature.highlight}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-2xl lg:text-3xl font-bold text-foreground">$2.3M+</span>
              </div>
              <p className="text-sm text-muted-foreground">Creator income tracked</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Tag className="h-5 w-5 text-accent" />
                <span className="text-2xl lg:text-3xl font-bold text-foreground">15K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Income entries logged</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-secondary" />
                <span className="text-2xl lg:text-3xl font-bold text-foreground">24/7</span>
              </div>
              <p className="text-sm text-muted-foreground">Real-time tracking</p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Download className="h-5 w-5 text-primary" />
                <span className="text-2xl lg:text-3xl font-bold text-foreground">1-Click</span>
              </div>
              <p className="text-sm text-muted-foreground">Tax-ready exports</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to get the full story of your creator income?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 hover:scale-105 px-8 py-3 text-base font-semibold rounded-full min-w-[200px] transition-all duration-200 group"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 bg-background/50 hover:bg-secondary/30 hover:scale-105 px-8 py-3 text-base rounded-full min-w-[200px] group transition-all duration-200"
            >
              <Brain className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              See Intelligence Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}