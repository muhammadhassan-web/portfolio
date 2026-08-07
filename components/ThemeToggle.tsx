"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "portfolio-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    setTheme(
      document.documentElement.getAttribute("data-theme") === "light"
        ? "light"
        : "dark"
    );

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    function onSystemChange(e: MediaQueryListEvent) {
      if (localStorage.getItem(STORAGE_KEY)) return;
      const next = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      document.documentElement.style.colorScheme = next;
      setTheme(next);
    }
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      data-cursor
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="flex h-8 w-8 shrink-0 items-center justify-center border border-line text-text transition-colors hover:border-signal hover:text-signal"
    >
      {theme === "dark" && <Sun className="h-3.5 w-3.5" />}
      {theme === "light" && <Moon className="h-3.5 w-3.5" />}
    </button>
  );
}
