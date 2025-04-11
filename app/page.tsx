"use client";

import { useEffect, useState } from "react";
import { isElementInViewport } from "@/lib/utils";
import { ScrollLayout } from "./types";
import ContactForm from "./components/contact-form";
import TechStack from "./components/tech-stack";
import Projects from "./components/projects";
import WorkedOn from "./components/worked-on";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";

export default function Page() {
  let [activeScroll, setActiveScroll] = useState<ScrollLayout>(
    ScrollLayout.Home
  );

  useEffect(() => {
    window.onscroll = () => {
      const home = document.getElementById("about");
      const workedOn = document.getElementById("worked-on");
      const projects = document.getElementById("projects");
      const stack = document.getElementById("stack");
      const contact = document.getElementById("contact");

      if (isElementInViewport(home!)) setActiveScroll(ScrollLayout.Home);
      else if (isElementInViewport(workedOn!))
        setActiveScroll(ScrollLayout["Worked on"]);
      else if (isElementInViewport(projects!))
        setActiveScroll(ScrollLayout.Projects);
      else if (isElementInViewport(stack!)) {
        setActiveScroll(ScrollLayout.Stack);
      } else if (isElementInViewport(contact!)) {
        setActiveScroll(ScrollLayout.Contact);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div>
        {/* Background gradients */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-400/10 blur-[100px]" />
        </div>
      </div>

      <div className="relative z-10">
        <NavBar activeScroll={activeScroll} />

        <main className="px-4 md:px-6">
          <About />

          <WorkedOn />

          <Projects />

          <TechStack />

          <ContactForm />
        </main>

        <Footer />
      </div>
    </div>
  );
}
