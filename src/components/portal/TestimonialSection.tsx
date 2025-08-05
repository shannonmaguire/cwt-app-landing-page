import { useState } from "react";
import { Star, Quote, TrendingUp, DollarSign } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Lifestyle Creator",
      followers: "2.3M",
      revenue: "$180K/month",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b9c1?w=400",
      quote: "Creator Wealth Tools showed me I was leaving $40K on the table every month. The pattern recognition is incredible – it spotted trends in my brand deals that I never would have noticed.",
      metrics: {
        growth: "+156%",
        streams: "12 active",
        timeframe: "8 months"
      }
    },
    {
      id: 2,
      name: "Marcus Thompson",
      role: "Tech Reviewer",
      followers: "1.8M",
      revenue: "$240K/month",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      quote: "I thought I knew my finances. Turns out I was completely wrong. CWT revealed seasonal patterns, optimal pricing windows, and hidden revenue opportunities. Game changer.",
      metrics: {
        growth: "+203%",
        streams: "8 active",
        timeframe: "6 months"
      }
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Fashion & Beauty",
      followers: "3.1M",
      revenue: "$320K/month",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      quote: "The AI insights are scary accurate. It predicted my Q4 brand deal surge three months early. Now I plan my entire business strategy around CWT's forecasts.",
      metrics: {
        growth: "+89%",
        streams: "15 active",
        timeframe: "12 months"
      }
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Creators Who Know Their{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              True Worth
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of creators who transformed financial chaos into crystal-clear intelligence
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "2,847", label: "Active Creators", icon: TrendingUp },
            { number: "$125M+", label: "Revenue Tracked", icon: DollarSign },
            { number: "94%", label: "Found Hidden Revenue", icon: Star },
            { number: "156%", label: "Avg Revenue Growth", icon: TrendingUp }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-card/50 backdrop-blur border border-border/50 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <div className="bg-card/80 backdrop-blur border border-border/50 rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Creator Profile */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/96x96/6366f1/ffffff?text=' + testimonials[activeTestimonial].name.split(' ').map(n => n[0]).join('');
                    }}
                  />
                  <div className="absolute -bottom-2 -right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                    ✓ Verified
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].followers} followers
                </p>
                
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                  <DollarSign className="w-4 h-4" />
                  {testimonials[activeTestimonial].revenue}
                </div>
              </div>

              {/* Quote */}
              <div className="lg:col-span-2 space-y-6">
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/20" />
                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed italic">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                </div>

                {/* Results Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg border border-border/30">
                    <div className="text-2xl font-bold text-accent">
                      {testimonials[activeTestimonial].metrics.growth}
                    </div>
                    <div className="text-xs text-muted-foreground">Revenue Growth</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg border border-border/30">
                    <div className="text-2xl font-bold text-primary">
                      {testimonials[activeTestimonial].metrics.streams}
                    </div>
                    <div className="text-xs text-muted-foreground">Revenue Streams</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg border border-border/30">
                    <div className="text-2xl font-bold text-secondary">
                      {testimonials[activeTestimonial].metrics.timeframe}
                    </div>
                    <div className="text-xs text-muted-foreground">Using CWT</div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    Verified review from active user
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to discover what your revenue is really telling you?
          </p>
          <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Start Your Financial Intelligence
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;