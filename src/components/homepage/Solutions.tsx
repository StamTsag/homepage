import { Button } from "../ui/button";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

interface Solution {
  title: string;
  description: string;
  github: string;
  site?: string;
}

export default function Solutions() {
  const projects: Solution[] = [
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
  ];

  return (
    <div
      id="solutions"
      className="flex flex-col items-center justify-center pt-[100px] text-center"
    >
      <h1 className="xs:text-2xl font-black text-4xl tracking-tighter">
        What have I created?
      </h1>

      <h1 className="xs:text-sm xs:w-[75%] w-[500px] text-lg">
        Production-grade solutions for the masses.
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
              <CardDescription className="xs:text-sm mobile:max-w-[100%] text-lg text-center m-auto">
                {description}
              </CardDescription>
            </CardHeader>

            <CardFooter className="flex items-center justify-center">
              {site && (
                <>
                  <Link href={site} target="_blank">
                    <Button className="xs:text-sm text-md" size="lg">
                      <ExternalLinkIcon className="mr-2" />
                      Visit site
                    </Button>
                  </Link>

                  <span className="mr-4" />
                </>
              )}

              <Link href={github} target="_blank">
                <Button
                  className="xs:text-sm text-md"
                  size="lg"
                  variant={"outline"}
                >
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
