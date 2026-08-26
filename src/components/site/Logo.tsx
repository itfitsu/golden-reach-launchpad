import { Link } from "@tanstack/react-router";
import logo from "@/assets/wmg-logo.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Web Marketing Group home">
      <img
        src={logo}
        alt="Web Marketing Group compass mark"
        width={40}
        height={40}
        className="h-9 w-9 transition-transform duration-300 group-hover:rotate-45"
      />
      <span className="font-display text-[0.7rem] leading-tight tracking-[0.3em] text-foreground sm:text-xs">
        WEB MARKETING
        {compact ? " " : <br />}
        <span className="text-gradient-gold">GROUP</span>
      </span>
    </Link>
  );
}
