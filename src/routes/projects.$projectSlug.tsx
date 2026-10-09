import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, MapPin, MoveUpRight } from "lucide-react";
import { useState } from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PROJECT_DETAILS } from "@/features/projects/data/projects";
import { testimonials } from "@/features/testimonials/testimonials";

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
  const [galleryApi, setGalleryApi] = useState<CarouselApi>();
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();

  if (!project) {
    throw notFound();
  }

  return (
    <main className="overflow-hidden bg-white text-on-surface">
      <section className="relative isolate flex min-h-[38rem] items-end overflow-hidden bg-[#07111d] md:min-h-[46rem]">
        <img
          alt={`${project.title} residential project`}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src={project.hero}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,13,24,0.94)_0%,rgba(5,13,24,0.7)_46%,rgba(5,13,24,0.12)_100%),linear-gradient(0deg,rgba(5,13,24,0.72)_0%,transparent_65%)]" />
        <div className="mx-auto w-full max-w-container-max px-margin-mobile pb-12 pt-28 text-white md:px-margin-desktop md:pb-20">
          <Link
            className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            to="/projects"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All projects
          </Link>
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] backdrop-blur">
                {project.category}
              </span>
              <span className="rounded-full bg-secondary-container px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-on-secondary-container">
                {project.status}
              </span>
            </div>
            <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              {project.subtitle}
            </p>
            <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/90 sm:text-base">
              <MapPin aria-hidden="true" className="size-4 text-secondary-container" />
              {project.location}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
      </section>

      <section className="bg-surface-container-low py-16 md:py-24">
        <div className="mx-auto grid max-w-container-max gap-10 px-margin-mobile md:px-margin-desktop lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-primary">
              Project overview
            </p>
            <h2 className="max-w-lg text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Thoughtful spaces, built around the way you live.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-on-surface-variant md:text-lg">
              Explore the key details and spaces behind this {project.category.toLowerCase()} project.
              Our team brings careful planning, quality construction, and clear communication to every
              stage.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <ProjectFact label="Location" value={project.location} />
            <ProjectFact label="Built-up area" value={project.builtUpArea} />
            <ProjectFact label="Plot area" value={project.plotArea} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end md:mb-10">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-primary">
                Project gallery
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                A closer look
              </h2>
            </div>
            <CarouselControls
              label="project gallery"
              onNext={() => galleryApi?.scrollNext()}
              onPrevious={() => galleryApi?.scrollPrev()}
            />
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setGalleryApi}
          >
            <CarouselContent className="-ml-4">
              {project.gallery.map((image, index) => (
                <CarouselItem className="basis-[88%] pl-4 sm:basis-2/3 lg:basis-1/2" key={image}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-surface-container-low">
                    <img
                      alt={`${project.title} project gallery view ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      src={image}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07111d]/70 to-transparent px-5 pb-5 pt-14 text-sm font-semibold text-white">
                      {project.title} · View {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section className="bg-[#07111d] py-16 text-white md:py-24">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end md:mb-10">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-secondary-container">
                Homeowner stories
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Confidence, built together.
              </h2>
            </div>
            <CarouselControls
              label="client testimonials"
              onNext={() => testimonialApi?.scrollNext()}
              onPrevious={() => testimonialApi?.scrollPrev()}
              light
            />
          </div>
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setTestimonialApi}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem className="basis-full pl-4" key={testimonial.name}>
                  <article className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] md:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-64 overflow-hidden bg-white/5 sm:min-h-80">
                      <img
                        alt={`${testimonial.name} testimonial`}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        src={testimonial.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07111d]/60 via-transparent to-transparent" />
                      <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                        Client story
                      </span>
                    </div>
                    <div className="flex flex-col justify-center p-6 sm:p-9 md:p-12">
                      <span aria-hidden="true" className="text-6xl font-serif leading-none text-secondary-container">
                        “
                      </span>
                      <blockquote className="-mt-2 text-xl font-semibold leading-relaxed sm:text-2xl md:text-3xl">
                        {testimonial.quote}
                      </blockquote>
                      <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                        <img
                          alt=""
                          className="size-12 rounded-full border border-white/15 object-cover"
                          loading="lazy"
                          src={testimonial.avatar}
                        />
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <section className="bg-surface-container-low py-14 md:py-20">
        <div className="mx-auto flex max-w-container-max flex-col gap-8 px-margin-mobile sm:flex-row sm:items-center sm:justify-between md:px-margin-desktop">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.24em] text-primary">
              Start a conversation
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Planning a project of your own?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
              Tell us what you have in mind and our team will help you plan the next step.
            </p>
          </div>
          <Link
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-white transition hover:bg-primary/90"
            to="/contact-us"
          >
            Discuss your project
            <MoveUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-t border-outline-variant/50 bg-white py-7">
        <div className="mx-auto flex max-w-container-max justify-between px-margin-mobile md:px-margin-desktop">
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline" to="/projects">
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to all projects
          </Link>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline" to="/contact-us">
            Enquire now
            <MoveUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function CarouselControls({
  label,
  light = false,
  onNext,
  onPrevious,
}: {
  label: string;
  light?: boolean;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const buttonClass = light
    ? "border-white/20 text-white hover:bg-white hover:text-[#07111d]"
    : "border-outline-variant text-on-surface hover:bg-primary hover:text-white";

  return (
    <div aria-label={label} className="flex gap-2">
      <button
        aria-label={`Previous ${label}`}
        className={`flex size-11 items-center justify-center rounded-full border transition ${buttonClass}`}
        onClick={onPrevious}
        type="button"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
      </button>
      <button
        aria-label={`Next ${label}`}
        className={`flex size-11 items-center justify-center rounded-full border transition ${buttonClass}`}
        onClick={onNext}
        type="button"
      >
        <ArrowRight aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}

function ProjectFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-outline-variant/50 bg-white p-5 shadow-sm">
      <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-outline">
        {label}
      </p>
      <p className="text-base font-bold leading-snug text-on-surface md:text-lg">{value}</p>
    </div>
  );
}
