import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/features/about/about-page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Santhi Builders | Engineering Structural Legacies" },
      { name: "description", content: "Since 1998 Santhi Builders has delivered premium construction across Chennai with engineering rigour and craft." },
      { property: "og:title", content: "About Santhi Builders | Engineering Structural Legacies" },
      { property: "og:description", content: "Since 1998 Santhi Builders has delivered premium construction across Chennai with engineering rigour and craft." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});