import type { LucideIcon } from "lucide-react";
import { Mail, MessageCircle, Phone } from "lucide-react";
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
          <img alt="Santhi Builders contact banner" className="h-full w-full object-cover" src="/images/excellence.jpg" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,17,31,0.96)_0%,rgba(8,17,31,0.88)_38%,rgba(8,17,31,0.62)_68%,rgba(8,17,31,0.84)_100%)]" />
          <div className="construction-contact-hero__grid absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-container-max px-margin-mobile py-14 md:px-gutter md:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/80 backdrop-blur-md md:text-xs">
                <span className="material-symbols-outlined text-sm text-secondary-container">handshake</span>
                Let’s talk about your project
              </span>
              <h1 className="mt-6 text-4xl font-black leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">A better build starts with a good conversation.</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">Tell us what you are planning. We can help you explore the services, scope and next steps for your construction project.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-2xl">
                {[
                  { value: "29 Jul 2019", label: "Established" },
                  { value: "08", label: "Service areas" },
                  { value: "Plan to build", label: "Project support" },
                ].map((item) => (
                  <div className="rounded-2xl border border-white/10 bg-white/8 px-3 py-4 backdrop-blur-md sm:px-4" key={item.label}>
                    <p className="text-xl font-black text-white md:text-2xl">{item.value}</p>
                    <p className="mt-1 text-xs text-white/65 sm:text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b1726]/90 shadow-2xl backdrop-blur-xl">
              <img alt="Contemporary residential construction project" className="h-44 w-full object-cover sm:h-56" src="/images/excellence.jpg" />
              <div className="p-5 sm:p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-secondary-container md:text-xs">Contact Santhi Builders</p>
                <h2 className="mt-2 text-xl font-black leading-tight sm:text-2xl">Choose how you’d like to connect.</h2>
                <div className="mt-5 grid gap-3">
                    <InfoCard icon={Phone} title="Call us" value={CONTACT_PHONE_DISPLAY} href={CONTACT_PHONE_HREF} />
                    <InfoCard icon={Mail} title="Email us" value={CONTACT_EMAIL} href={CONTACT_EMAIL_HREF} />
                    <InfoCard icon={MessageCircle} title="WhatsApp" value="Start a quick project discussion" href={WHATSAPP_LINK} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10">
          <div className="grid gap-5 md:grid-cols-2">
            {OFFICE_LOCATIONS.map((office) => (
              <div className="rounded-[2rem] border border-outline-variant/25 bg-surface-container-low/50 p-6 md:p-7 shadow-sm" key={office.label}>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-primary">{office.label}</span>
                <h2 className="mt-5 text-2xl md:text-3xl font-black text-on-surface">Visit our office</h2>
                <div className="mt-5 space-y-2 text-base md:text-lg text-on-surface-variant">
                  {office.address.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-outline-variant/25 bg-surface-container-low/30 p-6 md:p-8 lg:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary-container/12 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Project conversation</span>
            <h2 className="mt-5 text-3xl font-black text-on-surface md:text-4xl">A useful first discussion starts with the right details.</h2>
            <div className="mt-8 grid gap-4">
              {[
                "Your site location and project type",
                "The spaces, scope or services you have in mind",
                "Your plans, priorities and preferred next steps",
              ].map((item) => (
                <div className="rounded-2xl border border-outline-variant/20 bg-white px-5 py-4 text-on-surface-variant" key={item}>
                  <span className="flex items-start gap-3"><span className="material-symbols-outlined text-primary text-lg">done</span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConstructionEnquirySection
        description="Use the same project intake form we use across the website so your requirement reaches the right team with the right context."
        eyebrow="Contact Form"
        source="Contact Page"
        title="Send your project brief in one structured format."
      />
    </main>
  );
}

function InfoCard({ href, icon: Icon, title, value }: { href: string; icon: LucideIcon; title: string; value: string }) {
  const external = href.startsWith("http");

  return (
    <a aria-label={`${title}: ${value}`} className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 sm:gap-4 sm:px-5" href={href} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined} title={value}>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary-container">
        <Icon className="h-4 w-4" strokeWidth={2.2} />
      </span>
      <span className="min-w-0 text-left">
        <span className="block text-xs font-bold uppercase tracking-[0.12em] text-white/60">{title}</span>
        <span className="mt-0.5 block truncate text-sm font-semibold text-white sm:text-base">{value}</span>
      </span>
    </a>
  );
}
