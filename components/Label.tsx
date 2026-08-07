export function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-dim">
      {children}
    </span>
  );
}
