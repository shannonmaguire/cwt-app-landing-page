import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code, BookOpen, Play, Download, ExternalLink, Copy } from "lucide-react";

const APIDocumentation = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Code className="w-4 h-4" />
              API Documentation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build with Our
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Financial API
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Integrate Creator Wealth Tools financial intelligence into your applications with our comprehensive REST API.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 rounded-full px-8"
                onClick={() => {/* Open API key generation */}}
              >
                Get API Key
                <Code className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8"
                onClick={() => window.open('https://github.com/creator-wealth-tools/api-examples', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Quick Start</h2>
              <p className="text-muted-foreground mb-6">
                Get started with our API in minutes. Authenticate with your API key and start accessing financial data.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span className="text-foreground">Generate your API key</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span className="text-foreground">Make your first API call</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <span className="text-foreground">Start building amazing features</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Example Request</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(`curl -X GET "https://api.creatorwealthtools.com/v1/accounts" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <pre className="bg-muted/50 rounded-lg p-4 text-sm overflow-x-auto">
                <code>{`curl -X GET "https://api.creatorwealthtools.com/v1/accounts" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            API Reference
          </h2>

          <Tabs defaultValue="authentication" className="space-y-8">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="authentication">Authentication</TabsTrigger>
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            </TabsList>

            <TabsContent value="authentication" className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Authentication</h3>
                <p className="text-muted-foreground mb-6">
                  All API requests require authentication using your API key in the Authorization header.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">API Key Authentication</h4>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm">
                        <code>Authorization: Bearer YOUR_API_KEY</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Rate Limits</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">1000</div>
                        <div className="text-sm text-muted-foreground">Requests per hour</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">100</div>
                        <div className="text-sm text-muted-foreground">Concurrent requests</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">10MB</div>
                        <div className="text-sm text-muted-foreground">Max request size</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="accounts" className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Accounts API</h3>
                <p className="text-muted-foreground mb-6">
                  Retrieve and manage connected financial accounts.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">GET</Badge>
                      <code className="text-sm font-mono">/v1/accounts</code>
                    </div>
                    <p className="text-muted-foreground mb-4">Retrieve all connected accounts for the authenticated user.</p>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`{
  "accounts": [
    {
      "id": "acc_123456",
      "name": "Chase Checking",
      "type": "checking",
      "balance": 5432.10,
      "currency": "USD",
      "institution": {
        "name": "Chase Bank",
        "logo": "https://..."
      },
      "last_updated": "2024-01-15T10:30:00Z"
    }
  ],
  "total_count": 3
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-200">POST</Badge>
                      <code className="text-sm font-mono">/v1/accounts</code>
                    </div>
                    <p className="text-muted-foreground mb-4">Connect a new financial account.</p>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`{
  "institution_id": "ins_chase",
  "credentials": {
    "username": "user@example.com",
    "password": "secure_password"
  }
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="transactions" className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Transactions API</h3>
                <p className="text-muted-foreground mb-6">
                  Access detailed transaction data across all connected accounts.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">GET</Badge>
                      <code className="text-sm font-mono">/v1/transactions</code>
                    </div>
                    <p className="text-muted-foreground mb-4">Retrieve transactions with optional filtering.</p>
                    
                    <div className="space-y-3 mb-4">
                      <h5 className="font-semibold text-foreground">Query Parameters:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div><code>account_id</code> - Filter by account</div>
                        <div><code>start_date</code> - Start date (ISO 8601)</div>
                        <div><code>end_date</code> - End date (ISO 8601)</div>
                        <div><code>category</code> - Transaction category</div>
                        <div><code>limit</code> - Number of results (max 1000)</div>
                        <div><code>offset</code> - Pagination offset</div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`{
  "transactions": [
    {
      "id": "txn_789012",
      "account_id": "acc_123456",
      "amount": -45.67,
      "currency": "USD",
      "description": "Starbucks Coffee",
      "category": "Food & Dining",
      "date": "2024-01-15",
      "merchant": {
        "name": "Starbucks",
        "category": "cafe"
      }
    }
  ],
  "has_more": true,
  "total_count": 1250
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Insights API</h3>
                <p className="text-muted-foreground mb-6">
                  Access AI-powered financial insights and recommendations.
                </p>

                <div className="space-y-6">
                  <div className="border border-border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">GET</Badge>
                      <code className="text-sm font-mono">/v1/insights/spending</code>
                    </div>
                    <p className="text-muted-foreground mb-4">Get spending analysis and patterns.</p>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>{`{
  "period": "last_30_days",
  "total_spending": 2845.67,
  "categories": [
    {
      "name": "Food & Dining",
      "amount": 456.78,
      "percentage": 16.0,
      "trend": "up"
    }
  ],
  "insights": [
    {
      "type": "optimization",
      "title": "Reduce dining expenses",
      "description": "You spent 23% more on dining this month",
      "potential_savings": 105.50
    }
  ]
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="webhooks" className="space-y-6">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Webhooks</h3>
                <p className="text-muted-foreground mb-6">
                  Receive real-time notifications about account changes and events.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">Event Types</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <code className="text-primary">account.connected</code>
                        <p className="text-sm text-muted-foreground mt-1">New account connected</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <code className="text-primary">transaction.created</code>
                        <p className="text-sm text-muted-foreground mt-1">New transaction detected</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <code className="text-primary">insight.generated</code>
                        <p className="text-sm text-muted-foreground mt-1">New AI insight available</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <code className="text-primary">account.error</code>
                        <p className="text-sm text-muted-foreground mt-1">Account connection issue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* SDKs and Tools */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              SDKs & Tools
            </h2>
            <p className="text-lg text-muted-foreground">
              Official libraries and tools to accelerate your development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">JavaScript SDK</h3>
              <p className="text-muted-foreground mb-4">
                Official Node.js and browser SDK
              </p>
              <Button variant="outline" className="w-full mb-3">
                <Download className="w-4 h-4 mr-2" />
                npm install
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Docs
              </Button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Python SDK</h3>
              <p className="text-muted-foreground mb-4">
                Official Python library
              </p>
              <Button variant="outline" className="w-full mb-3">
                <Download className="w-4 h-4 mr-2" />
                pip install
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Docs
              </Button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">API Explorer</h3>
              <p className="text-muted-foreground mb-4">
                Interactive API testing tool
              </p>
              <Button variant="outline" className="w-full mb-3">
                <Play className="w-4 h-4 mr-2" />
                Try Now
              </Button>
              <Button variant="ghost" size="sm" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Tool
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIDocumentation;