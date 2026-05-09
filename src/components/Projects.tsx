import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Budget Hive",
    description:
      "Built an AI-powered financial management platform focused on intelligent insights, real-time tracking, and a modern user experience.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
    github: "https://github.com/Anas9608/Budget-Hive",
    live: "https://budget-hive-six.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <SectionHeading number="03" title="Selected projects" />

      <div
        className={`grid gap-6 ${
          projects.length === 1 ? "max-w-2xl" : "lg:grid-cols-3"
        }`}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-700/30 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-none dark:hover:border-accent/40"
          >
            <div className="mb-6 flex items-center justify-between text-teal-700 dark:text-accent">
              <FolderGit2 size={32} />

              <div className="flex gap-2 text-slate-500 dark:text-slate-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="rounded-full p-2 transition duration-300 hover:bg-slate-100 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:hover:bg-slate-800 dark:hover:text-accent dark:focus-visible:ring-accent/40"
                >
                  <Github size={18} />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="rounded-full p-2 transition duration-300 hover:bg-slate-100 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:hover:bg-slate-800 dark:hover:text-accent dark:focus-visible:ring-accent/40"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
              {project.title}
            </h3>

            <p className="mb-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {project.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] text-slate-600 transition-colors dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
