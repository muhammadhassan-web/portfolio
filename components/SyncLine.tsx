"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/* Hero sync line — the signature.
 * Two carets edit the same line at once and converge. A small, literal
 * demonstration of what Relay does, which is the most characteristic
 * thing in this body of work. */

const LINE = "systems that stay correct under change";
const SPLIT = 17;

export function SyncLine() {
  const reduce = useReducedMotion();
  const [a, setA] = useState(reduce ? SPLIT : 0);
  const [b, setB] = useState(reduce ? LINE.length : SPLIT);
  const done = a >= SPLIT && b >= LINE.length;

  useEffect(() => {
    if (reduce) return;
    let frame = 0;
    const id = setInterval(() => {
      frame += 1;
      setA((n) => (n < SPLIT ? n + 1 : n));
      if (frame % 2 === 0) setB((n) => (n < LINE.length ? n + 1 : n));
    }, 45);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="font-mono text-sm md:text-base">
      <div className="mb-3 flex items-center gap-5">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-dim">
            hassan
          </span>
        </span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-muted" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-dim">
            you
          </span>
        </span>
        <span className="ml-auto text-[10px] uppercase tracking-[0.2em] text-dim">
          {done ? "converged" : "syncing"}
        </span>
      </div>

      <p className="border-l-2 border-signal/40 py-1 pl-4 leading-relaxed text-text">
        <span>{LINE.slice(0, a)}</span>
        {a < SPLIT && (
          <span className="caret -mb-1 ml-px inline-block h-[1.1em] w-[2px] bg-signal align-middle" />
        )}
        <span className="text-muted">{LINE.slice(SPLIT, b)}</span>
        {b < LINE.length && (
          <span className="caret -mb-1 ml-px inline-block h-[1.1em] w-[2px] bg-muted align-middle" />
        )}
      </p>
    </div>
  );
}
