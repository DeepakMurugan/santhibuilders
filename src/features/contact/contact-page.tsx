import type { LucideIcon } from "lucide-react";
import { ArrowDown, Mail, MessageCircle, Phone } from "lucide-react";
import { ConstructionEnquirySection } from "@/components/construction-enquiry-form";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  OFFICE_LOCATIONS,
  WHATSAPP_LINK,
} from "@/lib/company-info";

export function ContactPage() {
  return (
    <main>
      <section className="construction-contact-hero relative overflow-hidden bg-[#08111f] text-white">
        <div className="absolute inset-0">
          <img
            alt="Santhi Builders contact banner"
            className="h-full w-full object-cover"
            src="/images/excellence.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,17,31,0.96)_0%,rgba(8,17,31,0.88)_38%,rgba(8,17,31,0.62)_68%,rgba(8,17,31,0.84)_100%)]" />
          <div className="construction-contact-hero__grid absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-container-max px-margin-mobile py-10 sm:py-14 md:px-gutter md:py-16 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/80 backdrop-blur-md md:text-xs">
                <span className="material-symbols-outlined text-sm text-secondary-container">
                  waving_hand
                </span>
                Get in touch
              </span>
              <h1 className="mt-6 text-4xl font-black leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
                Let’s build something great together.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
                Have a project in mind? Talk to our team about your plans, ask a question, or find
                the right next step.
              </p>
              <a
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
                href="#contact-form"
              >
                Tell us about your project
                <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/60 bg-white p-5 text-on-surface shadow-2xl sm:p-7 md:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary md:text-xs">
                Contact Santhi Builders
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
                We’d love to hear from you.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-on-surface-variant sm:text-base">
                Choose the easiest way to reach our team.
              </p>
              <div className="mt-5 grid gap-3">
                <InfoCard
                  icon={Phone}
                  title="Call us"
                  value={CONTACT_PHONE_DISPLAY}
                  href={CONTACT_PHONE_HREF}
                />
                <InfoCard
                  icon={Mail}
                  title="Email us"
                  value={CONTACT_EMAIL}
                  href={CONTACT_EMAIL_HREF}
                />
                <InfoCard
                  icon={MessageCircle}
                  title="WhatsApp"
                  value="Chat with our team"
                  href={WHATSAPP_LINK}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10 lg:py-14">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="mb-7 max-w-2xl md:mb-9">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary sm:text-xs">
              Find us
            </span>
            <h2 className="mt-2 text-3xl font-black text-on-surface sm:text-4xl">
              Visit our offices
            </h2>
            <p className="mt-3 text-base leading-relaxed text-on-surface-variant sm:text-lg">
              We’re ready to talk through your plans in person.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {OFFICE_LOCATIONS.map((office) => (
              <div
                className="rounded-[2rem] border border-outline-variant/25 bg-surface-container-low/50 p-6 shadow-sm sm:p-7"
                key={office.label}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                  {office.label}
                </span>
                <div className="mt-5 space-y-2 text-base leading-relaxed text-on-surface-variant sm:text-lg">
                  {office.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="[&>section]:py-8 md:[&>section]:py-10 lg:[&>section]:py-14" id="contact-form">
        <ConstructionEnquirySection
          description="Share a few details about your project and our team will be in touch."
          eyebrow="Get in touch"
          source="Contact Page"
          title="Tell us about your project."
        />
      </div>
    </main>
  );
}

function InfoCard({
  href,
  icon: Icon,
  title,
  value,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  value: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      aria-label={`${title}: ${value}`}
      className="flex min-w-0 items-center gap-3 rounded-2xl border border-outline-variant/25 bg-surface-container-low/60 px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:gap-4 sm:px-5"
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      title={value}
    >
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" strokeWidth={2.2} />
      </span>
      <span className="min-w-0 text-left">
        <span className="block text-xs font-bold uppercase tracking-[0.12em] text-on-surface-variant">
          {title}
        </span>
        <span className="mt-0.5 block break-words text-sm font-semibold text-on-surface sm:text-base">
          {value}
        </span>
      </span>
    </a>
  );
}
