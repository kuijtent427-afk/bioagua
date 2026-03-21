import { Link } from "react-router-dom";
import { Droplets, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Droplets className="h-6 w-6 text-cta" />
            <span className="font-display text-lg font-bold">BioAgua Chile</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Mantención, optimización e instalación de sistemas de agua para condominios y empresas.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Enlaces</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-cta transition-colors">Inicio</Link>
            <Link to="/nosotros" className="hover:text-cta transition-colors">Nosotros</Link>
            <Link to="/empresas" className="hover:text-cta transition-colors">Empresas</Link>
            <Link to="/condominios" className="hover:text-cta transition-colors">Condominios</Link>
            <Link to="/contacto" className="hover:text-cta transition-colors">Contacto</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contacto</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <a href="tel:+56912345678" className="flex items-center gap-2 hover:text-cta transition-colors">
              <Phone className="h-4 w-4" /> +56 9 1234 5678
            </a>
            <a href="mailto:contacto@bioaguachile.cl" className="flex items-center gap-2 hover:text-cta transition-colors">
              <Mail className="h-4 w-4" /> contacto@bioaguachile.cl
            </a>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cta transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary/40 mt-8 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} BioAgua Chile. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
