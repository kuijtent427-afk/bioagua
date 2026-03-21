import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Droplets, Gauge, Wrench, Zap, Leaf, Building } from "lucide-react";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

import Testimonials from "@/components/Testimonials";
import AnimatedCounter from "@/components/AnimatedCounter";
import EditableText from "@/components/admin/EditableText";
import { useEditMode } from "@/contexts/EditModeContext";
import heroImage from "@/assets/hero-header.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const problems = [
  { icon: AlertTriangle, title: "FALLOS CONSTANTES", desc: "en calderas y bombas" },
  { icon: DollarSign, title: "ALTOS COSTOS", desc: "de reparación y mantenimiento" },
  { icon: Gauge, title: "EQUIPOS DETERIORADOS", desc: "por sarro y mala calidad del agua" },
  { icon: Droplets, title: "ALTOS CONSUMOS", desc: "de agua, gas y energía" },
];

const solutions = [
  { icon: Wrench, title: "Mantenciones Correctivas y Preventivas" },
  { icon: Zap, title: "Instalación de calderas y dispositivos que optimizan tu sistema." },
  { icon: Leaf, title: "Soluciones sustentables para ahorrar agua, energía y costos." },
];

const cases = [
  { name: "Comunidad Las Palmas", icon: Building, stat: "REDUCCIÓN DEL 40% EN FALLAS DE CALDERAS", desc: "Gracias a nuestras Mantenciones Preventivas." },
  { name: "Empresas XYZ", icon: Building, stat: "AHORRO DE $30 MILLONES ANUALES", desc: "En consumo energético tras la instalación de Ionizadores." },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { isEditMode } = useEditMode();

  return (
    <div className={isEditMode ? "pt-14" : ""}>
      <Navbar />

      {/* Hero */}
      <motion.section ref={heroRef} className="relative overflow-hidden min-h-[500px] md:min-h-[600px]">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 88%, 0.55) 0%, hsl(190, 55%, 78%, 0.4) 30%, transparent 60%)" }} />
        </div>
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(190, 60%, 50%), transparent)" }}
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <EditableText contentKey="index__hero__subtitle" defaultValue="Tu solución para agua limpia y sistemas eficientes" as="p" className="text-secondary/70 text-xs tracking-widest mb-3 uppercase" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              <EditableText contentKey="index__hero__title" defaultValue="BIOAGUA" as="h1" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-4" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
              <EditableText contentKey="index__hero__description" defaultValue="Desde mantenciones hasta instalaciones, optimizamos tus sistemas para que ahorres tiempo, dinero y recursos." as="p" className="text-secondary/70 mb-8 max-w-lg" multiline />
            </motion.div>
            <motion.div className="flex flex-col sm:flex-row gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 rounded-md hover:scale-105 transition-transform">
                <Link to="/contacto">Contáctanos Hoy</Link>
              </Button>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 rounded-md hover:scale-105 transition-transform">
                <Link to="/contacto">Solicita una Cotización</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className="fill-background" />
          </svg>
        </div>
      </motion.section>
      {/* Problems */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <EditableText contentKey="index__problems__title" defaultValue="¿TE ENFRENTAS A ESTOS PROBLEMAS?" as="h2" className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-16 tracking-wide" />
          </motion.div>
          <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-10" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {problems.map((p, i) => (
              <motion.div key={p.title} custom={i} variants={scaleIn} whileHover={{ y: -8 }} className="text-center cursor-default">
                <motion.div className="w-20 h-20 rounded-full border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 bg-light-bg" whileHover={{ scale: 1.1 }}>
                  <p.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="font-display font-bold text-sm text-foreground mb-1 tracking-wide">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="relative grain-texture" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 60 720 0 1080 30C1260 50 1440 30 1440 30V0H0V30Z" className="fill-background" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-28 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
            <EditableText contentKey="index__solutions__subtitle" defaultValue="En BioAgua" as="p" className="text-primary-foreground/60 text-xs tracking-widest mb-2 uppercase" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}>
            <EditableText contentKey="index__solutions__title" defaultValue="RESOLVEMOS TODO POR TI" as="h2" className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3 tracking-wide" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <EditableText contentKey="index__solutions__description" defaultValue="Llámanos ahora para una inspección gratuita." as="p" className="text-primary-foreground/60 mb-12 text-sm" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {solutions.map((s, i) => (
              <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -6, scale: 1.03 }}>
                <Card className="h-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm rounded-xl hover:bg-primary-foreground/15 transition-colors duration-300">
                  <CardContent className="p-6 text-center flex flex-col items-center gap-4">
                    <s.icon className="h-8 w-8 text-primary-foreground/70" />
                    <p className="text-sm text-primary-foreground font-medium leading-relaxed">{s.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 0 720 60 1080 30C1260 10 1440 30 1440 30V60H0V30Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
            <EditableText contentKey="index__whyus__title" defaultValue="¿POR QUÉ ELEGIRNOS?" as="h2" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-wide" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            <EditableText contentKey="index__whyus__description" defaultValue="Contamos con un equipo técnico experto en calderas, bombas y sistemas hidráulicos." as="p" className="text-muted-foreground mb-14 max-w-xl mx-auto text-sm" />
          </motion.div>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: "1", label: "Años de Garantía" },
              { value: "5/7", label: "Atención Continua" },
              { value: "11+", label: "Comunidades y Empresas\nconfían en Nosotros" },
            ].map((stat, i) => (
              <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="flex flex-col items-center border-r last:border-r-0 border-border">
                <AnimatedCounter value={stat.value} />
                <span className="text-xs text-muted-foreground mt-2 whitespace-pre-line">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Cases of Success */}
      <section className="bg-light-bg py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <EditableText contentKey="index__cases__title" defaultValue="CASOS DE ÉXITO" as="h2" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-14 tracking-wide" />
          </motion.div>
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              {cases.map((c, i) => (
                <motion.div key={c.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={i === 0 ? slideInLeft : slideInRight} whileHover={{ y: -6 }} className="cursor-default">
                  <div className="text-center p-6 rounded-xl glass-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    <p className="text-primary font-semibold text-sm mb-4">{c.name}</p>
                    <motion.div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4" whileHover={{ scale: 1.15 }}>
                      <c.icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    <h3 className="font-display font-bold text-foreground text-sm md:text-base mb-2 tracking-wide">{c.stat}</h3>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
