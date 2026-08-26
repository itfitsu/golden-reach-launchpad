import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { FreeAudit, Process } from "@/components/site/sections";

export const Route = createFileRoute("/free-audit")({
  head: () => ({
    meta: [
      { title: "Free Website, Social & Google Business Audit | Web Marketing Group" },
      {
        name: "description",
        content:
          "Claim a no-cost audit of your website, social media and Google Business Profile. Delivered fast as a prioritized, actionable report. No obligation.",
      },
      { property: "og:title", content: "Claim Your Free Marketing Audit" },
      {
        property: "og:description",
        content:
          "A no-cost review of your website, social presence and Google Business Profile, delivered as an actionable report.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/free-audit" },
    ],
    links: [{ rel: "canonical", href: "/free-audit" }],
  }),
  component: FreeAuditPage,
});

function FreeAuditPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Free audit"
        title="See exactly where you're losing visibility"
        copy="We review your website, social presence and Google Business Profile and send back a prioritized action list. Free, fast, no obligation."
      />
      <FreeAudit />
      <Process />
    </SiteLayout>
  );
}
