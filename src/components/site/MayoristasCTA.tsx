import { Link } from "@tanstack/react-router";
import { Boxes, CalendarCheck, FileText, Handshake, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { whatsappUrl } from "@/config/site";

const puntos = [
  { label: "Pedidos por volumen", Icon: Boxes },
  { label: "Atención personalizada", Icon: Handshake },
  { label: "Presentaciones comerciales", Icon: FileText },
  { label: "Coordinación de entregas", Icon: Truck },
  { label: "Cotizaciones", Icon: CalendarCheck },
];

export function MayoristasCTA() {
  return (
    <section className="surface-field py-20 text-primary-foreground lg:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <span className="eyebrow text-gold-soft">
            <span className="h-px w-8 bg-gold-soft" aria-hidden="true" />
            Clientes mayoristas
          </span>
          <h2 className="mt-4 text-3xl leading-tight text-balance text-primary-foreground sm:text-4xl">
            ¿Buscas un proveedor de aguaymanto?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
            Atendemos consultas comerciales de restaurantes, tiendas, distribuidores,
            empresas y otros negocios que requieren aguaymanto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur-sm">
          <ul className="space-y-5">
            {puntos.map(({ label, Icon }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-soft">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold sm:text-base">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
