import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = {
  Frontend: [
    "HTML",
    "React",
    "Next.js",
    "Angular",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "Tailwind CSS",
    "CSS3",
    "Framer Motion",
  ],
  Backend: [
    "Node.js",
    "Express",
    "Nest.js",
    "RabbitMQ",
    "BullMQ",
    "Kafka",
    "AWS",
    "System Design",
    "REST APIs",
    "gRPC",
    "TypeORM",
    "Prisma",
    "Sequelize",
  ],
  Tools: [
    "Git",
    "Docker",
    "Kubernetes",
    "AWS Services",
    "Vercel",
    "Jenkins",
    "Figma",
  ],
  Databases: [
    "PostgreSQL",
    "MySQL",
    "MS SQL",
    "Elasticsearch",
    "MongoDB",
    "Redis",
    "Firebase",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <SectionHeading number="04" title="Skills" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(skillGroups).map(([title, items], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-none"
          >
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
              {title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 transition-colors dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
