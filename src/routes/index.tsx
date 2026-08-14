import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/features/home/home-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santhi Builders | Premium Construction & Design in Chennai" },
      { name: "description", content: "Chennai's trusted construction partner for villas, apartments and commercial builds — design, build and project management under one roof." },
      { property: "og:title", content: "Santhi Builders | Premium Construction & Design in Chennai" },
      { property: "og:description", content: "Chennai's trusted construction partner for villas, apartments and commercial builds — design, build and project management under one roof." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
