import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Server, Key, CheckCircle, AlertTriangle, Users, Globe, FileText } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Bank-Level Encryption",
      description: "All data is encrypted using 256-bit SSL encryption, the same standard used by banks and financial institutions worldwide.",
      details: ["AES-256 encryption at rest", "TLS 1.3 in transit", "End-to-end encryption", "Zero-knowledge architecture"]
    },
    {
      icon: Key,
      title: "Secure Authentication",
      description: "Multi-factor authentication and secure token-based access ensure only you can access your financial data.",
      details: ["Two-factor authentication (2FA)", "Biometric login support", "OAuth 2.0 protocols", "Session management"]
    },
    {
      icon: Server,
      title: "SOC 2 Compliant Infrastructure",
      description: "Our infrastructure meets the highest security standards with SOC 2 Type II compliance and regular third-party audits.",
      details: ["SOC 2 Type II certified", "Regular penetration testing", "24/7 security monitoring", "Incident response protocols"]
    },
    {
      icon: Eye,
      title: "Read-Only Access",
      description: "We only request read-only access to your accounts, meaning we can never move, transfer, or modify your money.",
      details: ["View-only account access", "No transaction capabilities", "Cannot move funds", "Transparent permissions"]
    },
    {
      icon: Shield,
      title: "Data Privacy Protection",
      description: "Your data is never sold or shared with third parties. We follow strict privacy policies and GDPR compliance.",
      details: ["GDPR compliant", "No data selling", "Minimal data retention", "Right to deletion"]
    },
    {
      icon: Users,
      title: "Regulatory Compliance",
      description: "We comply with financial regulations including PCI DSS, SOX, and work with regulated financial data providers.",
      details: ["PCI DSS Level 1", "SOX compliance", "CCPA compliant", "Regular compliance audits"]
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", description: "Independently audited security controls" },
    { name: "PCI DSS Level 1", description: "Highest level of payment card security" },
    { name: "ISO 27001", description: "International security management standard" },
    { name: "GDPR Compliant", description: "European data protection regulation" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            Bank-Grade Security
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your Financial Data is
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Completely Secure
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            We use the same security standards as major banks to protect your data. Your privacy and security are our top priorities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = '/get-started'}
            >
              Start Secure Trial
              <Shield className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8"
              onClick={() => window.location.href = '#security-details'}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section id="security-details" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enterprise-Grade Security Measures
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every layer of our platform is designed with security-first principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/10 p-3 rounded-xl">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          {detail}
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

      {/* Certifications */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industry Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Independently verified security and compliance standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-green-500/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How We Protect Your Data
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Encrypted Storage</h3>
                    <p className="text-muted-foreground">All data is encrypted using AES-256 encryption and stored in secure, compliant data centers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Secure Transmission</h3>
                    <p className="text-muted-foreground">Data is transmitted using TLS 1.3 encryption, ensuring secure communication at all times.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Read-Only Access</h3>
                    <p className="text-muted-foreground">We only request read-only permissions and never have the ability to move your money.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Transparent Policies</h3>
                    <p className="text-muted-foreground">Clear privacy policies and terms of service with no hidden data usage.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8">
              <div className="text-center">
                <Shield className="w-20 h-20 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Security Promise</h3>
                <p className="text-muted-foreground mb-6">
                  We commit to maintaining the highest security standards and will never compromise on your data protection.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">24/7 Security Monitoring</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">Regular Security Audits</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-foreground">Immediate Threat Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Experience Security You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of creators who trust us with their financial data
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.location.href = '/get-started'}
          >
            Start Secure Trial
            <Shield className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Security;