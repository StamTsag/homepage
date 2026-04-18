import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Sora, Space_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";
import { PostHogProvider } from "./providers";
import Background from "../components/bg";

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

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

      <body
        className={cn(
          "bg-background antialiased",
          sora.variable,
          spaceMono.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PostHogProvider>
            <Background />

            {children}
          </PostHogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
