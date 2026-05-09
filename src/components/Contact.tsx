import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <SectionHeading number="05" title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm backdrop-blur transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-none"
      >
        <p className="mb-4 font-mono text-sm text-teal-700 dark:text-accent">
          What&apos;s next?
        </p>

        <h3 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-100">
          Let&apos;s build something meaningful.
        </h3>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
          I&apos;m open to product engineering roles, freelance opportunities,
          and collaborations around useful software, scalable backend systems,
          and modern SaaS products.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-teal-700/20 bg-teal-50 px-6 py-3 font-mono text-sm text-teal-700 transition duration-300 hover:border-teal-700/40 hover:bg-teal-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40 dark:border-accent/50 dark:bg-transparent dark:text-accent dark:hover:bg-accent/10 dark:focus-visible:ring-accent/40"
        >
          Say hello
        </a>
      </motion.div>
    </section>
  );
}
