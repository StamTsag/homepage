import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="md:pr-[17.5%] md:pl-[17.5%] py-12 md:py-20 lg:py-24"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <Link href="https://devpair.app" target="_blank">
              <h1 className="absolute group flex items-center text-xs md:text-sm border-2 border-green-500 cursor-pointer text-primary rounded-2xl bg-green-300/10 w-max p-1 pr-4 pl-4 -translate-y-8">
                <img
                  src={"https://devpair.app/icon.svg"}
                  className="w-[20px] h-[20px] mr-1"
                />{" "}
                <span className="font-medium mr-1">DevPair</span> just launched
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 duration-150 ml-3"
                />
              </h1>
            </Link>

            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Stamatis Tsagkliotis
            </h1>
            <p className="text-start max-w-[725px] pt-1 text-gray-500 text-sm md:text-base dark:text-gray-400 whitespace-pre-line">
              Hey, I'm Stamatis — a fullstack developer from Athens, Greece.
              <br />
              <br />I work across both frontend and backend, building snappy and
              intuitive web experiences from the ground up.
              <br />
              <br />
              Right now, I'm working on{" "}
              <a
                href="https://devpair.app"
                target="_blank"
                className="font-semibold text-green-600 dark:text-green-500 hover:underline"
              >
                DevPair
              </a>{" "}
              — an app that connects you with developers similar to your skill
              set from all over the world.
              <br />
              <br />
              Not to fret, I'm always open to new connections and possible
              collaborations.
            </p>
          </div>
          <div className="space-x-4 flex">
            <div>
              <Link href="https://github.com/StamTsag" target="_blank">
                <Button>
                  <Github className="h-4 w-4" />
                  <span className="text-xs md:text-[0.9rem]">GitHub</span>
                </Button>
              </Link>
            </div>

            <div>
              <Link href="https://linkedin.com/in/stamtsag" target="_blank">
                <Button variant={"outline"}>
                  <Linkedin className="h-4 w-4" />
                  <span className="text-xs md:text-[0.9rem]">LinkedIn</span>
                </Button>
              </Link>
            </div>

            <div>
              <Link href="mailto:stamatiostsag@gmail.com">
                <Button variant={"outline"}>
                  <Mail className="h-4 w-4" />
                  <span className="text-xs md:text-[0.9rem]">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
