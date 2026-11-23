import { useState, type ChangeEvent, type FormEvent } from "react";
import { OFFICE_LOCATIONS, WHATSAPP_LINK } from "@/lib/company-info";

type ContactFormFields = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
};

export function ContactPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-[#08111f] text-white">
        <div aria-hidden="true" className="absolute inset-0">
          <img
            alt=""
            className="h-full w-full object-cover"
            src="/images/excellence.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,17,31,0.94)_0%,rgba(8,17,31,0.78)_48%,rgba(8,17,31,0.65)_100%)]" />
          <div className="construction-contact-hero__grid absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-container-max px-margin-mobile py-8 sm:py-12 md:px-gutter md:py-16 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div className="max-w-xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/75 sm:text-sm">
                Contact us
              </p>
              <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
                Let’s connect.
              </h1>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
          <h2 className="text-2xl font-black text-on-surface sm:text-3xl">Our branches</h2>
          <div className="mt-5 grid gap-4 sm:mt-7 md:grid-cols-2 md:gap-6">
            {OFFICE_LOCATIONS.map((office, index) => (
              <article
                className="rounded-3xl border border-outline-variant/30 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-7"
                key={office.label}
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <span aria-hidden="true" className="material-symbols-outlined">
                      location_on
                    </span>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary sm:text-xs">
                      Office {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-base font-black leading-snug text-on-surface sm:text-lg">
                      {office.address.map((line) => (
                        <span className="block" key={line}>
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low/50 py-10 sm:py-12 md:py-16">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
          <h2 className="text-2xl font-black text-on-surface sm:text-3xl">Find us</h2>
          <div className="mt-5 grid gap-5 sm:mt-7 md:grid-cols-2 md:gap-6">
            {OFFICE_LOCATIONS.map((office, index) => {
              const address = encodeURIComponent(office.address.join(" "));

              return (
                <article
                  className="overflow-hidden rounded-3xl border border-outline-variant/30 bg-white shadow-sm"
                  key={office.label}
                >
                  <div className="px-5 py-4 sm:px-6 sm:py-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary sm:text-xs">
                      Office {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1.5 text-sm font-bold leading-relaxed text-on-surface sm:text-base">
                      {office.address.map((line) => (
                        <span className="block" key={line}>
                          {/* {line} */}
                        </span>
                      ))}
                    </h3>
                  </div>
                  <iframe
                    allowFullScreen
                    className="aspect-[4/3] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${address}&output=embed`}
                    title={`${office.address.join(" ")} map`}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  const [fields, setFields] = useState<ContactFormFields>({
    name: "",
    phone: "",
    email: "",
    interest: "General enquiry",
    message: "",
  });

  const updateField =
    (field: keyof ContactFormFields) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFields((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hello Santhi Builders, I would like to get in touch.",
      `Name: ${fields.name}`,
      `Phone: ${fields.phone}`,
      `Email: ${fields.email || "-"}`,
      `Enquiry type: ${fields.interest}`,
      `Message: ${fields.message}`,
    ].join("\n");

    window.open(
      `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const fieldClass =
    "mt-1.5 box-border min-h-11 w-full min-w-0 rounded-xl border border-outline-variant/40 bg-surface-container-low px-3 py-2 text-sm text-on-surface outline-none transition placeholder:text-on-surface-variant/60 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 focus-visible:outline-none sm:text-base";
  const labelClass = "block min-w-0 text-xs font-bold text-on-surface-variant sm:text-sm";

  return (
    <div className="rounded-3xl border border-white/60 bg-white p-4 text-on-surface shadow-2xl sm:p-5 md:p-6">
      <div className="mb-4 sm:mb-5">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary sm:text-xs">
          Contact form
        </p>
        <h2 className="mt-2 text-2xl font-black leading-tight sm:text-3xl">
          Send us a message
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
          Share a few details and we’ll be in touch.
        </p>
      </div>
      <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
        <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-x-5">
          <label className={labelClass}>
            Full name <span className="text-primary">*</span>
            <input
              autoComplete="name"
              className={fieldClass}
              onChange={updateField("name")}
              placeholder="Your name"
              minLength={2}
              required
              type="text"
              value={fields.name}
            />
          </label>
          <label className={labelClass}>
            Phone number <span className="text-primary">*</span>
            <input
              autoComplete="tel"
              className={fieldClass}
              inputMode="tel"
              onChange={updateField("phone")}
              placeholder="+91"
              pattern="(?=.*[0-9])[0-9+() -]{7,20}"
              required
              type="tel"
              title="Enter a valid phone number"
              value={fields.phone}
            />
          </label>
          <label className={labelClass}>
            Email address
            <input
              autoComplete="email"
              className={fieldClass}
              onChange={updateField("email")}
              placeholder="you@example.com"
              type="email"
              value={fields.email}
            />
          </label>
          <label className={labelClass}>
            Enquiry type
            <select
              className={fieldClass}
              onChange={updateField("interest")}
              value={fields.interest}
            >
              {[
                "General enquiry",
                "New construction",
                "Interior design",
                "Renovation",
                "Other",
              ].map((interest) => (
                <option key={interest} value={interest}>
                  {interest}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className={labelClass}>
          How can we help? <span className="text-primary">*</span>
          <textarea
            className={`${fieldClass} min-h-20 resize-y`}
            onChange={updateField("message")}
            placeholder="Tell us briefly about your project or question"
            minLength={5}
            required
            rows={3}
            value={fields.message}
          />
        </label>
        <div className="flex sm:justify-end">
          <button
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto sm:px-7"
            type="submit"
          >
            Send message
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
