"use client";

import { site } from "@/data/site";
import { Label } from "./Label";

const accentColors = [
  "rgb(var(--signal-rgb))",
  "rgb(var(--aurora-b-rgb))",
  "rgb(var(--aurora-c-rgb))",
];

export function StackMarquee() {
  return (
    <div className="space-y-10">
      {site.stack.map((group, i) => {
        const items = [...group.items, ...group.items];
        const accent = accentColors[i % accentColors.length];

        return (
          <div key={group.label} className="border-t border-line pt-6">
            <div className="mb-5 flex items-center gap-2.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: accent }}
              />
              <Label>{group.label}</Label>
            </div>
            <div className="marquee-pause overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div
                className={`flex w-max gap-3 ${
                  i % 2 === 0 ? "marquee-track" : "marquee-track-reverse"
                }`}
              >
                {items.map((item, idx) => (
                  <span
                    key={`${item}-${idx}`}
                    className="chip flex shrink-0 items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2.5 font-mono text-sm text-muted shadow-sm backdrop-blur-sm hover:text-text"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full opacity-60"
                      style={{ backgroundColor: accent }}
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
