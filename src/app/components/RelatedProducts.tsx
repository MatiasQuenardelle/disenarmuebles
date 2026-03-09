import type { Product } from "@/data/types";
import { HeroProductCard, CompactProductCard } from "./ProductCard";

export default function RelatedProducts({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  if (products.length === 0) return null;

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-8 text-2xl font-bold text-warm-brown">{title}</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) =>
            product.isHero ? (
              <HeroProductCard key={product.slug} product={product} />
            ) : (
              <CompactProductCard key={product.slug} product={product} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
