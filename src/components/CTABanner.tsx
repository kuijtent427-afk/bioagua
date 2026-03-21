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
  <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(200, 60%, 18%) 0%, hsl(195, 55%, 25%) 40%, hsl(190, 50%, 30%) 100%)" }}>
    {/* Decorative mesh */}
    <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
    <motion.div
      className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-[0.06]"
      style={{ background: "radial-gradient(circle, hsl(190, 60%, 60%), transparent)" }}
      animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-[0.04]"
      style={{ background: "radial-gradient(circle, hsl(185, 55%, 50%), transparent)" }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="container mx-auto px-4 py-20 md:py-24 text-center relative z-10">
      <motion.h2
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-secondary-foreground/50 mb-10 max-w-xl mx-auto text-sm"
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
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 rounded-full shadow-glow hover:shadow-strong transition-all duration-300">
            <Link to={to}>{buttonText}</Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
          <Button asChild size="lg" variant="outline" className="border-secondary-foreground/25 text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold px-8 bg-transparent rounded-full transition-all duration-300">
            <Link to={to}>{buttonText2}</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
