import { Link, createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

const specs = [
  { label: "Sq. Ft", value: "12,400" },
  { label: "Year", value: "2026" },
  { label: "Category", value: "Residential" },
  { label: "Rating", value: "LEED Gold", accent: true },
] as const;

const designPillars = [
  {
    icon: "vibration",
    title: "Seismic Resilience",
    detail:
      "Zone III ready structural system with high-ductile reinforcement and deep pile support.",
  },
  {
    icon: "hub",
    title: "Smart Automation",
    detail:
      "Integrated controls for lighting, climate, and security with app-based monitoring.",
  },
  {
    icon: "eco",
    title: "Net-Zero Readiness",
    detail:
      "Solar-ready roof, water reuse system, and low-E glazing for reduced operational load.",
  },
] as const;

const timeline = [
  {
    phase: "Month 0-2",
    title: "Concept Visualization",
    text: "BIM simulation and daylight mapping validated the overall architectural form.",
  },
  {
    phase: "Month 3-10",
    title: "Civil Framework",
    text: "Primary structure, retaining systems, and core concrete works completed in sequence.",
  },
  {
    phase: "Month 11-16",
    title: "Technical Fit-out",
    text: "MEP integration, automation backbone, and premium interior envelope execution.",
  },
  {
    phase: "Month 17-18",
    title: "Final Handover",
    text: "Detailed quality checks, performance validation, and complete client walkthrough.",
    active: true,
  },
] as const;

const moreProjects = [
  {
    title: "The Zenith Atrium",
    location: "Bangalore",
    image: "/images/highrise.jpg",
  },
  {
    title: "Verdant Monolith",
    location: "Ooty",
    image: "/images/excellence.jpg",
  },
  {
    title: "Celestial Towers",
    location: "Kochi",
    image: "/images/steel-detail.jpg",
  },
] as const;

export const Route = createFileRoute("/projects/azure-horizon-villa")({
  head: () => ({
    meta: [
      { title: "Azure Horizon Villa | Santhi Builders" },
      {
        name: "description",
        content:
          "Explore the Azure Horizon Villa project in detail, from engineering methodology to material execution and final handover.",
      },
      { property: "og:title", content: "Azure Horizon Villa | Santhi Builders" },
      {
        property: "og:description",
        content:
          "Explore the Azure Horizon Villa project in detail, from engineering methodology to material execution and final handover.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AzureHorizonVilla,
});

function AzureHorizonVilla() {
  useReveal();

  return (
    <main>
      <section className="relative min-h-[560px] md:min-h-[720px] flex items-end overflow-hidden">
        <img
          alt="Azure Horizon Villa"
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/excellence.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/95 via-[#050a14]/55 to-transparent" />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-12 md:pb-20 text-white reveal active">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/80 mb-5 font-semibold">
            Architecture & Civil Engineering
          </p>
          <h1 className="font-display-lg text-[40px] sm:text-[56px] md:text-[74px] leading-[1.06] mb-8 md:mb-10">
            Azure Horizon Villa
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 border-t border-white/25 pt-5 md:pt-8">
            {specs.map((item) => (
              <div key={item.label}>
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 mb-2">{item.label}</p>
                <p className={item.accent ? "text-[#f8c15b] text-2xl md:text-3xl font-extrabold" : "text-white text-2xl md:text-3xl font-extrabold"}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-12 gap-10 md:gap-14">
          <div className="lg:col-span-6 reveal">
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-3">The Vision</p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Balancing transparency with the solidity of concrete.
            </h2>
            <div className="space-y-4 text-on-surface-variant text-[16px] md:text-[20px] leading-relaxed">
              <p>
                The home was envisioned as a calm coastal retreat that remains visually open while
                preserving privacy from the busy urban frontage.
              </p>
              <p>
                Every volume, frame, and slab was aligned to maximize daylight, improve air flow,
                and open selected views toward the landscape horizon.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 reveal space-y-5">
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">Engineering Methodology</p>
            <h3 className="text-2xl md:text-4xl font-extrabold">Structure-First Philosophy</h3>
            <p className="text-on-surface-variant text-[16px] md:text-[20px] leading-relaxed">
              The project strategy prioritized structural clarity first, enabling long open spans,
              cleaner interiors, and an elevated exterior language with minimal visual clutter.
            </p>

            <div className="grid gap-4">
              <div className="rounded-lg border border-outline-variant/50 p-4 md:p-5 bg-surface-container-low flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Structural Fluidity</h4>
                  <p className="text-on-surface-variant text-[15px] md:text-[18px]">
                    Post-tensioned slab strategy with reduced column interruption in living zones.
                  </p>
                </div>
              </div>
              <div className="rounded-lg border border-outline-variant/50 p-4 md:p-5 bg-surface-container-low flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">ac_unit</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Thermal Regulation</h4>
                  <p className="text-on-surface-variant text-[15px] md:text-[18px]">
                    Ventilated facade, deep overhangs, and high-performance glazing for coastal heat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-surface-container-low relative overflow-hidden">
        <div className="absolute -right-20 top-0 text-[120px] md:text-[220px] font-extrabold text-primary/6 pointer-events-none select-none">
          CORE
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-10 md:mb-14 reveal">
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-3">Engineering Specification</p>
            <h2 className="text-3xl md:text-5xl font-extrabold">Structural & Digital Core</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-7">
            {designPillars.map((pillar) => (
              <article key={pillar.title} className="bg-white border border-outline-variant/50 p-6 md:p-8 reveal hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-7">
                  <span className="material-symbols-outlined text-[28px]">{pillar.icon}</span>
                </div>
                <h3 className="text-2xl font-extrabold mb-3">{pillar.title}</h3>
                <p className="text-on-surface-variant text-[15px] md:text-[18px] leading-relaxed">{pillar.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-8 md:mb-12 reveal flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-2">Gallery</p>
              <h2 className="text-3xl md:text-5xl font-extrabold">Visual Narrative</h2>
            </div>
            <p className="text-on-surface-variant text-[15px] md:text-[18px] max-w-md">
              Material intersections and spatial experience captured across interior and exterior zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            <div className="md:col-span-7 reveal overflow-hidden">
              <img alt="Project facade" className="w-full h-[340px] md:h-[620px] object-cover" src="/images/highrise.jpg" />
            </div>
            <div className="md:col-span-5 grid gap-4 md:gap-6">
              <div className="reveal overflow-hidden">
                <img alt="Structural detail" className="w-full h-[160px] md:h-[300px] object-cover" src="/images/steel-detail.jpg" />
              </div>
              <div className="reveal overflow-hidden">
                <img alt="Interior detail" className="w-full h-[160px] md:h-[300px] object-cover" src="/images/living-room.jpg" />
              </div>
            </div>
            <div className="md:col-span-6 reveal overflow-hidden">
              <img alt="Villa exterior" className="w-full h-[180px] md:h-[280px] object-cover" src="/images/excellence.jpg" />
            </div>
            <div className="md:col-span-6 reveal overflow-hidden">
              <img alt="Construction stage" className="w-full h-[180px] md:h-[280px] object-cover" src="/images/highrise.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-12 reveal">
            <div>
              <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-2">The Journey</p>
              <h2 className="text-3xl md:text-5xl font-extrabold">Precision Milestones</h2>
            </div>
            <p className="text-primary font-semibold text-sm md:text-base">Total Duration: 18 Months</p>
          </div>

          <div className="grid md:grid-cols-4 gap-5 md:gap-7">
            {timeline.map((step, index) => (
              <article key={step.title} className="reveal bg-white border border-outline-variant/50 p-5 md:p-6">
                <div className={step.active ? "w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-extrabold mb-5" : "w-10 h-10 rounded-full border border-outline-variant text-on-surface flex items-center justify-center font-extrabold mb-5"}>
                  {index + 1}
                </div>
                <p className="text-primary text-[11px] uppercase tracking-[0.14em] font-semibold mb-2">{step.phase}</p>
                <h3 className="text-xl font-extrabold mb-2">{step.title}</h3>
                <p className="text-on-surface-variant text-[15px] md:text-[17px] leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-[920px] mx-auto px-margin-mobile text-center reveal">
          <span className="material-symbols-outlined text-primary/25 text-[52px] md:text-[72px] mb-3 block">format_quote</span>
          <blockquote className="text-2xl md:text-4xl font-semibold leading-tight text-on-surface mb-8">
            Building a home is emotional. Building a masterpiece needs an engineering partner who
            understands both precision and personality.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img alt="Client" className="w-full h-full object-cover" src="/images/living-room.jpg" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">Dr. Anirudh Ramakrishnan</p>
              <p className="text-on-surface-variant text-xs uppercase tracking-[0.14em]">Principal Owner, Azure Horizon</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-8 md:mb-12 reveal flex items-center justify-between gap-4">
            <h2 className="text-3xl md:text-5xl font-extrabold">More Masterpieces</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">west</span>
              </button>
              <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[18px]">east</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-7">
            {moreProjects.map((project) => (
              <Link key={project.title} to="/projects/azure-horizon-villa" className="group reveal">
                <div className="aspect-[4/5] overflow-hidden mb-4">
                  <img alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={project.image} />
                </div>
                <p className="text-primary text-xs uppercase tracking-[0.14em] font-semibold mb-1">{project.location}</p>
                <h3 className="text-2xl font-extrabold">{project.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0b5f95] text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center reveal">
          <h2 className="text-3xl md:text-6xl font-extrabold mb-4">Ready to build your own landmark?</h2>
          <p className="text-white/85 max-w-2xl mx-auto mb-8 text-[16px] md:text-[20px]">
            Let us shape your next project with strong engineering, modern detailing, and a
            construction process you can trust.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="bg-white text-primary px-8 py-3.5 font-semibold rounded-md hover:bg-white/90 transition-colors"
              href="https://wa.me/917200472008"
              rel="noreferrer"
              target="_blank"
            >
              Start Your Project
            </a>
            <Link
              className="border border-white/40 px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors font-semibold"
              to="/projects"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
