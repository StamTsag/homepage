import { Project } from "../types";
import ProjectCard from "./project-card";

export default function Projects() {
  const projects: Project[] = [
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
    {
      title: "TowerVerse",
      description: "A dungeon-themed online multiplayer game made in Godot.",
      link: "https://github.com/TowerVerse",
      github: "https://github.com/TowerVerse",
      tags: ["GDScript", "Typescript", "Python", "Rust"],
      usePlaceholder: true,
    },
    {
      title: "Ezier",
      description:
        "An organisation aiming to create simple ports of famous JavaScript libraries.",
      link: "https://github.com/Ezier-Project",
      github: "https://github.com/Ezier-Project",
      tags: ["Node.JS", "Typescript"],
      usePlaceholder: true,
    },
    {
      title: "Dogey",
      description:
        "A pythonic wrapper of the deprecated stage platform, DogeHouse.",
      link: "https://github.com/StamTsag/dogey",
      github: "https://github.com/StamTsag/dogey",
      tags: ["Python"],
      usePlaceholder: true,
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
