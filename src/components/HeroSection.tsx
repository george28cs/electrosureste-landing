import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Abstract grid pattern */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />

      <div className="container relative z-10 section-padding py-24 lg:py-32">
        <div className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-foreground/80">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-primary-foreground/70">ElectroSureste Industrial</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
            Soluciones Electromecánicas para la Industria
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/70 sm:text-xl">
            Especialistas en mantenimiento industrial y electricidad en el sureste.
            Potencia y confianza para la industria del sureste.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="lg" asChild>
              <a href="#contacto">Solicitar presupuesto</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>

          <div className="flex gap-8 pt-6 text-primary-foreground/50 text-sm">
            <div><span className="block text-2xl font-bold text-primary-foreground tabular-nums">15+</span>Años de experiencia</div>
            <div><span className="block text-2xl font-bold text-primary-foreground tabular-nums">500+</span>Proyectos realizados</div>
            <div><span className="block text-2xl font-bold text-primary-foreground tabular-nums">24/7</span>Disponibilidad</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
