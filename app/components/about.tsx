import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              The journey of a Fullstack Developer.
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Welcome to the homepage of a fullstack programmer. Take a look at
              what I've worked on and created.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="https://github.com/StamTsag" target="_blank">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/stamtsag" target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:stamatiostsag@gmail.com">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
