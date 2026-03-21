import { Wrench, Cable, Cpu, Settings } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento Industrial Preventivo",
    description: "Programas de mantenimiento personalizados para minimizar tiempos de inactividad y extender la vida útil de sus equipos industriales.",
  },
  {
    icon: Cable,
    title: "Instalaciones Eléctricas Industriales",
    description: "Diseño, instalación y certificación de sistemas eléctricos de media y baja tensión cumpliendo normativas NOM vigentes.",
  },
  {
    icon: Cpu,
    title: "Automatización y Control",
    description: "Implementación de sistemas de control automatizado con PLCs, variadores de frecuencia y sistemas SCADA para optimizar procesos.",
  },
  {
    icon: Settings,
    title: "Diagnóstico y Reparación de Motores",
    description: "Análisis de vibración, termografía y reparación integral de motores eléctricos de cualquier potencia y aplicación.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-background">
      <div className="container section-padding">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Nuestros Servicios</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Soluciones integrales para su operación</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            Cubrimos todas las necesidades electromecánicas de su planta con personal altamente calificado.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80} className="h-full">
              <div className="group relative flex h-full flex-col rounded-xl border bg-card p-8 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl hover:shadow-accent/15">
                <div className="mb-5 inline-flex rounded-lg bg-accent/10 p-3 text-accent transition-all duration-200 group-hover:-translate-y-0.5 group-hover:bg-accent/15 group-hover:text-accent/80">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold leading-snug">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
