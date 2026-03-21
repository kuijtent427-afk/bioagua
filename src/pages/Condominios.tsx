import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, DollarSign, Droplets, CheckCircle, Building } from "lucide-react";
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
  { icon: AlertTriangle, title: "EMERGENCIAS", desc: "Por fugas y fallas en sistemas de agua" },
  { icon: DollarSign, title: "GASTO INNECESARIO", desc: "Por reparaciones recurrentes." },
  { icon: Droplets, title: "INCRUSTACIONES", desc: "Que deterioran tus equipos." },
];

const cases = [
  { name: "Condominio Central Park", icon: Building, stat: "AHORRO DEL 20% EN CONSUMO DE GAS", desc: "Tras nuestras mantenciones" },
  { name: "Residencial El Bosque", icon: Building, stat: "RESOLUCIÓN DE EMERGENCIAS EN MENOS DE 2 HORAS", desc: "Con nuestro soporte 24/7" },
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

      {/* Hero — with stat bar inside */}
      <motion.section ref={heroRef} className="relative overflow-hidden min-h-[500px] md:min-h-[600px]" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
        <motion.div className="absolute top-16 right-16 w-72 h-72 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(190, 60%, 50%), transparent)" }} animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, hsl(180, 50%, 60%), transparent)" }} animate={{ y: [0, 15, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 py-20 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <EditableText contentKey="condominios__hero__subtitle" defaultValue="Soluciones para Comunidades" as="p" className="text-primary-foreground/60 text-xs tracking-widest mb-3 uppercase" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
              <EditableText contentKey="condominios__hero__title" defaultValue="COMUNIDADES MÁS SEGURAS Y EFICIENTES" as="h1" className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
              <EditableText contentKey="condominios__hero__description" defaultValue="Nos encargamos de tus calderas, bombas y sistemas de agua para que ahorres en reparaciones y mantenciones" as="p" className="text-primary-foreground/70 text-sm tracking-wide mb-8" multiline />
            </motion.div>
            <motion.div className="flex flex-col sm:flex-row gap-3 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 hover:scale-105 transition-transform">
                <Link to="/contacto">Solicita una Cotización Gratuita <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 hover:scale-105 transition-transform">
                <Link to="/contacto">Conversemos</Link>
              </Button>
            </motion.div>

            {/* Stat bar */}
            <motion.div
              className="grid grid-cols-3 gap-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {[
                { value: "20", suffix: "%", label: "Ahorro en gas" },
                { value: "2", suffix: "h", label: "Tiempo de respuesta" },
                { value: "24/7", suffix: "", label: "Soporte continuo" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}<span className="text-primary-foreground/60">{stat.suffix}</span></span>
                  <p className="text-[10px] text-primary-foreground/50 mt-1 uppercase tracking-wider">{stat.label}</p>
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
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <EditableText contentKey="condominios__problems__title" defaultValue="¿PROBLEMAS FRECUENTES EN TU COMUNIDAD?" as="h2" className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-16 tracking-wide" />
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-10 max-w-3xl mx-auto" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
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
        <div className="container mx-auto px-4 py-24 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
              <p className="text-primary-foreground/60 text-xs tracking-widest uppercase font-semibold mb-2">Nuestras Soluciones</p>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">¿QUÉ HACEMOS POR TU COMUNIDAD?</h3>
              <div className="space-y-4">
                {[
                  { title: "MANTENEMOS Y REPARAMOS", desc: "Calderas y bombas para prevenir emergencias" },
                  { title: "INSTALAMOS", desc: "Dispositivos que mejoran la calidad del agua y reducen costos." },
                  { title: "SOPORTE CONTINUO", desc: "Atención 24/7" },
                ].map((item) => (
                  <motion.div key={item.title} className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 hover:bg-primary-foreground/15 transition-colors duration-300" whileHover={{ x: 6 }}>
                    <CheckCircle className="h-5 w-5 text-primary-foreground/80 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-primary-foreground">{item.title}</p>
                      <p className="text-xs text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="flex flex-col items-center gap-4">
              <motion.img style={{ filter: "brightness(0) invert(1)" }} src={logo} alt="BioAgua" className="h-28 w-auto" whileHover={{ scale: 1.05 }} />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 0 720 60 1080 30C1260 10 1440 30 1440 30V60H0V30Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Cases of Success */}
      <section className="bg-light-bg py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <EditableText contentKey="condominios__cases__title" defaultValue="CASOS DE ÉXITO" as="h2" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-14 tracking-wide" />
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

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <CTABanner title="CONTÁCTANOS PARA UNA PROPUESTA PERSONALIZADA" subtitle="" buttonText="Conversemos" buttonText2="Solicita Más Información" />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Condominios;
