import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/components/site-chrome";
import { useReveal } from "@/hooks/use-reveal";

const COPY: Record<string, string> = {
  "/services/residential": "Custom villas, apartments and joint-venture developments delivered end to end.",
  "/services/design-drawings": "Concept design, structural drawings, MEP layouts and approval documentation.",
  "/services/interior-design": "Bespoke interiors, turnkey execution and premium finishes.",
  "/services/project-management": "Cost, schedule and quality governed by certified project managers.",
  "/services/quantity-surveying": "Accurate BOQs, tender analysis and disciplined cost control.",
  "/services/quality-control": "Material testing, stage inspections and documented assurance.",
  "/services/site-supervision": "Daily supervision, labour coordination and progress reporting.",
  "/services/renovation": "Structural retrofits, restoration and full home renovation.",
};

export function ServicesIndexPage() {
  useReveal();

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-16 md:py-24">
      <ServicesHeroSection />
      <ServicesGridSection />
    </main>
  );
}

function ServicesHeroSection() {
  return (
    <>
      <p className="text-label-sm uppercase tracking-[0.2em] text-primary font-black">What we do</p>
      <h1 className="mt-4 text-headline-lg-mobile md:text-display-lg font-display-lg">End-to-end construction services</h1>
      <p className="mt-5 max-w-2xl text-body-lg text-on-surface-variant">From the first sketch to the final handover, every discipline you need to build in Chennai sits under one roof.</p>

      <section className="service-highlight-banner mt-10 md:mt-12 rounded-3xl p-6 sm:p-8 md:p-10">
        <div className="service-highlight-content grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div>
            <p className="inline-flex items-center gap-2 bg-white/80 text-primary px-4 py-1.5 rounded-full text-label-sm uppercase tracking-[0.18em] font-semibold"><span className="material-symbols-outlined text-[16px]">workspace_premium</span>Single Team. Total Delivery.</p>
            <h2 className="mt-5 text-headline-lg-mobile md:text-headline-lg text-on-surface">One coordinated service stack for faster delivery and cleaner execution.</h2>
            <p className="mt-4 max-w-2xl text-on-surface-variant">Planning, approvals, execution, interiors, supervision, and cost control flow in one aligned pipeline so your project avoids coordination delays and budget drift.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="bg-white/85 border border-primary/20 text-on-surface px-4 py-2 rounded-full text-body-md font-semibold">Transparent costing</span>
              <span className="bg-white/85 border border-primary/20 text-on-surface px-4 py-2 rounded-full text-body-md font-semibold">Timeline accountability</span>
              <span className="bg-white/85 border border-primary/20 text-on-surface px-4 py-2 rounded-full text-body-md font-semibold">Quality checkpoints</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/90 border border-primary/20 p-5"><p className="text-3xl md:text-4xl font-extrabold text-primary">25+</p><p className="text-body-md text-on-surface-variant mt-2">Years in Chennai execution</p></div>
            <div className="rounded-2xl bg-white/90 border border-primary/20 p-5"><p className="text-3xl md:text-4xl font-extrabold text-primary">8</p><p className="text-body-md text-on-surface-variant mt-2">Integrated service verticals</p></div>
            <div className="col-span-2 rounded-2xl bg-[#131b2e] text-white p-5 border border-white/10"><p className="text-body-md text-white/80">Need a full-scope project plan?</p><p className="mt-1 text-xl font-extrabold">Get a staged delivery roadmap in one call.</p></div>
          </div>
        </div>
      </section>
    </>
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