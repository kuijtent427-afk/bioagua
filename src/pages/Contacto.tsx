import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock, Shield, MessageCircle, CheckCircle, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import EditableText from "@/components/admin/EditableText";
import { useEditMode } from "@/contexts/EditModeContext";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const trustBadges = [
  { key: "response", icon: Clock, label: "Respuesta en menos de 24h" },
  { key: "nocommit", icon: Shield, label: "Sin compromiso" },
  { key: "whatsapp", icon: MessageCircle, label: "Atención por WhatsApp" },
  { key: "free", icon: CheckCircle, label: "Evaluación gratuita" },
];

const Contacto = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [clientType, setClientType] = useState("");
  const { isEditMode } = useEditMode();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const { error } = await supabase.from("contact_messages").insert({
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: (formData.get("phone") as string) || null,
        client_type: clientType || null,
        subject: (formData.get("subject") as string) || null,
        message: formData.get("message") as string,
      });

      if (error) {
        console.error("Supabase insert error:", error);
        toast({ title: "Error al enviar", description: "Intenta nuevamente.", variant: "destructive" });
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
      toast({ title: "¡Solicitud enviada!", description: "Nos pondremos en contacto contigo en menos de 24 horas." });
    } catch (err) {
      console.error("Submit error:", err);
      toast({ title: "Error al enviar", description: "Intenta nuevamente.", variant: "destructive" });
      setSubmitting(false);
    }
  };

  return (
    <div className={isEditMode ? "pt-14" : ""}>
      <Navbar />

      {/* Hero — compact */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(195, 60%, 25%) 0%, hsl(190, 50%, 35%) 50%, hsl(185, 55%, 50%) 100%)" }}
      >
        <div className="absolute inset-0 dot-pattern opacity-[0.04]" />
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <EditableText contentKey="contacto__hero__subtitle" defaultValue="Estamos para ayudarte" as="p" className="text-primary-foreground/50 text-xs tracking-widest mb-3 uppercase" />
            <EditableText contentKey="contacto__hero__title" defaultValue="AGENDA UNA EVALUACIÓN TÉCNICA GRATUITA" as="h1" className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight" />
            <EditableText contentKey="contacto__hero__description" defaultValue="Completa el formulario y te contactaremos en menos de 24 horas. Sin compromiso." as="p" className="text-primary-foreground/60 mt-4 max-w-xl mx-auto text-sm" />
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 md:h-12" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {trustBadges.map((item, i) => (
              <motion.div
                key={item.key}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
                className="flex flex-col items-center gap-3 text-center p-5 rounded-2xl bg-light-bg border border-border/50 hover:shadow-soft transition-all duration-300"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, hsl(190, 55%, 40%, 0.12), hsl(185, 65%, 45%, 0.08))" }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                >
                  <item.icon className="h-5 w-5 text-primary" />
                </motion.div>
                <EditableText contentKey={`contacto__trust__${item.key}`} defaultValue={item.label} as="p" className="text-xs font-semibold text-foreground tracking-wide" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="relative py-16 md:py-24" style={{ background: "linear-gradient(135deg, hsl(195, 60%, 92%) 0%, hsl(190, 55%, 85%) 50%, hsl(185, 50%, 80%) 100%)" }}>
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary mb-3">
                ¡CONVERSEMOS!
              </h2>
              <p className="text-secondary/50 text-sm mb-8">
                Escríbenos o llámanos directamente.
              </p>
              <div className="space-y-4">
                <motion.a
                  href="tel:+56925835616"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, hsl(190, 55%, 40%, 0.15), hsl(185, 65%, 45%, 0.08))" }}>
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <EditableText contentKey="contacto__contact__phone_label" defaultValue="Teléfono" as="p" className="font-semibold text-sm text-foreground" />
                    <EditableText contentKey="contacto__contact__phone_number" defaultValue="+56 9 2583 5616" as="p" className="text-sm text-muted-foreground" />
                  </div>
                </motion.a>
                <motion.a
                  href="mailto:bioagua@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 hover:border-primary/30 hover:shadow-medium transition-all duration-300"
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, hsl(185, 65%, 45%, 0.15), hsl(190, 55%, 40%, 0.08))" }}>
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <EditableText contentKey="contacto__contact__email_label" defaultValue="Email" as="p" className="font-semibold text-sm text-foreground" />
                    <EditableText contentKey="contacto__contact__email_address" defaultValue="bioagua@gmail.com" as="p" className="text-sm text-muted-foreground" />
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
                <Card className="border-none shadow-strong bg-card rounded-2xl overflow-hidden">
                  <CardContent className="p-12 text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", duration: 0.8 }}
                      className="relative inline-block"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </div>
                      <motion.div
                        className="absolute -top-2 -right-2"
                        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="h-6 w-6 text-accent" />
                      </motion.div>
                    </motion.div>
                    <h2 className="font-display text-2xl font-bold text-card-foreground mb-3">¡Gracias por tu solicitud!</h2>
                    <p className="text-muted-foreground">Nos pondremos en contacto contigo en menos de 24 horas.</p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-none shadow-strong bg-card rounded-2xl overflow-hidden">
                  <CardContent className="p-8 md:p-10">
                    <h3 className="font-display text-lg font-bold text-foreground mb-8">Solicita tu evaluación gratuita</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium">Nombre <span className="text-destructive">*</span></Label>
                          <Input id="name" name="name" placeholder="Tu nombre" required className="rounded-xl border-border/60 focus:ring-primary/30 focus:border-primary transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="clientType" className="text-sm font-medium">Tipo de cliente</Label>
                          <Select name="clientType" onValueChange={(v) => setClientType(v)}>
                            <SelectTrigger id="clientType" className="rounded-xl border-border/60"><SelectValue placeholder="Seleccionar" /></SelectTrigger>
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
                          <Input id="email" name="email" type="email" placeholder="correo@ejemplo.cl" required className="rounded-xl border-border/60 focus:ring-primary/30 focus:border-primary transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input id="phone" name="phone" type="tel" placeholder="+56 9 ..." className="rounded-xl border-border/60 focus:ring-primary/30 focus:border-primary transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Asunto</Label>
                        <Input id="subject" name="subject" placeholder="¿Sobre qué necesitas ayuda?" className="rounded-xl border-border/60 focus:ring-primary/30 focus:border-primary transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje <span className="text-destructive">*</span></Label>
                        <Textarea id="message" name="message" placeholder="Cuéntanos tu situación..." rows={4} required className="rounded-xl border-border/60 focus:ring-primary/30 focus:border-primary transition-colors resize-none" />
                      </div>
                      <Button type="submit" size="lg" disabled={submitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base rounded-full shadow-glow hover:shadow-strong hover:scale-[1.02] transition-all duration-300">
                        <Send className="h-4 w-4 mr-2" />
                        {submitting ? "Enviando..." : "Enviar Solicitud"}
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
    </div>
  );
};

export default Contacto;
