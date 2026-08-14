import { createFileRoute } from "@tanstack/react-router";
import { EstimateCalculatorPage } from "@/features/estimate/estimate-calculator-page";

export const Route = createFileRoute("/estimate-calculator")({
  head: () => ({
    meta: [
      { title: "Estimate Calculator | Santhi Builders" },
      { name: "description", content: "Compare construction packages and calculate a planning estimate for your Santhi Builders project." },
      { property: "og:title", content: "Estimate Calculator | Santhi Builders" },
      { property: "og:description", content: "Use Santhi Builders' estimate calculator to compare package rates, inclusions, and live cost breakdowns." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EstimateCalculatorPage,
});
