import { TrendingUp, TrendingDown, DollarSign, Target, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: React.ReactNode;
  description?: string;
}

function StatCard({ title, value, change, trend, icon, description }: StatCardProps) {
  const trendColor = trend === "up" ? "text-success" : trend === "down" ? "text-destructive" : "text-muted-foreground";
  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Calendar;

  return (
    <Card className="hover:shadow-md transition-all duration-200 border-0 bg-card/50 backdrop-blur">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-secondary rounded-lg">
                {icon}
              </div>
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold">{value}</p>
              {description && (
                <p className="text-xs text-muted-foreground">{description}</p>
              )}
            </div>
          </div>
          <div className={`flex items-center gap-1 ${trendColor}`}>
            <TrendIcon className="h-4 w-4" />
            <span className="text-sm font-medium">{change}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Total Revenue"
        value="$12,847"
        change="+23%"
        trend="up"
        icon={<DollarSign className="h-5 w-5 text-primary" />}
        description="Last 30 days"
      />
      <StatCard
        title="Brand Deals"
        value="$8,420"
        change="+32%"
        trend="up"
        icon={<Target className="h-5 w-5 text-accent" />}
        description="5 completed deals"
      />
      <StatCard
        title="Affiliate Income"
        value="$2,180"
        change="-8%"
        trend="down"
        icon={<TrendingUp className="h-5 w-5 text-warning" />}
        description="Amazon & others"
      />
      <StatCard
        title="Monthly Goal"
        value="87%"
        change="$15k target"
        trend="up"
        icon={<Calendar className="h-5 w-5 text-primary" />}
        description="$2k remaining"
      />
    </div>
  );
}