import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Phone, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    // The form submits natively to Formspree via action/method
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-muted/50">
      <div className="container section-padding">
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Contacto</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Solicite su presupuesto sin compromiso</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Cuéntenos sobre su proyecto o necesidad y nuestro equipo se pondrá en contacto con usted a la brevedad.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-accent/10 p-3 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-medium">+52 (999) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-accent/10 p-3 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">contacto@electrosureste.com</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            {submitted ? (
              <div className="flex items-center justify-center rounded-xl border bg-background p-12 text-center">
                <div>
                  <div className="mx-auto mb-4 inline-flex rounded-full bg-accent/10 p-4 text-accent">
                    <Send className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">¡Mensaje enviado!</h3>
                  <p className="mt-2 text-muted-foreground">Nos pondremos en contacto pronto.</p>
                </div>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xxxxx"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-5 rounded-xl border bg-background p-8 shadow-sm"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Nombre *</label>
                    <Input id="name" name="name" required maxLength={100} placeholder="Su nombre" />
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium">Empresa</label>
                    <Input id="company" name="company" maxLength={100} placeholder="Nombre de empresa" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email *</label>
                    <Input id="email" name="email" type="email" required maxLength={255} placeholder="correo@ejemplo.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Teléfono</label>
                    <Input id="phone" name="phone" type="tel" maxLength={20} placeholder="+52 (999) 123-4567" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Mensaje *</label>
                  <Textarea id="message" name="message" required maxLength={1000} rows={4} placeholder="Describa su proyecto o necesidad..." />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
