import TechStack from "./components/tech-stack";
import Projects from "./components/projects";
import WorkedOn from "./components/worked-on";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import WorkWithMe from "./components/collaborate";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="relative z-10 pb-6">
        <NavBar />

        <main className="px-4 md:px-6">
          <About />

          <WorkedOn />

          <Projects />

          <TechStack />

          <WorkWithMe />
        </main>

        <Footer />
      </div>
    </div>
  );
}
