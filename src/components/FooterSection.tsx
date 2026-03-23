const FooterSection = () => {
  const assetBase = import.meta.env.BASE_URL;

  return (
    <footer className="bg-primary py-16 text-primary-foreground/70">
      <div className="container section-padding">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-primary-foreground">
              <img src={`${assetBase}bitmap-footer.svg`} alt="RFT Soluciones" className="h-10 w-auto object-contain" />
              RFT Soluciones
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              Potencia y confianza para la industria del sureste.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground">Dirección</h4>
            <p className="text-sm leading-relaxed">
              Independencia #88, Colonia Libertad
              <br />
              Villa Allende, Coatzacoalcos, C.P. 96380
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground">Contacto</h4>
            <p className="text-sm leading-relaxed">
              rftsoluciones@gmail.com
              <br />
              921 109 3848
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground">Horario</h4>
            <p className="text-sm leading-relaxed">
              Lunes a Viernes: 8:00 - 18:00
              <br />
              Emergencias: 24/7
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-xs">
          Copyright {new Date().getFullYear()} RFT Soluciones. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
