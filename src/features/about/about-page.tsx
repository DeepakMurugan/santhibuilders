import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const supportPhone = "+91 88386 11658";
const supportTel = "tel:+918838611658";
const supportWhatsapp = "https://wa.me/918838611658";

const heroSlides = [
  {
    image: "/images/excellence.jpg",
    badge: "Established 29 July 2019",
    titlePrimary: "Built around",
    titleAccent: "your plans.",
    titleSuffix: "",
    description:
      "Construction, design and project support to help you create a space that feels considered from the first drawing to the finishing details.",
  },
  {
    image: "/images/highrise.jpg",
    badge: "Planning to handover",
    titlePrimary: "A clear process.",
    titleAccent: "A considered build.",
    titleSuffix: "",
    description:
      "Explore a connected range of services for residential and commercial projects, with each stage shaped around your requirements.",
  },
  {
    image: "/images/steel-detail.jpg",
    badge: "Made for real life",
    titlePrimary: "Good work",
    titleAccent: "starts on site.",
    titleSuffix: "",
    description:
      "Practical coordination and careful attention to the details help turn drawings into spaces made for everyday use.",
  },
] as const;

export function AboutPage() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useReveal();

  const currentSlide = heroSlides[activeHeroSlide];

  return (
    <>
      <AboutHeroSection activeHeroSlide={activeHeroSlide} currentSlide={currentSlide} onPrev={() => setActiveHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)} onNext={() => setActiveHeroSlide((current) => (current + 1) % heroSlides.length)} onSelectSlide={setActiveHeroSlide} />
      <AboutLegacySection />
      <AboutBlueprintSection />
      <AboutTeamSection />
      <AboutCtaSection />
    </>
  );
}

function AboutHeroSection({ activeHeroSlide, currentSlide, onPrev, onNext, onSelectSlide }: { activeHeroSlide: number; currentSlide: (typeof heroSlides)[number]; onPrev: () => void; onNext: () => void; onSelectSlide: (index: number) => void; }) {
  return (
    <header className={"relative h-[72vh] min-h-[500px] md:h-[84vh] md:min-h-[620px] flex items-center overflow-hidden"}>
      <div className={"absolute inset-0 z-0"}>
        {heroSlides.map((slide, index) => (
          <div key={slide.badge} className={`absolute inset-0 transition-opacity duration-700 ${index === activeHeroSlide ? "opacity-100" : "opacity-0"}`}>
            <div className={"w-full h-full bg-cover bg-center scale-105"} style={{ backgroundImage: `url('${slide.image}')` }}></div>
          </div>
        ))}
        <div className={"absolute inset-0 bg-gradient-to-r from-on-surface via-on-surface/60 to-transparent"}></div>
        <div className={"blueprint-pattern absolute inset-0 opacity-10"}></div>
      </div>
      <div className={"relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full"}>
        <div className={"max-w-3xl space-y-6 md:space-y-8 hero-reveal"}>
          <div className={"inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-surface-container-high backdrop-blur-md sm:tracking-[0.3em]"}>
            <span className={"size-2 rounded-full bg-secondary-container"}></span>
            {` ${currentSlide.badge} `}
          </div>
          <h1 className={"text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight"}>
            {` ${currentSlide.titlePrimary} `}
            <br />
            <span className={"text-primary-container"}>{currentSlide.titleAccent}</span>
            {` ${currentSlide.titleSuffix} `}
          </h1>
          <p className={"text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-medium max-w-2xl"}>{` ${currentSlide.description} `}</p>
          <div className={"flex flex-wrap gap-4 md:gap-6 pt-3"}>
            <Link className={"bg-primary text-white px-7 md:px-10 py-3.5 md:py-5 rounded-lg font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-primary-container transition-all shadow-xl flex items-center gap-3"} to={"/projects"}>
              {" "}View Portfolio{" "}
              <span className={"material-symbols-outlined text-lg"}>arrow_forward</span>
            </Link>
          </div>
          <div className={"flex items-center gap-3 pt-2"}>
            <button aria-label={"Previous slide"} className={"w-10 h-10 rounded-full border border-white/35 text-white/90 hover:bg-white hover:text-on-surface transition-colors flex items-center justify-center"} onClick={onPrev} type={"button"}><span className={"material-symbols-outlined text-lg"}>west</span></button>
            <button aria-label={"Next slide"} className={"w-10 h-10 rounded-full border border-white/35 text-white/90 hover:bg-white hover:text-on-surface transition-colors flex items-center justify-center"} onClick={onNext} type={"button"}><span className={"material-symbols-outlined text-lg"}>east</span></button>
            <div className={"flex items-center gap-2 pl-2"}>
              {heroSlides.map((slide, index) => (
                <button aria-label={`Go to slide ${index + 1}`} className={`h-2 rounded-full transition-all ${index === activeHeroSlide ? "w-8 bg-primary-container" : "w-2 bg-white/45 hover:bg-white/75"}`} key={slide.badge} onClick={() => onSelectSlide(index)} type={"button"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutLegacySection() {
  return (
    <section className={"py-section-gap bg-white relative overflow-hidden"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10"}>
        <div className={"grid items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20"}>
          <div className={"space-y-6 md:space-y-8"}>
            <span className={"text-primary font-black uppercase tracking-[0.3em] text-[10px] block border-l-4 border-primary pl-4"}>Our story</span>
            <h2 className={"text-4xl font-black leading-tight text-on-surface sm:text-5xl md:text-6xl"}>Considered design. <span className={"text-primary"}>Careful construction.</span></h2>
            <div className={"space-y-4 text-base font-medium leading-relaxed text-on-surface-variant sm:text-lg"}>
              <p>Santhi Builders was established on 29 July 2019. We work across planning, design, construction and project support to help turn building ideas into practical spaces.</p>
              <p>Every project starts with understanding the brief and making the next steps clear, from early drawings through work on site.</p>
            </div>
            <div className={"flex flex-wrap items-center gap-4 border-t border-outline-variant/30 pt-6"}>
              <span className={"material-symbols-outlined flex size-12 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary"}>calendar_month</span>
              <div>
                <p className={"text-xl font-black text-on-surface"}>29 July 2019</p>
                <p className={"text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant"}>The day Santhi Builders began</p>
              </div>
            </div>
          </div>
          <div className={"relative overflow-hidden rounded-3xl shadow-2xl"}>
            <img alt={"Contemporary home built with considered architectural details"} className={"aspect-[4/3] w-full object-cover"} src={"/images/excellence.jpg"} />
            <div className={"absolute inset-0 bg-gradient-to-t from-[#08111f]/70 via-transparent to-transparent"}></div>
            <p className={"absolute bottom-5 left-5 right-5 text-lg font-bold text-white sm:bottom-8 sm:left-8 sm:right-8 sm:text-2xl"}>Spaces shaped around the people who use them.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBlueprintSection() {
  const steps = [
    { step: "Step 01", icon: "forum", title: "Consultation", body: "Deep dive into requirements, budget analysis, and feasibility studies." },
    { step: "Step 02", icon: "architecture", title: "Design", body: "Architectural blueprints, 3D visualizations, and interior planning." },
    { step: "Step 03", icon: "construction", title: "Execution", body: "Civil works, structural erection, and systematic site development." },
    { step: "Step 04", icon: "fact_check", title: "Quality Review", body: "Review key work stages and finishes against the agreed project details." },
    { step: "Step 05", icon: "key", title: "Delivery", body: "Final walkthrough, documents handover, and aftercare onboarding." },
  ] as const;

  return (
    <section className={"py-section-gap bg-surface-container-low relative overflow-hidden"}>
      <div className={"blueprint-pattern absolute inset-0 opacity-10"}></div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10"}>
        <div className={"flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8 md:gap-10"}>
          <div className={"max-w-2xl"}>
            <span className={"text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block border-l-4 border-primary pl-4"}>Execution Framework</span>
            <h2 className={"text-5xl md:text-6xl font-black text-on-surface leading-tight"}>The Santhi <br /><span className={"text-primary"}>Blueprint.</span></h2>
          </div>
          <p className={"text-on-surface-variant font-medium md:max-w-sm text-lg leading-relaxed"}>{" "}A clear sequence for moving from your project brief through design, construction and handover.{" "}</p>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"}>
          {steps.map((item) => (
            <div className={"card-advanced rounded-2xl border border-outline-variant/30 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-8 lg:p-7"} key={item.title}>
              <div className={"text-[10px] font-black text-primary tracking-[0.3em] mb-8 block uppercase"}>{item.step}</div>
              <div className={"w-16 h-16 bg-surface-container-low rounded-xl flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500"}>
                <span className={"material-symbols-outlined text-primary group-hover:text-white text-3xl"}>{item.icon}</span>
              </div>
              <h4 className={"text-xl font-black mb-4"}>{item.title}</h4>
              <p className={"text-sm text-on-surface-variant leading-relaxed font-medium"}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutTeamSection() {
  const priorities = [
    { icon: "rule", title: "Clear scope", body: "Start by discussing your site, requirements and the work you want to take on." },
    { icon: "architecture", title: "Practical planning", body: "Bring design decisions and project details into view before work progresses." },
    { icon: "handyman", title: "Careful execution", body: "Keep the agreed plans and finishing details in focus as the project takes shape." },
  ] as const;

  return (
    <section className={"relative overflow-hidden bg-[#101c2b] py-section-gap text-white"}>
      <div className={"absolute inset-0 opacity-15"} style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"relative mb-10 max-w-3xl md:mb-14"}>
          <div className={"max-w-2xl"}>
            <span className={"mb-5 block border-l-4 border-secondary-container pl-4 text-[10px] font-black uppercase tracking-[0.3em] text-secondary-container"}>The way we work</span>
            <h2 className={"text-4xl font-black leading-tight sm:text-5xl md:text-6xl"}>The details make <span className={"text-secondary-container"}>the difference.</span></h2>
            <p className={"mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"}>A well-managed build is made of many considered decisions. We keep the brief, design and site work connected throughout the project.</p>
          </div>
        </div>
        <div className={"relative grid gap-4 md:grid-cols-3 md:gap-6"}>
          {priorities.map((item, index) => (
            <article className={"rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"} key={item.title}>
              <span className={"text-xs font-black uppercase tracking-[0.2em] text-secondary-container"}>0{index + 1}</span>
              <span className={"material-symbols-outlined mt-5 block text-3xl text-secondary-container"}>{item.icon}</span>
              <h3 className={"mt-4 text-xl font-black sm:text-2xl"}>{item.title}</h3>
              <p className={"mt-3 text-sm leading-relaxed text-white/70 sm:text-base"}>{item.body}</p>
            </article>
          ))}
        </div>
        <div className={"relative mt-8"}>
          <Link className={"inline-flex items-center gap-3 rounded-lg bg-secondary-container px-6 py-3.5 text-sm font-black text-on-secondary transition-colors hover:bg-white hover:text-on-surface"} to={"/services"}>
            Explore our services
            <span className={"material-symbols-outlined text-lg"}>arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutCtaSection() {
  return (
    <section className={"relative overflow-hidden bg-primary py-section-gap text-white"}>
      <div className={"blueprint-pattern absolute inset-0 opacity-20"}></div>
      <div className={"absolute -top-28 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"}></div>
      <div className={"absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-secondary-container/20 blur-3xl"}></div>
      <div className={"relative z-10 mx-auto max-w-5xl px-margin-mobile md:px-gutter"}>
        <div className={"space-y-7 rounded-[2rem] border border-white/20 bg-white/10 px-6 py-10 text-center shadow-2xl backdrop-blur-xl md:space-y-9 md:rounded-[2.5rem] md:px-12 md:py-14"}>
          <div className={"inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/15 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] md:text-xs"}><span className={"material-symbols-outlined text-sm md:text-base"}>handshake</span><span>Start with a conversation</span></div>
          <h2 className={"text-3xl font-black leading-[1.1] sm:text-4xl md:text-6xl"}>Have a project in mind?</h2>
          <p className={"mx-auto max-w-3xl text-base font-medium leading-relaxed opacity-95 sm:text-lg md:text-xl"}>Tell us what you are planning. We can help you explore the services and next steps that fit your project.</p>
          <div className={"flex flex-col justify-center gap-4 pt-2 sm:flex-row md:gap-6"}>
            <a className={"inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-primary transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:w-auto md:px-12 md:py-5 md:text-base"} href={supportTel}><span className={"material-symbols-outlined text-lg"}>call</span><span>Schedule a call</span></a>
            <a className={"inline-flex w-full items-center justify-center gap-3 rounded-xl bg-secondary-container px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-on-secondary transition-all duration-500 hover:-translate-y-1 hover:brightness-95 sm:w-auto md:px-12 md:py-5 md:text-base"} href={supportWhatsapp} rel={"noreferrer"} target={"_blank"}><span className={"material-symbols-outlined text-lg"}>chat</span><span>WhatsApp us</span></a>
          </div>
          <div className={"flex flex-col items-center justify-center gap-2 text-white/90 sm:flex-row sm:gap-4"}><span className={"text-[10px] font-black uppercase tracking-[0.32em] text-white/60 md:text-xs"}>Direct assistance</span><a className={"text-lg font-extrabold tracking-wide transition-colors hover:text-secondary-container md:text-2xl"} href={supportTel}>{supportPhone}</a></div>
        </div>
      </div>
    </section>
  );
}