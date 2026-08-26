import { Link } from "@tanstack/react-router";
import {
  Search,
  Bot,
  Target,
  Globe,
  Share2,
  MapPin,
  ArrowRight,
  Check,
  Mail,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuditForm } from "./AuditForm";
import { ContactForm } from "./ContactForm";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 lg:px-8 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-48">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="eyebrow">SEO · AEO · Content Strategy</p>
        <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
          Get found on Google.
          <br />
          <span className="text-gradient-gold">Get cited by AI.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Web Marketing Group builds search and answer-engine visibility that turns into pipeline.
          Technical SEO, AEO for AI assistants, and competitor-driven content — measured on results,
          not impressions.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="gold" size="xl">
            <Link to="/free-audit">
              Get Your Free Audit <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="goldOutline" size="xl">
            <Link to="/services">See Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Search,
    title: "SEO",
    copy: "Technical fixes, site architecture and content optimization that move you up the rankings for the keywords your buyers actually search.",
    points: ["Technical & on-page SEO", "Keyword and intent mapping", "Local & Google Business"],
  },
  {
    icon: Bot,
    title: "AEO",
    copy: "Answer Engine Optimization: structuring your content so ChatGPT, Perplexity and Google AI Overviews surface and cite your business by name.",
    points: ["Entity & schema structuring", "Citation-ready content", "AI answer monitoring"],
  },
  {
    icon: Target,
    title: "Competitor & Content Strategy",
    copy: "We reverse-engineer the competitors beating you in search, find the gaps, and turn them into a prioritized content roadmap.",
    points: ["Competitive gap analysis", "Content roadmap", "Performance reporting"],
  },
];

export function Services() {
  return (
    <Section id="services">
      <div className="max-w-2xl">
        <p className="eyebrow">What we do</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Three levers that compound your visibility
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="surface-panel group rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold/20">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            <ul className="mt-6 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-gold" /> {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

const auditItems = [
  {
    icon: Globe,
    title: "Website Audit",
    copy: "Technical health, page speed, keyword coverage and the specific pages costing you rankings.",
  },
  {
    icon: Share2,
    title: "Social Media Audit",
    copy: "Profile consistency, content cadence and the fastest wins to convert attention into traffic.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Audit",
    copy: "Listing accuracy, categories, reviews and map-pack visibility in your service area.",
  },
];

export function FreeAudit() {
  return (
    <Section id="free-audit">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Free, no obligation</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            A full <span className="text-gradient-gold">free audit</span> of your online presence
          </h2>
          <p className="mt-5 text-muted-foreground">
            We review where you stand today and send back a plain-English report with prioritized
            actions. Delivered fast. No contracts, no pitch deck.
          </p>
          <div className="mt-10 space-y-6">
            {auditItems.map((i) => (
              <div key={i.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <i.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{i.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{i.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AuditForm />
      </div>
    </Section>
  );
}

const steps = [
  { n: "01", title: "Audit", copy: "We benchmark your site, socials and profile against your competitors." },
  { n: "02", title: "Strategy", copy: "Gap analysis becomes a prioritized SEO and AEO roadmap." },
  { n: "03", title: "Implementation", copy: "We ship technical fixes, structured data and content." },
  { n: "04", title: "Growth & Reporting", copy: "Monthly reporting on rankings, AI citations and leads." },
];

export function Process() {
  return (
    <Section id="process" className="bg-surface/30">
      <div className="max-w-2xl">
        <p className="eyebrow">How we work</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">A process built for measurable growth</h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="surface-panel relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
          >
            <span className="font-display text-4xl font-bold text-gradient-gold">{s.n}</span>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="eyebrow">About us</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            An agency that reports on outcomes, not activity
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Web Marketing Group LLC is a US-based digital marketing firm working with business
            owners who need search to produce revenue. We keep engagements lean: a clear diagnosis,
            a focused roadmap, and execution you can verify in the numbers.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Search is splitting in two — classic results and AI answers. We work both sides, so your
            business shows up whether a customer types a query into Google or asks an assistant for
            a recommendation.
          </p>
          <div className="mt-8">
            <Button asChild variant="gold" size="lg">
              <Link to="/free-audit">Start with a free audit</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { k: "Search + AI", v: "Dual visibility strategy" },
            { k: "Data-led", v: "Competitor gap analysis" },
            { k: "Transparent", v: "Monthly outcome reporting" },
            { k: "No fluff", v: "Prioritized, shippable work" },
          ].map((b) => (
            <div key={b.k} className="surface-panel rounded-2xl p-6">
              <p className="font-display text-lg text-gradient-gold">{b.k}</p>
              <p className="mt-2 text-sm text-muted-foreground">{b.v}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" className="bg-surface/30">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Talk to Web Marketing Group</h2>
          <p className="mt-5 text-muted-foreground">
            Questions about SEO, AEO or the free audit? Reach us directly — we reply quickly.
          </p>
          <address className="mt-10 space-y-6 not-italic">
            <div className="flex gap-4">
              <Building2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="font-semibold">Web Marketing Group LLC</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  1309 Coffeen Avenue, Suite 3056
                  <br />
                  Sheridan, WY 82801
                  <br />
                  United States
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:invoice@webmgllc.com"
                  className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  invoice@webmgllc.com
                </a>
              </div>
            </div>
          </address>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
