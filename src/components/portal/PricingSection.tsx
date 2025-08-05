import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Creator",
      price: "$29",
      period: "/month",
      description: "Perfect for individual creators getting serious about their finances",
      icon: Zap,
      color: "from-primary/10 to-primary/5",
      borderColor: "border-primary/20",
      popular: false,
      features: [
        "Track unlimited revenue streams",
        "Smart expense categorization",
        "Basic goal setting & tracking",
        "Monthly financial reports",
        "Mobile app access",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Advanced intelligence for growing creator businesses",
      icon: Crown,
      color: "from-accent/20 to-accent/10",
      borderColor: "border-accent/30",
      popular: true,
      features: [
        "Everything in Creator",
        "AI-powered revenue insights",
        "Industry benchmarking",
        "Advanced analytics & forecasting",
        "Tax-ready financial reports",
        "Custom goal milestones",
        "Priority support",
        "API integrations"
      ]
    },
    {
      name: "Agency",
      price: "$199",
      period: "/month",
      description: "For agencies and multi-creator businesses",
      icon: Rocket,
      color: "from-secondary/20 to-secondary/10",
      borderColor: "border-secondary/30",
      popular: false,
      features: [
        "Everything in Pro",
        "Manage multiple creators",
        "Team collaboration tools",
        "White-label reporting",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security features",
        "Custom onboarding"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Intelligence Level
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every plan includes the core financial intelligence features. Scale up as your creator business grows.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 ${plan.borderColor} bg-gradient-to-b ${plan.color} ${
                plan.popular ? 'scale-105 shadow-2xl' : 'shadow-lg'
              } transition-all duration-300 hover:scale-105`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent to-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full py-3 text-lg font-semibold rounded-full transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-accent to-primary text-white hover:shadow-lg hover:scale-105'
                    : 'bg-foreground text-background hover:bg-foreground/90'
                }`}
              >
                Start {plan.name} Plan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-muted-foreground mb-6">
              If Creator Wealth Tools doesn't reveal hidden revenue opportunities worth more than your subscription cost in the first 30 days, we'll refund every penny. No questions asked.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                Instant access
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                Free migration support
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to unlock your revenue intelligence?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your 30-Day Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Setup in under 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;