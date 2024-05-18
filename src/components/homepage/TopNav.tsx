"use client";

import { Button } from "../ui/button";
import ThemeToggle from "../global/ThemeToggle";
import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

interface TopNavHeader {
  title: string;
  ref: string;
}

export default function TopNav() {
  const [open, setOpen] = useState(false);

  const headers: TopNavHeader[] = [
    {
      title: "Journey",
      ref: "journey",
    },
    {
      title: "Solutions",
      ref: "solutions",
    },
    {
      title: "Projects",
      ref: "projects",
    },
    {
      title: "Contact",
      ref: "contact",
    },
  ];

  function scrollTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div className="mobile:w-[100%] bg-background/70 backdrop-blur-md fixed top-0 right-0 left-0 m-auto w-screen pr-0 pl-0 h-[64px] max-h-[64px] p-4 select-none">
      <div className="mobile:pl-4 mobile:pr-6 flex items-center pl-[15%] pr-[15%] mb-3">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="xs:inline-flex hidden mr-3 min-w-[36px]"
            >
              <HamburgerMenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="min-w-[250px] w-[40%]">
            <SheetHeader>
              <SheetTitle asChild>
                <div className="flex items-center">
                  <img
                    onClick={scrollTop}
                    src="/favicon.ico"
                    className=" w-[28px] h-[28px] mr-2"
                  />

                  <h1
                    onClick={scrollTop}
                    className="font-bold text-xl mr-6 translate-x-[-3px] font-black cursor-pointer"
                  >
                    Stam Tsag
                  </h1>
                </div>
              </SheetTitle>
              <SheetDescription>
                <div className="flex flex-col ml-1">
                  {headers.map(({ title, ref }) => {
                    return (
                      <div key={title} className="flex mt-2 mb-2">
                        <h1
                          onClick={() => {
                            document
                              .querySelector(`#${ref}`)
                              ?.scrollIntoView({ block: "start" });

                            setOpen(false);
                          }}
                          className="hover:opacity-[100%] tracking-thin font-medium opacity-[60%] text-sm w-max cursor-pointer transition-[150ms]"
                        >
                          {title}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <img
          onClick={scrollTop}
          src="/favicon.ico"
          className="xs:hidden w-[28px] h-[28px] mr-2 cursor-pointer"
        />

        <h1
          onClick={scrollTop}
          className="tracking-tighter font-bold text-xl mr-6 translate-x-[-3px] font-black cursor-pointer"
        >
          Stam Tsag
        </h1>

        {headers.map(({ title, ref }) => {
          return (
            <div
              onClick={() =>
                document.querySelector(`#${ref}`)?.scrollIntoView({
                  block: "start",
                })
              }
              key={title}
              className="flex items-center mr-6"
            >
              <h1 className="xs:hidden hover:opacity-[100%] tracking-thin font-medium opacity-[60%] text-sm w-max cursor-pointer transition-[150ms]">
                {title}
              </h1>
            </div>
          );
        })}

        <span className="flex-1" />

        <a href="https://github.com/Shadofer" target="_blank" className="mr-2">
          <Button size="icon" variant="ghost">
            <GitHubLogoIcon width={20} height={20} />
          </Button>
        </a>

        <ThemeToggle />
      </div>

      <Separator />
    </div>
  );
}
