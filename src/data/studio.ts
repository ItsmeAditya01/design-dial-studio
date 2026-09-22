import exhibitionImage from "@/assets/exhibition.jpg";
import packagingImage from "@/assets/packaging.jpg";
import identityImage from "@/assets/identity.jpg";
import environmentalImage from "@/assets/environmental.jpg";

export type ProjectCategory = "Exhibitions" | "Packaging" | "Identity" | "Flex / Graphics";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  client: string;
  description: string;
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  layout: string;
  imagePosition?: string;
};

export const projects: Project[] = [
  {
    id: "axis-pavilion",
    title: "Axis Pavilion",
    category: "Exhibitions",
    year: "2026",
    client: "Axis Materials",
    description: "A modular exhibition environment built from light, reflection and a precise rhythm of reusable frames.",
    thumbnail: exhibitionImage,
    heroImage: exhibitionImage,
    gallery: [environmentalImage, identityImage],
    layout: "project-wide",
  },
  {
    id: "form-one",
    title: "Form No. 01",
    category: "Packaging",
    year: "2026",
    client: "Form Laboratory",
    description: "A tactile packaging family that turns geometric restraint into a distinctive shelf presence.",
    thumbnail: packagingImage,
    heroImage: packagingImage,
    gallery: [identityImage, exhibitionImage],
    layout: "project-tall",
  },
  {
    id: "northline",
    title: "Northline Identity",
    category: "Identity",
    year: "2025",
    client: "Northline Cultural Trust",
    description: "A flexible identity language balancing institutional clarity with the energy of contemporary culture.",
    thumbnail: identityImage,
    heroImage: identityImage,
    gallery: [environmentalImage, packagingImage],
    layout: "project-square",
  },
  {
    id: "field-scale",
    title: "Field / Scale",
    category: "Flex / Graphics",
    year: "2025",
    client: "Field Arts Centre",
    description: "An environmental graphic system that moves from printed matter to monumental interior surfaces.",
    thumbnail: environmentalImage,
    heroImage: environmentalImage,
    gallery: [identityImage, exhibitionImage],
    layout: "project-landscape",
  },
  {
    id: "material-dialogues",
    title: "Material Dialogues",
    category: "Exhibitions",
    year: "2025",
    client: "Material Council",
    description: "A quiet, immersive display architecture designed around transparency, sequence and material encounter.",
    thumbnail: exhibitionImage,
    heroImage: exhibitionImage,
    gallery: [packagingImage, environmentalImage],
    layout: "project-portrait",
    imagePosition: "center",
  },
  {
    id: "still-house",
    title: "Still House",
    category: "Packaging",
    year: "2024",
    client: "Still House Objects",
    description: "Packaging built as a family of collectible objects, unified by proportion and material contrast.",
    thumbnail: packagingImage,
    heroImage: packagingImage,
    gallery: [identityImage, environmentalImage],
    layout: "project-small",
    imagePosition: "center 64%",
  },
  {
    id: "signal-commons",
    title: "Signal Commons",
    category: "Flex / Graphics",
    year: "2024",
    client: "Ahmedabad Design Week",
    description: "A bold large-format system connecting wayfinding, event graphics and the architecture of a city venue.",
    thumbnail: environmentalImage,
    heroImage: environmentalImage,
    gallery: [exhibitionImage, identityImage],
    layout: "project-final",
  },
];

export const services = [
  {
    number: "01",
    title: "Exhibition Design",
    description: "Booths, stalls and spatial environments designed to attract attention, communicate your brand and create memorable visitor experiences.",
    keywords: ["Booths", "Stalls", "Displays", "Spatial Graphics", "Exhibition Environments"],
    image: exhibitionImage,
  },
  {
    number: "02",
    title: "Packaging Design",
    description: "Packaging systems that translate brand personality into form, structure, material and visual presence.",
    keywords: ["Packaging Systems", "Structural Design", "Packaging Graphics", "Labels", "Print", "Production"],
    image: packagingImage,
  },
  {
    number: "03",
    title: "Brand Identity",
    description: "Visual identity systems that create a consistent and recognizable language across digital and physical touchpoints.",
    keywords: ["Logo", "Brand Mark", "Typography", "Colour System", "Favicon", "Visual Assets", "Brand Guidelines"],
    image: identityImage,
  },
  {
    number: "04",
    title: "Flex & Large-Format Graphics",
    description: "High-impact graphics designed for physical visibility across events, exhibitions, retail spaces and promotional environments.",
    keywords: ["Flex Banners", "Event Graphics", "Large-Format Printing", "Promotional Graphics", "Environmental Graphics", "Signage", "Backdrop Design"],
    image: environmentalImage,
  },
];