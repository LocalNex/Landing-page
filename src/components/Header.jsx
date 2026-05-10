export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-20">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          LocalNex
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-200"
          >
            Servicios
          </a>
          <a
            href="#pricing"
            className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-200"
          >
            Precios
          </a>
          <a
            href="#"
            className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors duration-200"
          >
            Contacto
          </a>
        </nav>

        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md hover:scale-105 active:scale-95 transition-all duration-200">
          Comenzar
        </button>
      </div>
    </header>
  );
}
