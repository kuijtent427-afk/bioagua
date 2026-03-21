import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, Clock, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-water.png";

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

      {/* Hero with water image */}
      <section className="relative overflow-hidden bg-light-bg">
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary leading-tight">
                CONTACTO
              </h1>
            </motion.div>
            <div className="hidden md:flex justify-end">
              <img src={heroImage} alt="Ionizador BioAgua" className="max-w-sm w-full object-contain" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-14 tracking-wide">
            SOLUCIONES PARA EMPRESAS Y CONDOMINIOS
          </h2>
          <div className="grid grid-cols-2 gap-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full border-2 border-primary/20 flex items-center justify-center bg-light-bg">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <p className="text-primary font-bold text-sm tracking-wide">ATENCIÓN 24 HORAS LOS 7 DÍAS DE LA SEMANA</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full border-2 border-primary/20 flex items-center justify-center bg-light-bg">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <p className="text-primary font-bold text-sm tracking-wide">EXPERIENCIA COMPROBADA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="relative py-16 md:py-24" style={{ background: "linear-gradient(135deg, hsl(195, 40%, 75%) 0%, hsl(195, 35%, 80%) 100%)" }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 60 720 0 1080 30C1260 50 1440 30 1440 30V0H0V30Z" className="fill-background" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Left: Contact info */}
            <div className="pt-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-8">
                ¡CONVERSEMOS!
              </h2>
              <div className="space-y-4">
                <a href="https://wa.me/56925835616" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-secondary hover:text-primary transition-colors">
                  <MessageCircle className="h-6 w-6" />
                  <div>
                    <p className="font-semibold text-sm">Whatsapp</p>
                    <p className="text-sm">+56 9 25835616</p>
                  </div>
                </a>
                <a href="tel:+56925835616" className="flex items-center gap-3 text-secondary hover:text-primary transition-colors">
                  <Phone className="h-6 w-6" />
                  <div>
                    <p className="font-semibold text-sm">Teléfono</p>
                    <p className="text-sm">+56 9 25835616</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-12 text-center">
                    <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                    <h2 className="font-display text-2xl font-bold text-card-foreground mb-3">¡Gracias por tu solicitud!</h2>
                    <p className="text-muted-foreground">Nos pondremos en contacto contigo en menos de 24 horas.</p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-lg bg-card">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="clientType" className="text-sm font-medium">¿Eres condominio o empresa?</Label>
                        <Select required>
                          <SelectTrigger id="clientType"><SelectValue placeholder="- Select -" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="empresa">Empresa</SelectItem>
                            <SelectItem value="condominio">Condominio</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" placeholder="Nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                        <Input id="email" type="email" placeholder="hola@correo.cl" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input id="subject" placeholder="Subject" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje <span className="text-destructive">*</span></Label>
                        <Textarea id="message" placeholder="¿En qué te podemos Ayudar?" rows={4} required />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base">
                        Enviar
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contacto;
