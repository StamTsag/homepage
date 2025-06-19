"use client";

import ContactForm from "./components/contact-form";
import TechStack from "./components/tech-stack";
import Projects from "./components/projects";
import WorkedOn from "./components/worked-on";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import Background from "./components/bg";
import AIPrompt from "./components/ai-prompt";
import BlurBars from "./components/blur-bars";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative z-10 pb-6">
        <NavBar />
        <Background />
        <BlurBars />

        <main className="px-4 md:px-6">
          <AIPrompt />

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
