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
  Download,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const features = [
  {
    icon: TrendingUp,
    title: "Income Source Tracking",
    description: "Track earnings from brand deals, affiliate platforms, UGC, coaching, and more. Group by client, platform, or category with real-time updates.",
    highlight: "Multi-platform integration",
    color: "primary" as const,
    mockup: {
      title: "Income Dashboard",
      data: [
        { source: "Instagram Brand Deal", amount: "$2,500", status: "paid", trend: "+15%" },
        { source: "YouTube Sponsorship", amount: "$4,200", status: "pending", trend: "+32%" },
        { source: "TikTok UGC", amount: "$800", status: "paid", trend: "+8%" },
        { source: "Affiliate Commission", amount: "$1,150", status: "paid", trend: "+22%" }
      ]
    }
  },
  {
    icon: PlusCircle,
    title: "Smart Entry Logging",
    description: "Effortlessly log income & expenses with AI-powered categorization. Attach sources, notes, and tags for complete financial clarity.",
    highlight: "AI-powered categorization",
    color: "accent" as const,
    mockup: {
      title: "Quick Entry",
      form: {
        amount: "$3,500",
        category: "Brand Partnership",
        source: "Nike Collaboration",
        tags: ["Sportswear", "Q4", "High-value"],
        notes: "3-month campaign with performance bonus"
      }
    }
  },
  {
    icon: Target,
    title: "Goals & Milestones",
    description: "Set ambitious income targets and track progress with visual milestones. Create specific goals like 'New studio setup' or 'Save $25K'.",
    highlight: "Visual progress tracking",
    color: "secondary" as const,
    mockup: {
      title: "Goal Progress",
      goals: [
        { name: "Monthly Income Goal", target: "$15,000", current: "$12,800", progress: 85 },
        { name: "New Camera Equipment", target: "$8,500", current: "$6,200", progress: 73 },
        { name: "Emergency Fund", target: "$50,000", current: "$32,000", progress: 64 }
      ]
    }
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent analysis of your income patterns. Spot trends, identify your most profitable streams, and predict future earnings.",
    highlight: "Predictive analytics",
    color: "primary" as const,
    mockup: {
      title: "Intelligence Dashboard",
      insights: [
        "Brand deals perform 40% better in Q4",
        "TikTok content drives highest engagement ROI",
        "Predicted next month: $18,500 (+23%)",
        "Best posting time: 3-5 PM weekdays"
      ]
    }
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep dive into your creator economy with trend analysis, income forecasting, and performance metrics that matter.",
    highlight: "Trend forecasting",
    color: "accent" as const,
    mockup: {
      title: "Analytics Overview",
      metrics: {
        monthlyGrowth: "+34%",
        topStream: "Brand Partnerships",
        avgDeal: "$2,800",
        totalTracked: "$127,300"
      }
    }
  },
  {
    icon: Users,
    title: "Creator Network",
    description: "Connect with other creators, share insights, and earn through our referral program. Build your professional creator network.",
    highlight: "$50 per referral",
    color: "secondary" as const,
    mockup: {
      title: "Network & Referrals",
      stats: {
        referrals: 12,
        earnings: "$600",
        network: 45,
        tier: "Gold Creator"
      }
    }
  },
  {
    icon: FileText,
    title: "Tax-Ready Exports",
    description: "Professional documentation for tax season. Export organized income statements, expense reports, and CPA-ready financial summaries.",
    highlight: "CPA-approved format",
    color: "primary" as const,
    mockup: {
      title: "Export Center",
      reports: [
        "Q4 2024 Income Summary",
        "Annual Tax Report",
        "Expense Breakdown",
        "1099 Preparation"
      ]
    }
  }
];

export function FeatureOverview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentFeature = features[currentSlide];
  const IconComponent = currentFeature.icon;
  
  const colorMap = {
    primary: "text-primary bg-primary/10 border-primary/20",
    accent: "text-accent bg-accent/10 border-accent/20", 
    secondary: "text-secondary bg-secondary/10 border-secondary/20"
  };

  // Render different mockup types
  const renderMockup = (feature: typeof features[0]) => {
    if (feature.mockup.data) {
      // Income tracking mockup
      return (
        <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
          <h4 className="font-semibold text-foreground mb-4">{feature.mockup.title}</h4>
          {feature.mockup.data.map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0">
              <div className="flex-1">
                <div className="font-medium text-foreground">{item.source}</div>
                <div className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                  item.status === 'paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {item.status}
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-foreground">{item.amount}</div>
                <div className="text-xs text-green-600">{item.trend}</div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (feature.mockup.form) {
      // Entry logging mockup
      return (
        <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
          <h4 className="font-semibold text-foreground mb-4">{feature.mockup.title}</h4>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground block mb-2">Amount</label>
                <div className="text-2xl font-bold text-foreground">{feature.mockup.form.amount}</div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-2">Category</label>
                <div className="text-sm text-foreground">{feature.mockup.form.category}</div>
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-2">Source</label>
              <div className="text-sm text-foreground">{feature.mockup.form.source}</div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-2">Tags</label>
              <div className="flex gap-2 flex-wrap">
                {feature.mockup.form.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (feature.mockup.goals) {
      // Goals mockup
      return (
        <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
          <h4 className="font-semibold text-foreground mb-4">{feature.mockup.title}</h4>
          {feature.mockup.goals.map((goal, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-foreground">{goal.name}</span>
                <span className="text-sm text-muted-foreground">{goal.current} / {goal.target}</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
              <div className="text-xs text-primary">{goal.progress}% complete</div>
            </div>
          ))}
        </div>
      );
    }

    if (feature.mockup.insights) {
      // AI Insights mockup
      return (
        <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
          <h4 className="font-semibold text-foreground mb-4">{feature.mockup.title}</h4>
          {feature.mockup.insights.map((insight, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
              <Brain className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground">{insight}</span>
            </div>
          ))}
        </div>
      );
    }

    if (feature.mockup.metrics) {
      // Analytics mockup
      return (
        <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
          <h4 className="font-semibold text-foreground mb-4">{feature.mockup.title}</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-2xl font-bold text-primary">{feature.mockup.metrics.monthlyGrowth}</div>
              <div className="text-xs text-muted-foreground">Monthly Growth</div>
            </div>
            <div className="text-center p-4 bg-accent/5 rounded-lg">
              <div className="text-sm font-semibold text-accent">{feature.mockup.metrics.topStream}</div>
              <div className="text-xs text-muted-foreground">Top Stream</div>
            </div>
            <div className="text-center p-4 bg-secondary/5 rounded-lg">
              <div className="text-lg font-bold text-secondary">{feature.mockup.metrics.avgDeal}</div>
              <div className="text-xs text-muted-foreground">Avg Deal Size</div>
            </div>
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-lg font-bold text-primary">{feature.mockup.metrics.totalTracked}</div>
              <div className="text-xs text-muted-foreground">Total Tracked</div>
            </div>
          </div>
        </div>
      );
    }

    if (feature.mockup.stats) {
      // Network mockup
      return (
        <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
          <h4 className="font-semibold text-foreground mb-4">{feature.mockup.title}</h4>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">{feature.mockup.stats.referrals}</div>
              <div className="text-xs text-muted-foreground">Successful Referrals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{feature.mockup.stats.earnings}</div>
              <div className="text-xs text-muted-foreground">Earnings</div>
            </div>
          </div>
          <div className="bg-secondary/10 rounded-lg p-4 text-center">
            <div className="font-semibold text-secondary">{feature.mockup.stats.tier}</div>
            <div className="text-xs text-muted-foreground">{feature.mockup.stats.network} creators in network</div>
          </div>
        </div>
      );
    }

    if (feature.mockup.reports) {
      // Export mockup
      return (
        <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
          <h4 className="font-semibold text-foreground mb-4">{feature.mockup.title}</h4>
          {feature.mockup.reports.map((report, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{report}</span>
              </div>
              <Button size="sm" variant="outline" className="h-8 px-3">
                <Download className="h-3 w-3 mr-1" />
                Export
              </Button>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

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

        {/* Feature Slideshow */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12">
            
            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colorMap[currentFeature.color]}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{currentFeature.title}</h3>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full mt-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {currentFeature.highlight}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="h-10 w-10 rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline" 
                  size="icon"
                  onClick={nextSlide}
                  className="h-10 w-10 rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Feature Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left: Description */}
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentFeature.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Benefits:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {currentFeature.title.includes('Tracking') && (
                      <>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Connect all income sources automatically
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Real-time updates and notifications
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Smart categorization by platform
                        </li>
                      </>
                    )}
                    {currentFeature.title.includes('Entry') && (
                      <>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          AI suggests categories automatically
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          Bulk import from bank statements
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          Custom tags for detailed analysis
                        </li>
                      </>
                    )}
                    {currentFeature.title.includes('Goals') && (
                      <>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          Visual progress tracking
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          Milestone celebrations
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          Smart goal recommendations
                        </li>
                      </>
                    )}
                    {currentFeature.title.includes('AI') && (
                      <>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Predictive income forecasting
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Trend pattern recognition
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Optimization recommendations
                        </li>
                      </>
                    )}
                    {currentFeature.title.includes('Analytics') && (
                      <>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          Advanced trend analysis
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          Revenue forecasting
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          Performance benchmarking
                        </li>
                      </>
                    )}
                    {currentFeature.title.includes('Network') && (
                      <>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          $50 per successful referral
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          Connect with top creators
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          Share insights and strategies
                        </li>
                      </>
                    )}
                    {currentFeature.title.includes('Tax') && (
                      <>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          CPA-approved formatting
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          One-click tax preparation
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Professional documentation
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              {/* Right: UI Mockup */}
              <div className="lg:pl-8">
                {renderMockup(currentFeature)}
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
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