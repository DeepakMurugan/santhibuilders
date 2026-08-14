import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const supportPhone = "+91 88386 11658";
const supportTel = "tel:+918838611658";
const supportWhatsapp = "https://wa.me/918838611658";

const heroSlides = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuJkUxMSDrRQ37YlhHmlYGb0azVpYLFObzVksyH3CAqGDPfkZ-XpcJPz3wjw4cSrcAMnW9j2AjzP7GhhNGIe0CvjoTt5zF7mmm7gKdoaEnf3Gjr085l0e-GOa78xwXQ_hOwC9ZQUdTIQLU7sATxzGh4b-nrdlJ1oc-pByqKSP0Etd9lbVVhoiTAIn8D5KOP_mO_OUA9Mx5UeELTWj36rO23rbkojRh-1AVsaIj-sXv54a4nNz3tCz50T7mWroTjDsXBU31_OHI1sok",
    badge: "Since 1998",
    titlePrimary: "Engineering",
    titleAccent: "Structural",
    titleSuffix: "Legacies.",
    description:
      "At Santhi Builders, we don't just build structures; we craft environments that inspire, endure, and define the skylines of tomorrow through architectural precision.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhW9ynUfHU4LLvFwmJADMSM7OGgGatIMtJRRtfGCMiVHja6ZgxJYZyNEXISXIF0nNu7bp-skvU6zzxpZ12IvZVxpChP4FBaLamWntT8YhBugIl7dT8Vmho_LooZ0vWxjG9feOQr6WcjKrJ8zYWgrmosXQMxf3PMkxaPR90qdGgnOFnt4dg0Se4ytILotuKBQuCxNV-F5ZrKorI0NfNSNlR1KyEl8X68AC3bGFpAqMGOZSOKGIT-_WETmSR0IKxTKs-qV10e8u1aK_E",
    badge: "Precision First",
    titlePrimary: "Building",
    titleAccent: "Lasting",
    titleSuffix: "Trust.",
    description:
      "Every project is guided by disciplined engineering systems, transparent process tracking, and a quality culture trusted by families across Chennai.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAX7rnUnWsIPiY4wASpzn207-ilxML0hVzGfTd_d5ERjcxHOBDd7763Ly9ETPat6rQHmJxlW_hqqnNOZbF5KH0yRzMmw-qDGxHY7G6lXeIsJlA-pQJbI9hMQ03W5HbQulpgLiFcwR9CGGWOCSQMGR452FhBa4SL9y1pnEfvLTplT50ZlEMsxmyIqgbpupUkjnQGUq8lLHVr_J5POarf4lessfzyCylfUgkCszav2tl2O3oFOYkafF5KB0Kikir6HW7SzofsgDOjgtOX",
    badge: "Future Ready",
    titlePrimary: "Designing",
    titleAccent: "Smarter",
    titleSuffix: "Spaces.",
    description:
      "From planning to handover, our teams combine sustainable design thinking with strong site execution to deliver spaces that perform beautifully for years.",
  },
] as const;

const complianceItems = [
  { icon: "verified_user", label: "ISO 9001:2015" },
  { icon: "eco", label: "LEED Certified" },
  { icon: "apartment", label: "CREDAI Member" },
  { icon: "award_star", label: "BAI Award 2023" },
  { icon: "verified_user", label: "ISO 9001:2015" },
  { icon: "eco", label: "LEED Certified" },
] as const;

export function AboutPage() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [stats, setStats] = useState({ projects: 0, experience: 0, families: 0, engineers: 0 });
  const [partnersApi, setPartnersApi] = useState<CarouselApi>();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const statsSection = document.getElementById("stats-section");
    if (!statsSection) {
      return;
    }

    let started = false;
    const targets = { projects: 220, experience: 25, families: 180, engineers: 45 };
    const duration = 1400;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) {
          return;
        }

        started = true;
        const startTime = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const easing = 1 - (1 - progress) * (1 - progress);

          setStats({
            projects: Math.round(targets.projects * easing),
            experience: Math.round(targets.experience * easing),
            families: Math.round(targets.families * easing),
            engineers: Math.round(targets.engineers * easing),
          });

          if (progress < 1) {
            window.requestAnimationFrame(animate);
          }
        };

        window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(statsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!partnersApi) {
      return;
    }

    const intervalId = window.setInterval(() => {
      partnersApi.scrollPrev();
    }, 2600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [partnersApi]);

  useReveal();

  const currentSlide = heroSlides[activeHeroSlide];

  return (
    <>
      <AboutHeroSection activeHeroSlide={activeHeroSlide} currentSlide={currentSlide} onPrev={() => setActiveHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)} onNext={() => setActiveHeroSlide((current) => (current + 1) % heroSlides.length)} onSelectSlide={setActiveHeroSlide} />
      <AboutLegacySection />
      <AboutBlueprintSection />
      <AboutStatsSection stats={stats} />
      <AboutTeamSection />
      <AboutPartnersSection partnersApi={partnersApi} setPartnersApi={setPartnersApi} />
      <AboutCtaSection />
    </>
  );
}

function AboutHeroSection({ activeHeroSlide, currentSlide, onPrev, onNext, onSelectSlide }: { activeHeroSlide: number; currentSlide: (typeof heroSlides)[number]; onPrev: () => void; onNext: () => void; onSelectSlide: (index: number) => void; }) {
  return (
    <header className={"relative h-[72vh] min-h-[500px] md:h-[84vh] md:min-h-[620px] flex items-center overflow-hidden"}>
      <div className={"absolute inset-0 z-0"}>
        {heroSlides.map((slide, index) => (
          <div key={slide.titleSuffix} className={`absolute inset-0 transition-opacity duration-700 ${index === activeHeroSlide ? "opacity-100" : "opacity-0"}`}>
            <div className={"w-full h-full bg-cover bg-center scale-105"} style={{ backgroundImage: `url('${slide.image}')` }}></div>
          </div>
        ))}
        <div className={"absolute inset-0 bg-gradient-to-r from-on-surface via-on-surface/60 to-transparent"}></div>
        <div className={"blueprint-pattern absolute inset-0 opacity-10"}></div>
      </div>
      <div className={"relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full"}>
        <div className={"max-w-3xl space-y-6 md:space-y-8 hero-reveal"}>
          <div className={"inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-[10px] font-black uppercase tracking-[0.3em] text-surface-container-high"}>
            <span className={"w-2 h-2 bg-primary-container rounded-full animate-pulse"}></span>
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
                <button aria-label={`Go to slide ${index + 1}`} className={`h-2 rounded-full transition-all ${index === activeHeroSlide ? "w-8 bg-primary-container" : "w-2 bg-white/45 hover:bg-white/75"}`} key={slide.titleSuffix} onClick={() => onSelectSlide(index)} type={"button"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function AboutLegacySection() {
  const timeline = [
    { year: "1998", title: "The Foundation", body: "Santhi Builders establishes its first headquarters, focusing on structural consultancy for high-rise developments in the metro region." },
    { year: "2005", title: "Diversified Engineering", body: "Expanded into full-scale civil construction and residential development, completing our first 50 boutique villas." },
    { year: "2012", title: "Quality Milestones", body: "Achieved ISO 9001:2015 certification, setting the industry benchmark for structural safety and material quality." },
    { year: "2018", title: "The Green Initiative", body: "Integrating LEED standards into every project, focusing on sustainable architecture and energy-efficient building systems." },
    { year: "2024", title: "Technological Leap", body: "Pioneering AI-driven site monitoring and BIM modeling to ensure 100% precision in execution and delivery." },
  ] as const;

  return (
    <section className={"py-section-gap bg-white relative overflow-hidden"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10"}>
        <div className={"grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center mb-16 md:mb-24"}>
          <div className={"space-y-8 md:space-y-10"}>
            <span className={"text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block border-l-4 border-primary pl-4"}>Our Legacy</span>
            <h2 className={"text-5xl md:text-6xl font-black text-on-surface leading-tight"}>A Tradition of Built Excellence</h2>
            <div className={"space-y-6 text-on-surface-variant font-medium text-lg leading-relaxed"}>
              <p>Founded on the principles of structural integrity and aesthetic innovation, Santhi Builders has spent over two decades redefining the urban landscape. What started as a boutique engineering firm has evolved into a full-scale construction powerhouse.</p>
              <p>Our journey is marked by a relentless pursuit of perfection, where every beam laid and every brick placed serves a greater purpose: human-centric design that stands the test of time.</p>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 pt-6 md:pt-8 border-t border-outline-variant/30"}>
              <div>
                <h4 className={"text-xl font-black text-primary mb-3"}>Our Mission</h4>
                <p className={"text-sm text-on-surface-variant leading-relaxed"}>To deliver world-class infrastructure that marries sustainability with luxury engineering.</p>
              </div>
              <div>
                <h4 className={"text-xl font-black text-tertiary-container mb-3"}>Our Vision</h4>
                <p className={"text-sm text-on-surface-variant leading-relaxed"}>To be the global benchmark for architectural precision and construction transparency.</p>
              </div>
            </div>
          </div>
          <div className={"relative group"}>
            <div className={"aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative"}>
              <img alt={"Luxury Architecture"} className={"w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuC8NBU4LOyycW0_Bwt5QN0NlrNouZE6ddBAnchvndF4num7p1oMe-gaBN1ey0mISmDXCk2vEtQN8DA3JxFUuE8W9dmiHc4RUUnmYX8TZy-TajL3YuY0xqHCsNSM8Vu3F_CNyu9duM5asRQbmt0N1KGTf6Q6oymc0-wl161zJ0Eog7_iKKSaH_g1pOBDkm0f7fW0TEGI6N8ppp6LIAZgsLsA_eexmf0pkeVZ26mOqMOXXT6FQCkOtnO2oeIbdYiVZPNWmhFsVM90BbrR"} />
              <div className={"absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"}></div>
            </div>
            <div className={"absolute -bottom-8 -left-8 bg-white p-7 md:p-10 shadow-2xl rounded-2xl border border-outline-variant/20 hidden md:block"}>
              <div className={"text-5xl font-black text-primary mb-2"}>25+</div>
              <div className={"text-[10px] text-on-surface-variant font-black uppercase tracking-[0.2em]"}>Years of Uncompromising Quality</div>
            </div>
          </div>
        </div>
        <div className={"relative py-10 md:py-16 mt-6 md:mt-10"}>
          <div className={"absolute left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/30 -translate-x-1/2 hidden md:block"}></div>
          <div className={"space-y-14 md:space-y-24 relative"}>
            {timeline.map((item, index) => {
              const reverse = index % 2 === 1;

              return (
                <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12 group`} key={item.title}>
                  <div className={`flex-1 ${reverse ? "text-left hidden md:block pl-12" : "text-right hidden md:block pr-12"}`}>
                    <h3 className={"text-7xl font-black text-outline-variant/20 group-hover:text-primary transition-colors"}>{item.year === "2024" ? "Present" : item.year}</h3>
                  </div>
                  <div className={"w-5 h-5 rounded-full bg-primary ring-[12px] ring-primary/10 relative z-10 shrink-0"}></div>
                  <div className={"flex-1 bg-surface-container-low p-10 rounded-3xl border border-outline-variant/30 card-advanced"}>
                    <span className={"md:hidden font-black text-primary mb-2 block text-2xl"}>{item.year}</span>
                    <h4 className={"text-2xl font-black text-on-surface mb-4"}>{item.title}</h4>
                    <p className={"text-on-surface-variant font-medium leading-relaxed"}>{item.body}</p>
                  </div>
                </div>
              );
            })}
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
    { step: "Step 04", icon: "verified", title: "Quality Check", body: "Multi-tier inspections, finishes audit, and safety certifications." },
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
          <p className={"text-on-surface-variant font-medium md:max-w-sm text-lg leading-relaxed"}>{" "}A rigorous 5-step engineering framework designed to translate your vision into a structural masterpiece with zero deviations.{" "}</p>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"}>
          {steps.map((item) => (
            <div className={"card-advanced bg-white p-10 rounded-2xl border border-outline-variant/30 group"} key={item.title}>
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

function AboutStatsSection({ stats }: { stats: { projects: number; experience: number; families: number; engineers: number } }) {
  const items = [
    { icon: "apartment", value: `${stats.projects}+`, label: "Projects Completed" },
    { icon: "history_edu", value: `${stats.experience}+`, label: "Years of Excellence" },
    { icon: "family_restroom", value: `${stats.families}+`, label: "Happy Families" },
    { icon: "engineering", value: `${stats.engineers}+`, label: "Expert Engineers" },
  ] as const;

  return (
    <section className={"py-16 md:py-24 bg-white relative z-20"} id={"stats-section"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"}>
        {items.map((item, index) => (
          <div className={`flex flex-col items-center md:items-start text-center md:text-left gap-4 group ${index < items.length - 1 ? "border-r border-outline-variant/20" : ""}`} key={item.label}>
            <span className={"material-symbols-outlined text-5xl text-primary-container group-hover:scale-110 transition-transform"}>{item.icon}</span>
            <div>
              <h4 className={"text-4xl font-black text-on-surface"}>{item.value}</h4>
              <p className={"text-[10px] uppercase font-black text-on-surface-variant tracking-[0.3em] mt-1"}>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutTeamSection() {
  const members = [
    { name: "Arun K. Santhi", role: "Founder & CEO", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2iNrhYZlL4jy9PFP37PE4RjxgJi_qXGDu2HFhWRl__BR3MMOiJAyX6b9fuUC-82XBSPcS_lEP_ywE-0QZTod02Kg1HjOTqgHFF2gbsBP4b-f3aJ1vDvtiZDb4Doo3HRCZqP_2bJbyE0SCzvpNX3Ewd3iARQmYiQRNIP6BWSFrMAW7tAtRDBzVVp1s0l0IU9FcfCUsCjkpYK38kbOuQeIuxR2MNX299LO17Ejpr6m-h_778rotkOy58PrEJFIfkHephr5AAadnB5Tk", overlay: "from-primary/80", actions: ["share", "mail"] },
    { name: "Meera V. Nair", role: "Project Director", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKf8X7YUBf6dXKiVLwaNYYNYJTJhL4TsoDCyIZC8_Nr9_YSrV9dGleVgnba8MPXQHNOnH8JBC0UcSPyD0LPvpoCdCZD3jQeTehyENsQIG2EfXsz5raxSgiGrVArmiObDBvIGUr7zsLXaqfPqmkis8AtbfMy9R6kcEqNpDLHeEFAYqWIXNoqixweRMyJriQgdyTWbg0GPjjkGoh50xlLaRWXOlNNlUzsaKdIJCE10eusBWNFhTvnwqtnoQjZbFYjWmn2SCzENtn0vpC", overlay: "from-tertiary-container/80", actions: ["share"] },
    { name: "Siddharth Sharma", role: "Chief Architect", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL6f1DDapgWJCulfznfaO8D7pt503ygKovw1iO8ekv-UUa_TeYb_lx9sKM6-1iw8nTpVxk6u8B_sp-mDOXdKkmHiXwJxSVWFrPhTuB3pFke82wcca8C_Yi3q6Y7wlrvKF9YuacNEEvulBHEpukRSIbrHV5SFUGfKtvIgxDihERhVr_hOlUBzc6cRaJXpfNe06wdYlf06ijBOb-WmrexfYr8DmpDn1y9wq32mq06stGDtElShqWgR953DFPxbQQsF1x2um4yZBM5B23", overlay: "from-secondary/80", actions: ["mail"] },
  ] as const;

  return (
    <section className={"py-section-gap bg-white border-t border-outline-variant/30"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8 md:gap-10"}>
          <div className={"max-w-2xl"}>
            <span className={"text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block border-l-4 border-primary pl-4"}>Our Visionaries</span>
            <h2 className={"text-5xl md:text-6xl font-black text-on-surface leading-tight"}>Minds Behind the <span className={"text-primary"}>Masterpieces</span></h2>
          </div>
          <Link className={"text-primary font-black text-xs uppercase tracking-[0.25em] flex items-center gap-4 hover:gap-6 transition-all"} to={"/services"}>{" "}Meet the Full Team{" "}<span className={"material-symbols-outlined"}>east</span></Link>
        </div>
        <div className={"grid md:grid-cols-3 gap-8 md:gap-12"}>
          {members.map((member) => (
            <div className={"group"} key={member.name}>
              <div className={"aspect-[3/4] mb-8 rounded-3xl overflow-hidden relative shadow-xl"}>
                <img alt={member.name} className={"w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"} src={member.image} />
                <div className={`absolute inset-0 bg-gradient-to-t ${member.overlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10`}>
                  <div className={"flex gap-4"}>
                    {member.actions.map((action) => (
                      <div className={"w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white transition-colors cursor-pointer group/icon"} key={action}>
                        <span className={"material-symbols-outlined text-sm text-white group-hover/icon:text-primary"}>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <h4 className={"text-2xl font-black text-on-surface"}>{member.name}</h4>
              <p className={"text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] mt-2"}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPartnersSection({ partnersApi, setPartnersApi }: { partnersApi: CarouselApi | undefined; setPartnersApi: (api: CarouselApi) => void; }) {
  return (
    <section className={"py-16 md:py-24 bg-surface-container-low border-y border-outline-variant/30 overflow-hidden relative"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center mb-10 md:mb-16"}>
        <span className={"text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-4 block"}>Industry Compliance & Partners</span>
        <h3 className={"text-4xl font-black text-on-surface"}>Recognized for Precision Built Quality</h3>
      </div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <Carousel className={"w-full"} opts={{ align: "start", loop: true }} setApi={setPartnersApi}>
          <CarouselContent>
            {complianceItems.map((item, index) => (
              <CarouselItem className={"basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"} key={`${item.label}-${index}`}>
                <div className={"h-full rounded-2xl border border-outline-variant/30 bg-white/85 backdrop-blur-sm py-8 px-4 flex flex-col items-center justify-center gap-3 shadow-sm grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 transition-all duration-300"}>
                  <span className={"material-symbols-outlined text-4xl text-primary"}>{item.icon}</span>
                  <span className={"text-[10px] md:text-[11px] font-black uppercase tracking-widest text-on-surface text-center"}>{item.label}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className={"flex justify-center gap-3 mt-8"}>
          <button aria-label={"Slide partners right"} className={"w-11 h-11 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"} onClick={() => partnersApi?.scrollPrev()} type={"button"}><span className={"material-symbols-outlined text-xl"}>west</span></button>
          <button aria-label={"Slide partners left"} className={"w-11 h-11 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"} onClick={() => partnersApi?.scrollNext()} type={"button"}><span className={"material-symbols-outlined text-xl"}>east</span></button>
        </div>
      </div>
    </section>
  );
}

function AboutCtaSection() {
  return (
    <section className={"py-section-gap bg-primary relative overflow-hidden text-white"}>
      <div className={"blueprint-pattern absolute inset-0 opacity-20"}></div>
      <div className={"absolute -top-28 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"}></div>
      <div className={"absolute -bottom-24 -right-16 w-72 h-72 bg-secondary-container/20 rounded-full blur-3xl"}></div>
      <div className={"max-w-5xl mx-auto px-margin-mobile md:px-gutter relative z-10"}>
        <div className={"rounded-[2rem] md:rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-xl px-6 py-10 md:px-12 md:py-14 text-center shadow-2xl space-y-7 md:space-y-9"}>
          <div className={"inline-flex items-center gap-3 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]"}><span className={"material-symbols-outlined text-sm md:text-base"}>handshake</span><span>Let's Build Your Vision Together</span></div>
          <h2 className={"text-3xl sm:text-4xl md:text-6xl font-black leading-[1.1]"}>Ready to Discuss Your <br className={"hidden sm:block"} /><span className={"text-white"}>Next Landmark?</span></h2>
          <p className={"text-base sm:text-lg md:text-xl opacity-95 max-w-3xl mx-auto leading-relaxed font-medium"}>Our structural experts and architects are ready to provide a practical roadmap from concept to completion, tailored to your plot, budget, and timeline.</p>
          <div className={"flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 md:gap-6 pt-2"}>
            <a className={"bg-white text-primary px-8 md:px-12 py-4 md:py-5 rounded-xl font-black text-sm md:text-base uppercase tracking-[0.18em] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500 w-full sm:w-auto inline-flex items-center justify-center gap-3"} href={supportTel}><span className={"material-symbols-outlined text-lg"}>call</span><span>Schedule Call</span></a>
            <a className={"bg-secondary-container text-on-secondary px-8 md:px-12 py-4 md:py-5 rounded-xl font-black text-sm md:text-base uppercase tracking-[0.16em] hover:brightness-95 hover:-translate-y-1 transition-all duration-500 w-full sm:w-auto inline-flex items-center justify-center gap-3"} href={supportWhatsapp} rel={"noreferrer"} target={"_blank"}><span className={"material-symbols-outlined text-lg"}>chat</span><span>WhatsApp Us</span></a>
          </div>
          <div className={"flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/90"}><span className={"text-[10px] md:text-xs font-black uppercase tracking-[0.32em] text-white/60"}>Direct Assistance</span><a className={"text-lg md:text-2xl font-extrabold tracking-wide hover:text-primary-container transition-colors"} href={supportTel}>{supportPhone}</a></div>
        </div>
      </div>
    </section>
  );
}