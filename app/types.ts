export enum ScrollLayout {
  Home,
  "Worked on",
  Projects,
  Stack,
  Collaborate,
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
  tags: string[];
  usePng?: boolean;
  usePlaceholder?: boolean;
  productHunt?: string;
  productHuntRank?: number;
}

export interface Message {
  role: "user" | "ai";
  message: string;
}
