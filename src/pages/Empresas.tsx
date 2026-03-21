import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, AlertTriangle, DollarSign, Droplets, Zap, Wrench, Settings, Shield, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const problems = [
  { icon: AlertTriangle, title: "Fallos recurrentes", desc: "En torres de enfriamiento y condensadores." },
  { icon: DollarSign, title: "Altos costos", desc: "De gas y agua por equipos ineficientes." },
  { icon: Droplets, title: "Incrustaciones", desc: "en calderas y tuberías" },
];

const trustCards = [
  { icon: Zap, title: "TECNOLOGÍA DE PUNTA", desc: "Que ahorra hasta un 40% en costos operativos." },
  { icon: Shield, title: "EXPERIENCIA", desc: "En industrias como alimentos, salud y manufactura." },
  { icon: Clock, title: "GARANTÍA Y SOPORTE", desc: "Garantías extendidas y soporte técnico continuo." },
];

const Empresas = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4 max-w-3xl mx-auto">
            EMPRESAS QUE BUSCAN EFICIENCIA Y SOSTENIBILIDAD
          </h1>
          <p className="text-primary-foreground/70 text-sm tracking-wide mb-8 uppercase">
            Optimizamos tus procesos, cuidamos tus equipos y reducimos tus costos operativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
              <Link to="/contacto">Hablemos Hoy</Link>
            </Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6">
              <Link to="/contacto">Cotización Gratuita</Link>
            </Button>
          </div>
        </motion.div>
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
          ¿TUS SISTEMAS ESTÁN FALLANDO?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {problems.map((p, i) => (
            <motion.div key={p.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 bg-light-bg">
                <p.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-sm text-foreground mb-1">{p.title}</h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Solutions */}
    <section className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-2">Nuestras Soluciones</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">¿QUÉ HACEMOS POR TU EMPRESA?</h3>
            <div className="space-y-4">
              {[
                { title: "INSTALAMOS", desc: "Ionizadores que eliminan sarro y prolongan la vida útil de tus equipos." },
                { title: "MANTENEMOS", desc: "Tus calderas y sistemas operativos al 100%." },
                { title: "DISEÑAMOS", desc: "Soluciones personalizadas para tu industria." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="flex flex-col items-center gap-3">
            <Droplets className="h-20 w-20 text-primary" />
            <span className="font-display text-2xl font-bold text-secondary tracking-wide">BIOAGUA</span>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Trust section */}
    <section className="bg-background py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12 tracking-wide">
          ¿POR QUÉ CONFIAR EN NOSOTROS?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {trustCards.map((c, i) => (
            <motion.div key={c.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full border border-border shadow-sm bg-card rounded-xl">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center shrink-0 bg-light-bg">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
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

    <CTABanner
      title="AGENDA UNA EVALUACIÓN TÉCNICA"
      subtitle="SIN COSTO"
      buttonText="Agendar Evaluación"
      buttonText2="Solicita Más Información"
    />
    <Footer />
  </>
);

export default Empresas;
