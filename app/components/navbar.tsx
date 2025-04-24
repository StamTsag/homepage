import HoverTabs from "@/components/hover-tabs";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ScrollLayout } from "../types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isElementInViewport } from "@/lib/utils";

interface Props {
  activeScroll: ScrollLayout;
}

// TODO: Drawer
export default function NavBar() {
  let [activeScroll, setActiveScroll] = useState<ScrollLayout>(
    ScrollLayout.Home
  );

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const home = document.getElementById("about");
      const workedOn = document.getElementById("worked-on");
      const projects = document.getElementById("projects");
      const stack = document.getElementById("stack");
      const contact = document.getElementById("contact");

      if (isElementInViewport(home!)) setActiveScroll(ScrollLayout.Home);
      else if (isElementInViewport(workedOn!))
        setActiveScroll(ScrollLayout["Worked on"]);
      else if (isElementInViewport(projects!))
        setActiveScroll(ScrollLayout.Projects);
      else if (isElementInViewport(stack!)) {
        setActiveScroll(ScrollLayout.Stack);
      } else if (isElementInViewport(contact!)) {
        setActiveScroll(ScrollLayout.Contact);
      }

      if (!isElementInViewport(home!)) setCollapsed(true);
      else setCollapsed(false);
    };
  }, []);

  return (
    <header
      className={`sticky top-2 z-50 w-full m-auto ${
        collapsed
          ? "border border-border/50 md:top-4 md:rounded-full bg-background dark:bg-background/60 dark:backdrop-blur-lg shadow-lg dark:shadow-none md:min-w-[750px] md:w-[90%] lg:min-w-[700px] lg:w-[50%]"
          : "md:min-w-[750px] md:w-[90%] lg:min-w-[800px] lg:w-[70%] border-transparent"
      } duration-150`}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 pl-4">
          <Image src={"/favicon.ico"} alt="Logo" width={24} height={24} />
          <span
            className={`${collapsed && "opacity-0"} duration-150 font-bold`}
          >
            StamTsag
          </span>
        </Link>
        <nav className="hidden md:block flex flex-1 items-center justify-center space-x-6 text-sm w-full">
          <HoverTabs
            tabs={["Home", "Worked on", "Projects", "Stack", "Contact"]}
            useLinks
            customActiveTab={activeScroll}
            hideIndicator
            centerItems
          />
        </nav>
        <div className="flex items-center justify-end space-x-4 flex-1 pr-4 md:flex-[0]">
          <Link href="https://github.com/stamtsag" target="_blank">
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/80 rounded-full font-semibold pr-6 pl-6"
            >
              View Github
            </Button>
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
