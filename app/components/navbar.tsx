import HoverTabs from "@/components/hover-tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ScrollLayout } from "../types";
import Image from "next/image";

interface Props {
  activeScroll: ScrollLayout;
}

// TODO: Drawer
export default function NavBar({ activeScroll }: Props) {
  return (
    <header className="sticky top-0 pr-4 md:top-4 z-50 w-full md:min-w-[750px] md:w-[85%] lg:min-w-[800px] lg:w-[60%] m-auto border md:rounded-full dark:border-border/100 bg-background dark:bg-background/30 dark:backdrop-blur-lg shadow-lg dark:shadow-none">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 ml-5 flex items-center space-x-2">
          <Image
            className="hidden sm:block rounded-full"
            src={"/favicon.ico"}
            alt="Logo"
            width={24}
            height={24}
          />
          <span className="font-bold">StamTsag</span>
        </Link>
        <nav className="hidden md:block flex items-center space-x-6 text-sm font-medium">
          <HoverTabs
            tabs={["Home", "Worked on", "Projects", "Stack", "Contact"]}
            useLinks
            customActiveTab={activeScroll}
          />
        </nav>

        <span className="flex-1" />

        <div className="flex items-center justify-end space-x-4 flex-1">
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
      </div>
    </header>
  );
}
