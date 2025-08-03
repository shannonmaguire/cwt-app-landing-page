import { Lightbulb, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface InsightCardProps {
  title: string;
  description: string;
  actionText?: string;
  type?: "insight" | "opportunity" | "warning";
}

export function InsightCard({ title, description, actionText, type = "insight" }: InsightCardProps) {
  const getBgColor = () => {
    switch (type) {
      case "opportunity":
        return "bg-accent/10 border-accent/20";
      case "warning":
        return "bg-warning/30 border-warning/40";
      default:
        return "bg-secondary/30 border-secondary/40";
    }
  };

  const getIconColor = () => {
    switch (type) {
      case "opportunity":
        return "text-accent";
      case "warning":
        return "text-warning";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className={`${getBgColor()} transition-all duration-200 hover:shadow-md`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded-lg bg-background/50 ${getIconColor()}`}>
            <Lightbulb className="h-5 w-5" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
            {actionText && (
              <Button variant="ghost" size="sm" className="p-0 h-auto font-medium">
                {actionText}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}