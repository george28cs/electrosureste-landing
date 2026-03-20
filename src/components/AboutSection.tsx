import { ShieldCheck, Clock, Users, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  { icon: ShieldCheck, label: "Seguridad certificada" },
  { icon: Clock, label: "Disponibilidad 24/7" },
  { icon: Users, label: "Equipo técnico certificado" },
  { icon: Award, label: "15+ años de experiencia" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-muted/50">
      <div className="container section-padding">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Sobre Nosotros</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Experiencia y compromiso con la industria del sureste
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En ElectroSureste Industrial contamos con más de 15 años de experiencia brindando soluciones electromecánicas a las principales industrias del sureste mexicano. Nuestro equipo de técnicos e ingenieros certificados trabaja bajo los más altos estándares de calidad y seguridad.
              </p>
              <p>
                Desde plantas de manufactura hasta instalaciones agroindustriales, nuestro compromiso es mantener su operación funcionando sin interrupciones. Ofrecemos atención las 24 horas del día, los 7 días de la semana, porque entendemos que cada minuto de paro productivo cuenta.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-3 rounded-xl border bg-background p-6 text-center shadow-sm"
                >
                  <div className="rounded-lg bg-accent/10 p-3 text-accent">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
