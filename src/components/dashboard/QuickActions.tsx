import { Plus, Link, BarChart3, Target, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quickActions = [
  {
    icon: Plus,
    label: "Add Income",
    description: "Log new revenue",
    action: "primary"
  },
  {
    icon: Link,
    label: "Connect Account",
    description: "Link bank or platform",
    action: "secondary"
  },
  {
    icon: Target,
    label: "Set Goal",
    description: "Monthly target",
    action: "secondary"
  },
  {
    icon: BarChart3,
    label: "View Analytics",
    description: "Deep dive",
    action: "ghost"
  }
];

export function QuickActions() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Button
              key={index}
              variant={action.action as any}
              className="w-full justify-start h-auto p-4 hover:scale-[1.02] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary rounded-lg">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium">{action.label}</p>
                  <p className="text-xs text-muted-foreground">{action.description}</p>
                </div>
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}