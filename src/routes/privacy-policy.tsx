import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/features/legal/legal-page";

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect the details you submit through enquiry forms, estimate requests, contact forms, WhatsApp follow-up requests, and direct communication. This can include your name, phone number, email address, project location, plot area, budget expectations, and project notes.",
      "We may also collect basic technical information such as browser details, device information, and on-site interaction data for website performance and security purposes.",
    ],
  },
  {
    title: "Purpose of Processing",
    body: [
      "We use your information to respond to project enquiries, provide estimates, schedule consultations, manage pre-sales discussions, and improve our service communication.",
      "Where required under the Digital Personal Data Protection Act, 2023, we process personal data for specific, lawful, and transparent business purposes connected to our construction, design, and customer support operations.",
    ],
  },
  {
    title: "Consent and Retention",
    body: [
      "By submitting forms on this website, you consent to Santhi Builders using the information you provide to contact you regarding your enquiry and related services.",
      "We retain personal data only for as long as reasonably required to respond to your enquiry, manage your customer relationship, comply with legal obligations, or resolve disputes.",
    ],
  },
  {
    title: "Data Sharing and Your Rights",
    body: [
      "We do not sell your personal data. We may share it with internal team members, implementation partners, or service providers only when necessary to process your request or support our operations.",
      "You may request access, correction, or erasure of your personal data, subject to applicable legal and contractual obligations. For privacy-related concerns, please contact us through the contact channels listed on this website.",
    ],
  },
] as const;

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Santhi Builders" },
      { name: "description", content: "Read how Santhi Builders collects, uses, and protects personal data in line with applicable privacy obligations." },
    ],
  }),
  component: () => (
    <LegalPage
      intro="This Privacy Policy explains how Santhi Builders collects, uses, stores, and protects personal data shared through the website, estimate tools, contact forms, and direct communication channels."
      lastUpdated="14 August 2026"
      sections={[...sections]}
      title="Privacy Policy"
    />
  ),
});
