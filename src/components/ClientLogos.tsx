import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const clients = [
  "Condominio Central Park",
  "Residencial El Bosque",
  "Comunidad Las Palmas",
  "Empresas XYZ",
  "Hotel del Valle",
  "Clínica San Rafael",
  "Edificio Mirador",
  "Industrias del Sur",
];

const ClientLogos = () => (
  <section className="bg-light-bg py-10 overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.p
        className="text-center text-xs tracking-widest text-muted-foreground uppercase mb-6 font-semibold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Confían en Nosotros
      </motion.p>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {clients.map((name) => (
          <motion.div
            key={name}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
            }}
          >
            <Badge
              variant="outline"
              className="px-4 py-2 text-xs font-medium text-muted-foreground border-border/60 bg-background/80 backdrop-blur-sm hover:border-primary/40 hover:text-primary transition-colors cursor-default"
            >
              {name}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ClientLogos;
