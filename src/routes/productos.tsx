import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/Cards";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { MayoristasCTA } from "@/components/site/MayoristasCTA";
import { atributosCalidad, imagenes, productos } from "@/data/content";
import { site, whatsappUrl } from "@/config/site";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: `Productos: aguaymanto fresco y presentaciones | ${site.marca}` },
      {
        name: "description",
        content:
          "Catálogo de aguaymanto peruano: fruto fresco seleccionado, presentaciones para distribución y opciones especiales según requerimiento.",
      },
      { property: "og:title", content: `Nuestros productos de aguaymanto | ${site.marca}` },
      {
        property: "og:description",
        content:
          "Aguaymanto fresco, presentaciones para distribución y opciones especiales. Consulta disponibilidad y cotización.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:description",
        content: "Catálogo de aguaymanto peruano seleccionado.",
      },
    ],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        eyebrow="Productos"
        title="Nuestros productos"
        description="Aguaymanto seleccionado, con presentaciones pensadas para consumo directo, distribución comercial y requerimientos específicos."
        imagen={imagenes.hero1}
        alt="Aguaymanto fresco seleccionado en cajas de madera"
      />

      <section id="catalogo" className="py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="Catálogo"
            title="Presentaciones disponibles"
            description="Los datos de presentación, peso, disponibilidad y precio se actualizan según la campaña. Consúltanos para conocer las opciones vigentes."
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((p, i) => (
              <ProductCard key={p.slug} producto={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <section id="calidad" className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="Calidad que se nota"
            title="Atributos que cuidamos en cada pedido"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {atributosCalidad.map((a, i) => (
              <Reveal
                key={a.titulo}
                delay={i * 70}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="font-display text-2xl text-gold">0{i + 1}</span>
                <h3 className="mt-3 text-lg text-primary">{a.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.texto}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-12 flex flex-wrap justify-center gap-3">
            <Button asChild variant="field" size="xl">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="outlineLeaf" size="xl">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <MayoristasCTA />

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Sobre nuestros productos y pedidos"
          />
          <Reveal delay={100} className="rounded-2xl border border-border bg-card px-7 shadow-soft">
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
