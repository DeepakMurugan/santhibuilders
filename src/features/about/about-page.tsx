import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

const supportWhatsapp = "https://wa.me/918838611658";

const heroSlides = [
  {
    image: "/images/hero1.jpeg",
    badge: "Idea to Identity",
        titlePrimary: "Santhi Builders",
        titleAccent: "Best Residential Company in Pondicherry",

    titleSuffix: "",
    description:
      "Construction, design and project support to help you create a space that feels considered from the first drawing to the finishing details.",
  },
  {
    image: "/images/hero2.jpeg",
    badge: "Planning to handover",
    titlePrimary: "Santhi Builders",
    titleAccent: "Best Residential Company in Pondicherry",
   titleSuffix: "",
    description:
      "Explore a connected range of services for residential and commercial projects, with each stage shaped around your requirements.",
  },
  {
    image: "/images/hero3.jpeg",
    badge: "Made for real life",
    titlePrimary: "Santhi Builders",
    titleAccent: "Best Residential Company in Pondicherry",
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
      <AboutPrestigiousProjectsSection />
      <AboutPeopleSection />
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
            <h2 className={"text-4xl font-black leading-tight text-on-surface sm:text-5xl md:text-6xl"}>Santhi Builders  <span className={"text-primary"}>Your Partner in Turning Dreams into Reality.</span></h2>
            <div className={"space-y-4 text-base font-medium leading-relaxed text-on-surface-variant sm:text-lg"}>
              <p>Building your dream home should be a well-planned and hassle-free experience. At Santhi Builders, we follow a structured construction process that ensures every stage is handled with care, transparency and attention to detail.</p>
              <p>200+ Homes, Commercial Buildings Delivered across Pondicherry, Santhi Builders combines thoughtful planning, reliable construction and quality craftsmanship to bring your dream home to life. </p>
            </div>
           
            {/* <div className={"flex flex-wrap items-center gap-4 border-t border-outline-variant/30 pt-6"}>
              <span className={"material-symbols-outlined flex size-12 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary"}>calendar_month</span>
              <div>
                <p className={"text-xl font-black text-on-surface"}>29 July 2019</p>
                <p className={"text-xs font-bold uppercase tracking-[0.18em] text-on-surface-variant"}>The day Santhi Builders began</p>
              </div>
            </div> */}

          </div>
          <div className={"relative overflow-hidden rounded-3xl shadow-2xl"}>
            <img alt={"Contemporary home built with considered architectural details"} className={"aspect-[4/3] w-full object-cover"} src={"/images/ab.jpeg"} />
            <div className={"absolute inset-0 bg-gradient-to-t from-[#08111f]/70 via-transparent to-transparent"}></div>
            {/* <p className={"absolute bottom-5 left-5 right-5 text-lg font-bold text-white sm:bottom-8 sm:left-8 sm:right-8 sm:text-2xl"}>Spaces shaped around the people who use them.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutBlueprintSection() {
  const steps = [
    { step: "Step 01", icon: "forum", title: "Plan", body: "We begin by understanding your requirements, budget, plot details and expectations to create a clear construction plan." },
    { step: "Step 02", icon: "architecture", title: "Design", body: "Our team develops functional layouts and thoughtful designs that reflect your lifestyle, preferences and space requirements." },
    { step: "Step 03", icon: "construction", title: "Build", body: "From foundation to finishing, we manage every stage of construction with quality materials, skilled workmanship and proper supervision." },
    { step: "Step 04", icon: "fact_check", title: "Handover", body: "We conduct a final inspection, review the completed work and hand over your home, ready for a new beginning." },
  ] as const;

  return (
    <section className={"py-section-gap bg-surface-container-low relative overflow-hidden"}>
      <div className={"blueprint-pattern absolute inset-0 opacity-10"}></div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10"}>
        <div className={"flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8 md:gap-10"}>
          <div className={"max-w-2xl"}>
            <span className={"text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block border-l-4 border-primary pl-4"}>Execution Framework</span>
            <h2 className={"text-5xl md:text-6xl font-black text-on-surface leading-tight"}>Santhi Builders Construction Process <br /><span className={"text-primary"}>From Vision to Reality.</span></h2>
          </div>
          <p className={"text-on-surface-variant font-medium md:max-w-sm text-lg leading-relaxed"}>{" "}A clear sequence for moving from your project brief through design, construction and handover.{" "}</p>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
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

function AboutPrestigiousProjectsSection() {
  const projectLogos = [
    { alt: "Partner 1", src: "/images/mah.png" },
    { alt: "Partner 2", src: "/images/fan.png" },
    { alt: "Partner 3", src: "/images/clg.png" },
  ] as const;

  return (
    <section aria-labelledby={"prestigious-projects-title"} className={"relative isolate overflow-hidden bg-[#101c2b] py-16 text-white sm:py-20"}>
      <div aria-hidden={"true"} className={"absolute -left-24 top-0 size-72 rounded-full bg-primary/20 blur-3xl"} />
      <div aria-hidden={"true"} className={"absolute -right-24 bottom-0 size-72 rounded-full bg-sky-400/15 blur-3xl"} />
      <div className={"relative mx-auto mb-9 max-w-container-max px-margin-mobile text-center md:mb-12 md:px-gutter"}>
        <span className={"mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-sky-300 sm:text-xs"}>
          <span aria-hidden={"true"} className={"size-1.5 rounded-full bg-sky-400"} />
          Trusted collaborations
        </span>
        <h2 className={"text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl"} id={"prestigious-projects-title"}>
          Our <span className={"text-sky-300"}>Prestigious Projects</span>
        </h2>
        <p className={"mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base"}>
          Built on trusted partnerships and a shared commitment to quality.
        </p>
      </div>
      <div className={"relative z-10 mx-auto max-w-container-max overflow-hidden px-margin-mobile md:px-gutter"}>
        <div className={"logo-scroll"}>
          {[false, true].map((isDuplicate) => (
            <div aria-hidden={isDuplicate} className={"flex flex-shrink-0"} key={String(isDuplicate)}>
              {projectLogos.map((logo) => (
                <div
                  className={"group mx-2 flex h-28 w-40 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white px-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:mx-3 sm:h-32 sm:w-56 sm:px-8 md:w-64"}
                  key={logo.alt}
                >
                  <img alt={logo.alt} className={"max-h-20 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-24"} decoding={"async"} src={logo.src} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPeopleSection() {
  const teamMembers = [
    { name: "Lokesh Raj", designation: "Founder & CEO", image: "/images/team/founder.png" },
    { name: "Boobalan G", designation: "Quantity Surveyor & CAD Engineer", image: "/images/team/t1.png" },
        { name: "Ravikumar S", designation: "Senior Site Engineer", image: "/images/team/t4.png" },
    { name: "Prakash T", designation: "Site Engineer", image: "/images/team/t5.png" },

        { name: "Shanthapriya H", designation: "Front Office & Admin Executive", image: "/images/team/t3.png" },

    { name: "Vasanthakumar M", designation: "Supervisor", image: "/images/team/t2.png" },
  ] as const;

  return (
    <section className={"bg-white py-section-gap"}>
      <div className={"mx-auto max-w-container-max px-margin-mobile md:px-gutter"}>
        <div className={"mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between"}>
          <div className={"max-w-2xl"}>
            <span className={"mb-5 block border-l-4 border-primary pl-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary"}>The people behind the work</span>
            <h2 className={"text-4xl font-black leading-tight text-on-surface sm:text-5xl md:text-6xl"}>Meet our <span className={"text-primary"}>team.</span></h2>
          </div>
          <p className={"max-w-xl text-base leading-relaxed text-on-surface-variant sm:text-lg"}>Meet the people who bring every project together with expertise, care and commitment.</p>
        </div>
        <div className={"grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6"}>
          {teamMembers.map((member) => (
            <article className={"group overflow-hidden rounded-2xl border border-outline-variant/30 bg-white shadow-sm transition-shadow hover:shadow-xl"} key={member.name}>
              <div className={"aspect-[4/5] overflow-hidden bg-surface-container-low"}>
                <img
                  alt={`${member.name}, ${member.designation}`}
                  className={"h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"}
                  decoding={"async"}
                  height={950}
                  loading={"lazy"}
                  src={member.image}
                  width={1080}
                />
              </div>
              <div className={"p-3 sm:p-5"}>
                <h3 className={"text-sm font-black text-on-surface sm:text-lg"}>{member.name}</h3>
                <p className={"mt-1 text-xs leading-relaxed text-on-surface-variant sm:text-sm"}>{member.designation}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCtaSection() {
  const [formState, setFormState] = useState({
    firstName: "",
    mobile: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });

  return (
    <section aria-labelledby={"about-enquiry-title"} className={"relative overflow-hidden bg-white py-14 sm:py-16 md:py-20"}>
      <div aria-hidden={"true"} className={"absolute -left-28 top-1/3 size-64 rounded-full bg-primary/5 blur-3xl"} />
      <div aria-hidden={"true"} className={"absolute -right-28 bottom-0 size-64 rounded-full bg-primary/5 blur-3xl"} />
      <div className={"relative mx-auto max-w-5xl px-margin-mobile md:px-gutter"}>
        <div className={"mb-8 text-center sm:mb-10"}>
          <h2 className={"text-2xl font-black leading-tight text-primary sm:text-3xl md:text-4xl"} id={"about-enquiry-title"}>
            Ready to Bring Your Vision to Life?
          </h2>
          <p className={"mt-2 text-sm text-on-surface-variant sm:text-base"}>
            Get a free consultation with our experts and start your project today.
          </p>
        </div>
        <form
          className={"rounded-2xl border border-outline-variant/30 bg-white p-5 shadow-[0_20px_60px_rgba(15,35,60,0.08)] sm:p-8 md:p-10"}
          onSubmit={(event) => {
            event.preventDefault();
            const message = [
              "Hello Santhi Builders, I would like to enquire about a project.",
              `Name: ${formState.firstName}`,
              `Mobile: +91 ${formState.mobile}`,
              `Email: ${formState.email || "-"}`,
              `Location: ${formState.location || "-"}`,
              `Service: ${formState.service}`,
              `Message: ${formState.message || "-"}`,
            ].join("\n");
            window.open(`${supportWhatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
          }}
        >
          <div className={"grid gap-x-10 sm:grid-cols-2"}>
            <label className={"block border-b border-outline-variant/50 py-3 focus-within:border-primary"}>
              <span className={"block text-xs font-bold text-on-surface"}>First Name</span>
              <input
                autoComplete={"given-name"}
                className={"mt-2 w-full bg-transparent text-sm text-on-surface outline-none placeholder:text-on-surface-variant/60"}
                name={"firstName"}
                onChange={(event) => setFormState((current) => ({ ...current, firstName: event.target.value }))}
                placeholder={"Enter your name"}
                required
                value={formState.firstName}
              />
            </label>
            <label className={"block border-b border-outline-variant/50 py-3 focus-within:border-primary"}>
              <span className={"block text-xs font-bold text-on-surface"}>Mobile</span>
              <span className={"mt-2 flex items-center gap-3 text-sm text-on-surface"}>
                <span aria-hidden={"true"}>🇮🇳</span>
                <span className={"border-r border-outline-variant pr-3 text-on-surface-variant"}>+91</span>
                <input
                  autoComplete={"tel-national"}
                  className={"min-w-0 flex-1 bg-transparent outline-none placeholder:text-on-surface-variant/60"}
                  inputMode={"tel"}
                  name={"mobile"}
                  onChange={(event) => setFormState((current) => ({ ...current, mobile: event.target.value }))}
                  placeholder={"Enter your mobile number"}
                  required
                  type={"tel"}
                  value={formState.mobile}
                />
              </span>
            </label>
            <label className={"block border-b border-outline-variant/50 py-3 focus-within:border-primary"}>
              <span className={"block text-xs font-bold text-on-surface"}>Email</span>
              <input
                autoComplete={"email"}
                className={"mt-2 w-full bg-transparent text-sm text-on-surface outline-none placeholder:text-on-surface-variant/60"}
                name={"email"}
                onChange={(event) => setFormState((current) => ({ ...current, email: event.target.value }))}
                placeholder={"Enter your email"}
                type={"email"}
                value={formState.email}
              />
            </label>
            <label className={"block border-b border-outline-variant/50 py-3 focus-within:border-primary"}>
              <span className={"block text-xs font-bold text-on-surface"}>Location</span>
              <input
                autoComplete={"address-level2"}
                className={"mt-2 w-full bg-transparent text-sm text-on-surface outline-none placeholder:text-on-surface-variant/60"}
                name={"location"}
                onChange={(event) => setFormState((current) => ({ ...current, location: event.target.value }))}
                placeholder={"Enter your area/city"}
                value={formState.location}
              />
            </label>
          </div>
          <fieldset className={"mt-6"}>
            <legend className={"text-xs font-bold text-on-surface"}>Service</legend>
            <div className={"mt-3 flex flex-wrap gap-x-5 gap-y-3"}>
              {["Construction", "Architecture", "Interior", "Renovation"].map((service) => (
                <label className={"inline-flex items-center gap-2 text-sm text-on-surface-variant"} key={service}>
                  <input
                    checked={formState.service === service}
                    className={"size-4 accent-primary"}
                    name={"service"}
                    onChange={() => setFormState((current) => ({ ...current, service }))}
                    required
                    type={"radio"}
                    value={service}
                  />
                  {service}
                </label>
              ))}
            </div>
          </fieldset>
          <label className={"mt-6 block border-b border-outline-variant/50 py-3 focus-within:border-primary"}>
            <span className={"block text-xs font-bold text-on-surface"}>Message</span>
            <textarea
              className={"mt-2 min-h-20 w-full resize-y bg-transparent text-sm text-on-surface outline-none placeholder:text-on-surface-variant/60"}
              name={"message"}
              onChange={(event) => setFormState((current) => ({ ...current, message: event.target.value }))}
              placeholder={"Write your message..."}
              rows={3}
              value={formState.message}
            />
          </label>
          <div className={"mt-7 flex justify-center"}>
            <button className={"w-full rounded-full border-2 border-primary bg-white px-8 py-3 text-sm font-black text-primary shadow-sm transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-2/3 md:w-1/2"} type={"submit"}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}