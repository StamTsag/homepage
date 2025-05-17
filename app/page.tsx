"use client";

import ContactForm from "./components/contact-form";
import TechStack from "./components/tech-stack";
import Projects from "./components/projects";
import WorkedOn from "./components/worked-on";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Background from "./components/bg";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative z-10">
        <NavBar />
        <Background />

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
