const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCCCuMT1rD0vTeZ3PLFnp-g5qdrB4-E9Lcln_gAb6U0VK_dDuNteMIYjmqp94faPR5XBhef67Q_79_mYLxTJdbopVt8MzhFoxGUyPsz-E_igRWH6CahzAxu2JRhQ4SbaPo3R1c4xKfGOGOCYVFPtXNWTsf7Ozyo5CtsARn0LlHrjexsNp-qbcauH80h7tmt4Q7muoUWrRYiQ1unjonSUmxA_VqVdpy3Hl12G-dKoL_4s0KG8G5swKaV3iNaT2kPw8rdD-AXCUAQdBM";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container rounded font-label-md text-label-md mb-6 uppercase tracking-wider">
            LANZAMIENTO RÁPIDO
          </span>

          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-stack-md leading-tight">
            Tu negocio online en 7 días
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
            Soluciones de e-commerce profesionales para comercios locales. Lanzá
            tu tienda con soporte experto y una plataforma diseñada para vender.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-md text-label-md hover:shadow-lg hover:scale-105 transition-all"
            >
              Ver Planes
            </a>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all">
              Reservar Consulta
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-secondary-fixed opacity-10 rounded-full blur-3xl -z-10 translate-x-12 translate-y-12" />
          <img
            src={HERO_IMG}
            alt="Propietaria de negocio local sonriendo con tablet en su tienda"
            className="rounded-xl shadow-2xl border border-white w-full object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}
