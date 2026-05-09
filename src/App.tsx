import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative overflow-x-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.10),transparent_24%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_20%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(100,255,218,0.08),transparent_24%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.06),transparent_20%)]" />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
