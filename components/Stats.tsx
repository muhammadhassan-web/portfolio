"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        const duration = 1400;
        const start = performance.now();
        let frame: number;

        function step(now: number) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          setDisplay(Math.floor(eased * value));
          if (p < 1) frame = requestAnimationFrame(step);
          else setDisplay(value);
        }

        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
      },
      { threshold: 0.4, rootMargin: "-40px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduce, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-3 divide-x divide-line border-y border-line">
      {site.stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="px-3 py-6 text-center md:px-8 md:py-8"
        >
          <div className="font-display text-3xl font-bold tabular-nums text-signal md:text-5xl">
            <Counter value={s.value} suffix={s.suffix} />
          </div>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-dim md:text-[10px] md:tracking-[0.2em]">
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
