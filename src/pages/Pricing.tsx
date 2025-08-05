import { Button } from "@/components/ui/button";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { Check, Zap, Crown, Rocket, ArrowRight, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Creator",
      price: "$29",
      period: "/month",
      description: "Perfect for creators who want complete financial clarity",
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
      description: "Financial intelligence for serious creator businesses",
      icon: Crown,
      color: "from-accent/20 to-accent/10",
      borderColor: "border-accent/30",
      popular: true,
      features: [
        "Everything in Creator",
        "AI-powered revenue insights",
        "Industry benchmarking",
        "Advanced analytics & forecasting",
        "Professional financial reports",
        "Custom goal milestones",
        "Priority support",
        "API integrations"
      ]
    },
    {
      name: "Agency",
      price: "$199",
      period: "/month",
      description: "Enterprise intelligence for agencies and multi-creator teams",
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

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing differences."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and ACH bank transfers for annual plans. All payments are processed securely."
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level 256-bit encryption and never store your banking credentials. We only have read-only access to transaction data."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the insights and value provided, we'll refund your payment."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. You'll retain access until the end of your billing period."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(97, 86, 144, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(97, 86, 144, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Intelligence Level
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
              Every plan includes the core financial intelligence features. Scale up as your creator business grows.
              <br />
              <strong className="text-foreground">Start your 30-day free trial today.</strong>
            </p>

            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-background"></div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">2,000+ creators</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
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
            <div className="text-center bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 mb-16">
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

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Unlock Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Revenue Intelligence?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Join 2,000+ creators who've discovered patterns worth millions in their revenue data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Your 30-Day Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/5 px-8 py-4 rounded-full text-lg font-semibold"
              >
                Schedule Live Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Setup in under 5 minutes • Bank-level security
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;