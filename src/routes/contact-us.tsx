import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/features/contact/contact-page";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Santhi Builders | Start Your Construction Project" },
      { name: "description", content: "Contact Santhi Builders for construction planning, design, interiors, renovation, and project consultation." },
      { property: "og:title", content: "Contact Santhi Builders | Start Your Construction Project" },
      { property: "og:description", content: "Speak with the Santhi Builders team and send your project brief through one structured enquiry form." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});
