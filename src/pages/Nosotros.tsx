import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import AnimatedCounter from "@/components/AnimatedCounter";
import EditableText from "@/components/admin/EditableText";
import { useEditMode } from "@/contexts/EditModeContext";
import calderaImg from "@/assets/nosotros-caldera.png";
import calefaccionImg from "@/assets/nosotros-calefaccion.png";

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

const empresaSolutions = [
  { key: "ionizers", title: "Instalamos ionizadores", desc: "que eliminan sarro y prolongan la vida útil de tus equipos.", num: "01" },
  { key: "maintain", title: "Mantenemos", desc: "Tus calderas y sistemas operativos al 100%.", num: "02" },
  { key: "design", title: "Diseñamos", desc: "Soluciones personalizadas para tu industria.", num: "03" },
];

const condoSolutions = [
  { key: "repair", title: "Mantenemos y Reparamos", desc: "calderas y bombas para prevenir emergencias", num: "01" },
  { key: "install", title: "Instalamos", desc: "Dispositivos que mejoran la calidad del agua y reducen costos.", num: "02" },
  { key: "support", title: "Soporte Continuo", desc: "24 horas los 7 días de la semana", num: "03" },
];

const Nosotros = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const { isEditMode } = useEditMode();

  return (
    <div className={isEditMode ? "pt-14" : ""}>
      <Navbar />

      {/* Hero — dot pattern overlay */}
      <motion.section
        ref={heroRef}
        className="relative overflow-hidden min-h-[420px] md:min-h-[520px]"
        style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}
      >
        <div className="absolute inset-0 dot-pattern opacity-[0.06]" />
        {/* Floating shapes */}
        <motion.div className="absolute top-16 right-16 w-72 h-72 rounded-full opacity-[0.08]" style={{ background: "radial-gradient(circle, hsl(190, 60%, 50%), transparent)" }} animate={{ y: [0, -25, 0], scale: [1, 1.08, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-16 left-16 w-48 h-48 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, hsl(180, 50%, 60%), transparent)" }} animate={{ y: [0, 18, 0], x: [0, 12, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-1/3 left-[15%] w-4 h-4 rounded-sm border border-primary-foreground/15 hidden md:block"
          animate={{ rotate: [0, 90, 180, 270, 360], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/4 right-[25%] w-3 h-3 rounded-full bg-primary-foreground/10 hidden md:block"
          animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <EditableText contentKey="nosotros__hero__subtitle" defaultValue="Conócenos" as="p" className="text-primary-foreground/50 text-xs tracking-widest mb-3 uppercase" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
            <EditableText contentKey="nosotros__hero__title" defaultValue="SOMOS BIOAGUA" as="h1" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <EditableText contentKey="nosotros__hero__description" defaultValue="Expertos en calderas, bombas y sistemas hidráulicos" as="p" className="text-primary-foreground/60 text-sm mt-4 max-w-xl mx-auto" />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className="fill-background" />
          </svg>
        </div>
      </motion.section>

      {/* Trust headline */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} custom={0}>
            <EditableText contentKey="nosotros__trust__title" defaultValue="Más de 50 empresas" as="h2" className="font-display text-3xl md:text-4xl font-bold text-gradient" />
            <EditableText contentKey="nosotros__trust__subtitle" defaultValue="Han Confiado en Nosotros" as="p" className="font-display text-xl md:text-2xl text-muted-foreground italic mt-2" />
          </motion.div>
        </div>
      </section>

      {/* About section */}
      <section className="bg-background pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft} className="text-center">
              <div className="relative inline-block">
                <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-primary/15" />
                <div className="absolute -inset-8 rounded-3xl border border-primary/8 hidden md:block" />
                <motion.img src={logo} alt="BioAgua" className="h-28 w-auto mx-auto relative z-10" whileHover={{ scale: 1.05 }} />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}>
              <EditableText contentKey="nosotros__about__label" defaultValue="Sobre Nosotros" as="p" className="text-primary text-xs tracking-widest uppercase font-semibold mb-2" />
              <EditableText contentKey="nosotros__about__title" defaultValue="AHORRA TIEMPO Y RECURSOS" as="h3" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4" />
              <EditableText contentKey="nosotros__about__description" defaultValue="Contamos con un equipo técnico experto en calderas, bombas y sistemas hidráulicos. Desde mantenciones hasta instalaciones, optimizamos tus sistemas para que ahorres tiempo, dinero y recursos." as="p" className="text-muted-foreground text-sm leading-relaxed" multiline />
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mt-14">
            {[
              { value: "1", label: "Años de Garantía" },
              { value: "5/7", label: "Atención Continua" },
            ].map((stat, i) => (
              <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="flex flex-col items-center p-6 rounded-2xl bg-light-bg border border-border/50">
                <AnimatedCounter value={stat.value} />
                <span className="text-xs text-muted-foreground mt-3">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions for Empresas */}
      <section className="relative grain-texture" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 60 720 0 1080 30C1260 50 1440 30 1440 30V0H0V30Z" className="fill-background" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
              <EditableText contentKey="nosotros__empresas__label" defaultValue="Soluciones" as="p" className="text-primary-foreground/50 text-xs tracking-widest uppercase font-semibold mb-2" />
              <EditableText contentKey="nosotros__empresas__title" defaultValue="PARA EMPRESAS" as="h3" className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-8" />
              <div className="space-y-4">
                {empresaSolutions.map((item) => (
                  <motion.div key={item.key} className="flex items-start gap-4 bg-primary-foreground/8 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-5 hover:bg-primary-foreground/12 transition-all duration-300" whileHover={{ x: 6 }}>
                    <span className="text-primary-foreground/20 font-display text-lg font-bold mt-0.5 shrink-0">{item.num}</span>
                    <div>
                      <EditableText contentKey={`nosotros__empresas__${item.key}_title`} defaultValue={item.title} as="p" className="font-semibold text-sm text-primary-foreground" />
                      <EditableText contentKey={`nosotros__empresas__${item.key}_desc`} defaultValue={item.desc} as="p" className="text-xs text-primary-foreground/60 mt-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="flex justify-center">
              <motion.img src={calderaImg} alt="Caldera industrial" className="w-52 h-52 object-contain" whileHover={{ scale: 1.08 }} />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 0 720 60 1080 30C1260 10 1440 30 1440 30V60H0V30Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Solutions for Condominios */}
      <section className="bg-background py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft} className="flex justify-center md:order-1">
              <motion.img src={calefaccionImg} alt="Calefacción doméstica" className="w-52 h-52 object-contain" whileHover={{ scale: 1.08 }} />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="md:order-2">
              <EditableText contentKey="nosotros__condominios__label" defaultValue="Soluciones" as="p" className="text-primary text-xs tracking-widest uppercase font-semibold mb-2" />
              <EditableText contentKey="nosotros__condominios__title" defaultValue="PARA CONDOMINIOS" as="h3" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8" />
              <div className="space-y-4">
                {condoSolutions.map((item) => (
                  <motion.div key={item.key} className="flex items-start gap-4 border border-border/50 rounded-2xl p-5 hover:border-primary/30 hover:shadow-medium transition-all duration-300 gradient-border-hover" whileHover={{ y: -4 }}>
                    <span className="text-primary/25 font-display text-lg font-bold mt-0.5 shrink-0">{item.num}</span>
                    <div>
                      <EditableText contentKey={`nosotros__condominios__${item.key}_title`} defaultValue={item.title} as="p" className="font-semibold text-sm text-foreground" />
                      <EditableText contentKey={`nosotros__condominios__${item.key}_desc`} defaultValue={item.desc} as="p" className="text-xs text-muted-foreground mt-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <CTABanner title="AGENDA UNA EVALUACIÓN TÉCNICA" subtitle="" buttonText="Contáctanos Hoy" buttonText2="Solicita una Cotización" />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Nosotros;
