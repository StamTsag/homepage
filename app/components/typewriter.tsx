"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Typewriter({
  text,
  speed = 40,
}: {
  text: string;
  speed?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => setIndex(index + 1), speed);
      return () => clearTimeout(timeout);
    }
  }, [index, speed, text]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="whitespace-pre-wrap"
    >
      {text.slice(0, index)}
    </motion.p>
  );
}
