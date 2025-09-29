import dummyImg1 from "../img/stock.jpg";

export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  category: string; // e.g. "app", "website", "game"
  liveLink?: string;
  sourceLink?: string;
  content?: () => Promise<any>;
};

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Project 1",
    description: "Short placeholder description for Project 1.",
    thumbnail: dummyImg1,
    techStack: ["Tech A", "Tech B"],
    category: "Sample",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    slug: "project-2",
    title: "Project 2",
    description: "Short placeholder description for Project 2.",
    thumbnail: dummyImg1,
    techStack: ["Tech X", "Tech Y"],
    category: "Sample",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    slug: "project-3",
    title: "Project 3",
    description: "Short placeholder description for Project 3.",
    thumbnail: dummyImg1,
    techStack: ["Tech 1", "Tech 2"],
    category: "Sample",
    liveLink: "#",
    sourceLink: "#",
  },
  {
    slug: "project-4",
    title: "Project 4",
    description: "Short placeholder description for Project 4.",
    thumbnail: dummyImg1,
    techStack: ["Tech Alpha", "Tech Beta"],
    category: "Sample",
    liveLink: "#",
    sourceLink: "#",
  },
];
