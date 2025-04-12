import HoverTabs from "@/components/hover-tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ScrollLayout } from "../types";
import { motion } from "framer-motion";

interface Props {
  activeScroll: ScrollLayout;
}

// TODO: Drawer
export default function NavBar({ activeScroll }: Props) {
  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ bounce: false, duration: 0.25 }}
      viewport={{ once: true }}
      className="md:pr-[15%] md:pl-[15%] sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75"
    >
      <div className="flex h-14 items-center max-w-[90vw] justify-center m-auto">
        <div className="mr-4 hidden md:flex flex flex-1">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="font-bold inline-block min-w-[85px]">
              Stam Tsag
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <HoverTabs
              tabs={["Home", "Worked on", "Projects", "Stack", "Contact"]}
              useLinks
              customActiveTab={activeScroll}
            />
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
    </motion.header>
  );
}
