import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "INICIO" },
  { to: "/nosotros", label: "NOSOTROS" },
  { to: "/empresas", label: "EMPRESAS" },
  { to: "/condominios", label: "CONDOMINIOS" },
  { to: "/contacto", label: "CONTACTO" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-medium py-1"
          : "bg-background/70 backdrop-blur-sm border-b border-transparent py-2"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <motion.img
            src={logo}
            alt="BioAgua Chile"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-11" : "h-14"}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1 relative">
          {navLinks.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-xs font-semibold tracking-wider transition-all duration-300 px-4 py-2 rounded-full ${
                  active
                    ? "text-primary bg-primary/8"
                    : "text-foreground/60 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {l.label}
                {active && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/8 -z-10"
                    layoutId="navbar-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs px-6 ml-3 shadow-glow hover:shadow-strong hover:scale-105 transition-all duration-300 rounded-full"
          >
            <Link to="/contacto">Contáctanos</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden text-foreground p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile menu - slide from right overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-background border-l border-border shadow-strong z-50 md:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <img src={logo} alt="BioAgua" className="h-10 w-auto" />
                <motion.button onClick={() => setOpen(false)} whileTap={{ scale: 0.9 }} className="p-2 rounded-full hover:bg-muted">
                  <X className="h-5 w-5 text-foreground" />
                </motion.button>
              </div>
              <div className="p-4 flex flex-col gap-1">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={`block py-3 px-4 text-sm font-semibold tracking-wider rounded-xl transition-all ${
                        location.pathname === l.to
                          ? "text-primary bg-primary/8"
                          : "text-foreground/70 hover:bg-muted"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06, duration: 0.3 }}
                  className="pt-4"
                >
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full shadow-glow">
                    <Link to="/contacto" onClick={() => setOpen(false)}>Contáctanos</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
