import { BadgeCheck, Timer, Globe } from "lucide-react";
import StaggerReveal from "./StaggerReveal";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Experiencia enfocada en industria",
    description:
      "Trabajamos con enfoque operativo, conocimiento técnico y experiencia en entornos industriales del sureste.",
  },
  {
    icon: Timer,
    title: "Atención oportuna y seguimiento",
    description:
      "Damos respuesta con seriedad, comunicación clara y seguimiento continuo para cada necesidad del cliente.",
  },
  {
    icon: Globe,
    title: "Cobertura regional",
    description:
      "Atendemos proyectos y servicios en Veracruz, Tabasco, Campeche y Yucatán desde nuestra base en Coatzacoalcos.",
  },
];

const WhyUsSection = () => {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container section-padding">
        <StaggerReveal staggerMs={100}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Por qué elegirnos</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Un aliado confiable para su operación</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Nos enfocamos en resolver con orden, responsabilidad y criterio técnico, manteniendo
              una relación cercana con cada cliente.
            </p>
          </div>

          <div className="group mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border bg-card p-3 shadow-xl">
            <div className="overflow-hidden rounded-[1.4rem]">
              <img
                src={`${assetBase}4.JPG`}
                alt="Operación y servicio técnico de RFT Soluciones"
                className="aspect-square w-full object-cover transition-transform ease-out group-hover:scale-105"
                style={{ transitionDuration: "400ms" }}
              />
            </div>
          </div>

          <StaggerReveal className="mt-16 grid gap-8 sm:grid-cols-3" staggerMs={100}>
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group rounded-xl border bg-card p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mx-auto mb-6 inline-flex rounded-full bg-primary p-4 text-primary-foreground transition-colors group-hover:bg-accent">
                  <reason.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </StaggerReveal>
      </div>
    </section>
  );
};

export default WhyUsSection;
