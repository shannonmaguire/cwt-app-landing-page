import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the financial intelligence analysis work?",
      answer: "Our AI analyzes your connected financial accounts to identify spending patterns, income trends, and optimization opportunities. We use bank-level security to protect your data while providing personalized insights."
    },
    {
      question: "Is my financial data secure?",
      answer: "Yes, we use bank-level 256-bit SSL encryption and never store your banking credentials. We only access read-only data through secure, regulated financial data providers."
    },
    {
      question: "Which banks and accounts can I connect?",
      answer: "We support over 12,000 financial institutions including major banks, credit unions, investment accounts, and credit cards across the US, Canada, and UK."
    },
    {
      question: "How often is my data updated?",
      answer: "Your financial data is updated daily, with real-time notifications for important changes like unusual spending or income fluctuations."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no questions asked. You'll continue to have access until the end of your billing period."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our financial intelligence platform
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
  );
};

export default FAQSection;