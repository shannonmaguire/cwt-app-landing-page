import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, BookOpen, MessageCircle, Video, FileText, Users, Zap, Shield, CreditCard, Settings } from "lucide-react";
import { useState } from "react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      icon: BookOpen,
      title: "Getting Started",
      description: "Learn the basics and set up your account",
      articles: [
        "How to create your account",
        "Connecting your first financial account",
        "Understanding your dashboard",
        "Setting up your financial goals"
      ]
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Learn about our security measures",
      articles: [
        "How we protect your data",
        "Understanding account permissions",
        "Two-factor authentication setup",
        "Privacy policy explained"
      ]
    },
    {
      icon: CreditCard,
      title: "Account Management",
      description: "Manage your subscription and settings",
      articles: [
        "Upgrading your plan",
        "Managing connected accounts",
        "Billing and payment issues",
        "Canceling your subscription"
      ]
    },
    {
      icon: Settings,
      title: "Features & Tools",
      description: "Make the most of our platform",
      articles: [
        "Understanding AI insights",
        "Setting up notifications",
        "Customizing your dashboard",
        "Exporting your data"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do I connect my bank account?",
      answer: "To connect your bank account, go to Account Setup and click 'Connect Account'. Search for your bank, enter your credentials, and we'll securely connect using read-only access. Your login credentials are never stored on our servers."
    },
    {
      question: "Why can't I see all my transactions?",
      answer: "Sometimes banks limit historical data access. We typically sync 2-3 months of historical transactions initially, then update daily going forward. If you need older data, try reconnecting your account or contact support."
    },
    {
      question: "How accurate are the AI insights?",
      answer: "Our AI analyzes your spending patterns and income trends with 95%+ accuracy. However, insights are recommendations based on your data patterns and should be considered alongside your personal financial knowledge."
    },
    {
      question: "Can I export my financial data?",
      answer: "Yes! You can export your data in CSV or PDF format from the Settings page. This includes transaction history, insights reports, and goal tracking data."
    },
    {
      question: "What if I want to disconnect an account?",
      answer: "You can disconnect any account from Settings > Connected Accounts. This will stop data syncing immediately, but historical data will remain in your account unless you choose to delete it."
    },
    {
      question: "How do I update my notification preferences?",
      answer: "Go to Settings > Notifications to customize what alerts you receive and how you receive them (email, SMS, or in-app). You can set different preferences for different types of notifications."
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => article.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <BookOpen className="w-4 h-4" />
            Help & Support
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How Can We
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Help You Today?
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Find answers to your questions, learn how to use our features, and get the support you need.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for help articles, features, or common questions..."
              className="pl-12 pr-4 py-4 text-lg rounded-full border-2 focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button
              variant="outline"
              size="lg"
              className="h-20 flex-col gap-2 rounded-xl border-2 hover:border-primary"
              onClick={() => window.location.href = '/contact'}
            >
              <MessageCircle className="w-6 h-6" />
              Contact Support
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-20 flex-col gap-2 rounded-xl border-2 hover:border-primary"
              onClick={() => window.location.href = '/api-docs'}
            >
              <FileText className="w-6 h-6" />
              API Documentation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-20 flex-col gap-2 rounded-xl border-2 hover:border-primary"
              onClick={() => window.location.href = '/status'}
            >
              <Zap className="w-6 h-6" />
              System Status
            </Button>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <a 
                            href="#"
                            className="text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            {article}
                          </a>
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

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to the most common questions
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Still Need Help?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our support team is here to help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 rounded-full px-8"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Support
              <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8"
              onClick={() => window.location.href = '#'}
            >
              <Video className="w-5 h-5 mr-2" />
              Watch Tutorials
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;