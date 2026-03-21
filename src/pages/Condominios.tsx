import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, DollarSign, Droplets, Wrench, CheckCircle, Building, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
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

const Condominios = () => (
  <>
    <Navbar />

    {/* Hero */}
    <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            COMUNIDADES MÁS SEGURAS Y EFICIENTES
          </h1>
          <p className="text-primary-foreground/70 text-sm tracking-wide mb-8 uppercase">
            Nos encargamos de tus calderas, bombas y sistemas de agua para que ahorres en reparaciones y mantenciones
          </p>
          <Button asChild variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-6">
            <Link to="/contacto">Solicita una Cotización Gratuita <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
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
          ¿PROBLEMAS FRECUENTES EN TU COMUNIDAD?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-3xl mx-auto">
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

    {/* Solutions */}
    <section className="bg-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <p className="text-primary text-xs tracking-widest uppercase font-semibold mb-2">Nuestras Soluciones</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">¿QUÉ HACEMOS POR TU COMUNIDAD?</h3>
            <p className="text-muted-foreground text-sm mb-6">Soluciones rápidas y efectivas.</p>
            <div className="space-y-4">
              {[
                { title: "MANTENEMOS Y REPARAMOS", desc: "Calderas y bombas para prevenir emergencias" },
                { title: "INSTALAMOS", desc: "Dispositivos que mejoran la calidad del agua y reducen costos." },
                { title: "SOPORTE CONTINUO", desc: "Atención 24/7" },
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

    <CTABanner
      title="CONTÁCTANOS PARA UNA PROPUESTA PERSONALIZADA"
      subtitle=""
      buttonText="Conversemos"
      buttonText2="Solicita Más Información"
    />
    <Footer />
  </>
);

export default Condominios;
