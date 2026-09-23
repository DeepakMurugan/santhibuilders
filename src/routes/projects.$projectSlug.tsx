import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { PROJECT_DETAILS } from "@/features/projects/data/projects";

const projects = PROJECT_DETAILS;
type ProjectSlug = keyof typeof projects;

export const Route = createFileRoute("/projects/$projectSlug")({
  head: ({ params }) => {
    const project = projects[params.projectSlug as ProjectSlug] ?? projects.sobana;

    return {
      meta: [
        { title: `${project.title} | Santhi Builders` },
        { name: "description", content: project.subtitle },
        { property: "og:title", content: `${project.title} | Santhi Builders` },
        { property: "og:description", content: project.subtitle },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop">
      <h1 className="mb-4 text-4xl font-extrabold">Project not found</h1>
      <p className="mb-8 text-on-surface-variant">The project you opened does not exist yet.</p>
      <Link className="font-semibold text-primary" to="/projects">
        Back to projects
      </Link>
    </div>
  ),
});

function ProjectDetail() {
  const params = Route.useParams();
  const project = projects[params.projectSlug as ProjectSlug];

  if (!project) {
    throw notFound();
  }

  const summary = {
    status: project.status ?? "Completed",
    location: project.location ?? "Location available on request",
    builtUpArea: project.builtUpArea ?? "Not specified",
    plotArea: project.plotArea ?? "Not specified",
    testimonial: project.testimonial ?? {
      quote: project.subtitle,
      name: project.title,
      role: "Project client",
    },
  };

  return (
    <main className="bg-surface-container-low">
      <section className="relative flex min-h-[26rem] items-end overflow-hidden md:min-h-[34rem]">
        <img
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          src={project.hero}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#050a14]/95 via-[#050a14]/70 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-container-max px-margin-mobile pb-12 text-white md:px-margin-desktop md:pb-20">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/75">
            {project.category}
          </p>
          <h1 className="mb-4 text-[40px] font-black leading-[1.04] sm:text-[52px] md:text-[68px]">
            {project.title}
          </h1>
          <p className="max-w-2xl text-[16px] leading-relaxed text-white/80 md:text-[20px]">
            {project.subtitle}
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="rounded-[2rem] border border-outline-variant/60 bg-white p-5 shadow-[0_20px_60px_-32px_rgba(15,31,54,0.35)] md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                  {summary.status}
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Project Overview
                  </p>
                  <h2 className="text-3xl font-extrabold text-on-surface md:text-5xl">
                    {project.title}
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <ProjectFact label="Location" value={summary.location} />
                  <ProjectFact label="Built-up Area" value={summary.builtUpArea} />
                  <ProjectFact label="Plot Area" value={summary.plotArea} wide />
                </div>
              </div>

              <aside className="rounded-[1.75rem] border border-primary/15 bg-primary/5 p-5 md:p-6">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Client Review
                </p>
                <blockquote className="text-[18px] font-medium leading-relaxed text-on-surface md:text-[22px]">
                  “{summary.testimonial.quote}”
                </blockquote>
                <div className="mt-6 border-t border-primary/10 pt-4">
                  <p className="font-semibold text-on-surface">{summary.testimonial.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-on-surface-variant">
                    {summary.testimonial.role}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-outline-variant/50 bg-white py-8">
        <div className="mx-auto flex max-w-container-max justify-center px-margin-mobile md:px-margin-desktop">
          <Link className="font-semibold text-primary" to="/projects">
            Back to projects
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectFact({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-outline-variant/60 bg-surface-container-low p-4${wide ? " sm:col-span-2" : ""}`}
    >
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-outline">
        {label}
      </p>
      <p className="text-base font-semibold text-on-surface md:text-lg">{value}</p>
    </div>
  );
}
