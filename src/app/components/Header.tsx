import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import CategoryDropdown from "./CategoryDropdown";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-light/15 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Logo />
        <nav className="hidden items-center gap-10 text-sm font-medium text-text-muted md:flex">
          <CategoryDropdown />
          <Link href="/nosotros" className="transition-colors hover:text-warm-brown">
            Nosotros
          </Link>
          <Link href="/preguntas-frecuentes" className="transition-colors hover:text-warm-brown">
            Preguntas Frecuentes
          </Link>
          <Link href="/contacto" className="transition-colors hover:text-warm-brown">
            Contacto
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
