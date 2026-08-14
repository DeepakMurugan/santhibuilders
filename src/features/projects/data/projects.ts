export type ProjectCategory = "Residential" | "Commercial" | "Corporate" | "Interior" | "Industrial";
export type ProjectSize = "wide" | "tall" | "square";

export type ProjectListingItem = {
  title: string;
  type: ProjectCategory;
  image: string;
  to: string;
  slug: string;
  size: ProjectSize;
};

export type ProjectDetailItem = {
  category: ProjectCategory;
  title: string;
  subtitle: string;
  hero: string;
  stats: Array<{ label: string; value: string; accent?: boolean }>;
  introTitle: string;
  introText: string[];
};

export const PROJECT_FILTERS = [
  "All Projects",
  "Commercial",
  "Residential",
  "Interior",
  "Industrial",
  "Corporate",
] as const;

export const PROJECT_LISTING_ITEMS: ProjectListingItem[] = [
  {
    title: "Azure Horizon Villa",
    type: "Residential",
    image: "/images/excellence.jpg",
    to: "/projects/azure-horizon-villa",
    slug: "azure-horizon-villa",
    size: "wide",
  },
  {
    title: "Monolith Residences",
    type: "Residential",
    image: "/images/highrise.jpg",
    to: "/projects/monolith-residences",
    slug: "monolith-residences",
    size: "square",
  },
  {
    title: "Sea Crest Villas",
    type: "Residential",
    image: "/images/living-room.jpg",
    to: "/projects/sea-crest-villas",
    slug: "sea-crest-villas",
    size: "square",
  },
  {
    title: "Steel Echo Tower",
    type: "Commercial",
    image: "/images/highrise.jpg",
    to: "/projects/steel-echo-tower",
    slug: "steel-echo-tower",
    size: "tall",
  },
  {
    title: "North Point Offices",
    type: "Commercial",
    image: "/images/steel-detail.jpg",
    to: "/projects/north-point-offices",
    slug: "north-point-offices",
    size: "square",
  },
  {
    title: "Urban Crest Plaza",
    type: "Commercial",
    image: "/images/excellence.jpg",
    to: "/projects/urban-crest-plaza",
    slug: "urban-crest-plaza",
    size: "square",
  },
  {
    title: "Crestline Atrium",
    type: "Corporate",
    image: "/images/steel-detail.jpg",
    to: "/projects/crestline-atrium",
    slug: "crestline-atrium",
    size: "square",
  },
  {
    title: "Summit Boardroom",
    type: "Corporate",
    image: "/images/living-room.jpg",
    to: "/projects/summit-boardroom",
    slug: "summit-boardroom",
    size: "square",
  },
  {
    title: "Vantage Suite",
    type: "Corporate",
    image: "/images/highrise.jpg",
    to: "/projects/vantage-suite",
    slug: "vantage-suite",
    size: "square",
  },
  {
    title: "Sunline Interiors",
    type: "Interior",
    image: "/images/living-room.jpg",
    to: "/projects/sunline-interiors",
    slug: "sunline-interiors",
    size: "square",
  },
  {
    title: "Gallery Residence",
    type: "Interior",
    image: "/images/excellence.jpg",
    to: "/projects/gallery-residence",
    slug: "gallery-residence",
    size: "wide",
  },
  {
    title: "Lumen House",
    type: "Interior",
    image: "/images/steel-detail.jpg",
    to: "/projects/lumen-house",
    slug: "lumen-house",
    size: "square",
  },
  {
    title: "Harbor Works Hub",
    type: "Industrial",
    image: "/images/steel-detail.jpg",
    to: "/projects/harbor-works-hub",
    slug: "harbor-works-hub",
    size: "square",
  },
  {
    title: "LogiTech Hub",
    type: "Industrial",
    image: "/images/highrise.jpg",
    to: "/projects/logitech-hub",
    slug: "logitech-hub",
    size: "tall",
  },
  {
    title: "Portline Depot",
    type: "Industrial",
    image: "/images/excellence.jpg",
    to: "/projects/portline-depot",
    slug: "portline-depot",
    size: "square",
  },
];

export const PROJECT_DETAILS: Record<string, ProjectDetailItem> = {
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
};

export const PROJECT_GALLERIES: Record<ProjectCategory, string[]> = {
  Residential: ["/images/excellence.jpg", "/images/highrise.jpg", "/images/living-room.jpg", "/images/steel-detail.jpg"],
  Commercial: ["/images/highrise.jpg", "/images/steel-detail.jpg", "/images/excellence.jpg", "/images/living-room.jpg"],
  Corporate: ["/images/steel-detail.jpg", "/images/living-room.jpg", "/images/highrise.jpg", "/images/excellence.jpg"],
  Interior: ["/images/living-room.jpg", "/images/excellence.jpg", "/images/steel-detail.jpg", "/images/highrise.jpg"],
  Industrial: ["/images/steel-detail.jpg", "/images/highrise.jpg", "/images/excellence.jpg", "/images/living-room.jpg"],
};

export const PROJECT_RELATIONS = [
  { title: "The Zenith Atrium", location: "Bangalore", image: "/images/highrise.jpg", to: "/projects/steel-echo-tower" },
  { title: "North Point Offices", location: "Chennai", image: "/images/steel-detail.jpg", to: "/projects/north-point-offices" },
  { title: "Verdant Monolith", location: "Ooty", image: "/images/excellence.jpg", to: "/projects/monolith-residences" },
  { title: "Summit Boardroom", location: "Chennai", image: "/images/living-room.jpg", to: "/projects/summit-boardroom" },
  { title: "Celestial Towers", location: "Kochi", image: "/images/steel-detail.jpg", to: "/projects/crestline-atrium" },
  { title: "Gallery Residence", location: "Chennai", image: "/images/excellence.jpg", to: "/projects/gallery-residence" },
] as const;

export const PROJECT_PILLARS = [
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

export const PROJECT_TIMELINE = [
  { phase: "Month 0-2", title: "Concept and Test Fit", text: "Early massing and feasibility studies set the spatial framework." },
  { phase: "Month 3-10", title: "Civil Framework", text: "Core structure, slabs, and support systems were executed in sequence." },
  { phase: "Month 11-16", title: "Technical Fit-out", text: "Services, finishes, and lighting were integrated with the architecture." },
  { phase: "Month 17-18", title: "Final Handover", text: "Final inspections, detailing checks, and client review completed the project." },
] as const;

export function getProjectBySlug(slug: string) {
  return PROJECT_DETAILS[slug] ?? null;
}

export function getGalleryForCategory(category: ProjectCategory) {
  return PROJECT_GALLERIES[category];
}
