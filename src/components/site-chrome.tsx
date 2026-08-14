import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  OFFICE_LOCATIONS,
  WHATSAPP_LINK,
} from "@/lib/company-info";

const LOGO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBtqg4DUrvXJT7ARubXR29Agkw4DMvHHoktJf5qQHOXxfdpZefvnAzq1JPrT1Qh6UvZz55r_jNmDWxF9MLaLp9NteZROUYUPin66OU4th0Brm3ZjpO1ZxPZPBFFfMpXDmqulj1nbqVY9ViYqouft9YX4EDAqSO4FFTkk4gtp3M6VDntOOMbUBPldXW6yddZ4KBoVCcN99w6t2ZfFhygk36qYYLNdputNeeysVymmLSoA5g8-RO8G-ruLCAa0ANMTeS3sI5X5jg37UMC";

const CLIENT_PORTAL_LINK = "https://portal.santhibuilders.com/";

export const SERVICES = [
  { to: "/services/residential", label: "Residential Construction", icon: "home_work" },
  { to: "/services/design-drawings", label: "Design & Drawings", icon: "architecture" },
  { to: "/services/interior-design", label: "Interior Design", icon: "chair" },
  { to: "/services/project-management", label: "Project Management", icon: "engineering" },
  { to: "/services/quantity-surveying", label: "Quantity Surveying", icon: "calculate" },
  { to: "/services/quality-control", label: "Quality Control", icon: "verified" },
  { to: "/services/site-supervision", label: "Site Supervision", icon: "visibility" },
  { to: "/services/renovation", label: "Renovation & Restoration", icon: "handyman" },
] as const;

const MAIN = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact-us", label: "Contact us" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState(false);

  return (
    <nav className="bg-surface/95 backdrop-blur-lg sticky top-0 z-50 border-b border-outline-variant/30">
      <div className="flex items-center justify-between gap-3 sm:gap-4 w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-2.5 sm:py-3">
        <Link to="/" className="min-w-0 shrink-0" onClick={() => setOpen(false)}>
          <img
            alt="Santhi Builders Logo"
            className="h-8 sm:h-9 md:h-11 w-auto object-contain"
            src={LOGO}
          />
        </Link>

        <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
          {MAIN.map((item) => (
            <div key={item.to} className="relative">
              <Link
                to={item.to}
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-semibold text-body-md"
                activeProps={{ className: "text-primary font-extrabold text-body-md" }}
                activeOptions={{ exact: item.to === "/" }}
                onMouseEnter={() => setServices(item.to === "/services")}
              >
                {item.label}
              </Link>
              {item.to === "/services" && services && (
                <div
                  className="absolute left-0 top-full pt-4"
                  onMouseLeave={() => setServices(false)}
                >
                  <div className="w-72 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-xl p-2">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        onClick={() => setServices(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-body-md font-medium text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            className="hidden md:inline-flex items-center justify-center rounded-lg border border-outline-variant/40 bg-white px-3 md:px-4 py-2.5 font-semibold text-on-surface transition-all hover:border-primary hover:text-primary text-xs md:text-sm"
            href={CLIENT_PORTAL_LINK}
            rel="noreferrer"
            target="_blank"
          >
            Log In
          </a>
          <Link
            to="/estimate-calculator"
            className="hidden sm:inline-flex bg-secondary-container text-on-secondary px-4 md:px-5 py-2.5 rounded-lg font-semibold hover:bg-secondary hover:shadow-lg transition-all text-xs md:text-sm"
          >
            Get a Free Quote
          </Link>
          <button
            aria-label="Toggle navigation"
            className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface px-margin-mobile py-4 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
          {MAIN.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-body-lg font-semibold text-on-surface-variant"
              activeProps={{ className: "block py-2.5 text-body-lg font-extrabold text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-outline-variant/30">
            {SERVICES.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-2 text-body-md font-medium text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-[20px]">{s.icon}</span>
                {s.label}
              </Link>
            ))}
          </div>
          <a
            className="mt-3 block text-center border border-outline-variant/40 bg-white text-on-surface px-5 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all"
            href={CLIENT_PORTAL_LINK}
            rel="noreferrer"
            target="_blank"
          >
            Log In to Portal
          </a>
          <Link
            to="/estimate-calculator"
            className="mt-3 block text-center bg-secondary-container text-on-secondary px-5 py-3 rounded-lg font-semibold"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-16 md:mt-24 overflow-hidden bg-[#08111f] text-white text-[15px] md:text-[16px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,120,189,0.24),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(254,147,44,0.16),transparent_34%)]" />
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#7dd3fc] to-transparent opacity-60" />

      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-gutter py-14 md:py-16">
        <div className="service-highlight-banner rounded-[28px] p-6 md:p-10 mb-10 md:mb-14">
          <div className="service-highlight-content flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0f1f36]/70 font-semibold mb-3">
                Start a project
              </p>
              <h3 className="text-3xl md:text-5xl font-extrabold text-[#0f1f36] leading-tight mb-3">
                Build with clarity, precision, and a cleaner process.
              </h3>
              <p className="text-[#0f1f36]/75 text-[15px] md:text-[16px] max-w-xl leading-relaxed">
                Share your project vision and we will help shape it into a practical, modern space.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/estimate-calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f1f36] px-6 py-3.5 font-semibold text-white transition-all hover:bg-[#0f1f36]/90"
              >
                Get a Free Quote
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[#0f1f36]/20 px-6 py-3.5 font-semibold text-[#0f1f36] transition-all hover:bg-white/70"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4 space-y-6">
            <img alt="Santhi Builders" className="h-12 w-auto object-contain" src={LOGO} />
            <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed max-w-md">
              Building spaces that reflect your vision, lifestyle, and aspirations. From concept
              to completion, we deliver quality construction with professional expertise and
              attention to detail.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "share", label: "Share" },
                { icon: "public", label: "Website" },
                { icon: "call", label: "Call" },
                { icon: "chat", label: "WhatsApp" },
              ].map((item) => (
                <a
                  key={item.icon}
                  aria-label={item.label}
                  href={item.icon === "call" ? CONTACT_PHONE_HREF : WHATSAPP_LINK}
                  target={item.icon === "call" ? undefined : "_blank"}
                  rel={item.icon === "call" ? undefined : "noreferrer"}
                  className="h-11 w-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 transition-all duration-300 hover:bg-white hover:text-[#0f1f36] hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8 lg:grid-cols-3">
            <div>
              <h4 className="mb-5 text-[15px] md:text-[16px] font-semibold uppercase tracking-[0.16em] text-[#7dd3fc]">
                Company
              </h4>
              <ul className="space-y-3 text-white/70 text-[15px] md:text-[16px]">
                {MAIN.map((item) => (
                  <li key={item.to}>
                    <Link className="transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex" to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link className="transition-colors hover:text-white" to="/projects/azure-horizon-villa">
                    Azure Horizon Villa
                  </Link>
                </li>
                <li>
                  <a className="transition-colors hover:text-white" href={CLIENT_PORTAL_LINK} rel="noreferrer" target="_blank">
                    Client Portal Login
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[15px] md:text-[16px] font-semibold uppercase tracking-[0.16em] text-[#7dd3fc]">
                Services
              </h4>
              <ul className="space-y-3 text-white/70 text-[15px] md:text-[16px]">
                {SERVICES.map((item) => (
                  <li key={item.to}>
                    <Link className="transition-all duration-300 hover:text-white hover:translate-x-1 inline-flex" to={item.to}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-[15px] md:text-[16px] font-semibold uppercase tracking-[0.16em] text-[#7dd3fc]">
                Contact
              </h4>
              <address className="not-italic space-y-4 text-white/70 text-[13px] sm:text-[14px] md:text-[15px]">
                <div>
                  <p className="text-white font-semibold text-[13px] sm:text-[14px] md:text-[15px]">Office Addresses</p>
                </div>
                <div className="space-y-3 leading-relaxed">
                  <div>
                    <p className="text-white font-semibold text-[13px] sm:text-[14px] md:text-[15px]">Branch 1</p>
                    {OFFICE_LOCATIONS[0].address.map((line) => (
                      <p className="text-[13px] md:text-[14px]" key={line}>{line}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[13px] sm:text-[14px] md:text-[15px]">Branch 2</p>
                    {OFFICE_LOCATIONS[1].address.map((line) => (
                      <p className="text-[13px] md:text-[14px]" key={line}>{line}</p>
                    ))}
                  </div>
                </div>
                <a className="block text-white font-semibold text-[13px] sm:text-[14px] md:text-[15px] hover:text-[#7dd3fc]" href={CONTACT_PHONE_HREF}>
                  {CONTACT_PHONE_DISPLAY}
                </a>
                <a className="block text-[13px] sm:text-[14px] md:text-[15px] hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                <a className="inline-flex items-center gap-2 text-[#7dd3fc] text-[13px] sm:text-[14px] md:text-[15px] hover:text-white" href={WHATSAPP_LINK} rel="noreferrer" target="_blank">
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  WhatsApp Us
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13px] md:text-[14px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Santhi Builders. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex flex-wrap gap-6 uppercase tracking-[0.14em] text-white/45 text-[13px] md:text-[14px]">
              <Link className="transition-colors hover:text-white" to="/privacy-policy">Privacy Policy</Link>
              <Link className="transition-colors hover:text-white" to="/terms-and-conditions">Terms & Conditions</Link>
            </div>
            <a
              className="inline-flex items-center gap-2 font-semibold text-[#7dd3fc] transition-all duration-300 hover:text-white hover:translate-x-1"
              href="https://dtechgrow.com/"
              rel="noreferrer"
              target="_blank"
            >
              Powered by DTech Grow
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
