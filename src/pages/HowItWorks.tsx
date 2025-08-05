import { Button } from "@/components/ui/button";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { ArrowRight, Brain, Zap, Target, BarChart3, Users, FileSpreadsheet, TrendingUp, DollarSign, Shield, ArrowUpRight, Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Connect Your Revenue Streams",
      description: "Link your payment platforms, brand partnerships, and income sources. Our secure integration connects to PayPal, Stripe, bank accounts, and major creator platforms.",
      features: [
        "Bank-level security (256-bit encryption)",
        "Read-only access - we never touch your money",
        "Automatic transaction syncing",
        "Support for 50+ payment platforms"
      ],
      mockup: (
        <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Connected Accounts</h3>
            <div className="text-accent text-sm">4 Connected</div>
          </div>
          
          <div className="space-y-3">
            {[
              { name: "PayPal Business", status: "Connected", amount: "$45,200" },
              { name: "Stripe Account", status: "Connected", amount: "$28,400" },
              { name: "Chase Business", status: "Connected", amount: "$12,800" },
              { name: "Venmo", status: "Connected", amount: "$3,200" }
            ].map((account, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <div>
                    <div className="font-medium text-sm text-foreground">{account.name}</div>
                    <div className="text-xs text-accent">{account.status}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-foreground">{account.amount}</div>
                  <div className="text-xs text-muted-foreground">This month</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      step: "02", 
      title: "AI Categorizes Everything",
      description: "Our financial intelligence engine automatically identifies, categorizes, and tags every transaction. Brand deals, UGC payments, affiliate commissions - all sorted instantly.",
      features: [
        "Smart pattern recognition",
        "Custom category creation",
        "Automatic recurring payment detection",
        "Manual override capabilities"
      ],
      mockup: (
        <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">AI Processing</h3>
            <div className="flex items-center gap-2 text-accent text-sm">
              <Brain className="w-4 h-4" />
              99.7% Accuracy
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { transaction: "NIKE BRAND PARTNERSHIP", amount: "$8,500", category: "Brand Deal", confidence: "99%" },
              { transaction: "SEPHORA UGC PAYMENT", amount: "$2,400", category: "UGC", confidence: "97%" },
              { transaction: "AMAZON ASSOCIATES", amount: "$450", category: "Affiliate", confidence: "100%" },
              { transaction: "COURSE SALES STRIPE", amount: "$1,200", category: "Product", confidence: "95%" }
            ].map((item, i) => (
              <div key={i} className="p-3 bg-muted/20 rounded-lg border border-border/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-sm text-foreground">{item.transaction}</div>
                  <div className="font-semibold text-foreground">{item.amount}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                    {item.category}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.confidence} confident
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      step: "03",
      title: "Discover Revenue Patterns",
      description: "Watch as hidden patterns emerge from your data. Seasonal trends, best-performing partnerships, optimal pricing windows - insights that drive real decisions.",
      features: [
        "Trend analysis across all revenue streams",
        "Performance benchmarking",
        "Seasonal pattern detection",
        "Partnership ROI tracking"
      ],
      mockup: (
        <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Revenue Insights</h3>
            <div className="text-sm text-accent">This Month</div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="font-medium text-sm text-foreground">Key Insight</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Your UGC rates are <strong className="text-foreground">23% below market average</strong>. 
                Recommended rate increase could yield <strong className="text-accent">+$12K monthly</strong>.
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                <div>
                  <div className="font-medium text-sm text-foreground">Best Performance Day</div>
                  <div className="text-xs text-muted-foreground">Wednesday partnerships</div>
                </div>
                <div className="text-primary font-semibold">+34%</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <div>
                  <div className="font-medium text-sm text-foreground">Seasonal Peak</div>
                  <div className="text-xs text-muted-foreground">December campaigns</div>
                </div>
                <div className="text-secondary font-semibold">+156%</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      step: "04",
      title: "Set Smart Financial Goals",
      description: "Transform insights into action with intelligent goal setting. Track progress in real-time and get predictive alerts when you're on track to hit milestones.",
      features: [
        "AI-suggested realistic goals",
        "Real-time progress tracking",
        "Milestone celebration alerts",
        "Performance forecasting"
      ],
      mockup: (
        <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Smart Goals</h3>
            <Button size="sm" className="bg-accent hover:bg-accent/90">Add Goal</Button>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">6-Figure Milestone</span>
                <span className="text-sm text-muted-foreground">$87K / $100K</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{ width: '87%' }}></div>
              </div>
              <div className="text-xs text-accent">87% complete • On track for next month</div>
            </div>

            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-accent" />
                <span className="font-medium text-foreground">AI Recommendation</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Based on your Q4 pattern, consider launching your course in 
                <strong className="text-foreground"> 18 days</strong> for optimal revenue impact.
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Financial Intelligence",
      description: "AI-powered insights that reveal patterns and opportunities in your revenue data"
    },
    {
      icon: Zap,
      title: "Automatic Everything",
      description: "From transaction categorization to report generation - all handled intelligently"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade encryption and security"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Know what's coming next with forecasting based on your historical data"
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
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-8">
              <Brain className="w-4 h-4" />
              Financial Intelligence Platform
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground mb-6">
              How{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Intelligence
              </span>{" "}
              Works
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
              From scattered payments to complete revenue intelligence in four simple steps. 
              <br />
              <strong className="text-foreground">Watch how creators transform their financial visibility.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Your Intelligence Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/5 px-8 py-4 rounded-full text-lg font-semibold"
              >
                Watch 3-Minute Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The Four Steps to{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Revenue Intelligence
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform scattered financial data into actionable business intelligence in minutes, not months.
              </p>
            </div>

            <div className="space-y-24">
              {steps.map((step, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <div className="text-6xl font-bold text-primary/20">{step.step}</div>
                      <div className="h-px bg-gradient-to-r from-primary to-accent flex-1"></div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-foreground">{step.title}</h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mockup */}
                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl transform rotate-3"></div>
                      <div className="relative transform hover:scale-105 transition-transform duration-300">
                        {step.mockup}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why Creators Choose{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Intelligence Over Tracking
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                This isn't just another financial tool. It's the first platform built specifically for creator revenue intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-2xl border border-border/30 bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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

export default HowItWorks;