import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/Cards";
import { MayoristasCTA } from "@/components/site/MayoristasCTA";
import { imagenes, razones, servicios } from "@/data/content";
import { site } from "@/config/site";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: `Servicios: venta mayorista y atención comercial | ${site.marca}` },
      {
        name: "description",
        content:
          "Venta de aguaymanto al por mayor y menor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: `Nuestros servicios | ${site.marca}` },
      {
        property: "og:description",
        content:
          "Atendemos pedidos de volumen, restaurantes, tiendas y distribuidores con asesoría comercial personalizada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:description",
        content: "Servicios comerciales alrededor del aguaymanto peruano.",
      },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Nuestros servicios"
        description="Acompañamos a cada cliente en la elección del producto, el volumen y la coordinación de su pedido."
        imagen={imagenes.galeria1}
        alt="Equipo seleccionando aguaymanto en una planta de proceso"
      />

      <section id="servicios" className="py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="Qué ofrecemos"
            title="Servicios alrededor de nuestros productos"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s, i) => (
              <ServiceCard key={s.titulo} servicio={s} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={imagenes.empaque}
              alt="Aguaymanto empacado y clasificado para su despacho"
              loading="lazy"
              width={1408}
              height={1056}
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
          <div>
            <SectionTitle eyebrow="¿Por qué elegirnos?" title="Una atención cercana y consistente" />
            <ul className="mt-9 space-y-5">
              {razones.map((r, i) => (
                <Reveal as="li" key={r.titulo} delay={i * 70} className="flex gap-4">
                  <span className="font-display text-xl text-gold">0{i + 1}</span>
                  <div>
                    <h3 className="text-base text-primary">{r.titulo}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.texto}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200}>
              <Button asChild variant="field" size="xl" className="mt-9">
                <Link to="/contacto">Contactarnos</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <MayoristasCTA />
    </>
  );
}
