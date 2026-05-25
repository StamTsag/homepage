import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center py-12 md:py-20 lg:py-28"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center flex-col space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hey, I'm Stamatis
            </h1>
            <p className="text-center max-w-[725px] pt-1 text-sm md:text-base text-gray-200 whitespace-pre-line">
              I work across both frontend and backend, building snappy and
              intuitive web experiences from the ground up.
              <br />
              <br />
              Right now, I'm working at{" "}
              <a
                href="https://wealthyhood.com"
                target="_blank"
                className="font-bold text-purple-500 hover:underline"
              >
                Wealthyhood
              </a>{" "}
              as a Software Engineer, bringing the magic of investing to
              millions of Greek citizens and the next generation.
            </p>
          </div>

          <div className="space-x-4 flex items-center justify-center">
            <div>
              <Link href="https://github.com/StamTsag" target="_blank">
                <Button variant={"outline"}>
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
