import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategorySlugs } from "@/data/helpers";
import { HeroProductCard, CompactProductCard } from "@/app/components/ProductCard";
import Breadcrumbs from "@/app/components/Breadcrumbs";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: cat.seo.title,
    description: cat.seo.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const categoryProducts = getProductsByCategorySlugs(category);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Productos", href: "/productos" },
          { label: cat.name },
        ]}
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.2em] text-brand">
            {cat.name}
          </p>
          <h1 className="mb-4 text-center text-3xl font-bold text-warm-brown sm:text-4xl">
            {cat.name}
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-text-muted">
            {cat.description}
          </p>

          {/* Category pills */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <Link
              href="/productos"
              className="rounded-full border border-brand-light/40 px-5 py-2 text-sm font-medium text-text-muted transition-colors hover:border-brand hover:text-brand"
            >
              Todos
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/productos/${c.slug}`}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  c.slug === category
                    ? "bg-brand text-white"
                    : "border border-brand-light/40 text-text-muted hover:border-brand hover:text-brand"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product) =>
                product.isHero ? (
                  <HeroProductCard key={product.slug} product={product} />
                ) : (
                  <CompactProductCard key={product.slug} product={product} />
                )
              )}
            </div>
          ) : (
            <p className="text-center text-text-muted">
              Próximamente agregaremos productos a esta categoría.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
