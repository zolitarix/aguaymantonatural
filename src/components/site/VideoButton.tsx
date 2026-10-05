import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";

const VIDEO_ID = "aG-EexHoO10";

export function VideoButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group mt-8 inline-flex items-center gap-4 text-primary-foreground"
      >
        <span className="relative flex size-14 items-center justify-center rounded-full bg-gold text-accent-foreground shadow-lift transition-transform group-hover:scale-110">
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" aria-hidden="true" />
          <Play className="relative size-6 translate-x-0.5 fill-current" aria-hidden="true" />
        </span>
        <span className="text-sm font-bold tracking-[0.15em] uppercase">Ver video</span>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Video sobre aguaymanto"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              aria-label="Cerrar video"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 z-10 flex size-12 items-center justify-center rounded-full bg-cream/15 text-cream hover:bg-cream/30"
            >
              <X className="size-6" />
            </button>
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="Video sobre aguaymanto"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>,
          document.body,
        )}
    </>
  );
}
