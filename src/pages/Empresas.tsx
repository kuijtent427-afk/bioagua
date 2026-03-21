import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Droplets, Zap, Shield, Clock, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import logo from "@/assets/logo.png";

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

const problems = [
  { icon: AlertTriangle, title: "Fallos recurrentes", desc: "En torres de enfriamiento y condensadores." },
  { icon: DollarSign, title: "Altos costos", desc: "De gas y agua por equipos ineficientes." },
  { icon: Droplets, title: "Incrustaciones", desc: "En calderas y tuberías." },
];

const trustCards = [
  { icon: Zap, title: "TECNOLOGÍA DE PUNTA", desc: "Que ahorra hasta un 40% en costos operativos." },
  { icon: Shield, title: "EXPERIENCIA", desc: "En industrias como alimentos, salud y manufactura." },
  { icon: Clock, title: "GARANTÍA Y SOPORTE", desc: "Garantías extendidas y soporte técnico continuo." },
];

const Empresas = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />

      {/* Hero — parallax + stagger */}
      <motion.section
        ref={heroRef}
        className="relative overflow-hidden min-h-[500px] md:min-h-[600px]"
        style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}
      >
        {/* Floating shapes */}
        <motion.div
          className="absolute top-16 right-16 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(190, 60%, 50%), transparent)" }}
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-[0.07]"
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
            Soluciones Industriales
          </motion.p>
          <motion.h1
            className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            EMPRESAS QUE BUSCAN EFICIENCIA Y SOSTENIBILIDAD
          </motion.h1>
          <motion.p
            className="text-primary-foreground/70 text-sm mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Optimizamos tus procesos, cuidamos tus equipos y reducimos tus costos operativos.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 hover:scale-105 transition-transform">
              <Link to="/contacto">Hablemos Hoy</Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 hover:scale-105 transition-transform">
              <Link to="/contacto">Cotización Gratuita</Link>
            </Button>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className="fill-background" />
          </svg>
        </div>
      </motion.section>

      {/* Problems — stagger + hover */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ¿TUS SISTEMAS ESTÁN FALLANDO?
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-sm text-center mb-14 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Identificamos los problemas más comunes en la industria y los solucionamos de raíz.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-10 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {problems.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="text-center cursor-default"
              >
                <motion.div
                  className="w-20 h-20 rounded-full border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 bg-light-bg"
                  whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))", transition: { duration: 0.3 } }}
                >
                  <p.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="font-display font-bold text-sm text-foreground mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions — gradient band with glassmorphism */}
      <section className="relative" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 60 720 0 1080 30C1260 50 1440 30 1440 30V0H0V30Z" className="fill-background" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
              <p className="text-primary-foreground/60 text-xs tracking-widest uppercase font-semibold mb-2">Nuestras Soluciones</p>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-6">¿QUÉ HACEMOS POR TU EMPRESA?</h3>
              <div className="space-y-4">
                {[
                  { title: "INSTALAMOS", desc: "Ionizadores que eliminan sarro y prolongan la vida útil de tus equipos." },
                  { title: "MANTENEMOS", desc: "Tus calderas y sistemas operativos al 100%." },
                  { title: "DISEÑAMOS", desc: "Soluciones personalizadas para tu industria." },
                ].map((item, i) => (
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
              className="flex flex-col items-center gap-4"
            >
              <motion.img
                style={{ filter: "brightness(0) invert(1)" }}
                src={logo}
                alt="BioAgua Chile"
                className="h-28 w-auto"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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

      {/* Trust section — animated cards */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.h2
            className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3 tracking-wide"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}
          >
            ¿POR QUÉ CONFIAR EN NOSOTROS?
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-sm text-center mb-14 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Respaldamos cada proyecto con tecnología, experiencia y compromiso.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {trustCards.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.3 } }}
              >
                <Card className="h-full border border-border shadow-sm bg-card rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center shrink-0 bg-light-bg"
                      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                    >
                      <c.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-foreground mb-1">{c.title}</h3>
                      <p className="text-xs text-muted-foreground">{c.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
          subtitle="SIN COSTO"
          buttonText="Agendar Evaluación"
          buttonText2="Solicita Más Información"
        />
      </motion.div>
      <Footer />
    </>
  );
};

export default Empresas;
