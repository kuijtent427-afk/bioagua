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
          <p className="text-sm text-secondary-foreground/70 leading-relaxed mb-6">
            Mantención, optimización e instalación de sistemas de agua para condominios y empresas.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.15 }}
              aria-label="Instagram"
            >
              <svg className="h-4 w-4 text-secondary-foreground/70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.15 }}
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4 text-secondary-foreground/70" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </motion.a>
          </div>
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
