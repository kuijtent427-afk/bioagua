import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, Gauge, Droplets, DollarSign, Wrench, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const problems = [
  { icon: AlertTriangle, title: "FALLAS EN SISTEMAS", desc: "Paradas no planificadas que afectan producción." },
  { icon: Gauge, title: "EQUIPOS INEFICIENTES", desc: "Sistemas que consumen más energía de la necesaria." },
  { icon: Droplets, title: "SARRO EN TUBERÍAS", desc: "Incrustaciones que reducen flujo y dañan componentes." },
  { icon: DollarSign, title: "COSTOS ELEVADOS", desc: "Facturas que crecen sin identificar la causa." },
];

const solutions = [
  { icon: Shield, title: "Ionización anti-sarro", desc: "Tecnología que previene y elimina depósitos minerales sin químicos. Extiende la vida útil de calderas y equipos." },
  { icon: Wrench, title: "Mantención industrial", desc: "Planes preventivos y correctivos adaptados a tu operación. Minimizamos paradas y maximizamos rendimiento." },
  { icon: Zap, title: "Optimización de procesos", desc: "Auditorías técnicas para identificar fugas, ineficiencias y oportunidades de ahorro concretas." },
];

const Empresas = () => (
  <>
    <Navbar />

    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 40%, hsl(185, 55%, 50%) 100%)" }}>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <p className="text-primary-foreground/70 text-sm tracking-widest mb-3 uppercase">Para Empresas</p>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Reduce hasta 40% en costos operativos de agua y energía
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            Detectamos ineficiencias, prevenimos fallas y optimizamos tus sistemas industriales con tecnología probada.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
            <Link to="/contacto">Solicita auditoría técnica gratuita <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16" preserveAspectRatio="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className="fill-background" />
        </svg>
      </div>
    </section>

    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12 tracking-wide">
          PROBLEMAS QUE ENFRENTAN LAS EMPRESAS
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((p, i) => (
            <motion.div key={p.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-sm text-foreground mb-1 tracking-wide">{p.title}</h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-light-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12 tracking-wide">
          NUESTRAS SOLUCIONES PARA EMPRESAS
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full border border-border shadow-sm bg-card">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-full border-2 border-primary/30 flex items-center justify-center mb-5">
                    <s.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-card-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner title="SOLICITA UNA AUDITORÍA TÉCNICA GRATUITA" subtitle="Identificamos exactamente dónde está perdiendo dinero tu empresa." />
    <Footer />
  </>
);

export default Empresas;
