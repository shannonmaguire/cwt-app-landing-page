import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PortalHeader() {
  return (
    <header className="border-b border-border/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img 
              src="/lovable-uploads/27529a08-fcf3-42d5-ba61-5b346c6e882a.png" 
              alt="Wealth Tools" 
              className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Login
          </a>
        </nav>

        {/* CTA */}
        <Button 
          variant="command" 
          size="sm"
          className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => window.location.href = '/get-started'}
        >
          Start Your Revenue Intelligence →
        </Button>
      </div>
    </header>
  );
}