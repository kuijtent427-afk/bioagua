import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, DollarSign, Droplets, Gauge, Wrench, Zap, Leaf, Building, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import heroImage from "@/assets/hero-water.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
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
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[500px] md:min-h-[600px]" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 88%) 0%, hsl(190, 55%, 78%) 30%, hsl(185, 50%, 68%) 60%, hsl(180, 45%, 62%) 100%)" }}>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.p
                className="text-secondary/70 text-xs tracking-widest mb-3 uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Tu solución para agua limpia y sistemas eficientes
              </motion.p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-4">
                BIOAGUA <span className="font-light text-foreground">CHILE</span>
              </h1>
              <p className="text-secondary/70 mb-8 max-w-lg">
                Desde mantenciones hasta instalaciones, optimizamos tus sistemas para que ahorres tiempo, dinero y recursos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 rounded-md">
                  <Link to="/contacto">Contáctanos Hoy</Link>
                </Button>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 rounded-md">
                  <Link to="/contacto">Solicita una Cotización</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-16 tracking-wide">
            ¿TE ENFRENTAS A ESTOS PROBLEMAS?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {problems.map((p, i) => (
              <motion.div key={p.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="w-20 h-20 rounded-full border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 bg-light-bg">
                  <p.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-sm text-foreground mb-1 tracking-wide">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions — teal gradient band */}
      <section className="relative" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 60 720 0 1080 30C1260 50 1440 30 1440 30V0H0V30Z" className="fill-background" />
          </svg>
        </div>
        <div className="container mx-auto px-4 py-24 md:py-28 text-center relative z-10">
          <p className="text-primary-foreground/60 text-xs tracking-widest mb-2 uppercase">En BioAgua Chile</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3 tracking-wide">
            RESOLVEMOS TODO POR TI
          </h2>
          <p className="text-primary-foreground/60 mb-12 text-sm">Llámanos ahora para una inspección gratuita.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {solutions.map((s, i) => (
              <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm rounded-xl">
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
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-wide">
            ¿POR QUÉ ELEGIRNOS?
          </h2>
          <p className="text-muted-foreground mb-14 max-w-xl mx-auto text-sm">
            Contamos con un equipo técnico experto en calderas, bombas y sistemas hidráulicos.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: "1", label: "Años de Garantía" },
              { value: "5/7", label: "Atención Continua" },
              { value: "11+", label: "Comunidades y Empresas\nconfían en Nosotros" },
            ].map((stat, i) => (
              <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col items-center border-r last:border-r-0 border-border">
                <span className="font-display text-4xl md:text-5xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs text-muted-foreground mt-2 whitespace-pre-line">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases of Success */}
      <section className="bg-light-bg py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-14 tracking-wide">
            CASOS DE ÉXITO
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              {cases.map((c, i) => (
                <motion.div key={c.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <div className="text-center">
                    <p className="text-primary font-semibold text-sm mb-4">{c.name}</p>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <c.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-sm md:text-base mb-2 tracking-wide">{c.stat}</h3>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-muted transition-colors">
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
};

export default Index;
