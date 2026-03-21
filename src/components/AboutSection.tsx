import { ShieldCheck, Clock, Users, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  { icon: ShieldCheck, label: "Seguridad certificada" },
  { icon: Clock, label: "Disponibilidad 24/7" },
  { icon: Users, label: "Equipo tecnico certificado" },
  { icon: Award, label: "5+ anos de experiencia" },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="bg-muted/50 py-24 lg:py-32">
      <div className="container section-padding">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Sobre nosotros</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Experiencia y compromiso con la industria del sureste
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                En RFT Soluciones contamos con mas de 15 anos de experiencia brindando soluciones
                electromecanicas a las principales industrias del sureste mexicano. Nuestro equipo
                de tecnicos e ingenieros certificados trabaja bajo los mas altos estandares de
                calidad y seguridad.
              </p>
              <p>
                Desde plantas de manufactura hasta instalaciones agroindustriales, nuestro
                compromiso es mantener su operacion funcionando sin interrupciones. Ofrecemos
                atencion las 24 horas del dia, los 7 dias de la semana, porque entendemos que cada
                minuto de paro productivo cuenta.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border bg-background p-3 shadow-xl">
                <img
                  src="/2.PNG"
                  alt="Equipo y trabajo de campo de RFT Soluciones"
                  className="aspect-square w-full rounded-[1.4rem] object-cover"
                />
              </div>

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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
