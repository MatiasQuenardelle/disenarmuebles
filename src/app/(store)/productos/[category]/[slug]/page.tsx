import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProductSlugs, getProductBySlug, getRelatedProducts, getComplementaryProducts } from "@/data/helpers";
import { getCategoryBySlug } from "@/data/categories";
import { siteInfo, SITE_URL } from "@/data/site";
import ProductGallery from "@/app/components/ProductGallery";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import StatBar from "@/app/components/StatBar";
import SpecGrid from "@/app/components/SpecGrid";
import ProductCTA from "@/app/components/ProductCTA";
import RelatedProducts from "@/app/components/RelatedProducts";
import { ProductJsonLd } from "@/app/components/JsonLd";

export function generateStaticParams() {
  return getAllProductSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.seo.title,
    description: product.seo.description,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      images: product.images[0]
        ? [{ url: `${SITE_URL}${product.images[0].src}`, alt: product.images[0].alt }]
        : [],
      type: "website",
      url: `${SITE_URL}/productos/${product.category}/${product.slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.category !== category) notFound();

  const cat = getCategoryBySlug(category);
  const related = getRelatedProducts(product);
  const complementary = product.isHero ? getComplementaryProducts() : [];

  return (
    <>
      <ProductJsonLd product={product} />

      <Breadcrumbs
        items={[
          { label: "Productos", href: "/productos" },
          { label: cat?.name ?? category, href: `/productos/${category}` },
          { label: product.name },
        ]}
      />

      {/* Product Hero */}
      <section className="px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <ProductGallery images={product.images} />

            <div className="flex flex-col justify-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brand">
                {product.subtitle}
              </p>
              <h1 className="mb-6 text-3xl font-bold text-warm-brown sm:text-4xl">
                {product.name}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-text-muted">
                {product.isHero ? product.longDescription : product.shortDescription}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-warm-brown">
                  Características
                </h3>
                <ul className="space-y-3 text-warm-brown-light">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-8">
                  <h3 className="mb-3 text-lg font-semibold text-warm-brown">
                    Medidas disponibles
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="rounded-full border border-brand-light/40 px-4 py-1.5 text-sm text-text-muted"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Methods */}
              <div className="mb-8 rounded-2xl border border-brand-light/20 bg-cream-dark p-6">
                <h3 className="mb-4 text-lg font-semibold text-warm-brown">
                  Medios de Pago
                </h3>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-3 text-sm text-warm-brown-light">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10">
                      <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                      </svg>
                    </span>
                    <span><strong className="text-warm-brown">Naranja y Cordobesa</strong> — hasta 12 cuotas</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-warm-brown-light">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10">
                      <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                      </svg>
                    </span>
                    <span><strong className="text-warm-brown">Visa y Mastercard</strong> bancarizadas — hasta 6 cuotas</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-warm-brown-light">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10">
                      <svg className="h-4 w-4 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </span>
                    <span><strong className="text-warm-brown">Efectivo o transferencia</strong> — precio con descuento</span>
                  </li>
                </ul>
              </div>

              <a
                href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(`Hola! Me interesa consultar por: ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand inline-flex w-fit items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white"
              >
                Consultar Precio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      {product.stats.length > 0 && <StatBar stats={product.stats} />}

      {/* Specs */}
      {product.isHero && product.specs.length > 0 && <SpecGrid specs={product.specs} />}

      {/* Delivery */}
      {product.isHero && product.delivery.length > 0 && (
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
                {product.delivery.map((item) => (
                  <div key={item.title}>
                    <h4 className="mb-2 text-lg font-semibold text-warm-brown">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <ProductCTA productName={product.name} />

      {/* Related Products */}
      <RelatedProducts title="Productos Relacionados" products={related} />

      {/* Complementary Products */}
      <RelatedProducts title="Complementá tu dormitorio" products={complementary} />
    </>
  );
}
