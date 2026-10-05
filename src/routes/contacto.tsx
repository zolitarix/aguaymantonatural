import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { imagenes } from "@/data/content";
import { site, whatsappUrl } from "@/config/site";

type ContactoSearch = { producto?: string | undefined };

export const Route = createFileRoute("/contacto")({
  validateSearch: (search: Record<string, unknown>): ContactoSearch => ({
    producto: typeof search.producto === "string" ? search.producto : undefined,
  }),
  head: () => ({
    meta: [
      { title: `Contacto y cotizaciones de aguaymanto | ${site.marca}` },
      {
        name: "description",
        content:
          "Contáctanos por WhatsApp, teléfono, correo o formulario para solicitar una cotización de aguaymanto peruano al por mayor o menor.",
      },
      { property: "og:title", content: `Contacto | ${site.marca}` },
      {
        property: "og:description",
        content:
          "Estamos aquí para atenderte. Solicita información o una cotización de aguaymanto peruano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: "Solicita tu cotización de aguaymanto peruano." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const { producto } = Route.useSearch();

  const datos = [
    {
      label: "WhatsApp",
      valor: site.contacto.whatsapp,
      Icon: MessageCircle,
      href: whatsappUrl(),
      externo: true,
    },
    { label: "Teléfono", valor: site.contacto.telefono, Icon: Phone, href: site.contacto.telefonoLink },
    { label: "Correo electrónico", valor: site.contacto.correo, Icon: Mail },
    {
      label: "Dirección",
      valor: `${site.contacto.direccion}, ${site.contacto.ciudad}`,
      Icon: MapPin,
    },
    { label: "Horario de atención", valor: site.contacto.horario, Icon: Clock },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí para atenderte"
        description="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
        imagen={imagenes.hero1}
        alt="Aguaymanto fresco recién cosechado"
      />

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle eyebrow="Datos de contacto" title="Canales de atención" />
            <ul className="mt-9 space-y-5">
              {datos.map(({ label, valor, Icon, href, externo }, i) => (
                <Reveal
                  as="li"
                  key={label}
                  delay={i * 70}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-leaf">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.14em] text-leaf uppercase">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={externo ? "_blank" : undefined}
                        rel={externo ? "noopener noreferrer" : undefined}
                        className="mt-1 block text-sm font-semibold text-primary hover:text-leaf"
                      >
                        {valor}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-semibold text-primary">{valor}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle
              eyebrow="Formulario"
              title="Cuéntanos qué necesitas"
              description="Completa el formulario y nos comunicaremos contigo para atender tu consulta o cotización."
            />
            <Reveal delay={100} className="mt-9">
              <ContactForm productoInicial={producto} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle eyebrow="Preguntas frecuentes" title="Antes de escribirnos" />
          <Reveal delay={100} className="rounded-2xl border border-border bg-card px-7 shadow-soft">
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
