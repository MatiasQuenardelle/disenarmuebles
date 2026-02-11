export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
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
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Calidad &amp; Diseño Argentino
        </p>
        <h2 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
          Tu descanso empieza con el mueble perfecto
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Camas, sommiers y muebles diseñados para tu hogar. Fabricación
          nacional con los mejores materiales.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#productos"
            className="rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Ver Productos
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
          >
            Contactanos
          </a>
        </div>
      </section>

      {/* Products preview */}
      <section id="productos" className="border-t border-zinc-200 bg-zinc-50 px-6 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl">
          <h3 className="mb-12 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Nuestros Productos
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Sommiers", desc: "Descanso superior con la mejor tecnología en resortes y espuma." },
              { name: "Camas", desc: "Diseños modernos y clásicos para todos los estilos." },
              { name: "Respaldos", desc: "Respaldos tapizados que transforman tu dormitorio." },
            ].map((product) => (
              <div
                key={product.name}
                className="rounded-2xl border border-zinc-200 bg-white p-8 transition-shadow hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="mb-4 h-40 rounded-xl bg-zinc-100 dark:bg-zinc-700" />
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  {product.name}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="px-6 py-20">
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
      <section id="contacto" className="border-t border-zinc-200 bg-zinc-50 px-6 py-20 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-xl text-center">
          <h3 className="mb-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Contacto
          </h3>
          <p className="mb-8 text-zinc-600 dark:text-zinc-400">
            ¿Tenés alguna consulta? Escribinos y te respondemos a la brevedad.
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
