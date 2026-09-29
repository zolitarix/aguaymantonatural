import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ValueCard } from "@/components/site/Cards";
import { Gallery } from "@/components/site/Gallery";
import { MayoristasCTA } from "@/components/site/MayoristasCTA";
import { iconMap } from "@/components/site/icons";
import { compromiso, historia, imagenes, misionVision, valores } from "@/data/content";
import { site } from "@/config/site";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: `Quiénes somos | ${site.marca}` },
      {
        name: "description",
        content:
          "Conoce nuestra empresa: historia, misión, visión, valores y compromiso con la calidad del aguaymanto peruano.",
      },
      { property: "og:title", content: `Quiénes somos | ${site.marca}` },
      {
        property: "og:description",
        content:
          "Una empresa con raíces en el campo peruano dedicada a la producción y comercialización de aguaymanto.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:description",
        content: "Historia, misión, visión y valores de nuestra empresa de aguaymanto.",
      },
    ],
  }),
  component: QuienesSomos,
});

function QuienesSomos() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        description="Producimos y comercializamos aguaymanto con foco en la calidad, la confianza y las relaciones comerciales duraderas."
        imagen={imagenes.hero2}
        alt="Valle andino peruano con plantaciones de aguaymanto"
      />

      {/* Nuestra empresa */}
      <section id="nuestra-empresa" className="py-20 lg:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Nuestra empresa"
              title="Trabajamos con el aguaymanto peruano y con quienes lo valoran"
            />
            <Reveal delay={100} className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Somos una empresa dedicada a la producción y comercialización de aguaymanto.
                Nuestro trabajo abarca la selección del fruto, su presentación y la atención
                comercial a cada cliente.
              </p>
              <p>
                Atendemos a clientes particulares, restaurantes, hoteles, cafeterías, tiendas,
                distribuidores y empresas que requieren aguaymanto de manera regular o puntual.
              </p>
              <p>
                Nos diferencia la cercanía con el cliente y el cuidado del producto: cada pedido
                se evalúa según el requerimiento, el volumen y la disponibilidad.
              </p>
              <p>
                Nuestro compromiso con la calidad guía cada etapa del proceso, desde el campo
                hasta la entrega.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <Button asChild variant="field" size="xl" className="mt-9">
                <Link to="/productos">Ver productos</Link>
              </Button>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <img
              src={imagenes.galeria2}
              alt="Hileras de plantas de aguaymanto en una plantación peruana"
              loading="lazy"
              width={1200}
              height={912}
              className="aspect-4/5 w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* Historia */}
      <section id="nuestra-historia" className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="Nuestra historia"
            title="Un recorrido en construcción"
            description="Estos textos son iniciales y serán reemplazados por la historia real de la empresa."
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {historia.map((h, i) => (
              <Reveal
                as="li"
                key={h.numero}
                delay={i * 90}
                className="relative rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="font-display text-4xl text-gold-soft">{h.numero}</span>
                <h3 className="mt-3 text-lg text-primary">{h.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.texto}</p>
                <span
                  className="absolute inset-x-7 bottom-0 h-1 rounded-full surface-gold opacity-0 transition-opacity duration-500 hover:opacity-100"
                  aria-hidden="true"
                />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section id="mision-vision" className="py-20 lg:py-28">
        <div className="container-site grid gap-7 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-9 shadow-soft">
            <span className="flex size-12 items-center justify-center rounded-xl surface-field text-primary-foreground">
              <Target className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl text-primary">Nuestra Misión</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {misionVision.mision}
            </p>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-border bg-card p-9 shadow-soft">
            <span className="flex size-12 items-center justify-center rounded-xl surface-gold text-accent-foreground">
              <Compass className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-6 text-2xl text-primary">Nuestra Visión</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {misionVision.vision}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Nuestros valores" title="Lo que guía nuestro trabajo" align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v, i) => (
              <ValueCard key={v.titulo} valor={v} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section id="compromiso" className="py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Nuestro compromiso" title="Tres pilares que sostienen nuestra operación" />
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {compromiso.map((c, i) => {
              const Icon = iconMap[c.icono];
              return (
                <Reveal
                  key={c.titulo}
                  delay={i * 100}
                  className="rounded-2xl border border-leaf/25 bg-card p-8 shadow-soft"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-gold-soft/40 text-leaf">
                    {Icon ? <Icon className="size-6" aria-hidden="true" /> : null}
                  </span>
                  <h3 className="mt-6 text-xl text-primary">{c.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.texto}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Galería" title="Nuestro trabajo en imágenes" align="center" />
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </section>

      <MayoristasCTA />
    </>
  );
}
