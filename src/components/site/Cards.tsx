import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { iconMap } from "./icons";
import type { Noticia } from "@/data/content";

export function ProductCard({
  producto,
  delay = 0,
}: {
  producto: {
    slug: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    alt: string;
    presentacion: string;
    peso: string;
    disponibilidad: string;
    caracteristicas: readonly string[] | string[];
    cta: string;
  };
  delay?: number;
}) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-lift"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={producto.imagen}
          alt={producto.alt}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl text-primary">{producto.nombre}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {producto.descripcion}
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-border pt-5 text-xs">
          <div>
            <dt className="font-semibold tracking-wide text-leaf uppercase">Presentación</dt>
            <dd className="mt-0.5 text-muted-foreground">{producto.presentacion}</dd>
          </div>
          <div>
            <dt className="font-semibold tracking-wide text-leaf uppercase">Peso</dt>
            <dd className="mt-0.5 text-muted-foreground">{producto.peso}</dd>
          </div>
          <div className="col-span-2">
            <dt className="font-semibold tracking-wide text-leaf uppercase">Disponibilidad</dt>
            <dd className="mt-0.5 text-muted-foreground">{producto.disponibilidad}</dd>
          </div>
        </dl>
        <ul className="mt-5 space-y-2 text-sm text-foreground/80">
          {producto.caracteristicas.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
        <Button asChild variant="field" className="mt-7 w-full" size="lg">
          <Link to="/contacto" search={{ producto: producto.nombre }}>
            {producto.cta}
          </Link>
        </Button>
      </div>
    </Reveal>
  );
}

export function ServiceCard({
  servicio,
  delay = 0,
}: {
  servicio: { titulo: string; texto: string; icono: string };
  delay?: number;
}) {
  const Icon = iconMap[servicio.icono];
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-leaf transition-colors duration-500 group-hover:bg-gold group-hover:text-accent-foreground">
        {Icon ? <Icon className="size-6" aria-hidden="true" /> : null}
      </span>
      <h3 className="mt-6 text-lg text-primary">{servicio.titulo}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {servicio.texto}
      </p>
      <Link
        to="/contacto"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf transition-colors hover:text-primary"
      >
        Consultar
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </Reveal>
  );
}

export function ValueCard({
  valor,
  delay = 0,
}: {
  valor: { titulo: string; texto: string; icono: string };
  delay?: number;
}) {
  const Icon = iconMap[valor.icono];
  return (
    <Reveal
      as="article"
      delay={delay}
      className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform duration-500 hover:-translate-y-1"
    >
      <span className="flex size-11 items-center justify-center rounded-full bg-gold-soft/45 text-primary">
        {Icon ? <Icon className="size-5" aria-hidden="true" /> : null}
      </span>
      <h3 className="mt-5 text-lg text-primary">{valor.titulo}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{valor.texto}</p>
    </Reveal>
  );
}

export function NewsCard({ noticia, delay = 0 }: { noticia: Noticia; delay?: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-lift"
    >
      <Link to="/noticias/$slug" params={{ slug: noticia.slug }} className="block overflow-hidden">
        <img
          src={noticia.imagen}
          alt={noticia.alt}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-16/10 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-leaf">
            {noticia.categoria}
          </span>
          <time dateTime={noticia.fecha} className="text-muted-foreground">
            {noticia.fechaTexto}
          </time>
        </div>
        <h3 className="mt-4 text-xl leading-snug text-primary">
          <Link to="/noticias/$slug" params={{ slug: noticia.slug }} className="hover:text-leaf">
            {noticia.titulo}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {noticia.resumen}
        </p>
        <Link
          to="/noticias/$slug"
          params={{ slug: noticia.slug }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf transition-colors hover:text-primary"
        >
          Leer más
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </Reveal>
  );
}
