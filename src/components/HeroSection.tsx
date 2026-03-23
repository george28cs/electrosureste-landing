import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const HeroSection = () => {
  const assetBase = import.meta.env.BASE_URL;

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
              Mantenimiento industrial, electricidad y soluciones en campo para la industria del
              sureste
            </h1>

            <p
              className="translate-y-6 animate-fade-up max-w-xl text-lg leading-relaxed text-primary-foreground/70 opacity-0 sm:text-xl"
              style={{ animationDelay: "250ms" }}
            >
              Atendemos operaciones industriales en Veracruz, Tabasco, Campeche y Yucatán con
              servicios de mantenimiento, obra, estructuras y soporte técnico especializado.
            </p>

            <div
              className="translate-y-6 animate-fade-up flex flex-wrap items-center gap-4 pt-2 opacity-0"
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
              <a
                href="https://wa.me/529211093848?text=Hola,%20quiero%20solicitar%20informacion%20sobre%20sus%20servicios."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/35 bg-[#25D366]/12 px-4 py-2 text-sm font-medium text-[#dcfce7] transition-all duration-200 hover:scale-[1.02] hover:border-[#25D366]/55 hover:bg-[#25D366]/18 hover:text-white hover:shadow-[0_10px_30px_rgba(37,211,102,0.22)]"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.59 2 2.16 6.42 2.16 11.86c0 1.74.45 3.45 1.3 4.97L2 22l5.33-1.4a9.83 9.83 0 0 0 4.7 1.2h.01c5.44 0 9.86-4.42 9.86-9.86a9.8 9.8 0 0 0-2.85-7.03Zm-7.02 15.22h-.01a8.16 8.16 0 0 1-4.15-1.13l-.3-.18-3.16.83.84-3.08-.2-.32a8.13 8.13 0 0 1-1.25-4.39c0-4.5 3.67-8.16 8.18-8.16a8.1 8.1 0 0 1 5.77 2.39 8.1 8.1 0 0 1 2.38 5.78c0 4.5-3.66 8.16-8.1 8.16Zm4.47-6.1c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.08 3.59.57.25 1.02.4 1.37.5.58.18 1.1.15 1.52.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-6 text-sm text-primary-foreground/50">
              <div>
                <span className="block text-2xl font-bold tabular-nums text-primary-foreground">4+</span>
                Más de 4 años de experiencia
              </div>
              <div>
                <span className="block text-2xl font-bold tabular-nums text-primary-foreground">4</span>
                Estados con presencia
              </div>
              <div>
                <span className="block text-2xl font-bold tabular-nums text-primary-foreground">24/7</span>
                Atención y seguimiento
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="absolute -inset-6 rounded-[2rem] bg-accent/15 blur-3xl" />
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.4rem]">
                <img
                  src={`${assetBase}8.JPG`}
                  alt="Trabajo industrial de RFT Soluciones"
                  className="aspect-square w-full object-cover transition-transform ease-out group-hover:scale-105"
                  style={{ transitionDuration: "400ms" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
