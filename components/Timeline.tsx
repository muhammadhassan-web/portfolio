"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { site } from "@/data/site";

export function Timeline() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 40%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative space-y-12">
      <div className="absolute bottom-2 left-0 top-2 hidden w-px overflow-hidden bg-line md:block">
        <motion.div
          className="h-full w-full origin-top bg-signal"
          style={{ scaleY: reduce ? 1 : scaleY }}
        />
      </div>

      {site.timeline.map((entry, i) => (
        <motion.div
          key={entry.title}
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid gap-5 border-t border-line pt-8 md:grid-cols-[1fr_2fr] md:pl-8"
        >
          <span className="absolute left-0 top-8 hidden h-2 w-2 -translate-x-[3.5px] rounded-full bg-signal ring-4 ring-ink md:block" />
          <div>
            <p className="font-mono text-xs text-signal">{entry.period}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
              {entry.title}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
              {entry.place}
            </p>
          </div>
          <div className="space-y-3">
            {entry.notes.map((note, j) => (
              <p key={j} className="leading-relaxed text-muted">
                {note}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
