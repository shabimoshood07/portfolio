import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
