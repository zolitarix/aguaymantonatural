import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  imagen: string;
  alt: string;
};

export function PageHero({ eyebrow, title, description, imagen, alt }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={imagen}
        alt={alt}
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/94 via-primary/80 to-primary/45"
        aria-hidden="true"
      />
      <div className="relative container-site pt-40 pb-20 lg:pt-48 lg:pb-24">
        <nav aria-label="Ruta de navegación" className="mb-6">
          <ol className="flex items-center gap-1 text-xs font-semibold text-primary-foreground/70">
            <li>
              <Link to="/" className="hover:text-gold-soft">
                Inicio
              </Link>
            </li>
            <ChevronRight className="size-3.5" aria-hidden="true" />
            <li className="text-gold-soft">{eyebrow}</li>
          </ol>
        </nav>
        <span className="eyebrow text-gold-soft">
          <span className="h-px w-8 bg-gold-soft" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] text-balance text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
