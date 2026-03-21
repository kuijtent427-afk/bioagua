import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, Mail, Clock, Shield, CheckCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Contacto = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const { error } = await supabase.from("contact_messages").insert({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null,
      client_type: (formData.get("clientType") as string) || null,
      subject: (formData.get("subject") as string) || null,
      message: formData.get("message") as string,
    });

    if (error) {
      toast({ title: "Error al enviar", description: "Intenta nuevamente.", variant: "destructive" });
      return;
    }

    setSubmitted(true);
    toast({ title: "¡Solicitud enviada!", description: "Nos pondremos en contacto contigo en menos de 24 horas." });
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}
      >
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary-foreground/60 text-xs tracking-widest mb-3 uppercase">Estamos para ayudarte</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              AGENDA UNA EVALUACIÓN TÉCNICA GRATUITA
            </h1>
            <p className="text-primary-foreground/70 mt-4 max-w-xl mx-auto text-sm">
              Completa el formulario y te contactaremos en menos de 24 horas. Sin compromiso.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 md:h-16" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Clock, label: "Respuesta en menos de 24h" },
              { icon: Shield, label: "Sin compromiso" },
              { icon: MessageCircle, label: "Atención por WhatsApp" },
              { icon: CheckCircle, label: "Evaluación gratuita" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="flex flex-col items-center gap-3 text-center"
              >
                <motion.div
                  className="w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center bg-light-bg"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <item.icon className="h-7 w-7 text-primary" />
                </motion.div>
                <p className="text-xs font-semibold text-foreground tracking-wide">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="relative py-16 md:py-24" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 88%) 0%, hsl(190, 55%, 78%) 50%, hsl(185, 50%, 72%) 100%)" }}>
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 60 720 0 1080 30C1260 50 1440 30 1440 30V0H0V30Z" className="fill-background" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto items-start">
            {/* Left: Contact info */}
            <motion.div
              className="lg:col-span-2 pt-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-2">
                ¡CONVERSEMOS!
              </h2>
              <p className="text-secondary/60 text-sm mb-8">
                Escríbenos o llámanos directamente.
              </p>
              <div className="space-y-5">
                <motion.a
                  href="https://wa.me/56925835836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+56 9 2583 5836</p>
                  </div>
                </motion.a>
                <motion.a
                  href="tel:+56925835616"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Teléfono</p>
                    <p className="text-sm text-muted-foreground">+56 9 2583 5616</p>
                  </div>
                </motion.a>
                <motion.a
                  href="mailto:bioagua@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">bioagua@gmail.com</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              {submitted ? (
                <Card className="border-none shadow-xl bg-card">
                  <CardContent className="p-12 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }}>
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                    </motion.div>
                    <h2 className="font-display text-2xl font-bold text-card-foreground mb-3">¡Gracias por tu solicitud!</h2>
                    <p className="text-muted-foreground">Nos pondremos en contacto contigo en menos de 24 horas.</p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-xl bg-card">
                  <CardContent className="p-8">
                    <h3 className="font-display text-lg font-bold text-foreground mb-6">Solicita tu evaluación gratuita</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium">Nombre <span className="text-destructive">*</span></Label>
                          <Input id="name" name="name" placeholder="Tu nombre" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="clientType" className="text-sm font-medium">Tipo de cliente</Label>
                          <Select required name="clientType" onValueChange={(v) => setClientType(v)}>
                            <SelectTrigger id="clientType"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                            <SelectContent>
                              <SelectItem value="empresa">Empresa</SelectItem>
                              <SelectItem value="condominio">Condominio</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                          <Input id="email" name="email" type="email" placeholder="correo@ejemplo.cl" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input id="phone" type="tel" placeholder="+56 9 ..." />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input id="subject" placeholder="¿Sobre qué necesitas ayuda?" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje <span className="text-destructive">*</span></Label>
                        <Textarea id="message" placeholder="Cuéntanos tu situación..." rows={4} required />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base hover:scale-[1.02] transition-transform">
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Solicitud
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-14" preserveAspectRatio="none">
            <path d="M0 30C360 0 720 60 1080 30C1260 10 1440 30 1440 30V60H0V30Z" className="fill-background" />
          </svg>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
};

export default Contacto;