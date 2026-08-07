"use client";

import { motion, useReducedMotion } from "motion/react";
import { Label } from "./Label";

export function Section({
  id,
  index,
  label,
  children,
}: {
  id: string;
  index: string;
  label: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className="relative border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="mb-10 flex items-baseline gap-4 md:mb-14"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-[10px] text-dim">{index}</span>
          <Label>{label}</Label>
          <span className="h-px flex-1 bg-line" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
