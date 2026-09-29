import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: `Términos y condiciones | ${site.marca}` },
      {
        name: "description",
        content:
          "Términos y condiciones de uso del sitio web y de las consultas comerciales realizadas a través de él.",
      },
      { property: "og:title", content: `Términos y condiciones | ${site.marca}` },
      {
        property: "og:description",
        content: "Condiciones de uso del sitio web y de las consultas comerciales.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:description", content: "Términos y condiciones del sitio." },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <div className="container-site max-w-3xl pt-36 pb-24 lg:pt-44">
      <h1 className="text-4xl text-primary">Términos y condiciones</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        <h2 className="pt-2 text-xl text-primary">Uso del sitio</h2>
        <p>
          El contenido de este sitio web tiene fines informativos y comerciales. {site.nombre} puede
          actualizar los textos, imágenes y productos publicados sin previo aviso.
        </p>
        <h2 className="pt-4 text-xl text-primary">Cotizaciones y pedidos</h2>
        <p>
          Las consultas realizadas a través del formulario o de nuestros canales de atención no
          constituyen una compra. Toda cotización está sujeta a disponibilidad del producto y a
          confirmación por parte de la empresa.
        </p>
        <h2 className="pt-4 text-xl text-primary">Propiedad intelectual</h2>
        <p>
          Los textos, imágenes y elementos gráficos de este sitio pertenecen a {site.nombre}, salvo
          indicación contraria.
        </p>
        <p className="text-sm">
          Este texto es una versión inicial y debe revisarse junto con el área legal de la empresa.
        </p>
      </div>
    </div>
  );
}
