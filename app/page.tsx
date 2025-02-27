import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ContactForm from "./components/contact-form";
import TechStack from "./components/tech-stack";
import { ThemeToggle } from "@/components/theme-toggle";
import Projects from "./components/projects";
import WorkedOn from "./components/worked-on";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div>
        {/* Background gradients */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-400/10 blur-[100px]" />
        </div>
      </div>

      <div className="relative z-10">
        <header className="md:pr-[15%] md:pl-[15%] sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
          <div className="flex h-14 items-center max-w-[90vw] justify-center m-auto">
            <div className="mr-4 hidden md:flex flex flex-1">
              <Link className="mr-6 flex items-center space-x-2" href="/">
                <span className="font-bold inline-block min-w-[85px]">
                  Stam Tsag
                </span>
              </Link>
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                  href="#about"
                  className="transition-colors hover:text-foreground/80"
                >
                  About
                </Link>
                <Link
                  href="#workedon"
                  className="transition-colors hover:text-foreground/80"
                >
                  Work
                </Link>
                <Link
                  href="#projects"
                  className="transition-colors hover:text-foreground/80"
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="transition-colors hover:text-foreground/80"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <span className="flex-1" />

            <Link
              href="https://github.com/StamTsag"
              className="mr-3"
              target="_blank"
            >
              <Button variant={"outline"} size="sm" className="ml-auto">
                View Github <ArrowUpRight />
              </Button>
            </Link>

            <ThemeToggle />
          </div>
        </header>

        <main className="px-4 md:px-6">
          <section id="about" className="py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    The journey of a Fullstack Developer.
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Welcome to the homepage of a fullstack programmer. Take a
                    look at what I've worked on and created.
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

          <section
            id="workedon"
            className="md:pr-[15%] md:pl-[15%] py-12 md:py-24 lg:py-32"
          >
            <div className="px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Worked On
              </h2>

              <WorkedOn />
            </div>
          </section>

          <section
            id="projects"
            className="md:pr-[15%] md:pl-[15%] py-12 md:py-24 lg:py-32"
          >
            <div className="px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Projects
              </h2>

              <Projects />
            </div>
          </section>

          <section className="md:pr-[15%] md:pl-[15%] py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Tech Stack
              </h2>
              <TechStack />
            </div>
          </section>

          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                  Contact Me
                </h2>
                <ContactForm />
              </div>
            </div>
          </section>
        </main>
        <footer className="md:pr-[15%] md:pl-[15%] border-t">
          <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2025 Stamatis Tsagkliotis. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="https://github.com/StamTsag/homepage"
                target="_blank"
              >
                View source
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
