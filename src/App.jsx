import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./section/Projects";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-black dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}