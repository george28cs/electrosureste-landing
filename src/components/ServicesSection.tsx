import { Wrench, Cable, ShieldCheck, Paintbrush, Building2, Construction } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import StaggerReveal from "./StaggerReveal";

const services = [
  {
    icon: Wrench,
    title: "Equipos Industriales",
    description:
      "Atendemos reparaciones, mantenimiento preventivo y correctivo para mantener la continuidad operativa.",
  },
  {
    icon: Building2,
    title: "Obra Civil e Instalaciones",
    description:
      "Desarrollamos adecuaciones, mejoras y trabajos constructivos para espacios industriales y operativos.",
  },
  {
    icon: Construction,
    title: "Estructuras de Acero",
    description:
      "Fabricamos y montamos estructuras metalicas con enfoque en resistencia, funcionalidad y seguridad.",
  },
  {
    icon: Paintbrush,
    title: "Pintura Industrial",
    description:
      "Aplicamos recubrimientos para proteger superficies y prolongar la vida util de activos expuestos.",
  },
  {
    icon: Cable,
    title: "Pruebas Electricas",
    description:
      "Realizamos pruebas, revisión técnica y mantenimiento eléctrico para asegurar instalaciones confiables.",
  },
  {
    icon: ShieldCheck,
    title: "Conservacion General",
    description:
      "Ejecutamos labores de conservación para preservar infraestructura, equipos y condiciones seguras de trabajo.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-background py-24 lg:py-32">
      <div className="container section-padding">
        <ScrollReveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Nuestros servicios</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Soluciones integrales para su operación</h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Integramos servicios clave para atender obra, mantenimiento, conservación y soporte técnico en operaciones industriales.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3" staggerMs={100}>
          {services.map((service) => (
            <div key={service.title} className="h-full">
              <div className="group relative flex h-full flex-col rounded-xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/30 hover:bg-accent/5 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.2)]">
                <div className="mb-5 inline-flex rounded-lg bg-accent/10 p-3 text-accent transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-accent/15 group-hover:text-accent/80">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold leading-snug">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
