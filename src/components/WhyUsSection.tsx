import { BadgeCheck, Timer, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Técnicos Certificados",
    description: "Nuestro equipo cuenta con certificaciones oficiales y capacitación continua en las últimas tecnologías electromecánicas.",
  },
  {
    icon: Timer,
    title: "Respuesta en menos de 4 horas",
    description: "Ante cualquier emergencia, garantizamos presencia técnica en su instalación en un máximo de 4 horas.",
  },
  {
    icon: Globe,
    title: "Disponibilidad 24/7 en toda la región",
    description: "Cobertura completa en toda la zona sureste del país con guardias permanentes y unidades de servicio equipadas.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container section-padding">
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">¿Por qué elegirnos?</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">La diferencia está en el servicio</h2>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 100}>
              <div className="group text-center rounded-xl border bg-card p-10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
                <div className="mx-auto mb-6 inline-flex rounded-full bg-primary p-4 text-primary-foreground transition-colors group-hover:bg-accent">
                  <reason.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
