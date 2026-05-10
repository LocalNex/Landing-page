const faqs = [
  {
    question: "¿Realmente puede estar mi tienda lista en una semana?",
    answer:
      "Sí, nuestro proceso está optimizado para que, una vez recibida la información de tus productos, la tienda básica esté operativa en 7 días hábiles.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "Para nada. Nosotros nos encargamos de toda la configuración técnica. El panel de control es intuitivo y fácil de usar, diseñado específicamente para dueños de negocios.",
  },
  {
    question: "¿Cómo funciona el cobro por WhatsApp?",
    answer:
      "En el plan Mensajero, tus clientes eligen productos y al finalizar se genera un mensaje automático a tu WhatsApp con el detalle del pedido para que coordines el pago y envío directamente.",
  },
  {
    question: "¿Puedo cambiar de plan más adelante?",
    answer:
      "Claro, podés escalar tu plan en cualquier momento a medida que tu negocio crezca y necesites funciones más avanzadas como pagos integrados o gestión de stock automática.",
  },
];

export default function FAQ() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Preguntas frecuentes
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map(({ question, answer }) => (
            <div
              key={question}
              className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-headline-md text-xl md:text-2xl text-on-background">
                    {question}
                  </span>
                  <span className="material-symbols-outlined text-secondary transition-transform group-open:rotate-180 shrink-0 ml-4">
                    expand_more
                  </span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant font-body-md text-body-md">
                  {answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
