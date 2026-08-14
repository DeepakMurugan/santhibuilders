import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/features/projects/projects-page";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects Gallery | Santhi Builders" },
      { name: "description", content: "Explore completed villas, apartments, commercial spaces and interiors built by Santhi Builders in Chennai." },
      { property: "og:title", content: "Projects Gallery | Santhi Builders" },
      { property: "og:description", content: "Explore completed villas, apartments, commercial spaces and interiors built by Santhi Builders in Chennai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});