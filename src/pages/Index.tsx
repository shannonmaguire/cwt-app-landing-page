import { DashboardHeader } from "@/components/dashboard/Header";
import { PersonalizedGreeting } from "@/components/dashboard/PersonalizedGreeting";
import { StatsOverview } from "@/components/dashboard/StatsOverview";
import { IncomeTable } from "@/components/dashboard/IncomeTable";
import { InsightCard } from "@/components/dashboard/InsightCard";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <PersonalizedGreeting />
        
        <StatsOverview />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <IncomeTable />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InsightCard
                type="insight"
                title="You need the full story"
                description="Most creators know the brand, the collab, the PayPal balance. But they don't know the pattern. They don't know what's working. And they don't know what it all adds up to."
                actionText="Get deeper insights"
              />
              <InsightCard
                type="opportunity"
                title="Brand deals momentum building"
                description="Your brand deal income is up 32% this month. Consider reaching out to similar brands in your niche to capitalize on this trend."
                actionText="View brand opportunities"
              />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
