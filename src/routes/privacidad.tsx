import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: `Política de privacidad | ${site.marca}` },
      {
        name: "description",
        content:
          "Política de privacidad sobre el tratamiento de los datos que nos envías a través del formulario de contacto.",
      },
      { property: "og:title", content: `Política de privacidad | ${site.marca}` },
      {
        property: "og:description",
        content: "Cómo tratamos los datos personales enviados desde nuestro sitio web.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:description", content: "Política de privacidad del sitio." },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <div className="container-site max-w-3xl pt-36 pb-24 lg:pt-44">
      <h1 className="text-4xl text-primary">Política de privacidad</h1>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>
          En {site.nombre} respetamos la privacidad de quienes visitan nuestro sitio web y nos
          contactan a través de los canales disponibles.
        </p>
        <h2 className="pt-4 text-xl text-primary">Datos que recopilamos</h2>
        <p>
          Recopilamos únicamente los datos que nos proporcionas voluntariamente mediante el
          formulario de contacto: nombre, empresa, correo electrónico, teléfono, ciudad, tipo de
          cliente, producto de interés, cantidad aproximada y el mensaje de tu consulta.
        </p>
        <h2 className="pt-4 text-xl text-primary">Uso de la información</h2>
        <p>
          Utilizamos estos datos exclusivamente para responder consultas comerciales, elaborar
          cotizaciones y coordinar pedidos. No vendemos ni cedemos información a terceros ajenos a
          esta finalidad.
        </p>
        <h2 className="pt-4 text-xl text-primary">Conservación y derechos</h2>
        <p>
          Conservamos los datos el tiempo necesario para atender la consulta. Puedes solicitar el
          acceso, la rectificación o la eliminación de tus datos escribiendo a {site.contacto.correo}.
        </p>
        <p className="text-sm">
          Este texto es una versión inicial y debe revisarse junto con el área legal de la empresa.
        </p>
      </div>
    </div>
  );
}
