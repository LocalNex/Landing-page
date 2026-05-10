const BG_URL =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";

export default function FinalCTA() {
  return (
    <section className="relative bg-primary py-section-padding-desktop overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url('${BG_URL}')` }}
      />
      <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
        <h2 className="font-headline-xl-mobile md:font-headline-lg text-on-primary mb-6">
          ¿Listo para digitalizarte? Empezá hoy mismo.
        </h2>
        <p className="text-surface-variant font-body-lg text-body-lg mb-10 max-w-xl mx-auto">
          Sumate a las decenas de comercios locales que ya transicionaron con
          éxito al comercio digital moderno con nuestra ayuda.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-secondary text-on-secondary px-10 py-5 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
            Agendar mi Configuración
          </button>
          <button className="bg-transparent border border-surface-variant text-surface-variant px-10 py-5 rounded-lg font-bold text-lg hover:bg-surface-variant hover:text-primary transition-all">
            Ver Casos de Éxito
          </button>
        </div>
      </div>
    </section>
  );
}
