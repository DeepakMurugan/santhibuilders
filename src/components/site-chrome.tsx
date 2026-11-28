import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  OFFICE_LOCATIONS,
  WHATSAPP_LINK,
} from "@/lib/company-info";

const LOGO = "/images/santhi%20logo.png";
const FLOGO = "/images/logofooter.png";

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
            className="h-15 w-auto max-w-[140px] object-contain sm:h-10 sm:max-w-[170px] md:h-15 md:max-w-[200px]"
            src={LOGO}
          />
        </Link>

        <div className="hidden xl:flex gap-6 xl:gap-8 items-center">
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
            className="xl:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-outline-variant/30 bg-surface px-margin-mobile py-4 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
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
    <footer className="construction-site-footer relative mt-16 overflow-hidden bg-[#111111] text-white text-sm md:mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,120,0,0.08),transparent_38%)]" />
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#f07800] to-transparent opacity-60" />

      <div className="relative mx-auto max-w-container-max px-margin-mobile py-10 md:px-gutter md:py-12">
        <div className="service-highlight-banner mb-8 rounded-[24px] p-5 sm:p-6 md:mb-10 md:p-8">
          <div className="service-highlight-content flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#0f1f36]/70 font-semibold mb-2">
                Start a project
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f1f36] leading-tight mb-2">
                From the first site visit to the final finish.
              </h3>
              <p className="text-[#0f1f36]/75 text-[13px] sm:text-sm max-w-xl leading-relaxed">
                Share what you are planning and explore the right services and next steps for your
                build.
              </p>
              {/* <p className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0f1f36]/65">
                <span className="material-symbols-outlined text-base text-primary">calendar_month</span>
                Established 29 July 2019
              </p> */}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/estimate-calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f1f36] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0f1f36]/90"
              >
                Get a Free Quote
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[#0f1f36]/20 px-5 py-3 text-sm font-semibold text-[#0f1f36] transition-all hover:bg-white/70"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-6 sm:gap-x-8 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 space-y-4 sm:col-span-6 lg:col-span-4">
            <img alt="Santhi Builders" className="h-auto w-auto object-cover sm:h-14" src={FLOGO} />
            <p className="max-w-md text-xs leading-relaxed text-white/70">
              Planning, design, construction and project support for residential and commercial
              spaces.
            </p>
            <address className="not-italic space-y-3 text-sm leading-relaxed text-white/70">
              {OFFICE_LOCATIONS.map((office) => (
                <p key={office.label}>{office.address.join(" ")}</p>
              ))}
            </address>
          </div>

          <div className="col-span-1 sm:col-span-3 lg:col-span-3">
            <h4 className="mb-4 w-fit border-b-2 border-[#f07800] pb-2 text-sm font-bold text-white">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm leading-relaxed text-white/70">
              {SERVICES.map((item) => (
                <li key={item.to}>
                  <Link className="inline-flex transition-colors hover:text-white" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-3 lg:col-span-2">
            <h4 className="mb-4 w-fit border-b-2 border-[#f07800] pb-2 text-sm font-bold text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm leading-relaxed text-white/70">
              {MAIN.map((item) => (
                <li key={item.to}>
                  <Link className="inline-flex transition-colors hover:text-white" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  className="transition-colors hover:text-white"
                  href={CLIENT_PORTAL_LINK}
                  rel="noreferrer"
                  target="_blank"
                >
                  Client Portal Login
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-6 lg:col-span-3">
            <h4 className="mb-4 w-fit border-b-2 border-[#f07800] pb-2 text-sm font-bold text-white">
              Get in Touch
            </h4>
            <address className="not-italic space-y-3.5 text-xs leading-relaxed text-white/75 sm:text-[13px]">
              <a
                className="flex items-center gap-3 transition-colors hover:text-white"
                href={CONTACT_PHONE_HREF}
              >
                <Phone aria-hidden="true" className="size-4 shrink-0 text-[#f07800]" />
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                className="flex items-center gap-3 break-all transition-colors hover:text-white"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <Mail aria-hidden="true" className="size-4 shrink-0 text-[#f07800]" />
                {CONTACT_EMAIL}
              </a>
              <a
                className="flex items-center gap-3 transition-colors hover:text-white"
                href={WHATSAPP_LINK}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" className="size-4 shrink-0 text-[#f07800]" />
                WhatsApp Us
              </a>
            </address>
            <div className="mt-5 flex gap-2.5">
              {[
                { label: "Call", href: CONTACT_PHONE_HREF, external: false, Icon: Phone },
                { label: "Email", href: `mailto:${CONTACT_EMAIL}`, external: false, Icon: Mail },
                { label: "WhatsApp", href: WHATSAPP_LINK, external: true, Icon: MessageCircle },
              ].map(({ label, href, external, Icon }) => (
                <a
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-white/80 transition-colors hover:border-[#f07800] hover:text-[#f07800]"
                  href={href}
                  key={label}
                  rel={external ? "noreferrer" : undefined}
                  target={external ? "_blank" : undefined}
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Santhi Builders. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex flex-wrap gap-5 text-white/45">
              <Link className="transition-colors hover:text-white" to="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="transition-colors hover:text-white" to="/terms-and-conditions">
                Terms & Conditions
              </Link>
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
