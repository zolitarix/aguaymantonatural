import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";

/** [LOGO DE LA EMPRESA] — logotipo provisional de texto. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      to="/"
      aria-label={`${site.marca} — ir al inicio`}
      className="group flex items-center gap-3"
    >
      <span
        className={cn(
          "relative flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105",
          tone === "light" ? "bg-gold" : "surface-field",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="size-6" fill="none">
          <path
            d="M16 5 21.5 10.5 16 13 10.5 10.5 16 5Z"
            className={tone === "light" ? "fill-primary" : "fill-gold-soft"}
          />
          <circle
            cx="16"
            cy="19.5"
            r="6.5"
            className={tone === "light" ? "fill-primary" : "fill-gold"}
          />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-base font-semibold tracking-tight sm:text-lg",
            tone === "light" ? "text-primary-foreground" : "text-primary",
          )}
        >
          {site.marca}
        </span>
        <span
          className={cn(
            "block text-[0.62rem] font-semibold tracking-[0.22em] uppercase",
            tone === "light" ? "text-gold-soft" : "text-leaf",
          )}
        >
          Physalis peruviana
        </span>
      </span>
    </Link>
  );
}
