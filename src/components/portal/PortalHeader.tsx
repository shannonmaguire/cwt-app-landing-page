import { Button } from "@/components/ui/button";

export function PortalHeader() {
  return (
    <header className="border-b border-border/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <span className="text-background font-bold text-lg">C</span>
          </div>
          <span className="font-semibold text-lg text-foreground">Creator Wealth Tools</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            The System
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Login
          </a>
        </nav>

        {/* CTA */}
        <Button 
          variant="command" 
          size="sm"
          className="bg-[#e31e54] text-white hover:bg-[#e31e54]/90 rounded-full px-6"
        >
          Get Started →
        </Button>
      </div>
    </header>
  );
}