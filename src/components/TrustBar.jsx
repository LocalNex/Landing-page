export default function TrustBar() {
  return (
    <section className="bg-surface-container-lowest py-12 border-y border-outline-variant">
      <div className="max-w-container-max mx-auto px-gutter">
        <p className="text-center font-label-md text-label-md text-on-surface-variant mb-8 uppercase tracking-widest">
          CONFIANZA DE LÍDERES LOCALES
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="h-8 w-32 bg-on-surface-variant rounded-sm opacity-20" />
          <div className="h-8 w-28 bg-on-surface-variant rounded-sm opacity-20" />
          <div className="h-8 w-36 bg-on-surface-variant rounded-sm opacity-20" />
          <div className="h-8 w-32 bg-on-surface-variant rounded-sm opacity-20" />
          <div className="h-8 w-24 bg-on-surface-variant rounded-sm opacity-20" />
        </div>
      </div>
    </section>
  );
}
