import Image from "next/image";
import ProductGallery from "./components/ProductGallery";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Diseñar Muebles
          </h1>
          <nav className="hidden gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
            <a href="#productos" className="hover:text-zinc-900 dark:hover:text-white">
              Productos
            </a>
            <a href="#nosotros" className="hover:text-zinc-900 dark:hover:text-white">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-zinc-900 dark:hover:text-white">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Calidad &amp; Diseño Argentino
            </p>
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
              Base Box Funcional Génesis
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Dos muebles en uno: base box sommier y cajonera. Diseño minimalista
              ideal para optimizar el espacio de tu dormitorio con máxima
              funcionalidad.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#productos"
                className="rounded-full bg-zinc-900 px-8 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Ver Detalles
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-zinc-300 px-8 py-3 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
              >
                Consultanos
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-lg flex-1 overflow-hidden rounded-2xl shadow-2xl lg:max-w-none">
            <Image
              src="/products/genesis/hero.jpeg"
              alt="Base Box Funcional Génesis con colchón y decoración"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section
        id="productos"
        className="border-t border-zinc-200 bg-zinc-50 px-6 py-20 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Base Box Funcional Génesis
          </h3>
          <p className="mx-auto mb-16 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
            Optimizá tu espacio con un diseño inteligente que combina descanso y almacenamiento en un solo mueble.
          </p>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Image Gallery */}
            <ProductGallery />

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h4 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
                  Almacenamiento Inteligente
                </h4>
                <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-900 dark:bg-white" />
                    2 cajones clásicos
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-900 dark:bg-white" />
                    2 cajones internos
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-900 dark:bg-white" />
                    2 cajones amplios
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-900 dark:bg-white" />
                    Zapatero doble
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-900 dark:bg-white" />
                    Baulera central sin fondo
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-900 dark:bg-white" />
                    <span>
                      Opcional: se puede agregar fondo de baulera
                    </span>
                  </li>
                </ul>
              </div>

              <a
                href="#contacto"
                className="inline-flex w-fit rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Consultar Precio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-4 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Ficha Técnica
          </h3>
          <p className="mx-auto mb-16 max-w-2xl text-center text-zinc-600 dark:text-zinc-400">
            Materiales de primera calidad y construcción robusta para un mueble que dura.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "MDF 18mm",
                desc: "Tableros de MDF de alta densidad de 18mm con canto ABS para terminación premium.",
              },
              {
                title: "Guías Telescópicas",
                desc: "Guías telescópicas reforzadas para apertura suave y duradera de cajones.",
              },
              {
                title: "Pistón Neumático",
                desc: "Pistón neumático con suspensión para la apertura asistida de la baulera.",
              },
              {
                title: "Herrajes Metálicos",
                desc: "Herrajes metálicos de alta resistencia y patitas de 2cm para estabilidad.",
              },
            ].map((spec) => (
              <div
                key={spec.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800"
              >
                <h4 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                  {spec.title}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                value: "600 kg",
                label: "Capacidad de carga",
              },
              {
                value: "12 meses",
                label: "Garantía",
              },
              {
                value: "3 módulos",
                label: "Se divide para transporte",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900"
              >
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Delivery info */}
          <div className="mt-12 rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-700 dark:bg-zinc-800">
            <h4 className="mb-4 text-xl font-bold text-zinc-900 dark:text-white">
              Entrega y Armado
            </h4>
            <div className="grid gap-4 text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-900 dark:bg-white" />
                Se entregan armados
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-900 dark:bg-white" />
                No requiere instalación
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-900 dark:bg-white" />
                Solo se apoyan los módulos entre sí
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="nosotros"
        className="border-t border-zinc-200 bg-zinc-50 px-6 py-20 dark:border-zinc-800 dark:bg-zinc-900"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Sobre Diseñar Muebles
          </h3>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Somos una marca argentina dedicada a la fabricación y venta de camas
            y muebles de alta calidad. Con años de experiencia en el rubro,
            ofrecemos productos que combinan diseño, confort y durabilidad para
            cada rincón de tu hogar.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Contacto
          </h3>
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">
            ¿Tenés alguna consulta sobre la Base Box Génesis? Escribinos y te respondemos a la brevedad.
          </p>
          <form className="flex flex-col gap-4 text-left">
            <input
              type="text"
              placeholder="Nombre"
              className="rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-zinc-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-zinc-500"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-zinc-500"
            />
            <button
              type="submit"
              className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Diseñar Muebles. Todos los derechos reservados.</p>
          <p>Buenos Aires, Argentina</p>
        </div>
      </footer>
    </div>
  );
}
