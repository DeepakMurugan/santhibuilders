export type ProjectCategory = "Residential";
export type ProjectSize = "wide" | "tall" | "square";
export type ProjectStatus = "Completed" | "Ongoing";

export type ProjectListingItem = {
  title: string;
  type: ProjectCategory;
  image: string;
  to: string;
  slug: string;
  size: ProjectSize;
  status: ProjectStatus;
};

export type ProjectDetailItem = {
  category: ProjectCategory;
  title: string;
  subtitle: string;
  hero: string;
  status: string;
  location: string;
  builtUpArea: string;
  plotArea: string;
};

export const PROJECT_FILTERS = [
  "All Projects",
  "Completed",
  "Ongoing",
] as const;

export const PROJECT_LISTING_ITEMS: ProjectListingItem[] = [
  {
    title: "Sobana",
    type: "Residential",
    image: "/images/excellence.jpg",
    to: "/projects/sobana",
    slug: "sobana",
    size: "square",
    status: "Completed",
  },
  {
    title: "Akshathra",
    type: "Residential",
    image: "/images/highrise.jpg",
    to: "/projects/akshathra",
    slug: "akshathra",
    size: "square",
    status: "Completed",
  },
  {
    title: "Gomathi",
    type: "Residential",
    image: "/images/living-room.jpg",
    to: "/projects/gomathi",
    slug: "gomathi",
    size: "square",
    status: "Completed",
  },
  {
    title: "Arumugam",
    type: "Residential",
    image: "/images/steel-detail.jpg",
    to: "/projects/arumugam",
    slug: "arumugam",
    size: "square",
    status: "Ongoing",
  },
  {
    title: "Sivakumar",
    type: "Residential",
    image: "/images/excellence.jpg",
    to: "/projects/sivakumar",
    slug: "sivakumar",
    size: "square",
    status: "Completed",
  },
  {
    title: "Rajiv Menon",
    type: "Residential",
    image: "/images/highrise.jpg",
    to: "/projects/rajiv-menon",
    slug: "rajiv-menon",
    size: "square",
    status: "Completed",
  },
  {
    title: "Ms. Lucy Mathews",
    type: "Residential",
    image: "/images/living-room.jpg",
    to: "/projects/ms-lucy-mathews",
    slug: "ms-lucy-mathews",
    size: "square",
    status: "Completed",
  },
  {
    title: "Mr. Dinesh",
    type: "Residential",
    image: "/images/steel-detail.jpg",
    to: "/projects/mr-dinesh",
    slug: "mr-dinesh",
    size: "square",
    status: "Completed",
  },
  {
    title: "Mr. Kannan",
    type: "Residential",
    image: "/images/excellence.jpg",
    to: "/projects/mr-kannan",
    slug: "mr-kannan",
    size: "square",
    status: "Completed",
  },
  {
    title: "Cauvery Garden Residence",
    type: "Residential",
    image: "/images/highrise.jpg",
    to: "/projects/cauvery-garden-residence",
    slug: "cauvery-garden-residence",
    size: "square",
    status: "Ongoing",
  },
  {
    title: "East Coast Courtyard",
    type: "Residential",
    image: "/images/living-room.jpg",
    to: "/projects/east-coast-courtyard",
    slug: "east-coast-courtyard",
    size: "square",
    status: "Ongoing",
  },
];

export const PROJECT_DETAILS: Record<string, ProjectDetailItem> = {
  sobana: {
    category: "Residential",
    title: "Sobana",
    subtitle: "Residential project details",
    hero: "/images/excellence.jpg",
    status: "Completed",
    location: "Pinnachikuppam, Puducherry",
    builtUpArea: "2467 sq ft",
    plotArea: "2327 sq ft",
  },
  akshathra: {
    category: "Residential",
    title: "Akshathra",
    subtitle: "Residential project details",
    hero: "/images/highrise.jpg",
    status: "Completed",
    location: "Nannilam, Thiruvarur",
    builtUpArea: "2052 sq ft",
    plotArea: "1335 sq ft",
  },
  gomathi: {
    category: "Residential",
    title: "Gomathi",
    subtitle: "Residential project details",
    hero: "/images/living-room.jpg",
    status: "Completed",
    location: "Pinnachikuppam, Puducherry",
    builtUpArea: "2820 sq ft",
    plotArea: "2205 sq ft",
  },
  arumugam: {
    category: "Residential",
    title: "Arumugam",
    subtitle: "Residential project details",
    hero: "/images/steel-detail.jpg",
    status: "Ongoing",
    location: "Puthukuppam, Puducherry",
    builtUpArea: "1273 sq ft",
    plotArea: "804 sq ft",
  },
  sivakumar: {
    category: "Residential",
    title: "Sivakumar",
    subtitle: "Residential project details",
    hero: "/images/excellence.jpg",
    status: "Completed",
    location: "Moorthikuppam, Puducherry",
    builtUpArea: "2820 sq ft",
    plotArea: "2205 sq ft",
  },
  "rajiv-menon": {
    category: "Residential",
    title: "Rajiv Menon",
    subtitle: "Residential project details",
    hero: "/images/highrise.jpg",
    status: "Completed",
    location: "Pillayarkuppam, Puducherry",
    builtUpArea: "2820 sq ft",
    plotArea: "2700 sq ft",
  },
  "ms-lucy-mathews": {
    category: "Residential",
    title: "Ms. Lucy Mathews",
    subtitle: "Residential project details",
    hero: "/images/living-room.jpg",
    status: "Completed",
    location: "Lawspet, Puducherry",
    builtUpArea: "1608 sq ft",
    plotArea: "2400 sq ft",
  },
  "mr-dinesh": {
    category: "Residential",
    title: "Mr. Dinesh",
    subtitle: "Residential project details",
    hero: "/images/steel-detail.jpg",
    status: "Completed",
    location: "Villianur, Puducherry",
    builtUpArea: "2200 sq ft",
    plotArea: "1885 sq ft",
  },
  "mr-kannan": {
    category: "Residential",
    title: "Mr. Kannan",
    subtitle: "Residential project details",
    hero: "/images/excellence.jpg",
    status: "Completed",
    location: "Moorthikuppam, Puducherry",
    builtUpArea: "Not provided",
    plotArea: "2275 sq ft",
  },
  "cauvery-garden-residence": {
    category: "Residential",
    title: "Cauvery Garden Residence",
    subtitle: "Ongoing residential project details",
    hero: "/images/highrise.jpg",
    status: "Ongoing",
    location: "Thiruvarur",
    builtUpArea: "To be confirmed",
    plotArea: "To be confirmed",
  },
  "east-coast-courtyard": {
    category: "Residential",
    title: "East Coast Courtyard",
    subtitle: "Ongoing residential project details",
    hero: "/images/living-room.jpg",
    status: "Ongoing",
    location: "Puducherry",
    builtUpArea: "To be confirmed",
    plotArea: "To be confirmed",
  },
};

export function getProjectBySlug(slug: string) {
  return PROJECT_DETAILS[slug] ?? null;
}
