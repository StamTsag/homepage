import { Project } from "../types";
import ProjectCard from "./project-card";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "TuneXify",
      description:
        "Instantly download music from both Youtube & Spotify with just a link.",
      link: "https://tunexify.stamtsag.com",
      tags: ["Mext.JS", "shadcn", "Tailwind"],
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
    {
      title: "XMAS Counter",
      description:
        "A stylish christmas day counter for those impatiently waiting.",
      github: "https://github.com/StamTsag/xmas-counter",
      link: "https://xmas.stamtsag.com/",
      tags: ["SvelteKit"],
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
