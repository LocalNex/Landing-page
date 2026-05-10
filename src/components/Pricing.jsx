import { useState } from "react";

const plans = [
  {
    id: "mensajero",
    name: "El Mensajero",
    price: "$167.625",
    featured: false,
    features: [
      "Catálogo Digital",
      "Checkout por WhatsApp",
      "Gestión de Stock Flexible",
      "Soporte 24h",
    ],
    designOptions: [
      { label: "Diseño Genérico (Incluido)", value: "generic" },
      { label: "Personalización Premium (+$561.375)", value: "premium" },
    ],
    defaultDesign: "generic",
  },
  {
    id: "tienda",
    name: "La Tienda Completa",
    price: "$336.375",
    featured: true,
    features: [
      "Pagos Integrados",
      "Envíos Automatizados",
      "Sincronización de Stock",
      "Soporte Prioritario 4h",
    ],
    designOptions: [
      { label: "Diseño Genérico (Incluido)", value: "generic" },
      { label: "Personalización Premium (+$561.375)", value: "premium" },
    ],
    defaultDesign: "premium",
  },
  {
    id: "gestion",
    name: "Gestión Total",
    price: "$673.875",
    featured: false,
    features: [
      "Carga de Productos",
      "Actualizaciones Semanales",
      "Mantenimiento Técnico",
      "Account Manager Dedicado",
    ],
    designOptions: [
      { label: "Diseño Genérico (Incluido)", value: "generic" },
      { label: "Personalización Premium (Incluido)", value: "premium" },
    ],
    defaultDesign: "premium",
  },
];

function PricingCard({ plan }) {
  const [selectedDesign, setSelectedDesign] = useState(plan.defaultDesign);

  return (
    <div
      className={`flex flex-col p-8 rounded-xl transition-all ${
        plan.featured
          ? "border-2 border-secondary bg-surface-container-low shadow-xl scale-105 z-10"
          : "border border-outline-variant bg-white hover:border-secondary"
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-headline-md text-headline-md">{plan.name}</h3>
        {plan.featured && (
          <span className="bg-secondary text-on-secondary text-[10px] uppercase font-bold px-2 py-1 rounded">
            Popular
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-1 mb-6">
        <span
          className={`text-4xl font-bold ${plan.featured ? "text-secondary" : ""}`}
        >
          {plan.price}
        </span>
        <span className="text-on-surface-variant">/mes</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-sm">
              done
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div
        className={`border-t pt-6 mb-6 ${plan.featured ? "border-secondary/20" : "border-outline-variant"}`}
      >
        <p className="font-label-md text-label-md text-primary mb-2">
          Experiencia Visual
        </p>
        {plan.designOptions.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer mb-2"
          >
            <input
              type="radio"
              name={`design-${plan.id}`}
              value={option.value}
              checked={selectedDesign === option.value}
              onChange={() => setSelectedDesign(option.value)}
              className="accent-secondary"
            />
            <span className="text-sm">{option.label}</span>
          </label>
        ))}
      </div>

      <button
        className={`w-full py-4 font-bold rounded-lg transition-all ${
          plan.featured
            ? "bg-secondary text-on-secondary hover:shadow-lg"
            : "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary"
        }`}
      >
        Seleccionar Plan
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Planes para cada etapa
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Soluciones escalables diseñadas para cada etapa de tu camino
            empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
