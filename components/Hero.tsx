"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowUpRight, Download, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { Label } from "./Label";
import { SyncLine } from "./SyncLine";
import { Magnetic } from "./Magnetic";
import { Stats } from "./Stats";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 50]);
  const photoRotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 4]);

  const rise = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <header
      id="top"
      ref={ref}
      className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 md:pt-28"
    >
      <div className="mb-12 flex flex-col-reverse gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.div
            {...rise}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
              {site.available}
            </span>
          </motion.div>

          <h1 className="font-display text-6xl font-bold leading-[0.88] tracking-tight md:text-8xl">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? undefined : { y: "100%" }}
                animate={reduce ? undefined : { y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Muhammad
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block text-signal"
                initial={reduce ? undefined : { y: "100%" }}
                animate={reduce ? undefined : { y: 0 }}
                transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                Hassan
              </motion.span>
            </span>
          </h1>

          <motion.p
            {...rise}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted"
          >
            {site.role} · {site.location} · {site.timezone}
          </motion.p>

          <motion.div
            {...rise}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                data-cursor
                className="inline-block border border-signal bg-signal px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-transparent hover:text-signal"
              >
                Hire me
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="#work"
                data-cursor
                className="inline-flex items-center gap-1.5 border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-text transition-colors hover:border-signal hover:text-signal"
              >
                View work
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href={`https://wa.me/${site.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="inline-flex items-center gap-1.5 border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:border-signal hover:text-signal"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href={site.contact.cv}
                download
                data-cursor
                className="inline-flex items-center gap-1.5 border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:border-signal hover:text-signal"
              >
                <Download className="h-3.5 w-3.5" />
                Download CV
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          {...rise}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ y: photoY, rotate: photoRotate }}
          className="shrink-0"
        >
          <Image
            src="/hassan.webp"
            alt="Muhammad Hassan"
            width={224}
            height={224}
            priority
            className="border border-line object-cover transition-colors duration-500 hover:border-signal/50"
          />
        </motion.div>
      </div>

      <motion.div
        {...rise}
        transition={{ duration: 0.6, delay: 0.32 }}
        className="mb-10"
      >
        <Stats />
      </motion.div>

      <motion.div
        {...rise}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mb-14 border-b border-line pb-10"
      >
        <SyncLine />
      </motion.div>

      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <motion.p
          {...rise}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl text-lg leading-relaxed text-muted"
        >
          {site.intro}
        </motion.p>

        <motion.div
          {...rise}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col gap-5 font-mono text-xs"
        >
          <div>
            <Label>Overlap with CET</Label>
            <p className="mt-1 text-muted">{site.overlap}</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Magnetic strength={0.3}>
              <a
                href={`mailto:${site.contact.email}`}
                data-cursor
                className="text-signal transition-colors hover:text-text"
              >
                {site.contact.email}
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href={site.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="text-muted transition-colors hover:text-text"
              >
                GitHub ↗
              </a>
            </Magnetic>
            <Magnetic strength={0.3}>
              <a
                href={site.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
                className="text-muted transition-colors hover:text-text"
              >
                LinkedIn ↗
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
