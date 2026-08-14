import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";

const projects = {
  "azure-horizon-villa": {
    category: "Residential",
    title: "Azure Horizon Villa",
    subtitle: "A coastal home shaped by light, privacy, and structural clarity.",
    hero: "/images/excellence.jpg",
    stats: [
      { label: "Sq. Ft", value: "12,400" },
      { label: "Year", value: "2026" },
      { label: "Type", value: "Residential" },
      { label: "Rating", value: "LEED Gold", accent: true },
    ],
    introTitle: "Balancing transparency with the solidity of concrete.",
    introText: [
      "This residence was planned as a calm architectural retreat that brings openness to the interior while maintaining privacy from the street edge.",
      "Large spans, careful shading, and a clean structural rhythm allow the home to feel generous, efficient, and visually calm.",
    ],
  },
  "steel-echo-tower": {
    category: "Commercial",
    title: "Steel Echo Tower",
    subtitle: "A high-rise identity defined by precision, scale, and a strong urban profile.",
    hero: "/images/highrise.jpg",
    stats: [
      { label: "Floors", value: "28" },
      { label: "Year", value: "2025" },
      { label: "Type", value: "Commercial" },
      { label: "Rating", value: "Platinum", accent: true },
    ],
    introTitle: "A vertical landmark designed for performance and presence.",
    introText: [
      "The tower focuses on efficient floor plates, modern envelope detailing, and a facade language that reads sharply from the street.",
      "Its composition balances business functionality with a premium image suitable for a growing commercial district.",
    ],
  },
  "crestline-atrium": {
    category: "Corporate",
    title: "Crestline Atrium",
    subtitle: "A corporate lobby and workplace interior with layered light and clean geometry.",
    hero: "/images/steel-detail.jpg",
    stats: [
      { label: "Area", value: "38,000" },
      { label: "Year", value: "2025" },
      { label: "Type", value: "Corporate" },
      { label: "Rating", value: "A+", accent: true },
    ],
    introTitle: "A civic interior shaped around clarity, movement, and light.",
    introText: [
      "The atrium was organized to create a memorable entry sequence while preserving circulation efficiency for daily use.",
      "Material transitions and daylight control were treated as part of the building's identity, not just decoration.",
    ],
  },
  "sunline-interiors": {
    category: "Interior",
    title: "Sunline Interiors",
    subtitle: "A warm residential interior that pairs comfort with refined minimalism.",
    hero: "/images/living-room.jpg",
    stats: [
      { label: "Rooms", value: "16" },
      { label: "Year", value: "2024" },
      { label: "Type", value: "Interior" },
      { label: "Rating", value: "Premium", accent: true },
    ],
    introTitle: "Interiors that feel soft, calm, and deeply usable.",
    introText: [
      "The layout was shaped for family life, natural light, and a soft palette that keeps the space visually open.",
      "Joinery, stone, and concealed lighting work together to create a composed and modern interior experience.",
    ],
  },
  "monolith-residences": {
    category: "Residential",
    title: "Monolith Residences",
    subtitle: "A residential cluster with strong massing and efficient site planning.",
    hero: "/images/highrise.jpg",
    stats: [
      { label: "Units", value: "42" },
      { label: "Year", value: "2025" },
      { label: "Type", value: "Residential" },
      { label: "Rating", value: "Gold", accent: true },
    ],
    introTitle: "Compact density handled through proportion and clean planning.",
    introText: [
      "The building massing was organized to create a balanced skyline profile while keeping circulation and services efficient.",
      "Shared amenity zones and private living spaces were separated clearly for better day-to-day usability.",
    ],
  },
  "harbor-works-hub": {
    category: "Industrial",
    title: "Harbor Works Hub",
    subtitle: "A logistics-focused industrial building with durable surfaces and simple flow.",
    hero: "/images/steel-detail.jpg",
    stats: [
      { label: "Area", value: "56,000" },
      { label: "Year", value: "2024" },
      { label: "Type", value: "Industrial" },
      { label: "Rating", value: "Fast-Track", accent: true },
    ],
    introTitle: "Built for movement, storage, and operational clarity.",
    introText: [
      "The planning approach prioritized loading efficiency, maintenance access, and durable envelope treatment.",
      "The resulting structure is functional, robust, and easy to operate across different business needs.",
    ],
  },
  "north-point-offices": {
    category: "Commercial",
    title: "North Point Offices",
    subtitle: "A clean office building tuned for daylight, efficiency, and brand presence.",
    hero: "/images/steel-detail.jpg",
    stats: [
      { label: "Area", value: "24,500" },
      { label: "Year", value: "2025" },
      { label: "Type", value: "Commercial" },
      { label: "Rating", value: "Gold", accent: true },
    ],
    introTitle: "Efficient workplace planning with a clear architectural identity.",
    introText: [
      "The facade and floor plate were tuned to deliver an office building that feels premium but remains practical.",
      "Large glazing bands and a simple structural rhythm help the building read modern from every angle.",
    ],
  },
  "summit-boardroom": {
    category: "Corporate",
    title: "Summit Boardroom",
    subtitle: "A private boardroom and executive suite with polished surfaces and warm lighting.",
    hero: "/images/living-room.jpg",
    stats: [
      { label: "Rooms", value: "8" },
      { label: "Year", value: "2024" },
      { label: "Type", value: "Corporate" },
      { label: "Rating", value: "Executive", accent: true },
    ],
    introTitle: "Interiors crafted for decision-making, privacy, and a confident first impression.",
    introText: [
      "The space combines soft timber finishes with restrained lighting so the atmosphere stays calm and focused.",
      "Reception, meeting, and lounge functions are layered cleanly within the same coordinated language.",
    ],
  },
  "gallery-residence": {
    category: "Interior",
    title: "Gallery Residence",
    subtitle: "A residential interior featuring gallery-like walls, light, and gentle material contrast.",
    hero: "/images/excellence.jpg",
    stats: [
      { label: "Area", value: "5,800" },
      { label: "Year", value: "2024" },
      { label: "Type", value: "Interior" },
      { label: "Rating", value: "Premium", accent: true },
    ],
    introTitle: "A composed interior narrative built around display, comfort, and light.",
    introText: [
      "The residence is arranged like a sequence of framed moments rather than a conventional layout.",
      "Neutral tones and textural layering keep the space refined while staying highly livable.",
    ],
  },
  "logitech-hub": {
    category: "Industrial",
    title: "LogiTech Hub",
    subtitle: "A fast-track industrial facility designed for movement, storage, and scale.",
    hero: "/images/highrise.jpg",
    stats: [
      { label: "Area", value: "56,000" },
      { label: "Year", value: "2024" },
      { label: "Type", value: "Industrial" },
      { label: "Rating", value: "Operational", accent: true },
    ],
    introTitle: "Built to support logistics efficiency and straightforward maintenance.",
    introText: [
      "The project focuses on loading efficiency, durable finishes, and clear circulation for ongoing operations.",
      "Its form is intentionally direct so the building can support changing industrial requirements over time.",
    ],
  },
  "sea-crest-villas": {
    category: "Residential",
    title: "Sea Crest Villas",
    subtitle: "A low-rise coastal residential composition with open views and strong privacy.",
    hero: "/images/living-room.jpg",
    stats: [
      { label: "Units", value: "8" },
      { label: "Year", value: "2025" },
      { label: "Type", value: "Residential" },
      { label: "Rating", value: "Gold", accent: true },
    ],
    introTitle: "A quiet residential setting with a resort-like character.",
    introText: [
      "The villas are organized to maintain privacy while still opening toward garden and horizon views.",
      "Natural textures, deep shade lines, and clear structural composition create a calm modern identity.",
    ],
  },
  "urban-crest-plaza": {
    category: "Commercial",
    title: "Urban Crest Plaza",
    subtitle: "A compact commercial landmark with a polished frontage and efficient planning.",
    hero: "/images/excellence.jpg",
    stats: [
      { label: "Area", value: "18,600" },
      { label: "Year", value: "2025" },
      { label: "Type", value: "Commercial" },
      { label: "Rating", value: "Prime", accent: true },
    ],
    introTitle: "Designed for visibility, tenant efficiency, and a crisp street presence.",
    introText: [
      "The plaza uses simple massing and a clear entry sequence to feel modern and legible.",
      "Its interior circulation and facade rhythm support a flexible commercial use profile.",
    ],
  },
  "vantage-suite": {
    category: "Corporate",
    title: "Vantage Suite",
    subtitle: "An executive-focused corporate interior with layered lighting and premium finishes.",
    hero: "/images/living-room.jpg",
    stats: [
      { label: "Area", value: "9,200" },
      { label: "Year", value: "2024" },
      { label: "Type", value: "Corporate" },
      { label: "Rating", value: "Executive", accent: true },
    ],
    introTitle: "A corporate suite that feels sharp, calm, and polished.",
    introText: [
      "The interior is arranged to support meetings, reception, and private review spaces with ease.",
      "Warm materials and restrained lighting give the suite a premium but focused atmosphere.",
    ],
  },
  "lumen-house": {
    category: "Interior",
    title: "Lumen House",
    subtitle: "A bright interior project defined by texture, openness, and soft visual contrast.",
    hero: "/images/steel-detail.jpg",
    stats: [
      { label: "Area", value: "6,400" },
      { label: "Year", value: "2024" },
      { label: "Type", value: "Interior" },
      { label: "Rating", value: "Premium", accent: true },
    ],
    introTitle: "A lighter interior language that still feels grounded and bespoke.",
    introText: [
      "The project uses softer contrasts, controlled daylight, and material warmth to create a composed atmosphere.",
      "It is designed to feel premium without becoming visually heavy or overdesigned.",
    ],
  },
  "portline-depot": {
    category: "Industrial",
    title: "Portline Depot",
    subtitle: "An operational industrial facility planned around storage, access, and durability.",
    hero: "/images/steel-detail.jpg",
    stats: [
      { label: "Area", value: "64,000" },
      { label: "Year", value: "2025" },
      { label: "Type", value: "Industrial" },
      { label: "Rating", value: "Fast-Track", accent: true },
    ],
    introTitle: "Engineered for efficient movement and practical long-term operation.",
    introText: [
      "The depot is organized to keep circulation, loading, and maintenance straightforward.",
      "Materials were selected for endurance, low upkeep, and dependable day-to-day use.",
    ],
  },
} as const;

type ProjectSlug = keyof typeof projects;

const designPillars = [
  {
    icon: "architecture",
    title: "Structural Fluidity",
    text: "Long-span slabs and a disciplined column grid reduce visual clutter inside the home.",
  },
  {
    icon: "ac_unit",
    title: "Thermal Regulation",
    text: "Avented shading, insulated glass, and envelope detailing improve comfort in warm coastal conditions.",
  },
  {
    icon: "home_work",
    title: "Spatial Balance",
    text: "Public and private zones are separated cleanly so the plan feels intuitive and calm.",
  },
] as const;

const timeline = [
  { phase: "Month 0-2", title: "Concept and Test Fit", text: "Early massing and feasibility studies set the spatial framework." },
  { phase: "Month 3-10", title: "Civil Framework", text: "Core structure, slabs, and support systems were executed in sequence." },
  { phase: "Month 11-16", title: "Technical Fit-out", text: "Services, finishes, and lighting were integrated with the architecture." },
  { phase: "Month 17-18", title: "Final Handover", text: "Final inspections, detailing checks, and client review completed the project." },
] as const;

const relatedProjects = [
  {
    title: "The Zenith Atrium",
    location: "Bangalore",
    image: "/images/highrise.jpg",
    to: "/projects/steel-echo-tower",
  },
  {
    title: "North Point Offices",
    location: "Chennai",
    image: "/images/steel-detail.jpg",
    to: "/projects/north-point-offices",
  },
  {
    title: "Verdant Monolith",
    location: "Ooty",
    image: "/images/excellence.jpg",
    to: "/projects/monolith-residences",
  },
  {
    title: "Summit Boardroom",
    location: "Chennai",
    image: "/images/living-room.jpg",
    to: "/projects/summit-boardroom",
  },
  {
    title: "Celestial Towers",
    location: "Kochi",
    image: "/images/steel-detail.jpg",
    to: "/projects/crestline-atrium",
  },
  {
    title: "Gallery Residence",
    location: "Chennai",
    image: "/images/excellence.jpg",
    to: "/projects/gallery-residence",
  },
] as const;

const projectGalleries = {
  residential: ["/images/excellence.jpg", "/images/highrise.jpg", "/images/living-room.jpg", "/images/steel-detail.jpg"],
  commercial: ["/images/highrise.jpg", "/images/steel-detail.jpg", "/images/excellence.jpg", "/images/living-room.jpg"],
  corporate: ["/images/steel-detail.jpg", "/images/living-room.jpg", "/images/highrise.jpg", "/images/excellence.jpg"],
  interior: ["/images/living-room.jpg", "/images/excellence.jpg", "/images/steel-detail.jpg", "/images/highrise.jpg"],
  industrial: ["/images/steel-detail.jpg", "/images/highrise.jpg", "/images/excellence.jpg", "/images/living-room.jpg"],
} as const;

export const Route = createFileRoute("/projects/$projectSlug")({
  head: ({ params }) => {
    const project = projects[params.projectSlug as ProjectSlug] ?? projects["azure-horizon-villa"];

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
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
      <h1 className="text-4xl font-extrabold mb-4">Project not found</h1>
      <p className="text-on-surface-variant mb-8">The project you opened does not exist yet.</p>
      <Link className="text-primary font-semibold" to="/projects">
        Back to projects
      </Link>
    </div>
  ),
});

function ProjectDetail() {
  const params = Route.useParams();
  const project = projects[params.projectSlug as ProjectSlug] ?? projects["azure-horizon-villa"];
  const galleryKey =
    project.category === "Commercial"
      ? "commercial"
      : project.category === "Corporate"
        ? "corporate"
        : project.category === "Interior"
          ? "interior"
          : project.category === "Industrial"
            ? "industrial"
            : "residential";
  const galleryImages = projectGalleries[galleryKey];

  useReveal();

  if (!projects[params.projectSlug as ProjectSlug]) {
    throw notFound();
  }

  return (
    <main>
      <section className="relative min-h-140 md:min-h-180 flex items-end overflow-hidden">
        <img alt={project.title} className="absolute inset-0 h-full w-full object-cover" src={project.hero} />
        <div className="absolute inset-0 bg-linear-to-t from-[#050a14]/95 via-[#050a14]/55 to-transparent" />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-12 md:pb-20 text-white reveal active">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/80 mb-5 font-semibold">
            {project.category}
          </p>
          <h1 className="font-display-lg text-[40px] sm:text-[56px] md:text-[74px] leading-[1.06] mb-4 md:mb-5">
            {project.title}
          </h1>
          <p className="max-w-2xl text-white/80 text-[16px] md:text-[20px] leading-relaxed mb-8 md:mb-10">
            {project.subtitle}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 border-t border-white/25 pt-5 md:pt-8">
            {project.stats.map((item) => (
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
              {project.introTitle}
            </h2>
            <div className="space-y-4 text-on-surface-variant text-[16px] md:text-[20px] leading-relaxed">
              {project.introText.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 reveal space-y-5">
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">Design Intent</p>
            <h3 className="text-2xl md:text-4xl font-extrabold">Modern composition with clear hierarchy.</h3>
            <p className="text-on-surface-variant text-[16px] md:text-[20px] leading-relaxed">
              The project was designed to read clearly from a distance while still feeling warm and
              usable at the human scale.
            </p>

            <div className="grid gap-4">
              {designPillars.map((pillar) => (
                <div key={pillar.title} className="rounded-lg border border-outline-variant/50 p-4 md:p-5 bg-surface-container-low flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">{pillar.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{pillar.title}</h4>
                    <p className="text-on-surface-variant text-[15px] md:text-[18px]">{pillar.text}</p>
                  </div>
                </div>
              ))}
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
            <article className="bg-white border border-outline-variant/50 p-6 md:p-8 reveal hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-7">
                <span className="material-symbols-outlined text-[28px]">architecture</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-3">Structural Fluidity</h3>
              <p className="text-on-surface-variant text-[15px] md:text-[18px] leading-relaxed">
                Long-span slabs and a disciplined column grid reduce visual clutter inside the home.
              </p>
            </article>
            <article className="bg-white border border-outline-variant/50 p-6 md:p-8 reveal hover:border-primary transition-colors" style={{ transitionDelay: "80ms" }}>
              <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-7">
                <span className="material-symbols-outlined text-[28px]">ac_unit</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-3">Thermal Regulation</h3>
              <p className="text-on-surface-variant text-[15px] md:text-[18px] leading-relaxed">
                Shading, insulated glass, and envelope detailing improve comfort in coastal conditions.
              </p>
            </article>
            <article className="bg-white border border-outline-variant/50 p-6 md:p-8 reveal hover:border-primary transition-colors" style={{ transitionDelay: "160ms" }}>
              <div className="w-12 h-12 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-7">
                <span className="material-symbols-outlined text-[28px]">home_work</span>
              </div>
              <h3 className="text-2xl font-extrabold mb-3">Spatial Balance</h3>
              <p className="text-on-surface-variant text-[15px] md:text-[18px] leading-relaxed">
                Public and private zones are separated cleanly so the plan feels intuitive and calm.
              </p>
            </article>
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
            {galleryImages.map((image, index) => (
              <div
                key={`${project.title}-${image}`}
                className={[
                  "reveal overflow-hidden",
                  index === 0 ? "md:col-span-7" : index === 1 ? "md:col-span-5" : "md:col-span-6",
                ].join(" ")}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <img alt={`${project.title} gallery ${index + 1}`} className="w-full h-48 md:h-full object-cover" src={image} />
              </div>
            ))}
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
                <div className="w-10 h-10 rounded-full border border-outline-variant text-on-surface flex items-center justify-center font-extrabold mb-5">
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
        <div className="max-w-230 mx-auto px-margin-mobile text-center reveal">
          <span className="material-symbols-outlined text-primary/25 text-[52px] md:text-[72px] mb-3 block">format_quote</span>
          <blockquote className="text-2xl md:text-4xl font-semibold leading-tight text-on-surface mb-8">
            Building a masterpiece requires an engineering partner who understands both precision and personality.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <img alt="Client" className="w-full h-full object-cover" src="/images/living-room.jpg" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">Dr. Anirudh Ramakrishnan</p>
              <p className="text-on-surface-variant text-xs uppercase tracking-[0.14em]">Principal Owner</p>
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
            {relatedProjects.map((project) => (
              <Link key={project.title} to={project.to} className="group reveal">
                <div className="aspect-4/5 overflow-hidden mb-4">
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
            Let us shape your next project with strong engineering, modern detailing, and a construction process you can trust.
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
