import Link from "next/link";
import { siteInfo } from "@/data/site";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="border-t border-brand-light/15 bg-warm-brown px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-5 flex flex-col leading-none">
              <span className="font-heading text-2xl italic text-brand-light">Diseñar</span>
              <span className="-mt-0.5 text-[0.7rem] font-bold tracking-[0.3em] text-cream/80">
                MUEBLES
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream/50">
              Fábrica argentina de camas y muebles de calidad.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
              Categorías
            </h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/productos/${cat.slug}`}
                    className="text-sm text-cream/60 transition-colors hover:text-brand-light"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-cream/60 transition-colors hover:text-brand-light">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-sm text-cream/60 transition-colors hover:text-brand-light">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-sm text-cream/60 transition-colors hover:text-brand-light">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/preguntas-frecuentes" className="text-sm text-cream/60 transition-colors hover:text-brand-light">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-cream/60 transition-colors hover:text-brand-light">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/60">
              <li>{siteInfo.address}</li>
              <li>{siteInfo.hours}</li>
              <li>
                <a
                  href={`https://wa.me/${siteInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-light transition-colors hover:text-brand"
                >
                  WhatsApp: {siteInfo.whatsappDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h5 className="mb-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/40">
                Medios de Pago
              </h5>
              <ul className="space-y-1.5 text-xs text-cream/50">
                {siteInfo.paymentMethods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-6 text-center text-xs text-cream/30">
          <p>&copy; {new Date().getFullYear()} Diseñar Muebles. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
