import { Eye, Target } from "lucide-react";
import StaggerReveal from "./StaggerReveal";

const cards = [
  {
    icon: Target,
    eyebrow: "Misión",
    title: "Calidad, responsabilidad y enfoque industrial",
    description:
      "Realizar trabajos de calidad y soluciones orientadas al sector industrial, enfocados en la satisfacción de nuestros clientes, trabajando con responsabilidad, ética, respeto y dedicación en cada una de nuestras actividades.",
  },
  {
    icon: Eye,
    eyebrow: "Visión",
    title: "Ser un referente en soluciones integrales",
    description:
      "Ser la empresa de soluciones integrales reconocida por su trabajo y experiencia en el ramo, convertirnos en un referente para nuestros clientes y consolidarnos como sus socios de negocios.",
  },
];

const MissionVisionSection = () => {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container section-padding">
        <StaggerReveal staggerMs={100}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Nuestra esencia</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Misión y visión que guían cada proyecto</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Construimos relaciones de largo plazo con una forma de trabajo clara: hacer bien las
              cosas, responder con seriedad y convertirnos en un aliado confiable para cada cliente.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.eyebrow}
                className="rounded-[1.75rem] border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-accent/10 p-4 text-accent">
                  <card.icon className="h-7 w-7" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{card.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
};

export default MissionVisionSection;
