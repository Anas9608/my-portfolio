import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
//import AmbientCanvas from "./AmbientCanvas";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-14 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <p className="font-mono text-sm text-teal-700 dark:text-accent">
          Hi, this is
        </p>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-7xl dark:text-slate-100">
            Mohammad Anas.
          </h1>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-500 sm:text-4xl md:text-6xl dark:text-slate-400">
            I build performant products for the web.
          </h2>
        </div>

        <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg dark:text-slate-400">
          I&apos;m a software engineer passionate about building scalable
          backend systems, resilient APIs, and high-performance distributed
          applications with clean design, strong engineering fundamentals, and a
          strong focus on reliability and performance.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:focus-visible:ring-accent/40"
          >
            View projects <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/60 px-6 py-3 font-medium text-slate-700 transition duration-300 hover:border-teal-700 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:border-slate-700 dark:bg-transparent dark:text-slate-100 dark:hover:border-accent dark:hover:text-accent dark:focus-visible:ring-accent/40"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-4 pt-2 text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/Anas9608"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full p-2 transition duration-300 hover:bg-slate-100 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:hover:bg-slate-900 dark:hover:text-accent dark:focus-visible:ring-accent/40"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/mohammad-anas-b71248172/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-full p-2 transition duration-300 hover:bg-slate-100 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:hover:bg-slate-900 dark:hover:text-accent dark:focus-visible:ring-accent/40"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:you@example.com"
            aria-label="Send email"
            className="rounded-full p-2 transition duration-300 hover:bg-slate-100 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:hover:bg-slate-900 dark:hover:text-accent dark:focus-visible:ring-accent/40"
          >
            <Mail size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        {/* <AmbientCanvas /> */}
      </motion.div>
    </section>
  );
}
