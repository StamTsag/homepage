import { Button } from "@/components/ui/button";
import { Code, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="md:pr-[17.5%] md:pl-[17.5%] py-12 md:py-20 lg:py-24"
    >
      <div className="px-4 md:px-6">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ bounce: false, duration: 0.2 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
            >
              Stamatis Tsagkliotis
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, bounce: false }}
              className="text-start max-w-[725px] pt-1 text-gray-500 text-sm md:text-base dark:text-gray-400 whitespace-pre-line"
            >
              Hey, I'm Stamatis — a fullstack developer from Athens, Greece.
              <br />
              <br />I work across both frontend and backend, building both
              snappy and intuitive web experiences from the ground up.
              <br />
              <br />
              Right now, I'm working on{" "}
              <a
                href="https://speedy.stamtsag.com"
                className="font-semibold text-primary hover:underline"
              >
                Speedy
              </a>{" "}
              — an app that measures your internet speed across different
              regions.
              <br />
              <br />
              Not to fret, I'm always open to new connections and possible
              collaborations.
            </motion.p>
          </div>
          <div className="space-x-4 flex">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="https://github.com/StamTsag" target="_blank">
                <Button>
                  <Github className="h-4 w-4" />
                  <span className="text-xs md:text-[0.9rem]">GitHub</span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="https://linkedin.com/in/stamtsag" target="_blank">
                <Button>
                  <Linkedin className="h-4 w-4" />
                  <span className="text-xs md:text-[0.9rem]">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Link href="mailto:stamatiostsag@gmail.com">
                <Button>
                  <Mail className="h-4 w-4" />
                  <span className="text-xs md:text-[0.9rem]">Email</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
