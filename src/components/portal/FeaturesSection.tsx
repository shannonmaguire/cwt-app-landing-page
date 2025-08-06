import { Brain, TrendingUp, Shield, Zap, DollarSign, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Financial Intelligence",
      description: "Wintle understands your creative income patterns and provides insights that actually make sense for your business.",
      details: ["Pattern recognition across all revenue streams", "Smart categorization of income sources", "Predictive insights for better planning"]
    },
    {
      icon: TrendingUp,
      title: "Income Flow Visibility", 
      description: "See how your creative work translates into income flows. Understand which projects and platforms drive real results.",
      details: ["Real-time income tracking", "Platform performance analysis", "Revenue stream comparison"]
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "Your financial data stays secure and private. Wintle processes your information with bank-level security.",
      details: ["End-to-end encryption", "No data selling", "GDPR compliant"]
    },
    {
      icon: Zap,
      title: "Effortless Integration",
      description: "Connect your platforms once and let Wintle handle the rest. No manual entry, no spreadsheet chaos.",
      details: ["One-click platform connections", "Automatic data sync", "Smart duplicate detection"]
    },
    {
      icon: DollarSign,
      title: "Smart Categorization",
      description: "Wintle learns your business and automatically categorizes income, expenses, and business patterns.",
      details: ["AI-powered categorization", "Custom business rules", "Tax-ready organization"]
    },
    {
      icon: Users,
      title: "Creator-Focused Tools",
      description: "Built specifically for modern creators who need clarity, not complexity in their financial tools.",
      details: ["Creator-specific metrics", "Platform-aware insights", "Business growth guidance"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Financial clarity that{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              makes sense
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wintle provides the financial intelligence modern creators need to understand, 
            manage, and grow their income with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="group p-8 bg-card/50 backdrop-blur border border-border/50 rounded-2xl hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
              
              <ul className="space-y-2">
                {feature.details.map((detail, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;