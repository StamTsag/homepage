"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";

export default function MainView() {
  function scrollToJourney() {
    document.querySelector("#journey")?.scrollIntoView({ block: "start" });
  }

  return (
    <div className="h-[100vh] w-full flex flex-col items-center justify-center text-center">
      <h1 className="xs:text-[1.7rem] font-extrabold text-5xl tracking-tighter pb-3">
        The journey of a Fullstack Developer.
      </h1>

      <h1 className="xs:text-sm xs:w-[90%] w-[500px] text-lg">
        Welcome to the homepage of a non-conforming programmer. Take a look at
        what I've achieved and created.
      </h1>

      <div className="flex items-center mt-7">
        <Button
          onClick={scrollToJourney}
          className="xs:text-sm mr-2 font-semibold text-md"
          size="lg"
        >
          My journey
        </Button>

        <Link href="https://github.com/StamTsag" target="_blank">
          <Button
            variant={"outline"}
            size="lg"
            className="xs:text-sm ml-2 font-semibold text-md"
          >
            <GitHubLogoIcon className="xs:text-sm mr-2 w-[20px] h-[20px]" />
            View Github
          </Button>
        </Link>
      </div>
    </div>
  );
}
