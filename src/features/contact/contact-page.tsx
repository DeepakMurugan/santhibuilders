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
      <section className="relative overflow-hidden bg-[#08111f] text-white">
        <div className="absolute inset-0">
          <img alt="Santhi Builders contact banner" className="h-full w-full object-cover" src="/images/excellence.jpg" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,17,31,0.96)_0%,rgba(8,17,31,0.88)_38%,rgba(8,17,31,0.62)_68%,rgba(8,17,31,0.84)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,120,189,0.3),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(254,147,44,0.22),transparent_28%)]" />
        </div>
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-gutter py-14 md:py-18 lg:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
                <span className="material-symbols-outlined text-sm">call</span>
                Contact Santhi Builders
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02]">Let’s turn your site into a clear construction plan.</h1>
              <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/75 leading-relaxed">Speak with our team about planning, design, construction, interiors, or renovation. We keep the next step simple, practical, and transparent.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-2xl">
                {[
                  { value: "1 Day", label: "Average response" },
                  { value: "8+", label: "Core services" },
                  { value: "25+", label: "Years of delivery" },
                ].map((item) => (
                  <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md" key={item.label}>
                    <p className="text-2xl md:text-3xl font-black text-white">{item.value}</p>
                    <p className="mt-1 text-sm md:text-base text-white/65">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 md:p-6 backdrop-blur-xl shadow-2xl">
              <div className="rounded-[1.5rem] overflow-hidden border border-white/10 bg-[#091423]">
                <img alt="Modern Santhi Builders project facade" className="h-52 md:h-64 w-full object-cover" src="/images/excellence.jpg" />
                <div className="grid gap-4 p-5 md:p-6">
                  <div>
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-secondary-container">Direct project assistance</p>
                    <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-black leading-tight">Clear answers for cost, planning, and execution.</h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    <InfoCard icon={Phone} title="Call us" value={CONTACT_PHONE_DISPLAY} href={CONTACT_PHONE_HREF} />
                    <InfoCard icon={Mail} title="Email us" value={CONTACT_EMAIL} href={CONTACT_EMAIL_HREF} />
                    <InfoCard icon={MessageCircle} title="WhatsApp" value="Start a quick project discussion" href={WHATSAPP_LINK} />
                  </div>
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
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary-container/12 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Response Promise</span>
            <h2 className="mt-5 text-3xl md:text-4xl font-black text-on-surface">Clear communication from the first message.</h2>
            <div className="mt-8 grid gap-4">
              {[
                "General enquiry replies within one business day",
                "Project feasibility guidance for villas, interiors, and renovations",
                "Estimator support and scope clarification before you commit",
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
    <a aria-label={title} className="flex items-center justify-center rounded-4xl border border-white/10 bg-white/6 px-4 py-4 transition-all hover:-translate-y-1 hover:bg-white/12" href={href} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined} title={value}>
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-secondary-container">
        <Icon className="h-4 w-4 md:h-4.5 md:w-4.5" strokeWidth={2.2} />
      </span>
    </a>
  );
}
