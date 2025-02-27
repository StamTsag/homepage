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
      "Tailwind",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.JS",
      "Typescript",
      "Express",
      "Prisma",
      "Drizzle",
      "Jest",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "Azure", "CI/CD", "Git", "Linux"],
  },
  {
    category: "Tools",
    skills: [
      "VS Code",
      "Postman",
      "Figma",
      "Jest",
      "GitHub",
      "Vercel",
      "Render",
      "CircleCI",
    ],
  },
];

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
