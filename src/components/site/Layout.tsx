import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="relative overflow-hidden px-5 pb-8 pt-36 lg:px-8 lg:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
        style={{ background: "var(--gradient-gold)" }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">{copy}</p>
      </div>
    </section>
  );
}
