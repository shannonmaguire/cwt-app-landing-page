import { Clock, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PersonalizedGreeting() {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";
  
  const weeklyHighlight = {
    metric: "Brand Deals",
    change: "+32%",
    description: "Your strongest revenue stream this week"
  };

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20 mb-8">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <p className="text-sm font-medium text-muted-foreground">Financial Intelligence</p>
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">
                {greeting}, Morgan
              </h1>
              <p className="text-muted-foreground">
                Here's what's changed this week
              </p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm font-medium">{weeklyHighlight.metric} {weeklyHighlight.change}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {weeklyHighlight.description}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Updated just now</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}