const DASHBOARD_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuATxnTwTqqdAza66u9Ocox2794r1rSIglWT30N_tEKS869RRU-gcbYdlemeLj6ai7_ap-piIirAn6yaLAQEUCE5k3EL3MmIsWBmduloLvwgviieFyF8Ov3knx9tath0uw5kLDzyOQ5P2Cz8NSH-3Ci5wPfDlCmnwrNbxQtX1tT9myoab3ZrGdrumM3iA-HcmPDtBmjjtrLDkRihYQEejcPvFhBjzXXjZjq4yHvugqBDpwEs7ytC4IhagP2wOT9hEmB58fPJbxDFwdU";

const checkItems = [
  "Seguimiento de stock en tiempo real",
  "Mensajería con clientes en un clic",
  "Reportes diarios de ventas automáticos",
];

export default function DashboardFeature() {
  return (
    <section className="bg-surface-container-high py-section-padding-mobile md:py-section-padding-desktop">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Dashboard mockup */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white p-4 rounded-xl shadow-2xl border border-outline-variant">
              <div className="flex items-center gap-2 mb-4 border-b border-outline-variant pb-4">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim" />
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <div className="ml-4 h-4 w-40 bg-surface-container rounded" />
              </div>
              <img
                src={DASHBOARD_IMG}
                alt="Mockup del Panel de Control"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">
              La Experiencia del Comerciante
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-6 leading-tight">
              Administración simple, resultados reales
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
              Nuestro panel de control elimina el ruido de los motores de
              e-commerce complejos. Administrá stock, ventas y clientes desde
              una interfaz intuitiva.
            </p>
            <ul className="space-y-4">
              {checkItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-label-md text-label-md text-on-surface"
                >
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
