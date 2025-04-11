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
import BgGradients from "./components/bg-gradients";

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
      <BgGradients />

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
