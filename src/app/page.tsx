import Footer from "@/components/homepage/Footer";
import MainView from "@/components/homepage/MainView";
import TopNav from "@/components/homepage/TopNav";
import Contact from "@/components/homepage/Contact";
import Journey from "@/components/homepage/Journey";
import Projects from "@/components/homepage/Projects";
import Solutions from "@/components/homepage/Solutions";

export default function Homepage() {
  return (
    <>
      <TopNav />

      <MainView />

      <Journey />

      <Solutions />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}
