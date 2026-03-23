import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const assetBase = import.meta.env.BASE_URL;

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container section-padding flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <img src={`${assetBase}bitmap-header.svg`} alt="RFT Soluciones" className="h-11 w-auto object-contain" />
          RFT Soluciones
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#contacto">Presupuesto</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#contacto" onClick={() => setOpen(false)}>Presupuesto</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
