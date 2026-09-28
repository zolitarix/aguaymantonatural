import { MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-leaf py-3 pr-5 pl-3 text-leaf-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/15">
        <MessageCircle className="size-5" aria-hidden="true" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">
        ¿Necesitas información?
      </span>
      <span className="sr-only">
        Escribir a {site.contacto.whatsapp} por WhatsApp
      </span>
    </a>
  );
}
