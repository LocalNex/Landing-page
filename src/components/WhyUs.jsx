const features = [
  {
    icon: "rocket_launch",
    title: "Configuración Experta",
    description:
      "Nosotros armamos todo por vos para que solo te preocupes por vender. Nuestros ingenieros se encargan de lo técnico.",
  },
  {
    icon: "storefront",
    title: "Foco en el Negocio Local",
    description:
      "Flujos de trabajo diseñados para las necesidades de comercios de barrio y servicios.",
  },
  {
    icon: "support_agent",
    title: "Soporte de Confianza",
    description:
      "Atención personalizada 24/7 para que tu tienda nunca deje de funcionar.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            ¿Por qué LocalNex?
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
          {features.map(({ icon, title, description }) => (
            <div
              key={title}
              className="p-stack-lg bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-secondary-container/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  {icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4">{title}</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
