import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonText2?: string;
  to?: string;
}

const CTABanner = ({
  title = "CONTÁCTANOS",
  subtitle = "Llámanos ahora para una inspección gratuita.",
  buttonText = "Agendar Una Reunión",
  buttonText2 = "Solicita Más Información",
  to = "/contacto",
}: CTABannerProps) => (
  <section className="bg-secondary py-20 relative overflow-hidden">
    {/* Floating background shape */}
    <motion.div
      className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-[0.05]"
      style={{ background: "radial-gradient(circle, hsl(190, 60%, 60%), transparent)" }}
      animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.h2
        className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-secondary-foreground/70 mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
          <Button asChild variant="outline" className="border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold px-8 bg-transparent">
            <Link to={to}>{buttonText}</Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
          <Button asChild variant="outline" className="border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold px-8 bg-transparent">
            <Link to={to}>{buttonText2}</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
