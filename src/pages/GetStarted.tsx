import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Brain, Zap, Target, Users, Check, Star, TrendingUp, DollarSign, Shield } from "lucide-react";

const GetStarted = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    creatorType: "",
    monthlyRevenue: ""
  });

  const creatorTypes = [
    { id: "ugc", label: "UGC Creator", description: "User-generated content creation" },
    { id: "influencer", label: "Social Media Influencer", description: "Instagram, TikTok, YouTube" },
    { id: "affiliate", label: "Affiliate Marketer", description: "Commission-based marketing" },
    { id: "course", label: "Course Creator", description: "Educational content & courses" },
    { id: "brand", label: "Brand Partner", description: "Long-term brand collaborations" },
    { id: "agency", label: "Agency/Team", description: "Managing multiple creators" }
  ];

  const revenueRanges = [
    { id: "0-1k", label: "$0 - $1,000", description: "Just getting started" },
    { id: "1k-5k", label: "$1,000 - $5,000", description: "Building momentum" },
    { id: "5k-15k", label: "$5,000 - $15,000", description: "Growing creator" },
    { id: "15k-50k", label: "$15,000 - $50,000", description: "Established creator" },
    { id: "50k-100k", label: "$50,000 - $100,000", description: "Successful business" },
    { id: "100k+", label: "$100,000+", description: "High-revenue creator" }
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div>
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

          <div className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-8">
                <Brain className="w-4 h-4" />
                Your Financial Intelligence Journey Starts Here
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground mb-6">
                Get Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Financial Intelligence
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
                Join 2,000+ creators who've unlocked hidden revenue patterns worth millions.
                <br />
                <strong className="text-foreground">Setup takes less than 5 minutes.</strong>
              </p>

              {/* Social Proof */}
              <div className="flex items-center justify-center gap-8 mb-12">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-background"></div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">2,000+ creators</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Bank-level security</span>
                </div>
              </div>
            </div>

            {/* Onboarding Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8 shadow-lg">
                {/* Progress Bar */}
                <div className="flex items-center justify-between mb-8">
                  {[1, 2, 3].map((stepNum) => (
                    <div key={stepNum} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                        step >= stepNum 
                          ? 'bg-gradient-to-r from-primary to-accent text-white' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {stepNum}
                      </div>
                      {stepNum < 3 && (
                        <div className={`w-20 h-1 mx-2 rounded-full ${
                          step > stepNum ? 'bg-gradient-to-r from-primary to-accent' : 'bg-muted'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Step Content */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-foreground mb-2">Let's Get Started</h2>
                      <p className="text-muted-foreground">Tell us a bit about yourself</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground">Full Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-foreground">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-background/50 border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-foreground mb-2">What Type of Creator Are You?</h2>
                      <p className="text-muted-foreground">This helps us customize your experience</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {creatorTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setFormData({...formData, creatorType: type.id})}
                          className={`p-4 rounded-lg border-2 text-left transition-all hover:scale-105 ${
                            formData.creatorType === type.id
                              ? 'border-primary bg-primary/10'
                              : 'border-border/30 hover:border-border/50'
                          }`}
                        >
                          <div className="font-semibold text-foreground mb-1">{type.label}</div>
                          <div className="text-sm text-muted-foreground">{type.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-foreground mb-2">What's Your Monthly Revenue?</h2>
                      <p className="text-muted-foreground">This helps us provide relevant insights</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {revenueRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => setFormData({...formData, monthlyRevenue: range.id})}
                          className={`p-4 rounded-lg border-2 text-left transition-all hover:scale-105 ${
                            formData.monthlyRevenue === range.id
                              ? 'border-primary bg-primary/10'
                              : 'border-border/30 hover:border-border/50'
                          }`}
                        >
                          <div className="font-semibold text-foreground mb-1">{range.label}</div>
                          <div className="text-sm text-muted-foreground">{range.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={step === 1}
                    className="px-6"
                  >
                    Back
                  </Button>
                  
                  {step < 3 ? (
                    <Button
                      onClick={handleNext}
                      disabled={
                        (step === 1 && (!formData.name || !formData.email)) ||
                        (step === 2 && !formData.creatorType)
                      }
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6"
                    >
                      Next Step
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  ) : (
                  <Button
                    onClick={() => {
                      // Store user data (in real app, this would save to Supabase)
                      localStorage.setItem('onboardingData', JSON.stringify(formData));
                      // Redirect to account setup
                      window.location.href = '/account-setup';
                    }}
                    disabled={!formData.monthlyRevenue}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8"
                  >
                    Get My Financial Intelligence
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  )}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mt-8 space-y-4">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    30-day free trial
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Cancel anytime
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Setup in 5 minutes
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  🔒 Your data is protected with bank-level 256-bit encryption
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Preview */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What You'll Get with Financial Intelligence
              </h2>
              <p className="text-muted-foreground">
                Transform your creator business with insights that drive real results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl border border-border/30 bg-card/50 backdrop-blur">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Revenue Insights</h3>
                <p className="text-muted-foreground">
                  Discover which income streams are growing, declining, or ready to scale with AI-powered pattern recognition.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl border border-border/30 bg-card/50 backdrop-blur">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Smart Goal Setting</h3>
                <p className="text-muted-foreground">
                  Set intelligent financial targets and track progress with predictive analytics that guide your decisions.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl border border-border/30 bg-card/50 backdrop-blur">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Industry Benchmarks</h3>
                <p className="text-muted-foreground">
                  Compare your performance with similar creators and discover growth opportunities you're missing.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default GetStarted;