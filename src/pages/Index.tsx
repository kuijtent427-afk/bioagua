import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, DollarSign, Droplets, Gauge, Wrench, Zap, Leaf, Building, BadgeCheck } from "lucide-react";
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
  { key: "faults", icon: AlertTriangle, title: "FALLOS CONSTANTES", desc: "en calderas y bombas" },
  { key: "costs", icon: DollarSign, title: "ALTOS COSTOS", desc: "de reparación y mantenimiento" },
  { key: "deterioration", icon: Gauge, title: "EQUIPOS DETERIORADOS", desc: "por sarro y mala calidad del agua" },
  { key: "consumption", icon: Droplets, title: "ALTOS CONSUMOS", desc: "de agua, gas y energía" },
];

const solutions = [
  { key: "maintenance", icon: Wrench, title: "Mantenciones Correctivas y Preventivas", step: "01" },
  { key: "installation", icon: Zap, title: "Instalación de calderas y dispositivos que optimizan tu sistema.", step: "02" },
  { key: "sustainability", icon: Leaf, title: "Soluciones sustentables para ahorrar agua, energía y costos.", step: "03" },
];

const useCases = [
  { key: "condominios", icon: Building, title: "CONDOMINIOS Y COMUNIDADES", desc: "Mantención preventiva de calderas, bombas hidroneumáticas y sistemas de agua caliente para edificios residenciales." },
  { key: "empresas", icon: Wrench, title: "EMPRESAS E INDUSTRIAS", desc: "Instalación y optimización de sistemas hidráulicos, ionizadores y equipos de tratamiento de agua para operaciones industriales." },
  { key: "hoteles", icon: Droplets, title: "HOTELES Y CLÍNICAS", desc: "Soluciones integrales de agua caliente sanitaria, recirculación y eficiencia energética para alto consumo." },
  { key: "eficiencia", icon: Zap, title: "EFICIENCIA ENERGÉTICA", desc: "Diagnóstico y mejora del rendimiento de calderas y sistemas térmicos para reducir costos operativos." },
];

const whyUsStats = [
  { value: "1", label: "Años de Garantía", icon: BadgeCheck },
  { value: "5/7", label: "Atención Continua", icon: BadgeCheck },
  { value: "11+", label: "Comunidades y Empresas\nconfían en Nosotros", icon: BadgeCheck },
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
      <motion.section ref={heroRef} className="relative overflow-hidden min-h-[520px] md:min-h-[650px]">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 88%, 0.6) 0%, hsl(190, 55%, 78%, 0.45) 30%, transparent 60%)" }} />
        </div>
        {/* Animated mesh orbs */}
        <motion.div
          className="absolute top-16 right-16 w-72 h-72 rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(circle, hsl(190, 60%, 50%), transparent)" }}
          animate={{ y: [0, -25, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(185, 60%, 55%), transparent)" }}
          animate={{ y: [0, 18, 0], x: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.5 }}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-[10px] font-semibold tracking-widest uppercase mb-4 border border-primary/20 backdrop-blur-sm">
                <BadgeCheck className="h-3.5 w-3.5" /> Servicio Certificado
              </span>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
              <EditableText contentKey="index__hero__subtitle" defaultValue="Tu solución para agua limpia y sistemas eficientes" as="p" className="text-secondary/70 text-xs tracking-widest mb-3 uppercase" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}>
              <EditableText contentKey="index__hero__title" defaultValue="BIOAGUA" as="h1" className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-secondary leading-[0.95] mb-5" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
              <EditableText contentKey="index__hero__description" defaultValue="Desde mantenciones hasta instalaciones, optimizamos tus sistemas para que ahorres tiempo, dinero y recursos." as="p" className="text-secondary/65 mb-8 max-w-lg text-base leading-relaxed" multiline />
            </motion.div>
            <motion.div className="flex flex-col sm:flex-row gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 rounded-full shadow-glow hover:shadow-strong hover:scale-105 transition-all duration-300">
                <Link to="/contacto">Contáctanos Hoy</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary/30 text-secondary hover:bg-secondary/10 font-semibold px-8 rounded-full hover:scale-105 transition-all duration-300 backdrop-blur-sm">
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
      <section className="bg-background section-padding">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <EditableText contentKey="index__problems__title" defaultValue="¿TE ENFRENTAS A ESTOS PROBLEMAS?" as="h2" className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-16 tracking-wide" />
          </motion.div>
          <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {problems.map((p, i) => (
              <motion.div key={p.key} custom={i} variants={scaleIn} whileHover={{ y: -8 }} className="cursor-default">
                <div className="text-center p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-medium transition-all duration-300 gradient-border-hover h-full">
                  <motion.div className="w-16 h-16 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-4" whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}>
                    <p.icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <EditableText contentKey={`index__problems__${p.key}_title`} defaultValue={p.title} as="h3" className="font-display font-bold text-sm text-foreground mb-1.5 tracking-wide" />
                  <EditableText contentKey={`index__problems__${p.key}_desc`} defaultValue={p.desc} as="p" className="text-xs text-muted-foreground leading-relaxed" />
                </div>
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
        <div className="container mx-auto px-4 py-24 md:py-32 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
            <EditableText contentKey="index__solutions__subtitle" defaultValue="En BioAgua" as="p" className="text-primary-foreground/50 text-xs tracking-widest mb-2 uppercase" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}>
            <EditableText contentKey="index__solutions__title" defaultValue="RESOLVEMOS TODO POR TI" as="h2" className="font-display text-2xl md:text-4xl font-bold text-primary-foreground mb-3 tracking-wide" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <EditableText contentKey="index__solutions__description" defaultValue="Llámanos ahora para una inspección gratuita." as="p" className="text-primary-foreground/50 mb-14 text-sm" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {solutions.map((s, i) => (
              <motion.div key={s.key} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -8, scale: 1.02 }}>
                <div className="h-full bg-primary-foreground/8 border border-primary-foreground/15 backdrop-blur-sm rounded-2xl hover:bg-primary-foreground/12 transition-all duration-300 p-8 text-center flex flex-col items-center gap-4">
                  <span className="text-primary-foreground/20 font-display text-4xl font-bold">{s.step}</span>
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <s.icon className="h-7 w-7 text-primary-foreground/70" />
                  </div>
                  <EditableText contentKey={`index__solutions__${s.key}`} defaultValue={s.title} as="p" className="text-sm text-primary-foreground font-medium leading-relaxed" />
                </div>
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
      <section className="bg-background section-padding">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
            <EditableText contentKey="index__whyus__title" defaultValue="¿POR QUÉ ELEGIRNOS?" as="h2" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-wide" />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            <EditableText contentKey="index__whyus__description" defaultValue="Contamos con un equipo técnico experto en calderas, bombas y sistemas hidráulicos." as="p" className="text-muted-foreground mb-14 max-w-xl mx-auto text-sm" />
          </motion.div>
          <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
            {whyUsStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="flex flex-col items-center p-6 rounded-2xl bg-light-bg border border-border/50 hover:shadow-soft transition-all duration-300"
              >
                <AnimatedCounter value={stat.value} />
                <span className="text-xs text-muted-foreground mt-3 whitespace-pre-line leading-relaxed">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Use Cases */}
      <section className="bg-light-bg section-padding overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <EditableText contentKey="index__usecases__title" defaultValue="CASOS DE USO" as="h2" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-14 tracking-wide" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div key={uc.key} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -8 }} className="cursor-default">
                <div className="text-center p-7 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300 h-full gradient-border-hover">
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: "linear-gradient(135deg, hsl(190, 55%, 40%, 0.12), hsl(185, 65%, 45%, 0.08))" }}
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                  >
                    <uc.icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <EditableText contentKey={`index__usecases__${uc.key}_title`} defaultValue={uc.title} as="h3" className="font-display font-bold text-foreground text-sm md:text-base mb-3 tracking-wide" />
                  <EditableText contentKey={`index__usecases__${uc.key}_desc`} defaultValue={uc.desc} as="p" className="text-xs text-muted-foreground leading-relaxed" multiline />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
