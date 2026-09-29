import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Tag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SectionTitle";
import { NewsCard } from "@/components/site/Cards";
import { Reveal } from "@/components/site/Reveal";
import { noticias } from "@/data/content";
import { site } from "@/config/site";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = noticias.find((n) => n.slug === params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: `Noticia no disponible | ${site.marca}` },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { noticia } = loaderData;
    return {
      meta: [
        { title: `${noticia.titulo} | ${site.marca}` },
        { name: "description", content: noticia.resumen },
        { property: "og:title", content: noticia.titulo },
        { property: "og:description", content: noticia.resumen },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: noticia.resumen },
      ],
    };
  },
  notFoundComponent: NoticiaNoEncontrada,
  component: NoticiaDetalle,
});

function NoticiaNoEncontrada() {
  return (
    <div className="container-site pt-40 pb-24 text-center">
      <h1 className="text-3xl text-primary">Noticia no encontrada</h1>
      <p className="mt-3 text-muted-foreground">
        Es posible que esta publicación haya sido movida o eliminada.
      </p>
      <Button asChild variant="field" size="lg" className="mt-8">
        <Link to="/noticias">Ver todas las noticias</Link>
      </Button>
    </div>
  );
}

function NoticiaDetalle() {
  const { noticia } = Route.useLoaderData();
  const relacionadas = noticias.filter((n) => n.slug !== noticia.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="relative isolate overflow-hidden">
          <img
            src={noticia.imagen}
            alt={noticia.alt}
            width={1200}
            height={800}
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary/94 via-primary/80 to-primary/45"
            aria-hidden="true"
          />
          <div className="relative container-site pt-40 pb-20 lg:pt-48">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-xs font-semibold text-gold-soft hover:text-primary-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Volver a noticias
            </Link>
            <h1 className="mt-6 max-w-3xl text-3xl leading-tight text-balance text-primary-foreground sm:text-4xl lg:text-5xl">
              {noticia.titulo}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-primary-foreground/80">
              <span className="inline-flex items-center gap-2">
                <Tag className="size-4" aria-hidden="true" />
                {noticia.categoria}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4" aria-hidden="true" />
                <time dateTime={noticia.fecha}>{noticia.fechaTexto}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <User className="size-4" aria-hidden="true" />
                {noticia.autor}
              </span>
            </div>
          </div>
        </header>

        <div className="container-site grid gap-14 py-20 lg:grid-cols-[1.4fr_0.6fr] lg:py-24">
          <Reveal className="max-w-2xl space-y-6 text-base leading-relaxed text-foreground/85">
            <p className="text-lg font-medium text-primary">{noticia.resumen}</p>
            {noticia.contenido.map((parrafo) => (
              <p key={parrafo.slice(0, 40)}>{parrafo}</p>
            ))}
            <figure className="pt-4">
              <img
                src={noticia.imagen}
                alt={noticia.alt}
                loading="lazy"
                width={1200}
                height={800}
                className="w-full rounded-2xl object-cover shadow-soft"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">{noticia.alt}</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="h-fit rounded-2xl border border-border bg-card p-8 shadow-soft lg:sticky lg:top-28">
            <h2 className="text-lg text-primary">¿Te interesa nuestro aguaymanto?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Escríbenos para recibir información de productos, presentaciones y cotizaciones.
            </p>
            <Button asChild variant="gold" size="lg" className="mt-6 w-full">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
          </Reveal>
        </div>
      </article>

      <section className="bg-secondary/60 py-20 lg:py-24">
        <div className="container-site">
          <SectionTitle eyebrow="Noticias relacionadas" title="Sigue leyendo" />
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {relacionadas.map((n, i) => (
              <NewsCard key={n.slug} noticia={n} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
