import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import calderaImg from "@/assets/nosotros-caldera.png";
import calefaccionImg from "@/assets/nosotros-calefaccion.png";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
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

const CountUp = ({ value, suffix = "" }: { value: string; suffix?: string }) => (
  <motion.span
    className="font-display text-4xl md:text-5xl font-bold text-primary"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {value}{suffix}
  </motion.span>
);

const Nosotros = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />

      {/* Hero — parallax + floating shapes */}
      <motion.section
        ref={heroRef}
        className="relative overflow-hidden min-h-[400px] md:min-h-[500px]"
        style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}
      >
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(190, 60%, 50%), transparent)" }}
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 left-16 w-48 h-48 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(180, 50%, 60%), transparent)" }}
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 py-20 md:py-28 relative z-10 text-center">
          <motion.p
            className="text-primary-foreground/60 text-xs tracking-widest mb-3 uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Conócenos
          </motion.p>
          <motion.h1
            className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            SOMOS BIOAGUA
          </motion.h1>
          <motion.p
            className="text-primary-foreground/70 text-sm mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Expertos en calderas, bombas y sistemas hidráulicos
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className="fill-background" />
          </svg>
        </div>
      </motion.section>

      {/* Trust headline with scaleIn */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} custom={0}>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Más de 50 empresas
            </h2>
            <p className="font-display text-xl md:text-2xl text-primary italic mt-1">
              Han Confiado en Nosotros
            </p>
          </motion.div>
        </div>
      </section>

      {/* About section with animated logo + stats */}
      <section className="bg-background pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft} className="text-center">
              <div className="flex flex-col items-center gap-3">
                <motion.img
                  src={logo}
                  alt="BioAgua Chile"
                  className="h-28 w-auto"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}>
              <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-2">Sobre Nosotros</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">AHORRA TIEMPO Y RECURSOS</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Contamos con un equipo técnico experto en calderas, bombas y sistemas hidráulicos. Desde mantenciones hasta instalaciones, optimizamos tus sistemas para que ahorres tiempo, dinero y recursos.
              </p>
            </motion.div>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mt-12">
            {[
              { value: "1", label: "Años de Garantía" },
              { value: "5/7", label: "Atención Continua" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="flex flex-col items-center border-r last:border-r-0 border-border"
              >
                <CountUp value={stat.value} />
                <span className="text-xs text-muted-foreground mt-2">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions for Empresas — teal gradient band */}
      <section className="relative" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 60 720 0 1080 30C1260 50 1440 30 1440 30V0H0V30Z" className="fill-background" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
              <p className="text-primary-foreground/60 text-xs tracking-widest uppercase font-semibold mb-2">Soluciones</p>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">PARA EMPRESAS</h3>
              <div className="space-y-4">
                {[
                  { title: "Instalamos ionizadores", desc: "que eliminan sarro y prolongan la vida útil de tus equipos." },
                  { title: "Mantenemos", desc: "Tus calderas y sistemas operativos al 100%." },
                  { title: "Diseñamos", desc: "Soluciones personalizadas para tu industria." },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 hover:bg-primary-foreground/15 transition-colors duration-300"
                    whileHover={{ x: 6, transition: { duration: 0.3 } }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary-foreground/80 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-primary-foreground">{item.title}</p>
                      <p className="text-xs text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="flex justify-center"
            >
              <motion.img
                src={calderaImg}
                alt="Caldera industrial"
                className="w-48 h-48 object-contain mix-blend-multiply"
                whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 0 720 60 1080 30C1260 10 1440 30 1440 30V60H0V30Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Solutions for Condominios — light bg with hover cards */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft} className="flex justify-center md:order-1">
              <motion.img
                src={calefaccionImg}
                alt="Calefacción doméstica"
                className="w-48 h-48 object-contain"
                whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
              />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="md:order-2">
              <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-2">Soluciones</p>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">PARA CONDOMINIOS</h3>
              <div className="space-y-4">
                {[
                  { title: "Mantenemos y Reparamos", desc: "calderas y bombas para prevenir emergencias" },
                  { title: "Instalamos", desc: "Dispositivos que mejoran la calidad del agua y reducen costos." },
                  { title: "Soporte Continuo", desc: "24 horas los 7 días de la semana" },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-3 border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <CTABanner
          title="AGENDA UNA EVALUACIÓN TÉCNICA"
          subtitle=""
          buttonText="Contáctanos Hoy"
          buttonText2="Solicita una Cotización"
        />
      </motion.div>
      <Footer />
    </>
  );
};

export default Nosotros;
