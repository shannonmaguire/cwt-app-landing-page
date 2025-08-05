import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Clock, Globe, Server, Database, Shield, Zap } from "lucide-react";

const Status = () => {
  const currentStatus = "operational"; // operational, degraded, outage

  const services = [
    {
      name: "API Gateway",
      status: "operational",
      uptime: "99.99%",
      responseTime: "45ms",
      description: "Main API endpoint for all requests"
    },
    {
      name: "Authentication Service",
      status: "operational",
      uptime: "99.98%",
      responseTime: "12ms",
      description: "User authentication and authorization"
    },
    {
      name: "Data Processing",
      status: "operational",
      uptime: "99.95%",
      responseTime: "123ms",
      description: "Financial data analysis and insights"
    },
    {
      name: "Bank Connections",
      status: "operational",
      uptime: "99.92%",
      responseTime: "1.2s",
      description: "Third-party financial institution connections"
    },
    {
      name: "Real-time Notifications",
      status: "operational",
      uptime: "99.97%",
      responseTime: "89ms",
      description: "Push notifications and webhooks"
    },
    {
      name: "Dashboard & Web App",
      status: "operational",
      uptime: "99.99%",
      responseTime: "234ms",
      description: "Main web application and dashboard"
    }
  ];

  const incidents = [
    {
      id: 1,
      title: "Scheduled Maintenance - Database Optimization",
      status: "completed",
      impact: "low",
      date: "Jan 12, 2024",
      time: "2:00 AM - 4:00 AM PST",
      description: "Routine database optimization and index rebuilding to improve performance.",
      updates: [
        { time: "4:00 AM", message: "Maintenance completed successfully. All services restored." },
        { time: "2:00 AM", message: "Maintenance started. Some queries may experience slower response times." }
      ]
    },
    {
      id: 2,
      title: "Brief API Slowdown",
      status: "resolved",
      impact: "medium",
      date: "Jan 8, 2024",
      time: "3:15 PM - 3:45 PM PST",
      description: "API response times increased due to high traffic volume.",
      updates: [
        { time: "3:45 PM", message: "Issue resolved. API response times back to normal." },
        { time: "3:30 PM", message: "Additional servers deployed to handle increased load." },
        { time: "3:15 PM", message: "Investigating increased API response times." }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-600";
      case "degraded":
        return "text-yellow-600";
      case "outage":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "degraded":
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case "outage":
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-500/10 text-green-600 border-green-200">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-200">Degraded</Badge>;
      case "outage":
        return <Badge className="bg-red-500/10 text-red-600 border-red-200">Outage</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <CheckCircle className="w-4 h-4" />
              All Systems Operational
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              System Status
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Real-time status and uptime information for all Creator Wealth Tools services.
            </p>

            {/* Overall Status */}
            <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                {getStatusIcon(currentStatus)}
                <h2 className={`text-2xl font-bold ${getStatusColor(currentStatus)}`}>
                  All Systems Operational
                </h2>
              </div>
              <p className="text-muted-foreground">
                All services are running normally with no reported issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            Service Status
          </h2>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-sm font-medium text-foreground">{service.uptime}</div>
                      <div className="text-xs text-muted-foreground">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-foreground">{service.responseTime}</div>
                      <div className="text-xs text-muted-foreground">Response Time</div>
                    </div>
                    {getStatusBadge(service.status)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            Performance Metrics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="bg-green-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">99.99%</div>
              <div className="text-muted-foreground mb-1">Overall Uptime</div>
              <div className="text-sm text-green-600">Last 30 days</div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="bg-blue-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">89ms</div>
              <div className="text-muted-foreground mb-1">Avg Response Time</div>
              <div className="text-sm text-blue-600">API endpoints</div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Server className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">45M+</div>
              <div className="text-muted-foreground mb-1">API Requests</div>
              <div className="text-sm text-purple-600">This month</div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="bg-orange-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Database className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">2.1TB</div>
              <div className="text-muted-foreground mb-1">Data Processed</div>
              <div className="text-sm text-orange-600">Daily average</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
            Recent Incidents
          </h2>

          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-2 rounded-full ${
                    incident.status === 'resolved' || incident.status === 'completed' 
                      ? 'bg-green-500/10' 
                      : 'bg-yellow-500/10'
                  }`}>
                    {incident.status === 'resolved' || incident.status === 'completed' 
                      ? <CheckCircle className="w-5 h-5 text-green-600" />
                      : <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    }
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{incident.title}</h3>
                      <Badge className={`${
                        incident.impact === 'low' ? 'bg-green-500/10 text-green-600 border-green-200' :
                        incident.impact === 'medium' ? 'bg-yellow-500/10 text-yellow-600 border-yellow-200' :
                        'bg-red-500/10 text-red-600 border-red-200'
                      }`}>
                        {incident.impact} impact
                      </Badge>
                      <Badge variant="outline" className={
                        incident.status === 'resolved' || incident.status === 'completed'
                          ? 'border-green-200 text-green-600'
                          : 'border-yellow-200 text-yellow-600'
                      }>
                        {incident.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {incident.date} • {incident.time}
                    </div>
                    <p className="text-muted-foreground mb-6">{incident.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Updates:</h4>
                      {incident.updates.map((update, updateIndex) => (
                        <div key={updateIndex} className="flex gap-3 text-sm">
                          <span className="text-muted-foreground font-mono">{update.time}</span>
                          <span className="text-muted-foreground">{update.message}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full">
              View All Incidents
            </Button>
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to status updates and be the first to know about any service changes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 rounded-full px-8"
              onClick={() => {/* Open subscription modal */}}
            >
              Subscribe to Updates
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8"
              onClick={() => window.open('https://status.creatorwealthtools.com/rss', '_blank')}
            >
              RSS Feed
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status;