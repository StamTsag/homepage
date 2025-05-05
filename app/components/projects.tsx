import { Project } from "../types";
import ProjectCard from "./project-card";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "DevPair",
      description:
        "Find developers who vibe with your vision and match your energy. Build real, meaningful projects together with DevPair..",
      link: "https://devpair.app",
      tags: ["Next.JS", "shadcn", "Tailwind", "Supabase", "Stripe"],
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
      title: "LinkShr",
      description:
        "Shorten those long links to a simple readable format, online.",
      link: "https://linkshr.stamtsag.com",
      tags: ["Next.JS", "shadcn", "Tailwind", "Java", "Spring Boot"],
      github: "https://github.com/StamTsag/linkshr",
      usePng: true,
    },
  ];

  return (
    <section
      id="projects"
      className="md:pr-[15%] md:pl-[15%] py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return <ProjectCard {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}
