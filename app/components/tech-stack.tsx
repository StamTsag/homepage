import { Card } from "@/components/ui/card";

interface Technology {
  category: string;
  skills: string[];
}

const technologies: Technology[] = [
  {
    category: "Frontend",
    skills: [
      "Svelte",
      "SvelteKit",
      "React",
      "Next.JS",
      "shadcn",
      "Typescript",
      "PostCSS",
      "Tailwind",
      "Vite",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.JS",
      "Java",
      "Javascript",
      "Typescript",
      "Express",
      "Spring Boot",
      "Prisma",
      "Drizzle",
      "Mocha",
      "Jest",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    category: "DevOps",
    skills: [
      "Docker",
      "AWS",
      "Azure",
      "CircleCI",
      "Github Actions",
      "Git",
      "Linux",
      "PM2",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Trello",
      "VS Code",
      "Postman",
      "Figma",
      "Jest",
      "GitHub",
      "Vercel",
      "Render",
      "PostHog",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="md:pr-[15%] md:pl-[15%] py-12 md:py-24 lg:py-32"
    >
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Tech Stack
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {technologies.map((tech) => (
            <Card key={tech.category} className="p-6 backdrop-blur-lg">
              <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-xl bg-white/10 px-2 py-1 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
