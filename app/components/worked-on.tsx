import { Project } from "../types";
import ProjectCard from "./project-card";

export default function WorkedOn() {
  const projects: Project[] = [
    {
      title: "FindEnergy",
      description:
        "Find and compare USA electricity & energy providers with ease.",
      link: "https://findenergy.com",
      tags: ["SvelteKit", "shadcn", "Tailwind", "Node.JS"],
      usePng: true,
    },
    {
      title: "Roots",
      description:
        "Manage your sports team efficiently with a sophisticated admin panel.",
      link: "https://rootsadmin.com",
      tags: ["SvelteKit", "shadcn", "Tailwind"],
      usePng: true,
    },
    {
      title: "Moonrate AI",
      description:
        "Efficiently find the best hotels for you with the use of new-generation AI.",
      link: "https://moonrate.ai",
      tags: ["Next.JS", "shadcn", "Tailwind", "Node.JS"],
      usePng: true,
    },
    {
      title: "E-restaurants",
      description:
        "Read reviews, earn rewards points and free tables at the best restaurants in Greece.",
      link: "https://e-restaurants.gr/",
      tags: ["SvelteKit", "shadcn", "Tailwind"],
      usePng: true,
    },
    {
      title: "Tynker AI",
      description:
        "Web-based interactive online games powered by AI prompt submission.",
      link: "https://tynkerai.com",
      tags: ["SvelteKit", "shadcn", "Tailwind", "Node.JS"],
      usePng: true,
    },
    {
      title: "Cryptify AI",
      description:
        "Gain insights into influencer (KOL) with a powerful dashboard.",
      link: "https://cryptify.ai",
      tags: ["SvelteKit", "shadcn", "Tailwind", "drizzle"],
      usePng: true,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        return <ProjectCard {...project} />;
      })}
    </div>
  );
}
