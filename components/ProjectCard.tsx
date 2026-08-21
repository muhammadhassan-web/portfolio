"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Label } from "./Label";
import { Magnetic } from "./Magnetic";
import type { Project } from "@/data/site";

const statusCopy = {
  live: "Live",
  source: "Source",
  private: "Client work",
} as const;

export function ProjectCard({
  project,
  index,
  columns = 2,
}: {
  project: Project;
  index: number;
  columns?: number;
}) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || reduce) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 4);
    rotateX.set((0.5 - py) * 4);
    el.style.setProperty("--spot-x", `${px * 100}%`);
    el.style.setProperty("--spot-y", `${py * 100}%`);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  const visibleStack = project.stack.slice(0, 5);
  const hiddenCount = project.stack.length - visibleStack.length;

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={
        reduce
          ? undefined
          : { rotateX, rotateY, transformPerspective: 800 }
      }
      initial={reduce ? undefined : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % columns) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="spotlight group flex h-full flex-col overflow-hidden border border-line bg-surface/40 transition-colors duration-300 hover:border-line-bright"
    >
      {project.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-raised">
          <div className="flex items-center gap-1.5 border-b border-line bg-raised/80 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-line-bright" />
            <span className="h-2 w-2 rounded-full bg-line-bright" />
            <span className="h-2 w-2 rounded-full bg-line-bright" />
          </div>
          <Image
            src={project.image}
            alt={`${project.name} interface preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
      <div className="mb-4 flex items-start justify-between">
        <span className="font-mono text-xs text-dim">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2 font-mono text-[11px] text-dim">
          <span>{project.year}</span>
          <span className="h-px w-3 bg-line-bright" />
          <span
            className={project.status === "live" ? "text-signal" : "text-muted"}
          >
            {statusCopy[project.status]}
          </span>
        </div>
      </div>

      <h3 className="font-display text-2xl font-semibold leading-none tracking-tight md:text-3xl">
        {project.name}
      </h3>
      <div className="mt-2">
        <Label>{project.kind}</Label>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-muted">
        {project.summary}
      </p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-3 pt-4">
              {project.detail.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {project.detail.length > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          data-cursor
          className="mt-4 flex items-center gap-1.5 self-start font-mono text-[11px] uppercase tracking-[0.18em] text-dim transition-colors hover:text-signal"
        >
          {open ? "Less detail" : "More detail"}
          <ChevronDown
            className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}

      <ul className="mb-6 mt-5 flex flex-wrap gap-x-2 gap-y-2 font-mono text-[10px] text-dim">
        {visibleStack.map((tech) => (
          <li
            key={tech}
            className="border border-line px-2 py-1 transition-colors duration-200 group-hover:border-line-bright"
          >
            {tech}
          </li>
        ))}
        {hiddenCount > 0 && (
          <li className="border border-line px-2 py-1 text-dim">
            +{hiddenCount}
          </li>
        )}
      </ul>

      <div className="mt-auto flex flex-wrap gap-5 pt-1 font-mono text-xs">
        {project.live && (
          <Magnetic strength={0.2}>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="border-b border-signal pb-0.5 text-signal transition-colors hover:border-text hover:text-text"
            >
              Open ↗
            </a>
          </Magnetic>
        )}
        {project.repo && (
          <Magnetic strength={0.2}>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
              className="border-b border-line-bright pb-0.5 text-muted transition-colors hover:border-text hover:text-text"
            >
              Source ↗
            </a>
          </Magnetic>
        )}
        {!project.live && !project.repo && (
          <span className="text-dim">Private repository — happy to walk through it on a call</span>
        )}
      </div>
      </div>
    </motion.article>
  );
}
