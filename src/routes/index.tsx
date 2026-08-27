import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Hero, Services, FreeAudit, Process, About, Contact } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Web Marketing Group | SEO & AEO Agency for Measurable Growth" },
      {
        name: "description",
        content:
          "US-based agency growing your visibility in Google and AI answer engines through SEO, AEO and competitor-driven content strategy. Claim your free audit.",
      },
      { property: "og:title", content: "Web Marketing Group | SEO & AEO Agency" },
      {
        property: "og:description",
        content:
          "SEO, Answer Engine Optimization and competitor content strategy that turn search visibility into revenue. Free website, social and Google Business audit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Web Marketing Group LLC",
          email: "support@webmarketinggroup.online",
          url: "https://webmarketinggroup.io",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1309 Coffeen Avenue, Suite 3056",
            addressLocality: "Sheridan",
            addressRegion: "WY",
            postalCode: "82801",
            addressCountry: "US",
          },
          areaServed: "US",
          description:
            "Digital marketing agency specializing in SEO, Answer Engine Optimization (AEO) and competitor content strategy.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <FreeAudit />
      <Process />
      <About />
      <Contact />
    </SiteLayout>
  );
}
