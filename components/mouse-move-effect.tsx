"use client";

import { useEffect, useState } from "react";

export default function MouseMoveEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-150 opacity-0 lg:opacity-40 lg:opacity-100"
      style={{
        background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(78, 102, 223, 0.1), transparent 50%)`,
      }}
    />
  );
}
