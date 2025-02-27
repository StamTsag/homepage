import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import type React from "react";
import MouseMoveEffect from "@/components/mouse-move-effect";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stamatis Tsagkliotis",
  description: "Full stack developer portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Stamatis Tsagkliotis</title>
        <meta name="title" content="Stamatis Tsagkliotis" />
        <meta
          name="description"
          content="Full stack developer portfolio showcasing projects and skills"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stamtsag.com/" />
        <meta property="og:title" content="Stamatis Tsagkliotis" />
        <meta
          property="og:description"
          content="Full stack developer portfolio showcasing projects and skills"
        />
        <meta property="og:image" content="https://stamtsag.com/embed.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://stamtsag.com/" />
        <meta property="twitter:title" content="Stamatis Tsagkliotis" />
        <meta
          property="twitter:description"
          content="Full stack developer portfolio showcasing projects and skills"
        />
        <meta
          property="twitter:image"
          content="https://stamtsag.com/embed.png"
        />
      </head>

      <body className={cn("bg-background antialiased", manrope.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MouseMoveEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
