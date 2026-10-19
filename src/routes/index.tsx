import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard, ServiceCard, NewsCard } from "@/components/site/Cards";
import { Gallery } from "@/components/site/Gallery";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { MayoristasCTA } from "@/components/site/MayoristasCTA";
import {
  atributosCalidad,
  imagenes,
  noticias,
  productos,
  razones,
  servicios,
} from "@/data/content";
import { site } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.marca} | Venta de aguaymanto peruano al por mayor y menor - Limatambo` },
      {
        name: "description",
        content:
          "Producción y comercialización de aguaymanto peruano seleccionado. Atendemos a restaurantes, tiendas, distribuidores y compradores mayoristas. Solicita tu cotización.",
      },
      { property: "og:title", content: `${site.marca} | Aguaymanto peruano de calidad - Limatambo` },
      {
        property: "og:description",
        content:
          "Aguaymanto fresco seleccionado del campo peruano. Venta al por mayor y atención comercial personalizada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:description",
        content: "Aguaymanto peruano seleccionado. Venta al por mayor y menor.",
      },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <>
      <HeroSlider />

      {/* Introducción */}
      <section className="py-20 lg:py-28">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <img
              src={imagenes.hero3}
              alt="Productora peruana cosechando aguaymanto fresco en el campo"
              loading="lazy"
              width={1920}
              height={1088}
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-lift"
            />
            <div className="absolute -right-2 -bottom-6 hidden rounded-xl bg-gold px-7 py-5 text-accent-foreground shadow-lift sm:block">
              <p className="font-display text-2xl font-semibold">100%</p>
              <p className="text-xs font-bold tracking-[0.15em] uppercase">Origen peruano</p>
            </div>
          </Reveal>

          <div>
            <SectionTitle
              eyebrow="Sobre la empresa"
              title="Comprometidos con la calidad del aguaymanto peruano"
              description="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes - Limatambeño."
            />
            <Reveal delay={120}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {razones.slice(0, 4).map((r) => (
                  <li key={r.titulo} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-leaf text-leaf-foreground">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-foreground/85">{r.titulo}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="field" size="xl" className="mt-9">
                <Link to="/quienes-somos">Conoce quiénes somos</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="Nuestros productos"
            title="Aguaymanto seleccionado para cada tipo de cliente"
            description="Trabajamos presentaciones para consumo directo, distribución comercial y requerimientos específicos."
            align="center"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {productos.map((p, i) => (
              <ProductCard key={p.slug} producto={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* Calidad */}
      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow="Calidad que se nota"
              title="Cuidamos el producto en cada etapa"
              description="Nuestro trabajo se apoya en la selección cuidadosa, el manejo responsable y la atención cercana al cliente."
            />
            <Reveal delay={100}>
              <img
                src={imagenes.empaque}
                alt="Aguaymanto empacado en envases limpios listos para su distribución"
                loading="lazy"
                width={1408}
                height={1056}
                className="mt-10 aspect-4/3 w-full rounded-2xl object-cover shadow-soft"
              />
            </Reveal>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:mt-20">
            {atributosCalidad.map((a, i) => (
              <Reveal
                as="li"
                key={a.titulo}
                delay={i * 70}
                className="rounded-xl border border-border bg-card p-6 shadow-soft"
              >
                <h3 className="text-base text-primary">{a.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.texto}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="Nuestros servicios"
            title="Acompañamos a cada cliente según lo que necesita"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s, i) => (
              <ServiceCard key={s.titulo} servicio={s} delay={i * 80} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outlineLeaf" size="xl">
              <Link to="/servicios">
                Conocer nuestros servicios
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="¿Por qué elegirnos?" title="Razones para trabajar con nosotros" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {razones.map((r, i) => (
              <Reveal key={r.titulo} delay={i * 70} className="bg-card p-7">
                <span className="font-display text-3xl text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-base text-primary">{r.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="Galería"
            title="Del campo peruano a la mesa de nuestros clientes"
            align="center"
          />
          <div className="mt-14">
            <Gallery />
          </div>
        </div>
      </section>

      <MayoristasCTA />

      {/* Noticias */}
      <section className="py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle
            eyebrow="Noticias y actualidad"
            title="Novedades de la empresa y del aguaymanto"
          />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((n, i) => (
              <NewsCard key={n.slug} noticia={n} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas antes de comprar"
            description="Si no encuentras la respuesta que buscas, escríbenos por WhatsApp o desde el formulario de contacto."
          />
          <Reveal delay={100} className="rounded-2xl border border-border bg-card px-7 shadow-soft">
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
