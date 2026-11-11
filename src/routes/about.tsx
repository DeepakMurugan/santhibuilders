import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/features/about/about-page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Santhi Builders | Engineering Structural Legacies" },
      { name: "description", content: "Learn about Santhi Builders, established on 29 July 2019, and our approach to planning, design and construction." },
      { property: "og:title", content: "About Santhi Builders | Engineering Structural Legacies" },
      { property: "og:description", content: "Learn about Santhi Builders, established on 29 July 2019, and our approach to planning, design and construction." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});