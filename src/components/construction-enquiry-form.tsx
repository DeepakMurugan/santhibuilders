import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  WHATSAPP_LINK,
} from "@/lib/company-info";

type Theme = "light" | "dark";

type ConstructionEnquiryFormProps = {
  className?: string;
  compact?: boolean;
  source?: string;
  submitLabel?: string;
  theme?: Theme;
  title?: string;
  description?: string;
};

const projectTypes = [
  "Residential Construction",
  "Villa / Independent House",
  "Apartment Development",
  "Interior Fit-Out",
  "Renovation / Remodeling",
  "Commercial Construction",
  "Design & Drawings",
  "Project Management",
] as const;

function buildWhatsappUrl(fields: Record<string, string>) {
  const message = [
    "Hello Santhi Builders, I would like to enquire about a construction project.",
    `Name: ${fields.fullName || "-"}`,
    `Phone: ${fields.phone || "-"}`,
    `Email: ${fields.email || "-"}`,
    `Project Type: ${fields.projectType || "-"}`,
    `Location: ${fields.location || "-"}`,
    `Plot Area: ${fields.plotArea || "-"}`,
    `Budget: ${fields.budget || "-"}`,
    `Timeline: ${fields.timeline || "-"}`,
    `Message: ${fields.message || "-"}`,
    `Source: ${fields.source || "Website"}`,
  ].join("\n");

  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

export function ConstructionEnquiryForm({
  className = "",
  compact = false,
  source = "Website",
  submitLabel = "Send Enquiry",
  theme = "light",
  title,
  description,
}: ConstructionEnquiryFormProps) {
  const [formState, setFormState] = useState({
    fullName: "",
    phone: "",
    email: "",
    projectType: projectTypes[0],
    location: "",
    plotArea: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const isDark = theme === "dark";
  const shellClass = isDark
    ? "bg-white/10 border-white/20 text-white backdrop-blur-md"
    : "bg-white border-outline-variant/30 text-on-surface shadow-xl";
  const fieldClass = isDark
    ? "bg-white/10 border-white/15 text-white placeholder:text-white/55"
    : "bg-surface-container-low border-outline-variant/25 text-on-surface placeholder:text-on-surface-variant/60";
  const labelClass = isDark ? "text-white/75" : "text-on-surface-variant";

  return (
    <div className={`rounded-[2rem] border p-5 md:p-8 ${shellClass} ${className}`}>
      {title ? <h3 className={`font-black ${compact ? "text-xl md:text-2xl mb-3" : "text-2xl md:text-3xl mb-4"}`}>{title}</h3> : null}
      {description ? <p className={`${isDark ? "text-white/75" : "text-on-surface-variant"} ${compact ? "text-sm md:text-base mb-5" : "text-base md:text-lg mb-6"}`}>{description}</p> : null}
      <form
        className={compact ? "space-y-4" : "space-y-5"}
        onSubmit={(event) => {
          event.preventDefault();
          window.open(buildWhatsappUrl({ ...formState, source }), "_blank", "noopener,noreferrer");
        }}
      >
        <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <FormField label="Full Name" labelClass={labelClass}>
            <input
              className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-primary ${fieldClass}`}
              onChange={(event) => setFormState((current) => ({ ...current, fullName: event.target.value }))}
              placeholder="Your full name"
              required
              type="text"
              value={formState.fullName}
            />
          </FormField>
          <FormField label="Phone Number" labelClass={labelClass}>
            <input
              className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-primary ${fieldClass}`}
              onChange={(event) => setFormState((current) => ({ ...current, phone: event.target.value }))}
              placeholder="+91"
              required
              type="tel"
              value={formState.phone}
            />
          </FormField>
        </div>
        <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <FormField label="Email Address" labelClass={labelClass}>
            <input
              className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-primary ${fieldClass}`}
              onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
              placeholder="you@example.com"
              type="email"
              value={formState.email}
            />
          </FormField>
          <FormField label="Project Type" labelClass={labelClass}>
            <select
              className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-primary ${fieldClass}`}
              onChange={(event) => setFormState((current) => ({ ...current, projectType: event.target.value }))}
              value={formState.projectType}
            >
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </FormField>
        </div>
        <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 md:grid-cols-3 gap-4"}>
          <FormField label="Project Location" labelClass={labelClass}>
            <input
              className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-primary ${fieldClass}`}
              onChange={(event) => setFormState((current) => ({ ...current, location: event.target.value }))}
              placeholder="Area / city"
              type="text"
              value={formState.location}
            />
          </FormField>
          <FormField label="Plot Area" labelClass={labelClass}>
            <input
              className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-primary ${fieldClass}`}
              onChange={(event) => setFormState((current) => ({ ...current, plotArea: event.target.value }))}
              placeholder="Sq.ft"
              type="text"
              value={formState.plotArea}
            />
          </FormField>
          <FormField label="Budget Range" labelClass={labelClass}>
            <input
              className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-primary ${fieldClass}`}
              onChange={(event) => setFormState((current) => ({ ...current, budget: event.target.value }))}
              placeholder="Approx budget"
              type="text"
              value={formState.budget}
            />
          </FormField>
        </div>
        <FormField label="Expected Timeline" labelClass={labelClass}>
          <input
            className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-primary ${fieldClass}`}
            onChange={(event) => setFormState((current) => ({ ...current, timeline: event.target.value }))}
            placeholder="When do you want to start?"
            type="text"
            value={formState.timeline}
          />
        </FormField>
        <FormField label="Project Brief" labelClass={labelClass}>
          <textarea
            className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-primary ${fieldClass}`}
            onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
            placeholder="Tell us about your requirements, style preference, site details, and expected scope."
            rows={compact ? 4 : 5}
            value={formState.message}
          ></textarea>
        </FormField>
        <button className={`w-full rounded-xl bg-primary px-6 py-4 font-black text-white transition-all hover:bg-primary/90 ${compact ? "text-sm md:text-base" : "text-base md:text-lg"}`} type="submit">
          {submitLabel}
        </button>
        <p className={`text-xs md:text-sm ${isDark ? "text-white/70" : "text-on-surface-variant"}`}>
          By submitting, you agree to our <Link className="font-bold text-primary" to="/privacy-policy">Privacy Policy</Link> and <Link className="font-bold text-primary" to="/terms-and-conditions">Terms & Conditions</Link>.
        </p>
      </form>
    </div>
  );
}

export function ConstructionEnquirySection({
  eyebrow = "Project Enquiry",
  title = "Plan your build with one clear conversation.",
  description = "Tell us about your site, budget, and target timeline. Our team will get back with the right construction path and cost guidance.",
  source = "Website",
  theme = "light",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  source?: string;
  theme?: Theme;
}) {
  const dark = theme === "dark";

  return (
    <section className={`${dark ? "bg-[#08111f]" : "bg-surface-container-low/40"} py-12 md:py-16 lg:py-20`}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className={`grid lg:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-10 items-start rounded-[2rem] md:rounded-[2.5rem] border overflow-hidden ${dark ? "border-white/10 bg-white/5" : "border-outline-variant/25 bg-white"}`}>
          <div className={`p-6 md:p-8 lg:p-10 ${dark ? "text-white" : "text-on-surface"}`}>
            <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.22em] ${dark ? "bg-white/10 text-white/80" : "bg-primary/8 text-primary"}`}>
              <span className="material-symbols-outlined text-sm">construction</span>
              {eyebrow}
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">{title}</h2>
            <p className={`mt-5 max-w-xl text-base md:text-lg leading-relaxed ${dark ? "text-white/75" : "text-on-surface-variant"}`}>{description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "End-to-end build planning",
                "Clear scope and package guidance",
                "Response on WhatsApp for faster follow-up",
                "Works for villas, interiors, and renovations",
              ].map((item) => (
                <div className={`rounded-2xl border px-4 py-4 text-sm md:text-base ${dark ? "border-white/10 bg-white/5 text-white/85" : "border-outline-variant/25 bg-surface-container-low/60 text-on-surface-variant"}`} key={item}>
                  <span className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-lg">done</span>{item}</span>
                </div>
              ))}
            </div>
            <div className={`mt-8 rounded-2xl border p-5 ${dark ? "border-white/10 bg-white/5" : "border-outline-variant/25 bg-surface-container-low/60"}`}>
              <p className={`text-xs uppercase tracking-[0.22em] font-black ${dark ? "text-white/55" : "text-on-surface-variant"}`}>Direct Assistance</p>
              <div className="mt-3 space-y-2">
                <a className={`block text-lg md:text-xl font-black ${dark ? "text-white" : "text-on-surface"}`} href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a>
                <a className={`block text-sm md:text-base ${dark ? "text-white/75" : "text-on-surface-variant"}`} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </div>
          </div>
          <div className="p-4 md:p-6 lg:p-8">
            <ConstructionEnquiryForm
              description="Share the essentials and we will respond with the right next step for your project."
              source={source}
              submitLabel="Send Project Details"
              theme="light"
              title="Talk to our construction team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  children,
  label,
  labelClass,
}: {
  children: React.ReactNode;
  label: string;
  labelClass: string;
}) {
  return (
    <label className="block space-y-2">
      <span className={`block text-[11px] font-black uppercase tracking-[0.16em] ${labelClass}`}>{label}</span>
      {children}
    </label>
  );
}
