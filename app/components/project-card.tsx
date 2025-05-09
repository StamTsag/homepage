"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../types";
import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  github,
  link,
  tags,
  usePng,
  usePlaceholder,
  productHunt,
  productHuntRank,
}: Project) {
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;
    const rotateX = (mouseY / cardRect.height) * 20;
    const rotateY = -(mouseX / cardRect.width) * 20;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`,
      transition: "all 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
      transition: "all 0.25s ease",
    });
  };

  return (
    <Card
      className="overflow-hidden cursor-pointer w-full h-full m-auto max-w-[500px]"
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-[175px] md:aspect-video md:h-auto">
        <Link href={link || ""} target="_blank">
          <Image
            src={
              usePlaceholder
                ? "/placeholder.svg"
                : `/projects/${title.replaceAll(" ", "-").toLowerCase()}.${
                    usePng ? "png" : "svg"
                  }`
            }
            alt={title}
            fill
            className="object-cover"
          />
        </Link>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg md:text-xl mb-2">
          {title}{" "}
          {productHuntRank && (
            <Link href={productHunt!} target="_blank" className="w-max flex">
              <h1 className="text-xs text-orange-500 hover:underline w-max">
                #{productHuntRank} on ProductHunt
              </h1>
            </Link>
          )}
        </h3>
        <p className="text-[0.7rem] md:text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-xl bg-muted px-2 py-1 text-[0.7rem] md:text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      {github && (
        <CardFooter className="p-4 pt-0">
          <Link
            href={github || ""}
            target="_blank"
            className="inline-flex items-center gap-2 text-xs md:text-sm hover:underline"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
