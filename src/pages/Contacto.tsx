import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Clock, ShieldCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

const badges = [
  { icon: Clock, text: "Respuesta en menos de 24h" },
  { icon: ShieldCheck, text: "Sin compromiso" },
  { icon: CheckCircle, text: "Evaluación 100% gratuita" },
];

const Contacto = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "¡Solicitud enviada!", description: "Nos pondremos en contacto contigo en menos de 24 horas." });
  };

  return (
    <>
      <Navbar />

      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              Agenda una evaluación técnica gratuita
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Detectamos pérdidas, riesgos y oportunidades de ahorro en tus sistemas de agua.
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider from="bg-primary" to="bg-background" />

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-12 text-center">
                    <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
                    <h2 className="font-display text-2xl font-bold text-card-foreground mb-3">¡Gracias por tu solicitud!</h2>
                    <p className="text-muted-foreground">Nuestro equipo técnico se pondrá en contacto contigo en menos de 24 horas.</p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="clientType">Tipo de cliente</Label>
                          <Select required>
                            <SelectTrigger id="clientType"><SelectValue placeholder="Selecciona" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="empresa">Empresa</SelectItem>
                              <SelectItem value="condominio">Condominio</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="systemType">Tipo de sistema</Label>
                          <Select>
                            <SelectTrigger id="systemType"><SelectValue placeholder="Selecciona" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="caldera">Caldera</SelectItem>
                              <SelectItem value="bomba">Bomba de agua</SelectItem>
                              <SelectItem value="torre">Torre de enfriamiento</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="size">Tamaño (departamentos o m²)</Label>
                        <Input id="size" placeholder="Ej: 120 departamentos, 5.000 m²" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="problem">Problema principal</Label>
                        <Textarea id="problem" placeholder="Describe brevemente el problema o lo que necesitas..." rows={3} />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre</Label>
                          <Input id="name" placeholder="Tu nombre" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="tu@email.com" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" placeholder="+56 9 XXXX XXXX" required />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-cta text-cta-foreground hover:bg-cta/90 font-semibold text-base">
                        Enviar solicitud
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {badges.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <b.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">{b.text}</span>
                </div>
              ))}

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-display font-semibold text-lg text-foreground mb-4">¿Prefieres escribirnos directo?</h3>
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contacto;
