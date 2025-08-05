import { Button } from "@/components/ui/button";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { ArrowRight, Brain, TrendingUp, DollarSign, Target, BarChart3, Users, Check } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Welcome Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/20 mb-6">
              <Check className="w-4 h-4" />
              Account Successfully Created
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">
              Welcome to Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Financial Intelligence
              </span>{" "}
              Dashboard
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Your revenue data is being analyzed. Here's a preview of the insights you'll get once your accounts are fully synced.
            </p>
          </div>

          {/* Demo Dashboard */}
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">$47,230</div>
                <div className="text-sm text-accent">+23% from last month</div>
              </div>

              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Active Streams</h3>
                  <DollarSign className="w-4 h-4 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">8</div>
                <div className="text-sm text-muted-foreground">Revenue sources</div>
              </div>

              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Goal Progress</h3>
                  <Target className="w-4 h-4 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">74%</div>
                <div className="text-sm text-accent">On track for $60K</div>
              </div>

              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Opportunities</h3>
                  <BarChart3 className="w-4 h-4 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">3</div>
                <div className="text-sm text-accent">Growth insights</div>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Revenue Streams</h3>
                <div className="space-y-4">
                  {[
                    { name: "Brand Partnerships", amount: "$28,400", percentage: 60, color: "bg-primary" },
                    { name: "UGC Content", amount: "$12,200", percentage: 26, color: "bg-accent" },
                    { name: "Affiliate Sales", amount: "$4,830", percentage: 10, color: "bg-secondary" },
                    { name: "Course Sales", amount: "$1,800", percentage: 4, color: "bg-muted" }
                  ].map((stream, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground">{stream.name}</span>
                        <span className="font-semibold text-foreground">{stream.amount}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`${stream.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${stream.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">AI Insights</h3>
                <div className="space-y-4">
                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-accent" />
                      <span className="font-medium text-foreground">Revenue Opportunity</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your UGC rates are 23% below market average. Increasing rates could yield 
                      <strong className="text-accent"> +$8,200 monthly</strong>.
                    </p>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">Seasonal Pattern</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      December shows <strong className="text-primary">156% higher</strong> brand partnership revenue. 
                      Plan campaigns accordingly.
                    </p>
                  </div>

                  <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="font-medium text-foreground">Benchmark</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You're in the <strong className="text-secondary">top 15%</strong> of creators in your category. 
                      Keep up the great work!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Unlock Full Intelligence?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  This is just a preview! Connect your accounts to see real insights from your actual revenue data, 
                  set custom goals, and get personalized recommendations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                    onClick={() => window.location.href = '/account-setup'}
                  >
                    Connect My Accounts
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-primary/30 text-foreground hover:bg-primary/5 px-8 py-4 rounded-full text-lg font-semibold"
                  >
                    Explore Features
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;