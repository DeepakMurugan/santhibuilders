import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/components/site-chrome";
import { useReveal } from "@/hooks/use-reveal";

const COPY: Record<string, string> = {
  "/services/residential": "Custom villas, apartments and joint-venture developments delivered end to end.",
  "/services/design-drawings": "Concept design, structural drawings, MEP layouts and approval documentation.",
  "/services/interior-design": "Bespoke interiors, turnkey execution and premium finishes.",
  "/services/project-management": "Project coordination, scheduling and progress communication.",
  "/services/quantity-surveying": "Accurate BOQs, tender analysis and disciplined cost control.",
  "/services/quality-control": "Material testing, stage inspections and documented assurance.",
  "/services/site-supervision": "Daily supervision, labour coordination and progress reporting.",
  "/services/renovation": "Structural retrofits, restoration and full home renovation.",
};

export function ServicesIndexPage() {
  useReveal();

  return (
    <main>
      <ServicesHeroSection />
      <section className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-gutter md:py-20">
        <ServicesGridSection />
      </section>
    </main>
  );
}

function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] text-white">
      <div className="absolute inset-0">
        <img alt="" aria-hidden="true" className="h-full w-full object-cover" src="/images/highrise.jpg" />
        <div className="construction-services-index-overlay absolute inset-0" />
      </div>
      <div className="relative mx-auto grid max-w-container-max items-center gap-10 px-margin-mobile py-16 md:px-gutter md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 md:text-xs">
            <span className="material-symbols-outlined text-sm text-secondary-container">architecture</span>
            Planning to handover
          </p>
          <h1 className="mt-6 text-4xl font-black leading-[1.04] sm:text-5xl md:text-6xl">Construction support, from the first plan to the final finish.</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">Explore planning, design, construction, interiors, site supervision and cost support. Find the services that fit your project scope.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["Clear scope", "Practical planning", "Quality-focused work"].map((item) => (
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90" key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="rounded-2xl border border-white/15 bg-[#0b1726]/85 p-4 backdrop-blur-md sm:p-5">
            <p className="text-lg font-extrabold text-secondary-container sm:text-2xl">29 July 2019</p>
            <p className="mt-2 text-xs text-white/70 sm:text-sm">Santhi Builders established</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-[#0b1726]/85 p-4 backdrop-blur-md sm:p-5">
            <p className="text-3xl font-extrabold text-white sm:text-4xl">08</p>
            <p className="mt-2 text-xs text-white/70 sm:text-sm">Service areas to explore</p>
          </div>
          <Link className="col-span-2 inline-flex items-center justify-between gap-4 rounded-2xl bg-secondary-container px-5 py-4 font-extrabold text-on-secondary-container transition hover:-translate-y-0.5 hover:shadow-xl sm:px-6 sm:py-5" to="/contact">
            Talk through your project
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesGridSection() {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((s) => (
        <Link className="reveal group rounded-xl border border-outline-variant/40 bg-surface-container-lowest p-7 hover:border-primary hover:shadow-soft transition-all" key={s.to} to={s.to}>
          <span className="material-symbols-outlined text-[32px] text-primary">{s.icon}</span>
          <h2 className="mt-5 text-headline-md font-headline-md">{s.label}</h2>
          <p className="mt-3 text-body-md text-on-surface-variant">{COPY[s.to]}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-body-md font-bold text-primary">Explore<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span></span>
        </Link>
      ))}
    </div>
  );
}