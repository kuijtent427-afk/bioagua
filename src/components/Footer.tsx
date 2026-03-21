import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    {/* Tagline banner */}
    <div className="border-b border-secondary-foreground/10">
      <div className="container mx-auto px-4 py-6 text-center">
        <motion.p
          className="text-sm font-semibold tracking-wider text-secondary-foreground/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          EXPERTOS EN CALDERAS, BOMBAS Y SISTEMAS HIDRÁULICOS
        </motion.p>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeUp}>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="BioAgua Chile" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-sm text-secondary-foreground/70 leading-relaxed">
            Mantención, optimización e instalación de sistemas de agua para condominios y empresas.
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-display font-semibold mb-4 text-sm tracking-wider">ENLACES</h4>
          <div className="flex flex-col gap-2 text-sm text-secondary-foreground/70">
            {[
              { to: "/", label: "Inicio" },
              { to: "/nosotros", label: "Nosotros" },
              { to: "/empresas", label: "Empresas" },
              { to: "/condominios", label: "Condominios" },
              { to: "/contacto", label: "Contacto" },
            ].map((link) => (
              <motion.div key={link.to} whileHover={{ x: 4, transition: { duration: 0.2 } }}>
                <Link to={link.to} className="hover:text-accent transition-colors story-link">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h4 className="font-display font-semibold mb-4 text-sm tracking-wider">CONTACTO</h4>
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
            <motion.a href="tel:+56925835616" className="flex items-center gap-2 hover:text-accent transition-colors" whileHover={{ x: 4, transition: { duration: 0.2 } }}>
              <Phone className="h-4 w-4" /> +56 9 2583 5616
            </motion.a>
            <motion.a href="mailto:bioagua@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors" whileHover={{ x: 4, transition: { duration: 0.2 } }}>
              <Mail className="h-4 w-4" /> bioagua@gmail.com
            </motion.a>
            <motion.a
              href="https://wa.me/56925835836"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      <div className="border-t border-secondary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} BioAgua Chile. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-2">
          <img src={logo} alt="BioAgua Chile" className="h-8 w-auto brightness-0 invert" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
