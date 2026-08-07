"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";
import { Magnetic } from "./Magnetic";

function FloatingField({
  id,
  name,
  label,
  type = "text",
  textarea = false,
  rows,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  rows?: number;
}) {
  const field =
    "peer w-full border border-line bg-surface px-4 pt-6 pb-2 text-sm text-text placeholder-transparent transition-colors focus:border-signal focus:outline-none";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required
          placeholder=" "
          className={`${field} resize-none`}
        />
      ) : (
        <input id={id} name={name} type={type} required placeholder=" " className={field} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.28em] text-dim transition-all duration-200 peer-focus:top-2 peer-focus:text-[9px] peer-focus:text-signal peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[9px]"
      >
        {label}
      </label>
    </div>
  );
}

/* Posts to our own /api/contact route (Resend under the hood) via fetch
 * so the page never navigates away, and says what happened either way. */

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setState("sending");
    try {
      const data = new FormData(formRef.current);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      formRef.current.reset();
      setState("sent");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border border-signal/40 bg-surface p-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
          className="mb-4"
        >
          <CheckCircle2 className="h-8 w-8 text-signal" />
        </motion.div>
        <p className="mb-2 font-display text-2xl">Message sent.</p>
        <p className="text-sm leading-relaxed text-muted">
          It reaches my inbox directly. I usually reply within a day — if it
          takes longer than two, email me at {site.contact.email} instead.
        </p>
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FloatingField id="name" name="name" label="Name" />
        <FloatingField id="email" name="email" label="Email" type="email" />
      </div>

      <FloatingField
        id="message"
        name="message"
        label="What are you building?"
        textarea
        rows={5}
      />

      {state === "error" && (
        <p className="font-mono text-xs text-signal">
          That didn&apos;t send. Email {site.contact.email} directly and it
          will reach me.
        </p>
      )}

      <Magnetic strength={0.15}>
        <button
          type="submit"
          disabled={state === "sending"}
          data-cursor
          className="border border-signal bg-signal px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-transparent hover:text-signal disabled:opacity-50"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={state}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="inline-block"
            >
              {state === "sending" ? "Sending…" : "Send message"}
            </motion.span>
          </AnimatePresence>
        </button>
      </Magnetic>
    </form>
  );
}
