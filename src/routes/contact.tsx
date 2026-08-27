import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Contact } from "@/components/site/sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Web Marketing Group LLC | Sheridan, WY" },
      {
        name: "description",
        content:
          "Contact Web Marketing Group LLC at 1309 Coffeen Avenue, Suite 3056, Sheridan, WY 82801 or email support@webmarketinggroup.online for SEO and AEO support.",
      },
      { property: "og:title", content: "Contact Web Marketing Group LLC" },
      {
        property: "og:description",
        content: "Reach our team in Sheridan, WY about SEO, AEO or your free marketing audit.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your search visibility"
        copy="Send a message or email us directly — we reply quickly and get straight to specifics."
      />
      <Contact />
    </SiteLayout>
  );
}
