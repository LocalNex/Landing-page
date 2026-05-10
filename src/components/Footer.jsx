const links = [
  { label: "Política de Privacidad", href: "#" },
  { label: "Términos de Servicio", href: "#" },
  { label: "Política de Cookies", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container mt-stack-lg">
      <div className="max-w-container-max mx-auto px-gutter py-section-padding-mobile md:py-16 flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          LocalNex
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-on-surface-variant hover:text-secondary transition-colors duration-200 font-body-md text-body-md"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="text-on-surface font-body-md text-body-md opacity-70">
          © 2024 LocalNex Solutions. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
