import { Project } from "../types";
import ProjectCard from "./project-card";
import { motion } from "framer-motion";

export default function WorkedOn() {
  const projects: Project[] = [
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
    <section
      id="worked-on"
      className="md:pr-[15%] md:pl-[15%] py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ bounce: false, duration: 0.2, delay: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
        >
          Worked On
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            return (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  bounce: false,
                  duration: 0.2,
                  delay: 1 + i / 5,
                }}
                viewport={{ once: true }}
              >
                <ProjectCard {...project} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
