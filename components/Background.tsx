/* Fixed backdrop: solid theme base + slow-drifting aurora blobs, a faint
 * grid, and a handful of floating particles. Pure CSS animation (see
 * globals.css) so this never needs to be a client component, and the
 * global prefers-reduced-motion rule freezes it automatically. */

export function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="aurora-blob aurora-blob-a" />
      <div className="aurora-blob aurora-blob-b" />
      <div className="aurora-blob aurora-blob-c" />
      <div className="grid-overlay" />
      <div className="particle-field">
        <span className="particle particle-1" />
        <span className="particle particle-2" />
        <span className="particle particle-3" />
        <span className="particle particle-4" />
        <span className="particle particle-5" />
        <span className="particle particle-6" />
        <span className="particle particle-7" />
        <span className="particle particle-8" />
      </div>
    </div>
  );
}
