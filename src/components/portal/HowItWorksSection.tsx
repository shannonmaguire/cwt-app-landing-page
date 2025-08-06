import { ArrowRight, Link, Eye, Brain } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Link,
      title: "Connect Your Platforms",
      description: "Link your creator platforms, payment processors, and business accounts with secure, one-click connections.",
      details: "Supports PayPal, Stripe, bank accounts, and major creator platforms like YouTube, Instagram, TikTok, and more."
    },
    {
      icon: Eye,
      title: "See Your Income Flows",
      description: "Wintle automatically organizes and categorizes all your income streams, giving you a clear view of your creative business.",
      details: "Smart categorization learns your business patterns and automatically tags income sources for easy understanding."
    },
    {
      icon: Brain,
      title: "Gain Financial Intelligence",
      description: "Discover patterns, trends, and insights in your creative income that help you make better business decisions.",
      details: "Identify your most profitable content, best-performing platforms, and seasonal income patterns."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Wintle brings{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              clarity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to transform your financial chaos into clear, actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connection Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary/30 to-transparent">
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-primary/50" />
                </div>
              )}
              
              <div className="text-center p-8 bg-card/30 backdrop-blur border border-border/30 rounded-2xl hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-primary mb-2">Step {i + 1}</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                  <p className="text-sm text-muted-foreground/80 italic">{step.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20 mb-8">
            <Brain className="w-4 h-4" aria-hidden="true" />
            Most creators see their first insights within 24 hours
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;