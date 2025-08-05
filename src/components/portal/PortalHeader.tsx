import { Button } from "@/components/ui/button";

export function PortalHeader() {
  return (
    <header className="border-b border-border/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/27529a08-fcf3-42d5-ba61-5b346c6e882a.png" 
            alt="Creator Wealth Tools" 
            className="h-8 w-auto"
          />
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