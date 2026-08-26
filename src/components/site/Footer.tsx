import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            SEO, AEO and competitor-driven content strategy for businesses that want measurable
            visibility in search and AI answers.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest text-foreground">NAVIGATE</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {[
              { label: "Services", to: "/services" },
              { label: "Free Audit", to: "/free-audit" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="transition-colors hover:text-gold">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest text-foreground">CONTACT</h3>
          <address className="mt-4 space-y-3 text-sm not-italic text-muted-foreground">
            <p className="font-medium text-foreground">Web Marketing Group LLC</p>
            <p className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              1309 Coffeen Avenue, Suite 3056
              <br />
              Sheridan, WY 82801
            </p>
            <p className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:invoice@webmgllc.com" className="hover:text-gold">
                invoice@webmgllc.com
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} Web Marketing Group LLC. All rights reserved.
      </div>
    </footer>
  );
}
