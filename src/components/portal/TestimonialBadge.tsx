import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TestimonialBadge() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center gap-3 px-6 py-3 bg-secondary/30 rounded-full border border-secondary/50">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback className="bg-primary text-primary-foreground text-xs">
            BM
          </AvatarFallback>
        </Avatar>
        <p className="text-sm text-muted-foreground italic">
          "I actually wanted to make more money just to input bigger numbers." —Bela Marie
        </p>
      </div>
    </div>
  );
}