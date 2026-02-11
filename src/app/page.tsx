import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <a href="#productos" className="transition-colors hover:text-brand">
              Productos
            </a>
            <a href="#nosotros" className="transition-colors hover:text-brand">
              Nosotros
            </a>
            <a href="#contacto" className="transition-colors hover:text-brand">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-brand">
              Fábrica de Muebles
            </p>
            <h2 className="max-w-xl text-4xl font-bold leading-tight text-warm-brown sm:text-5xl lg:text-6xl">
              Muebles con diseño y calidad argentina
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
              Fabricamos camas, sommiers y muebles funcionales con los mejores
              materiales. Diseño pensado para optimizar cada espacio de tu hogar.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#productos"
                className="rounded-full bg-brand px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Ver Productos
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-brand/40 px-8 py-3.5 text-center text-sm font-semibold text-warm-brown transition-colors hover:border-brand hover:bg-brand/5"
              >
                Contactanos
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full max-w-lg flex-1 overflow-hidden rounded-3xl shadow-xl lg:max-w-none">
            <Image
              src="/products/genesis/hero.jpeg"
              alt="Muebles Diseñar - Showroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="border-y border-brand-light/30 bg-cream-dark px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Fabricación Propia", desc: "Producción nacional con control de calidad en cada paso." },
            { title: "Materiales Premium", desc: "MDF de alta densidad, herrajes metálicos y canto ABS." },
            { title: "Entrega Armado", desc: "Se entregan armados, sin necesidad de instalación." },
            { title: "12 Meses Garantía", desc: "Respaldo total con garantía de 12 meses en todos los productos." },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h4 className="mb-2 text-lg font-semibold text-warm-brown">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Product */}
      <section id="productos" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand">
            Producto Destacado
          </p>
          <h3 className="mb-16 text-center text-3xl font-bold text-warm-brown sm:text-4xl">
            Base Box Funcional Génesis
          </h3>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/products/genesis/cajones-abiertos.jpeg"
                alt="Base Box Funcional Génesis - Vista con cajones abiertos"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="mb-4 text-2xl font-bold text-warm-brown">
                Dos muebles en uno
              </h4>
              <p className="mb-6 text-text-muted leading-relaxed">
                Diseño minimalista que combina base box sommier y cajonera.
                Ideal para optimizar el espacio de tu dormitorio con máxima
                funcionalidad y almacenamiento inteligente.
              </p>
              <ul className="mb-8 space-y-3 text-warm-brown-light">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  6 cajones de distintos tamaños
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Zapatero doble
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Baulera central con pistón neumático
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Soporta hasta 600 kg
                </li>
              </ul>
              <Link
                href="/productos/base-box-genesis"
                className="inline-flex w-fit rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Ver Producto Completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Row */}
      <section className="bg-cream-dark px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { src: "/products/genesis/estructura-frontal.jpeg", alt: "Estructura frontal" },
            { src: "/products/genesis/baulera-abierta.jpeg", alt: "Baulera abierta" },
            { src: "/products/genesis/estructura-completa.jpeg", alt: "Estructura completa" },
            { src: "/products/genesis/baulera-detalle.jpeg", alt: "Detalle baulera" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand">
            Sobre Nosotros
          </p>
          <h3 className="mb-6 text-3xl font-bold text-warm-brown sm:text-4xl">
            Diseñar Muebles
          </h3>
          <p className="text-lg leading-relaxed text-text-muted">
            Somos una fábrica argentina dedicada a la producción de camas y
            muebles de alta calidad. Con años de experiencia en el rubro,
            ofrecemos productos que combinan diseño, confort y durabilidad.
            Cada mueble es fabricado con materiales premium y pensado para
            optimizar los espacios de tu hogar.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contacto"
        className="border-t border-brand-light/30 bg-cream-dark px-6 py-24"
      >
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand">
            Escribinos
          </p>
          <h3 className="mb-4 text-3xl font-bold text-warm-brown sm:text-4xl">
            Contacto
          </h3>
          <p className="mb-10 text-text-muted">
            ¿Tenés alguna consulta? Escribinos y te respondemos a la brevedad.
          </p>
          <form className="flex flex-col gap-4 text-left">
            <input
              type="text"
              placeholder="Nombre"
              className="rounded-xl border border-brand-light/40 bg-cream px-4 py-3.5 text-sm text-warm-brown outline-none transition-colors placeholder:text-text-muted focus:border-brand"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border border-brand-light/40 bg-cream px-4 py-3.5 text-sm text-warm-brown outline-none transition-colors placeholder:text-text-muted focus:border-brand"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="rounded-xl border border-brand-light/40 bg-cream px-4 py-3.5 text-sm text-warm-brown outline-none transition-colors placeholder:text-text-muted focus:border-brand"
            />
            <button
              type="submit"
              className="rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Enviar Mensaje
            </button>
          </form>
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
