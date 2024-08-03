import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stam Tsag",
  description: "The journey of a Fullstack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Stam Tsag</title>
        <meta name="title" content="Stam Tsag" />
        <meta name="description" content="A full-stack developer." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stamtsag.com/" />
        <meta property="og:title" content="Stam Tsag" />
        <meta
          property="og:description"
          content="The journey of a Fullstack Developer."
        />
        <meta property="og:image" content="https://stamtsag.com/embed.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://stamtsag.com/" />
        <meta property="twitter:title" content="Stam Tsag" />
        <meta
          property="twitter:description"
          content="The journey of a Fullstack Developer."
        />
        <meta
          property="twitter:image"
          content="https://stamtsag.com/embed.png"
        />
      </head>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
