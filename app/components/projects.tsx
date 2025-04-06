import { Project } from "../types";
import ProjectCard from "./project-card";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Acrylica",
      description:
        "A minimalistic, acrylic-based design operating system on the web.",
      github: "https://github.com/StamTsag/acrylica",
      link: "https://acrylica.stamtsag.com",
      tags: ["SvelteKit", "shadcn", "Tailwind"],
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
      title: "Fronvo",
      description:
        "Next-gen social media, privacy-oriented, performant and unique.",
      link: "https://fronvo.com",
      github: "https://github.com/Fronvo",
      tags: ["SvelteKit", "shadcn", "Tailwind", "Node.JS", "Prisma"],
    },
    {
      title: "Litestore",
      description:
        "Your own private, lite-weight and secure online file storage.",
      github: "https://github.com/StamTsag/Litestore",
      link: "https://litestore.stamtsag.com",
      tags: ["Next.JS", "shadcn", "Tailwind", "Node.JS", "Prisma"],
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
