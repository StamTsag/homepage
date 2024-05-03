import { Button } from "../ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

interface Project {
  title: string;
  description: string;
  github: string;
  site?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Fronvo",
      description: "Private social media, reimagined.",
      github: "https://github.com/Fronvo",
      site: "https://fronvo.com",
    },
    {
      title: "Litestore",
      description:
        "Your own tracker-less, private, lite-weight online file storage.",
      github: "https://github.com/Shadofer/Litestore",
      site: "https://litestore.shadofer.com",
    },
    {
      title: "TowerVerse",
      description: "A dungeon-themed online multiplayer game made in Godot.",
      github: "https://github.com/TowerVerse",
    },
    {
      title: "Ezier",
      description:
        "An organisation aiming to create simple ports of famous JavaScript libraries.",
      github: "https://github.com/Ezier-Project",
    },
    {
      title: "Homepage",
      description: "This homepage, showcasing my work.",
      github: "https://github.com/Shadofer/homepage",
      site: "https://shadofer.com",
    },
    {
      title: "Dogey",
      description:
        "A pythonic wrapper of the deprecated stage platform, DogeHouse.",
      github: "https://github.com/Shadofer/dogey",
    },
    {
      title: "XMAS Counter",
      description: "A simple but reactive christmas day counter.",
      github: "https://github.com/Shadofer/xmas-counter",
      site: "https://shadofer.github.io/xmas-counter",
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center pt-[100px] text-center"
    >
      <h1 className="xs:text-2xl font-black text-4xl tracking-tighter">
        What have I created?
      </h1>

      <h1 className="xs:text-sm xs:w-[75%] w-[500px] text-lg">
        Here's a list of my personal projects.
      </h1>

      {projects.map(({ title, description, github, site }) => {
        return (
          <Card
            key={title}
            className="xs:pr-0 xs:pl-0 xs:rounded-none xs:min-w-0 xs:w-screen min-w-[600px] w-[50%] mt-[7vh] mb-[7vh] p-6"
          >
            <CardHeader>
              <CardTitle className="xs:text-3xl text-5xl tracking-tighter font-black">
                {title}
              </CardTitle>
              <CardDescription className="xs:text-md mobile:max-w-[100%] text-lg text-center m-auto">
                {description}
              </CardDescription>
            </CardHeader>

            <CardFooter className="flex items-center justify-center">
              {site && (
                <>
                  <Link href={site} target="_blank">
                    <Button size="lg">
                      <ExternalLinkIcon className="mr-2" />
                      Visit site
                    </Button>
                  </Link>

                  <span className="mr-4" />
                </>
              )}

              <Link href={github} target="_blank">
                <Button size="lg" variant={"outline"}>
                  <GitHubLogoIcon className="mr-2" /> View on Github
                </Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}

      <span className="mt-6" />
    </div>
  );
}
