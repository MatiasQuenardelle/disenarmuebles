import Link from "next/link";
import { siteInfo } from "@/data/site";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="border-t border-brand-light/30 bg-cream-dark px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex flex-col">
              <span className="font-serif text-2xl italic text-brand">Diseñar</span>
              <span className="-mt-1 text-xl font-bold tracking-widest text-warm-brown">
                MUEBLES
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-muted">
              Fábrica argentina de camas y muebles de calidad.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-warm-brown">
              Categorías
            </h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/productos/${cat.slug}`}
                    className="text-sm text-text-muted transition-colors hover:text-brand"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-warm-brown">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-text-muted transition-colors hover:text-brand">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-sm text-text-muted transition-colors hover:text-brand">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-sm text-text-muted transition-colors hover:text-brand">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-sm text-text-muted transition-colors hover:text-brand">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-text-muted transition-colors hover:text-brand">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-warm-brown">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>{siteInfo.address}</li>
              <li>{siteInfo.hours}</li>
              <li>
                <a
                  href={`https://wa.me/${siteInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand hover:text-brand-dark transition-colors"
                >
                  WhatsApp: {siteInfo.whatsappDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                Medios de Pago
              </h5>
              <ul className="space-y-1 text-xs text-text-muted">
                {siteInfo.paymentMethods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-brand-light/30 pt-6 text-center text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} Diseñar Muebles. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
