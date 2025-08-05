import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PortalHeader } from "@/components/portal/PortalHeader";
import { ArrowRight, Brain, Shield, Check, Link, CreditCard, Building2, Smartphone } from "lucide-react";

const AccountSetup = () => {
  const [step, setStep] = useState(1);
  const [connectedAccounts, setConnectedAccounts] = useState([]);

  const paymentPlatforms = [
    {
      id: "paypal",
      name: "PayPal",
      description: "Connect your PayPal Business account",
      icon: "💳",
      connected: false
    },
    {
      id: "stripe",
      name: "Stripe",
      description: "Connect your Stripe account",
      icon: "💎",
      connected: false
    },
    {
      id: "bank",
      name: "Bank Account",
      description: "Connect your business bank account",
      icon: "🏦",
      connected: false
    },
    {
      id: "venmo",
      name: "Venmo Business",
      description: "Connect your Venmo Business profile",
      icon: "📱",
      connected: false
    },
    {
      id: "cashapp",
      name: "Cash App Business",
      description: "Connect your Cash App Business account",
      icon: "💚",
      connected: false
    },
    {
      id: "zelle",
      name: "Zelle",
      description: "Connect your Zelle account",
      icon: "⚡",
      connected: false
    }
  ];

  const handleConnect = (platformId) => {
    // Simulate connection process
    setConnectedAccounts([...connectedAccounts, platformId]);
    // In real app, this would open OAuth flow or connection modal
  };

  const handleContinue = () => {
    if (connectedAccounts.length > 0) {
      // Redirect to dashboard
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-8">
              <Brain className="w-4 h-4" />
              Step 2: Connect Your Revenue Streams
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6">
              Connect Your{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Financial Accounts
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              Securely connect your payment platforms so we can start analyzing your revenue patterns.
              <br />
              <strong className="text-foreground">Your data is protected with bank-level encryption.</strong>
            </p>

            {/* Security Badge */}
            <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur border border-border/50 rounded-xl p-4 mb-12">
              <Shield className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-foreground">Bank-Level Security</div>
                <div className="text-sm text-muted-foreground">256-bit encryption • Read-only access • SOC 2 compliant</div>
              </div>
            </div>
          </div>

          {/* Connection Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paymentPlatforms.map((platform) => {
              const isConnected = connectedAccounts.includes(platform.id);
              
              return (
                <div
                  key={platform.id}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                    isConnected
                      ? 'border-accent bg-accent/10 scale-105'
                      : 'border-border/30 hover:border-border/50 hover:scale-105'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{platform.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground">{platform.description}</p>
                    </div>
                  </div>

                  {isConnected ? (
                    <div className="flex items-center gap-2 text-accent">
                      <Check className="w-5 h-5" />
                      <span className="font-semibold">Connected</span>
                    </div>
                  ) : (
                    <Button
                      onClick={() => handleConnect(platform.id)}
                      variant="outline"
                      className="w-full border-primary/30 text-primary hover:bg-primary/5"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress & Continue */}
          <div className="text-center">
            {connectedAccounts.length > 0 ? (
              <div className="space-y-6">
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-foreground">
                      Great! You've connected {connectedAccounts.length} account{connectedAccounts.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    We're now analyzing your revenue data to generate your financial intelligence dashboard.
                  </p>
                </div>

                <Button
                  onClick={handleContinue}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Launch My Dashboard
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ) : (
              <div className="bg-muted/30 border border-border/30 rounded-xl p-6">
                <p className="text-muted-foreground mb-4">
                  Connect at least one account to continue to your dashboard.
                </p>
                <p className="text-sm text-muted-foreground">
                  You can always add more accounts later from your settings.
                </p>
              </div>
            )}
          </div>

          {/* Help Section */}
          <div className="mt-16 bg-card/50 backdrop-blur border border-border/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Need Help Connecting?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Secure Connection</h4>
                <p className="text-sm text-muted-foreground">
                  We use bank-level encryption and never store your login credentials.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Read-Only Access</h4>
                <p className="text-sm text-muted-foreground">
                  We can only view your transactions, never move or access your money.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-3">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Easy Setup</h4>
                <p className="text-sm text-muted-foreground">
                  Most connections take less than 2 minutes to set up.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </div>
          </div>

          {/* Skip Option */}
          <div className="text-center mt-8">
            <Button
              variant="ghost"
              onClick={() => window.location.href = '/dashboard'}
              className="text-muted-foreground hover:text-foreground"
            >
              Skip for now - I'll connect accounts later
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountSetup;