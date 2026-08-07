"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
      {site.services.map((service, i) => (
        <motion.div
          key={service.title}
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="group bg-ink p-6 transition-colors duration-300 hover:bg-surface md:p-8"
        >
          <span className="font-mono text-xs text-dim transition-colors duration-300 group-hover:text-signal">
            {service.index}
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold tracking-tight md:text-2xl">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
