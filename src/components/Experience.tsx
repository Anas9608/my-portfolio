import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    period: "Jul 2025 — Present",
    role: "Senior Software Engineer · Almonds.ai",
    summary:
      "Built scalable multi-tenant SaaS platforms and distributed backend systems focused on reliability, automation, and secure tenant isolation.",
    highlights: [
      "Engineered a microservices-based tenant management platform with automated provisioning workflows, isolated tenant infrastructure, and webhook-driven onboarding pipelines.",
      "Developed a production-grade attendance management SaaS with automated workflows, organization-level controls, and reliable background job processing using BullMQ.",
      "Improved distributed system resilience through idempotent processing, dead-letter queue handling, circuit breaker patterns, and automated multi-tenant migration tooling.",
      "Implemented secure authentication and authorization systems with tenant-aware JWT flows, SSO integrations, and cross-service identity propagation.",
    ],
  },
  {
    period: "Aug 2022 — Jul 2024",
    role: "Software Development Engineer · Valuefy",
    summary:
      "Built scalable portfolio management and financial workflow systems serving millions of users across advisory platforms.",
    highlights: [
      "Developed Node.js-based PMS portals with streamlined onboarding flows, reporting modules, and client-focused operational tooling.",
      "Improved reporting and reconciliation engine performance by optimizing data pipelines, batching strategies, and reducing ORM overhead across large-scale datasets.",
      "Migrated reporting infrastructure from MySQL to Elasticsearch to accelerate data retrieval and improve responsiveness for high-volume financial reports.",
      "Designed maker-checker workflows with multi-level approvals and audit logging for secure investor and banking data management.",
    ],
  },
  {
    period: "Aug 2020 — Aug 2022",
    role: "Software Engineer · SBA Orions IT Solutions LLP",
    summary:
      "Optimized backend performance and payment infrastructure across the MaterialBuy e-commerce platform.",
    highlights: [
      "Improved API performance by separating intensive logging workloads into dedicated MongoDB pipelines.",
      "Developed reliable payment flows integrating Razorpay and PayPal with clean transaction handling and fault-tolerant backend logic.",
      "Designed asynchronous processing workflows using Redis queues for notifications, analytics, and background operations.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <SectionHeading number="02" title="Experience" />

      <div className="space-y-5">
        {roles.map((item, index) => (
          <motion.article
            key={item.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="grid gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-none md:grid-cols-[180px_1fr]"
          >
            <p className="font-mono text-sm text-teal-700 dark:text-accent">
              {item.period}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {item.role}
                </h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-400">
                  {item.summary}
                </p>
              </div>

              <ul className="space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {item.highlights.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700 dark:bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
