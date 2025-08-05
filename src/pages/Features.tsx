import { Button } from "@/components/ui/button";
import { Brain, BarChart3, Shield, Zap, Target, Users, TrendingUp, DollarSign, FileSpreadsheet, Bell, Calendar, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze your financial patterns to provide personalized recommendations and identify optimization opportunities.",
      benefits: ["Personalized spending analysis", "Income optimization suggestions", "Smart budget recommendations", "Predictive financial modeling"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboard",
      description: "Get a comprehensive view of your financial health with interactive charts, graphs, and real-time updates from all your connected accounts.",
      benefits: ["Live account balance tracking", "Interactive spending charts", "Income trend analysis", "Custom date range filtering"]
    },
    {
      icon: TrendingUp,
      title: "Revenue Tracking",
      description: "Monitor your creator revenue streams across multiple platforms and payment methods with automated categorization and trend analysis.",
      benefits: ["Multi-platform revenue tracking", "Automated income categorization", "Revenue growth projections", "Platform performance comparison"]
    },
    {
      icon: Target,
      title: "Goal Setting & Tracking",
      description: "Set financial goals and track your progress with milestone alerts and achievement celebrations to keep you motivated.",
      benefits: ["Custom financial goal creation", "Progress tracking with milestones", "Achievement notifications", "Goal adjustment recommendations"]
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Receive intelligent alerts about unusual spending, income changes, bill reminders, and optimization opportunities.",
      benefits: ["Unusual activity alerts", "Bill due date reminders", "Income fluctuation notifications", "Savings opportunity alerts"]
    },
    {
      icon: FileSpreadsheet,
      title: "Tax Preparation",
      description: "Automatically categorize business expenses and generate tax-ready reports to simplify your tax preparation process.",
      benefits: ["Automated expense categorization", "Tax-ready report generation", "Deduction opportunity identification", "Year-end tax summaries"]
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Access your financial intelligence on-the-go with our native mobile app featuring offline capabilities and push notifications.",
      benefits: ["Native iOS and Android apps", "Offline data access", "Push notification alerts", "Touch ID / Face ID security"]
    },
    {
      icon: Users,
      title: "Creator Community",
      description: "Connect with other creators, share financial tips, and learn from successful creator strategies in our exclusive community.",
      benefits: ["Exclusive creator community access", "Financial tip sharing", "Success story insights", "Monthly webinars with experts"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Complete Feature Suite
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Financial Success
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover all the powerful features that make Creator Wealth Tools the ultimate financial intelligence platform for creators and entrepreneurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = '/get-started'}
            >
              Start Free Trial
              <Brain className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8"
              onClick={() => window.location.href = '/pricing'}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features Built for Creators
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature is designed to help you understand, optimize, and grow your financial future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with over 12,000 financial institutions and popular creator platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Chase Bank", "Wells Fargo", "Bank of America", "PayPal",
              "Stripe", "YouTube", "Patreon", "OnlyFans",
              "Venmo", "Cash App", "American Express", "Capital One"
            ].map((integration, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{integration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Experience All Features?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your 14-day free trial and discover how our features can transform your financial management
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.location.href = '/get-started'}
          >
            Start Free Trial
            <Brain className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;