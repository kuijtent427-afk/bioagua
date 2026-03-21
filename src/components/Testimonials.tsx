import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import EditableText from "@/components/admin/EditableText";

const testimonials = [
  { key: "t1", quote: "Desde que instalaron los ionizadores, nuestros costos de mantenimiento bajaron un 35%. El equipo es altamente profesional." },
  { key: "t2", quote: "Respuesta inmediata y soluciones reales. Nos resolvieron una emergencia de calderas en menos de 2 horas. Totalmente recomendables." },
];

const Testimonials = () => (
  <section className="bg-background py-20 md:py-28">
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
            className="relative bg-card border border-border/50 rounded-xl p-8 pl-10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            {/* Accent left border */}
            <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-primary/60" />
            <Quote className="h-6 w-6 text-primary/30 mb-4" />
            <EditableText contentKey={`testimonials__${t.key}_quote`} defaultValue={`"${t.quote}"`} as="p" className="text-sm text-muted-foreground leading-relaxed italic" multiline />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;