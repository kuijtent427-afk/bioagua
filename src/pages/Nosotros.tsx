import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import calderaImg from "@/assets/nosotros-caldera.png";
import calefaccionImg from "@/assets/nosotros-calefaccion.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Nosotros = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
            SOMOS BIOAGUA CHILE
          </h1>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16" preserveAspectRatio="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className="fill-background" />
        </svg>
      </div>
    </section>

    {/* Trust headline */}
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Más de 50 empresas
          </h2>
          <p className="font-display text-xl md:text-2xl text-primary italic mt-1">
            Han Confiado en Nosotros
          </p>
        </motion.div>
      </div>
    </section>

    {/* About section with logo + text + stats */}
    <section className="bg-background pb-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Logo */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center">
            <div className="flex flex-col items-center gap-3">
              <Droplets className="h-20 w-20 text-primary" />
              <span className="font-display text-2xl font-bold text-secondary tracking-wide">BIOAGUA</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-2">Sobre Nosotros</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">AHORRA TIEMPO Y RECURSOS</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Contamos con un equipo técnico experto en calderas, bombas y sistemas hidráulicos. Desde mantenciones hasta instalaciones, optimizamos tus sistemas para que ahorres tiempo, dinero y recursos.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mt-12">
          <div className="text-center border-r border-border">
            <span className="font-display text-4xl font-bold text-primary">1</span>
            <p className="text-xs text-muted-foreground mt-1">Años de Garantía</p>
          </div>
          <div className="text-center">
            <span className="font-display text-4xl font-bold text-primary">5/7</span>
            <p className="text-xs text-muted-foreground mt-1">Atención Continua</p>
          </div>
        </div>
      </div>
    </section>

    {/* Solutions for Empresas */}
    <section className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-2">Soluciones</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">PARA EMPRESAS</h3>
            <div className="space-y-4">
              {[
                { title: "Instalamos ionizadores", desc: "que eliminan sarro y prolongan la vida útil de tus equipos." },
                { title: "Mantenemos", desc: "Tus calderas y sistemas operativos al 100%." },
                { title: "Diseñamos", desc: "Soluciones personalizadas para tu industria." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="flex justify-center">
            <img src={calderaImg} alt="Caldera industrial" className="w-48 h-48 object-contain" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Solutions for Condominios */}
    <section className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="flex justify-center md:order-1">
            <img src={calefaccionImg} alt="Calefacción doméstica" className="w-48 h-48 object-contain" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="md:order-2">
            <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-2">Soluciones</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">PARA CONDOMINIOS</h3>
            <div className="space-y-4">
              {[
                { title: "Mantenemos y Reparamos", desc: "calderas y bombas para prevenir emergencias" },
                { title: "Instalamos", desc: "Dispositivos que mejoran la calidad del agua y reducen costos." },
                { title: "Soporte Continuo", desc: "24 horas los 7 días de la semana" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <CTABanner
      title="AGENDA UNA EVALUACIÓN TÉCNICA"
      subtitle=""
      buttonText="Contáctanos Hoy"
      buttonText2="Solicita una Cotización"
    />
    <Footer />
  </>
);

export default Nosotros;
