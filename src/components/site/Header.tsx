import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/config/site";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlay = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !overlay;
  const tone: "dark" | "light" = solid ? "dark" : "light";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid
          ? "border-b border-border/70 bg-background/92 py-2 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-transparent py-4",
      )}
    >
      <div className="container-site flex items-center justify-between gap-6">
        <Logo tone={tone} />

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                    solid
                      ? "text-foreground/75 hover:text-primary"
                      : "text-primary-foreground/85 hover:text-primary-foreground",
                  )}
                  activeProps={{
                    className: solid
                      ? "text-primary after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold"
                      : "text-primary-foreground after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.contacto.telefonoLink}
            className={cn(
              "hidden items-center gap-2 text-sm font-semibold transition-colors xl:flex",
              solid
                ? "text-muted-foreground hover:text-primary"
                : "text-primary-foreground/85 hover:text-primary-foreground",
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.contacto.telefono}
          </a>

          <Button asChild variant="gold" size="lg" className="hidden sm:inline-flex">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant={solid ? "outlineLeaf" : "outlineLight"}
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm bg-background">
              <SheetHeader className="text-left">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <Logo />
              </SheetHeader>
              <nav aria-label="Navegación móvil" className="mt-8">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        activeOptions={{ exact: link.to === "/" }}
                        className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                        activeProps={{ className: "bg-secondary text-primary" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="gold" size="lg" className="mt-6 w-full">
                  <Link to="/contacto">Solicitar cotización</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
