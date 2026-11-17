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
  gallery: [string, string];
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
    title: "Shanthi Residency",
    type: "Residential",
    image: "/images/highrise.jpg",
    to: "/projects/shanthi-residency",
    slug: "shanthi-residency",
    size: "square",
    status: "Completed",
  },
  {
    title: "Shobana Residency",
    type: "Residential",
    image: "../images/project/s22.jpeg",
    to: "/projects/shobana-residency",
    slug: "shobana-residency",
    size: "square",
    status: "Completed",
  },
  {
    title: "Velmurugan Residency",
    type: "Residential",
    image: "/images/living-room.jpg",
    to: "/projects/velmurugan-residency",
    slug: "velmurugan-residency",
    size: "square",
    status: "Completed",
  },
  {
    title: "Kannan Residency",
    type: "Residential",
    image: "/images/excellence.jpg",
    to: "/projects/kannan-residency",
    slug: "kannan-residency",
    size: "square",
    status: "Completed",
  },
  {
    title: "Arumugam Residency",
    type: "Residential",
    image: "/images/arumugam.jpg",
    to: "/projects/arumugam-residency",
    slug: "arumugam-residency",
    size: "square",
    status: "Ongoing",
  },
];

export const PROJECT_DETAILS: Record<string, ProjectDetailItem> = {
  "shanthi-residency": {
    category: "Residential",
    title: "Shanthi Residency",
    subtitle: "Residential project details",
    hero: "/images/highrise.jpg",
    gallery: ["/images/highrise.jpg", "/images/excellence.jpg"],
    status: "Completed",
    location: "Puducherry",
    builtUpArea: "To be confirmed",
    plotArea: "To be confirmed",
  },
  "shobana-residency": {
    category: "Residential",
    title: "Shobana Residency",
    subtitle: "Residential project details",
    hero: "../images/project/s22.jpeg",
    gallery: ["../images/project/s11.jpeg", "../images/project/s22.jpeg","../images/project/s33.jpeg","../images/project/s44.jpeg","../images/project/s55.jpeg"],
    status: "Completed",
    location: "Pinnachikuppam, Puducherry",
    builtUpArea: "2467 sq ft",
    plotArea: "2327 sq ft",
  },
  "velmurugan-residency": {
    category: "Residential",
    title: "Velmurugan Residency",
    subtitle: "Residential project details",
    hero: "/images/living-room.jpg",
    gallery: ["/images/living-room.jpg", "/images/renova.png"],
    status: "Completed",
    location: "Puducherry",
    builtUpArea: "To be confirmed",
    plotArea: "To be confirmed",
  },
  "kannan-residency": {
    category: "Residential",
    title: "Kannan Residency",
    subtitle: "Residential project details",
    hero: "/images/excellence.jpg",
    gallery: ["/images/excellence.jpg", "/images/highrise.jpg"],
    status: "Completed",
    location: "Puducherry",
    builtUpArea: "To be confirmed",
    plotArea: "To be confirmed",
  },
  "arumugam-residency": {
    category: "Residential",
    title: "Arumugam Residency",
    subtitle: "Residential project details",
    hero: "/images/arumugam.jpg",
    gallery: ["/images/arumugam.jpg", "/images/arumugam2.jpg"],
    status: "Ongoing",
    location: "Puthukuppam, Puducherry",
    builtUpArea: "1273 sq ft",
    plotArea: "804 sq ft",
  },
};

export function getProjectBySlug(slug: string) {
  return PROJECT_DETAILS[slug] ?? null;
}
