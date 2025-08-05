import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Target, TrendingUp, Users, FileSpreadsheet, BarChart3, DollarSign, Brain, Zap, Shield, ArrowUpRight } from "lucide-react";

const FeatureOverview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      id: 1,
      title: "Revenue Intelligence Dashboard",
      subtitle: "See patterns others miss",
      description: "Your complete revenue picture with AI-powered insights that reveal which streams are growing, declining, or ready to scale.",
      icon: Brain,
      color: "from-primary to-primary/60",
      mockup: (
        <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Revenue Intelligence</h3>
            <div className="flex items-center gap-2 text-accent text-sm">
              <TrendingUp className="w-4 h-4" />
              +23% this month
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Brand Deals</span>
                <span className="font-semibold text-foreground">$45,200</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">UGC Revenue</span>
                <span className="font-semibold text-foreground">$28,400</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Affiliate Sales</span>
                <span className="font-semibold text-foreground">$12,800</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-secondary h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Smart Income Tracking",
      subtitle: "Every dollar, automatically categorized",
      description: "Connect your payment platforms and watch as every transaction gets intelligently sorted, tagged, and analyzed.",
      icon: Zap,
      color: "from-accent to-accent/60",
      mockup: (
        <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Recent Transactions</h3>
            <Button size="sm" variant="outline">Auto-sync On</Button>
          </div>
          
          <div className="space-y-3">
            {[
              { company: "Nike", amount: "$8,500", type: "Brand Deal", status: "new" },
              { company: "Sephora UGC", amount: "$2,400", type: "UGC", status: "categorized" },
              { company: "Amazon Affiliate", amount: "$450", type: "Affiliate", status: "categorized" },
              { company: "Course Sales", amount: "$1,200", type: "Product", status: "categorized" }
            ].map((transaction, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border/30">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${transaction.status === 'new' ? 'bg-accent' : 'bg-primary'}`}></div>
                  <div>
                    <div className="font-medium text-sm text-foreground">{transaction.company}</div>
                    <div className="text-xs text-muted-foreground">{transaction.type}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-foreground">{transaction.amount}</div>
                  {transaction.status === 'new' && (
                    <div className="text-xs text-accent">Auto-categorizing...</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Goal Tracking & Milestones",
      subtitle: "Turn ambition into data",
      description: "Set revenue targets and watch real-time progress. Know exactly how close you are to your next financial milestone.",
      icon: Target,
      color: "from-secondary to-secondary/60",
      mockup: (
        <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Financial Goals</h3>
            <Button size="sm" className="bg-accent hover:bg-accent/90">Set New Goal</Button>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">Monthly Revenue Goal</span>
                <span className="text-sm text-muted-foreground">$75K / $100K</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="text-xs text-accent">$25K remaining • On track to hit by month end</div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">Equipment Fund</span>
                <span className="text-sm text-muted-foreground">$4.2K / $8K</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-to-r from-secondary to-accent h-3 rounded-full" style={{ width: '52%' }}></div>
              </div>
              <div className="text-xs text-muted-foreground">52% complete • New camera fund</div>
            </div>

            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-accent" />
                <span className="font-medium text-foreground">Next Milestone</span>
              </div>
              <div className="text-sm text-muted-foreground">
                At current pace, you'll hit $100K monthly revenue in <strong className="text-foreground">18 days</strong>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Revenue Pattern Analysis",
      subtitle: "Predict your financial future",
      description: "Advanced analytics reveal seasonal trends, best-performing partnerships, and optimal pricing strategies based on your data.",
      icon: BarChart3,
      color: "from-primary to-accent",
      mockup: (
        <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Revenue Analytics</h3>
            <div className="text-sm text-accent">Last 6 months</div>
          </div>
          
          <div className="space-y-6">
            {/* Mini Chart */}
            <div className="bg-muted/20 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-muted-foreground">Revenue Trend</span>
                <div className="flex items-center gap-1 text-accent text-sm">
                  <ArrowUpRight className="w-3 h-3" />
                  +34%
                </div>
              </div>
              <div className="flex items-end gap-1 h-16">
                {[30, 45, 38, 55, 48, 72, 65, 80].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-t from-primary to-accent flex-1 rounded-sm"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Insights */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg border border-accent/20">
                <div>
                  <div className="font-medium text-sm text-foreground">Best Performing Month</div>
                  <div className="text-xs text-muted-foreground">December: +156% vs average</div>
                </div>
                <div className="text-accent font-semibold">$124K</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg border border-primary/20">
                <div>
                  <div className="font-medium text-sm text-foreground">Fastest Growing Stream</div>
                  <div className="text-xs text-muted-foreground">Affiliate revenue</div>
                </div>
                <div className="text-primary font-semibold">+89%</div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <div>
                  <div className="font-medium text-sm text-foreground">Predicted Next Month</div>
                  <div className="text-xs text-muted-foreground">Based on current trends</div>
                </div>
                <div className="text-secondary font-semibold">$95K</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Creator Network Insights",
      subtitle: "Benchmark against your peers",
      description: "Anonymous industry data shows how your revenue compares to similar creators, revealing growth opportunities.",
      icon: Users,
      color: "from-accent to-secondary",
      mockup: (
        <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Network Insights</h3>
            <div className="flex items-center gap-1 text-accent text-sm">
              <Shield className="w-4 h-4" />
              Anonymous
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border">
              <div className="text-2xl font-bold text-foreground mb-1">Top 15%</div>
              <div className="text-sm text-muted-foreground">
                Your revenue vs similar creators
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Your Monthly Average</span>
                  <span className="font-semibold text-foreground">$72K</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Network Average</span>
                  <span className="font-semibold text-muted-foreground">$45K</span>
                </div>
                <div className="text-xs text-accent">You're earning 60% above average</div>
              </div>

              <div className="bg-muted/20 rounded-lg p-4">
                <div className="font-medium text-sm text-foreground mb-2">Growth Opportunities</div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">• UGC rate optimization</span>
                    <span className="text-accent">+$12K potential</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">• Product launch window</span>
                    <span className="text-accent">+$25K potential</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">• Brand partnership tier</span>
                    <span className="text-accent">+$18K potential</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Professional Financial Reports",
      subtitle: "Export-ready documentation",
      description: "Generate comprehensive financial reports with detailed categorization, perfect for accountants, investors, and business planning.",
      icon: FileSpreadsheet,
      color: "from-secondary to-primary",
      mockup: (
        <div className="bg-background rounded-lg border shadow-lg p-6 w-full max-w-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-foreground">Financial Reports</h3>
            <Button size="sm" variant="outline">Export All</Button>
          </div>
          
          <div className="space-y-4">
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <div className="font-medium text-sm text-foreground mb-2">2024 Financial Summary</div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-muted-foreground">Total Revenue</div>
                  <div className="font-semibold text-foreground">$847,300</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Business Expenses</div>
                  <div className="font-semibold text-foreground">$124,800</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Net Profit</div>
                  <div className="font-semibold text-accent">$722,500</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Growth Rate</div>
                  <div className="font-semibold text-foreground">+156%</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {[
                { name: "Revenue by Source", count: "8 categories", status: "Complete" },
                { name: "Expense Breakdown", count: "456 entries", status: "Categorized" },
                { name: "Quarterly Reports", count: "Q1-Q4", status: "Complete" },
                { name: "Revenue by Source", count: "8 categories", status: "Detailed" }
              ].map((report, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg border border-border/30">
                  <div>
                    <div className="font-medium text-sm text-foreground">{report.name}</div>
                    <div className="text-xs text-muted-foreground">{report.count}</div>
                  </div>
                  <div className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                    {report.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  const currentFeature = features[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Financial Intelligence{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Actually Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This isn't tracking. This isn't bookkeeping. This is <strong>revenue intelligence</strong> — 
            the first platform that thinks like a creator's financial advisor.
          </p>
        </div>

        {/* Feature Slideshow */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            {/* Content Side */}
            <div className="space-y-8">
              {/* Feature Icon & Badge */}
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentFeature.color}`}>
                  <currentFeature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                  Feature {currentSlide + 1} of {features.length}
                </div>
              </div>

              {/* Feature Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {currentFeature.title}
                  </h3>
                  <p className="text-lg text-accent font-medium">
                    {currentFeature.subtitle}
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentFeature.description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevSlide}
                    className="rounded-full w-12 h-12 p-0"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextSlide}
                    className="rounded-full w-12 h-12 p-0"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Slide Indicators */}
                <div className="flex gap-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-primary'
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mockup Side */}
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${currentFeature.color} rounded-2xl blur-xl opacity-20`}></div>
                
                {/* Mockup Container */}
                <div className="relative">
                  {currentFeature.mockup}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;