import type { Metadata } from "next";
import Link from "next/link";
import ProductGallery from "../../components/ProductGallery";

export const metadata: Metadata = {
  title: "Base Box Funcional Génesis | Diseñar Muebles",
  description:
    "Base Box Funcional Génesis — Sommier y cajonera en un solo mueble. 6 cajones, zapatero doble, baulera central. Soporta 600 kg. Garantía 12 meses.",
};

export default function BaseBoxGenesisPage() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-brand-light/30 bg-cream/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl italic text-brand">
              Diseñar
            </span>
            <span className="-mt-1 text-xl font-bold tracking-widest text-warm-brown">
              MUEBLES
            </span>
          </Link>
          <nav className="hidden gap-8 text-sm font-medium text-text-muted md:flex">
            <Link href="/#productos" className="transition-colors hover:text-brand">
              Productos
            </Link>
            <Link href="/#nosotros" className="transition-colors hover:text-brand">
              Nosotros
            </Link>
            <Link href="/#contacto" className="transition-colors hover:text-brand">
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-brand-light/20 px-6 py-3">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/" className="transition-colors hover:text-brand">
              Inicio
            </Link>
            <span>/</span>
            <span className="text-warm-brown">Base Box Funcional Génesis</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <ProductGallery />

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brand">
                Base Box Sommier + Cajonera
              </p>
              <h1 className="mb-6 text-3xl font-bold text-warm-brown sm:text-4xl">
                Base Box Funcional Génesis
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-text-muted">
                Diseño minimalista ideal para optimizar espacio. Dos muebles en
                uno: base box sommier y cajonera con múltiples opciones de
                almacenamiento.
              </p>

              {/* Storage Features */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-warm-brown">
                  Almacenamiento
                </h3>
                <ul className="space-y-3 text-warm-brown-light">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    2 cajones clásicos
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    2 cajones internos
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    2 cajones amplios
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    Zapatero doble
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    Baulera central sin fondo
                  </li>
                  <li className="flex items-center gap-3 text-text-muted">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-light" />
                    Opcional: se puede agregar fondo de baulera
                  </li>
                </ul>
              </div>

              <Link
                href="/#contacto"
                className="inline-flex w-fit rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Consultar Precio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-brand-light/30 bg-cream-dark px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-3">
          {[
            { value: "600 kg", label: "Capacidad de carga" },
            { value: "12 meses", label: "Garantía" },
            { value: "3 módulos", label: "Se divide para transporte" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand">{stat.value}</p>
              <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand">
            Especificaciones
          </p>
          <h2 className="mb-16 text-center text-3xl font-bold text-warm-brown sm:text-4xl">
            Ficha Técnica
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "MDF 18mm",
                desc: "Tableros de MDF de alta densidad de 18mm con canto ABS para terminación premium.",
              },
              {
                title: "Guías Telescópicas",
                desc: "Guías telescópicas reforzadas para apertura suave y duradera de todos los cajones.",
              },
              {
                title: "Pistón Neumático",
                desc: "Pistón neumático con suspensión para la apertura asistida de la baulera central.",
              },
              {
                title: "Herrajes Metálicos",
                desc: "Herrajes metálicos de alta resistencia y patitas de 2cm para estabilidad total.",
              },
            ].map((spec) => (
              <div
                key={spec.title}
                className="rounded-2xl border border-brand-light/30 bg-cream-dark p-6"
              >
                <h4 className="mb-2 text-lg font-semibold text-warm-brown">
                  {spec.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-muted">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="border-t border-brand-light/30 bg-cream-dark px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand">
              Sin complicaciones
            </p>
            <h2 className="mb-8 text-3xl font-bold text-warm-brown sm:text-4xl">
              Entrega y Armado
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { title: "Armados", desc: "Se entregan completamente armados y listos para usar." },
                { title: "Sin Instalación", desc: "No requiere instalación ni herramientas especiales." },
                { title: "3 Módulos", desc: "Solo se apoyan los módulos entre sí, fácil y rápido." },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="mb-2 text-lg font-semibold text-warm-brown">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-warm-brown sm:text-4xl">
            ¿Te interesa la Génesis?
          </h2>
          <p className="mb-8 text-text-muted">
            Escribinos para consultar precio, disponibilidad y formas de pago.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Contactanos
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-light/30 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Diseñar Muebles. Todos los derechos reservados.</p>
          <p>Buenos Aires, Argentina</p>
        </div>
      </footer>
    </div>
  );
}
