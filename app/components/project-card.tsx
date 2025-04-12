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
      className="overflow-hidden cursor-pointer h-full"
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video">
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
        <h3 className="font-semibold text-xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
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
            className="inline-flex items-center gap-2 text-sm hover:underline"
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
