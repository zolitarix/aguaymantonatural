import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { slides } from "@/data/content";
import { VideoButton } from "./VideoButton";

const INTERVAL = 5000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [index]);

  return (
    <section
      aria-label="Presentación principal"
      className="relative isolate min-h-[92vh] overflow-hidden"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.titulo}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={slide.imagen}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "size-full object-cover transition-transform duration-[9000ms] ease-out",
              i === index ? "scale-105" : "scale-100",
            )}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/70 to-primary/20"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/95 to-transparent"
            aria-hidden="true"
          />
        </div>
      ))}

      <div className="relative container-site flex min-h-[92vh] items-center py-32">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={slide.titulo}
              className={cn(
                "transition-all duration-700",
                i === index
                  ? "opacity-100 translate-y-0"
                  : "pointer-events-none absolute opacity-0 translate-y-6",
              )}
              aria-hidden={i !== index}
            >
              {i === index ? (
                <>
                  <span className="eyebrow text-gold-soft">
                    <span className="h-px w-8 bg-gold-soft" aria-hidden="true" />
                    Aguaymanto peruano
                  </span>
                  <h1 className="mt-5 text-4xl leading-[1.08] text-balance text-primary-foreground sm:text-5xl lg:text-6xl">
                    {slide.titulo}
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                    {slide.texto}
                  </p>
                  <div className="mt-9 flex flex-wrap gap-3">
                    {slide.acciones.map((accion, j) => (
                      <Button
                        key={accion.label}
                        asChild
                        size="xl"
                        variant={j === 0 ? "gold" : "outlineLight"}
                      >
                        <Link to={accion.to}>{accion.label}</Link>
                      </Button>
                    ))}
                  </div>
                  <VideoButton />
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10">
        <div className="container-site flex items-center justify-between gap-6">
          <div className="flex items-center gap-3" role="tablist" aria-label="Diapositivas">
            {slides.map((slide, i) => (
              <button
                key={slide.titulo}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === index
                    ? "w-12 bg-gold"
                    : "w-6 bg-primary-foreground/45 hover:bg-primary-foreground/70",
                )}
              />
            ))}
          </div>
          <div className="hidden gap-2 sm:flex">
            <Button
              variant="outlineLight"
              size="icon"
              aria-label="Diapositiva anterior"
              onClick={() => go(index - 1)}
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="outlineLight"
              size="icon"
              aria-label="Diapositiva siguiente"
              onClick={() => go(index + 1)}
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
