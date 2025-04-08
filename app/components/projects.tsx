import { Project } from "../types";
import ProjectCard from "./project-card";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Speedy",
      description:
        "Measure your internet speed efficiently and share your results.",
      link: "https://speedy.stamtsag.com",
      tags: ["Next.JS", "shadcn", "Tailwind", "Java", "Spring Boot"],
      github: "https://github.com/StamTsag/speedy",

      usePng: true,
    },
    {
      title: "TuneXify",
      description:
        "Instantly download music from both Youtube & Spotify with just a link.",
      link: "https://tunexify.stamtsag.com",
      tags: ["Next.JS", "shadcn", "Tailwind"],
      usePng: true,
    },
    {
      title: "LinkShr",
      description:
        "Shorten those long links to a simple readable format, online.",
      link: "https://linkshr.stamtsag.com",
      tags: ["Next.JS", "shadcn", "Tailwind", "Java", "Spring Boot"],
      github: "https://github.com/StamTsag/linkshr",
      usePng: true,
    },
    {
      title: "Acrylica",
      description:
        "A minimalistic, acrylic-based design operating system on the web.",
      github: "https://github.com/StamTsag/acrylica",
      link: "https://acrylica.stamtsag.com",
      tags: ["SvelteKit", "shadcn", "Tailwind"],
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
