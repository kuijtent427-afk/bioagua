import { Link } from "react-router-dom";
import { Droplets, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="h-6 w-6 text-accent" />
            <span className="font-display text-lg font-bold">BIOAGUA CHILE</span>
          </div>
          <p className="text-sm text-secondary-foreground/70 leading-relaxed">
            Mantención, optimización e instalación de sistemas de agua para condominios y empresas.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm tracking-wider">ENLACES</h4>
          <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
            <Link to="/" className="hover:text-accent transition-colors">Inicio</Link>
            <Link to="/nosotros" className="hover:text-accent transition-colors">Nosotros</Link>
            <Link to="/empresas" className="hover:text-accent transition-colors">Empresas</Link>
            <Link to="/condominios" className="hover:text-accent transition-colors">Condominios</Link>
            <Link to="/contacto" className="hover:text-accent transition-colors">Contacto</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm tracking-wider">CONTACTO</h4>
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
            <a href="tel:+56912345678" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" /> +56 9 1234 5678
            </a>
            <a href="mailto:contacto@bioaguachile.cl" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" /> contacto@bioaguachile.cl
            </a>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} BioAgua Chile. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-2">
          <Droplets className="h-5 w-5 text-accent" />
          <span className="font-display text-sm font-bold text-secondary-foreground/60">BIOAGUA</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
