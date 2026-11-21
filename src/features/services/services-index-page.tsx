import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/components/site-chrome";
import { useReveal } from "@/hooks/use-reveal";

const COPY: Record<string, string> = {
  "/services/residential":
    "Custom villas, apartments and joint-venture developments delivered end to end.",
  "/services/design-drawings":
    "Concept design, structural drawings, MEP layouts and approval documentation.",
  "/services/interior-design": "Bespoke interiors, turnkey execution and premium finishes.",
  "/services/project-management": "Project coordination, scheduling and progress communication.",
  "/services/quantity-surveying": "Accurate BOQs, tender analysis and disciplined cost control.",
  "/services/quality-control": "Material testing, stage inspections and documented assurance.",
  "/services/site-supervision": "Daily supervision, labour coordination and progress reporting.",
  "/services/renovation": "Structural retrofits, restoration and full home renovation.",
};

const BUILD_STAGES = [
  {
    name: "Plan",
    description: "Design, drawings, costing and approvals.",
  },
  {
    name: "Build",
    description: "Construction, coordination and on-site supervision.",
  },
  {
    name: "Complete",
    description: "Interiors, quality checks and renovations.",
  },
];

export function ServicesIndexPage() {
  useReveal();

  return (
    <main>
      <ServicesHeroSection />
      <section
        className="mx-auto max-w-container-max px-margin-mobile py-8 sm:py-10 md:px-gutter md:py-14 lg:py-16"
        id="service-list"
      >
        <ServicesGridSection />
      </section>
    </main>
  );
}

function ServicesHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#08111f] text-white">
      <div className="absolute inset-0">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          src="/images/highrise.jpg"
        />
        <div className="construction-services-index-overlay absolute inset-0" />
      </div>
      <div className="relative mx-auto grid max-w-container-max items-center gap-8 px-margin-mobile py-12 sm:py-16 md:px-gutter md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/85 backdrop-blur-md sm:text-xs">
            <span className="material-symbols-outlined text-sm text-secondary-container">
              construction
            </span>
            Our services
          </p>
          <h1 className="mt-5 text-4xl font-black leading-[1.04] sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl">
            Plan, build, and finish with one trusted team.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:mt-6">
            Explore construction, design, interiors, project management and more. Find the expertise
            that fits your project, from first idea to final finish.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-secondary-container px-6 py-3 text-sm font-bold text-on-secondary-container transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
              href="#service-list"
            >
              Explore our services
              <span aria-hidden="true" className="material-symbols-outlined text-lg">
                arrow_downward
              </span>
            </a>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
              to="/contact-us"
            >
              Talk through your project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesGridSection() {
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary sm:text-xs">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-on-surface sm:text-4xl md:text-5xl">
            The expertise your project needs.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-on-surface-variant sm:text-lg">
            Choose a service or bring together the support you need to move your build forward.
          </p>
        </div>
        <p className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container-low/70 px-4 py-2 text-sm font-semibold text-on-surface-variant">
          <span className="text-lg font-black text-primary">
            {String(SERVICES.length).padStart(2, "0")}
          </span>
          services to explore
        </p>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-6">
        {SERVICES.map((service, index) => (
          <Link
            className="reveal group flex h-full flex-col rounded-[1.75rem] border border-outline-variant/30 bg-surface-container-lowest p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-7"
            key={service.to}
            to={service.to}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <span aria-hidden="true" className="material-symbols-outlined text-[28px]">
                  {service.icon}
                </span>
              </span>
              <span className="text-xs font-bold tracking-[0.12em] text-on-surface-variant/70">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-black leading-snug text-on-surface sm:text-2xl">
              {service.label}
            </h3>
            <p className="mt-3 flex-grow text-sm leading-relaxed text-on-surface-variant sm:text-base">
              {COPY[service.to]}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
              Explore service
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1"
              >
                arrow_forward
              </span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
