import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndexPage } from "@/features/services/services-index-page";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Construction Services in Chennai | Santhi Builders" },
      {
        name: "description",
        content:
          "Design, construction, interiors, project management, quantity surveying and quality control — every service Santhi Builders delivers in Chennai.",
      },
      { property: "og:title", content: "Construction Services in Chennai | Santhi Builders" },
      {
        property: "og:description",
        content: "Explore the full range of Santhi Builders construction and design services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndexPage,
});
