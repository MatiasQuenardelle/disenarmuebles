import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-light/30 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden gap-8 text-sm font-medium text-text-muted md:flex">
          <Link href="/productos" className="transition-colors hover:text-brand">
            Productos
          </Link>
          <Link href="/nosotros" className="transition-colors hover:text-brand">
            Nosotros
          </Link>
          <Link href="/preguntas-frecuentes" className="transition-colors hover:text-brand">
            Preguntas Frecuentes
          </Link>
          <Link href="/contacto" className="transition-colors hover:text-brand">
            Contacto
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
