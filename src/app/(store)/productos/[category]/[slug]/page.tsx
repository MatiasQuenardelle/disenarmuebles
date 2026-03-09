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

              <a
                href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent(`Hola! Me interesa consultar por: ${product.name}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
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
