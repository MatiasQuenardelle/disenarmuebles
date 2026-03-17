import Image from "next/image";
import Link from "next/link";
import { valueProps, siteInfo } from "@/data/site";
import { getHeroProducts, getComplementaryProducts } from "@/data/helpers";
import { googleReviews, googleReviewsStats } from "@/data/reviews";
import { faqs } from "@/data/faq";
import { HeroProductCard, CompactProductCard } from "@/app/components/ProductCard";
import FAQAccordion from "@/app/components/FAQAccordion";
import { LocalBusinessJsonLd } from "@/app/components/JsonLd";

const valuePropIcons: Record<string, React.ReactNode> = {
  "Fabricación Propia": (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  "Materiales Premium": (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  ),
  "Entrega con Armado": (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.149-.504 1.149-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-2.25m-7.5 0v7.875m0-7.875h-3.375m0 0c-.621 0-1.125.504-1.125 1.125v4.5m4.5-5.625h8.25m-8.25 0l-1.5-4.875M4.5 14.25v-2.625" />
    </svg>
  ),
  "Garantía 12 Meses": (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

export default function Home() {
  const heroProducts = getHeroProducts();
  const complementaryProducts = getComplementaryProducts();

  return (
    <>
      <LocalBusinessJsonLd />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden px-6 py-28 sm:py-36">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-brand-light/10 blur-3xl" />

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-brand">
              {siteInfo.tagline}
            </p>
            <h2 className="max-w-xl font-heading text-4xl font-semibold leading-[1.1] text-warm-brown sm:text-5xl lg:text-6xl">
              {siteInfo.heroHeading}
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-text-muted">
              {siteInfo.heroDescription}
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/productos"
                className="btn-brand rounded-full px-10 py-4 text-center text-sm font-semibold tracking-wide text-white"
              >
                Ver Productos
              </Link>
              <a
                href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent("Hola! Me interesa consultar por sus productos.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-brand/30 px-10 py-4 text-center text-sm font-semibold tracking-wide text-warm-brown transition-all hover:border-brand hover:bg-brand/5"
              >
                Contactanos
              </a>
            </div>
          </div>
          <div className="relative w-full max-w-lg flex-1 lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-warm-brown/10">
              <Image
                src={siteInfo.heroImage}
                alt={`${siteInfo.name} - Showroom`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative frame */}
            <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-brand/15" />
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="relative border-y border-brand-light/20 bg-cream-dark px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item) => (
            <div key={item.title} className="group text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand/15">
                {valuePropIcons[item.title] ?? <span className="text-2xl">{item.icon}</span>}
              </div>
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
        <section className="px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.25em] text-brand">
              Nuestros Productos
            </p>
            <h3 className="line-accent mb-20 text-center font-heading text-3xl font-semibold text-warm-brown sm:text-4xl">
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
        <section className="bg-cream-dark px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h3 className="mb-2 font-heading text-2xl font-semibold text-warm-brown">
              Complementá tu dormitorio
            </h3>
            <p className="mb-8 text-sm text-text-muted">Accesorios y complementos para tu espacio</p>
            <div className="scrollbar-hide flex gap-5 overflow-x-auto pb-4">
              {complementaryProducts.map((product) => (
                <div key={product.slug} className="w-52 flex-shrink-0">
                  <CompactProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Google Reviews */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Reseñas de Google
          </p>
          <h3 className="line-accent mb-6 text-center font-heading text-3xl font-semibold text-warm-brown sm:text-4xl">
            Lo que dicen nuestros clientes
          </h3>

          {/* Rating summary */}
          <div className="mb-14 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="font-heading text-5xl font-bold text-warm-brown">
                {googleReviewsStats.averageRating}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-6 w-6 ${i < Math.round(googleReviewsStats.averageRating) ? "text-amber-400" : "text-brand-light/40"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm text-text-muted">
              Basado en{" "}
              <a
                href={siteInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand transition-colors hover:text-brand-dark"
              >
                {googleReviewsStats.totalReviews} reseñas en Google Maps
              </a>
            </p>
          </div>

          {/* Reviews grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {googleReviews.slice(0, 6).map((review) => (
              <div
                key={review.name}
                className="card-premium rounded-2xl border border-brand-light/20 bg-cream-dark p-7"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-amber-400" : "text-brand-light/40"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-text-muted">{review.date}</span>
                </div>
                <div className="review-quote mb-5 pl-2">
                  <p className="text-sm leading-relaxed text-text-muted italic">
                    {review.text}
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-brand-light/20 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                    {review.name.charAt(0)}
                  </div>
                  <p className="text-sm font-semibold text-warm-brown">{review.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to see all reviews */}
          <div className="mt-12 text-center">
            <a
              href={siteInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-light/30 px-6 py-3 text-sm font-semibold text-brand transition-all hover:border-brand hover:bg-brand/5 hover:text-brand-dark"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Ver las {googleReviewsStats.totalReviews} reseñas en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative overflow-hidden bg-cream-dark px-6 py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/[0.03] blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Sobre Nosotros
          </p>
          <h3 className="line-accent mb-8 font-heading text-3xl font-semibold text-warm-brown sm:text-4xl">
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
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
          >
            Conocé más sobre nosotros
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Preguntas Frecuentes
          </p>
          <h3 className="line-accent mb-14 text-center font-heading text-3xl font-semibold text-warm-brown sm:text-4xl">
            ¿Tenés dudas?
          </h3>
          <FAQAccordion faqs={faqs.slice(0, 4)} />
          <div className="mt-10 text-center">
            <Link
              href="/preguntas-frecuentes"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              Ver todas las preguntas
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Map / Location */}
      <section className="bg-cream-dark px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Ubicación
          </p>
          <h3 className="line-accent mb-6 text-center font-heading text-3xl font-semibold text-warm-brown sm:text-4xl">
            Visitá nuestro showroom
          </h3>
          <p className="mx-auto mb-12 max-w-lg text-center text-text-muted">
            Vení a conocer nuestros productos en persona. Te esperamos en nuestro
            showroom en {siteInfo.city}.
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Map embed */}
            <div className="overflow-hidden rounded-2xl border border-brand-light/20 shadow-lg shadow-warm-brown/5 lg:col-span-2">
              <iframe
                src={siteInfo.googleMapsEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Diseñar Muebles"
              />
            </div>

            {/* Location info */}
            <div className="flex flex-col gap-5">
              <div className="card-premium rounded-2xl border border-brand-light/20 bg-cream p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                    <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-warm-brown">Dirección</h4>
                </div>
                <p className="text-sm leading-relaxed text-text-muted">
                  {siteInfo.address}
                </p>
                <a
                  href={siteInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  Ver en Google Maps
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

              <div className="card-premium rounded-2xl border border-brand-light/20 bg-cream p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                    <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-warm-brown">Horarios</h4>
                </div>
                <p className="text-sm leading-relaxed text-text-muted">
                  {siteInfo.hours}
                </p>
              </div>

              <div className="card-premium rounded-2xl border border-brand-light/20 bg-cream p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                    <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-warm-brown">Teléfono</h4>
                </div>
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  {siteInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="relative overflow-hidden border-t border-brand-light/20 px-6 py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#25D366]/5 blur-3xl" />
        <div className="relative mx-auto max-w-xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-brand">
            Escribinos
          </p>
          <h3 className="mb-4 font-heading text-3xl font-semibold text-warm-brown sm:text-4xl">
            Contacto
          </h3>
          <p className="mb-12 text-text-muted">
            ¿Tenés alguna consulta? Escribinos por WhatsApp y te respondemos al
            instante.
          </p>
          <a
            href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent("Hola! Me interesa consultar por sus productos.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-10 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#25D366]/20 transition-all hover:bg-[#1da851] hover:shadow-xl hover:shadow-[#25D366]/30"
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
