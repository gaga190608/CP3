import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}