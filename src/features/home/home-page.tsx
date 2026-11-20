import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { ConstructionEnquiryForm } from "@/components/construction-enquiry-form";
import { useReveal } from "@/hooks/use-reveal";
import { PROJECT_LISTING_ITEMS } from "@/features/projects";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { testimonials } from "@/features/testimonials/testimonials";

const heroSlides = [
  "/images/hero1.jpeg",
  "/images/hero2.jpeg",
  "/images/hero3.jpeg",
] as const;

const constructionPackages = [
  { name: "Standard", rate: 2549, accent: "standard", popular: false },
  { name: "Premium", rate: 2649, accent: "premium", popular: true },
  { name: "Luxury", rate: 2899, accent: "luxury", popular: false },
] as const;

const socialProfiles = [
  {
    name: "Instagram",
    handle: "@santhibuilders",
    href: "https://www.instagram.com/santhibuilders/",
    action: "Follow Us",
    description: "Follow along for project inspiration and updates.",
    Icon: Instagram,
    accent: "instagram",
  },
  {
    name: "Facebook",
    handle: "Santhi Builders",
    href: "https://www.facebook.com/Santhi Builders/",
    action: "Like Page",
    description: "Connect with our community and see what we are building.",
    Icon: Facebook,
    accent: "facebook",
  },
  {
    name: "YouTube",
    handle: "@Santhi Builders",
    href: "https://www.youtube.com/@Santhi Builders",
    action: "Subscribe",
    description: "Watch project stories and construction updates.",
    Icon: Youtube,
    accent: "youtube",
  },
] as const;

const testimonialHighlights = [
  {
    title: "Transparent Communication",
    description:
      "Stay informed at every stage with clear updates on project progress, costs and timelines.",
  },
  {
    title: "Quality That Lasts",
    description:
      "We focus on quality materials, skilled workmanship and careful execution to build homes that stand the test of time.",
  },
  {
    title: "Support From Start to Finish",
    description:
      "Our team guides you through every stage of construction, ensuring a smooth experience from planning to handover.",
  },
] as const;

const residentialMeta: Record<string, { status: string; location: string; builtUp: string }> = {
  "shanthi-residency": { status: "Completed", location: "Puducherry", builtUp: "To be confirmed" },
  "shobana-residency": { status: "Completed", location: "Pinnachikuppam, Puducherry", builtUp: "2,467 sq.ft" },
  "velmurugan-residency": { status: "Completed", location: "Puducherry", builtUp: "To be confirmed" },
  "kannan-residency": { status: "Completed", location: "Puducherry", builtUp: "To be confirmed" },
  "arumugam-residency": { status: "Ongoing", location: "Puthukuppam, Puducherry", builtUp: "1,273 sq.ft" },
};

const trustedClientLogos = [
  {
    alt: "Partner 1",
    src: "../images/lo1.png",
    heightClass: "h-16 md:h-20",
  },
  {
    alt: "Partner 2",
    src: "../images/cc2.webp",
    heightClass: "h-16 md:h-20",
  },
  {   alt: "Partner 3",
    src: "../images/lo2.png",
    heightClass: "h-14 md:h-16",
  },
  {
    alt: "Partner 4",
    src: "../images/c4.jpeg",
    heightClass: "h-16 md:h-20",
  },
  {
    alt: "Partner 5",
    src: "../images/log.webp",
    heightClass: "h-14 md:h-16",
  },

  {
    alt: "Partner 6",
    src: "../images/clg.png",
    heightClass: "h-30 md:h-30",
  },

  {
    alt: "Partner 7",
    src: "../images/mah.png",
    heightClass: "h-30 md:h-30",
  },

] as const;

const faqItems = [
  {
    question: "Average construction cost per sq ft in Puducherry ?",
    answer:
      "Our premium construction packages start from ₹2,549 per sq ft, varying with material specifications and soil conditions. We provide detailed bills of quantities (BOQ) for total transparency.",
  },
  {
    question: "Timeline for a 1500 sq ft house?",
    answer:
      "Typically, it takes 8 to 10 months from excavation to key handover, depending on weather and complexity. We provide a Gantt chart timeline at the start of every project.",
  },
  {
    question: "Assistance with CMDA/DTCP approvals?",
    answer:
      "Yes, we manage the entire paperwork process including local body approvals, planning permissions, and EB connections to ensure a hassle-free experience for our clients.",
  },
] as const;

export function HomePage() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [portfolioApi, setPortfolioApi] = useState<CarouselApi>();
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();

  const residentialProjects = PROJECT_LISTING_ITEMS.filter((project) => project.type === "Residential").slice(0, 6);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useReveal();

  return (
    <>
      <HomeHeroSection activeHeroSlide={activeHeroSlide} onSelectSlide={setActiveHeroSlide} />
      <HomePricingSection />
      <HomeLegacySection />
      <HomeStatsSection />
      <HomeExpertiseSection />
      <HomeWhySection />
      <HomeProjectsSection portfolioApi={portfolioApi} residentialProjects={residentialProjects} setPortfolioApi={setPortfolioApi} />
      <HomeTestimonialsSection setTestimonialApi={setTestimonialApi} testimonialApi={testimonialApi} />
      <HomeTrustedClientsSection />
      <HomeSocialSection />

      <HomeEstimatorSection />
      <HomeFaqSection />
    </>
  );
}

function HomeHeroSection({
  activeHeroSlide,
  onSelectSlide,
}: {
  activeHeroSlide: number;
  onSelectSlide: (index: number | ((current: number) => number)) => void;
}) {
  return (
    <header className={"relative w-full"}>
      <div className={"construction-home-hero relative overflow-hidden border-y border-outline-variant/20 shadow-1xl"}>
        <div className={"absolute inset-0"} id={"hero-slider"}>
          {heroSlides.map((image, index) => (
            <div className={`hero-slide absolute inset-0 ${index === activeHeroSlide ? "opacity-100 z-0" : "opacity-0 z-0"}`} key={image}>
              <div className={"absolute inset-0 bg-cover bg-center"} style={{ backgroundImage: `url('${image}')` }}></div>
            </div>
          ))}
        </div>
        <div className={"construction-home-hero__overlay absolute inset-0 z-10"}></div>
        <div className={"absolute inset-0 z-20 flex items-center px-5 py-8 sm:px-8 sm:py-10 md:px-16 md:py-16"}>
          <div className={"max-w-3xl text-white"}>
            <div className={"mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 sm:mb-5 sm:px-4"}>
              <span className={"material-symbols-outlined text-secondary-container text-xs"}></span>
              <span className={"text-[10px] uppercase tracking-[0.2em] font-bold"}>Idea To Identity</span>
            </div>
            <h1 className={"mb-3 max-w-3xl font-display-lg text-2xl leading-[1.08] font-extrabold tracking-tight sm:mb-5 sm:text-5xl lg:text-6xl"}>
              Best Construction Company in Pondicherry -{" "}
              <span className={" text-[#fe932c] "}>Your Trusted Partner in Home Construction</span>
            </h1>
            <p className={"font-body-lg mb-3 max-w-2xl border-l-4 border-primary pl-4 text-sm leading-relaxed opacity-90 sm:mb-5 sm:pl-6 sm:text-base md:text-body-lg"}>
              {"Santhi Builders is a construction company in Pondicherry, offering quality residential construction solutions. From planning and design to execution, we focus on reliable workmanship, transparent processes and well-designed homes that match your requirements, lifestyle and budget."}
            </p>
            <p className={"mb-4 text-base font-extrabold text-white sm:mb-6 sm:text-xl"}>
              Our Construction Packages Start at <span className={"text-primary"}>₹2,549/Sq.Ft</span>
            </p>
            <div className={"flex flex-wrap items-center gap-2 sm:gap-3"}>
              <Link className={"flex items-center justify-center gap-3 rounded-lg bg-primary px-5 py-3 text-sm font-black text-on-primary shadow-lg transition-all hover:shadow-2xl hover:translate-x-1 sm:px-6 sm:py-3.5 sm:text-base"} to={"/estimate-calculator"}>
                {" "}Calculate Cost Now{" "}
                <span className={"material-symbols-outlined"}>arrow_forward</span>
              </Link>
              <Link className={"flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-on-surface sm:px-6 sm:py-3.5"} to={"/projects"}>
                {" "}View Projects{" "}
              </Link>
              <a className={"flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-bold text-white transition-colors hover:bg-white/10 sm:px-6 sm:py-3.5"} href={"tel:+918838611658"}>
                <span className={"material-symbols-outlined"}>call</span>
                Call us
              </a>
            </div>
          </div>
        </div>
        <div className={"hidden 2xl:block absolute right-16 bottom-16 z-30 w-full max-w-sm transform translate-y-8"}>
          <ConstructionEnquiryForm
            compact
            description="Share your site basics and get a fast response from the Santhi Builders team."
            source="Home Hero"
            submitLabel="Get Instant Quote"
            title="Free Project Estimate"
          />
        </div>
        <div className={"absolute bottom-6 left-5 z-30 flex gap-3 sm:bottom-12 sm:left-12"}>
          {heroSlides.map((slide, index) => (
            <button
              aria-label={`Go to slide ${index + 1}`}
              className={`slider-dot h-0 rounded-full bg-white/5 transition-all ${index === activeHeroSlide ? "active w-8" : "w-3"}`}
              key={slide}
              onClick={() => onSelectSlide(index)}
              type={"button"}
            ></button>
          ))}
        </div>
      </div>
    </header>
  );
}

function HomePricingSection() {
  const accentClasses = {
    standard: {
      label: "bg-slate-400 text-white",
      title: "text-slate-700",
      button: "border border-slate-300 text-slate-800 hover:bg-slate-50",
    },
    premium: {
      label: "bg-gradient-to-r from-[#e65b00] to-[#ff7a1a] text-white",
      title: "text-[#e65b00]",
      button: "bg-[#e65b00] text-white hover:bg-[#ca4e00]",
    },
    luxury: {
      label: "bg-[#c99a2e] text-white",
      title: "text-[#a77b17]",
      button: "border border-[#c99a2e]/50 text-[#805d10] hover:bg-[#fffaf0]",
    },
  } as const;

  return (
    <section className="home-pricing-section relative isolate overflow-hidden py-section-gap">
      <div className="pointer-events-none absolute -left-24 top-16 -z-10 size-64 rounded-full bg-secondary-container/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary-container/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-secondary sm:text-xs">
            <span aria-hidden="true" className="material-symbols-outlined text-base">roofing</span>
            Construction packages
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight text-on-surface sm:text-4xl md:text-5xl">
            Construction cost per sq. ft.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base md:text-lg">
            Explore our package rates and get an estimate tailored to your project.
          </p>
        </div>

        <div className="mt-9 grid items-stretch gap-5 md:mt-12 md:grid-cols-3 md:gap-6">
          {constructionPackages.map((plan, index) => {
            const accents = accentClasses[plan.accent];

            return (
              <article
                className={`reveal group relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-[0_18px_48px_-30px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(15,23,42,0.35)] ${
                  plan.popular
                    ? "border-[#e65b00]/35 md:-translate-y-2 md:shadow-[0_24px_60px_-28px_rgba(230,91,0,0.45)]"
                    : "border-outline-variant/35"
                }`}
                key={plan.name}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`flex min-h-12 items-center justify-center px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.2em] sm:text-xs ${accents.label}`}>
                  {plan.popular ? (
                    <span className="inline-flex items-center gap-2">
                      <span aria-hidden="true" className="material-symbols-outlined text-base">star</span>
                      Most Popular
                    </span>
                  ) : (
                    "Construction package"
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className={`text-2xl font-black tracking-tight sm:text-3xl ${accents.title}`}>
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm text-on-surface-variant">Construction package rate</p>
                  <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-4xl font-black tracking-tight text-on-surface sm:text-5xl">
                      ₹{plan.rate.toLocaleString("en-IN")}
                    </span>
                    <span className="text-base font-medium text-on-surface-variant">/ sqft</span>
                  </div>
                  <div className="mt-6 border-t border-outline-variant/30 pt-5">
                    <p className="text-sm leading-relaxed text-on-surface-variant">
                      Compare this package with your plans and discuss the right scope for your home.
                    </p>
                  </div>
                  <Link
                    className={`mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${accents.button}`}
                    to="/estimate-calculator"
                  >
                    Get an estimate
                    <span aria-hidden="true" className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-on-surface-variant sm:text-sm">
          Final pricing may vary based on project scope, design and site conditions.
        </p>
      </div>
    </section>
  );
}

function HomeLegacySection() {
  return (
    <section className={"relative bg-white py-section-gap"}>
      <div className={"absolute top-0 right-0 w-1/2 h-full bg-surface-container-low/20 -z-10 rounded-l-[10rem]"}></div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"grid lg:grid-cols-12 gap-12 items-center"}>
          <div className={"lg:col-span-7 relative group"}>
            <div className={"absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"}></div>
            <img alt={"Santhi Builders Excellence"} className={"relative z-10 aspect-4/3 w-full rounded-3xl border border-outline-variant/20 object-contain shadow-2xl sm:aspect-16/10 lg:aspect-auto lg:h-96"} src={"/images/hero2.jpeg"} />
            <div className={"absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-outline-variant/30 hidden lg:block z-20"}>
              <p className={"text-primary font-black text-2xl leading-none"}>9+</p>
              <p className={"text-xs uppercase tracking-[0.2em] font-black text-on-surface-variant mt-2"}>Years Of Trust</p>
            </div>
          </div>
          <div className={"space-y-6 lg:col-span-5 lg:space-y-8 lg:pl-12"}>
            <div className={"inline-flex items-center gap-3 text-primary font-black tracking-[0.3em] uppercase text-xs"}>
              <span className={"h-1 w-12 bg-primary rounded-full"}></span>
              {" "}Built with purpose{" "}
            </div>
           <h2 className="font-headline-lg text-3xl font-black leading-tight sm:text-4xl lg:text-[2.75rem]">
  <span className="text-black">Why </span>
  <span className="text-primary">Santhi Builders?</span>
</h2>


            <p className={"text-body-lg text-base text-on-surface-variant leading-relaxed sm:text-lg"}>
              {" "}At Santhi Builders, we combine engineering expertise, quality materials and skilled workmanship to deliver homes built to last. From initial planning to final handover, we focus on transparent pricing, thoughtful designs and dependable construction practices. Our approach ensures every project is handled with care, keeping your requirements, budget and expectations at the centre. {" "}
            </p>
            <div className={"pt-6"}>
              <Link className={"inline-flex w-fit items-center gap-3 rounded-lg bg-primary px-6 py-4 text-sm font-black text-white transition-all hover:-translate-y-1 hover:shadow-2xl sm:px-10 sm:py-5 sm:text-base md:text-lg"} to={"/about"}>
                {" "}Learn More About Us{" "}
                <span className={"material-symbols-outlined"}>north_east</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeStatsSection() {
  const stats = [
    { value: "200+", label: "Homes Built" },
    { value: "300+", label: "Quality Checks" },
    { value: "2.5L+", label: "SQ.FT Delivered" },
    { value: "9+", label: "Years Trust" },
  ] as const;

  return (
    <section className={"relative z-10 w-full border-y border-white/10 bg-[#08111f] py-8 shadow-sm sm:py-10"}>
      <div className={"mx-auto grid max-w-container-max grid-cols-2 gap-6 px-5 sm:gap-10 sm:px-8 md:grid-cols-4 md:gap-12 md:px-12"}>
        {stats.map((stat) => (
          <div className={"border-l-2 border-secondary-container pl-4 text-left sm:border-l-4 sm:pl-6"} key={stat.label}>
            <div className={"font-display-lg mb-1 text-3xl font-black text-white sm:text-4xl"}>{stat.value}</div>
            <p className={"font-label-sm text-[10px] font-bold uppercase tracking-[0.14em] text-white/70 sm:text-label-sm sm:tracking-[0.2em]"}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeExpertiseSection() {
  const items = [
    {
      title: "Residential",
      icon: "home_work",
      body: "Luxury villas, premium apartments, and homes designed for modern living with uncompromised quality.",
      className: "md:col-span-7",
      maxWidth: "max-w-md",
    },
    {
      title: "Commercial",
      icon: "architecture",
      body: "State-of-the-art office spaces and retail hubs built for sustainable growth.",
      className: "md:col-span-5",
      maxWidth: "",
    },
    {
      title: "Institutional",
      icon: "account_balance",
      body: "Educational campuses and healthcare facilities with functional precision.",
      className: "md:col-span-5",
      maxWidth: "",
    },
    {
      title: "Industrial",
      icon: "precision_manufacturing",
      body: "Robust warehouses and units engineered for heavy-duty operations and industrial longevity.",
      className: "md:col-span-7",
      maxWidth: "max-w-md",
    },
  ] as const;

  return (
    <section className={"overflow-visible bg-surface py-12 sm:py-section-gap"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between"}>
          <div className={"max-w-2xl"}>
            <span className={"text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"}>Specializations</span>
            <h2 className={"font-headline-lg text-3xl font-black sm:text-4xl lg:text-[2.75rem]"}>
              Our Core <span className={"text-primary "}>Expertise</span>
            </h2>
          </div>
          <div className={"w-full lg:w-1/3 h-px bg-outline-variant/30 mb-4 hidden lg:block"}></div>
        </div>
        <div className={"grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-12"}>
          {items.map((item) => (
            <div className={`card-interactive group relative overflow-hidden rounded-3xl border border-outline-variant/10 hover:active:bg-primary hover:border-primary hover:active:border-outline-variant bg-white p-7 transform sm:p-10 lg:p-12 ${item.className}`} key={item.title}>
              {item.title === "Residential" && <div className={"absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -z-10 transition-all group-hover:w-full group-hover:h-full group-hover:rounded-none"}></div>}
              <div className={"w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors"}>
                <span className={"material-symbols-outlined text-4xl text-primary group-hover:text-white"}>{item.icon}</span>
              </div>
              <h4 className={"mb-4 text-xl font-black text-on-surface sm:text-2xl"}>{item.title}</h4>
              <p className={`text-sm leading-relaxed text-on-surface-variant sm:text-base ${item.maxWidth}`}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeProjectsSection({
  portfolioApi,
  residentialProjects,
  setPortfolioApi,
}: {
  portfolioApi: CarouselApi | undefined;
  residentialProjects: typeof PROJECT_LISTING_ITEMS;
  setPortfolioApi: (api: CarouselApi) => void;
}) {
  return (
    <section className={"relative bg-white py-12 sm:py-section-gap"}>
      <div className={"absolute top-0 left-0 h-40 w-full bg-linear-to-b from-background to-transparent"}></div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10"}>
        <div className={"mb-10 md:mb-16"}>
          <span className={"text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"}>Portfolio</span>
          <div className={"flex flex-col md:flex-row justify-between items-start md:items-end gap-8"}>
            <h2 className={"font-headline-lg max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-[2.75rem]"}>
              Our Construction <span className={"text-primary "}>Projects</span>
            </h2>
            <Link className={"group flex items-center gap-3 text-primary font-black text-sm md:text-base hover:gap-5 transition-all bg-white px-6 md:px-8 py-3.5 md:py-4 rounded-full shadow-md"} to={"/projects"}>
              Explore All
              <span className={"material-symbols-outlined"}>arrow_forward</span>
            </Link>
          </div>
        </div>
        <div className={"relative group/slider"}>
          <Carousel opts={{ align: "start", loop: true }} setApi={setPortfolioApi}>
            <CarouselContent className={"ml-0"}>
              {residentialProjects.map((project) => {
                const meta = residentialMeta[project.slug] ?? {
                  status: project.status,
                  location: "Puducherry",
                  builtUp: "To be confirmed",
                };

                return (
                  <CarouselItem className={"pl-0 md:pl-4 md:basis-1/2 lg:basis-1/3"} key={project.slug}>
                    <article className={"group/card relative h-107.5 overflow-hidden rounded-[2rem] border border-outline-variant/20 shadow-xl sm:h-125 sm:rounded-[2.5rem]"}>
                      <img alt={project.title} className={"absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"} src={project.image} />
                      <div className={"absolute inset-0 bg-linear-to-t from-on-surface/80 via-transparent to-transparent"}></div>
                      <div className={`absolute top-6 left-6 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-20 ${meta.status === "Ongoing" ? "bg-secondary-container" : "bg-primary"}`}>
                        {meta.status}
                      </div>
                      <div className={"absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl transition-all duration-500 group-hover/card:-translate-y-2 sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-3xl sm:p-8"}>
                        <div className={"flex items-center gap-2 text-white/80 text-[10px] mb-2 uppercase tracking-widest font-bold"}>
                          <span className={"material-symbols-outlined text-primary text-sm"}>location_on</span>
                          {meta.location}
                        </div>
                        <h4 className={"font-black text-xl text-white mb-4 sm:text-2xl"}>{project.title}</h4>
                        <div className={"flex justify-between items-end gap-4"}>
                          <div>
                            <p className={"text-[8px] uppercase font-bold text-white/60 mb-1 tracking-widest"}>Built Up</p>
                            <p className={"font-black text-sm text-primary"}>{meta.builtUp}</p>
                          </div>
                          <Link className={"rounded-full bg-white px-3 py-2 text-[10px] font-black uppercase tracking-widest text-on-surface transition-all hover:bg-primary hover:text-white sm:px-4"} params={{ projectSlug: project.slug }} to={"/projects/$projectSlug"}>
                            View Project
                          </Link>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          <div className={"flex justify-center gap-3 md:gap-4 mt-6 md:mt-8"}>
            <button className={"w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg"} onClick={() => portfolioApi?.scrollPrev()} type={"button"}>
              <span className={"material-symbols-outlined"}>west</span>
            </button>
            <button className={"w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg"} onClick={() => portfolioApi?.scrollNext()} type={"button"}>
              <span className={"material-symbols-outlined"}>east</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeTestimonialsSection({
  setTestimonialApi,
  testimonialApi,
}: {
  setTestimonialApi: (api: CarouselApi) => void;
  testimonialApi: CarouselApi | undefined;
}) {
  return (
    <section className={"relative overflow-visible bg-surface py-12 sm:py-section-gap"}>
      <div className={"absolute top-1/2 left-0 w-full h-2/3 bg-primary/5 -skew-y-3 -z-10"}></div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"mb-16"}>
          <span className={"text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"}>Testimonials</span>
          <h2 className={"font-headline-lg text-3xl font-black sm:text-4xl lg:text-[2.75rem]"}>Client Real <span className={"text-primary "}>Stories</span></h2>
        </div>
        <div className={"relative"}>
          <Carousel className={"testimonial-video-container"} opts={{ align: "start", loop: true }} setApi={setTestimonialApi}>
            <CarouselContent className={"ml-0"}>
              {testimonialHighlights.map((item, index) => (
                <CarouselItem key={item.title} className={"pl-0 md:pl-4 md:basis-[92%] lg:basis-[88%]"}>
                  <div className={"testimonial-slide flex flex-col items-stretch overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-white shadow-2xl md:rounded-[3rem] lg:flex-row"}>
                    <div className={"w-full lg:w-3/5 aspect-video lg:h-auto relative group overflow-hidden"}>
                      <img alt={item.title} className={"w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"} src={testimonials[index].image} />
                    </div>
                    <div className={"relative flex w-full flex-col justify-center bg-surface-container-white p-6 md:p-10 lg:w-2/5 lg:p-12"}>
                      <span className={"material-symbols-outlined text-primary/10 text-7xl md:text-9xl absolute -top-3 right-4 md:right-8 leading-none -z-10"}>format_quote</span>
                      <h3 className={"relative mb-4 text-xl font-black leading-tight text-on-surface sm:text-2xl"}>{item.title}</h3>
                      <p className={"relative text-base font-medium leading-relaxed text-on-surface-variant sm:text-lg"}>{item.description}</p>
                      <div className={"relative mt-6 border-t border-outline-variant/20 pt-4"}>
                        <p className={"font-black text-on-surface"}>{testimonials[index].name}</p>
                        <p className={"mt-1 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-on-surface-variant"}>
                          <span className={"material-symbols-outlined text-sm"}>location_on</span>
                          {testimonials[index].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className={"flex justify-start gap-3 md:gap-4 mt-8 md:mt-10"}>
            <button className={"w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg"} onClick={() => testimonialApi?.scrollPrev()} type={"button"}>
              <span className={"material-symbols-outlined text-2xl md:text-3xl"}>west</span>
            </button>
            <button className={"w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg"} onClick={() => testimonialApi?.scrollNext()} type={"button"}>
              <span className={"material-symbols-outlined text-2xl md:text-3xl"}>east</span>
            </button>
          </div>
        </div>





      </div>
    </section>
  );
}

function HomeWhySection() {
  const items = [
    {
      title: "Dedicated Site Engineer",
      icon: "engineering",
      body: "A qualified professional on-site from foundation to finish, ensuring strict adherence to blueprints.",
    },
    {
      title: "Structured Timelines",
      icon: "analytics",
      body: "Phased scheduling with weekly reports to ensure your project stays on track and delivers on time.",
    },
    {
      title: "Structural Warranty",
      icon: "construction",
      body: "Financial transparency where you pay only for completed milestones, ensuring complete peace of mind.",
    },
  ] as const;

  return (
    <section className={"relative overflow-hidden bg-surface-container-low/60 py-12 sm:py-section-gap"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"mb-10 grid items-end gap-6 md:mb-14 md:gap-10 lg:grid-cols-12"}>
          <div className={"lg:col-span-8"}>
            <h2 className={"font-headline-lg mb-4 text-3xl font-black leading-tight sm:text-4xl md:mb-5 lg:text-[2.75rem]"}>Why <span className={"text-primary italic"}>Santhi Builders</span>?</h2>
            <p className={"text-sm sm:text-base md:text-lg text-on-surface-variant font-medium max-w-2xl"}>Traditional integrity meeting modern engineering precision at every milestone.</p>
          </div>
          <div className={"lg:col-span-4 text-left lg:text-right"}>
            <Link className={"px-6 md:px-8 py-3.5 md:py-4 bg-white border-2 border-primary text-primary font-black rounded-xl hover:bg-primary hover:text-white transition-all shadow-xl inline-flex"} to={"/services"}>Explore All Features</Link>
          </div>
        </div>
        <div className={"relative z-20 grid items-stretch gap-5 md:grid-cols-3 md:gap-7 lg:gap-8"}>
          {items.map((item) => (
            <div className={"card-interactive group h-full rounded-[2rem] border border-outline-variant/30 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 md:rounded-[2.5rem] lg:p-10"} key={item.title}>
              <div className={"w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform"}>
                <span className={"material-symbols-outlined text-4xl text-primary"}>{item.icon}</span>
              </div>
              <h4 className={"font-black text-lg md:text-xl mb-4 md:mb-5"}>{item.title}</h4>
              <p className={"text-on-surface-variant text-sm md:text-base leading-relaxed opacity-80"}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeComplianceSection() {
  const steps = [
    { icon: "edit_document", title: "Plan", description: "Start with your site, scope, priorities and timeline." },
    { icon: "architecture", title: "Design", description: "Shape the layout and details around how you will use the space." },
    { icon: "construction", title: "Build", description: "Coordinate the work on site with attention to the agreed plan." },
    { icon: "key", title: "Handover", description: "Review the completed work and prepare for the next chapter." },
  ] as const;

  return (
    <section className={"relative overflow-hidden border-y border-outline-variant/30 bg-surface-container-low py-12 sm:py-16"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center mb-7 md:mb-10"}>
        <span className={"text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-4 block"}>A straightforward process</span>
        <h3 className={"text-2xl sm:text-3xl md:text-4xl font-black text-on-surface"}>From your first idea to a finished build</h3>
      </div>
      <div className={"mx-auto grid max-w-container-max grid-cols-1 gap-4 px-margin-mobile sm:grid-cols-2 md:gap-6 md:px-gutter lg:grid-cols-4"}>
        {steps.map((step, index) => (
          <article className={"relative rounded-2xl border border-outline-variant/30 bg-white p-6 shadow-sm sm:p-7"} key={step.title}>
            <span className={"text-xs font-black uppercase tracking-[0.2em] text-secondary"}>0{index + 1}</span>
            <span className={"material-symbols-outlined mt-5 block text-3xl text-primary"}>{step.icon}</span>
            <h4 className={"mt-4 text-xl font-black text-on-surface"}>{step.title}</h4>
            <p className={"mt-2 text-sm text-on-surface-variant"}>{step.description}</p>
          </article>
        ))}
      </div>
    </section>




  );
}

function HomeTrustedClientsSection() {
  return (
    <section className={"relative overflow-hidden border-y border-outline-variant/10 bg-white py-8 sm:py-12"}>
      <div className={"absolute -left-12 top-1/2 -translate-y-1/2 w-44 h-44 bg-primary/5 rounded-full blur-3xl"}></div>
      <div className={"absolute -right-12 top-1/2 -translate-y-1/2 w-44 h-44 bg-secondary-container/10 rounded-full blur-3xl"}></div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center mb-5 md:mb-7 relative z-10"}>
        <span className={"text-primary font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-3 block"}>Our Vendors</span>
        <h2 className={"font-headline-lg mb-2 text-2xl font-black leading-tight text-on-surface sm:text-3xl md:mb-3 md:text-4xl lg:text-[2.75rem]"}>Brands That Build <span className={"text-primary italic"}>With Us</span></h2>
        <p className={"text-sm sm:text-base md:text-lg text-on-surface-variant max-w-xl mx-auto"}>We are proud to partner with these Brands across India.</p>
      </div>
      <div className={"relative overflow-hidden max-w-container-max mx-auto px-margin-mobile md:px-gutter z-10"}>
        <div>
          <div className={"logo-scroll"}>
            {[...trustedClientLogos, ...trustedClientLogos].map((logo, index) => (
              <div aria-hidden={index >= trustedClientLogos.length} className={"flex w-36 items-center justify-center border-x border-outline-variant/10 px-4 sm:w-52 sm:px-8 lg:w-72 lg:px-12"} key={`${logo.alt}-${index}`}>
                <img alt={logo.alt} className={`${logo.heightClass} w-auto object-contain`} src={logo.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeSocialSection() {
  const themes = {
    instagram: {
      label: "text-[#d62976]",
      ring: "from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      button: "bg-gradient-to-r from-[#f9a826] via-[#ed2a7b] to-[#7b2fc9] shadow-[#ed2a7b]/20 hover:shadow-[#ed2a7b]/35",
      divider: "from-[#f9a826] to-[#7b2fc9]",
    },
    facebook: {
      label: "text-[#1877f2]",
      ring: "from-[#74a8ff] to-[#0866ff]",
      button: "bg-gradient-to-r from-[#1877f2] to-[#0756c9] shadow-[#1877f2]/20 hover:shadow-[#1877f2]/35",
      divider: "from-[#74a8ff] to-[#0866ff]",
    },
    youtube: {
      label: "text-[#e62117]",
      ring: "from-[#ff675e] to-[#e62117]",
      button: "bg-gradient-to-r from-[#ff2920] to-[#c90000] shadow-[#e62117]/20 hover:shadow-[#e62117]/35",
      divider: "from-[#ff675e] to-[#e62117]",
    },
  } as const;

  return (
    <section className="relative overflow-hidden bg-surface-container-low/45 py-section-gap">
      <div className="pointer-events-none absolute -right-20 top-0 size-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative mx-auto max-w-container-max px-margin-mobile md:px-gutter">
        <div className="reveal mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary sm:text-xs">
            Follow along
          </span>
          <h2 className="mt-3 text-3xl font-black leading-tight text-on-surface sm:text-4xl md:text-5xl">
            Find us on social media
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base md:text-lg">
            Follow our channels for project inspiration, updates and a closer look at our work.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {socialProfiles.map(({ name, handle, href, action, description, Icon, accent }, index) => {
            const theme = themes[accent];

            return (
              <article
                className="reveal group relative flex flex-col items-center overflow-hidden rounded-3xl border border-outline-variant/25 border-t-4 bg-white p-6 text-center shadow-[0_18px_48px_-32px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_56px_-30px_rgba(15,23,42,0.32)] sm:p-8"
                key={name}
                style={{ borderTopColor: accent === "instagram" ? "#e1306c" : accent === "facebook" ? "#1877f2" : "#e62117", transitionDelay: `${index * 100}ms` }}
              >
                <div className={`flex size-[76px] items-center justify-center rounded-full bg-gradient-to-br p-1 ${theme.ring}`}>
                  <div className="flex size-full items-center justify-center rounded-full bg-white">
                    <Icon aria-hidden="true" className={`size-9 ${theme.label}`} strokeWidth={2.2} />
                  </div>
                </div>
                <p className={`mt-5 text-[10px] font-black uppercase tracking-[0.25em] ${theme.label}`}>
                  {name}
                </p>
                <h3 className="mt-2 break-all text-xl font-black text-on-surface sm:text-2xl">{handle}</h3>
                <div className={`my-5 h-1 w-14 rounded-full bg-gradient-to-r ${theme.divider}`} />
                <p className="min-h-12 text-sm leading-relaxed text-on-surface-variant">{description}</p>
                <a
                  className={`mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-extrabold text-white shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl ${theme.button}`}
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon aria-hidden="true" className="size-5" strokeWidth={2.4} />
                  {action}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HomeEstimatorSection() {
  return (
<section className="relative my-2 w-full overflow-hidden border-y border-white/10 py-10 shadow-2xl sm:my-4 sm:py-14">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="../images/pondy.png"
      alt="Pondicherry coastline"
      className="h-full w-full object-cover object-center"
    />
    <div aria-hidden="true" className="absolute inset-0 bg-[#08111f]/55"></div>
  </div>

  {/* Dark Overlay */}
  {/* <div className="absolute inset-0 bg-primary/70"></div> */}

  {/* Decorative Effects */}
  <div className="absolute -top-24 -right-24 md:-top-32 md:-right-32 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>

  {/* Content */}
  <div className="max-w-container-max mx-auto px-5 md:px-8 lg:px-12 relative z-10 text-white">
    <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-12 lg:gap-10">

      <div className="lg:col-span-8 text-center lg:text-left">

        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 md:mb-5">
          <span className="material-symbols-outlined text-sm">calculate</span>
          Instant Cost Planning
        </span>

        <h2 className="font-headline-lg mb-4 text-3xl font-black leading-tight sm:text-4xl md:mb-5 md:text-5xl">
          Plan Your Home Construction Budget With
          <span className="italic text-primary-container"> Confidence</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-2xl leading-relaxed mx-auto lg:mx-0">
          Get a quick estimate of your home construction cost based on your built-up area, material preferences and project requirements. Plan your budget before starting your construction journey.
        </p>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mt-5 md:mt-6">

          <Link
            className="bg-secondary-container text-on-secondary px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-black text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-lg inline-flex items-center gap-3"
            to="/estimate-calculator"
          >
            Cost Calculator
            <span className="material-symbols-outlined font-black">calculate</span>
          </Link>

          <span className="text-xs md:text-sm text-white/80 font-semibold">
            Starts from Rs.2,549/sq.ft
          </span>

        </div>
      </div>

    </div>
  </div>
</section>
  );
}

function HomeFaqSection() {
  return (
    <section className={"bg-surface px-margin-mobile pb-12 pt-10 sm:pb-16 sm:pt-12 md:px-gutter"}>
      <div className={"mx-auto max-w-4xl"}>
        <div className={"flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12 text-center mx-auto max-w-3xl"}>
          <div className={"w-full"}>
            <h2 className={"font-headline-lg mb-5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl"}>FAQ <br /><span className={"text-primary italic"}>Questions</span></h2>
            <div className={"w-24 h-2 bg-primary mb-6 mx-auto rounded-full"}></div>
            <p className={"text-base sm:text-lg text-on-surface-variant font-medium"}>Clear answers for your construction journey.</p>
          </div>
        </div>
        <div className={"space-y-6"}>
          {faqItems.map((item, index) => (
            <details className={"group bg-white rounded-[2rem] border border-outline-variant/30 overflow-hidden shadow-md"} key={item.question} open={index === 0}>
              <summary className={"flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-base font-black transition-colors group-open:text-primary sm:p-8 sm:text-xl"}>
                {` ${item.question} `}
                <span className={"material-symbols-outlined group-open:rotate-180 transition-transform bg-primary/10 p-2 rounded-full"}>expand_more</span>
              </summary>
              <div className={"border-t border-outline-variant/10 px-5 pb-6 pt-5 text-base leading-relaxed text-on-surface-variant sm:px-8 sm:pb-8 sm:pt-6 sm:text-lg"}>{` ${item.answer} `}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
