import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}