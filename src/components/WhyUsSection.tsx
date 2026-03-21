import { BadgeCheck, Timer, Globe } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Tecnicos certificados",
    description:
      "Nuestro equipo cuenta con certificaciones oficiales y capacitacion continua en las ultimas tecnologias electromecanicas.",
  },
  {
    icon: Timer,
    title: "Respuesta en menos de 4 horas",
    description:
      "Ante cualquier emergencia, garantizamos presencia tecnica en su instalacion en un maximo de 4 horas.",
  },
  {
    icon: Globe,
    title: "Disponibilidad 24/7 en toda la region",
    description:
      "Cobertura completa en toda la zona sureste del pais con guardias permanentes y unidades de servicio equipadas.",
  },
];

const WhyUsSection = () => {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container section-padding">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Por que elegirnos</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">La diferencia esta en el servicio</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border bg-card p-3 shadow-xl">
            <img
              src={`${assetBase}3.PNG`}
              alt="Operacion y servicio tecnico de RFT Soluciones"
              className="aspect-square w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 100}>
              <div className="group rounded-xl border bg-card p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
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
