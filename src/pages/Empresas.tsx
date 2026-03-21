import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, Gauge, Droplets, DollarSign, Wrench, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import CTABanner from "@/components/CTABanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const problems = [
  { icon: AlertTriangle, title: "Fallas en sistemas industriales", desc: "Paradas no planificadas que afectan producción y generan pérdidas." },
  { icon: Gauge, title: "Equipos ineficientes", desc: "Sistemas que consumen más energía de la necesaria por falta de mantención." },
  { icon: Droplets, title: "Sarro en tuberías", desc: "Incrustaciones que reducen el flujo y dañan componentes costosos." },
  { icon: DollarSign, title: "Costos elevados", desc: "Facturas de agua y gas que crecen sin que nadie identifique la causa." },
];

const solutions = [
  { icon: Shield, title: "Ionización anti-sarro", desc: "Tecnología que previene y elimina depósitos minerales sin químicos. Extiende la vida útil de calderas, tuberías y equipos de enfriamiento." },
  { icon: Wrench, title: "Mantención industrial", desc: "Planes de mantención preventiva y correctiva adaptados a tu operación. Minimizamos paradas y maximizamos rendimiento." },
  { icon: Zap, title: "Optimización de procesos", desc: "Auditorías técnicas para identificar fugas, ineficiencias y oportunidades de ahorro concretas en tu planta." },
];

const Empresas = () => (
  <>
    <Navbar />

    <section className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Reduce hasta 40% en costos operativos de agua y energía
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            Detectamos ineficiencias, prevenimos fallas y optimizamos tus sistemas industriales con tecnología probada.
          </p>
          <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90 font-semibold text-base px-8">
            <Link to="/contacto">Solicita auditoría técnica gratuita <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    <WaveDivider from="bg-primary" to="bg-background" />

    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
          Problemas que enfrentan las empresas
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          La mayoría de las empresas pierden dinero en sus sistemas de agua sin saberlo.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div key={p.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full border-none shadow-md bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <p.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <WaveDivider from="bg-background" to="bg-light-bg" />

    <section className="bg-light-bg py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
          Nuestras soluciones para empresas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full border-none shadow-md bg-card">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-cta/10 flex items-center justify-center mb-5">
                    <s.icon className="h-7 w-7 text-cta" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-card-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner title="Solicita una auditoría técnica gratuita" subtitle="Identificamos exactamente dónde está perdiendo dinero tu empresa." buttonText="Solicitar auditoría" />
    <Footer />
  </>
);

export default Empresas;
