import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import { galeria } from "@/data/content";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [activa, setActiva] = useState<number | null>(null);
  const item = activa !== null ? galeria[activa] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {galeria.map((foto, i) => (
          <Reveal
            key={foto.alt}
            delay={i * 60}
            className={cn(
              "overflow-hidden rounded-xl",
              i === 0 && "col-span-2 row-span-2 lg:col-span-2",
            )}
          >
            <button
              type="button"
              onClick={() => setActiva(i)}
              className="group block size-full cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
              aria-label={`Ampliar imagen: ${foto.alt}`}
            >
              <img
                src={foto.imagen}
                alt={foto.alt}
                loading="lazy"
                width={1200}
                height={900}
                className={cn(
                  "size-full object-cover transition-transform duration-700 group-hover:scale-105",
                  i === 0 ? "aspect-square lg:aspect-4/3" : "aspect-4/3",
                )}
              />
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={activa !== null} onOpenChange={(o) => !o && setActiva(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{item?.alt ?? "Imagen"}</DialogTitle>
          {item ? (
            <figure>
              <img
                src={item.imagen}
                alt={item.alt}
                className="w-full rounded-xl object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-primary-foreground">
                {item.alt}
              </figcaption>
            </figure>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
