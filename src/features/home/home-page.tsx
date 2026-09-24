import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ConstructionEnquiryForm } from "@/components/construction-enquiry-form";
import { useReveal } from "@/hooks/use-reveal";
import { PROJECT_LISTING_ITEMS } from "@/features/projects";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroSlides = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBuJkUxMSDrRQ37YlhHmlYGb0azVpYLFObzVksyH3CAqGDPfkZ-XpcJPz3wjw4cSrcAMnW9j2AjzP7GhhNGIe0CvjoTt5zF7mmm7gKdoaEnf3Gjr085l0e-GOa78xwXQ_hOwC9ZQUdTIQLU7sATxzGh4b-nrdlJ1oc-pByqKSP0Etd9lbVVhoiTAIn8D5KOP_mO_OUA9Mx5UeELTWj36rO23rbkojRh-1AVsaIj-sXv54a4nNz3tCz50T7mWroTjDsXBU31_OHI1sok",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAhW9ynUfHU4LLvFwmJADMSM7OGgGatIMtJRRtfGCMiVHja6ZgxJYZyNEXISXIF0nNu7bp-skvU6zzxpZ12IvZVxpChP4FBaLamWntT8YhBugIl7dT8Vmho_LooZ0vWxjG9feOQr6WcjKrJ8zYWgrmosXQMxf3PMkxaPR90qdGgnOFnt4dg0Se4ytILotuKBQuCxNV-F5ZrKorI0NfNSNlR1KyEl8X68AC3bGFpAqMGOZSOKGIT-_WETmSR0IKxTKs-qV10e8u1aK_E",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAX7rnUnWsIPiY4wASpzn207-ilxML0hVzGfTd_d5ERjcxHOBDd7763Ly9ETPat6rQHmJxlW_hqqnNOZbF5KH0yRzMmw-qDGxHY7G6lXeIsJlA-pQJbI9hMQ03W5HbQulpgLiFcwR9CGGWOCSQMGR452FhBa4SL9y1pnEfvLTplT50ZlEMsxmyIqgbpupUkjnQGUq8lLHVr_J5POarf4lessfzyCylfUgkCszav2tl2O3oFOYkafF5KB0Kikir6HW7SzofsgDOjgtOX",
] as const;

const residentialMeta: Record<string, { status: string; location: string; builtUp: string }> = {
  "azure-horizon-villa": { status: "Completed", location: "pondicherry", builtUp: "2,400 sq.ft" },
  "monolith-residences": { status: "Ongoing", location: "Thiruvanmiyur", builtUp: "3,100 sq.ft" },
  "sea-crest-villas": { status: "Completed", location: "OMR, Chennai", builtUp: "2,150 sq.ft" },
};

const testimonials = [
  {
    quote:
      "Santhi Builders transformed our vision into a structural masterpiece. Truly impressive attention to detail.",
    name: "Mr. Vigneshwar",
    role: "Industrialist, Velachery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOUzSZdwajr3tlxxz8IAauVR71XAn7wOuwe-Z6jLBgVdPRuSdneJKUjOiyYev4zXGwO02YMlk3Zkq5numdl-6JxInUoqWJayE6zutcQ4BPT81ca-oW6raJJSeZa7tiwNwsF_JEjp9N6NHC3hV3IjBOvJXskFFVg7c03QdVa9_XO6mQANFBJcVT6F38i8c3oPDHuEr4eAcH5jlsNJOorN7Ml435jK52hZW0HGE67RFmGi33CUn62nizdEZ1ewPFh6AV3n6WM56KizVo",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD--x8E3dEQrOYgfeIm7FlYYWfEA0_RAKPznYUkaIvGPKX3G9NXyDvdEidGNBwnkVKoZ-e_bFDhl3j-eilaHMQeeoh2dIN-clQJLfHO7M9-ESFwaZ4wWDMeLGT49lAW_S0LwmAwiXSW16zqHEA_uFF_tt9zHTAlRv18nVZC2gvMuFDEoKiS7jLX-TG01unDDWGmgpqZZvJygNeK3TQemyByLQLGpZQELWd7K2SlZ4AhxDvgxGCCCKTS_eRzN1UomwgyaTmN8_XSEFVl",
  },
  {
    quote:
      "Our project timeline stayed transparent from day one. Weekly updates and quality checks gave us complete confidence.",
    name: "Mrs. Priyadarshini",
    role: "Home Owner, OMR",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuJkUxMSDrRQ37YlhHmlYGb0azVpYLFObzVksyH3CAqGDPfkZ-XpcJPz3wjw4cSrcAMnW9j2AjzP7GhhNGIe0CvjoTt5zF7mmm7gKdoaEnf3Gjr085l0e-GOa78xwXQ_hOwC9ZQUdTIQLU7sATxzGh4b-nrdlJ1oc-pByqKSP0Etd9lbVVhoiTAIn8D5KOP_mO_OUA9Mx5UeELTWj36rO23rbkojRh-1AVsaIj-sXv54a4nNz3tCz50T7mWroTjDsXBU31_OHI1sok",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhyHbHAmf6mwHpV-RAB13n-FzQnpwZEeadHHa0UU0NVsN0YDiahnr8anPYTjZ_qUugtYJoxk_jeUO5ORDxDKW7tpwSk5iqdH7EEK-PzzPb1Ki90U0PMHzg8lA4KpulP9KwDD2YwKWKuKNQ9S3h-bzG9HsqaJCGg17cB60U9s84eFwjeBCEmTVBv0ir3KMt7Ka0GgntP5K37ivdwBB2EZ1r2oWOKwppLYtBwxZz4dBPi5BLudW-t7iEzejDMlXSlH7HEWqKqsFr5Jxo",
  },
  {
    quote:
      "From civil work to final finishes, the team delivered exactly what was promised. The overall coordination was excellent.",
    name: "Mr. Arun Kumar",
    role: "Business Owner, ECR",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhW9ynUfHU4LLvFwmJADMSM7OGgGatIMtJRRtfGCMiVHja6ZgxJYZyNEXISXIF0nNu7bp-skvU6zzxpZ12IvZVxpChP4FBaLamWntT8YhBugIl7dT8Vmho_LooZ0vWxjG9feOQr6WcjKrJ8zYWgrmosXQMxf3PMkxaPR90qdGgnOFnt4dg0Se4ytILotuKBQuCxNV-F5ZrKorI0NfNSNlR1KyEl8X68AC3bGFpAqMGOZSOKGIT-_WETmSR0IKxTKs-qV10e8u1aK_E",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDS2LhfRko6HnH8pBiE3FS6swE_3cOQcKQDKmVxvyERf1ZlJoeaa77nAaoI5pWe5ZJY7jntXEgLIRw0No8j5wCiUiEGFK9wQ_P-J-D2snwLji8p1e3b4M4-94SDKRC7RS_3389BGW_TulQWg3_f8zsBHS4EIspvO2-eseRQnV5vSML8ELnIZByE7APs2hf0Zt6fQXHOXR6BLdQo2dRMF5hJUSdLnK3Z3LZtZ9CMoBEI5lfkaIwng1yP0iiZP7mItsFF-xGhQbPSuXaf",
  },
] as const;

const complianceItems = [
  { icon: "verified_user", label: "ISO 9001:2015" },
  { icon: "eco", label: "LEED Certified" },
  { icon: "apartment", label: "CREDAI Member" },
  { icon: "award_star", label: "BAI Award 2023" },
  { icon: "verified_user", label: "Quality Assured" },
] as const;

const trustedClientLogos = [
  {
    alt: "Partner 1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhyHbHAmf6mwHpV-RAB13n-FzQnpwZEeadHHa0UU0NVsN0YDiahnr8anPYTjZ_qUugtYJoxk_jeUO5ORDxDKW7tpwSk5iqdH7EEK-PzzPb1Ki90U0PMHzg8lA4KpulP9KwDD2YwKWKuKNQ9S3h-bzG9HsqaJCGg17cB60U9s84eFwjeBCEmTVBv0ir3KMt7Ka0GgntP5K37ivdwBB2EZ1r2oWOKwppLYtBwxZz4dBPi5BLudW-t7iEzejDMlXSlH7HEWqKqsFr5Jxo",
    heightClass: "h-16 md:h-20",
  },
  {
    alt: "Partner 2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS2LhfRko6HnH8pBiE3FS6swE_3cOQcKQDKmVxvyERf1ZlJoeaa77nAaoI5pWe5ZJY7jntXEgLIRw0No8j5wCiUiEGFK9wQ_P-J-D2snwLji8p1e3b4M4-94SDKRC7RS_3389BGW_TulQWg3_f8zsBHS4EIspvO2-eseRQnV5vSML8ELnIZByE7APs2hf0Zt6fQXHOXR6BLdQo2dRMF5hJUSdLnK3Z3LZtZ9CMoBEI5lfkaIwng1yP0iiZP7mItsFF-xGhQbPSuXaf",
    heightClass: "h-16 md:h-20",
  },
  {
    alt: "Partner 3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtqg4DUrvXJT7ARubXR29Agkw4DMvHHoktJf5qQHOXxfdpZefvnAzq1JPrT1Qh6UvZz55r_jNmDWxF9MLaLp9NteZROUYUPin66OU4th0Brm3ZjpO1ZxPZPBFFfMpXDmqulj1nbqVY9ViYqouft9YX4EDAqSO4FFTkk4gtp3M6VDntOOMbUBPldXW6yddZ4KBoVCcN99w6t2ZfFhygk36qYYLNdputNeeysVymmLSoA5g8-RO8G-ruLCAa0ANMTeS3sI5X5jg37UMC",
    heightClass: "h-14 md:h-16",
  },
  {
    alt: "Partner 4",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOUzSZdwajr3tlxxz8IAauVR71XAn7wOuwe-Z6jLBgVdPRuSdneJKUjOiyYev4zXGwO02YMlk3Zkq5numdl-6JxInUoqWJayE6zutcQ4BPT81ca-oW6raJJSeZa7tiwNwsF_JEjp9N6NHC3hV3IjBOvJXskFFVg7c03QdVa9_XO6mQANFBJcVT6F38i8c3oPDHuEr4eAcH5jlsNJOorN7Ml435jK52hZW0HGE67RFmGi33CUn62nizdEZ1ewPFh6AV3n6WM56KizVo",
    heightClass: "h-16 md:h-20",
  },
  {
    alt: "Partner 5",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2eNLZPR-ON6KpDtmU_iAWvJzI3hQu4c6l4T4xNgzeCC5ShTjnDhkSgpMYwSG2hjdPZk6plW-MZHpP_C6C-8o096WdZpFFOhxWHZ1mJVLIrHJ0p5Ngh2leHpeTkS8CGSWbSGbl5yLmUmaz4nDbxMVb9NLYZK7dwdWTdZWVJkfQqsvim7TMKJSutK3Ut2QQzBE6fWNIopNfImKb_zy8b4Ab6SKiS1U7e8E4g0VDdPN1UgsEHen-4n842TvdkP-cUSqlng03UhgU03Ks",
    heightClass: "h-14 md:h-16",
  },
] as const;

const faqItems = [
  {
    question: "Average construction cost per sq ft in Chennai?",
    answer:
      "Our premium construction packages start from ₹1899 per sq ft, varying with material specifications and soil conditions. We provide detailed bills of quantities (BOQ) for total transparency.",
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
  const [partnersApi, setPartnersApi] = useState<CarouselApi>();

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
      <HomeLegacySection />
      <HomeStatsSection />
      <HomeExpertiseSection />
      <HomeProjectsSection portfolioApi={portfolioApi} residentialProjects={residentialProjects} setPortfolioApi={setPortfolioApi} />
      <HomeTestimonialsSection setTestimonialApi={setTestimonialApi} testimonialApi={testimonialApi} />
      <HomeWhySection />
      <HomeComplianceSection partnersApi={partnersApi} setPartnersApi={setPartnersApi} />
      <HomeTrustedClientsSection />
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
    <header className={"relative mx-auto mt-4 w-full max-w-container-max px-margin-mobile sm:mt-6 md:px-gutter"}>
      <div className={"relative min-h-155 overflow-hidden rounded-[1.5rem] border border-outline-variant/20 shadow-2xl sm:min-h-170 sm:rounded-[2rem] md:min-h-195"}>
        <div className={"absolute inset-0"} id={"hero-slider"}>
          {heroSlides.map((image, index) => (
            <div className={`hero-slide absolute inset-0 ${index === activeHeroSlide ? "opacity-100 z-0" : "opacity-0 z-0"}`} key={image}>
              <div className={"absolute inset-0 bg-cover bg-center"} style={{ backgroundImage: `url('${image}')` }}></div>
            </div>
          ))}
        </div>
        <div className={"absolute inset-0 z-10 bg-linear-to-tr from-on-primary-fixed/90 via-on-primary-fixed/40 to-transparent"}></div>
        <div className={"absolute inset-0 z-20 flex items-center px-5 py-12 sm:px-8 md:px-16"}>
          <div className={"max-w-3xl text-white"}>
            <div className={"mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md sm:mb-8 sm:px-4"}>
              <span className={"material-symbols-outlined text-secondary-container text-xs"}>verified</span>
              <span className={"text-[10px] uppercase tracking-[0.2em] font-bold"}>ISO 9001:2015 Certified</span>
            </div>
            <h1 className={"font-display-lg text-3xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl"}>
              {" "}Crafting{" "}
              <span className={"text-primary italic"}>Architectural</span>
              {" "}Masterpieces{" "}
            </h1>
            <p className={"font-body-lg mb-8 max-w-lg border-l-4 border-primary pl-4 text-sm leading-relaxed opacity-90 sm:mb-10 sm:pl-8 sm:text-lg md:text-body-lg"}>
              {" "}Engineering structural excellence in Chennai starting at{" "}
              <span className={"text-white font-black underline decoration-secondary-container decoration-4 underline-offset-8"}>₹1899/Sq.Ft</span>
              .{" "}
            </p>
            <div className={"flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:gap-6"}>
              <Link className={"flex items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 text-sm font-black text-on-primary shadow-lg transition-all hover:shadow-2xl hover:translate-x-1 sm:px-10 sm:py-5 sm:text-base md:text-lg"} to={"/estimate-calculator"}>
                {" "}Calculate Cost Now{" "}
                <span className={"material-symbols-outlined"}>arrow_forward</span>
              </Link>
              <Link className={"flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-on-surface sm:px-10 sm:py-5"} to={"/projects"}>
                {" "}View Projects{" "}
              </Link>
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
              className={`slider-dot h-3 rounded-full bg-white/30 transition-all ${index === activeHeroSlide ? "active w-8" : "w-3"}`}
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

function HomeLegacySection() {
  return (
    <section className={"relative py-section-gap"}>
      <div className={"absolute top-0 right-0 w-1/2 h-full bg-surface-container-low/20 -z-10 rounded-l-[10rem]"}></div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"grid lg:grid-cols-12 gap-12 items-center"}>
          <div className={"lg:col-span-7 relative group"}>
            <div className={"absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"}></div>
            <img alt={"Santhi Builders Excellence"} className={"relative z-10 aspect-4/3 w-full rounded-3xl border border-outline-variant/20 object-cover shadow-2xl sm:aspect-16/10 lg:aspect-auto lg:h-137.5"} src={"/images/excellence.jpg"} />
            <div className={"absolute -bottom-8 -right-8 bg-white p-10 rounded-3xl shadow-2xl border border-outline-variant/30 hidden lg:block z-20"}>
              <p className={"text-primary font-black text-4xl leading-none sm:text-5xl"}>15+</p>
              <p className={"text-xs uppercase tracking-[0.3em] font-black text-on-surface-variant mt-2"}>Years of Trust</p>
            </div>
          </div>
          <div className={"space-y-6 lg:col-span-5 lg:space-y-8 lg:pl-12"}>
            <div className={"inline-flex items-center gap-3 text-primary font-black tracking-[0.3em] uppercase text-xs"}>
              <span className={"h-1 w-12 bg-primary rounded-full"}></span>
              {" "}Our Legacy{" "}
            </div>
            <h2 className={"font-headline-lg text-3xl font-black leading-tight text-on-surface sm:text-4xl lg:text-[2.75rem]"}>
              {" "}Engineering the Future,{" "}
              <br />
              <span className={"text-primary italic"}>Honoring Foundations</span>
            </h2>
            <p className={"text-body-lg text-base text-on-surface-variant leading-relaxed sm:text-lg"}>
              {" "}With over 15 years of commitment, Santhi Builders has redefined Chennai's skyline. We don't just build; we craft legacies using cutting-edge engineering and refined traditional craftsmanship.{" "}
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
    { value: "220+", label: "Homes Built" },
    { value: "350+", label: "Quality Checks" },
    { value: "2.5L+", label: "Sq.Ft Delivered" },
    { value: "15+", label: "Years Trust" },
  ] as const;

  return (
    <section className={"relative z-10 mx-margin-mobile rounded-[2rem] border-y border-outline-variant/20 bg-surface-container-lowest py-8 shadow-sm sm:rounded-[3rem] md:mx-gutter md:py-12"}>
      <div className={"mx-auto grid max-w-container-max grid-cols-2 gap-6 px-5 sm:gap-10 sm:px-8 md:grid-cols-4 md:gap-12 md:px-12"}>
        {stats.map((stat) => (
          <div className={"text-left border-l-4 border-primary pl-6"} key={stat.label}>
            <div className={"font-display-lg mb-1 text-3xl font-black text-primary sm:text-4xl"}>{stat.value}</div>
              <p className={"font-label-sm text-[10px] font-bold uppercase tracking-[0.14em] text-on-surface-variant sm:text-label-sm sm:tracking-[0.2em]"}>{stat.label}</p>
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
      className: "md:col-span-7 -rotate-1 lg:translate-y-8",
      maxWidth: "max-w-md",
    },
    {
      title: "Commercial",
      icon: "architecture",
      body: "State-of-the-art office spaces and retail hubs built for sustainable growth.",
      className: "md:col-span-5 rotate-1",
      maxWidth: "",
    },
    {
      title: "Institutional",
      icon: "account_balance",
      body: "Educational campuses and healthcare facilities with functional precision.",
      className: "md:col-span-5 -rotate-1",
      maxWidth: "",
    },
    {
      title: "Industrial",
      icon: "precision_manufacturing",
      body: "Robust warehouses and units engineered for heavy-duty operations and industrial longevity.",
      className: "md:col-span-7 rotate-1 lg:-translate-y-8",
      maxWidth: "max-w-md",
    },
  ] as const;

  return (
    <section className={"overflow-visible py-12 sm:py-section-gap"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"mb-10 flex flex-col gap-6 sm:mb-20 lg:flex-row lg:items-end lg:justify-between"}>
          <div className={"max-w-2xl"}>
            <span className={"text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"}>Specializations</span>
            <h2 className={"font-headline-lg text-3xl font-black sm:text-4xl lg:text-[2.75rem]"}>
              Our Core <span className={"text-primary italic"}>Expertise</span>
            </h2>
          </div>
          <div className={"w-full lg:w-1/3 h-px bg-outline-variant/30 mb-4 hidden lg:block"}></div>
        </div>
        <div className={"grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-12"}>
          {items.map((item) => (
            <div className={`card-interactive group relative overflow-hidden rounded-3xl border border-outline-variant/30 bg-white p-7 transform sm:p-10 lg:p-12 ${item.className}`} key={item.title}>
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
    <section className={"relative bg-surface-container-low/30 py-12 sm:py-section-gap"}>
      <div className={"absolute top-0 left-0 h-40 w-full bg-linear-to-b from-background to-transparent"}></div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10"}>
        <div className={"mb-10 md:mb-16"}>
          <span className={"text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"}>Portfolio</span>
          <div className={"flex flex-col md:flex-row justify-between items-start md:items-end gap-8"}>
            <h2 className={"font-headline-lg max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-[2.75rem]"}>
              Our Residential Construction <span className={"text-primary italic"}>Projects</span>
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
                  status: "Completed",
                  location: "Chennai",
                  builtUp: "2,600 sq.ft",
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
    <section className={"relative overflow-visible bg-surface py-12 sm:pt-14 sm:pb-section-gap"}>
      <div className={"absolute top-1/2 left-0 w-full h-2/3 bg-primary/5 -skew-y-3 -z-10"}></div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"mb-16"}>
          <span className={"text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block"}>Testimonials</span>
          <h2 className={"font-headline-lg text-3xl font-black sm:text-4xl lg:text-[2.75rem]"}>Client Satisfaction <span className={"text-primary italic"}>Stories</span></h2>
        </div>
        <div className={"relative"}>
          <Carousel className={"testimonial-video-container"} opts={{ align: "start", loop: true }} setApi={setTestimonialApi}>
            <CarouselContent className={"ml-0"}>
              {testimonials.map((item) => (
                <CarouselItem key={item.name} className={"pl-0 md:pl-4 md:basis-[92%] lg:basis-[88%]"}>
                  <div className={"testimonial-slide flex flex-col items-stretch overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-white shadow-2xl md:rounded-[3rem] lg:flex-row"}>
                    <div className={"w-full lg:w-3/5 aspect-video lg:h-auto relative group cursor-pointer overflow-hidden"}>
                      <img alt={item.name} className={"w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"} src={item.image} />
                      <div className={"absolute inset-0 bg-on-surface/20 flex items-center justify-center transition-colors group-hover:bg-on-surface/40"}>
                        <div className={"flex size-16 items-center justify-center rounded-full bg-primary text-white shadow-2xl backdrop-blur-sm transition-transform group-hover:scale-110 md:size-24"}>
                          <span className={"material-symbols-outlined text-4xl md:text-5xl fill-1"}>play_arrow</span>
                        </div>
                      </div>
                    </div>
                    <div className={"relative flex w-full flex-col justify-center bg-surface-container-low/20 p-6 md:p-10 lg:w-2/5 lg:p-12"}>
                      <span className={"material-symbols-outlined text-primary/10 text-7xl md:text-9xl absolute -top-3 right-4 md:right-8 leading-none -z-10"}>format_quote</span>
                      <p className={"relative mb-8 text-base font-medium italic leading-normal text-on-surface sm:text-lg md:text-xl"}>{`"${item.quote}"`}</p>
                      <div className={"flex items-center gap-4 md:gap-5"}>
                        <div className={"w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white border-2 border-primary/20 overflow-hidden shadow-lg rotate-3"}>
                          <img alt={item.name} className={"w-full h-full object-cover"} src={item.avatar} />
                        </div>
                        <div>
                          <h5 className={"font-black text-lg md:text-xl text-on-surface leading-tight"}>{item.name}</h5>
                          <p className={"text-on-surface-variant text-[11px] md:text-sm mt-1 font-black opacity-60 uppercase tracking-widest"}>{item.role}</p>
                        </div>
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
      className: "hover:-rotate-1",
    },
    {
      title: "Structured Timelines",
      icon: "analytics",
      body: "Phased scheduling with weekly reports to ensure your project stays on track and delivers on time.",
      className: "lg:translate-y-12 hover:rotate-0",
    },
    {
      title: "Structural Warranty",
      icon: "construction",
      body: "Financial transparency where you pay only for completed milestones, ensuring complete peace of mind.",
      className: "hover:rotate-1",
    },
  ] as const;

  return (
    <section className={"relative overflow-hidden bg-surface-container-low/50 py-12 sm:py-14 lg:py-16"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"grid lg:grid-cols-12 gap-8 md:gap-10 items-end mb-10 md:mb-14"}>
          <div className={"lg:col-span-8"}>
            <h2 className={"font-headline-lg mb-4 text-3xl font-black leading-tight sm:text-4xl md:mb-5 lg:text-[2.75rem]"}>Why <span className={"text-primary italic"}>Santhi Builders</span>?</h2>
            <p className={"text-sm sm:text-base md:text-lg text-on-surface-variant font-medium max-w-2xl"}>Traditional integrity meeting modern engineering precision at every milestone.</p>
          </div>
          <div className={"lg:col-span-4 text-left lg:text-right"}>
            <Link className={"px-6 md:px-8 py-3.5 md:py-4 bg-white border-2 border-primary text-primary font-black rounded-xl hover:bg-primary hover:text-white transition-all shadow-xl inline-flex"} to={"/services"}>Explore All Features</Link>
          </div>
        </div>
        <div className={"grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 relative z-20"}>
          {items.map((item) => (
            <div className={`card-interactive group rounded-[2rem] border border-outline-variant/30 bg-white p-6 shadow-xl transform sm:p-8 md:rounded-[2.5rem] lg:p-10 ${item.className}`} key={item.title}>
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

function HomeComplianceSection({
  partnersApi,
  setPartnersApi,
}: {
  partnersApi: CarouselApi | undefined;
  setPartnersApi: (api: CarouselApi) => void;
}) {
  return (
    <section className={"relative overflow-hidden border-y border-outline-variant/30 bg-surface-container-low py-10 sm:py-14"}>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center mb-7 md:mb-10"}>
        <span className={"text-primary font-black tracking-[0.5em] uppercase text-[10px] mb-4 block"}>Industry Compliance & Partners</span>
        <h3 className={"text-xl sm:text-2xl md:text-3xl font-black text-on-surface"}>Recognized for Precision Built Quality</h3>
      </div>
      <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <Carousel className={"w-full"} opts={{ align: "start", loop: true }} setApi={setPartnersApi}>
          <CarouselContent>
            {complianceItems.map((item, index) => (
              <CarouselItem className={"basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5"} key={`${item.label}-${index}`}>
                <div className={"h-full rounded-2xl border border-outline-variant/30 bg-white/85 backdrop-blur-sm py-6 px-4 flex flex-col items-center justify-center gap-3 shadow-sm grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 transition-all duration-300"}>
                  <span className={"material-symbols-outlined text-4xl text-primary"}>{item.icon}</span>
                  <span className={"text-[10px] md:text-[11px] font-black uppercase tracking-widest text-on-surface text-center"}>{item.label}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className={"flex justify-center gap-3 mt-6"}>
          <button aria-label={"Slide partners right"} className={"w-11 h-11 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"} onClick={() => partnersApi?.scrollPrev()} type={"button"}>
            <span className={"material-symbols-outlined text-xl"}>west</span>
          </button>
          <button aria-label={"Slide partners left"} className={"w-11 h-11 rounded-full border border-primary/25 text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"} onClick={() => partnersApi?.scrollNext()} type={"button"}>
            <span className={"material-symbols-outlined text-xl"}>east</span>
          </button>
        </div>
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
        <span className={"text-primary font-black tracking-[0.3em] uppercase text-[10px] md:text-xs mb-3 block"}>Our Trusted Clients</span>
        <h2 className={"font-headline-lg mb-2 text-2xl font-black leading-tight text-on-surface sm:text-3xl md:mb-3 md:text-4xl lg:text-[2.75rem]"}>Brands That Build <span className={"text-primary italic"}>With Us</span></h2>
        <p className={"text-sm sm:text-base md:text-lg text-on-surface-variant max-w-xl mx-auto"}>We are proud to partner with homeowners, businesses, and institutions across Tamil Nadu.</p>
      </div>
      <div className={"relative overflow-hidden max-w-container-max mx-auto px-margin-mobile md:px-gutter z-10"}>
        <div>
          <div className={"logo-scroll"}>
            {[...trustedClientLogos, ...trustedClientLogos].map((logo, index) => (
              <div aria-hidden={index >= trustedClientLogos.length} className={"flex w-36 cursor-pointer items-center justify-center border-x border-outline-variant/10 px-4 grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:w-52 sm:px-8 lg:w-72 lg:px-12"} key={`${logo.alt}-${index}`}>
                <img alt={logo.alt} className={`${logo.heightClass} w-auto object-contain`} src={logo.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeEstimatorSection() {
  return (
    <section className={"relative mx-margin-mobile my-2 overflow-hidden rounded-[2rem] border border-white/10 bg-primary py-10 shadow-2xl backdrop-blur-sm sm:my-4 sm:rounded-[3rem] sm:py-14 md:mx-gutter"}>
      <div className={"absolute inset-0 opacity-20"} style={{ backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)", backgroundSize: "40px 40px" }}></div>
      <div className={"absolute -top-24 -right-24 md:-top-32 md:-right-32 w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"}></div>
      <div className={"absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"}></div>
      <div className={"max-w-container-max mx-auto px-5 md:px-8 lg:px-12 relative z-10 text-white"}>
        <div className={"grid items-center gap-6 md:gap-8 lg:grid-cols-12 lg:gap-10"}>
          <div className={"lg:col-span-8 text-center lg:text-left"}>
            <span className={"inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 md:mb-5"}>
              <span className={"material-symbols-outlined text-sm"}>calculate</span>
              Instant Cost Planning
            </span>
            <h2 className={"font-headline-lg mb-4 text-3xl font-black leading-tight sm:text-4xl md:mb-5 md:text-5xl"}>Instant Precision <span className={"italic text-secondary-container"}>Estimator</span></h2>
            <p className={"text-sm sm:text-base md:text-lg opacity-90 max-w-2xl leading-relaxed mx-auto lg:mx-0"}>Get an accurate sq.ft estimate based on market rates, premium materials, and execution standards tailored for your project.</p>
            <div className={"flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 mt-5 md:mt-6"}>
              <Link className={"bg-secondary-container text-on-secondary px-6 md:px-8 py-3.5 md:py-4 rounded-2xl font-black text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-lg inline-flex items-center gap-3"} to={"/estimate-calculator"}>
                Launch Calculator
                <span className={"material-symbols-outlined font-black"}>calculate</span>
              </Link>
              <span className={"text-xs md:text-sm text-white/80 font-semibold"}>Starts from Rs.1899/sq.ft</span>
            </div>
          </div>

          <div className={"lg:col-span-4"}>
            <div className={"rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 md:p-6 space-y-4"}>
              <h3 className={"text-lg md:text-xl font-black text-white"}>Why this estimator?</h3>
              <div className={"space-y-3 text-sm md:text-base text-white/90"}>
                <p className={"flex items-start gap-2"}><span className={"material-symbols-outlined text-sm mt-0.5 text-secondary-container"}>done</span>Material-wise transparent costing</p>
                <p className={"flex items-start gap-2"}><span className={"material-symbols-outlined text-sm mt-0.5 text-secondary-container"}>done</span>Accurate scope based estimation</p>
                <p className={"flex items-start gap-2"}><span className={"material-symbols-outlined text-sm mt-0.5 text-secondary-container"}>done</span>Fast plan for budget decisions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeFaqSection() {
  return (
    <section className={"px-margin-mobile pb-12 pt-10 sm:pb-16 sm:pt-12 md:px-gutter"}>
      <div className={"mx-auto max-w-4xl"}>
        <div className={"flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12 text-center mx-auto max-w-3xl"}>
          <div className={"w-full"}>
            <h2 className={"font-headline-lg mb-5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl"}>Common <br /><span className={"text-primary italic"}>Questions</span></h2>
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
