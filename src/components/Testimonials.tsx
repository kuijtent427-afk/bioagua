import { motion } from "framer-motion";
import { Star } from "lucide-react";
import EditableText from "@/components/admin/EditableText";

const testimonials = [
  { key: "t1", quote: "Desde que instalaron los ionizadores, nuestros costos de mantenimiento bajaron un 35%. El equipo es altamente profesional.", initials: "CM", name: "Cliente Empresarial" },
  { key: "t2", quote: "Respuesta inmediata y soluciones reales. Nos resolvieron una emergencia de calderas en menos de 2 horas. Totalmente recomendables.", initials: "RP", name: "Administrador de Condominio" },
];

const Testimonials = () => (
  <section className="bg-light-bg section-padding">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <EditableText contentKey="testimonials__label" defaultValue="Testimonios" as="p" className="text-xs tracking-widest text-muted-foreground uppercase mb-3 font-semibold" />
        <EditableText contentKey="testimonials__title" defaultValue="LO QUE DICEN NUESTROS CLIENTES" as="h2" className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide" />
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.key}
            className="relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -6 }}
          >
            {/* Gradient quote mark */}
            <div className="text-5xl font-display font-bold leading-none text-gradient mb-4 select-none">"</div>
            {/* Star rating */}
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, si) => (
                <Star key={si} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <EditableText contentKey={`testimonials__${t.key}_quote`} defaultValue={t.quote} as="p" className="text-sm text-muted-foreground leading-relaxed italic mb-6" multiline />
            {/* Avatar + name */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground" style={{ background: "linear-gradient(135deg, hsl(190, 55%, 40%), hsl(185, 65%, 45%))" }}>
                {t.initials}
              </div>
              <span className="text-xs font-semibold text-foreground">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
