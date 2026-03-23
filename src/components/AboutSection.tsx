import { ShieldCheck, Clock, Users, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import StaggerReveal from "./StaggerReveal";

const highlights = [
  { icon: ShieldCheck, label: "Cobertura en el sureste" },
  { icon: Clock, label: "Atención 24/7" },
  { icon: Users, label: "Colaboradores con más de 10 años de experiencia" },
  { icon: Award, label: "Más de 4 años de experiencia en el mercado industrial" },
];

const capabilities = [
  "Reparación y mantenimiento de equipos industriales.",
  "Obra civil, construcción y mantenimiento a instalaciones.",
  "Fabricación y montaje de estructuras de acero.",
  "Aplicación de pintura industrial.",
  "Pruebas y mantenimiento eléctrico.",
  "Mantenimiento y conservación.",
];

const AboutSection = () => {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <section id="nosotros" className="bg-muted/50 py-24 lg:py-32">
      <div className="container section-padding">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <StaggerReveal staggerMs={100}>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Quiénes somos</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Soluciones industriales con presencia en todo el sureste
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  Ubicados en el estado de Veracruz, en el municipio de Coatzacoalcos, en RFT
                  Soluciones (Roberto Fausto Tajolla) proveemos atención a clientes de todo el
                  sureste del país, con presencia en Veracruz, Tabasco, Campeche y Yucatán.
                </p>
                <p>
                  Somos una compañía mexicana con más de 4 años de experiencia en el mercado
                  industrial, respaldada por colaboradores con más de 10 años de experiencia en el
                  ramo.
                </p>
                <p>
                  Nos dedicamos principalmente a la proveeduría de equipos, materiales y servicios
                  especializados para soluciones como:
                </p>
              </div>

              <div className="grid gap-3 pt-2">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="rounded-xl border bg-background/80 px-4 py-3 text-sm leading-relaxed text-foreground/80"
                  >
                    {capability}
                  </div>
                ))}
              </div>
            </StaggerReveal>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <StaggerReveal staggerMs={100}>
              <div className="group overflow-hidden rounded-[2rem] border bg-background p-3 shadow-xl">
                <div className="overflow-hidden rounded-[1.4rem]">
                  <img
                    src={`${assetBase}1.JPG`}
                    alt="Equipo y trabajo de campo de RFT Soluciones"
                    className="aspect-square w-full object-cover transition-transform ease-out group-hover:scale-105"
                    style={{ transitionDuration: "400ms" }}
                  />
                </div>
              </div>

              <StaggerReveal className="mt-12 grid grid-cols-2 gap-4" staggerMs={100}>
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
              </StaggerReveal>
            </StaggerReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
