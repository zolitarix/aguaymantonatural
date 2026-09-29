import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { NewsCard } from "@/components/site/Cards";
import { MayoristasCTA } from "@/components/site/MayoristasCTA";
import { imagenes, noticias } from "@/data/content";
import { site } from "@/config/site";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: `Noticias y actualidad del aguaymanto | ${site.marca}` },
      {
        name: "description",
        content:
          "Novedades de la empresa, información sobre el cultivo del aguaymanto y tendencias del mercado agrícola peruano.",
      },
      { property: "og:title", content: `Noticias y actualidad | ${site.marca}` },
      {
        property: "og:description",
        content:
          "Noticias de la empresa, agricultura, aguaymanto, mercado, eventos, innovación y producción.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:description",
        content: "Novedades de la empresa y del aguaymanto peruano.",
      },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Noticias"
        title="Noticias y actualidad"
        description="Publicaciones sobre nuestra empresa, el cultivo del aguaymanto y el mercado agrícola peruano."
        imagen={imagenes.noticia1}
        alt="Cajas de aguaymanto peruano en un punto de venta"
      />

      <section className="py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Últimas publicaciones" title="Lo más reciente" />
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {noticias.map((n, i) => (
              <NewsCard key={n.slug} noticia={n} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <MayoristasCTA />
    </>
  );
}
