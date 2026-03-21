import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/empresas", label: "Empresas" },
  { to: "/condominios", label: "Condominios" },
  { to: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-secondary">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground">
          <Droplets className="h-7 w-7 text-cta" />
          <span className="font-display text-xl font-bold tracking-tight">BioAgua Chile</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-cta ${
                location.pathname === l.to ? "text-cta" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild className="bg-cta text-cta-foreground hover:bg-cta/90 font-semibold">
            <Link to="/contacto">Agenda evaluación gratuita</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-secondary px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-secondary/30 ${
                location.pathname === l.to ? "text-cta" : "text-primary-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild className="w-full mt-3 bg-cta text-cta-foreground hover:bg-cta/90 font-semibold">
            <Link to="/contacto" onClick={() => setOpen(false)}>Agenda evaluación gratuita</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
