import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Droplets, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(190, 60%, 50%), transparent)" }}
        animate={{ y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(185, 55%, 55%), transparent)" }}
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="text-center relative z-10 px-4">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <span className="font-display text-8xl md:text-9xl font-bold text-gradient">404</span>
            <motion.div
              className="absolute -top-4 -right-4"
              animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Droplets className="h-8 w-8 text-primary/40" />
            </motion.div>
          </div>
        </motion.div>
        <motion.h1
          className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Página no encontrada
        </motion.h1>
        <motion.p
          className="text-muted-foreground mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Lo sentimos, la página que buscas no existe o fue movida.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 rounded-full shadow-glow hover:shadow-strong hover:scale-105 transition-all duration-300">
            <Link to="/"><Home className="h-4 w-4 mr-2" /> Ir al Inicio</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-semibold px-8 rounded-full hover:scale-105 transition-all duration-300">
            <Link to="/contacto"><ArrowLeft className="h-4 w-4 mr-2" /> Contacto</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
