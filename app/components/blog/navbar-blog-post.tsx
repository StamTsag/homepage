"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Newspaper } from "lucide-react";

interface Props {
  slug: string;
  title: string;
}

export default function NavBarBlogPost({ slug, title }: Props) {
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
          ? "border border-border/50 md:top-4 md:rounded-full bg-white/5 backdrop-blur-lg shadow-lg shadow-none md:min-w-[750px] md:w-[90%] lg:min-w-[700px] lg:w-[50%]"
          : "md:min-w-[750px] md:w-[90%] lg:min-w-[800px] lg:w-[70%]"
      } duration-150 border-transparent`}
    >
      <div className="container flex h-14 max-w-screen-2xl items-center gap-x-2 pl-4">
        <Link
          href="/blog"
          className="hidden md:flex items-center space-x-2 hover:underline"
        >
          <Newspaper width={24} height={24} />

          <span className={`duration-150 font-bold`}>Stamatis' Blog</span>
        </Link>

        <h1 className="hidden md:block">{">"}</h1>

        <span className={`duration-150 font-bold`}>{title}</span>

        <span className="flex-1" />

        <div className="flex items-center justify-end space-x-4 flex-1 pr-4 md:flex-[0]">
          <Link href="/blog">
            <Button
              variant={"outline"}
              size="sm"
              className={`rounded-full font-semibold pr-6 pl-6`}
            >
              <ArrowLeft />
              Back to posts
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
