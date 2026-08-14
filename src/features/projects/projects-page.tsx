import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { PROJECT_FILTERS, PROJECT_LISTING_ITEMS } from "@/features/projects";

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const visibleProjects =
    activeFilter === "All Projects"
      ? PROJECT_LISTING_ITEMS
      : PROJECT_LISTING_ITEMS.filter((project) => project.type === activeFilter);

  useReveal([activeFilter, visibleProjects.length]);

  return (
    <>
      <ProjectsHeroSection />
      <ProjectsFilterSection activeFilter={activeFilter} onFilterChange={setActiveFilter} visibleCount={visibleProjects.length} />
      <ProjectsGridSection visibleProjects={visibleProjects} />
      <ProjectsIntelligenceSection />
      <ProjectsTestimonialsSection />
    </>
  );
}

function ProjectsHeroSection() {
  return (
    <header className={"relative min-h-140 md:min-h-175 flex items-center overflow-hidden"}>
      <div className={"absolute inset-0 z-0"}>
        <img alt={"Santhi Builders Project"} className={"w-full h-full object-cover"} src={"/images/excellence.jpg"} />
        <div className={"absolute inset-0 bg-linear-to-r from-[#0f1f36]/95 via-[#0f1f36]/75 to-[#0f1f36]/20"}></div>
      </div>
      <div className={"relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24"}>
        <div className={"max-w-3xl reveal active"}>
          <span className={"inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-label-sm text-[10px] text-white uppercase tracking-[0.3em] mb-6"}>Portfolio Excellence</span>
          <h1 className={"font-display-lg text-[42px] leading-[1.05] sm:text-[58px] md:text-[78px] text-white mb-6"}>Engineering <br /><span className={"text-[#0ea5e9]"}>Structural</span><br />Legacies.</h1>
          <p className={"max-w-2xl text-white/85 mb-10 border-l-2 border-[#0ea5e9] pl-5 text-[16px] md:text-[20px] leading-relaxed"}>At Santhi Builders, we do not just build structures. We craft enduring spaces where engineering precision meets contemporary architecture.</p>
          <div className={"flex flex-wrap items-center gap-4 md:gap-6"}>
            <a className={"inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 font-semibold uppercase tracking-wide text-xs md:text-sm hover:bg-primary/90 transition-all"} href={"#project-grid"}>View Portfolio<span className={"material-symbols-outlined group-hover:translate-x-1 transition-transform"}>arrow_forward</span></a>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProjectsFilterSection({ activeFilter, onFilterChange, visibleCount }: { activeFilter: string; onFilterChange: (filter: string) => void; visibleCount: number; }) {
  return (
    <section className={"bg-white py-6 md:py-8 border-b border-outline-variant/30 sticky top-0 z-30"}>
      <div className={"px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-5"}>
        <div className={"flex gap-2 overflow-x-auto no-scrollbar pb-1"}>
          {PROJECT_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button className={["px-4 md:px-5 py-2 font-semibold uppercase text-[11px] tracking-wide whitespace-nowrap transition-colors", isActive ? "bg-primary text-white" : "text-on-surface-variant hover:bg-surface-container-low"].join(" ")} key={filter} onClick={() => onFilterChange(filter)} type={"button"}>
                {filter}
              </button>
            );
          })}
        </div>
        <div className={"flex items-center gap-4 text-outline font-semibold text-[11px] uppercase tracking-wide"}>
          <span>Displaying {visibleCount} Works</span>
          <div className={"h-4 w-px bg-outline-variant"}></div>
          <button className={"flex items-center gap-1.5 hover:text-primary transition-colors"} type={"button"}><span className={"material-symbols-outlined text-[18px]"}>tune</span>Refine</button>
        </div>
      </div>
    </section>
  );
}

function ProjectsGridSection({ visibleProjects }: { visibleProjects: typeof PROJECT_LISTING_ITEMS }) {
  return (
    <section className={"py-10 md:py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"} id={"project-grid"}>
      <div className={"masonry-grid"}>
        {visibleProjects.map((project, index) => (
          <Link className={["project-card group relative overflow-hidden bg-surface-container reveal", project.size === "wide" ? "masonry-item-wide" : "", project.size === "tall" ? "masonry-item-tall" : "", project.size === "square" ? "masonry-item-square" : ""].join(" ")} key={project.title} style={{ transitionDelay: `${index * 80}ms` }} to={project.to}>
            <img alt={project.title} className={"w-full h-full object-cover transition-transform duration-700"} src={project.image} />
            <div className={"overlay absolute inset-0 bg-linear-to-t from-[#0f1f36]/95 via-[#0f1f36]/65 to-[#0f1f36]/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 md:p-8"}>
              <span className={"font-semibold text-[11px] tracking-[0.18em] text-[#7dd3fc] uppercase mb-2"}>{project.type}</span>
              <h3 className={"font-display-lg text-white text-2xl md:text-3xl leading-tight mb-3"}>{project.title}</h3>
              <span className={"w-fit inline-flex items-center gap-2 text-white/90 font-semibold uppercase text-xs tracking-wide border-b border-white/30 pb-1.5"}>View Project<span className={"material-symbols-outlined text-base"}>north_east</span></span>
            </div>
          </Link>
        ))}
      </div>
      {visibleProjects.length === 0 && <div className={"py-16 text-center text-on-surface-variant"}>No projects match this filter.</div>}
      <div className={"mt-12 md:mt-16 text-center"}><button className={"border border-outline px-10 py-3.5 font-semibold uppercase tracking-wide text-xs hover:bg-on-surface hover:text-surface transition-all duration-300"} type={"button"}>Load More Works</button></div>
    </section>
  );
}

function ProjectsIntelligenceSection() {
  return (
    <section className={"bg-[#0b5f95] py-14 md:py-20 relative overflow-hidden"}>
      <div className={"absolute inset-0 opacity-10 pointer-events-none"}></div>
      <div className={"px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid md:grid-cols-2 items-center gap-10 md:gap-16"}>
        <div className={"reveal"}>
          <span className={"font-semibold text-[11px] text-white/70 uppercase tracking-[0.3em] mb-5 block"}>Precision Intelligence</span>
          <h2 className={"font-display-lg text-4xl md:text-5xl text-white mb-8"}>Aerial Surveys & <br />Site Intelligence</h2>
          <div className={"space-y-6"}>
            <div className={"flex gap-6 items-start"}><div className={"w-11 h-11 shrink-0 border border-white/30 flex items-center justify-center"}><span className={"material-symbols-outlined text-white"}>sensors</span></div><div><h4 className={"text-white text-xl font-semibold mb-2"}>LiDAR Topography</h4><p className={"text-white/80 text-base md:text-lg"}>Advanced laser scanning for millimeter-perfect site grading and earthwork calculation.</p></div></div>
            <div className={"flex gap-6 items-start"}><div className={"w-11 h-11 shrink-0 border border-white/30 flex items-center justify-center"}><span className={"material-symbols-outlined text-white"}>monitoring</span></div><div><h4 className={"text-white text-xl font-semibold mb-2"}>Real-time Progress</h4><p className={"text-white/80 text-base md:text-lg"}>Daily drone photogrammetry overlaid with BIM models for strict adherence to timelines.</p></div></div>
          </div>
        </div>
        <div className={"relative reveal"}>
          <div className={"aspect-square max-w-107.5 md:ml-auto border border-white/25 p-4 bg-white/5"}>
            <div className={"w-full h-full relative overflow-hidden"}>
              <img alt={"Aerial map overlay"} className={"w-full h-full object-cover grayscale"} src={"/images/steel-detail.jpg"} />
              <div className={"absolute inset-0 bg-primary/10 mix-blend-overlay"}></div>
              <div className={"absolute top-8 left-8 bg-surface/10 backdrop-blur-md p-4 border border-white/10"}>
                <span className={"text-white font-label-sm text-[10px] uppercase block mb-1"}>Scanning Phase</span>
                <div className={"flex items-center gap-2"}><div className={"w-2 h-2 rounded-full bg-secondary-container animate-pulse"}></div><span className={"text-white font-label-sm"}>Active Grid Alpha-4</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsTestimonialsSection() {
  const items = [
    { quote: '"Santhi Builders transformed our conceptual sketch into a structural masterpiece. Their precision and transparency in the build phase are unmatched in the industry."', name: "Arjun Reddy", role: "CEO, Vanguard Global" },
    { quote: '"The aerial mapping and BIM integration they use provided us with confidence at every milestone. A truly modern construction partner for the digital age."', name: "Sarah Mitchell", role: "Lead Architect, SM Design" },
    { quote: '"Luxury is about details. Santhi Builders understands this fundamental truth. Our high-rise project stands as a testament to their refined craftsmanship."', name: "Karthik Iyer", role: "Director, Urban Zenith" },
  ] as const;

  return (
    <section className={"py-14 md:py-20 bg-surface-container-low border-t border-outline-variant/10"}>
      <div className={"px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-10 md:mb-14"}>
        <h2 className={"font-display-lg text-4xl md:text-5xl mb-4"}>Strategic Partnerships</h2>
        <p className={"text-on-surface-variant max-w-xl mx-auto text-[16px] md:text-[20px]"}>Voice of our clients who have entrusted their most ambitious visions to our engineering teams.</p>
      </div>
      <div className={"px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid md:grid-cols-3 gap-5 md:gap-gutter"}>
        {items.map((item, index) => (
          <div className={"bg-white p-7 md:p-10 border border-outline-variant/30 reveal"} key={item.name} style={index === 0 ? undefined : { transitionDelay: `${index * 100}ms` }}>
            <span className={"material-symbols-outlined text-primary text-4xl mb-6"}>format_quote</span>
            <p className={"text-on-surface mb-8 italic text-[16px] md:text-[20px]"}>{item.quote}</p>
            <div className={"flex items-center gap-4"}><div className={"w-12 h-12 rounded-full bg-surface-dim"}></div><div><h5 className={"font-semibold text-on-surface"}>{item.name}</h5><p className={"text-xs uppercase text-outline tracking-wide"}>{item.role}</p></div></div>
          </div>
        ))}
      </div>
    </section>
  );
}