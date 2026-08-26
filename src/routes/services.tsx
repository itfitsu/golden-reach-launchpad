import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Services, Process, FreeAudit } from "@/components/site/sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "SEO, AEO & Content Strategy Services | Web Marketing Group" },
      {
        name: "description",
        content:
          "Technical SEO, Answer Engine Optimization for AI assistants, and competitor gap analysis turned into a content roadmap that drives measurable growth.",
      },
      { property: "og:title", content: "SEO, AEO & Content Strategy Services" },
      {
        property: "og:description",
        content:
          "Three levers that compound visibility: SEO, AEO and competitor-driven content strategy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Visibility engineered for search and AI"
        copy="We combine classic search performance with answer-engine optimization so your business shows up wherever buyers are looking."
      />
      <Services />
      <Process />
      <FreeAudit />
    </SiteLayout>
  );
}
