import { Zap } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary py-16 text-primary-foreground/70">
      <div className="container section-padding">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-primary-foreground">
              <Zap className="h-5 w-5 text-accent" />
              ElectroSureste
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              Potencia y confianza para la industria del sureste.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground">Dirección</h4>
            <p className="text-sm leading-relaxed">
              Calle 60 #500, Col. Centro<br />
              Mérida, Yucatán, México<br />
              C.P. 97000
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground">Contacto</h4>
            <p className="text-sm leading-relaxed">
              contacto@electrosureste.com<br />
              +52 (999) 123-4567
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground">Horario</h4>
            <p className="text-sm leading-relaxed">
              Lunes a Viernes: 8:00 – 18:00<br />
              Emergencias: 24/7
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs">
          © {new Date().getFullYear()} ElectroSureste Industrial. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
