import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, DollarSign, Droplets, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import AnimatedCounter from "@/components/AnimatedCounter";
import EditableText from "@/components/admin/EditableText";
import { useEditMode } from "@/contexts/EditModeContext";
import logo from "@/assets/logo.png";

const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
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
  { key: "emergencies", icon: AlertTriangle, title: "EMERGENCIAS", desc: "Por fugas y fallas en sistemas de agua" },
  { key: "expenses", icon: DollarSign, title: "GASTO INNECESARIO", desc: "Por reparaciones recurrentes." },
  { key: "scale", icon: Droplets, title: "INCRUSTACIONES", desc: "Que deterioran tus equipos." },
];

const solutionItems = [
  { key: "repair", title: "MANTENEMOS Y REPARAMOS", desc: "Calderas y bombas para prevenir emergencias", num: "01" },
  { key: "install", title: "INSTALAMOS", desc: "Dispositivos que mejoran la calidad del agua y reducen costos.", num: "02" },
  { key: "support", title: "SOPORTE CONTINUO", desc: "Atención 24/7", num: "03" },
];

const heroStats = [
  { value: "20", suffix: "%", label: "Ahorro en gas" },
  { value: "2", suffix: "h", label: "Tiempo de respuesta" },
  { value: "24/7", suffix: "", label: "Soporte continuo" },
];

const Condominios = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { isEditMode } = useEditMode();

  return (
    <div className={isEditMode ? "pt-14" : ""}>
      <Navbar />

      {/* Hero — with stat bar */}
      <motion.section ref={heroRef} className="relative overflow-hidden min-h-[520px] md:min-h-[640px]" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
        <motion.div className="absolute top-16 right-16 w-72 h-72 rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, hsl(190, 60%, 50%), transparent)" }} animate={{ y: [0, -25, 0], scale: [1, 1.08, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(180, 50%, 60%), transparent)" }} animate={{ y: [0, 18, 0], x: [0, 12, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 py-24 md:py-28 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <EditableText contentKey="condominios__hero__subtitle" defaultValue="Soluciones para Comunidades" as="p" className="text-primary-foreground/50 text-xs tracking-widest mb-3 uppercase" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              <EditableText contentKey="condominios__hero__title" defaultValue="COMUNIDADES MÁS SEGURAS Y EFICIENTES" as="h1" className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
              <EditableText contentKey="condominios__hero__description" defaultValue="Nos encargamos de tus calderas, bombas y sistemas de agua para que ahorres en reparaciones y mantenciones" as="p" className="text-primary-foreground/60 text-sm tracking-wide mb-8" multiline />
            </motion.div>
            <motion.div className="flex flex-col sm:flex-row gap-3 mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 rounded-full shadow-glow hover:shadow-strong hover:scale-105 transition-all duration-300">
                <Link to="/contacto">Solicita una Cotización Gratuita <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 rounded-full hover:scale-105 transition-all duration-300 bg-transparent">
                <Link to="/contacto">Conversemos</Link>
              </Button>
            </motion.div>

            {/* Stat bar with animated counters */}
            <motion.div
              className="grid grid-cols-3 bg-primary-foreground/8 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {heroStats.map((stat, i) => (
                <div key={stat.label} className={`text-center p-5 ${i < heroStats.length - 1 ? "border-r border-primary-foreground/10" : ""}`}>
                  <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <p className="text-[10px] text-primary-foreground/40 mt-1.5 uppercase tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
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
            <EditableText contentKey="condominios__problems__title" defaultValue="¿PROBLEMAS FRECUENTES EN TU COMUNIDAD?" as="h2" className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-16 tracking-wide" />
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-border" />
            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {problems.map((p, i) => (
                <motion.div key={p.key} custom={i} variants={scaleIn} whileHover={{ y: -8 }} className="cursor-default">
                  <div className="text-center p-6 rounded-2xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-medium transition-all duration-300 gradient-border-hover">
                    <motion.div className="w-20 h-20 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-4 relative z-10" whileHover={{ scale: 1.1 }}>
                      <p.icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <EditableText contentKey={`condominios__problems__${p.key}_title`} defaultValue={p.title} as="h3" className="font-display font-bold text-sm text-foreground mb-1.5 tracking-wide" />
                    <EditableText contentKey={`condominios__problems__${p.key}_desc`} defaultValue={p.desc} as="p" className="text-xs text-muted-foreground" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="relative grain-texture" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 60 720 0 1080 30C1260 50 1440 30 1440 30V0H0V30Z" className="fill-background" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
              <EditableText contentKey="condominios__solutions__subtitle" defaultValue="Nuestras Soluciones" as="p" className="text-primary-foreground/50 text-xs tracking-widest uppercase font-semibold mb-2" />
              <EditableText contentKey="condominios__solutions__title" defaultValue="¿QUÉ HACEMOS POR TU COMUNIDAD?" as="h3" className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-8" />
              <div className="space-y-4">
                {solutionItems.map((item) => (
                  <motion.div key={item.key} className="flex items-start gap-4 bg-primary-foreground/8 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-5 hover:bg-primary-foreground/12 transition-all duration-300" whileHover={{ x: 6 }}>
                    <span className="text-primary-foreground/20 font-display text-lg font-bold mt-0.5 shrink-0">{item.num}</span>
                    <div>
                      <EditableText contentKey={`condominios__solutions__${item.key}_title`} defaultValue={item.title} as="p" className="font-semibold text-sm text-primary-foreground" />
                      <EditableText contentKey={`condominios__solutions__${item.key}_desc`} defaultValue={item.desc} as="p" className="text-xs text-primary-foreground/60 mt-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="flex flex-col items-center gap-4">
              <motion.img style={{ filter: "brightness(0) invert(1)" }} src={logo} alt="BioAgua" className="h-32 w-auto" whileHover={{ scale: 1.05 }} />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 0 720 60 1080 30C1260 10 1440 30 1440 30V60H0V30Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <CTABanner title="CONTÁCTANOS PARA UNA PROPUESTA PERSONALIZADA" subtitle="" buttonText="Conversemos" buttonText2="Solicita Más Información" />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Condominios;
