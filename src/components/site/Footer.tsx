import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Music2, Phone } from "lucide-react";
import { navLinks, site, whatsappUrl } from "@/config/site";
import { Logo } from "./Logo";

const redes = [
  { label: "Facebook", href: site.redes.facebook, Icon: Facebook },
  { label: "Instagram", href: site.redes.instagram, Icon: Instagram },
  { label: "TikTok", href: site.redes.tiktok, Icon: Music2 },
  { label: "LinkedIn", href: site.redes.linkedin, Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="surface-field text-primary-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            {site.nombre} — {site.tagline}
          </p>
          <div className="mt-6 flex gap-2">
            {redes.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:border-gold hover:bg-gold hover:text-accent-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-sm font-bold tracking-[0.18em] text-gold-soft uppercase">
            Enlaces
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-primary-foreground/75 transition-colors hover:text-gold-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold tracking-[0.18em] text-gold-soft uppercase">
            Información
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/75">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                WhatsApp: {site.contacto.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={site.contacto.telefonoLink}
                className="flex items-start gap-3 transition-colors hover:text-gold-soft"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                Teléfono: {site.contacto.telefono}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {site.contacto.correo}
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {site.contacto.direccion}, {site.contacto.ciudad}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.18em] text-gold-soft uppercase">
            Atención
          </h2>
          <p className="mt-5 text-sm text-primary-foreground/75">
            Horario de atención: {site.contacto.horario}
          </p>
          <Link
            to="/contacto"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            Solicitar cotización
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-xs text-primary-foreground/65 sm:flex-row">
          <p>© 2026 {site.nombre}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="transition-colors hover:text-gold-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="transition-colors hover:text-gold-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
