"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
  { id: "stack", label: "Stack" },
  { id: "history", label: "History" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [showName, setShowName] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
      // Reveal the full name once the hero (with its own big heading) has
      // scrolled mostly out of view, so it isn't shown twice at once.
      setShowName(window.scrollY > window.innerHeight * 0.6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on resize back to desktop, so it can't get
  // stuck open behind the now-hidden hamburger button.
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-line bg-ink/85 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between px-6 transition-[padding] duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#top"
          data-cursor
          className="overflow-hidden font-mono text-xs tracking-widest whitespace-nowrap"
        >
          <AnimatePresence mode="wait" initial={false}>
            {showName && (
              <motion.span
                key="full-name"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                {site.name}
              </motion.span>
            )}
          </AnimatePresence>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              data-cursor
              className={`relative px-3 py-2 transition-colors ${
                active === l.id ? "text-signal" : "hover:text-text"
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-signal/30 bg-signal/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </a>
          ))}
          <a
            href={site.contact.cv}
            download
            data-cursor
            aria-label="Download CV"
            title="Download CV"
            className="ml-2 flex items-center gap-1.5 border border-line px-3 py-1.5 text-text transition-colors hover:border-signal hover:text-signal"
          >
            <Download className="h-3.5 w-3.5" />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            data-cursor
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center border border-line text-text transition-colors hover:border-signal hover:text-signal"
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4 font-mono text-sm uppercase tracking-[0.15em]">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  data-cursor
                  onClick={() => setMenuOpen(false)}
                  className={`py-2.5 transition-colors ${
                    active === l.id ? "text-signal" : "text-muted hover:text-text"
                  }`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={site.contact.cv}
                download
                data-cursor
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center gap-2 border border-line px-4 py-2.5 text-text transition-colors hover:border-signal hover:text-signal"
              >
                <Download className="h-3.5 w-3.5" />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
