import TechStack from "./components/homepage/tech-stack";
import Projects from "./components/homepage/projects";
import WorkedOn from "./components/homepage/worked-on";
import NavBar from "./components/homepage/navbar";
import Footer from "./components/homepage/footer";
import About from "./components/homepage/about";
import WorkWithMe from "./components/homepage/collaborate";

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
