import Image from "next/image";
import Link from "next/link";
import { valueProps, siteInfo } from "@/data/site";
import { getHeroProducts, getComplementaryProducts } from "@/data/helpers";
import { testimonials } from "@/data/testimonials";
import { faqs } from "@/data/faq";
import { HeroProductCard, CompactProductCard } from "@/app/components/ProductCard";
import FAQAccordion from "@/app/components/FAQAccordion";
import { LocalBusinessJsonLd } from "@/app/components/JsonLd";

export default function Home() {
  const heroProducts = getHeroProducts();
  const complementaryProducts = getComplementaryProducts();

  return (
    <>
      <LocalBusinessJsonLd />

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
              <Link
                href="/productos"
                className="rounded-full bg-brand px-8 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Ver Productos
              </Link>
              <a
                href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent("Hola! Me interesa consultar por sus productos.")}`}
                target="_blank"
                rel="noopener noreferrer"
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
          {valueProps.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mb-3 text-3xl">{item.icon}</div>
              <h4 className="mb-2 text-lg font-semibold text-warm-brown">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Products Grid */}
      {heroProducts.length > 0 && (
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand">
              Nuestros Productos
            </p>
            <h3 className="mb-16 text-center text-3xl font-bold text-warm-brown sm:text-4xl">
              Productos Destacados
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {heroProducts.map((product) => (
                <HeroProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Complementary Products */}
      {complementaryProducts.length > 0 && (
        <section className="bg-cream-dark px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <h3 className="mb-8 text-2xl font-bold text-warm-brown">
              Complementá tu dormitorio
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {complementaryProducts.map((product) => (
                <div key={product.slug} className="w-48 flex-shrink-0">
                  <CompactProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand">
              Testimonios
            </p>
            <h3 className="mb-16 text-center text-3xl font-bold text-warm-brown sm:text-4xl">
              Lo que dicen nuestros clientes
            </h3>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-brand-light/30 bg-cream-dark p-6"
                >
                  <p className="mb-4 text-text-muted leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-warm-brown">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About */}
      <section className="bg-cream-dark px-6 py-24">
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
          <Link
            href="/nosotros"
            className="mt-8 inline-block text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Conocé más sobre nosotros →
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand">
            Preguntas Frecuentes
          </p>
          <h3 className="mb-12 text-center text-3xl font-bold text-warm-brown sm:text-4xl">
            ¿Tenés dudas?
          </h3>
          <FAQAccordion faqs={faqs.slice(0, 4)} />
          <div className="mt-8 text-center">
            <Link
              href="/preguntas-frecuentes"
              className="text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              Ver todas las preguntas →
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="border-t border-brand-light/30 bg-cream-dark px-6 py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand">
            Escribinos
          </p>
          <h3 className="mb-4 text-3xl font-bold text-warm-brown sm:text-4xl">
            Contacto
          </h3>
          <p className="mb-10 text-text-muted">
            ¿Tenés alguna consulta? Escribinos por WhatsApp y te respondemos al
            instante.
          </p>
          <a
            href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent("Hola! Me interesa consultar por sus productos.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1da851]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
