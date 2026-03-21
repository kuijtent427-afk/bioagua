import { Shield, Clock, Layers, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import CTABanner from "@/components/CTABanner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: Shield, title: "Prevención sobre reparación", desc: "Nuestro enfoque es detectar y corregir antes de que un problema escale. Eso te ahorra tiempo, dinero y dolores de cabeza." },
  { icon: Clock, title: "Atención 24/7", desc: "Emergencias no esperan. Nuestro equipo está disponible las 24 horas para responder cuando más lo necesitas." },
  { icon: Layers, title: "Experiencia multisector", desc: "Trabajamos con condominios, industrias, hospitales y más. Conocemos las particularidades de cada sector." },
  { icon: Users, title: "Equipo técnico experto", desc: "Profesionales certificados en sistemas hidráulicos, calderas, bombas y tecnología de ionización." },
];

const Nosotros = () => (
  <>
    <Navbar />

    <section className="bg-primary py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Más de 50 empresas y comunidades confían en BioAgua
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Somos un equipo técnico enfocado en resultados: menos fallas, menos costos, más tranquilidad para nuestros clientes.
          </p>
        </motion.div>
      </div>
    </section>

    <WaveDivider from="bg-primary" to="bg-background" />

    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
          Por qué nos eligen
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          No vendemos promesas. Entregamos soluciones técnicas con resultados medibles.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full border-none shadow-md bg-card">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <v.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-card-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTABanner title="¿Quieres saber cómo podemos ayudarte?" subtitle="Agenda una evaluación técnica sin costo y descubre oportunidades de ahorro." />
    <Footer />
  </>
);

export default Nosotros;
