import { Project } from "@/app/types";
import ProjectCard from "./project-card";

export default function WorkedOn() {
  const projects: Project[] = [
    {
      title: "EOPYY",
      description:
        "Greek national healthcare infrastructure used by millions of citizens.",
      link: "https://eopyy.gov.gr",
      tags: ["React", "Redux", "CSS", "Weblogic"],
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
      title: "E-restaurants",
      description:
        "Read reviews, earn rewards points and free tables at the best restaurants in Greece.",
      link: "https://e-restaurants.gr/",
      tags: ["SvelteKit", "shadcn", "Tailwind"],
      usePng: true,
    },
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
  ];

  return (
    <section
      id="worked-on"
      className="md:pr-[5%] md:pl-[5%] lg:pl-[15%] lg:pr-[15%] py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Worked On
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            return (
              <div key={project.title}>
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
