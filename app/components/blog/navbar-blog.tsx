"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Newspaper } from "lucide-react";

export default function NavBarBlog() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCollapsed(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-2 z-50 w-full m-auto ${
        collapsed
          ? "border border-border/50 md:top-4 md:rounded-full bg-[#303030]/50  backdrop-blur-2xl shadow-lg shadow-none md:min-w-[750px] md:w-[90%] lg:min-w-[700px] lg:w-[50%]"
          : "md:min-w-[750px] md:w-[90%] lg:min-w-[800px] lg:w-[70%]"
      } duration-150 border-transparent`}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link
          href="/blog"
          className="mr-6 flex items-center space-x-2 pl-4 hover:underline"
        >
          <Newspaper width={24} height={24} />

          <span className={`duration-150 font-bold`}>Stamatis' Blog</span>
        </Link>

        <span className="flex-1" />

        <div className="flex items-center justify-end space-x-4 flex-1 pr-4 md:flex-[0]">
          <Link href="/">
            <Button
              variant={"outline"}
              size="sm"
              className={`rounded-full font-semibold pr-6 pl-6`}
            >
              <ArrowLeft />
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
