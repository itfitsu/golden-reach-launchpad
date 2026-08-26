import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { About, Process, Contact } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Web Marketing Group | Results-Driven SEO & AEO Agency" },
      {
        name: "description",
        content:
          "Web Marketing Group LLC is a US-based agency helping business owners win in both classic search and AI answers, with transparent outcome reporting.",
      },
      { property: "og:title", content: "About Web Marketing Group" },
      {
        property: "og:description",
        content:
          "A US-based digital marketing agency reporting on outcomes, not activity. SEO, AEO and content strategy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="Built for business owners who measure results"
        copy="Lean engagements, clear diagnosis, focused execution — and numbers you can verify."
      />
      <About />
      <Process />
      <Contact />
    </SiteLayout>
  );
}
