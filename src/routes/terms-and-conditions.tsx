import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/features/legal/legal-page";

const sections = [
  {
    title: "Website Use",
    body: [
      "This website is provided for general information, project discovery, enquiry submission, and service communication related to Santhi Builders. You agree to use it only for lawful purposes.",
      "You must not misuse the website, attempt unauthorized access, interfere with platform security, or submit false or misleading project information.",
    ],
  },
  {
    title: "Estimates and Project Information",
    body: [
      "Any package rates, calculators, timelines, or service descriptions shown on the website are indicative and for planning convenience only. Final commercial proposals depend on scope, location, design, approvals, soil conditions, materials, and execution requirements.",
      "Submitting a form or using the estimate calculator does not create a binding contract, project award, or construction commitment unless separately agreed in writing.",
    ],
  },
  {
    title: "Intellectual Property and Content",
    body: [
      "All website content, layouts, graphics, copy, branding elements, and project presentation materials remain the property of Santhi Builders or their respective rights holders unless otherwise stated.",
      "You may not reproduce, republish, or commercially reuse website content without prior written permission.",
    ],
  },
  {
    title: "Liability and Jurisdiction",
    body: [
      "Santhi Builders makes reasonable efforts to keep website information current and accurate, but does not guarantee completeness, uninterrupted availability, or error-free operation at all times.",
      "These terms are governed by applicable Indian law. Any disputes arising from website use or related enquiries shall be subject to the jurisdiction of the competent courts applicable to Santhi Builders' operations.",
    ],
  },
] as const;

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Santhi Builders" },
      { name: "description", content: "Read the terms governing use of the Santhi Builders website, estimate tools, and enquiry services." },
    ],
  }),
  component: () => (
    <LegalPage
      intro="These Terms and Conditions govern your use of the Santhi Builders website, enquiry tools, estimate calculator, and related content made available through this platform."
      lastUpdated="14 August 2026"
      sections={[...sections]}
      title="Terms and Conditions"
    />
  ),
});