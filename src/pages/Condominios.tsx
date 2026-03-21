import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquareWarning, ThermometerSun, Moon, RotateCcw, Wrench, Shield, Clock, TrendingDown, Zap } from "lucide-react";
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
  { icon: MessageSquareWarning, title: "Reclamos de vecinos", desc: "Quejas constantes por falta de agua caliente, presión baja o cortes inesperados." },
  { icon: ThermometerSun, title: "Cortes de agua y calefacción", desc: "Fallas en calderas y bombas que dejan al edificio sin servicio." },
  { icon: Moon, title: "Emergencias nocturnas", desc: "Problemas que no avisan y generan urgencias fuera de horario." },
  { icon: RotateCcw, title: "Gastos repetitivos", desc: "Reparaciones que se repiten porque nadie aborda la causa raíz." },
];

const solutions = [
  { icon: Wrench, title: "Mantención preventiva", desc: "Planes programados que evitan el 80% de las emergencias. Menos llamadas de vecinos, más tranquilidad." },
  { icon: Shield, title: "Reducción de sarro", desc: "Ionizadores que protegen calderas y tuberías, extendiendo su vida útil y reduciendo costos de gas." },
  { icon: Clock, title: "Soporte 24/7", desc: "Equipo técnico disponible las 24 horas. Respuesta en menos de 2 horas ante cualquier emergencia." },
];

const stats = [
  { icon: TrendingDown, value: "Hasta 30%", label: "ahorro en gas con mantención preventiva" },
  { icon: Zap, value: "< 2 horas", label: "respuesta ante emergencias" },
  { icon: Shield, value: "80%", label: "menos emergencias con plan preventivo" },
];

const Condominios = () => (
  <>
    <Navbar />

    <section className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-cta blur-3xl" />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Evita reclamos, emergencias y costos innecesarios en tu comunidad
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl">
            Mantención profesional de calderas, bombas y sistemas de agua para condominios. Respuesta rápida, resultados medibles.
          </p>
          <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90 font-semibold text-base px-8">
            <Link to="/contacto">Agenda revisión técnica gratuita <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    <WaveDivider from="bg-primary" to="bg-background" />

    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
          Problemas comunes en condominios
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Si administras un condominio, probablemente conoces estos dolores de cabeza.
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
          Cómo ayudamos a tu condominio
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

    {/* Stats */}
    <section className="bg-accent py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <s.icon className="h-8 w-8 text-accent-foreground/80 mb-3" />
              <span className="font-display text-3xl md:text-4xl font-bold text-accent-foreground">{s.value}</span>
              <span className="text-accent-foreground/80 mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner title="Agenda una revisión técnica gratuita" subtitle="Evaluamos el estado de tus sistemas y te entregamos un diagnóstico sin costo." buttonText="Agendar revisión" />
    <Footer />
  </>
);

export default Condominios;
