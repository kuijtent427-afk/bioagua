import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import EditableText from "@/components/admin/EditableText";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground relative">
    {/* Gradient top accent */}
    <div className="h-1" style={{ background: "linear-gradient(90deg, hsl(190, 55%, 40%), hsl(185, 65%, 45%), hsl(190, 55%, 40%))" }} />

    {/* Tagline banner */}
    <div className="border-b border-secondary-foreground/8">
      <div className="container mx-auto px-4 py-7 text-center">
        <motion.p
          className="text-sm font-semibold tracking-widest text-secondary-foreground/60 uppercase"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Expertos en calderas, bombas y sistemas hidráulicos
        </motion.p>
      </div>
    </div>

    <div className="container mx-auto px-4 py-14">
      <motion.div
        className="grid md:grid-cols-3 gap-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-2 mb-5">
            <img src={logo} alt="BioAgua Chile" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm text-secondary-foreground/50 leading-relaxed max-w-xs">
            Mantención, optimización e instalación de sistemas de agua para condominios y empresas.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-display font-semibold mb-5 text-sm tracking-widest text-secondary-foreground/80">ENLACES</h4>
          <div className="flex flex-col gap-2.5 text-sm text-secondary-foreground/50">
            {[
              { to: "/", label: "Inicio" },
              { to: "/nosotros", label: "Nosotros" },
              { to: "/empresas", label: "Empresas" },
              { to: "/condominios", label: "Condominios" },
              { to: "/contacto", label: "Contacto" },
            ].map((link) => (
              <motion.div key={link.to} whileHover={{ x: 4, transition: { duration: 0.2 } }}>
                <Link
                  to={link.to}
                  className="relative inline-block hover:text-accent transition-colors after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-display font-semibold mb-5 text-sm tracking-widest text-secondary-foreground/80">CONTACTO</h4>
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/50">
            <motion.a href="tel:+56925835616" className="flex items-center gap-3 hover:text-accent transition-colors" whileHover={{ x: 4, transition: { duration: 0.2 } }}>
              <Phone className="h-4 w-4 text-accent/60" />
              <EditableText contentKey="footer__contacto__phone" defaultValue="+56 9 2583 5616" as="span" />
            </motion.a>
            <motion.a href="mailto:bioagua@gmail.com" className="flex items-center gap-3 hover:text-accent transition-colors" whileHover={{ x: 4, transition: { duration: 0.2 } }}>
              <Mail className="h-4 w-4 text-accent/60" />
              <EditableText contentKey="footer__contacto__email" defaultValue="bioagua@gmail.com" as="span" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <div className="border-t border-secondary-foreground/10 mt-10 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-secondary-foreground/35">
          © {new Date().getFullYear()} BioAgua Chile. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-2">
          <img src={logo} alt="BioAgua Chile" className="h-7 w-auto brightness-0 invert opacity-40" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
