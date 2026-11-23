import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { PROJECT_FILTERS, PROJECT_LISTING_ITEMS } from "@/features/projects";

type ProjectFilter = (typeof PROJECT_FILTERS)[number];

const INTERIOR_GALLERY_IMAGES = [
  {
    src: "/images/living-room.jpg",
    alt: "Modern living room interior",
    size: "wide",
  },
  {
    src: "/images/project/s11.jpeg",
    alt: "Residential entry hallway",
    size: "tall",
  },
  {
    src: "/images/project/s44.jpeg",
    alt: "Residential kitchen interior",
    size: "square",
  },
  {
    src: "/images/project/s22.jpeg",
    alt: "Residential home exterior",
    size: "square",
  },
  {
    src: "/images/project/s33.jpeg",
    alt: "Residential home exterior",
    size: "square",
  },
  {
    src: "/images/project/s55.jpeg",
    alt: "Residential home exterior",
    size: "wide",
  },
] as const;

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All Projects");

  const visibleProjects = PROJECT_LISTING_ITEMS.filter(
    (project) =>
      activeFilter === "All Projects" ||
      project.type === activeFilter ||
      project.status === activeFilter,
  );
  const visibleCount =
    activeFilter === "Interior" ? INTERIOR_GALLERY_IMAGES.length : visibleProjects.length;

  useReveal([activeFilter, visibleCount]);

  return (
    <>
      <ProjectsHeroSection />
      <ProjectsFilterSection
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        visibleCount={visibleCount}
      />
      <ProjectsGridSection activeFilter={activeFilter} visibleProjects={visibleProjects} />
    </>
  );
}

function ProjectsHeroSection() {
  return (
    <header className="relative isolate flex min-h-[30rem] items-center overflow-hidden bg-[#08111f] sm:min-h-[34rem] lg:min-h-[38rem]">
      <div className="absolute inset-0">
        <img
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          fetchPriority="high"
          src={"/images/excellence.jpg"}
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#08111f]/95 via-[#08111f]/75 to-[#08111f]/30" />
        <div className="absolute inset-0 bg-linear-to-t from-[#08111f]/40 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile py-14 sm:py-20 md:px-gutter lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white/85 backdrop-blur-md sm:text-xs">
            <span aria-hidden="true" className="material-symbols-outlined text-sm text-secondary-container">
              photo_library
            </span>
            Project gallery
          </span>
          <h1 className="mt-5 text-4xl font-black leading-[1.04] text-white sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl">
            Spaces built with care. Made to last.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:mt-6">
            Explore residential projects and interior spaces from the first plan to the finished
            space.
          </p>
          <a
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
            href="#project-grid"
          >
            Browse projects
            <span aria-hidden="true" className="material-symbols-outlined text-lg">
              arrow_downward
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

function ProjectsFilterSection({
  activeFilter,
  onFilterChange,
  visibleCount,
}: {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
  visibleCount: number;
}) {
  return (
    <section className="border-b border-outline-variant/20 bg-white/95 py-4 shadow-sm backdrop-blur-xl sm:py-5">
      <div className="mx-auto flex max-w-container-max flex-col gap-4 px-margin-mobile md:px-gutter sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div aria-label="Filter projects" className="flex flex-wrap gap-2" role="group">
          {PROJECT_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                aria-pressed={isActive}
                className={[
                  "inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full border px-4 py-2 text-[11px] font-bold tracking-wide transition-colors sm:min-h-11 sm:px-5",
                  isActive
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-outline-variant/40 bg-white text-on-surface-variant hover:border-primary/40 hover:bg-surface-container-low",
                ].join(" ")}
                key={filter}
                onClick={() => onFilterChange(filter)}
                type="button"
              >
                {filter}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant sm:text-sm" role="status" aria-live="polite">
          <span className="font-black text-primary">{visibleCount}</span>
          <span>{visibleCount === 1 ? "project" : "projects"} found</span>
        </div>
      </div>
    </section>
  );
}

function ProjectsGridSection({
  activeFilter,
  visibleProjects,
}: {
  activeFilter: ProjectFilter;
  visibleProjects: typeof PROJECT_LISTING_ITEMS;
}) {
  return (
    <section
      className="mx-auto max-w-container-max px-margin-mobile py-10 md:px-gutter md:py-16 lg:py-20"
      id="project-grid"
    >
      <div className="masonry-grid">
        {activeFilter === "Interior"
          ? INTERIOR_GALLERY_IMAGES.map((image, index) => (
              <article
                className={`project-card group relative isolate overflow-hidden rounded-[1.5rem] bg-[#08111f] shadow-md ring-1 ring-black/5 ${image.size === "wide" ? "masonry-item-wide" : ""} ${image.size === "tall" ? "masonry-item-tall" : ""} ${image.size === "square" ? "masonry-item-square" : ""}`}
                key={image.src}
              >
                <img
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                  loading="lazy"
                  sizes={
                    image.size === "wide"
                      ? "(max-width: 767px) 100vw, 66vw"
                      : "(max-width: 767px) 100vw, 33vw"
                  }
                  src={image.src}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#08111f]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6 md:p-7">
                  <span className="text-sm font-bold text-white sm:text-base">Interior collection</span>
                  <span className="text-xs font-black tracking-[0.14em] text-white/75">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))
          : visibleProjects.map((project, index) => (
              <Link
                className={[
                  "project-card group relative isolate overflow-hidden rounded-[1.5rem] bg-[#08111f] shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
                  project.size === "wide" ? "masonry-item-wide" : "",
                  project.size === "tall" ? "masonry-item-tall" : "",
                  project.size === "square" ? "masonry-item-square" : "",
                ].join(" ")}
                key={project.slug}
                style={{ transitionDelay: `${index * 80}ms` }}
                to={project.to}
              >
                <img
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  decoding="async"
                  loading="lazy"
                  sizes={
                    project.size === "wide"
                      ? "(max-width: 767px) 100vw, 66vw"
                      : "(max-width: 767px) 100vw, 33vw"
                  }
                  src={project.image}
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#08111f]/95 via-[#08111f]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-5 sm:p-6 md:p-7">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                      {project.type}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${project.status === "Ongoing" ? "bg-secondary-container text-on-secondary-container" : "bg-white/90 text-on-surface"}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-black leading-tight text-white sm:text-2xl md:text-3xl">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-white/90">
                    View project
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1"
                    >
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
      </div>
      {activeFilter !== "Interior" && visibleProjects.length === 0 && (
        <div className="rounded-[1.75rem] border border-outline-variant/25 bg-white px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16">
          <span aria-hidden="true" className="material-symbols-outlined text-4xl text-primary">
            apartment
          </span>
          <h2 className="mt-4 text-xl font-black text-on-surface sm:text-2xl">
            No {activeFilter.toLowerCase()} projects yet
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-on-surface-variant sm:text-base">
            We’re adding more work to our portfolio. In the meantime, get in touch to discuss your
            project.
          </p>
          <Link
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary/90"
            to="/contact-us"
          >
            Contact our team
            <span aria-hidden="true" className="material-symbols-outlined text-base">
              arrow_forward
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}

function ProjectsIntelligenceSection() {
  return (
    <section className={"bg-[#0b5f95] py-14 md:py-20 relative overflow-hidden"}>
      <div className={"absolute inset-0 opacity-10 pointer-events-none"}></div>
      <div
        className={
          "px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid md:grid-cols-2 items-center gap-10 md:gap-16"
        }
      >
        <div className={"reveal"}>
          <span
            className={
              "font-semibold text-[11px] text-white/70 uppercase tracking-[0.3em] mb-5 block"
            }
          >
            Precision Intelligence
          </span>
          <h2 className={"font-display-lg text-4xl md:text-5xl text-white mb-8"}>
            Aerial Surveys & <br />
            Site Intelligence
          </h2>
          <div className={"space-y-6"}>
            <div className={"flex gap-6 items-start"}>
              <div
                className={
                  "w-11 h-11 shrink-0 border border-white/30 flex items-center justify-center"
                }
              >
                <span className={"material-symbols-outlined text-white"}>sensors</span>
              </div>
              <div>
                <h4 className={"text-white text-xl font-semibold mb-2"}>LiDAR Topography</h4>
                <p className={"text-white/80 text-base md:text-lg"}>
                  Advanced laser scanning for millimeter-perfect site grading and earthwork
                  calculation.
                </p>
              </div>
            </div>
            <div className={"flex gap-6 items-start"}>
              <div
                className={
                  "w-11 h-11 shrink-0 border border-white/30 flex items-center justify-center"
                }
              >
                <span className={"material-symbols-outlined text-white"}>monitoring</span>
              </div>
              <div>
                <h4 className={"text-white text-xl font-semibold mb-2"}>Real-time Progress</h4>
                <p className={"text-white/80 text-base md:text-lg"}>
                  Daily drone photogrammetry overlaid with BIM models for strict adherence to
                  timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"relative reveal"}>
          <div
            className={"aspect-square max-w-107.5 md:ml-auto border border-white/25 p-4 bg-white/5"}
          >
            <div className={"w-full h-full relative overflow-hidden"}>
              <img
                alt={"Aerial map overlay"}
                className={"w-full h-full object-cover grayscale"}
                src={"/images/steel-detail.jpg"}
              />
              <div className={"absolute inset-0 bg-primary/10 mix-blend-overlay"}></div>
              <div
                className={
                  "absolute top-8 left-8 bg-surface/10 backdrop-blur-md p-4 border border-white/10"
                }
              >
                <span className={"text-white font-label-sm text-[10px] uppercase block mb-1"}>
                  Scanning Phase
                </span>
                <div className={"flex items-center gap-2"}>
                  <div
                    className={"w-2 h-2 rounded-full bg-secondary-container animate-pulse"}
                  ></div>
                  <span className={"text-white font-label-sm"}>Active Grid Alpha-4</span>
                </div>
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
    {
      quote:
        '"Santhi Builders transformed our conceptual sketch into a structural masterpiece. Their precision and transparency in the build phase are unmatched in the industry."',
      name: "Arjun Reddy",
      role: "CEO, Vanguard Global",
    },
    {
      quote:
        '"The aerial mapping and BIM integration they use provided us with confidence at every milestone. A truly modern construction partner for the digital age."',
      name: "Sarah Mitchell",
      role: "Lead Architect, SM Design",
    },
    {
      quote:
        '"Luxury is about details. Santhi Builders understands this fundamental truth. Our high-rise project stands as a testament to their refined craftsmanship."',
      name: "Karthik Iyer",
      role: "Director, Urban Zenith",
    },
  ] as const;

  return (
    <section
      className={"py-14 md:py-20 bg-surface-container-low border-t border-outline-variant/10"}
    >
      <div
        className={
          "px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center mb-10 md:mb-14"
        }
      >
        <h2 className={"font-display-lg text-4xl md:text-5xl mb-4"}>Strategic Partnerships</h2>
        <p className={"text-on-surface-variant max-w-xl mx-auto text-[16px] md:text-[20px]"}>
          Voice of our clients who have entrusted their most ambitious visions to our engineering
          teams.
        </p>
      </div>
      <div
        className={
          "px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid md:grid-cols-3 gap-5 md:gap-gutter"
        }
      >
        {items.map((item, index) => (
          <div
            className={"bg-white p-7 md:p-10 border border-outline-variant/30 reveal"}
            key={item.name}
            style={index === 0 ? undefined : { transitionDelay: `${index * 100}ms` }}
          >
            <span className={"material-symbols-outlined text-primary text-4xl mb-6"}>
              format_quote
            </span>
            <p className={"text-on-surface mb-8 italic text-[16px] md:text-[20px]"}>{item.quote}</p>
            <div className={"flex items-center gap-4"}>
              <div className={"w-12 h-12 rounded-full bg-surface-dim"}></div>
              <div>
                <h5 className={"font-semibold text-on-surface"}>{item.name}</h5>
                <p className={"text-xs uppercase text-outline tracking-wide"}>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
