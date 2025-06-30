import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isElementInViewport(element: HTMLElement) {
  if (!element) return;

  var bounding = element.getBoundingClientRect();

  return bounding.top >= 0 && bounding.left >= 0;
}

export function calculateHTMLReadingTime(html: string) {
  // Guess around 150 words a minute
  const wordCount = html.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200)); // minimum 1 min

  return readingTime;
}
