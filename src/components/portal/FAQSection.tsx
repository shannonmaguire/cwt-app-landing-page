import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, CreditCard, Users, Brain, Zap, DollarSign } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      icon: Shield,
      question: "How secure is my financial data with Wintle?",
      answer: "Your financial data is protected with bank-level security. We use end-to-end encryption, never sell your data, and are fully GDPR compliant. Your information stays private and secure - we only use it to provide you with insights about your own income."
    },
    {
      icon: CreditCard,
      question: "Which platforms and payment processors does Wintle support?",
      answer: "Wintle integrates with major creator platforms (YouTube, Instagram, TikTok, Patreon, OnlyFans), payment processors (PayPal, Stripe, Square), and traditional banking institutions. We're constantly adding new integrations based on creator feedback."
    },
    {
      icon: Users,
      question: "Is Wintle only for full-time creators?",
      answer: "Not at all. Wintle is designed for creators at any stage - whether you're just starting to monetize your content, building a side business, or running a full creator operation. Our insights scale with your business."
    },
    {
      icon: Brain,
      question: "How does Wintle's financial intelligence work?",
      answer: "Wintle analyzes patterns in your income data to identify trends, seasonal fluctuations, and performance insights. It learns your business model and provides personalized recommendations - like which content types generate the most revenue or which platforms are growing fastest."
    },
    {
      icon: Zap,
      question: "How quickly will I see insights about my income?",
      answer: "Most creators see their first meaningful insights within 24 hours of connecting their accounts. As Wintle learns more about your business patterns, the insights become more sophisticated and personalized."
    },
    {
      icon: DollarSign,
      question: "Can Wintle help with taxes and business expenses?",
      answer: "Yes. Wintle automatically categorizes your income and expenses in tax-friendly ways. You can export clean, organized financial reports that make tax time much easier. We also help identify business deductions you might have missed."
    },
    {
      question: "What if I need help setting up Wintle?",
      answer: "We provide comprehensive onboarding support to help you connect your accounts and understand your insights. Our support team knows the creator economy and can help you get the most value from Wintle."
    },
    {
      question: "Can I try Wintle before committing to a paid plan?",
      answer: "Absolutely. We offer a free trial that lets you connect your accounts and see how Wintle works with your specific income streams. No credit card required to start exploring your financial patterns."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Questions about{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wintle
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about bringing clarity to your creative income.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="border border-border/50 rounded-lg bg-card/30 backdrop-blur px-6 hover:bg-card/50 transition-colors"
            >
              <AccordionTrigger className="text-left py-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  {faq.icon && (
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <faq.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                    </div>
                  )}
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a 
            href="/contact"
            className="text-primary hover:text-primary/80 font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
          >
            Get in touch with our team →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;