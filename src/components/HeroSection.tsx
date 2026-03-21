import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative z-10 section-padding py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-foreground/80">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-primary-foreground/70">RFT Soluciones</span>
            </div>

            <h1
              className="translate-y-6 animate-fade-up text-4xl font-bold leading-[1.08] text-primary-foreground opacity-0 sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "100ms" }}
            >
              Soluciones electromecanicas para la industria
            </h1>

            <p
              className="translate-y-6 animate-fade-up max-w-xl text-lg leading-relaxed text-primary-foreground/70 opacity-0 sm:text-xl"
              style={{ animationDelay: "250ms" }}
            >
              Especialistas en mantenimiento industrial y electricidad en el sureste.
              Potencia y confianza para la industria del sureste.
            </p>

            <div
              className="translate-y-6 animate-fade-up flex flex-wrap gap-4 pt-2 opacity-0"
              style={{ animationDelay: "400ms" }}
            >
              <Button
                variant="hero"
                size="lg"
                className="hover:scale-[1.03] hover:bg-accent/85 hover:shadow-[0_0_30px_hsl(var(--accent)/0.28)]"
                asChild
              >
                <a href="#contacto">Solicitar presupuesto</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#servicios">Ver servicios</a>
              </Button>
            </div>

            <div className="flex gap-8 pt-6 text-sm text-primary-foreground/50">
              <div>
                <span className="block text-2xl font-bold tabular-nums text-primary-foreground">5+</span>
                Anos de experiencia
              </div>
              <div>
                <span className="block text-2xl font-bold tabular-nums text-primary-foreground">500+</span>
                Proyectos realizados
              </div>
              <div>
                <span className="block text-2xl font-bold tabular-nums text-primary-foreground">24/7</span>
                Disponibilidad
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <img
                src="/1.PNG"
                alt="Trabajo industrial de RFT Soluciones"
                className="aspect-square w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
