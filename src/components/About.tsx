import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <SectionHeading number="01" title="About me" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]"
      >
        <div className="space-y-5 text-slate-600 dark:text-slate-400">
          <p>
            I enjoy building reliable digital products that balance engineering
            quality with business impact.
          </p>

          <p>
            My work usually sits at the intersection of clean architecture,
            scalable systems, and practical product thinking.
          </p>

          <p>
            Outside work, I enjoy trekking, travelling, architecture, art, and
            learning from thoughtfully designed products and experiences.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-none">
          <p className="mb-4 font-mono text-sm text-teal-700 dark:text-accent">
            Quick facts
          </p>

          <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700 dark:bg-accent" />
              <span>Based in Varanasi, India</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700 dark:bg-accent" />
              <span>Focused on backend + product engineering</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-700 dark:bg-accent" />
              <span>
                Interested in multi-tenant SaaS products, AI-enabled tools, and
                business ideas
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
